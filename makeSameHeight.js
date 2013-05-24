/*
 * Resize to equal height
 *
 * Usage:
 * $('.equal-height').makeSameHeight({ // The wrapper
 *   setHeightOn:'.box_content', // properties detect on and set min-height on element
 *   min:720 // discard style when width < 720
 * });
 * */
$.fn.makeSameHeight = function (opts){
    var parents = $(this);
    parents.each(function(){
        var parent = $(this);
        parent.each(function(){
            var child = $(parent).find(opts.setHeightOn);
            if ($(window).width() < opts.min){ // no action this case
                child.attr('min-height',0);
            }
            else{ // get max height
                var currentTallest = 0;
                child.each(function(){
                    child.removeAttr('style');
                    var currentHeight = $(this)[0].clientHeight;
                    if (currentHeight > currentTallest) { currentTallest = currentHeight;}
                });
                if ($.browser.msie && $.browser.version == 6.0) { child.css({'height': currentTallest}); }
                child.css({'min-height': currentTallest});
            }
        });
    });
};