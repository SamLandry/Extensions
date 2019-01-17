[{"Owner":"meteoritool","Date":"2015-12-02T12:04:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That question might sound _t_newbie_t_ to you but I can_t_t seem to find a way to repeat a video texture _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Standard material usually repeat themselves in this example _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_var box _eq_ BABYLON.Mesh.CreateBox(_qt_boxGeometry_qt__co_ 4_co_ scene_co_ true)_sm__lt_/p_gt__lt_p_gt_box.material _eq_ new BABYLON.StandardMaterial(_qt_boxMat_qt__co_ scene)_sm__lt_/p_gt__lt_p_gt_box.material.diffuseTexture _eq_ new BABYLON.Texture(_qt_textures/texture.jpg_qt__co_ scene)_sm__lt_/p_gt__lt_p_gt_box.material.diffuseTexture.uScale _eq_ box.material.diffuseTexture.vScale _eq_ 5_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_in this example_co_ _t_texture.jpg_t_ is repeated._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now when I use a video texture_co_ the _t_video.mp4_t_ is repeated only once_co_ and I can_t_t find the way to have it repeated _dd_///_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyone knows ???_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thx a lot !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-12-02T13:05:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi M!  I have no solution_co_ but I made a playground that shows the situation.  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1ZLFXJ_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1ZLFXJ_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI may have more information_co_ later.  But there are nearby people who are much more experienced than I_co_ and they might already know what the story is.  Stay tuned.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ I had a little problem getting the video to load when I first visited our _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#EKFLA%2313_qt_ rel_eq__qt_external nofollow_qt__gt_videoTexture playground demo_lt_/a_gt__co_ found in _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/01._Advanced_Texturing_qt_ rel_eq__qt_external nofollow_qt__gt_our Advanced Textures tutorial_lt_/a_gt_.  (It is the playground demo that I modified to make my test demo).  Maybe the load time was a little slow and I got impatient.  It eventually worked.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  Would everyone please report any problems with the video loading in these demos?  Thanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"meteoritool","Date":"2015-12-02T13:26:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is the BABYLON Playground example with a video texture _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#EKFLA%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#EKFLA#13_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd here what happens when trying to repeat the video material with .uScale and .vScale _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#EKFLA%2352_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#EKFLA#52_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-12-02T14:40:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well M_co_ I_t_ve been looking this over... and I have discovered nothing._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1F1POH_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1F1POH_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As you can see by the above demo_co_  DynamicTextures also have this anomaly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/src/Materials/Textures_qt_ rel_eq__qt_external nofollow_qt__gt_Both kinds of textures_lt_/a_gt_ call scene.getEngine().createDynamicTexture()  [approx the same]._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe it is not possible.  I have been known to be wrong quite often_co_ though.  I have seen many playground demos_co_ but I can_t_t remember ever seeing a tiled (u/v/w scaled) dynamicTexture or videoTexture. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_One option is to use video processing software such as Adobe After Effects or Premiere... to tile the video before using it in webGL._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hopefully_co_ smarter people than I will have some comments_co_ soon._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"meteoritool","Date":"2015-12-03T10:46:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh sorry for repeating I should_t_ve read more carrefully _sm_-)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I guess videoTexture repeating is not possible then _dd_-/_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Kudos to all contributors ! I hope this becomes possible in the future ! (I wish I could help but I_t_m not a developer alas ...)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-12-03T16:31:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   Well_co_ there_t_s another way to do this_co_ using createInstance().  It_t_s not uScale or vScale_co_ but it gets the job done_co_ I guess.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1FPL2Y%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1FPL2Y#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ it_t_s not one mesh anymore_co_ it_t_s 25 meshes (amount adjustable).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTile size is set in line 34.  Lines 26-28 are also very important_co_ of course.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you would like to treat this video wall as a single object_co_ you can parent all the video planes to an invisible _qt_gizmo_qt_ and then rotate_co_ position_co_ and scale that invisible gizmo... and the video wall will follow.  (similar to _qt_grouping_qt_)  _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1FPL2Y%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1FPL2Y#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMerging the meshes (into a single mesh) might also work_co_ but I don_t_t know much about that activity.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tParty on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-12-03T19:47:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is because the texture is not power of 2 so if you use a square video texture _co_ this should work_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-12-03T21:09:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have had power of 2 textures repeat - depending on the browser.  However_co_ there is no video standard for power of two resolution.  I would go to the babylon feature request to ask if this is possible.  Probably not at this time due to the constraints of WebGL._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-12-04T13:55:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks guys! \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.katsbits.com/tutorials/textures/make-better-textures-correct-size-and-power-of-two.php_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.katsbits.com/tutorials/textures/make-better-textures-correct-size-and-power-of-two.php_lt_/a_gt_  (great little tutorial about power of two textures)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor those who enjoy pain (like me)_co_ I present a PG from hell... _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#1ZLFXJ%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#1ZLFXJ#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI _qt_hijacked_qt_ the framework_t_s _lt_em_gt_VideoTexture_lt_/em_gt_ class (lines 4-74) and the engine_t_s _lt_em_gt_createDynamicTexture_lt_/em_gt_ function (lines 76-205)... putting both into the playground code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen I tried a bunch of forcing in lines 26-36 area.  I tried to set _lt_em_gt__this.video.videoWidth/Height_lt_/em_gt__co_ so that the createDynamicTexture() in line 46 had some forced values_co_ but the alert told me that the values weren_t_t holding (or I was screwing-up the testing).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen I tried line 47... forcing some power-of-two numbers into the first two parameters_co_ and setting the final parameter (called _lt_em_gt_forceExponantOfTwo_lt_/em_gt_) to true_co_ and that failed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn lines 36-44_co_ I removed the conditional_co_ and tried forcing BABYLON.Texture.WRAP_ADDRESSMODE (as opposed to CLAMPMODE) and that didn_t_t appear to do anything.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis was all before the professionals showed-up.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt_  Doing demented torture tests like these... is how I learn_co_ sometimes.  So_co_ I thought I would provide this messy playground and tell of the things I _lt_u_gt_didn_t_t_lt_/u_gt_ learn by working with it.  heh.  This way_co_ others can share in my enjoyable pain_co_ if they wish. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOriginally_co_ I was _lt_u_gt_only_lt_/u_gt_ going to provide a test playground_co_ and then get out of the way_co_ because this issue was/is WAY over my head.  But then I said _qt_Heck_co_ the water is well over my head_co_ I might as well inhale a lung-full_co_ and go for the full drowning_qt_ ... and so I did.  But we all know that _qt_over my head_qt_ and _qt_drowning_qt_ is just a temporary condition_co_ and quite changeable (time being a factor).  A person has to WANT IT!   We have to SEEK air.  That_t_s how the pros became pros.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe framework code is amazing.  Our core coders dance-around the webGL limitations and make it look easy_co_ but it_t_s not.  They check for this_co_ check for that_co_ SO MUCH compensating for webGL limitations... trying to make it all _qt_just work_qt__co_ no matter what.  Amazing!  I don_t_t know how the BJS super-coders do it... I really don_t_t.  So_co_ I must keep learning until I do. _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI agree 100%_co_ Meteor.  Kudos to all contributors!  Someday Meteor_co_ you and I will be qualified to do framework contributions... and maybe it starts with hijacking framework code into playgrounds_co_ turning knobs_co_ and watching what happens.  I crashed my FF browser about 10 times while testing tweaks and forced settings_co_ yesterday.  So... save often_co_ and have fun.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again for the power-of-two advice/tips_co_ guys.  Party on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"meteoritool","Date":"2015-12-04T16:48:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Okay so I tried with a square video_co_ didn_t_t work_co_ then formatted the same video to a power of 8 size (1024 x 1024) and IT WORKED !!!!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The problem is officially solved !!!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ (for me at least)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for your help_co_ a lot !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This was useful _dd_ _lt_a href_eq__qt_http_dd_//www.katsbits.com/tutorials/textures/make-better-textures-correct-size-and-power-of-two.php_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.katsbits.com/tutorials/textures/make-better-textures-correct-size-and-power-of-two.php_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_@Wingnut I don_t_t enjoy pain that much_co_ and I enjoy BABYLON.js a lot for that matter  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-12-04T21:24:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The most efficient textures should be true power of 2 textures such as 64X64_co_ 128X128_co_ 256X256_co_ etc.  As for video looping on a plane_co_ I generally use 512X512 or 1024X1024 - since you don_t_t generally need any higher resolution for todays devices - yet._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]