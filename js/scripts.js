// JavaScript Document

jQuery(document).ready(function($){
	if( $('#footer > .foot-cont').hasClass('dt-hide-in-mobile') )
		$('.line-footer').addClass('dt-no-bg');
	
	if( !$('#footer > .foot-cont').length )
		$('.line-footer').addClass('dt-no-bg-atall');
})

//----------------------------------------------------------------------------------------------------------------

//misc
jQuery(document).ready( function($) {
	
    $("#nav-above").find('a').live( 'click', function () {
        if( jQuery(this).hasClass('no-act') )
            return true;
        
        if( jQuery(this).parent().hasClass('act') )
            return true;

        $("html"+( ! $.browser.opera ? ",body" : "")).animate({scrollTop: 0}, 500);
    });

    $('#footer').find('.widget').each( function(){
        $(this).wrap("<div class='one-fourth'></div>");
    });
	//make wrap for blockquote
	$("blockquote").wrap('<div class="blockquote-bg"><div class="quote-l"><div class="quote-r"></div></div></div>').parent(".blockquote-bg");
	$('.right-top li, .goto-post span, .comment-meta .ico-link').append('<div class="dot"></div>');
	if($('#header').siblings('.byOne').length){
		$('#header').addClass('for-byOne');
	}
	else{
		$('#header').removeClass('for-byOne');
	}
	//make wrap for images
	$('img.alignleft, .wp-caption img').each(function () {
		$(this).wrap('<div class="img-frame left"></div>')
	});
	$('a.alignleft').each(function () {
		$(this).addClass('img-frame left');
	});
	$('img.alignright').wrap('<div class="img-frame right"></div>');
	$('img.aligncenter').wrap('<div class="img-frame center"></div>');
	$('img.alignnone').wrap('<div class="img-frame none"></div>');
	$('.widget .post:first').addClass('first');
	if($('.boxed').length){
		$('#wrap').addClass('wrp-boxe');
	}
	else{
		$('#wrap').removeClass('wrp-boxe')
	}
	if($.browser.msie && $.browser.version < 9){
		$('.reviews-t').removeClass('p-r');
	}
	else {
		$('.reviews-t').addClass('p-r');
	}
	$('#nav li div ul li a').each(function(){
		var par = $(this).parent();
		$(this).find('.a-inner').detach().appendTo(par);
	})
	if($('.slider-shortcode.gal').siblings('#comments').length || $('.slider-shortcode.gal').siblings('.w-photo').length){}
	else{
		$('.slider-shortcode.gal').siblings('.gap').remove()
	}

});
//----------------------------------------------------------------------------------------------------------------------------------------------
jQuery(document).ready(function($){
	//Coda Slider for widgets and shortcodes
	
	$(".coda-slider").each(function(){

		var $this				= $(this),
			autoslideOn			= $(this).attr("data-autoslide_on") || 0,
			autoslideInterval	= $(this).attr("data-autoslide") || 7000;
		
		if(autoslideOn == "0") {
			autoslideOn = false;
		} else if (autoslideOn == "1") {
			autoslideOn = true;
		}
			$(this).codaSlider({
				autoSlide: autoslideOn,
				autoSlideInterval: autoslideInterval,
				crossLinking: false,
				dynamicArrowLeftText: "",
				dynamicArrowRightText: ""
			});
	});
	//**********************************************************************************
	//Nivo Slider homepage
	$("#slider").each(function(){

		var $this				= $(this),
			autoslideOn			= $(this).attr("data-autoslide_on") || 0,
			autoslideInterval	= $(this).attr("data-autoslide") || 7000;
		
		if(autoslideOn == "0") {
			autoslideOn = false;
		} else if (autoslideOn == "1") {
			autoslideOn = true;
		}

        $(this).nivoSlider({
			autoslide: autoslideOn,
            pauseTime: autoslideInterval,
			effect: 'boxRandom',
			animSpeed: 700,
			boxCols: 6,
			directionNav: false,
			controlNav: true,
			prevText: '',
			nextText: '',
			customNav: true,
			customNavPrev: '.big-slider .nivo-prevNav',
			customNavNext: '.big-slider .nivo-nextNav',
			beforeChange: function(){
				
				$('.grid').delay(100).fadeTo(500, 0.8).delay(200).fadeTo(700, 0);
			},
			afterChange: function(){}
			
		});
		$('.nivoSlider').append('<div class="grid"></div>').append('<div class="mask-l"></div><div class="mask-t"></div><div class="mask-r"></div><div class="mask-b"></div>');
	});
	//**********************************************************************************************************************************************************************************
	//Nivo Slider widgets
	$(".widget_slider").each(function(){
		var prev_slide = $(this).parents(".widget").find(".navig-small .SliderNamePrev"),
			next_slide = $(this).parents(".widget").find(".navig-small .SliderNameNext");

		var $this				= $(this),
			autoslideOn			= $(this).attr("data-autoslide_on") || 0,
			autoslideInterval	= $(this).attr("data-autoslide") || 7000;
		
		if(autoslideOn == "0") {
			autoslideOn = false;
		} else if (autoslideOn == "1") {
			autoslideOn = true;
		}

        $(this).nivoSlider({
			autoslide: autoslideOn,
            pauseTime: autoslideInterval,
			slices: 4,
			boxCols: 4,
			directionNav: false,
			controlNav: false,
			prevText: '',
			nextText: '',
			customNav: true,
			customNavPrev: prev_slide,
			customNavNext: next_slide
		});
		$('.widget_slider').append('<div class="mask-l"></div><div class="mask-t"></div><div class="mask-r"></div><div class="mask-b"></div>');
	});
	//****************************************************************************************************************
	
	$(".widget_slider2").each(function(){
		var prev_slide = $(this).parents(".widget").find(".navig-small .SliderNamePrev2"),
			next_slide = $(this).parents(".widget").find(".navig-small .SliderNameNext2");
		var $this				= $(this),
			autoslideOn			= $(this).attr("data-autoslide_on") || 0,
			autoslideInterval	= $(this).attr("data-autoslide") || 7000;
		
		if(autoslideOn == "0") {
			autoslideOn = false;
		} else if (autoslideOn == "1") {
			autoslideOn = true;
		}

        $(this).nivoSlider({
			autoslide: autoslideOn,
            pauseTime: autoslideInterval,
			slices: 4,
			boxCols: 4,
			directionNav: false,
			controlNav: false,
			prevText: '',
			nextText: '',
			customNav: true,
			customNavPrev: prev_slide,
			customNavNext: next_slide
		});
	});
	//***********************************************************************************************************************
	//Nivo Slider shortcodes
	$(".slider-short").each(function(){
		var prev_slide = $(this).parents(".widget").find(".navig-small .SliderNamePrev"),
			next_slide = $(this).parents(".widget").find(".navig-small .SliderNameNext");	
		var $this				= $(this),
			autoslideOn			= $(this).attr("data-autoslide_on") || 0,
			autoslideInterval	= $(this).attr("data-autoslide") || 7000;
		
		if(autoslideOn == "0") {
			autoslideOn = false;
		} else if (autoslideOn == "1") {
			autoslideOn = true;
		}

        $(this).nivoSlider({
			autoslide: autoslideOn,
            pauseTime: autoslideInterval,
			effect: 'boxRandom',
			animSpeed: 700,
			boxCols: 6,
			directionNav: false,
			controlNav: false,
			prevText: '',
			nextText: '',
			customNav: true,
			customNavPrev: '.shortcode-slide .nivo-prevNav',
			customNavNext: '.shortcode-slide .nivo-nextNav',
			beforeChange: function(){
				$('.grid').delay(100).fadeTo(500, 0.8).delay(200).fadeTo(700, 0);
			},
			afterChange: function(){
			}
		});
	});
	//*****************************************************************************************************************************
	$("#container").find('.slider-short').each(function(){
	
		var prev_slide = $(this).parents(".slider-shprtcode").find(".navig-nivo .nivo-prevNav"),
			next_slide = $(this).parents(".slider-shprtcode").find(".navig-nivo .nivo-nextNav");	
			
		var $this				= $(this),
			autoslideOn			= $(this).attr("data-autoslide_on") || 0,
			autoslideInterval	= $(this).attr("data-autoslide") || 7000;
		
		if(autoslideOn == "0") {
			autoslideOn = false;
		} else if (autoslideOn == "1") {
			autoslideOn = true;
		}

        $(this).nivoSlider({
			autoslide: autoslideOn,
            pauseTime: autoslideInterval,
			effect: 'boxRandom',
			animSpeed: 700,
			boxCols: 6,
			directionNav: false,
			controlNav: false,
			prevText: '',
			nextText: '',
			customNav: true,
			customNavPrev: '.shortcode-slide .nivo-prevNav',
			customNavNext: '.shortcode-slide .nivo-nextNav',
			beforeChange: function(){
				$('.grid').delay(100).fadeTo(500, 0.8).delay(200).fadeTo(700, 0);
			},
			afterChange: function(){
			}
		});
	});
	//*************************************************************************************************************************************
	//Drop down menu
	$('#nav li, #nav li a').find('> span').append('<span class="one-t"></span><span class="two-t"></span><span class="three-t"></span>')


	$("#nav").find('li').each(function () {

		if($(this).children('div').length <= 0) return;

		var menuTimeoutShow = false,
			menuTimeoutHide = false;

		$(this).hover(function() {
			var $this = $(this);
			$this.addClass("is-hovered");
			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);
			menuTimeoutShow = setTimeout(function() {
				if($this.hasClass("is-hovered")){
					$this.children('div').stop(true, true).fadeIn(400);
				}
			}, 200);
		}, 
		function() {
			var $this = $(this);
			$this.removeClass("is-hovered");
			clearTimeout(menuTimeoutShow);
			clearTimeout(menuTimeoutHide);
			menuTimeoutHide = setTimeout(function() {
				if(!$this.hasClass("is-hovered")){
					$this.children('div').stop(true, true).fadeOut(300);
				}
			}, 200);
		});
	})
	//**************************************************************************************************************************************
	//Android menu click
	function isiPhone(){
		return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
		);
	}
	window.deviceAgent = navigator.userAgent.toLowerCase();
	window.agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
	window.ua = navigator.userAgent.toLowerCase();
	window.isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	if(isAndroid || isiPhone()) {
	var hasTouch = ("ontouchstart" in window);
		if (hasTouch && document.querySelectorAll) {
			var i, len, element,
				dropdowns = document.querySelectorAll("#nav li.children, .menu-container li.children");
		 
			function menuTouch(event) {
				var i, len, noclick = !(this.dataNoclick);
				// reset flag on all links
				for (i = 0, len = dropdowns.length; i < len; ++i) {
					dropdowns[i].dataNoclick = false;
				}		 
				// set new flag value and focus on dropdown menu
				this.dataNoclick = noclick;
				this.focus();
			}		 
			function menuClick(event) {
				// if click isn't wanted, prevent it
				if (this.dataNoclick) {
					event.preventDefault();
				}
			}		 
			for (i = 0, len = dropdowns.length; i < len; ++i) {
				element = dropdowns[i];
				element.dataNoclick = false;
				element.addEventListener("touchstart", menuTouch, false);
				element.addEventListener("click", menuClick, false);
			}
		}		
	}
	//********************************************************************************************************************************

	$('.list-carousel, .reviews-t, .about').css('visibility', 'visible');
	//Carousel widgets and shortcodes
	$(".carouFredSel_1").each(function(){
		
		var $this				= $(this),
			autoslideOn			= $(this).attr("data-autoslide_on") || 0,
			autoslideInterval	= parseInt($(this).attr("data-autoslide") || 7000);
		
		if(autoslideOn == "0") {
			autoslideOn = false;
		} else if (autoslideOn == "1") {
			autoslideOn = true;
		}

		$(this).carouFredSel({
			width: "variable",
			items: 1,
			auto : {
				play			: autoslideOn,
				pauseDuration	: autoslideInterval,
				pauseOnHover	: true
			},
			prev: $(this).next(),
			next: $(this).next().next(),
			pagination: false,
			scroll: 1
		});

		var	$slides		= $("li", $this),
			slidesCount	= $slides.length,
			slideWidth	= $slides.eq(0).outerWidth(),
			slidesWidth	= slideWidth*slidesCount;
			wraperWidth	= $this.parents(".list-carousel").outerWidth()
		
		if (slidesWidth < ( wraperWidth + slideWidth/2 ) ){
			$this.parent().next().remove();
			$this.parent().next().remove();
		}
		
		setTimeout( function() {
			$this.parents(".list-carousel").css({"overflow": "visible"});
		}, 800);
		
		
	});
	//*********************************************************************************************************

});

