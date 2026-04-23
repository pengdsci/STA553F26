			jQuery(document).ready(function() {
				jQuery('.sktooltip').each(function() {
					jQuery(this).SKTooltip();
				});
				jQuery('.sk-notification').each(function() {
					jQuery(this).closeNotification();
				});
				jQuery('.skimage-slider').each(function() {
					jQuery(this).skImageSlider();
				});
				jQuery('.sktoggle-open, .sktoggle-closed').each(function() {
					jQuery(this).skToggle();
				});
				jQuery('.sktabbed').each(function() {
					jQuery(this).skTabbed();
				});
			});

