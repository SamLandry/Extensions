[{"Owner":"JohnK","Date":"2016-08-18T16:38:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn trying to create a PG to solve another topic I came across the strange phenomenon (well it might not be strange just not what I expected) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHaving used MeshBuilder to create some small boxes and  big box to fit them in I decided to make the box lidless by making the top transparent.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDid this by setting a faceColor for the top face as\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_faceColors[4] _eq_ new BABYLON.Color4(0_co_0_co_0_co_0)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand realised that I then needed to set hasVertexAlpha to be true for the bigbox. _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KH9RY%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KH9RY#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut the the rear and side faces disappear depending on camera angle.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAhah a moment of inspiration_co_ I needed to make the sideOrientation DOUBLESIDE but then the front side disappeared. To check what was happening I made the rear face red\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_faceColors[0] _eq_ new BABYLON.Color4(1_co_0_co_0_co_1)_sm_ _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAs you rotate the box so that you can view towards the rear red face_co_ the red face disappears but the redness is applied to the inner small boxes (or so it appears) STRANGE_lt_img alt_eq__qt__dd_wacko_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ title_eq__qt__dd_wacko_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KH9RY%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KH9RY#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny explanations_co_ corrections_co_ advice very welcome perhaps one for _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2016-08-18T19:03:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell_co_ when a mesh is declared as having VertexAlpha_co_ it is fully considered as a transparent mesh_co_ even if its alpha value is 1.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe alpha blending is computed for an entire mesh and is compared to the other ones. It_t_s not computed_co_ for performance reasons_co_ per mesh face. I guess that_t_s why you have these unexpected behavior _dd_ the transparent faces (even with alpha _eq_ 1) aren_t_t sorted the way you would expect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAFAIK_co_ this is a usual compromise accepted in the 3D engines. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe a workaround would be then to have 2 boxes_co_ one embedded in the other_co_ so 2 different meshes... and a better alpha blending\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis documentation is worth it _dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Transparency_and_How_Meshes_Are_Rendered_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/Transparency_and_How_Meshes_Are_Rendered_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor try the trick from the last part of this doc _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-18T19:36:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys!  There_t_s also the indices chainsaw.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1KH9RY%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1KH9RY#7_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat fun_co_ and oh so brutal.  heh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]