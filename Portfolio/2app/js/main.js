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


	if(scrollTop >= 5){

            $('.act1').addClass('on');
        }



	if(scrollTop >= 50){

            $('.act3').addClass('on');
        }


    if(scrollTop >= 60){

            $('.title').addClass('on');
        }        



	if(scrollTop >= 80){

            $('.act2').addClass('on');
        }



	if(scrollTop >= 140){

            $('.act4').addClass('on');
        }

	
	if(scrollTop >= 180){

            $('.act5').addClass('on');
        }




	if(scrollTop >= 2080){

            $('.sec1_box').addClass('on');
        }


	if(scrollTop >= 2080){

            $('.sec1_box2').addClass('on');
        }

	if(scrollTop >= 3124){

            $('.sec1_act').addClass('on');
        }

	if(scrollTop >= 4461){

            $('.sec1_act2').addClass('on');
        }


	if(scrollTop >= 5966){

            $('.sec1_act3').addClass('on');
        }


	if(scrollTop >= 5973){

            $('.sec1_act4').addClass('on');
        }

/* -----------------------sec2----------------------- */


	if(scrollTop >= 6902){

            $('.sec2_persona').addClass('on');
        }


	if(scrollTop >= 7611){

            $('.sec2_talk').addClass('on');
        }


	if(scrollTop >= 8450){

            $('.sec2_talk2').addClass('on');
        }

/* -----------------------sec3----------------------- */
        

	if(scrollTop >= 12166){

            $('.sec3_text1').addClass('on');
        }
        
    if(scrollTop >= 12166){

            $('.sec3_mobile1').addClass('on');
        }



	if(scrollTop >= 12016){

            $('.sec3_test1').addClass('on');
        }
	

	if(scrollTop >= 13363){

            $('.sec3_text2').addClass('on');
        }
	

	if(scrollTop >= 13363){

            $('.sec3_mobile2').addClass('on');
        }
	

	
	if(scrollTop >= 13363){

            $('.sec3_test2').addClass('on');
        }
	
/* -----------------------sec4----------------------- */

	
	if(scrollTop >= 14668){

            $('.sec4_text1').addClass('on');
        }


	if(scrollTop >= 14826){

            $('.sec4_text3').addClass('on');
        }	

    if(scrollTop >= 15045){

            $('.sec4_text2').addClass('on');
        }	        

	if(scrollTop >= 15188){

            $('.sec4_text4').addClass('on');
        }


	if(scrollTop >= 15682){

            $('.sec4_text5').addClass('on');
        }



	if(scrollTop >= 15800){

            $('.sec4_test1').addClass('on');
        }



	if(scrollTop >= 15900){

            $('.sec4_text6').addClass('on');
        }


	if(scrollTop >= 16000){

            $('.sec4_img').addClass('on');
        }

/* -----------------------sec5----------------------- */


	if(scrollTop >= 18031){

            $('.sec5_keyword1').addClass('on');
        }

    if(scrollTop >= 18031){

            $('.sec5_keyword2').addClass('on');
        }

    if(scrollTop >= 19736){

            $('.sec5_arrow').addClass('on');
        }    

    if(scrollTop >= 20069){

            $('.sec5_best').addClass('on');
        }           

    if(scrollTop >= 20748){

            $('.sec5_test2').addClass('on');
        }


	if(scrollTop >= 22795){

            $('.sec5_window1').addClass('on');
        }



	if(scrollTop >= 23130){

            $('.sec5_test3').addClass('on');
        }


	if(scrollTop >= 24257){

            $('.sec5_window2').addClass('on');
        }


/* -----------------------sec6----------------------- */

	
	if(scrollTop >= 26091){

            $('.sec6_review1').addClass('on');
        }


	
	if(scrollTop >= 26004){

            $('.sec6_test1').addClass('on');
        }



	if(scrollTop >= 26661){

            $('.sec6_counce').addClass('on');
        }



	if(scrollTop >= 26784){

            $('.sec6_counce2').addClass('on');
        }



	if(scrollTop >= 27860){

            $('.sec6_mobile1').addClass('on');
        }



	if(scrollTop >= 27860){

            $('.sec6_mobile2').addClass('on');
        }



	if(scrollTop >= 27860){

            $('.sec6_test2').addClass('on');
        }


/* -----------------------sec7----------------------- */


	if(scrollTop >= 29250){

            $('.sec7_notice').addClass('on');
        }


    if(scrollTop >= 29907){

            $('.sec7_act1').addClass('on');
        }

    if(scrollTop >= 30224){

            $('.sec7_act2').addClass('on');
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
