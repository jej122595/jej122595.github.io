window.addEventListener('DOMContentLoaded', function () {


    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();



    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });





    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log(scrollTop);


        $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)



/* -----------------------sec1----------------------- */

if(scrollTop >= 0){

    $('.sec01_photo1').addClass('on');
}

if(scrollTop >= 396){

    $('.sec01_photo2').addClass('on');
}

	if(scrollTop >= 1197){

            $('.sec01_text').addClass('on');
        }

/* -----------------------sec2----------------------- */
        

	if(scrollTop >= 2131){

            $('.sec02_text1').addClass('on');
        }
        
    if(scrollTop >= 2154){

            $('.sec02_text2').addClass('on');
        }

	if(scrollTop >= 2330){

            $('.sec02_text10').addClass('on');
        }
	
        if(scrollTop >= 2727){

            $('.sec02_text3').addClass('on');
        }

        if(scrollTop >= 2811){

            $('.sec02_text4').addClass('on');
        }

        if(scrollTop >= 2983){

            $('.sec02_text5').addClass('on');
        }

        if(scrollTop >= 3062){

            $('.sec02_text6').addClass('on');
        }
        if(scrollTop >= 3276){

            $('.sec02_text7').addClass('on');
        }	

        if(scrollTop >= 3580){

            $('.sec02_text8').addClass('on');
        }	

        if(scrollTop >= 4000){

            $('.sec02_text9').addClass('on');
        }	

/* -----------------------sec3----------------------- */

	

    if(scrollTop >= 5615){

            $('.sec03_text2').addClass('on');
        }	 
        
        if(scrollTop >= 6750){

            $('.sec03_text3').addClass('on');
        }	

        if(scrollTop >= 7783){

            $('.sec03_text4').addClass('on');
        }	


        if(scrollTop >= 8435){

            $('.sec03_pad1').addClass('on');
        }	

        if(scrollTop >= 9225){

            $('.sec03_phone1').addClass('on');
        }	

        if(scrollTop >= 9225){

            $('.sec03_test').addClass('on');
        }	

        if(scrollTop >= 9533){

            $('.sec03_text5').addClass('on');
        }	


        if(scrollTop >= 10035){

            $('.sec03_text6').addClass('on');
        }
        
        if(scrollTop >= 10175){

            $('.sec03_text7').addClass('on');
        }

        if(scrollTop >= 11593){

            $('.sec03_photo1').addClass('on');
        }

        if(scrollTop >= 12839){

            $('.sec03_pad3').addClass('on');
        }

        if(scrollTop >= 13082){

            $('.sec03_text8').addClass('on');
        }


/* -----------------------sec4----------------------- */


	if(scrollTop >= 15273){

            $('.sec04_text1').addClass('on');
        }
        if(scrollTop >= 15614){

            $('.sec04_text2').addClass('on');
        }




    });




    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });





    (function () {


        setTimeout(()=>{
            $('.main').addClass('on');
        },1000)
	$('.logo').addClass('on')
 	$('.bg_top').addClass('on');
	 $('.main_title1').addClass('on');
	 $('.main_title2').addClass('on');
	$('.sub_title').addClass('on');
/*

        gsap.to(".box2", {
            x: 400,
            scrollTrigger: {
                trigger: ".box2",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: false,
                id: "scrub"
            }
        });

        gsap.to(".box3", {
            x: 400,
            rotation: 360,
            scrollTrigger: {
                trigger: ".box3",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: true,
                id: "scrub"
            }
        });*/

    })();



})