//-----------------------------------------------------------------------------------------------------------------------------------
jQuery(document).ready(function($){
	$.fn.imageLoaded = function( callback ){
		var $this = this[0];

		if (typeof $this == "undefined") { return false };

		var timer  = setInterval(function(){
			if($this.complete == true) {
				clearInterval(timer);
				callback.call($this);
			}
		},200);

		return $this;
	};
	
	window.preloadImages = function () {
		var $my_images = $('#container img, #footer img, #slide img, #slider img, #aside img');
		var $my_images_bg = $('.photo img, .view img, .img-frame img, #slider img, .flexslider img, .alignleft-f img');
		$my_images.css({'opacity':'0','visibility':'visible'});
		$my_images_bg.css({'opacity':'0','visibility':'visible'});
		
		
		$my_images_bg.wrap('<div class="loading-image" />').css({'opacity':'0','visibility':'visible'});
	
		$my_images.each( function() {
			$(this).imageLoaded(function(){
				$(this).animate({'opacity':'1'}, 500, function(){
				});
			});
		});
		$my_images_bg.each( function() {
			$(this).imageLoaded(function(){
				$(this).animate({'opacity':'1'}, 500, function(){
					$(this).unwrap();
				});
			});
		});
	}
	
	window.preloadAjaxImages = function () {
		var $my_images = $('.dt-ajax-content img');
		var $my_images_bg = $('.photo img, .view img, .img-frame img, #slider img, .flexslider img, .alignleft-f img');
		$my_images.css({'opacity':'0','visibility':'visible'});
	
		$my_images_bg.wrap('<div class="loading-image" />').css({'opacity':'0','visibility':'visible'});
		$my_images.each( function() {
			$(this).imageLoaded(function(){
				$(this).animate({'opacity':'1'}, 500, function(){});
			});
		});
		$my_images_bg.each( function() {
			$(this).imageLoaded(function(){
				$(this).animate({'opacity':'1'}, 500, function(){
					$(this).unwrap();
				});
			});
		});
	}
	
	preloadImages();
	
	$(".logo-left .logo img, .logo-right .logo img").imageLoaded(function() {
		var logoHeight = $(this).outerHeight();
		var logoWidth = $(this).outerWidth();
		$(".contact-block").css({
			"margin-top": 20 + logoHeight/2 - $(".contact-block").outerHeight()/2,
			"visibility": "visible",
			'maxWidth':$('#header').width() - logoWidth
		});
	});
});
//-----------------------------------------------------------------------------------------------------------
//header elements
jQuery(function($){
	
})
//------------------------------------------------------------------------------------------------------------------------------------
/*Carousel height*/
jQuery( function($) {
	var wrap=$('.caroufredsel_wrapper ul').find(" > img");
	    var h_wrap = wrap.height();
	$(this).css('height', h_wrap); //'.caroufredsel_wrapper'
});
//------------------------------------------------------------------------------------------------------------------------------------
/*Widget find last element*/
jQuery( function($) {
	$(".widget").each(function () {
		$(this).find(".post:last-child").addClass('last');
	})
	$("#aside").find(".widget:last-child").addClass('last');
});
//------------------------------------------------------------------------------------------------------------------------------------
//Width for h1
jQuery( function($) {
	var inner_w = $('.inner-navig').width();
	if(('.inner-navig').length){
		$('#container > h1').css({
			'maxWidth':$('#container').width() - 40 - inner_w
		})
	}
	else{
	}
});
//------------------------------------------------------------------------------------------------------------------------------------
//Width for portfolio inner info
jQuery( function($) {	
	var anit_w = $('.slider-shortcode').width();
	if(!$('.slider-shortcode').length){
		$('.full-left').css({
			'maxWidth':100+'%'
		})		
	}
	else {
		$('.full-left').css({
			'maxWidth':960 - 50 -anit_w
		})
	}
});
//------------------------------------------------------------------------------------------------------------------------------------
/*nivo-caption width*/
jQuery( function($) {
	$(".slider-shortcode").each(function () {
		var im=$(this).find("img");
		var im_w = $(this).width();
		var im_h = im.attr("height");
		$('.nivo-caption', this).css({
			'width': im_w
		})
		$('.html-caption', this).css({
			'width': im_w -36
		}).show()
		$('.nivo-caption p, .html-caption p', this).css({
			'maxHeight': im_h/2 
		});		
	});
	//***************************************************************************************************************************************
	$(".widget").find(' .nivoSlider').each(function () {
		var im=$(this).find("img");
		var im_w = im.attr("width")-8;
		var im_h = im.attr("height");
		$('.nivo-caption', this).css('width', im_w, 'maxHeight', im_h/3);
	});
	//***************************************************************************************************************************************
	$(".full-width .slider-shortcode, .one-fourth .slider-shortcode, .half .slider-shortcode, .one-third .slider-shortcode, .two-thirds .slider-shortcode").each(function () {
		var im=$(this).find("img");
		var im_w = im.attr("width");
		var im_h = im.attr("height");
		$('.nivo-caption', this).css({
			'width': im_w - 8,
			'maxHeight': im_h/2
		});		
	});
});
//------------------------------------------------------------------------------------------------------------------------------------

