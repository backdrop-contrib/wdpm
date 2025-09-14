Backdrop.behaviors.wdpmStartup = {
  attach: function (context) {

    
  jQuery('.wdpm-html-print-r-selector').click(function() {
    var rndid = jQuery(this).data('openup');
    
    jQuery('#wdpm-html-print-r-var-value-' + rndid).slideToggle();
    
  });
    
    
}
};



