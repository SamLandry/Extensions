[{"Owner":"Zareh","Date":"2017-11-03T19:40:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello I am new in this_co_ I am working on a project for the college.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am trying to make an elevator when i am inside the elevator and the elevator floor goes up it wont detect the camera to push the camera up.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmy collissions are enabled and is working fine i can detect obstacles when I move the camera(Freecamera) with the keyboard.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand i can step up on the floor of the elevator.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut when I Have a moving object and it hits the camera it doesnt detect the obstacle. (elevator floor in my case).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe link of my code is below.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am sorry the code is terribly arranged.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe script_dd_ _lt_a href_eq__qt_https_dd_//drive.google.com/open?id_eq_1BSs2BB0Ns9BDmwLSyePiqHtKEBHM9F91_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//drive.google.com/open?id_eq_1BSs2BB0Ns9BDmwLSyePiqHtKEBHM9F91_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe whole project_dd_ _lt_a href_eq__qt_https_dd_//drive.google.com/open?id_eq_1xm0JyQXJY2yD-wck9Y3bs5tKcg01LYRI_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//drive.google.com/open?id_eq_1xm0JyQXJY2yD-wck9Y3bs5tKcg01LYRI_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks a lot _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tscene.collisionsEnabled _eq_ true_sm__lt_br /_gt_\n\tcamera.checkCollisions _eq_ true_sm__lt_br /_gt_\n\tcamera.applyGravity _eq_ true_sm__lt_br /_gt_\n\tcamera.collisionRadius _eq_ new BABYLON.Vector3(2_co_ 2_co_ 2)_sm__lt_br /_gt_\n\tcamera.ellipsoid _eq_ new BABYLON.Vector3(1_co_ 4.5_co_ 1)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tvar elevupfun _eq_ function (mesh2_co_mesh4_co_mesh5_co_mesh6) {_lt_br /_gt_\n\tvar posopdor1 _eq_ new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger_co_ mesh4_co_ _qt_position_qt__co_new BABYLON.Vector3(11.625_co_  7.625_co_ 35.5)_co_ 200)_sm__lt_br /_gt_\n\tvar scalopdor1 _eq_ new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger_co_ mesh4_co_ _qt_scaling_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 1 )_co_ 200)_sm__lt_br /_gt_\n\tvar posclosdor1 _eq_ new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger_co_ mesh4_co_ _qt_position_qt__co_new BABYLON.Vector3(13.5_co_  7.625_co_ 35.5)_co_ 200)_sm__lt_br /_gt_\n\tvar scalclosdor1 _eq_ new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger_co_ mesh4_co_ _qt_scaling_qt__co_ new BABYLON.Vector3(1_co_ 1_co_ 1 )_co_ 200)_sm__lt_br /_gt_\n\tvar posopdor2 _eq_ new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger_co_ mesh5_co_ _qt_position_qt__co_new BABYLON.Vector3(19.125_co_  7.625_co_ 35.5)_co_ 200)_sm__lt_br /_gt_\n\tvar scalopdor2 _eq_ new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger_co_ mesh5_co_ _qt_scaling_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 1 )_co_ 200)_sm__lt_br /_gt_\n\tvar posclosdor2 _eq_ new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger_co_ mesh5_co_ _qt_position_qt__co_new BABYLON.Vector3(17.25_co_  7.625_co_ 35.5)_co_ 200)_sm__lt_br /_gt_\n\tvar scalclosdor2 _eq_ new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger_co_ mesh5_co_ _qt_scaling_qt__co_ new BABYLON.Vector3(1_co_ 1_co_ 1 )_co_ 200)_sm__lt_br /_gt_\n\tvar elevup _eq_ new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPickTrigger_co_ mesh6_co_ _qt_position_qt__co_new BABYLON.Vector3(15.25_co_  30.1_co_ 40.0625)_co_ 4000)_sm__lt_br /_gt_\n\tmesh2.actionManager.registerAction(posclosdor1)_sm__lt_br /_gt_\n\tmesh2.actionManager.registerAction(scalclosdor1)_sm__lt_br /_gt_\n\tmesh2.actionManager.registerAction(posclosdor2)_sm__lt_br /_gt_\n\tmesh2.actionManager.registerAction(scalclosdor2)_sm__lt_br /_gt_\n\tmesh2.actionManager.registerAction(elevup)_sm__lt_br /_gt_\n\t}_lt_br /_gt_\n\televupfun(elevinsidebutton_co_elevatordoor1L_co_elevatordoor1R_co_ elevground)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-05T02:24:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya Zareh_co_ welcome to the forum!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou are a lucky person.  We have a fun function_dd_   elevatorFloor._lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt_moveWithCollisions(new BABYLON.Vector3(someAmount_co_ someAmount_co_ someAmount))_lt_/span_gt__sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#TDM98%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#TDM98#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere in our BJS playground_co_ I have assembled a demo.  We like the playground.  When forum users can create a playground to illustrate the problem_co_ a very large team of helpers will work to find solutions and provide great ideas.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the above playground_co_ line 15 is interesting.  The ._needMoveForGravity is what causes the FreeCamera to start falling... when scene.isReady (with the help of camera.applyGravity_co_ of course).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe MOST interesting part... is the plane.moveWithCollisions() in line 55.  (plane _eq__eq_ ground)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know how much JS experience you have.... but a setTimeout (in line 52) can be used as a delay.  The delay is about 10 seconds_co_ dictated by the _t_10000_t_ in line 61_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ the camera starts falling immediately_co_ and after 10 seconds... I do a _t_registerBeforeRender(some function)_t_.  I insert some code... into the scene render-loop... to be executed every rendering (but only if elevator floor-plane is LESS THAN 40 units into the air).  With me?  I hope so.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf we raise the elevator floor using .moveWithCollisions... the camera will raise WITH the floor-plane.  You can see it happen in that demo. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut... we are using .moveWithCollisions... which has the _t_behavior_t_ of disallowing movement IF a (non-scrub-around-able*) collision happens.  That is why the elevator raising... stops when it hits the bottom of the collision-active box that is sitting in the air.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t* Continued .moveWithCollisions AFTER two mesh ellipsoids collide... can cause moved mesh to _qt_scrub-off-of_qt_ collided mesh.  This includes dive-under_co_ climb-over_co_ and scrub-off to either side.  Pretend you are pushing two bowling balls together.  If not perfectly aligned_co_ the balls will somehow move-around each other.  The AMOUNT of offset-from-perfectly-aligned... necessary to cause two pushing collided-mesh.ellipsoids to _qt_scrub-off_qt_... is set via the float value of _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/3.1/engine#static-collisionsepsilon-number_qt_ rel_eq__qt_external nofollow_qt__gt_engine.collisionsEpsilon_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will stop there_co_ and see how well you understand.  I am not the best at explaining things.  I hope I was somewhat clear and didn_t_t accidentally say something incorrect.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tFeel free to make edits to that playground_co_ and do more RUNS_co_ and make more SAVES_co_ and paste the URL_t_s for newly-saved playgrounds... here... to this thread... if you wish to talk about something. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can_t_t hurt ANYTHING in the playground (unless you bang your head with a hammer while using it).  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  There is no chance to accidentally damage ANY already-saved or built-in playground demos.  The BabylonJS playground is a great app... we all LOVE it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(we_t_re a little concerned about a screen-scroll that causes a white line across the bottom of the app... but that_t_s for playground admin to deal-with.)  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI hope this helps.  Stay in touch.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]