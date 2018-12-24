[{"Owner":"Nubsy","Date":"2014-08-21T23:41:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello all!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m trying_co_ for fun_co_ to recreate the 2D/3D environment from the game Fez. My roommate was playing it_co_ and I thought it was awesome._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My problem is that I don_t_t quite understand what_t_s going on with the ortho camera._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I_t_ve created a free camera_co_ and set the mode to BABYLON.Camera.ORTHOGRAPHIC_CAMERA_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_camera _eq_ new BABYLON.FreeCamera(_qt_FreeCamera_qt__co_ new BABYLON.Vector3(0_co_ 0_co_ 0)_co_ scene)_sm_camera.mode _eq_ BABYLON.Camera.ORTHOGRAPHIC_CAMERA_sm__lt_/pre_gt__lt_p_gt_And the camera view is flat on_co_ like it should be. Except the cubes (drawn from/at the origin) I_t_ve made are really far away. The camera doesn_t_t need to zoom at all_co_ but it does need to be closer. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m finding that there_t_s not a whole lot of information about the ortho mode_co_ other than there is an ortho mode. I guess I_t_m just looking for some basic info or examples using the orthographic mode._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks! _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-08-22T11:51:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi there !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For an orthographic camera_co_ you need to specify these values _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_camera.orthoTop_sm_camera.orthoBottom_sm_camera.orthoLeft_sm_camera.orthoRight_sm__lt_/pre_gt__lt_p_gt_Here is an example _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#JLPAE_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/playground/#JLPAE_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_These values are the coordinates of a square representing the space displayed in your camera. If you want to zoom in_co_ just reduce these values._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_co_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nubsy","Date":"2014-08-22T18:31:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I do believe that is exactly what I wanted! Like I figured_co_ I just didn_t_t understand what those were actually doing. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_co_ man!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"guzuomuse","Date":"2018-05-04T03:44:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_51822_qt_ data-ipsquote-contentid_eq__qt_8712_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1408708311_qt_ data-ipsquote-userid_eq__qt_5218_qt_ data-ipsquote-username_eq__qt_Temechon_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 8/22/2014 at 7_dd_51 PM_co_ Temechon said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tFor an orthographic camera_co_ you need to specify these values\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt__co_can u tell me how to specify these values? i really need these. thank you!!!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kesshi","Date":"2018-05-04T13:14:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_213721_qt_ data-ipsquote-contentid_eq__qt_8712_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1525405482_qt_ data-ipsquote-userid_eq__qt_31360_qt_ data-ipsquote-username_eq__qt_guzuomuse_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 hours ago_co_ guzuomuse said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5218_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5218-temechon/_qt_ rel_eq__qt__qt__gt_@Temechon_lt_/a_gt__co_can u tell me how to specify these values? i really need these. thank you!!!\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIf you have a sphere with a diameter of 10 units_co_ you have to use an ortho value of 5 to make it exactly fit to the view._lt_br /_gt_\n\t_lt_br /_gt_\n\tcamera.orthoTop _eq_ 5_sm_ //5 units to the top_lt_br /_gt_\n\tcamera.orthoBottom _eq_ -5_sm_ //5 units to the bottom_lt_br /_gt_\n\tcamera.orthoLeft _eq_ -5_sm_  //5 units to the left_lt_br /_gt_\n\tcamera.orthoRight _eq_ 5_sm_ //5 units to the right\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"guzuomuse","Date":"2018-05-07T01:56:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/16973-kesshi/?do_eq_hovercard_qt_ data-mentionid_eq__qt_16973_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/16973-kesshi/_qt_ rel_eq__qt__qt__gt_@Kesshi_lt_/a_gt__co_you guide me on the right way! thanks!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]