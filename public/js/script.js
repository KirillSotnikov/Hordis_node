$(document).ready(function(){
/*=================================     main-page      ================================= */
/*====  slick   ====*/
    $('.main-slider').slick({
    arrows:true,
        nextArrow:$('.main-arrow-next-desctop'),
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    nextArrow:$('.main-arrow-next')
                }}]
    });

/*===== navbar-shadow========*/
    $('.navbar-toggler').click(function(){
        if(!$('.navbar-collapse').hasClass('show')){
            setTimeout(function(){
                $('.my-navbar-mob').css({
                    overflow:'auto',
                    height:'100%'
                });
            }, 300);
        } else{
            $('.my-navbar-mob').css({
                overflow:'hidden',
                height:'auto'
            });
        }
    });
    

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 25){
            $('.navbar').addClass('my-navbar-active');
            $('#grey').removeClass('grey_bg');
        }
        else{
            $('.navbar').removeClass('my-navbar-active');
            $('#grey').addClass('grey_bg');
        }
    });


    var menuLink = $('.drop-menu-item');

    menuLink.on('mouseover', function(){
        menuLink.removeClass('menu-line');
        $(this).addClass('menu-line');
    });

    // $('.dropdown-position').hover(function () {
    //     $(this).find('.my-nav-link-btn').toggleClass('active-sm-button');
    // });

   /* $('.my-nav-link-btn').on('click', function (e) {
        e.preventDefault();
        var closest = $(this).closest('.dropdown-position');
        $(this).toggleClass('active-sm-button').closest('.dropdown-position').siblings('.dropdown-position').find('.my-nav-link-btn').removeClass('active-sm-button');
        closest.find('.drop-menu-wrap').toggleClass('drop-menu-wrap-active');
        closest.toggleClass('dropdown-position-active');
        closest.siblings('.dropdown-position').removeClass('dropdown-position-active');
        closest.siblings('.dropdown-position').find('.drop-menu-wrap').removeClass('drop-menu-wrap-active');
    });
*/
    $('.menu-link').hover(function (e) {
        var closest = $(this).closest('.dropdown-position');
        $(this).next().addClass('active-sm-button').closest('.dropdown-position').siblings('.dropdown-position').find('.my-nav-link-btn').removeClass('active-sm-button');
        closest.find('.drop-menu-wrap').addClass('drop-menu-wrap-active');
        closest.addClass('dropdown-position-active');
        closest.siblings('.dropdown-position').removeClass('dropdown-position-active');
        closest.siblings('.dropdown-position').find('.drop-menu-wrap').removeClass('drop-menu-wrap-active');
    });

    $('.my-nav-link-btn').on('click', function (e) {
        e.preventDefault();
        var closest = $(this).closest('.dropdown-position');
        closest.removeClass('dropdown-position-active');
        closest.find('.drop-menu-wrap').removeClass('drop-menu-wrap-active');
        $(this).removeClass('active-sm-button');
    });

    /*===== drop-menu-button=====*/
    $('.drop-menu-button').on('click', function(){
        $('.dropdown-menu').slideToggle(300);
        $(this).toggleClass('active-button');
    });



/*====     door     ====*/
    $('.drop-menu-link').hover(function () {
        $(this).addClass('o-door').removeClass('door').siblings().removeClass('o-door').addClass('door');
    });



/*=====     tabs    =======*/
    $('.sub-menu').hide();
    $('.sub-menu:first-child').show();
    $('.drop-menu-item').mouseover(function () {
        let thisEl = $(this);
        let tabIndex = thisEl.index();
       /* thisEl.addClass('menu-line').siblings().removeClass('menu-line');*/
        thisEl.closest('.drop-menu')
        .siblings('.sub-menu-wrap').find('.sub-menu')
        // .eq(tabIndex).fadeIn(800).siblings().hide();
        .eq(tabIndex).show().siblings().hide();

    })
});



/*======    mobile drop-menu    =======*/
    $('.mob-drop-menu-item').hide();
    $('.mob-sub-menu-button').on('click', function(){
        $(this).toggleClass('active-button');
        let thisCont = $(this).closest('.mob-drop-menu');
        thisCont.find('.mob-drop-menu-item').slideToggle();
    });

    $(".mob-drop-menu").hide();
    $('.supper-btn').on('click', function () {
        let thisCont = $(this).closest('.mob-menu-item');
        thisCont.find('.mob-drop-menu').slideToggle();
    });



