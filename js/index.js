$(function(){
     /*글자조절전역변수:s*/
      var $p=$('.rv_both ul li a p');
      var $pTxt=[];
      var $pSize=[];
      var $pTxt_chg1=[];
      var $pTxt_chg2=[];
      for(var i=0;i<$p.length;i++){
          $pTxt[i]=$('.rv_both ul li a p').eq(i).text();
          $pSize[i]=$('.rv_both ul li a p').eq(i).text().length;
          $pTxt_chg1[i]=$pTxt[i].slice(0,54);
          $pTxt_chg2[i]=$pTxt[i].slice(0,$pSize[i]);
        // console.log(i+$pTxt_chg2[i])
         }
     /*글자조절전역변수:e*/
    $('a[href="#"]').on('click',function(e){
        e.preventDefault();
    })
    $('.mainSlider').slick({
        autoplay: true,
        dots: true,
        speed: 1000,
        responsive: [
            {
              breakpoint: 767,
              settings: {
                  arrows: false
              }
            }
        ]
    });
    $('.depth1').on('mouseenter',function(){
        $('.depth2').stop().slideDown(200);
        $('.depth2_bg').stop().slideDown(200);
    })
    $('.depth1').on('mouseleave',function(){
        $('.depth2').stop().slideUp(200);
        $('.depth2_bg').stop().slideUp(200);
    })
    $('.list_story').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1279,
              settings: {
                slidesToShow: 3,
                slidesToScroll:3,
                infinite: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll:2
              }
            },    
        ]
    })
    /*box영역*/
    var current=0;
    $('.support .prev_w').on('click',function(){
        current--;
        if(current<0){current=2}
        $('.support_slide .Slide_b').eq(current).show();
        $('.support_slide .Slide_b').eq(current).siblings().hide();
        
    })
    $('.support .next_w').on('click',function(){
        current++;
        if(current>2){current=0}
        $('.support_slide .Slide_b').eq(current).show();
        $('.support_slide .Slide_b').eq(current).siblings().hide();
    })    
    $('.adopt .prev_w').on('click',function(){
        current--;
        if(current<0){current=2}
        $('.adopt_slide .Slide_b').eq(current).show();
        $('.adopt_slide .Slide_b').eq(current).siblings().hide();
        
    })
    $('.adopt .next_w').on('click',function(){
        current++;
        if(current>2){current=0}
        $('.adopt_slide .Slide_b').eq(current).show();
        $('.adopt_slide .Slide_b').eq(current).siblings().hide();
    })
    /*태블릿-메인슬라이더 이미지 교체*/
    $(window).on('load resize',function(){//window가 load(열렸거나) resize(사이즈가 바꼈을 때)를 복수로 달아줌
     var winWidth=$(window).width();
     if(winWidth<1280 && winWidth >=768){
         $('#SliderImg1').attr({src:'img/mainimg1-tab.png'})
         $('#SliderImg2').attr({src:'img/mainimg2-tab.png'})
         $('#SliderImg3').attr({src:'img/mainimg3-tab.png'})
         $('#SliderImg4').attr({src:'img/mainimg4-tab.png'})
         $('.rv_both>a').on('click',function(){
             $(this).addClass('on')
             $(this).parent().siblings().children('a').removeClass('on');
             $(this).siblings('ul').show();
             $(this).parent().siblings().children('ul').hide()
         })
        // $('.depth2_bg').hide();
         $('.depth1_tab').on('click',function(){
             $(this).children('.depth2_tab').slideToggle();
             $(this).siblings().children('.depth2_tab').slideUp();
         })
         $('.closeTab').on('click',function(){
             $('.navTab_dim').hide();
             $('body').css({overflow:'auto'})
             
         })
         $('.mb_menu_btn').on('click',function(){
             $('.navTab_dim').show();
             $('body').css({overflow:'hidden'})
             
         })
     }else if(winWidth<767){
         $('#SliderImg1').attr({src:'img/mainimg1_mob.png'})
         $('#SliderImg2').attr({src:'img/mainimg2_mob.png'})
         $('#SliderImg3').attr({src:'img/mainimg3_mob.png'})
         $('#SliderImg4').attr({src:'img/mainimg4_mob.png'})
         $('.rv_both>a').on('click',function(){
             $(this).addClass('on')
             $(this).parent().siblings().children('a').removeClass('on');
             $(this).siblings('ul').slideDown();
             $(this).parent().siblings().children('ul').slideUp()
         })
         $('.mb_menu_btn').on('click',function(){
             $('.navTab_dim').show();
             $('body').css({overflow:'hidden'})
             
         })
         $('.depth1_tab').on('click',function(){
             $(this).children('.depth2_tab').slideDown();
             $(this).siblings().children('.depth2_tab').slideUp();
         })
         $('.closeTab').on('click',function(){
             $('.navTab_dim').hide();
             $('body').css({overflow:'auto'})
             
         })
     }
        //글자 조절
         for(var i=0;i<$p.length;i++){
            if(winWidth<767){
                 $p.eq(i).text($pTxt_chg1[i]+'...');
            }else{
                 $p.eq(i).text($pTxt_chg2[i]);       
            }
        }
        
     });//윈도우 사이즈 끝 
        
      
        
        
        

})