[{"Owner":"chadautry","Date":"2015-11-22T22:52:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I don_t_t believe ArcRotateCamera correctly uses the upVector.  Instead of getting into my use case_co_ I_t_ve setup some playground demonstrations._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Playground 1_dd_ This is the default. upVector is Y+. _lt_/p_gt__lt_p_gt_Behavior_dd_ Move the mouse left_co_ spins clockwise around the Y axis. Move the mouse right_co_ spins counter clockwise. Move the mouse up_co_ pushes the Y+ axis away from the screen_co_ move the mouse down_co_ pulls the Y+ axis towards the screen._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2K6AJC%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2K6AJC#2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This default works as expected._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Playground 2_dd_ Set the upVector to Z+_lt_/p_gt__lt_p_gt_Expected Behavior_dd_ Move the mouse left and right should spin around the Z axis. Move the mouse up and down should pull the Z axis towards and away from the screen. Unfortunately_co_ that is not the actual behavior._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2K6AJC%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2K6AJC#3_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-23T03:51:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_upVector is used by arcRotateCamera (you can also allow upSide down with cam.allowUpsideDown _eq_ true)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I think that your problem is that controls are not changed based on upVector_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chadautry","Date":"2015-11-23T15:32:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_That could be it. I_t_m trying browse the code to figure out where to change it to use upVector for the controls. But always hard looking at unfamiliar code._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_d definitely say it is an issue not using upVector in the controls as well as the drawing orientation. Kinda makes upVector pointless for the camera._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there a suggested work around I_t_m not aware of?_lt_/p_gt__lt_p_gt_I_t_m trying to re-write an existing system to use Babylon.js_co_ so changing the scene_t_s co-ordinate system to work with the camera is quite a bit of re-work I don_t_t want to do._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-23T18:11:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Nope unless adding support for the missing part_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_what do you want to achieve? what is your ultimate goal?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chadautry","Date":"2015-11-24T00:18:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Re-writting _lt_a href_eq__qt_http_dd_//chad-autry.github.io/hex-grid-map/#/demo_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//chad-autry.github.io/hex-grid-map/#/demo_lt_/a_gt_ to use Babylon.js _lt_/p_gt__lt_p_gt_For that framework I have the cartesian co-ordinate system aligned with the screen co-ordinates_co_ so that means the hex grid is flat on the Z_eq_0 _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Basically the two world co-ordinate systems aren_t_t the same. I_t_d like to get the nice behavior without re-writting my frameworks co-ordinate system._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-24T00:23:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok got it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_but the only thing you will have to do is_dd_ invert Y and Z _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chadautry","Date":"2015-11-24T00:36:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hmm_co_ not sure I_t_m seeing any _qt_only_qt_ to do. It_t_d be a tedious deal to change in my code._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The main difference is what the two frameworks consider up_co_ and the only place I_t_ve hit a problem is with the ArcFollowCamera controls._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-24T17:00:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Perhaps you should check how arcrotatecamera is handling controls_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L391_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L391_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I did not check yet but integrating upVector should not be too complex_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chadautry","Date":"2015-11-24T22:57:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yeah_co_ I played around with it some. The controls are just changing the alpha and beta angles_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think the point of change is actually _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L521_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L521_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Tried hacking it up a bit without total understanding and only managed to break it. I need to dig in and comprehend the trig there_co_ I just swapped x --&gt_sm_ y --&gt_sm_ z --&gt_sm_ x is obviously not what needs to happen._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chadautry","Date":"2015-11-28T02:22:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ by swapping Y and Z  at lines_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L497_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L497_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L499_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L499_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L504_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L504_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L521_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Cameras/babylon.arcRotateCamera.ts#L521_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m getting the behavior I_t_m wanting._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ll try to get an official pull request going where it uses the upVector to set everything. (It may take quite some time_co_ getting an equivalent re-write of my framework with rotation disabled takes priority for me)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Of further interest_dd_ I notice that as I spin the scene with the mouse I get a very pronounced movement of my view point compared to the plane. At first I thought it was all about rounding errors (the target vector is being edited on every rotation increment) But interestingly it only happens with the mouse and not the keyboard. I_t_ll have to investigate further._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chadautry","Date":"2015-11-28T02:29:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Of course I now notice the lines mentioned above don_t_t change the camera panning with the ctrl key._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-28T02:41:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sounds good!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chadautry","Date":"2015-11-30T01:49:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wrote in the wrong thread._lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2015-12-01T02_dd_49_dd_37Z_t_ title_eq__t_12/01/2015 02_dd_49  AM_t_ data-short_eq__t_3 yr_t__gt_December 1_co_ 2015_lt_/time_gt_ by chadautry_lt_/strong_gt_\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-11-30T18:42:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_SOunds really promising man!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"crn","Date":"2018-05-03T10:06:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHas anything happened about this problem? I am currently facing pretty much the same problem and while I could (and will) try the patch by _lt_strong_gt__lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17523-chadautry/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Ftopic%252F18807-arcrotatecamera-does-not-correctlly-use-upvector%252F%253Ftab%253Dcomments_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17523-chadautry/_qt_ style_eq__qt_background-color_dd_transparent_sm_color_dd_inherit_sm__qt_ title_eq__qt_Go to chadautry_t_s profile_qt_ rel_eq__qt__qt__gt_chadautry_lt_/a_gt__co_ _lt_/strong_gt_it would be really nice to have a real fix for that issue.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-03T22:07:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNot done yet (looking for volunteers _lt_span_gt__dd_))_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"crn","Date":"2018-05-11T16:03:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have tried to swap the controllers for keys_co_ (please see_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#A83GX%2330_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#A83GX#30_lt_/a_gt_) but only succeeded partially. While rotating around the z axis (i.e. the new up vector) worked fine_co_ rotation around the other axes lead to some strange effects. In the playground_co_ this can be seen best by rotation around y by pressing the up/down keys. Rotation works fine until you cross the point where the up vector coincides with the view vector_co_ after which the orientation of the y axis changes direction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhile this is somewhat understandable mathematically_co_ this seems to be handled consistently with the default up vector (0_co_ 1_co_ 0)_co_ where I can rotate in all directions without any such _qt_discontinuities_qt_. I was looking for any special handling for this in the Babylon sources_co_ but was not able to find anything.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny ideas_co_ hints  to where to look?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]