/*======================================    stock-page    =============================== */

    $('.stock-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        asNavFor: '.stock-slider-nav'
    });
   $('.stock-slider-nav').slick({
        slidesToShow:6 ,
        slidesToScroll: 1,
        asNavFor: '.stock-slider',
        focusOnSelect: true,
        infinite:false,
        arrows: false,
        responsive: [
           {
               breakpoint: 1199,
               settings: {
                   arrows: true,
                   nextArrow: '<div class="stock-arrow-next arrow_stroke_main"></div>',
                   prevArrow: '<div class="stock-arrow-prev arrow_stroke_main"></div>',
                   centerMode: false,
                   centerPadding: '40px',
                   slidesToShow: 3,
                   infinite:true

               }
           },
       ]
    });

/*=====     stock-tabs    =======*/


   $('.stock-tabs-content:first').addClass('stock-tabs-content-active');
   $('.stock-tabs-menu-link').on('click',function () {
       let tabIndex = $(this).closest('.stock-tabs-menu-link-wrap').index();
       $(this).addClass('stock-tabs-menu-link-active')
           .closest('.stock-tabs-menu-link-wrap')
           .siblings().find('.stock-tabs-menu-link')
           .removeClass('stock-tabs-menu-link-active');
       $(this).closest('.stock-tabs-menu')
           .siblings('.stock-tabs-content-wrap')
           .find('.stock-tabs-content')
           .eq(tabIndex)
           .addClass('stock-tabs-content-active').siblings().removeClass('stock-tabs-content-active');
   });



/*=============     about-us slick      ==============*/
let aboutSlider = $('.about-us-main-slider');

aboutSlider.on('init', function(event, slick){
    let slideCount = slick.slideCount;
    $('.total').text(slideCount);
    $('.current').text(slick.currentSlide + 1);
});

aboutSlider.slick({
    arrows:true,
    nextArrow:$('.about-us-arrow-next'),
    prevArrow:$('.about-us-arrow-prev'),
    // infinite: false
});

aboutSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.current').text(nextSlide + 1);
    
});






// Tovar
$('.types_k_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    // infinite: false
    // centerPadding: '100px'
});
$('.goods_k_container_box_slider_big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.goods_k_container_box_slider_small',
    focusOnSelect: true
});
$('.goods_k_container_box_slider_small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: '.goods_k_container_box_slider_big',
    focusOnSelect: true
});
$('.view_k_container_box_slider_big.door').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.view_k_container_box_slider_small'
});
$('.view_k_container_box_slider_small.door').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    asNavFor: '.view_k_container_box_slider_big',
    prevArrow: '<div class="arrow up"><img src="/public/img/arrow_up.png"></div>',
    nextArrow: '<div class="arrow down"><img src="/public/img/arrow_up.png"></div>',
});
$('.view_k_container_box_slider_big.wood').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.view_k_container_box_slider_small'
});
$('.view_k_container_box_slider_small.wood').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    focusOnSelect: true,
    asNavFor: '.view_k_container_box_slider_big',
    prevArrow: '<div class="arrow up"><img src="/public/img/arrow_up.png"></div>',
    nextArrow: '<div class="arrow down"><img src="/public/img/arrow_up.png"></div>'
});

/*$('[data-tab-tovar]').click(function(){
    var tovar = $(this).attr('data-tab-tovar');
    
    $('.view_k_container_tabs_text').removeClass('active');
    $(this).addClass('active');

    $('.view_k_container_box').removeClass('active');
    $('.view_k_container_box' + tovar).addClass('active');
});
$('[data-accord]').click(function(){
    var accord = $(this).attr('data-accord');
    
    $('.advantage_box').removeClass('active');
    $(this).addClass('active');

    $('.advantage_k_container_item_tabul').removeClass('active');
    $('.advantage_k_container_item_tabul' + accord).addClass('active');
});*/

    $('.advantage_k_container_item_tabul').slideUp();
    $('.advantage_k_container_item_tabul:first').slideDown();
    $('.advantage_box').on('click',function () {
      let that =$(this);
      that.find('.advantage_k_container_item_arrow').addClass('active');
      that.next().slideDown();
      that.closest('.advantage_k_container_item').siblings().find('.advantage_k_container_item_tabul').slideUp();
      that.closest('.advantage_k_container_item').siblings().find('.advantage_k_container_item_arrow').removeClass('active');
    });

