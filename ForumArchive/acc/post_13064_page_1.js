[{"Owner":"Temechon","Date":"2015-03-11T18:11:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The repro case is here _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MQCX_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MQCX_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Two boxes are created with 1 seconds delay_co_ and I want each box to follow a path of 4 points._lt_/p_gt__lt_p_gt_An animation is created for each box to follow the path from point 1_co_ to point 2_co_ from point 2 to point 3_co_ and from point 3 to point 4._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The problem is_co_ my second box don_t_t move at all_co_ and I don_t_t understand why._lt_/p_gt__lt_p_gt_If I create 4 boxes_co_ results are more surprising _dd_ only the first and last box are moving...  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MQCX%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MQCX#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Can you help me please ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-11T20:39:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MQCX%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MQCX#2_lt_/a_gt_  A slightly-modified 6-boxer... works fine for me.  BUT... I set my delay to 5000.  I saw strange things happen when I used delays in the 1000-3000 area.  I once saw only 3 of 6 boxes... happen.  Look to the delay value as a problem area... I_t_d say.  (guess)  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-03-11T20:44:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The problem happens when two animations are running in the same time. If you add some positions to your PG (to keep the anmation running some times)_co_ the problem will happen too._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-11T20:54:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MQCX%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MQCX#3_lt_/a_gt_  ahh yes.  thanks.  Sorry for the false hope.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-11T21:38:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m gettin_t_ close.  _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MQCX%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MQCX#5_lt_/a_gt_  Still running 6 boxes...  but...  according to my console log_co_ box 0 uses 16 animations to get to finish.  Box1 does just ONE animation... and then stops.  This means that something is wrong with _lt_em_gt_if (nextTile)  _lt_/em_gt_for boxes 1_co_ 3 and 5.  And that_t_s what the symptoms show_co_ too.  Boxes 1 3 5 are doing only one animation step... moving only one tile._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I smell it.  I smell the bug_co_ but I bet someone else will need to take it across the finish line.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2015-03-11T23:28:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi. I_t_m pretty new with babylon_co_ but I tried to analyze your repo_co_ and I thing the problem is that you overwrite animation of an object (first_co_ third_co_ ect object)_co_ because_dd__lt_/p_gt__lt_p_gt_we have a delay of 1000. Now if count of length animations of one box(animaiton 1 +animaiton2+animation3 &gt_sm_1000) is greater then delay (true)_co_ then when you create the second box_co_ you still create animations for the first box. Animations will end_co_ you create the third_co_ works fine_co_ you will create the forth box_co_ but the third didn_t_t finish yet_co_ and you create again animations for box 3._lt_/p_gt__lt_p_gt_If you change delay value to 3000_co_ or greater_co_ you will see that all will work fine with much more boxes_co_ but with 4 points for path_co_ because length of all animation of one box is &gt_sm__eq_ delay._lt_/p_gt__lt_p_gt_I you change numbers of points for path_co_ you have to change delay value with number of (points-1)*1000._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For this _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#21MQCX%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#21MQCX#5_lt_/a_gt__co_ if change delay value to number of (point-1)*1000 (8000) it works fine_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I tried to solve it with a for loop_co_ its very close_co_ but it drink a lot of fps._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UZTVC_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UZTVC_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s just an opinion_co__lt_/p_gt__lt_p_gt_when I needed_co_ you helped me_co_ now i_t_m trying to do the same _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-12T04:43:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The problem seems to be that animatables are still _qt_playing_qt_ when animatable#onAnimationEnd() fires. So when you create a new animation in that event handler_co_ BJS sees there_t_s already an active animation_co_ and stops it_co_ which fires another recursive onAnimationEnd event. Then BJS winds up assigning two animations to the same target_co_ which other methods assume doesn_t_t happen_co_ and things go nuts._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The extra event firing sounds like a bug to me_co_ but if you just want to work around it_co_ avoid making a new animation from inside the end event handler_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_   animatable.onAnimationEnd _eq_ function() {      obj.currentTile _eq_ currentTile+1      // moveObj(obj)      setTimeout(function() { moveObj(obj) }_co_ 1)   }_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-12T05:12:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Please do not hesitate to submit a PR if you find a bug _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I_t_m little overwhelmed this week  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-03-12T05:59:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m not sure if it_t_s a bug_co_ or just a _qt_Don_t_t do that_qt_. If you want successive queued animations_co_ I think BJS expects you to use one animation with keyframes_co_ not dynamically add/remove new animation instances._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-03-12T14:36:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ I will try to debug it if I have some spare time tonight... I think Fenomas hit a good spot_co_ I will try to investigate on that and report here if needed._lt_/p_gt__lt_p_gt_Thanks to all of you !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-12T16:27:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh we_t_re not done harvesting the fun out of this topic quite yet_co_ Mister T.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  You throw a nipple like this... out into forum land... and we_t_re going to suck that puppy dry_co_ ya know?  heh_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here_t_s _lt_strong_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#PH3JF_qt_ rel_eq__qt_external nofollow_qt__gt_my latest version_lt_/a_gt__lt_/strong_gt_.  Changed lots... but not so much.  Just one box... but that box is never getting to pos[2] (10_co_ 0_co_ 10).  Watch your console.  It skips over step 2 and goes directly to step 3.  The other steps work fine._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I use an indexer called _lt_em_gt_curPosIndex_lt_/em_gt_ and I sent it as param #2 to the initial and recursive call to _lt_em_gt_moveObj()_lt_/em_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I brutally reset obj.animations to []_co_ sometimes.  I delete Animatable sometimes.  I_t_ve lubicated every darned byte-bearing I can find.  I_t_m thinkin_t_ it_t_s haunted._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just a fun pile of debris!  I love it when my shop is messy like this. And it_t_s way cool that we are _lt_u_gt_all_lt_/u_gt_ drilling and sawing on Temechon_t_s broken alarm clock... at the same time.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-03-12T18:17:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If you are not picky about how to achieve this_co_ you could use POV.  It handles multiple objects well.  Delays_co_ pausing all_co_ or individual meshes_co_ repeats are all handled._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It also deals with incremental rotation and acceleration._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is a sample which moves 50 meshes thru 20 loops_co_ with acceleration and shrinking.  They should all end up in the exact same place_co_ but since POV is an incremental process_co_ small timing changes between frames causes error.  The # of frames to do 20 loops exaggerates the error.  Smaller moves with few meshes give pretty acceptable results._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#A9TOC_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#A9TOC_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-12T21:01:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Propagation Of Variance?  JcP... you_t_re scaring the dog.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  I need to go sand-down a tumor_co_ now._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-03-13T13:13:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_JC_co_ your extension is very impressive !_lt_/p_gt__lt_p_gt_However_co_ I want to do that with Babylon.js only. For my future projects I will definitely think about it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think I found the problem (after a lot of coffee and a lot of _qt_WTF!!!_qt_)  _dd_ Bulisor and Fenomas were right _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ (Thank you guys !)_lt_/p_gt__lt_p_gt_The animation is created before the old one is removed from the array scene._activeAnimatable_lt_/p_gt__lt_p_gt_   _lt_/p_gt__lt_p_gt_My fix _dd_ the old animation should be removed and then the onAnimationEnd is called._lt_/p_gt__lt_p_gt_I will check everything and do a PR for this. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you again !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-13T14:41:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ahh...  scene.activeAnimatable.  I don_t_t think my scene object has that property.  Off to KMart to get a more modern scene object.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-03-13T15:19:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_scene._activeAnimatables (forgot the lowdash)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-13T16:23:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks T.  (you forgot the _t_s_t_ as well_co_ btw).  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tTemechon_co_ would you prefer that further experimenters go to a different thread?  Can do... just holler.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMeantime_co_ new version... _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#RFXDF_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#RFXDF_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI failed again_co_ but Temechon_t_s ideas proved... interesting_co_ at least.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this version_co_ I made a fresh func on the created animatable... called unSceneMe() [line 172].  I call it first-thing in onEnd [line 185].\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI cannot get the box to travel to it_t_s 2nd location and beyond_co_ but I surely have something else wrong.  UnSceneMe() seems to find the single box_t_s animatables in scene._activeAnimatables_co_ and removes it with the splice. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood Wingy-broken fun. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAgain_co_ Temechon_co_ I (and I_t_m sure others who are still camping this issue) ... will gladly go to a different thread_co_ if you wish.  Just say so... no probs.  I hope I didn_t_t contaminate this thread with all my social yap and lack of advanced prog skills.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-03-14T15:57:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No problem_co_ you can still comment here _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]