/*Slider textwidget*/
jQuery( function($) {
	if (!('.caroufredsel_wrapper .textwidget').length){
		return false;
	} else
	var block_counter = 0;
	
	$('.caroufredsel_wrapper .textwidget').each(function() {
		var parent = $(this).parents('.list-carousel')
		var parent_old = parent.parent();
		var parent_class = parent_old.attr('class');
		if(agentID){
			if(!$('.widget-info', this).length){			
				$('> .textwidget-photo > a', this).on('click', function(e){		
					window.location = this.href;
					return false;
				})
			}
			else{			
				$('> .textwidget-photo > a', this).on('click', function(e){
					e.preventDefault();
					$('body > .'+show_me[0]).show();			
				})
			}
		}
		block_counter++;
		$(this).addClass('block_no_'+block_counter);
		$('.widget-info', this).appendTo('body').addClass('block_no_'+block_counter).addClass(parent_class);
	});
			show_me = '';
			$('.caroufredsel_wrapper .textwidget').hover(
				function() {
					$('body > .widget-info').hide();
					var w = $(this).find("img");
					var w_w = w.width();
					show_me = $(this).attr('class').match(/block_no\_.+?\b/);
					
					var offset = $(this).offset();
					if($.browser.msie && $.browser.version < 9){
						$('body > .'+show_me[0]).css({ top: offset.top - 10, left: offset.left -10, width: w_w}).fadeIn(300);	
					}
					else{
						$('body > .'+show_me[0]).css({ top: offset.top - 9, left: offset.left -9, width: w_w}).fadeIn(300);
						
					}

				} , function() {
					$('body > .'+show_me[0]).hover( function() { 
						//$(this).hide();
					} , function() {
						
						$(this).hide();
					}
				);
		});


				
				if (!('body > .widget-info').length){
					return false;
				} else{
				$( "body" ).live("touchend",	function(){
					$('body > .widget-info').hide();				
				});
				/*$('.textwidget a').each(function(){
					$(this).on('click', function(e){
						e.preventDefault();
						$('body > .'+show_me[0]).show();
					})
				})		*/		
				// Cancel all click events off of paragraphs.
				$('body > .widget-info').on('touchend', function(){
					return false
				});
				$('body > .widget-info').on('touchstart', function(){
					return true
				});
				}
				
	});
//------------------------------------------------------------------------------------------------------------------------------------
/*Coda slider autor*/

//Widget
jQuery( function($) {
	$(".textwidget").hover(
		function(){
			$('> .widget-info', this).stop().fadeTo(400, 1);
		}, function(){
			$('> .widget-info', this).stop().fadeTo(200, 0, function(){ $(this).hide() });
		}
	);
});
//------------------------------------------------------------------------------------------------------------------------------------
//PS fade info
jQuery( function($) {
	if (!('.ps-album').length){
		return false;
	} else {
	$(".ps-album").hover(
		function() {
			if ($.browser.msie && $.browser.version < 9)
			{
				$(".slide-desc", this).stop().show();
			} else {
				$(".slide-desc", this).stop().fadeTo(400, 1);
			}
		} , function() {
			if ($.browser.msie && $.browser.version < 9)
			{
				$(".slide-desc", this).stop().hide();
			} else {
				$(".slide-desc", this).stop().fadeTo(200, 0, function(){$(this).hide()});
			}
		});
	}
});
//------------------------------------------------------------------------------------------------------------------------------------

/*Highslide*/

