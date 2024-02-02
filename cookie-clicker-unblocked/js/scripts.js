
$(document).ready(function(){

    $('.dl-btn').on('click', function() {
        $(this).slideUp(function() {
            $('.offers-wrapper').slideDown();
        });
    });

    $('.step').matchHeight();
    $('blockquote').matchHeight();

    var progressBars = [];
    var progressBarsCompleted = [];

    $('.progress-bar').each(function() {
        var el = $(this);
        progressBars.push(el);
        move($(this)[0], randonInt(10, 25), function() {
            progressBarsCompleted.push(el);
            if(progressBarsCompleted.length == progressBars.length) {
                $('.virus-box .scan-msg').fadeOut();
            }
        });
    });

    function move(el, interval, callback) {
        var width = 1;
        var id = setInterval(frame, interval);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                $(el).addClass('progress-bar-success');
                el.innerHTML = 'Clean';
                callback();
            } else {
                width++;
                el.style.width = width + '%';
                el.innerHTML = width + '%';
            }
        }
    }

    function randonInt(min, max) {
        return Math.floor((Math.random() * max) + min);
    }

});
