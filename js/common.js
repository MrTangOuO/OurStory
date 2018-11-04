$(document).ready(function () {
    function resize() {
        $("#container").width($(window).width());
        $("#container").height($(window).height());
    }resize();

    function removeLoading() {
        $("#heart").remove();
        $("#container").css({background: 'rgba(0,0,0,.8)'});
    }

    function addTzs() {
        $("#container").append(
            '<div id="tongzhishu">'+
                '<div class="Ttongzhishu">'+
                    '<p class="tzsTitle">xx中学 入学通知书</p>'+
                    '<p class="tzsContent">'+
                    '唐同学:xxxxx。'+
                    '<p class="tzsTime">2010年9月</p>'+
                    '<div class="tzsZhang">xx中学</div>'+
                    '</p>'+
                '</div>'+
                '<div class="Wtongzhishu">'+
                    '<p class="tzsTitle">xx中学 入学通知书</p>'+
                    '<p class="tzsContent">'+
                    '吴同学：xxxxx。'+
                    '<p class="tzsTime">2010年9月</p>'+
                    '<div class="tzsZhang">xx中学</div>'+
                    '</p>'+
                '</div>'+
            '</div>'
        )
    }

    function addBefore () {
        $("#container").append(
            '<div id="beforeTitle">2010年，我们插肩而过。</div>'+
            '<div id="before">'+
            '<div id="Tangxiaoyu">'+
            '<section class="head">'+
            '<section class="hair"></section>'+
            '<section class="l_eye"></section>'+
            '<section class="r_eye"></section>'+

            '<section class="bodies">'+
            '<section class="arms"></section>'+
            '<section class="hands"></section>'+
            '</section>'+

            '<section class="l_foot"></section>'+
            '<section class="r_foot"></section>'+
            '</section>'+
            '</div>'+
            '<div id="vian">'+
            '<section class="heads">'+
            '<section class="hairs"></section>'+

            '<section class="body">'+
            '<section class="arm"></section>'+
            '</section>'+

            '<section class="l_foots"></section>'+
            '<section class="r_foots"></section>'+
            '</section>'+
            '</div>'+
            '</div>'
        );
    }

    function addSecond () {
        $("#container").append(
            '<div id="beforeTitle">2012年夏天，终于见了第一面。</div>'+
            '<div id="classRom">'+
            '<div class="wall"></div>'+
            '<div class="door">'+
            '<div id="vian2">'+
            '<section class="heads2">'+
            '<section class="hairs2"></section>'+
            '<section class="hair22"></section>'+
            '<section class="l_eye2"></section>'+
            '<section class="r_eye2"></section>'+
            '<section class="mouth2"></section>'+
            '<section class="body2">'+
            '<section class="arm2"></section>'+
            '</section>'+

            '<section class="l_foots2"></section>'+
            '<section class="r_foots2"></section>'+
            '</section>'+
            '</div>'+
            '<div class="classDesk">'+
            '<section class="deskTop"></section>'+
            '<section class="deskleg_l"></section>'+
            '<section class="deskleg_r"></section>'+
            '</div>'+
            '</div>'+
            '<div id="Tangxiaoyu2">'+
            '<section class="head2">'+
            '<section class="hair2"></section>'+

            '<section class="bodies2">'+
            '<section class="arms2"></section>'+
            '<section class="hands2"></section>'+
            '<section class="backPackBell"></section>'+
            '<section class="backPack"></section>'+
            '</section>'+

            '<section class="l_foot2"></section>'+
            '<section class="r_foot2"></section>'+
            '</section>'+
            '</div>'+
            '</div>'

    )
    }

    function addDarkRoom () {
        $("#container").append(
            '<div id="beforeTitle">2016年夏天，你带我走出阴影。</div>'+
            '<div id="darkRoom">'+
            '<div class="darkWall"></div>'+
            '<section class="darkDoor">'+
            '<section class="outDoor"></section>'+
            '</section>'+
            '<section class="light"></section>'+
            '<section class="switch"></section>'+
            '<div id="vian3">'+
            '<section class="heads3">'+
            '<section class="hairs3"></section>'+
            '<section class="hair33"></section>'+
            '<section class="l_eye3"></section>'+
            '<section class="r_eye3"></section>'+
            '<section class="mouth3"></section>'+

            '<section class="l_arm3"></section>'+
            '<section class="body3">'+
            '<section class="r_arms"></section>'+
            '</section>'+
            '<section class="l_foots3"></section>'+
            '<section class="r_foots3"></section>'+
            '</section>'+
            '</div>'+
            '<div id="Tangxiaoyu3">'+
            '<section class="head3">'+
            '<section class="hair3"></section>'+
            '<section class="eye3"></section>'+
            '<section class="l_foot3"></section>'+
            '<section class="bodies3">'+
            '<section class="arms3"></section>'+
            '<section class="hands3"></section>'+
            '</section>'+

            '</section>'+
            '</div>'
        )
    }

    function addAfter() {
        $("#container").append(
            '<div id="beforeTitle">给你小💗💗</div>'+
            '<div id="give">'+
            '<canvas id="c" style="position: absolute;z-index: -1;text-align: center;"></canvas>'+
            '<div id="ground"></div>'+
            '<div id="vian4">'+
            '<section class="heads4">'+
            '<section class="hairs4"></section>'+
            '<section class="hair44"></section>'+
            '<section class="l_eye4"></section>'+
            '<section class="r_eye4"></section>'+
            '<section class="mouth4"></section>'+
            '<section class="l_arm4"></section>'+
            '<section class="body4">'+
            '<section class="r_arms4"></section>'+
            '</section>'+
            '<section class="l_foots4"></section>'+
            '<section class="r_foots4"></section>'+
            '</section>'+
            '</div>'+
            '<div id="Tangxiaoyu4">'+
            '<section class="head4">'+
            '<section class="hair4"></section>'+
            '<section class="eye4"></section>'+
            '<section class="l_foot4"></section>'+
            '<section class="r_foot4"></section>'+
            '<section class="hands4"></section>'+
            '<section class="bodies4">'+
            '<section class="arms4"></section>'+
            '<section class="myHeart"></section>'+
            '</section>'+
            '</section>'+
            '</div>'+
            '</div>'+
            '<script src="js/canvas_bg.js"></script>'
        )
    }

    setTimeout(removeLoading, 8050);//动画时长3s,延迟2s,+2s
    setTimeout(function () {
        $("#container").css({background: 'rgba(0,0,0,0)'});
        addTzs()
    },10000);
    setTimeout(function () {
        $("#tongzhishu").animate({opacity: 0},1000);
    },20000);
    setTimeout(function () {
        $("#tongzhishu").remove();
        addBefore()
    },21000);
    setTimeout(function () {
        $("#before").css({opacity: 1});
        $("#beforeTitle").animate({opacity: .8},5000);
    }, 22000);//动画延迟+5s
    setTimeout(function () {
        $("#container").fadeOut(1000);
    }, 31000)
    setTimeout(function () {
        $("#before").remove();
        $("#beforeTitle").remove();
        $("#beforeTitle").animate({opacity: 0});
        $("#container").css({background: 'rgba(0,0,0,.8)'});
        $("#container").fadeIn(1000);
    }, 32000);
    setTimeout(function () {
        addSecond()
        $("#beforeTitle").animate({opacity: .8},5000);
        $("#classRom").fadeIn(3000)
    }, 35000)
    setTimeout(function () {
        $("#container").fadeOut(1000);
    }, 47000)
    setTimeout(function () {
        $("#classRom").remove();
        $("#beforeTitle").remove();
        $("#beforeTitle").animate({opacity: 0});
        $("#container").css({background: 'rgba(0,0,0,0)'});
        $("#container").fadeIn(1000);
    }, 48000);
    setTimeout(function () {
        addDarkRoom()
        $("#beforeTitle").animate({opacity: .8},7000);
        $("#darkRoom").animate({opacity: 1},2000);
    }, 50000)
    setTimeout(function () {
        $("#container").fadeOut(1000);
    }, 70000)
    setTimeout(function () {
        $("#darkRoom").remove();
        $("#beforeTitle").remove();
        $("#beforeTitle").animate({opacity: 0});
        $("#container").css({background: 'rgba(0,0,0,0)'});
        $("#container").fadeIn(1000);
    }, 71000);
    setTimeout(function () {
        addAfter()
        $("#beforeTitle").animate({opacity: .8},7000);
        $("#give").animate({opacity: 1},2000);
    }, 72000)
})

