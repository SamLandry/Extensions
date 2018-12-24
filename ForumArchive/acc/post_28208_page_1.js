[{"Owner":"KrzysiekF","Date":"2017-02-04T01:59:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is possible to add engraver text on my mesh / model? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2017-02-04T11:23:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can take a look at displacement maps _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/Demos/DisplacementMap/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/Demos/DisplacementMap/_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KrzysiekF","Date":"2017-02-04T20:56:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for your reply. But can you explain me this a little bit more? I_t_m just starting to learn WebGL and Babylon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKrzysiek\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-02-05T20:42:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya K... welcome to the forum.  Perhaps my friend _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt_ won_t_t mind my intervention_co_ here.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UKFP6%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UKFP6#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEssentially_co_ we start with a highly-subdivided Babylon GROUND... which is a plane with... well... lots of subdivisions.  I think these are sometimes called _qt_patch grids_qt_.  In line 29_co_ we make a ground grid... with 512 by 512 subdivisions.  It is a fairly hi-rez mesh.  This is needed so that our engraving has good _qt_clarity_qt_ or _qt_granularity_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow for all the BAD news.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Nearly EVERYTHING in this playground example... had to be done _qt_upside-down_qt_.  In line 22... hemispheric lights almost ALWAYS aim straight-up... 0_co_ 1_co_ 0.  This one aims straight down.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Line 24... the groundColor_co_ which normally is used to color the BOTTOM of hemi-lit mesh... is used to color the TOP of your engraved panel.  Weird_co_ huh?  We_t_re just getting started.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 33... the displacement map minimum height _eq_ 0_co_ and maximum height _eq_ -.5  ?  How goofy!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 34... AHA!  There is the reason.   The ground-grid needed to be inverted.... ie. flipped-over_co_ to make the hand-writing be correctly oriented.  Without flipping the ground_co_ the hand-writing was backwards.  This can likely be fixed by using a CreateGroundFromHeightMap... instead of an applyDisplacementMap.  You can experiment with that_co_ as wanted_co_ of course.  I wanted to show an example of Temechon_t_s idea.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSome might say... _qt_Hey Wingnut... why did you bother adding a StandardMaterial and doing material settings?  Why not leave it _lt_strong_gt_without_lt_/strong_gt_ material?_qt_ (lines 35_co_ 38_co_ 40).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ line 40 is important.  We are viewing the BOTTOM of the ground-grid_co_ and we needed to give it some color/texture.  Sure_co_ we might be able to get some color with light2.diffuse _eq_ someColor3 but... I decided not to try that... yet.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Remember... with light2... (the hemi).... the ._lt_em_gt_groundColor_lt_/em_gt_ is the top of the ground- grid_co_ and the _lt_em_gt_.diffuse_lt_/em_gt_ is the bottom.  (Because of the unusual -Y direction of that light)   So... setting light2.diffuse might eliminate the need for having a material_co_ and the need to set ._lt_em_gt_backFaceCulling_lt_/em_gt_.  Maybe.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tLastly_co_ this is a lighting nightmare.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  (a good challenge).   Light0 and light1 are twin v-opposing directionals... with .intensity of 30!!!  Holy crap!  That will burn your retinas into french fries right now_co_ huh?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  And still... our negatively-displaced engraved text _qt_channel_qt_... is quite dark. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s HOURS and HOURS of lighting fun to be had... trying to light that engraved text!  PARTY!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDon_t_t forget _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/lights#limitations_qt_ rel_eq__qt_external nofollow_qt__gt_THIS SECTION of our lights tutorial_lt_/a_gt_.  It says we can have more than 4 lights on a material!  All we need to do is set  _lt_em_gt_groundgrid.material.maxsimultaneousLights _eq_ 10_lt_/em_gt__sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ with 10 (or more) directional lights... I think we can properly light ALL the _qt_facets_qt_ of the engraved text _qt_channel_qt_.  Maybe.  heh.  FUN!! \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps we could fill the channel with petrol_co_ and start it burning?  Then the engraving would be well-lit_co_ huh?  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tTen directional lights... grouped_co_ and then spin the group of lights REAL sloooow... and the facets inside the text channel... should start to twinkle.  (Might need to increase the .specular on all lights_co_ and increase (high-powered-color) the .specularColor on the material itself.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDid you know that the values within a BABYLON.Color3(here_co_ here_co_ here) don_t_t NEED to be between 0 and 1?  You can put BIG FAT numbers in there!  I use blue values of 6 OFTEN!  DEMENTED!!!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Fun!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s definitely some possibilities for sparkle_co_ here.  Might need to change 512 to 1024... more facets to sparkle.  LOVE that sparkle!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps.  Holler as wanted... but have fun experimenting_co_ first. Try modifying that playground_co_ make some more saves_co_ show us what you discover_co_ if you wish.  Here are some _lt_a href_eq__qt_http_dd_//tinyurl.com/jccuyhs_qt_ rel_eq__qt_external nofollow_qt__gt_more engraving images_lt_/a_gt_.  Good luck!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat_t_s that?  You say you want another demented factoid about the upside-down ground-grid?  Ok_co_ let_t_s add light #3... a low powered pointLight.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#UKFP6%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#UKFP6#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLine 26... there it is... a point light working fine... except... umm... it MUST have a NEGATIVE Y value  (-80).  It is UNDER the groundgrid_co_ yet it shines light atop it.  WOW!  What a _qt_topsy-turvy_qt_ playground we have!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KrzysiekF","Date":"2017-02-06T05:59:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you very much for your reply!!! It_t_s so detailed. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]