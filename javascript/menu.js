$('body').ready(function() {
    $count = 0;
    $('.menu-item').not("#part-description").click(function() {
        if ($count > 0) {
            $prev.stop().animate({height: 36}, 700);
        }
        $temp = $(this).height();
        $(this).css('height', 'auto');
        height = $(this).height();
        $(this).css('height', $temp);
        $(this).stop().animate({height: height}, 700);
        $count++;
        $prev = $(this);
    });
});
