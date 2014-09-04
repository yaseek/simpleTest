
(function($) {
    
    $(document).on('ready', function() {
        
        var HORIZONTAL_COUNT = 3,
            WRAPPER_PERCENTAGE = 80;
        
        $(window).on('resize', function() {
            console.log('RESIZE');
            var $wrapper = $('.wrapper');
            var width = Math.floor($(this).width() * WRAPPER_PERCENTAGE / 100);
            $wrapper.width(width);
            var elementSize = Math.floor(width / HORIZONTAL_COUNT);
            $('.brick', $wrapper)
                    .width(elementSize)
                    .height(elementSize);
            $('.brick.horizontal', $wrapper).width(elementSize * 2);
            $('.brick.vertical', $wrapper).height(elementSize * 2);
            
        }).trigger('resize');
    });
    
}(jQuery));