// Category

$('.property_k_slider .slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="arrow left"><img src="/public/img/arrow_left_wh.png"></div>',
    nextArrow: '<div class="arrow right"><img src="/public/img/arrow_right_wh.png"></div>'
});

$('[data-podcategory]').mouseover(function(){
    var podcategory = $(this).attr('data-podcategory');
   console.log(podcategory);
   
    $('.property_k_container_box').removeClass('active');
    $(this).addClass('active');

    $('.property_k_container_bg').removeClass('active');
    $('.property_k_container_bg' + podcategory).addClass('active');

});


var $work = $('.single-item');
var slideCount = null;

$work.on('init', function(event, slick){
    // console.log('total');
    
    slideCount = slick.slideCount;
    // slideCount = $gallery.length();
    setSlideCount();
    setCurrentSlideNumber(slick.currentSlide);
    // console.log(slideCount);
    
});

$work.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="arrow left"><img src="/public/img/arrow_category.svg"></div>',
    nextArrow: '<div class="arrow right"><img src="/public/img/arrow_category.svg"></div>',
    // onInit: initFunction(event, slick)
    
});
// var initFunction = function(){
//     console.log('total');
    
//     slideCount = slick.slideCount;
//     setSlideCount();
//     setCurrentSlideNumber(slick.currentSlide);
//     console.log(slideCount);
    
// };
// $gallery.on('init', initFunction(event, slick));
$work.on('swipe', function(event, slick, direction){
    // console.log(direction);
    // left
});
$work.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    // console.log('change');
    setCurrentSlideNumber(nextSlide);
});

