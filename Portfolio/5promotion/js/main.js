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



/* -----------------------sec2----------------------- */


	if(scrollTop >= 1825){

            $('.sec02_text1').addClass('on');
        }


	if(scrollTop >= 2199){

            $('.sec02_text2').addClass('on');
        }


	if(scrollTop >= 2233){

            $('.sec02_text3').addClass('on');
        }

    if(scrollTop >= 2240){

            $('.sec02_text33').addClass('on');
        }

    if(scrollTop >= 2598){

            $('.sec02_line2').addClass('on');
        }

    if(scrollTop >= 2897){

            $('.sec02_text4').addClass('on');
        }
    
    if(scrollTop >= 2957){

            $('.sec02_text44').addClass('on');
        }       

    if(scrollTop >= 3293){

            $('.sec02_concept1').addClass('on');
        }  
    
        if(scrollTop >= 3353){

            $('.sec02_concept2').addClass('on');
        }  
        if(scrollTop >= 3909){

            $('.sec02_arrow1').addClass('on');
        }  
        if(scrollTop >= 3935){

            $('.sec02_arrow2').addClass('on');
        }  
        if(scrollTop >= 3986){

            $('.sec02_arrow3').addClass('on');
        }  
        if(scrollTop >= 4103){

            $('.sec02_text5').addClass('on');
        }  

        if(scrollTop >= 4110){

            $('.sec02_text55').addClass('on');
        }  

/* -----------------------sec3----------------------- */
        

	if(scrollTop >= 6536){

            $('.sec03_promotion').addClass('on');
        }
        
    if(scrollTop >= 6706){

            $('.sec03_text4').addClass('on');
        }

	if(scrollTop >= 7709){

            $('.sec03_text5').addClass('on');
        }
	



/* -----------------------sec4----------------------- */

	
	if(scrollTop >= 9000){

            $('.sec04_box1').addClass('on');
        }


	if(scrollTop >= 9578){

            $('.sec04_box2').addClass('on');
        }	

    if(scrollTop >= 10838){

            $('.sec04_box3').addClass('on');
        }	        



/* -----------------------sec5----------------------- */


	if(scrollTop >= 18181){

            $('.sec5_text').addClass('on');
        }

    if(scrollTop >= 18590){

            $('.sec5_text1').addClass('on');
        }

    if(scrollTop >= 18600){

            $('.sec5_text2').addClass('on');
        }    

    if(scrollTop >= 18500){

            $('.sec5_photo1').addClass('on');
        }           

    if(scrollTop >= 19000){

            $('.sec5_wed').addClass('on');
        }


	if(scrollTop >= 19590){

            $('.sec5_photo2').addClass('on');
        }



	if(scrollTop >= 20466){

            $('.sec5_text3').addClass('on');
        }



/* -----------------------sec6----------------------- */

	
if(scrollTop >= 20954){

    $('.sec6_text').addClass('on');
}

if(scrollTop >= 21100){

    $('.sec6_text0').addClass('on');
}

if(scrollTop >= 21300){

    $('.sec6_test').addClass('on');
}
	
if(scrollTop >= 22074){

    $('.sec6_wed3').addClass('on');
}

if(scrollTop >= 22851){

    $('.sec6_wed4').addClass('on');
}

if(scrollTop >= 23242){

    $('.sec6_text1').addClass('on');
}

if(scrollTop >= 23558){

    $('.sec6_text2').addClass('on');
}

/* -----------------------sec7----------------------- */


	if(scrollTop >= 24791){

            $('.sec7_wed1').addClass('on');
        }


    if(scrollTop >= 25594){

            $('.sec7_text1').addClass('on');
        }

    if(scrollTop >= 26036){

            $('.sec7_wed2').addClass('on');
        }

        if(scrollTop >= 26136){

            $('.sec7_wed3').addClass('on');
        }

        if(scrollTop >= 27287){

            $('.sec7_text2').addClass('on');
        }

        if(scrollTop >= 28680){

            $('.sec7_news1').addClass('on');
        }

/* -----------------------sec8----------------------- */        

if(scrollTop >= 29147){

    $('.sec8_text1').addClass('on');
}

if(scrollTop >= 29243){

    $('.sec8_text2').addClass('on');
}

if(scrollTop >= 30408){

    $('.sec8_text3').addClass('on');
}

if(scrollTop >= 31267){

    $('.sec8_text4').addClass('on');
}

if(scrollTop >= 32172){

    $('.sec8_text5').addClass('on');
}


if(scrollTop >= 32200){

    $('.sec8_test').addClass('on');
}

if(scrollTop >= 33062){

    $('.sec8_wed1').addClass('on');
}

if(scrollTop >= 33340){

    $('.sec8_text9').addClass('on');
}

if(scrollTop >= 33360){

    $('.sec8_wed2').addClass('on');
}

if(scrollTop >= 34743){

    $('.sec9_text4').addClass('on');
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
