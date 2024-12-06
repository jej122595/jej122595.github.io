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

            $('.sec1_w').addClass('on');
        }

    if(scrollTop >= 3){

            $('.sec1_o').addClass('on');
        }        

    if(scrollTop >= 6){

            $('.sec1_r').addClass('on');
        }  

    if(scrollTop >= 9){

            $('.sec1_l').addClass('on');
        }         

    if(scrollTop >= 11){

            $('.sec1_d').addClass('on');
        }   


	if(scrollTop >= 30){

            $('.sec1_vision').addClass('on');
        }


    if(scrollTop >= 600){

            $('.sec1_text').addClass('on');
        }        



	if(scrollTop >= 817){

            $('.sec1_human').addClass('on');
        }



/* -----------------------sec2----------------------- */


	if(scrollTop >= 2000){

            $('.sec2_text1').addClass('on');
        }


	if(scrollTop >= 2205){

            $('.sec2_graph1').addClass('on');
        }


	if(scrollTop >= 2250){

            $('.sec2_graph2').addClass('on');
        }

    if(scrollTop >= 2280){

            $('.sec2_graph3').addClass('on');
        }

    if(scrollTop >= 3080){

            $('.sec2_text2').addClass('on');
        }

    if(scrollTop >= 3660){

            $('.sec2_text3').addClass('on');
        }
    
    if(scrollTop >= 4201){

            $('.sec2_text4').addClass('on');
        }       

    if(scrollTop >= 4327){

            $('.sec2_text5').addClass('on');
        }  
    
        if(scrollTop >= 4580){

            $('.sec2_goal1').addClass('on');
        }  
        if(scrollTop >= 4800){

            $('.sec2_goal2').addClass('on');
        }  
        if(scrollTop >= 4900){

            $('.sec2_goal3').addClass('on');
        }  
        if(scrollTop >= 5080){

            $('.sec2_goal4').addClass('on');
        }  
        if(scrollTop >= 5188){

            $('.sec2_goal5').addClass('on');
        }  

        if(scrollTop >= 5779){

            $('.sec2_typo').addClass('on');
        }  
        if(scrollTop >= 6005){

            $('.sec2_icon').addClass('on');
        }  
        if(scrollTop >= 6040){

            $('.sec2_color').addClass('on');
        }  

        if(scrollTop >= 6400){

            $('.sec2_flow').addClass('on');
        }  

/* -----------------------sec3----------------------- */
        

	if(scrollTop >= 7244){

            $('.sec3_text1').addClass('on');
        }
        
    if(scrollTop >= 7244){

            $('.sec3_text2').addClass('on');
        }



	if(scrollTop >= 7244){

            $('.sec3_text3').addClass('on');
        }
	

	if(scrollTop >= 7764){

            $('.sec3_wed1').addClass('on');
        }
	

	if(scrollTop >= 7900){

            $('.sec3_wed2').addClass('on');
        }
	

	
	if(scrollTop >= 9259){

            $('.sec3_text4').addClass('on');
        }
	
        if(scrollTop >= 9666){

            $('.sec3_mobile').addClass('on');
        }

        if(scrollTop >= 10414){

            $('.sec3_text5').addClass('on');
        }

        if(scrollTop >= 10752){

            $('.sec3_wed4').addClass('on');
        }

        if(scrollTop >= 12574){

            $('.sec3_text6').addClass('on');
        }

        if(scrollTop >= 12200){

            $('.sec3_mobile2').addClass('on');
        }

        if(scrollTop >= 12819){

            $('.sec3_text7').addClass('on');
        }
/* -----------------------sec4----------------------- */

	
	if(scrollTop >= 13353){

            $('.sec4_text1').addClass('on');
        }


	if(scrollTop >= 13800){

            $('.sec4_wed1').addClass('on');
        }	

    if(scrollTop >= 14380){

            $('.sec4_map1').addClass('on');
        }	        

	if(scrollTop >= 14453){

            $('.sec4_map2').addClass('on');
        }


	if(scrollTop >= 14515){

            $('.sec4_map3').addClass('on');
        }



	if(scrollTop >= 14600){

            $('.sec4_map4').addClass('on');
        }



	if(scrollTop >= 14700){

            $('.sec4_map5').addClass('on');
        }


	if(scrollTop >= 14800){

            $('.sec4_map6').addClass('on');
        }

        if(scrollTop >= 15154){

            $('.sec4_text2').addClass('on');
        }

        if(scrollTop >= 15200){

            $('.sec4_text3').addClass('on');
        }


        if(scrollTop >= 15500){

            $('.sec4_wed4').addClass('on');
        }

        if(scrollTop >= 15800){

            $('.sec4_wed3').addClass('on');
        }

        if(scrollTop >= 15900){

            $('.sec4_text4').addClass('on');
        }

        if(scrollTop >= 17000){

            $('.sec4_text5').addClass('on');
        }

        if(scrollTop >= 17002){

            $('.sec4_wed5').addClass('on');
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
