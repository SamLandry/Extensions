[{"Owner":"d13","Date":"2018-01-10T13:59:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Everyone!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m working on a solar system model and am currently trying to create an accurate-ish simulation of Halley_t_s Comet.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe comet tail aways points away from then sun. So_co_ I have a two part question for any experienced users out there_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. How can I obtain the vector between 2 meshes (in this case Halley_t_s Comet and the Sun)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Which properties do I need to set in the ParticleSystem object to make the particles emit in the direction of that vector?\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a561a5bf3d15_ScreenShot2018-01-10at8_44_23AM.png.609e72a0356f46e5afa1a65876be14cb.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_16567_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a561a5bf3d15_ScreenShot2018-01-10at8_44_23AM.png.609e72a0356f46e5afa1a65876be14cb.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screen Shot 2018-01-10 at 8.44.23 AM.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-01-10T14:19:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTo get the distance between two points_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlet distance _eq_ BABYLON.Vector2.Distance(Vector2_dd_ sun.position_co_ Vector2_dd_ target.position)_sm_        _lt_br /_gt_\n\treturn distance_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Amarth2Estel","Date":"2018-01-10T14:20:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi d13 !_lt_br /_gt__lt_br /_gt_\n\t1) use position property of mesh (Vector3) to compute it. _lt_br /_gt_\n\tvar vectorSunToHalley _eq_ halley.position.subtract(sun.position)_sm__lt_br /_gt__lt_br /_gt_\n\t2) You can find info about particles here _dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/babylon101/particles_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/babylon101/particles_lt_/a_gt__lt_br /_gt_\n\tParticles emission_t_s direction is given by the two properties _lt_span style_eq__qt_background-color_dd_#f0f0f0_sm_color_dd_#444444_sm_font-size_dd_16px_sm_text-align_dd_left_sm__qt__gt_direction1 and direction2_lt_/span_gt__lt_br /_gt__lt_br /_gt_\n\tNeed to see your project once it_t_s finished ! Looks beautiful !\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2018-01-10T15:53:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29328-amarth2estel/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29328_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29328-amarth2estel/_qt_ rel_eq__qt__qt__gt_@Amarth2Estel_lt_/a_gt_!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tObtaining the vector between the sun and valley_t_s comet works!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I_t_m not sure how to apply that vector to the comet tail emitter\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let vectorSunToHalley _eq_ halleysComet.position.subtract(sun.position)_sm_\ncometTail.direction1 _eq_ vectorSunToHalley_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tDoes that seem like it should work?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my program it has the result of bunching the particles up into a cube_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a5636e9eacf6_ScreenShot2018-01-10at10_48_34AM.png.e505b549d6c433e7988baa5c54120d19.png_qt_ data-fileid_eq__qt_16574_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Screen Shot 2018-01-10 at 10.48.34 AM.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16574_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a5636e9eacf6_ScreenShot2018-01-10at10_48_34AM.png.e505b549d6c433e7988baa5c54120d19.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2018-01-10T17:45:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere_t_s a playground with a simplified version of the problem_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UGDQC%2320_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UGDQC#20_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(I can reproduce the bunching-up effect if I use `_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_ps.direction1 _eq_ -vectorSunToMoon_lt_/span_gt_`)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2018-01-10T19:31:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis effect works pretty well_co_ I just have to find out how to orient the tail away from the sun_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_cometTail.direction1 _eq_ new BABYLON.Vector3(-4_co_ -8_co_ 3)_sm_\ncometTail.direction2 _eq_ new BABYLON.Vector3(4_co_ -8_co_ -3)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a566a05ca666_ScreenShot2018-01-10at2_30_00PM.png.c0aab2e005e81d6b35deac84259dc274.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_16578_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a566a05ca666_ScreenShot2018-01-10at2_30_00PM.png.c0aab2e005e81d6b35deac84259dc274.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screen Shot 2018-01-10 at 2.30.00 PM.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-01-10T19:42:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tps.lookAt(sun.position)_lt_br /_gt_\n\t?_lt_br /_gt_\n\tNot sure if that will work or not.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2018-01-10T19:55:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t`lookAt` not a function _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t.... oh... but it does work if I use lookAt on the emitter!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-01-10T20:12:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou have to update the direction_co_ as it changes when the particle system/emitter moves._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UGDQC%2323_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UGDQC#23_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1UGDQC%2324_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1UGDQC#24_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"d13","Date":"2018-01-10T20:29:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17943_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17943-aweirdo/_qt_ rel_eq__qt__qt__gt_@aWeirdo_lt_/a_gt_ Awesome_co_ that works!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hadn_t_t considered updating the direction... and normalizing it!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also got it working by using `halleysComet.lookAt(sun)` in the update function (`halleysComet` is the emitter)_co_ and by initializing the `cometTail` particle system with this direction_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_  cometTail.direction1 _eq_ new BABYLON.Vector3(3_co_ 2_co_ 16)_sm_\n  cometTail.direction2 _eq_ new BABYLON.Vector3(-3_co_ -2_co_ 16)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tNow it always points away from the sun.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks so much everyone!!!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a56779cdc444_ScreenShot2018-01-10at3_28_32PM.png.2f5ddb5330f74a6c2eba99117ba24ebe.png_qt_ data-fileid_eq__qt_16582_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Screen Shot 2018-01-10 at 3.28.32 PM.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_16582_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_01/5a56779cdc444_ScreenShot2018-01-10at3_28_32PM.png.2f5ddb5330f74a6c2eba99117ba24ebe.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]