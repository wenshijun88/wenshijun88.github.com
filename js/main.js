/**
 * Created by Administrator on 2017/4/16.
 */
$(function () {
    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        sectionsColor : ['rgba(135,176,165,1)', '#0f8f84','#4d5e8f','#915a4a','#4a839e','#9e956e'],
        navigation: true,
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);
            //using anchorLink
            if(anchorLink == 'page6'){
                $('#arrow').css({display:'none'});
            }else {
                $('#arrow').css({display:'block'})
            }
        }
    });


    $("#fp-nav ul li:nth-child(1) a span").append("<i class='iconfont icon-shouye'></i>");
    $("#fp-nav ul li:nth-child(2) a span").append("<i class='iconfont icon-wo'></i>");
    $("#fp-nav ul li:nth-child(3) a span").append("<i class='iconfont icon-rencaitubiao'></i>");
    $("#fp-nav ul li:nth-child(4) a span").append("<i class='iconfont icon-gongzuojingli1'></i>");
    $("#fp-nav ul li:nth-child(5) a span").append("<i class='iconfont icon-zuopinji'></i>");
    $("#fp-nav ul li:nth-child(6) a span").append("<i class='iconfont icon-lianxiwo'></i>");
    $("#fp-nav ul li:nth-child(1) a").append("<b class='hint'>首页</b>");
    $("#fp-nav ul li:nth-child(2) a").append("<b class='hint'>关于我</b>");
    $("#fp-nav ul li:nth-child(3) a").append("<b class='hint'>技能栈</b>");
    $("#fp-nav ul li:nth-child(4) a").append("<b class='hint'>经历</b>");
    $("#fp-nav ul li:nth-child(5) a").append("<b class='hint'>作品集</b>");
    $("#fp-nav ul li:nth-child(6) a").append("<b class='hint'>联系我</b>");
    $("#fp-nav ul li a span").css({margin:0})
    $("#fp-nav ul li a span").on("mouseenter",function () {
        $(this).css({width:"15px",height:"15px",margin:0});
        $(this).siblings().css({display:'block'})
        $(this).siblings().animate({right: "30px",opacity:1});
    })
    $("#fp-nav ul li a span").on("mouseleave",function () {
        $(this).siblings().animate({right: "50px",opacity:0},500);
        $(this).siblings().css({display:'none'})
    })

    $('.banner').on('mouseenter',function () {
        $('.banner').mousemove(function (evt) {
            var ee=evt||window.event;
            ee.cancelBubble=true;
            var tempX=ee.pageX-$('.banner').offset().left- $('.banner').outerWidth()/2
            var tempY=ee.pageY-$('.banner').offset().top- $('.banner').outerHeight()/2
            $(this).css({transform:'rotateY('+tempX/40+'deg) rotateX('+(-tempY/40)+'deg)'})
        })
    })
    $('.banner').on('mouseleave',function () {
        document.onmousemove=null;
        $(this).css({transform:'rotateY(0deg) rotateX(0deg)'})
    })
    
    $('.dot').on('click', function () {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(".dot").index(this);
        $('.experience-content').eq(index).addClass("active").siblings().removeClass("active");
    })

    productionSwiper = new Swiper('#productions .swiper-container', {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 5,
        autoplay: {
            delay: 10000
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
        },
        on: {
            progress: function(progress) {
                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    var slideProgress = this.slides[i].progress;
                    modify = 1;
                    if (Math.abs(slideProgress) > 1) {
                        modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                    }
                    translate = slideProgress * modify * 260 + 'px';
                    scale = 1 - Math.abs(slideProgress) / 5;
                    zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                    slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                    slide.css('zIndex', zIndex);
                    slide.css('opacity', 1);
                    if (Math.abs(slideProgress) > 3) {
                        slide.css('opacity', 0);
                    }
                }
            },
            setTransition: function(transition) {
                for (var i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i)
                    slide.transition(transition);
                }

            }
        }

    })
})