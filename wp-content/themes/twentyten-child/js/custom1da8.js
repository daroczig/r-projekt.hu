jQuery(function(){
    jQuery('.sabai-form-type-file-upload legend').click(function(){
        jQuery(this).parent().find('div').toggle("slow");
    });
    if (location.pathname == "/kerdesek/kerdezz") {
        jQuery('.widget-area .xoxo>li').hide();
        jQuery('.widget-area .xoxo #text-6').show();
    }
});
