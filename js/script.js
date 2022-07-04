$(document).ready(function () {

    /******슬라이드*******/
    /*자동 슬라이드+ 원*/
    var i = 0;
    var x = setInterval(slide, 2500);
    function slide(j) {
        i++;
        if (j != null) { i = j; }
        if (i == 4) { i = 0; }
        switch (i) {
            case 0:
                $("#slide>div").fadeIn(450);
                break;
            case 1:
                $("#slide>div").eq(0).fadeOut(450);
                $("#slide>div").show();
                break;
            case 2:
            case 3:
                $("#slide>div").eq(i).prevAll().fadeOut(450);
                $("#slide>div").eq(i).show();
                $("#slide>div").eq(i).nextAll().show();
                break;
        }
        $("#circle>button").removeClass("white");
        $("#circle>button").eq(i).addClass("white");

    }

    /*슬라이드에서 원형버튼 클릭하면 해당화면으로 이동*/
    $("#circle>button").click(function () {
        var j = $(this).index();
        slide(j);
    });


    /*메뉴 슬라이드*/

    const btn = document.querySelector('.btn');
    const menu = document.querySelector('.navi');

    btn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});