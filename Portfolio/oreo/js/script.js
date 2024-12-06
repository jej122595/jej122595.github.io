
const loadCircle = $('#load .progress_box .circle');
const percent=$('#load .progress_box .percent span');
const loading = ()=>{
    let progress = 0;
    const play = () =>{
        progress++;
        console.log(progress);
        loadCircle.css('left', `calc(${progress}% - 76px)`)

        percent.text(progress);
        if(progress < 100) {
            requestAnimationFrame(play);
        }
        else{$('#load').addClass('disable');}
    }

    requestAnimationFrame(play);

}

loading();

//sec02
const sec02Box = $ ('.sec02 .sec_content_box');
const sec02Btn = $ ('.sec02 .sec_btn');

sec02Btn.on('mouseenter',()=>{
    sec02Box.addClass('on');
})

sec02Btn.on('mouseleave',()=>{
    sec02Box.removeClass('on');
})



// sec04
const backImg = $('.sec04 .back_img');
const chr = $('.chr');


// sec05
const imgListInner = $('.sec05 .img_list_inner')
const sec05ImgInner = $('.sec05 .img_inner')



// sec07
const sec07Cont = $('.sec07_cont');

//높이=sec04높이=뷰포트 높이//
let sec04Height = $('.sec04').height() - window.innerHeight;

let sec05Height =$('.sec05').height() - window.innerHeight;

let sec07Height =$('.sec07').height() - window.innerHeight;

let sec08Height =$('.sec08').height() - window.innerHeight;





$(window).on('scroll', (e)=>{
    let sec04scrollValue = window.scrollY - document.getElementById('section04').offsetTop;

    let sec05scrollValue = window.scrollY - document.getElementById('section05').offsetTop;

    let sec07scrollValue = window.scrollY - document.getElementById('section07').offsetTop;

    let sec08scrollValue = window.scrollY - document.getElementById('section08').offsetTop;



    let sec04Perheight = (sec04scrollValue / sec04Height) *100;
    let sec05Perheight = (sec05scrollValue / sec05Height) *100;
    let sec07Perheight = (sec07scrollValue / sec07Height) *100;
    let sec08Perheight = (sec08scrollValue / sec08Height) *100;
    if(sec04scrollValue >=0) {



        console.log(sec04Perheight / 30) * 100
        console.log(sec04Perheight)



    

        chr. eq(0).css('left',45 + (Math.min((sec04Perheight / 30) * 100, 100) / 20 ) + '%')
        chr. eq(0).css('bottom',(-30) + ((Math.min((sec04Perheight / 30) * 100, 100) / 1.25 )) + '%')
    
        chr. eq(1).css('left',45+ (Math.min(((sec04Perheight - 30 > 0 ? sec04Perheight - 30 : 0) / 30) * 100, 100) / 20 ) + '%')
        chr. eq(1).css('bottom',(-30) + ((Math.min(((sec04Perheight - 30 > 0 ? sec04Perheight - 30 : 0) / 30) * 100, 100) / 1.25 )) + '%')
    
        chr. eq(2).css('left',55+ (Math.min(((sec04Perheight - 70 > 0 ? sec04Perheight - 70 : 0) / -30) * 100, 100) / 20 ) + '%')
        chr. eq(2).css('bottom',(-30) + ((Math.min(((sec04Perheight - 70 > 0 ? sec04Perheight - 70 : 0) / 30) * 100, 100) / 1.25 )) + '%')

    backImg.css('transform', 'translateX(-'+(sec04Perheight)+'%')

    
    }


    if(sec04scrollValue >= -100){
        
        if(sec04Perheight > 99){
            $('.sec04 .ufo_wrap').fadeOut();
        }else{
            $('.sec04 .ufo_wrap').fadeIn();
        }
    }else{
        $('.sec04 .ufo_wrap').fadeOut();
    } 


    if(sec05scrollValue >= -100){

        console.log(sec05scrollValue)
        
        if(sec05Perheight > 99){
            $('.sec05 .sec_flex_box').fadeOut();
        }else{
            $('.sec05 .sec_flex_box').fadeIn()
            $('.sec05 .sec_flex_box').css('display','flex')
        }

        if(sec05Perheight < 33 ){
            sec05ImgInner.slideDown();
            imgListInner.css('transform','translteX(0)');
            imgListInner.eq(0).css('transform', `translateX(-${(sec05Perheight > 0 ? sec05Perheight -10 : 0.33) * 3 + -1}%)`)

        }else if(sec05Perheight < 66)
        {sec05ImgInner.eq(0).slideUp();
            sec05ImgInner.eq(1).slideDown();
            sec05ImgInner.eq(2).slideDown();
            imgListInner.eq(1).css('transform', `translateX(-${(sec05Perheight -33) * 3 + -1}%)`)
        }

        else if(sec05Perheight < 97)
            {sec05ImgInner.eq(0).slideUp();
                sec05ImgInner.eq(1).slideUp();
                sec05ImgInner.eq(2).slideDown();
                imgListInner.eq(2).css('transform', `translateX(-${(sec05Perheight -66) * 3 + -1}%)`)
            }

        else {
                sec05ImgInner.slideUp();
            }



    }else{
        $('.sec05 .sec_flex_box').fadeOut();
    } 




    if(sec07scrollValue >= -100){
        if(sec07Perheight > 99){
            $('.sec07_inner').fadeOut();
        }else{
            $('.sec07_inner').fadeIn();

        }

        sec07Cont.css('transform', 'translateX(-'+(sec07Perheight)+'%')
    } else{
        $('.sec07_inner').fadeOut();
    }


    if(sec08scrollValue >= -100){
        if(sec08Perheight > 99){
            $('.sec08 .slides').fadeOut();
            $('.sec08 .cookies').fadeOut();
        }else{
            $('.sec08 .slides').fadeIn();
            $('.sec08 .cookies').fadeIn();

        }

        $('.sec08 .cookies').css('transform', 'translateX(-'+(sec08Perheight)+'%')
    } else{
        $('.sec08 .slides').fadeOut();
        $('.sec08 .cookies').fadeOut();
    }

// sec06


const sec06BtnEnd = $('.sec06 .end');
const sec06BtnNight = $('.sec06 .night');
const sec06Tit = $('.sec06_tit');


sec06BtnEnd.on('mouseenter',()=>{
    sec06Tit.addClass('fallen');

})


sec06BtnNight.on('mouseenter',()=>{
    sec06Tit.removeClass('fallen');

})




// const box = $('.box')
//     box.css('top', (scrollValue/5) + 'px')



})


// $('.sec05 .img_list_wrap .img_list_inner') .slideUp()