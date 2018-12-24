[{"Owner":"DylanD","Date":"2018-06-22T18:17:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey again everyone_co_ I have a problem_co_ I import a mesh and when I try to rotate one of the child pieces the piece rotates around the centre of the parent mesh/import instead of its own axis_t_ which is what I meant for it to do.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny idea whats wrong? and or how to fix it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think it could possible have to do with how I made the object in blender_co_ but I_t_m not very good with blender_co_ the object is only 4 object in one really_co_ imagine it was a piece of wood with 4 wheels and I want to rotate the wheels around their y axis when instead it rotates around the centres axis.\n_lt_/p_gt_\n\n_lt_p_gt_\n\theres the line I use to import the meshes and rotate(the mesh is made of 4 pieces and I just want to rotate the first piece around its own z axis)_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.SceneLoader.ImportMesh(_qt__qt__co__qt_./models/_qt__co__qt_myMesh.babylon_qt__co_this.scene_co_(meshes)_eq_&gt_sm_{\n            \n            importFunc(meshes)_sm_\n          \n               meshes[0].rotation.z +_eq_ Math.PI/4_sm_\n            \n            }\n            _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tHere is a playground to illustrate what I want to happen and whats actually happening.  The green cube is doing what I want rotating about its own axis_t__co_  the red cube it what actually happens.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPretend as though both of those cubes are from the same imported mesh.  Eg meshes[0]_co_ and that the sphere is the centre of the meshes.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-25T15:27:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthere is no playground in your post _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_By the way your code is good. The mesh will rotate locally around its center if everything is set up correctly in Blender._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Here is a simple example_dd__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#MGY5FK_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#MGY5FK_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-25T17:15:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219400_qt_ data-ipsquote-contentid_eq__qt_38409_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1529940429_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tthere is no playground in your post _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_By the way your code is good. The mesh will rotate locally around its center if everything is set up correctly in Blender._lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_Here is a simple example_dd__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#MGY5FK_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#MGY5FK_lt_/a_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHey DeltaKosh_co_ strange I noticed when I first posted it_co_ the post didn_t_t have a playground even though I added it so I added it again_co_  here Is the playground I wanted to show_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#LJPRIN%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#LJPRIN#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt must be something wrong in blender... any good tutorials that you could suggest?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-26T15:38:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31709-dyland/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31709_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31709-dyland/_qt_ rel_eq__qt__qt__gt_@DylanD_lt_/a_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Change the child world space to local space_dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/features/position_co__rotation_co__scaling_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/features/position_co__rotation_co__scaling_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-26T15:44:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20526_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/_qt_ rel_eq__qt__qt__gt_@V!nc3r_lt_/a_gt_ who can probably help with Blender _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-06-26T15:48:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDo you have a little blend scene to share?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOrigin position can be modified here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_quUOGSw.png_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_750_qt_ src_eq__qt_https_dd_//i.imgur.com/quUOGSw.png_qt_ width_eq__qt_419_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-26T16:08:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219543_qt_ data-ipsquote-contentid_eq__qt_38409_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530027528_qt_ data-ipsquote-userid_eq__qt_11286_qt_ data-ipsquote-username_eq__qt_dbawel_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t31 minutes ago_co_ dbawel said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31709-dyland/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31709_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31709-dyland/_qt_ rel_eq__qt__qt__gt_@DylanD_lt_/a_gt_ _lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt_Chance the child world space to local space_dd__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span_gt__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/features/position_co__rotation_co__scaling_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/features/position_co__rotation_co__scaling_lt_/a_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tDB\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi dbawel_co_ is this what you meant?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_meshes[0].rotate(BABYLON.Axis.Z_co_ Math.PI / 150_co_ BABYLON.Space.LOCAL)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBecause it did not work and that what I think I was supposed to do_co_ not entirely sure I.  I went through the doc but theres a lot there... \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-26T16:08:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31709-dyland/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31709_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31709-dyland/_qt_ rel_eq__qt__qt__gt_@DylanD_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI love the devs on this forum (especially _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ as he truly cares and owns his code)_co_ so the us no way to contradict them. However_co_ as an old school dev_co_ I prefer to handle simple tasks such as this in code. For me_co_ I_t_d export the meshes_co_ parent them in the code_co_ and change their world space. Done... in just a few minutes_co_ and expands your knowledge of handling world space vs. local space as well as hierarchies... which will benefit you greatly.  I hope DK or _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20526_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/_qt_ rel_eq__qt__qt__gt_@V!nc3r_lt_/a_gt_ isn_t_t offended in any way by this_co_ this is not my intent. I love these guys! We all have our opinions_co_ and are always here to help when we can.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-26T16:09:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219552_qt_ data-ipsquote-contentid_eq__qt_38409_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530028080_qt_ data-ipsquote-userid_eq__qt_20526_qt_ data-ipsquote-username_eq__qt_V!nc3r_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t23 minutes ago_co_ V!nc3r said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tDo you have a little blend scene to share?\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tOrigin position can be modified here_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_img alt_eq__qt_quUOGSw.png_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_750_qt_ src_eq__qt_https_dd_//i.imgur.com/quUOGSw.png_qt_ width_eq__qt_419_qt_ /_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHello_co_ V!nc3r!\n_lt_/p_gt_\n\n_lt_p_gt_\n\thmmmm I can_t_t share the exact one_co_ but I guess I could make an example... except I know nothing doubt blender... well I will try to get a example up.. not sure when it will happen...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will try this Geometry to origin(???/Transform/GeometrytoOrigin) Thanks.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-26T16:18:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31709-dyland/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31709_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31709-dyland/_qt_ rel_eq__qt__qt__gt_@DylanD_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would pay more attention to Pivot for simple animations_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#f0f0f0_sm_color_dd_#444444_sm_font-size_dd_16px_sm__qt__gt_mesh.setPivotPoint(Vector3)_sm__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_rgb(240_co_240_co_240)_sm_color_dd_rgb(68_co_68_co_68)_sm__qt__gt_However_co_ my favorite approach is to set a _t_null_t_ object as a child of the parent_co_ then set your visible child you want to animate as a child to the null_co_ and this provide an invisible pivot point which is not fixed... if you wish to animate this as well. But agan_co_ this is old school_co_ but still necessary in many situations. However_co_ it works in all situations for the most part. Don_t_t be afraid to layer your hierarchies_co_ as this provide endless animation possibilities. Just remember this is all accomplished in the BJS code._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_rgb(240_co_240_co_240)_sm_color_dd_rgb(68_co_68_co_68)_sm__qt__gt_DB_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-26T19:08:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219563_qt_ data-ipsquote-contentid_eq__qt_38409_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530029928_qt_ data-ipsquote-userid_eq__qt_11286_qt_ data-ipsquote-username_eq__qt_dbawel_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ dbawel said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31709-dyland/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31709_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31709-dyland/_qt_ rel_eq__qt__qt__gt_@DylanD_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI would pay more attention to Pivot for simple animations_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_background-color_dd_#f0f0f0_sm_color_dd_#444444_sm_font-size_dd_16px_sm__qt__gt_mesh.setPivotPoint(Vector3)_sm__lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_background-color_dd_rgb(240_co_240_co_240)_sm_color_dd_rgb(68_co_68_co_68)_sm__qt__gt_However_co_ my favorite approach is to set a _t_null_t_ object as a child of the parent_co_ then set your visible child you want to animate as a child to the null_co_ and this provide an invisible pivot point which is not fixed... if you wish to animate this as well. But agan_co_ this is old school_co_ but still necessary in many situations. However_co_ it works in all situations for the most part. Don_t_t be afraid to layer your hierarchies_co_ as this provide endless animation possibilities. Just remember this is all accomplished in the BJS code._lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_background-color_dd_rgb(240_co_240_co_240)_sm_color_dd_rgb(68_co_68_co_68)_sm__qt__gt_DB_lt_/span_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHey so I tried changing the pivot to something local_co_ by that I mean I made a cube and positioned it where I wanted my other mesh to rotate around_co_ then I set the meshes pivot point to the cubes position.  So I set the meshes position to the cubes position_co_ so that it would simulate its own axis_t__co_ however it started to rotate about the box but about a unit away_co_ which leads me to believe it is a larger mesh than I though.  Im trying to figure out exactly whats happening but everything keeps confusing me each step.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo more information (as you can probably tell I write a post double check _qt_my numbers_qt_ then hit post_co_ but then I get new information sometimes... _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_) when I set the new pivot point it changes the position of the mesh....\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is really confusing_co_ il try to keep updating on Important imformation.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo much to look into so little time.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-26T19:34:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tcould Quaternions help?  I know they do stuff with rotation_co_ but in a different way than_co_ mesh.rotation does.  I don_t_t really understand them though.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-26T23:42:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tperhaps you could share your blend file so _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20526_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/_qt_ id_eq__qt_ips_uid_3292_11_qt_ rel_eq__qt__qt__gt_@V!nc3r_lt_/a_gt__lt_/span_gt_ could have a look?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-27T12:28:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219604_qt_ data-ipsquote-contentid_eq__qt_38409_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530056565_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t12 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tperhaps you could share your blend file so _lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20526_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/_qt_ rel_eq__qt__qt__gt_@V!nc3r_lt_/a_gt__lt_/span_gt_ could have a look?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tunfortunately I don_t_t think I can as I do not own the blender file_co_ I am sorry. _lt_span class_eq__qt_ipsEmoji_qt__gt_😥_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlthough on this blender file It has Three pieces_co_ a body mesh a back mesh and a front mesh (I think they_t_re meshes at least).  Each piece has a black dotted line to an orange point under the body_co_ which seems to be their new origin or axis_t_ _co_  since when I try to rotate the back or front mesh they rotate about that point.   I tried using the Geometry to origin and it didn_t_t seem to work or do anything at all for that matter_co_ probably I used it wrong...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry I know this isn_t_t a lot to go off of_co_ but if you guys have any ideas I would greatly appreciate it!_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-06-27T15:51:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219654_qt_ data-ipsquote-contentid_eq__qt_38409_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530102504_qt_ data-ipsquote-userid_eq__qt_31709_qt_ data-ipsquote-username_eq__qt_DylanD_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ DylanD said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tblack dotted line to an orange point under the body\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe orange point is the origin of an object_co_ the dotted line is here to tell you there is a parent-child relation\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_O3kV41p.png_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_570_qt_ src_eq__qt_https_dd_//i.imgur.com/O3kV41p.png_qt_ width_eq__qt_1000_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere suzanne is child of the cube. If I rotate the cube_co_ suzanne turn around too. If i rotate suzanne_co_ the cube doesn_t_t care. Hope that_t_s help.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-27T15:58:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219680_qt_ data-ipsquote-contentid_eq__qt_38409_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530114665_qt_ data-ipsquote-userid_eq__qt_20526_qt_ data-ipsquote-username_eq__qt_V!nc3r_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 minutes ago_co_ V!nc3r said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe orange point is the origin of an object_co_ the dotted line is here to tell you there is a parent-child relation\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//i.imgur.com/O3kV41p.png_qt_ title_eq__qt_Enlarge image_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_O3kV41p.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ height_eq__qt_570_qt_ src_eq__qt_https_dd_//i.imgur.com/O3kV41p.png_qt_ width_eq__qt_1000_qt_ /_gt__lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tHere suzanne is child of the cube. If I rotate the cube_co_ suzanne turn around too. If i rotate suzanne_co_ the cube doesn_t_t care. Hope that_t_s help.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHey again!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHahahahaha I just checked this because I just figured out that one of my meshes is actually made up of 2 more meshes_co_ and that I might be able to rotate the other two meshes instead of the parent mesh if I can just find a way to move the child mesh!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I haven_t_t figured that out yet.  Thanks!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny ideas how to access the child meshes from an imported mesh_co_  I tried meshes[0].getchildren[0] but that didn_t_t seem to work so I_t_m not really sure how to do that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-27T15:59:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmeshes[0].getChildren()[0] should work\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-27T16:00:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhen I do a for(let piece of meshes){console.log(_qt_Another mesh_qt_)_sm_} it only logs 4 meshes when I think I should have 6_co_ since one of those 4 object should be a parent with 2 Childs.  but I guess that is not the case...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny ideas?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-27T16:03:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou can call scene.debugLayer.show() to get an UI to help you _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-27T16:43:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219687_qt_ data-ipsquote-contentid_eq__qt_38409_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530115175_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t53 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tmeshes[0].getChildren()[0] should work\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tthis makes an error(error in onSuccess call back)_co_ maybe I cannot just access those child meshes because of how they are set up in blender? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIl look into that unless you guys have any ideas?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-27T16:50:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmaybe they_t_re not actually child objects?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThey_t_re in the hierarchy like so_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmainMesh{\n_lt_/p_gt_\n\n_lt_p_gt_\n\t       backMesh{\n_lt_/p_gt_\n\n_lt_p_gt_\n\t              backMesh1\n_lt_/p_gt_\n\n_lt_p_gt_\n\t             backMesh2\n_lt_/p_gt_\n\n_lt_p_gt_\n\t      }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tdoes that not mean they have a parent child relationship?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif not how could I access those is the lower of the hierarchy?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-27T17:08:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyea so console.log(meshes[0].getChildren().length)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcomes up 0 for every import mesh from that .babylon file so maybe they_t_re not parent/child relationship\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso I_t_m back to being unsure of what to do\n_lt_/p_gt_\n\n_lt_p_gt_\n\tany ideas?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-27T17:11:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\talso I have another question_co_ any idea why sometimes when I load my scene my imported mesh is not always at the same spot?  I set the imported mesh_t_ parent to one of my in scene object and it varies where It is sometime not being ontop the object at all.  Oh and I also set their poisition to be equal to each other...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut one problem at a time I guess.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-27T17:20:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tpossible I understood wrong_co_ I think each thing is an object and then it is the higher in the hierarchy to the child like meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tso there are actually 4 meshes but more objects?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyes I think so.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DylanD","Date":"2018-06-27T19:40:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_219724_qt_ data-ipsquote-contentid_eq__qt_38409_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1530119497_qt_ data-ipsquote-userid_eq__qt_31709_qt_ data-ipsquote-username_eq__qt_DylanD_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ DylanD said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\talso I have another question_co_ any idea why sometimes when I load my scene my imported mesh is not always at the same spot?  I set the imported mesh_t_ parent to one of my in scene object and it varies where It is sometime not being ontop the object at all.  Oh and I also set their poisition to be equal to each other...\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tbut one problem at a time I guess.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI fixed this by_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tscene object is just a box mesh...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsetting the position of the scene object to 0_co_0_co_0 in the import function function.  That way if theres a loading time problem it will still be in the correct position!  (On scene load my scene object start moving_co_ so it was always a little off_co_ but too much for me).  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Still not sure about the rotation stuff though from up there ^ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I like this Babylon stuff _lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]