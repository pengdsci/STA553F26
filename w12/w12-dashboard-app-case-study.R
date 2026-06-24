
#
# This is a Shiny web application. You can run the application by clicking
# the 'Run App' button above.
#
# Find out more about building applications with Shiny here:
#
#    https://shiny.posit.co/
#
library(shiny)
library(shinydashboard)
library(ggplot2)
library(plotly)
library(dplyr)
library(DT)

##########################
#        Define UI
##########################
ui <- dashboardPage(
  dashboardHeader(
    title = "Iris Data Dashboard",
    tags$li(class = "dropdown", style = "background-color: #6E3061;")
  ),
  dashboardSidebar(
    tags$head(
      tags$style(HTML("
        .skin-blue .main-header .logo {
          background-color: #6E3061;
        }
        .skin-blue .main-header .navbar {
          background-color: #177AAD;
        }
        .skin-blue .main-sidebar {
          background-color: #177AAD;
        }
        .skin-blue .sidebar-menu > li.active > a {
          border-left-color: #6E3061;
        }
        .content-wrapper, .right-side {
          background-color: #ffffff;
        }
        .box.box-solid.box-primary>.box-header {
          color: #fff;
          background: #6E3061;
        }
        .box.box-solid.box-primary {
          border-bottom-color: #6E3061;
          border-left-color: #6E3061;
          border-right-color: #6E3061;
          border-top-color: #6E3061;
        }
        /* Make table fill the entire panel */
        .dataTables_wrapper {
          margin: 0 !important;
          padding: 0 !important;
        }
        .box-body {
          padding: 0 !important;
        }
        .table-container {
          width: 100% !important;
          height: 100% !important;
        }
        #coefficientTable {
          width: 100% !important;
        }
        .dataTable {
          width: 100% !important;
        }
      "))
    ),
    sidebarMenu(
      id = "sidebar",
      menuItem("Data Explorer", tabName = "dashboard", icon = icon("dashboard")),
      radioButtons("species", "Select Species:",
                   choices = c("All Species" = "all",
                               "Setosa" = "setosa",
                               "Versicolor" = "versicolor",
                               "Virginica" = "virginica"),
                   selected = "all"),
      br(),
      selectInput("Y", "Response Variable (Y):",
                  choices = names(iris)[1:4],
                  selected = "Sepal.Length"),
      selectInput("X", "Predictor Variable (X):",
                  choices = names(iris)[1:4],
                  selected = "Sepal.Width"),
      numericInput("newX", "New X Value for Prediction:",
                   value = 3.0, step = 0.1),
      br(),
      div(style = "text-align: center; padding: 10px;",
          img(src = "https://github.com/pengdsci/sta553/blob/main/image/goldenRamLogo.png?raw=true",
              height = 80, width = 80, style = "border-radius: 10px;"),
          br(),
          br(),
          HTML('<p style="font-family:Courier; color:Red; font-size: 20px;"><center>
                 <font size =2> <a href="mailto:cpeng@wcupa.edu">
                 <font color="gold">Report bugs to C. Peng </font></a> </font></center></p>')
      )
    )
  ),
  dashboardBody(
    fluidRow(
      column(6,
             box(
               title = "Scatter Plot with Regression & Prediction",
               status = "primary",
               solidHeader = TRUE,
               width = 12,
               plotlyOutput("scatterPlot", height = "400px")
             )
      ),
      column(6,
             box(
               title = "Residual Plot",
               status = "primary",
               solidHeader = TRUE,
               width = 12,
               plotlyOutput("residualPlot", height = "400px")
             )
      )
    ),
    fluidRow(
      column(6,
             box(
               title = "Distribution Plot (Kernel Density)",
               status = "primary",
               solidHeader = TRUE,
               width = 12,
               plotlyOutput("distributionPlot", height = "400px")
             )
      ),
      column(6,
             box(
               title = "Model Summary",
               status = "primary",
               solidHeader = TRUE,
               width = 12,
               div(class = "table-container",
                   DTOutput("coefficientTable")
               )
             )
      )
    )
  )
)

#########################################
#        Define server logic
#########################################
server <- function(input, output, session) {
  
  # Reactive data based on species selection
  filteredData <- reactive({
    if (input$species == "all") {
      return(iris)
    } else {
      return(iris[iris$Species == input$species, ])
    }
  })
  
  # Reactive expressions for X and Y to ensure they're different
  # Reactive context: reactive({...}) creates a reactive expression that 
  # automatically re-executes whenever input$X or input$Y changes.
  xVar <- reactive({
    if (input$X == input$Y) {
      other_vars <- setdiff(names(iris), input$Y) # gets all column names in iris 
      # except the one selected for Y.
      if (length(other_vars) > 0) {
        return(other_vars[1])  # picks the first available alternative column to use as X.
      } else {
        return(input$X)  # If no alternatives exist (shouldn't happen with iris), 
        # it falls back to input$X as a safety measure.
      }
    } else {
      return(input$X)   # If they are different: It simply returns the user's selection (input$X).
    }
  })  
  
  # A simple wrapper that returns the user's Y selection.
  # Even though it's just return(input$Y), making it reactive ensures that any 
  # downstream code using yVar() will automatically update when the user changes input$Y
  yVar <- reactive({
    return(input$Y)
  })
  
  # Fit linear model
  model <- reactive({
    data <- filteredData()  # Retrieves the current filtered dataset (e.g., after user applies 
    # filters like selecting species or numeric ranges).
    # Gets the current X (predictor) and Y (response) variable names using the validation logic defined earlier.
    x <- xVar()  
    y <- yVar()
    
    if (x != y && nrow(data) > 0) {
      form <- as.formula(paste(y, "~", x))  # Constructs the model formula dynamically as a string, 
      # then converts to formula object.
      lm(form, data = data)    #   Fits ordinary least squares (OLS) linear regression model.
    } else {
      NULL
    }
  })
  
  # Prediction
  prediction <- reactive({
    mod <- model()
    if (!is.null(mod)) {
      x <- xVar()
      new_data <- data.frame(x = input$newX)
      names(new_data) <- x
      # Error handling wrapper that catches any prediction errors and returns NA instead of crashing the app.
      tryCatch({
        predict(mod, newdata = new_data, interval = "prediction", level = 0.95)
      }, error = function(e) {
        return(NA)
      })
    } else {
      NA
    }
  })
  
  # Output: Scatter plot with regression and prediction
  output$scatterPlot <- renderPlotly({
    data <- filteredData()
    x <- xVar()
    y <- yVar()
    
    cb_colors <- c("#E69F00", "#56B4E9", "#009E73", "#F0E442", "#0072B2", "#D55E00", "#CC79A7")
    
    p <- plot_ly()
    
    if (input$species == "all") {
      species_levels <- unique(data$Species)
      for (i in seq_along(species_levels)) {
        sp <- species_levels[i]
        sp_data <- data[data$Species == sp, ]
        p <- p %>% add_trace(
          x = sp_data[[x]], 
          y = sp_data[[y]],
          type = 'scatter', 
          mode = 'markers',
          marker = list(size = 8, opacity = 0.7, color = cb_colors[i]),
          name = sp,
          text = sp,
          hovertemplate = paste('X: %{x:.2f}<br>Y: %{y:.2f}<br>Species: %{text}')
        )
      }
    } else {
      p <- p %>% add_trace(
        x = data[[x]], 
        y = data[[y]],
        type = 'scatter', 
        mode = 'markers',
        marker = list(size = 8, opacity = 0.7, color = "#0072B2"),
        name = input$species,
        text = input$species,
        hovertemplate = paste('X: %{x:.2f}<br>Y: %{y:.2f}<br>Species: %{text}')
      )
    }
    
    mod <- model()
    if (!is.null(mod) && x != y) {
      x_range <- seq(min(data[[x]], na.rm = TRUE), 
                     max(data[[x]], na.rm = TRUE), 
                     length.out = 100)
      pred_data <- data.frame(x = x_range)
      names(pred_data) <- x
      pred_vals <- predict(mod, newdata = pred_data)
      
      p <- p %>% add_trace(
        x = x_range, 
        y = pred_vals,
        type = 'scatter', 
        mode = 'lines',
        line = list(color = '#D55E00', width = 2),
        name = 'Regression Line'
      )
      
      pred <- prediction()
      if (length(pred) > 0 && !is.na(pred[1]) && is.finite(pred[1])) {
        newX <- input$newX
        p <- p %>% add_trace(
          x = c(newX), 
          y = c(pred[1]),
          type = 'scatter', 
          mode = 'markers',
          marker = list(size = 15, color = '#E69F00', 
                        symbol = 'star', line = list(width = 2)),
          name = 'Prediction',
          hovertemplate = paste('Predicted X: %{x:.2f}<br>Predicted Y: %{y:.2f}<br>')
        )
      }
    }
    
    p <- p %>% layout(
      xaxis = list(title = x),
      yaxis = list(title = y),
      hovermode = 'closest',
      legend = list(orientation = 'h', y = 1.05)
    )
    
    p
  })
  
  # Output: Residual plot - UPDATED TO MATCH SCATTER PLOT COLORS
  output$residualPlot <- renderPlotly({
    mod <- model()
    
    if (!is.null(mod)) {
      # Get residuals and fitted values
      residuals <- as.vector(resid(mod))
      fitted_vals <- as.vector(fitted(mod))
      
      # Get the original data with species information
      data <- filteredData()
      
      # Create a data frame with residuals, fitted values, and species
      plot_data <- data.frame(
        Fitted = fitted_vals,
        Residuals = residuals,
        Species = data$Species  # Add species information
      )
      
      cb_colors <- c("#E69F00", "#56B4E9", "#009E73", "#F0E442", "#0072B2", "#D55E00", "#CC79A7")
      
      # Create the residual plot
      p <- plot_ly()
      
      if (input$species == "all") {
        # When all species are selected, color by species
        species_levels <- unique(plot_data$Species)
        for (i in seq_along(species_levels)) {
          sp <- species_levels[i]
          sp_data <- plot_data[plot_data$Species == sp, ]
          
          p <- p %>% add_trace(
            data = sp_data,
            x = ~Fitted,
            y = ~Residuals,
            type = "scatter",
            mode = "markers",
            marker = list(
              size = 10,
              color = cb_colors[i],
              opacity = 0.7,
              line = list(color = cb_colors[i], width = 1)
            ),
            name = sp,
            text = ~paste("Fitted:", round(Fitted, 3), 
                          "<br>Residual:", round(Residuals, 3),
                          "<br>Species:", Species),
            hoverinfo = "text"
          )
        }
      } else {
        # When a single species is selected, use a single color
        p <- p %>% add_trace(
          data = plot_data,
          x = ~Fitted,
          y = ~Residuals,
          type = "scatter",
          mode = "markers",
          marker = list(
            size = 10,
            color = '#0072B2',
            opacity = 0.7,
            line = list(color = '#0072B2', width = 1)
          ),
          name = input$species,
          text = ~paste("Fitted:", round(Fitted, 3), 
                        "<br>Residual:", round(Residuals, 3),
                        "<br>Species:", Species),
          hoverinfo = "text"
        )
      }
      
      # Add horizontal line at y = 0
      x_min <- min(plot_data$Fitted)
      x_max <- max(plot_data$Fitted)
      
      p <- p %>% add_trace(
        x = c(x_min, x_max),
        y = c(0, 0),
        type = "scatter",
        mode = "lines",
        line = list(color = '#CC79A7', width = 2, dash = 'dash'),
        name = "Zero Line",
        hoverinfo = "none"
      )
      
      # Add layout
      p <- p %>% layout(
        xaxis = list(
          title = "Fitted Values",
          zeroline = FALSE,
          gridcolor = '#e0e0e0'
        ),
        yaxis = list(
          title = "Residuals",
          zeroline = FALSE,
          gridcolor = '#e0e0e0'
        ),
        hovermode = "closest",
        legend = list(
          orientation = "h",
          y = 1.05,
          x = 0.5,
          xanchor = "center"
        ),
        plot_bgcolor = 'rgba(255,255,255,1)',
        paper_bgcolor = 'rgba(255,255,255,1)'
      )
      
      return(p)
      
    } else {
      # Return empty plot with message
      plot_ly() %>%
        layout(
          annotations = list(
            text = "Cannot compute residuals<br>Predictor and response are the same",
            x = 0.5,
            y = 0.5,
            showarrow = FALSE,
            font = list(size = 16, color = "#6E3061")
          ),
          xaxis = list(showgrid = FALSE, zeroline = FALSE, showticklabels = FALSE),
          yaxis = list(showgrid = FALSE, zeroline = FALSE, showticklabels = FALSE)
        )
    }
  })
  
  # Output: Distribution plot with kernel density
  output$distributionPlot <- renderPlotly({
    data <- filteredData()
    y <- yVar()
    
    cb_colors <- c("#E69F00", "#56B4E9", "#009E73", "#F0E442", "#0072B2", "#D55E00", "#CC79A7")
    
    if (input$species == "all") {
      species_levels <- unique(data$Species)
      p <- plot_ly()
      
      for (i in seq_along(species_levels)) {
        sp <- species_levels[i]
        sp_data <- data[data$Species == sp, ]
        
        if (nrow(sp_data) > 1) {
          dens <- density(sp_data[[y]], na.rm = TRUE)
          
          col_rgb <- col2rgb(cb_colors[i])
          col_rgba <- sprintf("rgba(%d, %d, %d, 0.5)", 
                              col_rgb[1], col_rgb[2], col_rgb[3])
          
          p <- p %>% add_trace(
            x = dens$x, 
            y = dens$y,
            type = 'scatter', 
            mode = 'lines',
            fill = 'tozeroy',
            fillcolor = col_rgba,
            line = list(color = cb_colors[i], width = 2),
            name = sp
          )
        }
      }
      
      p <- p %>% layout(
        xaxis = list(title = y),
        yaxis = list(title = 'Density'),
        hovermode = 'closest',
        legend = list(orientation = 'h', y = 1.05)
      )
      
    } else {
      if (nrow(data) > 1) {
        dens <- density(data[[y]], na.rm = TRUE)
        
        p <- plot_ly(
          x = dens$x, 
          y = dens$y,
          type = 'scatter', 
          mode = 'lines',
          fill = 'tozeroy',
          fillcolor = 'rgba(86, 180, 233, 0.5)',
          line = list(color = '#56B4E9', width = 2),
          name = input$species
        )
        
        p <- p %>% layout(
          xaxis = list(title = y),
          yaxis = list(title = 'Density'),
          hovermode = 'closest'
        )
      } else {
        p <- plot_ly() %>% layout(
          annotations = list(
            text = "Not enough data for density plot",
            x = 0.5,
            y = 0.5,
            showarrow = FALSE,
            font = list(size = 14)
          ),
          xaxis = list(showgrid = FALSE, zeroline = FALSE, showticklabels = FALSE),
          yaxis = list(showgrid = FALSE, zeroline = FALSE, showticklabels = FALSE)
        )
      }
    }
    
    p
  })
  
  # Output: Coefficient table and goodness-of-fit - FIXED TO FILL PANEL
  output$coefficientTable <- renderDT({
    mod <- model()
    
    if (!is.null(mod)) {
      summary_mod <- summary(mod)
      
      # Get coefficients
      coefs <- summary_mod$coefficients
      
      # Create coefficient data frame
      coef_df <- data.frame(
        Term = rownames(coefs),
        Estimate = round(coefs[, 1], 4),
        `Std. Error` = round(coefs[, 2], 4),
        `t value` = round(coefs[, 3], 4),
        `p value` = round(coefs[, 4], 4),
        check.names = FALSE
      )
      
      # Get goodness-of-fit measures
      fstat <- summary_mod$fstatistic
      p_val <- if (!is.null(fstat)) {
        pf(fstat[1], fstat[2], fstat[3], lower.tail = FALSE)
      } else {
        NA
      }
      
      gof_df <- data.frame(
        Measure = c("R-squared", "Adjusted R-squared", 
                    "Residual Std. Error", "F-statistic", 
                    "df", "p-value"),
        Value = c(
          round(summary_mod$r.squared, 4),
          round(summary_mod$adj.r.squared, 4),
          round(summary_mod$sigma, 4),
          if (!is.null(fstat)) round(fstat[1], 4) else NA,
          if (!is.null(fstat)) paste(fstat[2], ",", fstat[3]) else NA,
          if (!is.na(p_val)) round(p_val, 4) else NA
        )
      )
      
      # Create a combined table with proper headers
      header1 <- data.frame(
        Term = "=== REGRESSION COEFFICIENTS ===",
        Estimate = "",
        `Std. Error` = "",
        `t value` = "",
        `p value` = "",
        check.names = FALSE,
        stringsAsFactors = FALSE
      )
      
      coef_rows <- coef_df
      
      header2 <- data.frame(
        Term = "=== GOODNESS-OF-FIT MEASURES ===",
        Estimate = "",
        `Std. Error` = "",
        `t value` = "",
        `p value` = "",
        check.names = FALSE,
        stringsAsFactors = FALSE
      )
      
      gof_rows <- data.frame(
        Term = gof_df$Measure,
        Estimate = as.character(gof_df$Value),
        `Std. Error` = "",
        `t value` = "",
        `p value` = "",
        check.names = FALSE,
        stringsAsFactors = FALSE
      )
      
      final_table <- rbind(header1, coef_rows, header2, gof_rows)
      
      # Render the table to fill the panel
      datatable(
        final_table,
        options = list(
          pageLength = 20,
          dom = 't',
          columnDefs = list(
            list(className = 'dt-center', targets = '_all'),
            list(width = '40%', targets = 0),
            list(width = '15%', targets = 1:4)
          ),
          autoWidth = TRUE,
          scrollX = FALSE,
          scrollY = FALSE,
          bFilter = FALSE,
          bInfo = FALSE,
          bPaginate = FALSE,
          ordering = FALSE
        ),
        rownames = FALSE,
        escape = FALSE,
        class = 'display compact cell-border'
      ) %>%
        formatStyle(
          'Term',
          target = 'row',
          backgroundColor = styleEqual(
            c("=== REGRESSION COEFFICIENTS ===", "=== GOODNESS-OF-FIT MEASURES ==="),
            c('#6E3061', '#6E3061')
          ),
          color = styleEqual(
            c("=== REGRESSION COEFFICIENTS ===", "=== GOODNESS-OF-FIT MEASURES ==="),
            c('white', 'white')
          ),
          fontWeight = styleEqual(
            c("=== REGRESSION COEFFICIENTS ===", "=== GOODNESS-OF-FIT MEASURES ==="),
            c('bold', 'bold')
          ),
          fontSize = styleEqual(
            c("=== REGRESSION COEFFICIENTS ===", "=== GOODNESS-OF-FIT MEASURES ==="),
            c('16px', '16px')
          )
        ) %>%
        formatStyle(
          columns = 1:5,
          fontSize = '14px'
        ) %>%
        formatStyle(
          columns = 2:5,
          backgroundColor = styleEqual(
            c("", "=== REGRESSION COEFFICIENTS ===", "=== GOODNESS-OF-FIT MEASURES ==="),
            c('#f9f9f9', '#6E3061', '#6E3061')
          )
        )
      
    } else {
      datatable(
        data.frame(
          Message = "Cannot compute model - predictor and response are the same or insufficient data"
        ),
        options = list(
          dom = 't',
          pageLength = 1,
          columnDefs = list(
            list(className = 'dt-center', targets = 0)
          ),
          bFilter = FALSE,
          bInfo = FALSE,
          bPaginate = FALSE,
          ordering = FALSE
        ),
        rownames = FALSE,
        colnames = ""
      ) %>%
        formatStyle(
          columns = 1,
          fontSize = '16px',
          color = '#6E3061'
        )
    }
  })
  
  # Observer for warnings
  observe({
    if (input$X == input$Y) {
      showNotification(
        "Warning: Predictor and response variables are the same. Using a different predictor automatically.",
        type = "warning",
        duration = 50
      )
    }
  })
}

########################################
#        Run the application
########################################
shinyApp(ui = ui, server = server)