hs.showCredits = 0;
		hs.padToMinWidth = true;		
		//hs.align = 'center';
		if (hs.registerOverlay) {
			// The white controlbar overlay
			hs.registerOverlay({
				thumbnailId: 'thumb3',
				overlayId: 'controlbar',
				position: 'top right',
				hideOnMouseOut: true
			});
			// The simple semitransparent close button overlay
			hs.registerOverlay({
				thumbnailId: 'thumb2',
				html: '<div class="closebutton"	onclick="return hs.close(this)" title="Close"></div>',
				position: 'top right',
				fade: 2 // fading the semi-transparent overlay looks bad in IE
			});
		}
		
		// ONLY FOR THIS EXAMPLE PAGE!
		// Initialize wrapper for rounded-white. The default wrapper (drop-shadow)
		// is initialized internally.
		if (hs.addEventListener && hs.Outline) hs.addEventListener(window, 'load', function () {
			new hs.Outline('rounded-white');
			new hs.Outline('glossy-dark');
		});
		
		// The gallery example on the front page
		var galleryOptions = {
			slideshowGroup: 'gallery',
			wrapperClassName: 'dark',
			//outlineType: 'glossy-dark',
			dimmingOpacity: 0.8,
			align: 'center',
			transitions: ['expand', 'crossfade'],
			fadeInOut: true,
			wrapperClassName: 'borderless floating-caption',
			/*marginLeft: 100,
			marginBottom: 60,*/
			captionEval: null
		};
		
		if (hs.addSlideshow){ hs.addSlideshow({
			slideshowGroup: 'gallery',
			interval: 5000,
			repeat: false,
			useControls: true,
			overlayOptions: {
				className: 'text-controls',
				position: 'bottom center',
				relativeTo: 'viewport',
				offsetY: -10
			}/*,
			thumbstrip: {
				position: 'left top',
				mode: 'vertical',
				relativeTo: 'viewport'
			}
		*/
		});}
		hs.Expander.prototype.onInit = function() {
			hs.marginBottom = (this.slideshowGroup == 'gallery') ? 60 : hs.marginBottom;
			theMobile();
		}
		
		// focus the name field
		hs.Expander.prototype.onAfterExpand = function() {
		
			if (this.a.id == 'contactAnchor') {
				var iframe = window.frames[this.iframe.name],
					doc = iframe.document;
				if (doc.getElementById("theForm")) {
					doc.getElementById("theForm").elements["name"].focus();
				}		
			}
		}	
		
		// Not Highslide related
		function frmPaypalSubmit(frm) {
			if (frm.os0.value == '') {
				alert ('Please enter your domain name');
				return false;
			}
			return true;
		}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Footer

