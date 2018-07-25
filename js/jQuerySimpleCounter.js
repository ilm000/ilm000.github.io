/*!
 * Simple Counter (http://www.jqueryscript.net/time-clock/Lightweight-jQuery-Animated-Counter-Plugin.html)
 */
! function (t) {
    t.fn.jQuerySimpleCounter = function (n) {
        var e = t.extend({
                start: 0,
                end: 100,
                easing: "swing",
                duration: 400,
                complete: ""
            }, n),
            i = t(this);
        t({
            count: e.start
        }).animate({
            count: e.end
        }, {
            duration: e.duration,
            easing: e.easing,
            step: function () {
                if (e.isDecimal) {
                    var t = Math.round(this.count * 100) /100;  
                    t = t.toFixed(2)
                    i.text(t)                          
                } else if (e.isLinesOfCode) {
                    var t = Math.ceil(this.count);
                    i.text(t + "k+"); 
                } else {
                    var t = Math.ceil(this.count);
                    i.text(t + "+")
                }                
            },
            complete: e.complete
        })
    }
}(jQuery);