function setSlideCount() {
    // console.log(slideCount);
    var $el = $('.slide-count-wrap').find('.total');
    $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {
    // console.log('current slide');
    var $el = $('.slide-count-wrap').find('.current');
    
    $el.text(currentSlide + 1);
}


// Pod-Category
$(document).ready(function(){
    $('.podcategory_k_slider').addClass('none');
});
var $mySlider = $('.podcategory_k_slider .slider');
        var timer = null;
        var clickCounter = 0;
        $mySlider.on('init', function(event, slick){
            $('.podcategory_k_background[data-back=0]').addClass('active');
            var $mySliderNext    = $mySlider.find('.slick-current').data('slick-index');
                
            if($mySliderNext === 0){
                $('.arrow.top').addClass('hideSlider');
            }
            $('.arrow.top').click(function(){
                // var $mySliderCurrent = $mySlider.slick('slickCurrentSlide');
                var $mySliderNext    = $mySlider.find('.slick-current').data('slick-index');
                
                if($mySliderNext === 0){
                    $('.arrow.top').addClass('hideSlider');
                }
                if($(this).hasClass('hideSlider')){
                    clickCounter += 1;
                } else{
                    clickCounter = 0;
                }
                var sliderTimeOut = null;
                if($(this).hasClass('hideSlider') && clickCounter == 2){
                    clearTimeout(sliderTimeOut);
                console.log(bgImageData);
                $('.podcategory_k_background').animate({
                    // 'top': bgImageData.top + 'px',
                    'top': '50px',
                    'right': rightImage + 'px',
                    'width': bgImageData.width + 'px',
                    'height': bgImageData.height + 'px',
                }, 8);
                $('.podcategory_k_slider').addClass('animation');
                $('.podcategory_k_background').addClass('animation');

                $('.podcategory_k_container_box').addClass('disp_block');
                $('.podcategory_k_bac').addClass('disp_block');

                sliderTimeOut = setTimeout(function(){
                    $('.podcategory_k_slider').removeClass('animation');
                    $('.podcategory_k_background').removeClass('animation');
                    $('.podcategory_k_slider').addClass('none');
                    $('.my-navbar').removeClass('pod_category');
                    $mySlider.slick('unslick');
                    $('.podcategory_k').removeClass('active');

                    $('.podcategory_k_container_box').removeClass('disp_block');
                    $('.podcategory_k_bac').removeClass('disp_block');
                    $('.podcategory_k_background').css({
                        'top': '',
                        'right': '',
                        'width': '',
                        'height': '',
                    });
                }, 800);
              

                    
                }
            });
            // $('arrow.top.hideSlider').click(function(){
                
            //     $('.podcategory_k').removeClass('active');
            //     $mySlider.slick('unslick');
            // });
            $('.arrow.down').click(function(){
                $('.arrow.top').removeClass('hideSlider');
                clickCounter = 0;
            });
        });

        $('section.podcategory_k .wrapper_k .podcategory_k_scroll_more').click(function(){
            $('.podcategory_k').addClass('active');
            $('.my-navbar').addClass('pod_category');
            $('.podcategory_k_slider').removeClass('none');
            $mySlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                // vertical: true,
                // verticalSwiping	: true,
                dots: true,
                fade: true,
                infinite: false,
                dontAnimate : true,
                prevArrow: '<div class="arrow top"><img src="/public/img/arrow_left_wh.png"></div>',
                nextArrow: '<div class="arrow down"><img src="/public/img/arrow_right_wh.png"></div>',
                // lazyLoad: 'progressive'
            });
        });
        $(window).on('mousewheel',function(e){
            console.log(121212);
            if(e.originalEvent.wheelDelta /120 < 0){
                $('.podcategory_k').addClass('active');
                $('.my-navbar').addClass('pod_category');
                $('.podcategory_k_slider').removeClass('none');
                $mySlider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // vertical: true,
                    // verticalSwiping  : true,
                    dots: true,
                    fade: true,
                    infinite: false,
                    dontAnimate : true,
                    prevArrow: '<div class="arrow top"><img src="/public/img/arrow_left_wh.png"></div>',
                    nextArrow: '<div class="arrow down"><img src="/public/img/arrow_right_wh.png"></div>',
                    // lazyLoad: 'progressive'
            });
            }
        });

        

        $mySlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var srcImage = $('[data-slick-index=' + nextSlide + ']' ).find('.podcategory_k_slider_box_image').attr('src');
            $('.podcategory_k_background').removeClass('active');
            $('.podcategory_k_background').removeClass('bottom');
            $('.podcategory_k_background[data-back=' + nextSlide + ']').addClass('active');
            $('.podcategory_k_background[data-back=' + nextSlide + ']').css('background-image', `url(${srcImage})`);
            $('.podcategory_k_background[data-back=' + currentSlide + ']').addClass('bottom');

            if (currentSlide > nextSlide){
                $('.podcategory_k_slider_box_image').addClass('active');
                $('[data-slick-index=' + currentSlide + ']' ).find('.podcategory_k_slider_box_image').removeClass('active');
                $('.slick-dots').addClass('active');
                $('.podcategory_k_slider_box_title').addClass('active');
            } else {
                $('.podcategory_k_slider_box_image').removeClass('active');
                $('[data-slick-index=' + currentSlide + ']' ).find('.podcategory_k_slider_box_image').addClass('active');
                $('.slick-dots').removeClass('active');
                $('.podcategory_k_slider_box_title').removeClass('active');


                
            }
            
            
            
        });
        // $mySlider.on('afterChange', function(event, slick, currentSlide){
        //         // console.log(currentSlide);
                
        //         $('.arrow.top').on('click', function(){
        //         console.log(currentSlide);
        //             if(currentSlide == 0){
        //                 $('.podcategory_k').removeClass('active');
        //                 $mySlider.slick('unslick');
        //             }
        //         });
        //     });
        $(document).bind('mousewheel', function(e){
            // var windowScroll = $(e.originalEvent.whellDelta);
            // console.log(windowScroll);
            var windowCurrent = $mySlider.find('.slick-current').data('slick-index');
            if(e.originalEvent.wheelDelta /120 > 0) {
                console.log('UP')
                var windowCurrent = windowCurrent - 1
                $mySlider.slick('slickGoTo', windowCurrent);
            }
            else{
                var windowCurrent = windowCurrent + 1
                $mySlider.slick('slickGoTo', windowCurrent);
            }
            // $mySlider.slick('slide')
        });
        var sliderTimeOut = null;
        $(document).on('keydown', function(e){
            if(e.keyCode == 27){
                clearTimeout(sliderTimeOut);
                console.log(bgImageData);
                $('.podcategory_k_background').animate({
                    // 'top': bgImageData.top + 'px',
                    'top': '50px',
                    'right': rightImage + 'px',
                    'width': bgImageData.width + 'px',
                    'height': bgImageData.height + 'px',
                }, 8);
                $('.podcategory_k_slider').addClass('animation');
                $('.podcategory_k_background').addClass('animation');

                $('.podcategory_k_container_box').addClass('disp_block');
                $('.podcategory_k_bac').addClass('disp_block');

                sliderTimeOut = setTimeout(function(){
                    $('.podcategory_k_slider').removeClass('animation');
                    $('.podcategory_k_background').removeClass('animation');
                    $('.podcategory_k_slider').addClass('none');
                    $('.my-navbar').removeClass('pod_category');
                    $mySlider.slick('unslick');
                    $('.podcategory_k').removeClass('active');

                    $('.podcategory_k_container_box').removeClass('disp_block');
                    $('.podcategory_k_bac').removeClass('disp_block');
                    $('.podcategory_k_background').css({
                        'top': '',
                        'right': '',
                        'width': '',
                        'height': '',
                    });
                }, 800);
              
            }
        });
        const bgImg = $($('.podcategory_k_container_image_item').get(0));
        const bgImageData = {
            ...bgImg.offset(),
            width: bgImg.width(),
            height: bgImg.height(),
        }
        const rightImage = $(window).width() - (bgImageData.left + bgImageData.width);
        
        // Gallery

        $(document).ready(function(){
            var arr = $('.gallery_k_grid .gallery_k_grid_item');
            arr.each((key, element) => {
                $(element).attr('data-gallery', key);
                
            });
        });
        var $gallery = $('.slider_modal_container');
        var galleryCount = null;
        

        $gallery.on('init', function(event, slick){
            
            galleryCount = slick.slideCount;
            setGalleryCount();
            setCurrentGalleryNumber(slick.currentSlide);
            
        });

        $gallery.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<div class="arrow left"><img src="/public/img/arrow_up.png"></div>',
            nextArrow: '<div class="arrow right"><img src="/public/img/arrow_up.png"></div>',
            fade: true,
        })

        $gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            
            setCurrentGalleryNumber(nextSlide);
        });

        function setGalleryCount(){

            var $el1 = $('.slider_modal_counter').find('.total');
            $el1.text(galleryCount);
        }

        function setCurrentGalleryNumber(currentSlide){
            var $el1 = $('.slider_modal_counter').find('.current');
            $el1.text(currentSlide + 1);
        }

        $('.gallery_k_grid_item').click(function(){
            var gallery = $(this).attr('data-gallery');
            $('.slider_modal').addClass('active');
            $('.body_scroll').addClass('active');
            
            
            $('.slider_modal_container').slick('slickGoTo', gallery, true);

            
        });


        // $('section.gallery_k .wrapper_k .gallery_k_grid_item').click(function(){
        //     $('.slider_modal').addClass('active');
        // });
        $('.slider_modal .overlay').click(function(){
            $('.slider_modal').removeClass('active');
            $('.body_scroll').removeClass('active');
        });




        // main
        /*$(document).ready(function () {
            var newWidth;
            var windWidth = $(window).width();
            // var $slideRight = $('.slide.active');
            // var $slideInct = $('.slide.slide_second');
            var slideInactWidth = 0;
        
            $('.nav_cont.next').mousemove(function (e) {
                var pos = $(this).offset();
                var elem_left = pos.left;
                var Xinner = e.pageX - elem_left;
                var $slideActive = $('.slide.active');
                
                var newSlideInactWidth = slideInactWidth + (Xinner * 2.1);
                $slideActive.width(newSlideInactWidth);
        
                console.log(Xinner);
                $('.arrow_bg_slider').addClass('active');


                var pos = $(this).offset();
                var elem_left = pos.left;
                var Xinner = e.pageX - elem_left;
                var $slideActive = $('.slide.active');

                if(Xinner < 80){
                    $slideActive.width(0);
                }
        
                return newWidth = newSlideInactWidth;
            });
            $('.nav_cont.next').mouseleave(function(){
                $('.arrow_bg_slider').removeClass('active');
                
            });
            $('.nav_cont.next').click(function () {
                var $slideActive = $('.slide.active');
                var disc = windWidth - newWidth;
                let $that = $(this);
                $slideActive.width(newWidth + disc);
                newWidth = 0;
        
                $('.section_main_box_foot').addClass('animate');
                $('.section_main_box_head').addClass('animate');
                setTimeout(function () {
                    $slideActive.find('img').addClass('hide');
                }, 500);
                
                $that.css('z-index', '-1');
        
                setTimeout(function(){
                    $('.slide').toggleClass('active');
                    var $slideActive = $('.slide.active');
                    $slideActive.width(0);
                    $slideActive.find('img').removeClass('hide');
                    $that.css('z-index', '10');
                    $('.section_main_box_foot').removeClass('animate');
                    $('.section_main_box_head').removeClass('animate');
                }, 800);
            });
        });*/



        /* ===================== modal window   =====================*/