jQuery( function($) {
	///
	$(window).resize(function () {
		h = $(window).outerHeight() - $("#top-bg").outerHeight() - $("#header").outerHeight() - $("#slide").outerHeight() - $(".line-footer").outerHeight() - $("#footer").outerHeight()-10;
		$("#container").css('min-height', h+"px");
	});
	$(window).trigger("resize");
	setTimeout(function() {
		$(window).trigger("resize");
	}, 1500);
	
});
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//do hover effect
//hover effect
jQuery( function($) {
	if(type_of_hover) {
		if($.browser.msie && $.browser.version < 9){
			$('a.img-frame, a.alignleft, a.alignright, a.alignnone, a.photo, .alignleft-f, .gallery-item a').append('<i class="fade"></i>')
		}
		else{
			$('a.img-frame, a.alignleft, a.alignright, a.alignnone, a.photo, .alignleft-f, .gallery-item a').append('<div class="mask mask-1"></div><div class="mask mask-2"></div><i></i>').addClass('view')
		}
	}
	else{
		
		$('a.img-frame, a.alignleft, a.alignright, a.alignnone, a.photo, .alignleft-f, .gallery-item a').append('<i class="fade"></i>')
	}
	window.doHover = function (){
		if(agentID || isAndroid || isiPhone()){
			$('i.fade').hide()
		}
		else {
			if(type_of_hover) {
				$('a.img-frame, a.alignleft, a.alignright, a.alignnone, a.photo, .alignleft-f, .gallery-item a').not(".no-hover").each(function () {
					if($.browser.msie && $.browser.version < 9){
						 var $span = $('i.fade', this);
							$span.hide();					
						  $(this).hover(function () {							  
							  $span.show();							
						  }, function () {
							  $span.hide();
						  });
					
					}
					else {
						var $_this = $(this);
						var im = $_this.find("img");
						var im_h = im.height();
						var im_w = im.width();
						/*jQuery('i', this).css('height', im_h);*/
						var myIm_h = parseInt(im_h);
						var myIm_w = parseInt(im_w);
						
						var a = myIm_w;
						var b = myIm_h;
						var x = (a+b)/(2*Math.sqrt(2));
						var y = (a+3*b)/(2*Math.sqrt(2));
						
						//initial position, masks do not overlay the image
						$(".mask-1", this).css({ 
											"height":x, 
											"width":y
						});
						$(".mask-2", this).css({ 
											"height":x,
											"width":y
						});						
						
						$(".mask-1", this).css({ 
										left:(-1)*0.5*y,
										top:(-1)*x
						});
						$(".mask-2", this).css({ 
											left:(a-0.5*y),
											top:b
						});
						
						//masks overlay the image
					
						$_this.hover(function(){
							$(".mask").css({
								'visibility':'visible' 
							})			
							$(".mask-1", this).stop().animate({
									left: (-1)*0.5*y+(3*a+b)/8,
									top:(-1)*x+(a+3*b)/8,
									avoidTransforms:true }, 300, function() {
								});
								
								$(".mask-2", this).stop().animate({
									left:(a-0.5*y) -(3*a+b)/8,
									top:b -(3*b+a)/8,
									avoidTransforms:true }, 300, function() {
								});
										
								$('i', this).stop(true, true).delay(200).animate({
										opacity: 1
									}, 500);
							}, function(){
									
								$('i', this).stop().animate({
									opacity: 0
								}, 50);
								$(".mask-1", this).stop().animate({
									left: (-1)*0.5*y,
									top:(-1)*x,
									avoidTransforms:true }, 400, function() {
								});
								
								$(".mask-2", this).stop().animate({
									left:(a-0.5*y),
									top:b,
									avoidTransforms:true }, 400, function() {
								});
									
					
						});
					};
				});
				
			}
			else {
				$('a.img-frame, a.alignleft, a.alignright, a.alignnone, a.photo, .alignleft-f, .gallery-item a').not(".no-hover").each(function () {
					  var $span = $('i.fade', this);
					 if ($.browser.msie && $.browser.version < 9){
						$span.hide();
					 }
					 else {
						$span.css('opacity', 0);
					 }
					  $(this).hover(function () {						  
						if ($.browser.msie && $.browser.version < 9)
						  $span.show();
						else
						$span.stop().fadeTo(500, 1);
					  }, function () {
						if ($.browser.msie && $.browser.version < 9)
						  $span.hide();
						else
						  $span.stop().fadeTo(500, 0);
					  });
					  
						var i=$(this).find(" > img");
						var i_w = i.width();
						var i_h = i.height();
						$('i.fade', this).css('width', i_w);
						$('i.fade', this).css('height', i_h);
					});
			}
		}
	
	}
	doHover()

})
//---------------------------------------------------------------------------------------------------------------------------------------------------
//max width for soc icons
jQuery( function($) {
	$('.soc-ico').css({
		'max-width' : $('.top-cont').width() - $('.right-top').width() - 20 +'px'
	})
});
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function initiate_parallax() {
    var options = {frameDuration:  15};
    if( arguments.length == 1 && typeof arguments[0] == 'object' ) {
        options = jQuery().extend( options, arguments[0] );
    }

	(function($) {
		$(window).resize( function () {
			var parallax_holder = $('#parallax');
			var parallax_holder_w = parallax_holder.width();
			var parallax_holder_h = parallax_holder.height();
			$('> li:nth-child(1)', parallax_holder).css({'width' : parallax_holder_w+30+'px' , 'height' : parallax_holder_h+20+'px' , 'left' : '-15px'});
			$('> li:nth-child(2)', parallax_holder).css({'width' : parallax_holder_w+50+'px' , 'height' : parallax_holder_h+40+'px' , 'left' : '-25px'});
			$('> li:nth-child(3)', parallax_holder).css({'width' : parallax_holder_w+90+'px' , 'height' : parallax_holder_h+60+'px' , 'left' : '-45px'});
			$('> li:nth-child(4)', parallax_holder).css({'width' : parallax_holder_w+130+'px' , 'height' : parallax_holder_h+80+'px' , 'left' : '-65px'});
			var isiPad = navigator.userAgent.match(/iPad/i) != null;
				if(isiPad || $(window).width() < 1130){
					$('#parallax').css('display', 'none');
				}
				else{
					$('#parallax').css('display', 'block');
					$('> li', parallax_holder).parallax( options );
				}
		});
		$(window).trigger("resize");
		
		if ($.browser.SafariMobile){
			 $("html").css({
			   "overflow" : "hidden"
			  });					
		}	
	})(jQuery);
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
jQuery( function($){
	$('.one-fourth .header, .one-fourth h2, .one-third .header, .one-third h2, .half .header, .half h2, .two-thirds .header, .two-thirds h2, .full-width .header, .full-width h2').each(function(){
		var $this = $(this);
		var nex = $this.next()
		var parent = $this.parent();
		var parent_width = parent.width();
		if(nex.hasClass('reviews-t') || nex.hasClass('partner-bg')){			
			$this.addClass('max-w');
			$this.css({
				maxWidth:parent_width-40
			});
		}
	})
	//********************************************************************************************************************************************************
	//Arrow slider for window < 1030
	$(window).resize(function () {
		var window_w = $(window).width();
		if(window_w < 1030){
			$('.navig-nivo, .oneByOne1').addClass('small');
		}
		else {
			$('.navig-nivo, .oneByOne1').removeClass('small');
		}
	});
	$(window).trigger("resize");

})
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// new ajax scripts
  
// comments form
function move_form_to(ee)
{
      ( function($) {
      var e = $("#form-holder").html();
      var tt = $("#form-holder .header").text();
      
      var sb =$("#form-holder .go_button").attr("title");
      
      var to_slide_up = ($(".comment #form-holder").length ? $("#form-holder") : $(".share_com"));
      
      to_slide_up.slideUp(500, function () {
         $("#form-holder").remove();
         
         ee.append('<div id="form-holder">'+e+'</div>');
         $("#form-holder .header").html(tt);
         $("#form-holder [valed]").removeAttr('valed');
         $("#form-holder .do-clear").attr('remove', 1);
		 
         $(".formError").remove();
         
         $("#form-holder").hide();
         
         to_slide_up = ($(".comment #form-holder").length ? $("#form-holder") : $(".share_com"));
         if (to_slide_up.hasClass('share_com')) $("#form-holder").show();
         
         to_slide_up.slideDown(500);
         
         if (ee.attr("id") != "form_prev_holder")
         {
            var eid = ee.parent().attr("id");
            if (!eid)
               eid = "";
            $("#comment_parent").val( eid.replace('comment-', '') );
         }
         else
         {
            $("#comment_parent").val("0");
         }
         
         //update_form_validation();
      });

      })(jQuery);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
jQuery(function ($) {
   $("#comments ").on('click', '.comments', function () {
      move_form_to( $(this).parent().parent() );
      return false;
   });
});
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
jQuery(document).ready( function($) {
    $('form a.do-clear').live( 'click', function() {
        var container = $(this).parents('form.uniform');
        if( container.length ) {
            $('.i-h > input, .t-h > textarea', container ).val('');
        }

		if ($(this).attr("remove") && !$(this).parents("#form_prev_holder").length) {
			move_form_to( $("#form_prev_holder") );
			$("#form_holder .do_clear").removeAttr('remove');
		}

        return false;
    });
});
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// new added
jQuery(document).ready( function($) {
    $(document).on( "click", ".go_submit, .go_button", function () {
      var e = $(this).parents("form");

      if( !e.attr("valed") && e.hasClass('ajaxing') ) {
        e.validationEngine({
            ajaxSubmit: true,
            ajaxSubmitFile: e.attr("action")
        });
      }else if( !e.attr("valed") ) {
        e.validationEngine();
      }

      e.attr("valed", "1");
      e.submit(); 

      return false;
   });
    
});
// end comments form
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function widget_add_hover() {
	jQuery(".textwidget").hover(
		function(){
			jQuery('> .widget-info', this).stop().fadeTo(400, 1);
		}, function(){
			jQuery('> .widget-info', this).stop().fadeTo(200, 0, function(){ jQuery(this).hide() });
		}
	);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function element_add_hover( element ) {
    
    if( typeof element == 'string' ) {
        element = jQuery(element);
    }
    
    var span;
    if( typeof arguments[1] == 'undefined' || typeof arguments[1] == 'number' ) {
        span = jQuery('>i.widget-inf', element);
    }else if( typeof arguments[1] == 'string' ) {
        span = jQuery(arguments[1], element);
    }else {
        span = arguments[1];
    }
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function portfolio_add_zoom( element ) {
    if( typeof element == 'string' ) {
        element = jQuery(element);
    }

    element.each(function(){
	});
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function list_to_grid() {	
    jQuery(".gallery-inner").fadeOut("fast", function() {
	    jQuery(this).fadeIn("fast").addClass("w-i");
		jQuery('.textwidget:first', this).removeClass('first')
        jQuery('.textwidget.text', this).each(function(){
	        jQuery(this).removeClass('text');
			jQuery('.info', this).each(function () {
			    jQuery(this).wrap("<div class='widget-info'></div>");
			});						
            jQuery('.textwidget-photo', this).each(function() {
		        jQuery(this).clone(true).prependTo(jQuery(this).parent(".textwidget").find(".widget-info"))
			});
			jQuery('.widget-info .info a.button', this).removeClass("button").addClass('details');
		});
        portfolio_add_zoom( jQuery('.widget-info', this) );
    });
	return false;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function grid_to_list() {
    $(".gallery-inner").fadeOut("fast", function() {
	    $(this).fadeIn("fast").addClass("t-l");
		$('.textwidget:first', this).addClass('first')
		$('.textwidget', this).each(function(){			
			$(this).addClass('text')
			$(this).append( $('.widget-info > .info', this))
			$('.widget-info', this).remove();
			$('.info a.details', this).removeClass("details").addClass('button')				
		});
	})		
	return false;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function add_hover_effect( element ) {
    if( typeof element == 'string' ) {
        element = jQuery(element);
    }

    if( (typeof arguments[1] == 'undefined') || arguments[1] ) {
		if(type_of_hover) {
			
			if(jQuery.browser.msie && jQuery.browser.version < 9){
				element.append('<i class="fade"></i>')
			}
			else{
				element.append('<div class="mask mask-1"></div><div class="mask mask-2"></div><i></i>').addClass('view')
			}			
		
		}
		else {
			element.append('<i class="fade"></i>');
		}
    }
	element.each(function () {
	});
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function isiPhone(){
	return (
		(navigator.platform.indexOf("iPhone") != -1) ||
		(navigator.platform.indexOf("iPod") != -1)
	);
}
if(isiPhone()) {
	jQuery('.fluid-width-video-wrapper').addClass('ip');
}
else{
	jQuery('.fluid-width-video-wrapper').removeClass('ip');
}
function add_i_height() {
	jQuery(".textwidget-photo a.photo").each(function () {
		doHover()
		var im = jQuery(this).find("img"),
			im_h = im.height(),
			im_w = im.width(),
			myIm_h = parseInt(im_h),
			myIm_w = parseInt(im_w);
			
	jQuery(this).next('.form-protect').css({
			'height': im_h, 
			'width': im_w
		});
		var form_w = jQuery(this).next('.form-protect').width();
		if(form_w < 230){
			jQuery(this).next('.form-protect').addClass('fourth')
		}
		else{
			jQuery(this).next('.form-protect').removeClass('fourth')
		}	
	});

	jQuery('.paginator-r a.prev').not('.no-act').hover(function(){
			jQuery(this).find('span.a-l-s').animate({				
				left: "-3px"
			},{queue:false,duration:200});
			
		}, function(){
			jQuery(this).find('span.a-l-s').animate({				
				left: "0px"
			},{queue:false,duration:200});
			
		});
		jQuery('.paginator-r a.next').not('.no-act').hover(function(){
			jQuery(this).find('span.a-l-s').animate({				
				left: "3px"
			},{queue:false,duration:200});
			
		}, function(){
			jQuery(this).find('span.a-l-s').animate({				
				left: "0px"
			},{queue:false,duration:200});
			
		});
	jQuery("<span class='a-l-s'></span><span class='a-r-s'></span>").appendTo(".paginator-r .prev, .paginator-r .next");
	
	jQuery('.textwidget-photo').each(function () {
		  var $span = jQuery('.form-protect', this);
		 if (jQuery.browser.msie && jQuery.browser.version < 9)
			$span.hide();
		 else
			$span.css('opacity', 0);
		  jQuery(this).hover(function () {
			  
			if (jQuery.browser.msie && jQuery.browser.version < 9)
			  $span.show();
			else
			$span.stop().fadeTo(500, 1);
		  }, function () {
			if (jQuery.browser.msie && jQuery.browser.version < 9)
			  $span.hide();
			else
			  $span.stop().fadeTo(500, 0);
		  });
		});
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function portfolio_add_cufon() {
    jQuery('.textwidget .info .head').each(function(){
		jQuery(this).clone().prependTo(jQuery(this).parent()).removeClass("head").addClass("hide-me");
	})		
	/*cufon_in_gall();*/
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// dt ajax object
function DT_PAGE_AJAX() {
    var used_hash = '';
    
    this.parse_hash = function( hash ) {
        if( -1 == hash.search(/\//) )
            return null;

        hash_arr = hash.split('/');
        
        if( hash_arr.length != 3 )
            return null;

        return hash_arr;
    }

    this.do_ajax = function( hash ) {
        hash = hash.slice(1);
        
        if( used_hash == hash ) {
            return false;
        }
        
        used_hash = hash;
        
        var cat_id = '', page = 1, layout = 'list';
        
        var hash_arr = this.parse_hash(hash);
        if( hash_arr ) {
            cat_id = hash_arr[0];
            page = hash_arr[1];
            layout = hash_arr[2]; 
        }else
            return false;

        jQuery('.dt-ajax-content').load( dt_ajax.ajaxurl, {
            action:         'dt_post_type_do_ajax',
            cat_id:         cat_id,
            paged:          page,
            post_id:        dt_ajax.post_id,
            layout:         layout,
            page_layout:    dt_ajax.page_layout,
            nonce:          dt_ajax.nonce 
        }, function() {
            if( jQuery(this).parent().next().is('#nav-above') )
                jQuery(this).parent().next().detach();
            jQuery('#nav-above', jQuery(this)).insertAfter(jQuery(this).parent());
            widget_add_hover();
            add_hover_effect(jQuery('a.photo ', this));
            if ( 'grid' == layout ) {
                jQuery(this).addClass("w-i");
                portfolio_add_zoom( jQuery('.widget-info', this) );		
            }
            add_i_height();
            portfolio_add_cufon();
			jQuery(window).attachHs();
			preloadAjaxImages();
        });
  
    }
}
window.doSize = function(){	
		
		if(jQuery.browser.msie && jQuery.browser.version < 9){}
		else{
			//size for hovers
			jQuery('a.img-frame, a.alignleft, a.alignright, a.alignnone, a.photo, .alignleft-f, .gallery-item a').each(function () {				  
				var i=jQuery(this).find(" img");
				var i_w = i.width();
				var i_h = i.height();
				jQuery('i.fade', this).css('width', i_w);
				jQuery('i.fade', this).css('height', i_h);
			});
		}
		/*Carousel height*/

		var wrap=jQuery('.caroufredsel_wrapper ul').find(" > img");
		var h_wrap = wrap.height();	
		jQuery(this).css('height', h_wrap); //'.caroufredsel_wrapper'
		//move soc-ico
		
		if(jQuery("html").width() < 998){
			jQuery(".soc-ico").detach().appendTo('#header').insertAfter('.contact-block');
			jQuery(".soc-ico").css({'visibility':'visible'});
			
		}
		else{
			jQuery(".soc-ico").detach().appendTo('.top-cont');
			jQuery(".soc-ico").css({'visibility':'visible'});
		}
		//make width container
		if(jQuery("html").width() < 998){
			jQuery('#container').removeClass('full-width');
		}
		else{
			jQuery('#container').addClass('full-width');
		}
		if(jQuery('#container').next('#aside').length || jQuery('#container').prev('#aside').length) {
			jQuery('#container').removeClass('full-width')
		}	
	}
jQuery(window).bind("popstate", function() {
    doSize();
	jQuery(window).trigger('resize');
});
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var dt_pajax_obj = new DT_PAGE_AJAX();

function dt_change_layout_hash() {
    var cur_hash = dt_pajax_obj.parse_hash(window.location.hash.slice(1));
    jQuery('.navig-category').children('.categ').each( function() {
        href = jQuery(this).attr('href').split('#');
        if( href && href.length == 2 ) {
            hash = dt_pajax_obj.parse_hash(href[1]);
            if( (hash && hash.length == 3) && (cur_hash && cur_hash.length == 3) ) {
                hash[0] = cur_hash[0];
                hash[1] = cur_hash[1];
                href[1] = hash.join('/');
                jQuery(this).attr('href', href.join('#'));
            }
        }
    });
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function dt_change_pagination_hash() {
    var cur_hash = dt_pajax_obj.parse_hash(window.location.hash.slice(1));
    jQuery('#nav-above').find('a').each( function() {
        href = jQuery(this).attr('href').split('#');
        if( href && href.length == 2 ) {
            hash = dt_pajax_obj.parse_hash(href[1]);
            if( (hash && hash.length == 3) && (cur_hash && cur_hash.length == 3) ) {
                hash[2] = cur_hash[2];
                hash[0] = cur_hash[0];
                href[1] = hash.join('/');
                jQuery(this).attr('href', href.join('#'));
            }
        }
    });
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function dt_replace( old_data, new_data ) {
    if( typeof old_data == 'array' && typeof new_data == 'array' ) {
        for( i=0;i<old_data.length;i++) {
            if( typeof new_data[i] != 'undefined' ) {
                old_data[i] = new_data[i];
            }
        }
    }else {
        old_data = new_data;
    }
    return old_data;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function dt_change_navigation_hash() {
    var cur_hash = dt_pajax_obj.parse_hash(window.location.hash.slice(1));
    jQuery('.navig-category').children('a.button').not('.categ').each( function() {
        href = jQuery(this).attr('href').split('#');
        if( href && href.length == 2 ) {
            hash = dt_pajax_obj.parse_hash(href[1]);
            if( (hash && hash.length == 3) && (cur_hash && cur_hash.length == 3) ) {
                hash[2] = cur_hash[2];
                href[1] = hash.join('/');
                jQuery(this).attr('href', href.join('#'));
            }
        }
    });
}
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function dt_portfolio_ajax() {    
    var holder = jQuery('.navig-category');
    var hash_orig;

    window.onhashchange = function() {
//        showBlackLoader();

        dt_change_layout_hash();
        dt_change_pagination_hash();
        dt_change_navigation_hash();

        dt_pajax_obj.do_ajax( window.location.hash );
    };

    if( !window.location.hash ) {
        var btn_href = holder.children('.categ.act').attr('href');
        var layout = 'list';
        if( btn_href ) {
            btn_href = btn_href.split('#');
            if( btn_href[1] ) {
                layout = dt_pajax_obj.parse_hash(btn_href[1]);
                layout = layout[2];
            }
        }else if( dt_ajax.layout ) {
            layout = dt_ajax.layout;
        }

        window.location.hash = 'all/1/' + layout;
    }
    window.onhashchange();
        
    hash_orig = dt_pajax_obj.parse_hash(window.location.hash);
    
    holder.find('a.button').not('.categ').each(function(){
        if( hash_orig && (-1 != jQuery(this).attr('href').search(hash_orig[0])) ) {
            holder.find("a.button.act").not('.categ').removeClass("act");
            jQuery(this).addClass("act");
        }
        
        jQuery(this).on('click', function(){
            
            if( jQuery(this).hasClass('act') ) {
                return false;
            }
            
            // reassign act class properly
            holder.find("a.button.act").not('.categ').removeClass("act");
            jQuery(this).addClass("act");
        });
    });

    // remove window.onhashchange handler wen layout switcher is clicked
    holder.find('.categ').each( function() {
        if( hash_orig && (-1 != jQuery(this).attr('href').search(hash_orig[2])) ) {
            holder.find(".categ.act").removeClass("act");
            jQuery(this).addClass("act");
        }
        
        jQuery(this).on('click', function(e) {
            if( jQuery(this).hasClass('act') ) {
                return false;
            }
            e.preventDefault();
            window.location.hash = '#'+jQuery(this).attr('href').split('#')[1];

            // reassign act class properly
            holder.find("a.categ.act").removeClass("act");
            jQuery(this).addClass("act");
            return false;
        }); 
    });
	

}// dt_portfolio_ajax end

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
jQuery(document).ready(function() {

    if( jQuery('.dt-ajax-content').length ) {
        dt_portfolio_ajax();
    }

    if( jQuery('#comments .comments-container').length ) {
        jQuery('#comments .comments-container').find('.children').each(function() {
            jQuery(this).children('.comment:last').addClass('last');
        });
    }

});
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//hover arrow
jQuery(document).ready(function($){
	$('.prev, .nivo-prevNav, #carousel-left, .jfancytileBack, .flex-prev').hover(function(){
			$(this).find('span.a-l').animate({				
				left: "-3px"
			},{queue:false,duration:200});
			
		}, function(){
			$(this).find('span.a-l').animate({				
				left: "0px"
			},{queue:false,duration:200});
			
		});
		$('.next, .nivo-nextNav, #carousel-right, .jfancytileForward, .flex-next').hover(function(){
			$(this).find('span.a-l').animate({				
				left: "3px"
			},{queue:false,duration:200});
			
		}, function(){
			$(this).find('span.a-l').animate({				
				left: "0px"
			},{queue:false,duration:200});
			
		});		
		
		$('.prev, .coda-nav-right').hover(function(){
			$(this).find('span.a-l-s').animate({				
				left: "3px"
			},{queue:false,duration:200});
			
		}, function(){
			$(this).find('span.a-l-s').animate({				
				left: "0px"
			},{queue:false,duration:200});
			
		});
		$('.next, .coda-nav-left').hover(function(){
			$(this).find('span.a-l-s').animate({				
				left: "-3px"
			},{queue:false,duration:200});
			
		}, function(){
			$(this).find('span.a-l-s').animate({				
				left: "0px"
			},{queue:false,duration:200});
			
		});
		
		$('.paginator-r a.prev, .SliderNamePrev').not('.no-act').hover(function(){
			$(this).find('span.a-l-s').animate({				
				left: "-3px"
			},{queue:false,duration:200});
			
		}, function(){
			$(this).find('span.a-l-s').animate({				
				left: "0px"
			},{queue:false,duration:200});
			
		});
		$('.paginator-r a.next, .SliderNameNext').not('.no-act').hover(function(){
			$(this).find('span.a-l-s').animate({				
				left: "3px"
			},{queue:false,duration:200});
			
		}, function(){
			$(this).find('span.a-l-s').animate({				
				left: "0px"
			},{queue:false,duration:200});
			
		});
	//arrow for list-carousel
	$("<span class='a-l-s'></span><span class='a-r-s'></span>").appendTo(".list-carousel .prev, .list-carousel .next, .SliderNamePrev, .SliderNameNext");
	$("<span class='a-l-s'></span><span class='a-r-s'></span>").appendTo(".paginator-r .prev, .paginator-r .next");

	
})
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// change appereance for resize 

jQuery( function($) {
	
	if($('#aside').hasClass('left')){
		$('#container').addClass('right')
	}
	else{
		$('#container').removeClass('right')
	}
	//responsive
	
	$(window).bind('orientationchange', function(event) {
 
		doSize();
		$(window).trigger("resize");
	})
	//**********************************************************************************************************************************************
	
	function isiPhone(){
		return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
		);
	}
	 var resizeTimeout = false;
	$(window).on("resize", function() {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function() {
			doSize();
			if(agentID || isAndroid || isiPhone){}
			else {
				doHover();
			}
			if(jQuery("html").width() > 998){}
			else{
				/*jQuery('iframe, embed, object').not('.flexslider iframe').css({
					width:100+ '%',
					height:'auto'
				})*/
			}
			//Call to action width
			$('.about').each(function(){
				if($('.but-wrap', this).length){
					$('.about-iiner', this).css({
						'maxWidth':$(this).width() - $('.but-wrap', this).width() - 20
					})
				}
				else{
					$('.about-iiner', this).css({
						'maxWidth':100 + '%'
					})
				}
			})
			/*****************************************************************************/
			//widget popular posts
			$('.post-bg').each(function(){
				var post_w = $(this).width();
				var img = $(this).find('img');
				var img_w = img.attr('width');
				$('.post-inner', this).css({
					width: post_w - img_w - 21
				})
			})
			/****************************************************************************/
			//max-width for contacts
			$(".logo-left .logo img, .logo-right .logo img").imageLoaded(function() {
				var logoHeight = $(this).outerHeight();
				var logoWidth = $(this).outerWidth();
				$(".contact-block").css({
					"margin-top": 20 + logoHeight/2 - $(".contact-block").outerHeight()/2,
					"visibility": "visible",
					'maxWidth':$('#header').width() - logoWidth
				});
			});
			/************************************************************************************/
			//max-width for soc-ico
			$('.soc-ico').css({
				'max-width' : $('.top-cont').width() - $('.right-top').width() - 20 +'px',
				'visibility':'visible'
			})
			var inner_w = $('.inner-navig').width();
			if(('.inner-navig').length){
				$('#container > h1').css({
					'maxWidth':$('#container').width() - 40 - inner_w
				})
			}
			else{
			}
			$(".slider-shortcode").each(function () {
				var im=$(this).find("img");
				var im_w = $(this).width();
				var im_h = $(this).height();
			
				$('.html-caption', this).css({
					'width': im_w -36
				}).show()
				$('.nivo-caption, .html-caption', this).find('p').css({
					'maxHeight': im_h/2 
				});
			
			})
			$('.menu-wrap').css({
				height: $('.mobile-menu').height() - 50
			})
			//Carousel widgets and shortcodes
			$(".carouFredSel_1").each(function(){
		
				var $this				= $(this),
					autoslideOn			= $(this).attr("data-autoslide_on") || 0,
					autoslideInterval	= parseInt($(this).attr("data-autoslide") || 7000);
				
				if(autoslideOn == "0") {
					autoslideOn = false;
				} else if (autoslideOn == "1") {
					autoslideOn = true;
				}
				$(this).carouFredSel({
					width: "variable",
					items: 1,
					auto : {
						play			: autoslideOn,
						pauseDuration	: autoslideInterval,
						pauseOnHover	: true
					},
					prev: $(this).parent().next(),
					next: $(this).parent().next().next(),
					pagination: false,
					scroll: 1
				});			
			});
				}, 300);
	}).trigger("resize");

})
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//mobile menu

/*Ipad scroll*/
jQuery.extend(jQuery.browser,
 {SafariMobile : navigator.userAgent.toLowerCase().match(/iP(hone|ad)/i) }
);

jQuery(function($){
	
	//scroll for iphone android
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
	if(agentID || isAndroid){
		jQuery('.overlay-mask').css('display', 'none')
		jQuery.fn.oneFingerScroll = function() {
			var scrollStartPos = 0;
			$(this).bind('touchstart', function(event) {				
				// jQuery clones events, but only with a limited number of properties for perf reasons. Need the original event to get 'touches'
				var e = event.originalEvent;
				scrollStartPos = $(this).scrollTop() + e.touches[0].pageY;
				//e.preventDefault();
			});
		
			$(this).bind('touchmove', function(event) {
				
				var e = event.originalEvent;
				$(this).scrollTop(scrollStartPos - e.touches[0].pageY );
				e.preventDefault();
			});
			return this;
		};
		$('.menu-wrap').oneFingerScroll();
		//usage
	
	}
	if ($.browser.SafariMobile){		 
		$("html.no-scroll, html.no-scroll body").css({
	   		"overflow" : "hidden"
	  	});
	}
	
	//**************************************************************************************************	
	$('.overlay').animate({
    	opacity: 0,
		avoidTransforms:true }, 400, function() {
	});
	$('.mobile-menu ').animate({
		top: '-10000px',
		avoidTransforms:true }, 800, function() {
	});
	$('#main-menu .button').on('click', function(e){
		document.ontouchmove = function(e){
			e.preventDefault();
		}		
		var scrollPosition = $(window).scrollTop();	
		$("html").css({
			scrollTop: scrollPosition,
			"overflow": "hidden"
		});

		$('.mobile-menu ').css('display', 'block');
		$('nav').css('display', 'none');
		if(isiPhone() && $('.mobile-menu ').css('display')=='block'){
			$(window).bind('orientationchange resize', function(event){
				  var orient = window.orientation;
				  if(orient == 0) { //0 = portrait, -90 or 90 = landscape
					 window.scrollTo(0, 0);
				  } else {
					 window.scrollTo(0, 0);
				  }
			});	
		}

		e.preventDefault();
		$('html').addClass('no-scroll');
		$('.overlay').show().animate({ 
			opacity: 1,
			avoidTransforms:true }, 400, function() {
		});
		$('.mobile-menu ').animate({
			top: '0px',
			avoidTransforms:true }, 800, function() {
		});
		
	});
	$('.mobile-menu .cross').on('click', function(){
		$("html").css({"overflow": "auto"});

		document.ontouchmove = function(e){};
	
		$('html').removeClass('no-scroll');
		
		$('nav').css('display', 'block');
		$('.overlay').animate({ 
			opacity: 0,
			avoidTransforms:true }, 800, function() {
		});
		$('.mobile-menu').animate({
			top:'-1000px',
			avoidTransforms:true }, 800, function() {
		});
		setTimeout(function(){			 
			$('.overlay').hide();
		},1000);
	});
	$('.menu-container').find('li').each(function(){
		var $_this = $(this);
		if ($_this.find("div").length > 0) {
			$_this.addClass('children');
		}
		else{
			$_this.removeClass('children');
		}
	});	
	$('.menu-container').find(' li.children').append('<span class="toggle-ico"></span>');
	$('<i class="current-ico"></i>').insertAfter('.menu-container a.current-menu-item span.inner-item');
	
	$(".menu-container").find(' li.children').each(function () {
		var $_this = $(this);
		if($_this.children('a').hasClass('act')){
			$_this.addClass('act')
		}
		else{
			$_this.removeClass('act')
		}
		$(".menu-container li a.act").next('div').css('display','block');
		
		
		if($_this.hasClass('act')){			
			$_this.children('.toggle-ico').removeClass('plus').addClass('minus');
		}
		else{
			$_this.children('.toggle-ico').removeClass('minus').addClass('plus');
		}		
	})
	
	$(".menu-container li").find(' .toggle-ico').each(function () {
		var $_this = $(this);
		$_this.on('click', function() {
			if($_this.hasClass('minus')) {
				$_this.prev('div').stop(true, true).slideUp(300);
				$_this.parent().removeClass('act');
				$_this.removeClass('minus').addClass('plus');
			}
			else{
				$_this.parent('li').addClass('act');		
				$_this.prev('div').stop(true, true).slideDown(800, function(){});
				$_this.removeClass('plus').addClass('minus');
			}
		});		
	});
	$('.menu-container').find('li.children > a').each(function() {
		var $this = $(this);
		$(".menu-container li a.act").next('div').css('display','block');
		$this.on('click', function(e) {
			if($this.parent().hasClass('act')){
					window.location = this.href;
						return false;							
			}
			else{
				e.preventDefault()
				$this.parent().addClass('act');		
				$this.next('div').stop(true, true).slideDown(800, function(){});					
				$this.siblings('.toggle-ico').removeClass('plus').addClass('minus');
				$this.bind('click', function(){
					window.location = this.href;
						return false;
				});	
			};	
		});		
	});
	
})
