[{"Owner":"NasimiAsl","Date":"2016-07-16T17:36:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thow can correct camera  rotation when walk around of sphere\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#RW25F%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#RW25F#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-07-16T18:37:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think that a FreeCamera_co_ when moving_co_ has a cameraDirection property what a Vector3 oriented in the way the camera moves.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo if you add camera.position and camera.cameraDirection_co_ you_t_ll get a result that could be used as camera target. Thus you will look in the way you walk.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-07-16T19:13:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry_co_ what I just said is stupid _dd_ a FreeCamera always looks towards the direction of moving.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI suppose that you want to position the camera permanently on the sphere instead ...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2016-07-16T19:15:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tif it_t_s a perfect round sphere i suppose you could rotate the sphere instead_co_ that should give the wanted result.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-07-17T02:59:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twe cant rotate world we have other planets too _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ and all planets is moving \n_lt_/p_gt_\n\n_lt_p_gt_\n\tusually i try hard way to find a solution i am work on _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-07-17T03:06:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ thanks for reply maybe i ask wrong question\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti correct camera position now\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand i have gravity for any planet \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti think i need re calculate _qt_ _lt_span style_eq__qt_font-size_dd_18px_sm__qt__gt_camera target position _qt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmy next question _dd_ any way to define a jump or automatic  walk for camera with collision and gravity?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-07-17T05:49:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok\n_lt_/p_gt_\n\n_lt_p_gt_\n\tjust an idea (pseudo code_co_ all these following are vector3 substraction or addition or cross product) _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar axisCam _eq_ camera.position - sphere.position_sm_  // axis cam-sphere center_co_ so a sphere radius vector \n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar axisMove _eq_ CopyFrom(camera.cameraDirection)_sm_              // axis of the cam movement_co_ copy the last defined value. You could get Axis.X before it_t_s defined (before the first camera move) to give an initial view direction_co_ or any direction that you would choose by default. Just don_t_t set it to zero.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar cross1 _eq_ Cross(axisCam_co_ axisMove)_sm_              // a first orthogonal vector to the radius and the movement_co_ so cross1 if tangent to the sphere\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar cross2 _eq_ Cross(axisCam_co_ cross1)_sm_                   // this one is orthogonal to the radius_co_ tangent to the sphere and colinear to the movement... if not right try instead Cross(cross1_co_ axisCam)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar target _eq_ camera.position + cross2_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis should work\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-07-17T06:17:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ i check it and share result\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-07-18T17:43:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAin_t_t it great when Jerome talks Math-smack like that?  Friggin_t_ Orthogonoids... ya gotta love _t_em!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJerome_co_ of course_co_ taking a professor-like approach_co_ where as I... would hack lookAt().  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  (ie. Make the bottom of the camera constantly lookAt the planet core.)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2016-07-26T21:02:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOut of curiousity_co_ did you manage to make this work?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2016-07-27T19:28:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twho? when? what?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2016-07-28T15:00:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell. The question was actually directed at you_co_ sir _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWere you able to somehow reset the camera rotation/translation when getting to the other side of the sphere?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI simplyfied your example a bit_co_ just to make it easier for myself_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#RW25F%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#RW25F#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not even sure that I understand the issue_co_ really. Is it something like the below demonstration?_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img src_eq__qt_http_dd_//i.imgur.com/FrgxUls.png_qt_ class_eq__qt_ipsImage_qt_ alt_eq__qt_FrgxUls.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m leaning mostly toward the first figure_co_ as you quickly get the issue of the camera limitation/boundary downward/Y axis. As well as the camera just being _t_off_t_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis has the potential to make some fun _qt_border-less_qt_ game maps_co_ if you adjust the camera accordingly_co_ or make big enough spheres.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]