$(document).ready(function() { // вся мaгия пoсле зaгрузки стрaницы
    $('#go').click( function(event){ // лoвим клик пo ссылки с id="go"
        event.preventDefault(); // выключaем стaндaртную рoль элементa
        $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
            function(){ // пoсле выпoлнения предъидущей aнимaции
                $('#modal_form')
                    .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                    .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
            });
    });
    /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
    $('#modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                function(){ // пoсле aнимaции
                    $(this).css('display', 'none'); // делaем ему display: none;
                    $('#overlay').fadeOut(400); // скрывaем пoдлoжку
                }
            );
    });
});

/* slider main*/
$(document).ready(function() {

    var $slider = $(".slider"),
        $slideBGs = $(".slide__bg"),
        diff = 0,
        curSlide = 0,
        numOfSlides = $(".slide").length-1,
        animating = false,
        animTime = 500,
        autoSlideTimeout,
        autoSlideDelay = 6000,
        $pagination = $(".slider-pagi");

    function createBullets() {
        for (var i = 0; i < numOfSlides+1; i++) {
            var $li = $("<li class='slider-pagi__elem'></li>");
            $li.addClass("slider-pagi__elem-"+i).data("page", i);
            if (!i) $li.addClass("active");
            $pagination.append($li);
        }
    };

    createBullets();

    function manageControls() {
        $(".slider-control").removeClass("inactive");
        if (!curSlide) $(".slider-control.left").addClass("inactive");
        if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
    };

    function autoSlide() {
        autoSlideTimeout = setTimeout(function() {
            curSlide++;
            if (curSlide > numOfSlides) curSlide = 0;
            changeSlides();
        }, autoSlideDelay);
    };

    // autoSlide();

    function changeSlides(instant) {
        if (!instant) {
            animating = true;
            manageControls();
            $slider.addClass("animating");
            $slider.css("top");
            $(".slide").removeClass("active");
            $(".slide-"+curSlide).addClass("active");
            setTimeout(function() {
                $slider.removeClass("animating");
                animating = false;
            }, animTime);
        }
        window.clearTimeout(autoSlideTimeout);
        $(".slider-pagi__elem").removeClass("active");
        $(".slider-pagi__elem-"+curSlide).addClass("active");
        $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
        $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
        diff = 0;
        // autoSlide();
    }

    function navigateLeft() {
        if (animating) return;
        if (curSlide > 0) curSlide--;
        changeSlides();
    }

    function navigateRight() {
        if (animating) return;
        if (curSlide < numOfSlides) curSlide++;
        changeSlides();
    }

    $(document).on("mousedown touchstart", ".slider", function(e) {
        if (animating) return;
        window.clearTimeout(autoSlideTimeout);
        var startX = e.pageX || e.originalEvent.touches[0].pageX,
            winW = $(window).width();
        diff = 0;

        $(document).on("mousemove touchmove", function(e) {
            var x = e.pageX || e.originalEvent.touches[0].pageX;
            diff = (startX - x) / winW * 70;
            if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;

            $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
            $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
        });
    });

    $(document).on("mouseup touchend", function(e) {
        $(document).off("mousemove touchmove");
        if (animating) return;
        if (!diff) {
            changeSlides(true);
            return;
        }
        if (diff > -8 && diff < 8) {
            changeSlides();
            return;
        }
        if (diff <= -8) {
            navigateLeft();
        }
        if (diff >= 8) {
            navigateRight();
        }
    });

    $(document).on("click", ".slider-control", function() {
        if ($(this).hasClass("left")) {
            navigateLeft();
        } else {
            navigateRight();
        }
    });

    $(document).on("click", ".slider-pagi__elem", function() {
        curSlide = $(this).data("page");
        changeSlides();
    });

    $('.h-arrows-left').on('click', function () {
        navigateRight();
    });
    $('.h-arrows-right').on('click', function () {
        navigateLeft();
    });
    $('.h-left').on('click', function () {
        navigateRight();
    });
    $('.h-right').on('click', function () {
        navigateLeft();
    });

});

