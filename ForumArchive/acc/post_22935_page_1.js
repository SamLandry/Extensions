[{"Owner":"erixon","Date":"2016-06-02T11:39:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m used to work with Sketchup and repetive textures to save space. I have imported objects to Blender to unwrap/create lightmaps and load .babylon_co_ but no expert in multiple textures/uvs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs it possible with Babylon in an easy way to import an object with two texture layers with different uvs so one is diffuse map and one is lightmap?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust wondered if this work more or less out of the box or how tricky it gets.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tkind regards_lt_br /_gt_\n\tTomas \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2016-06-02T12:46:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou just have to assign the right uv mapping of your texture in Blender.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUV channels can be set in the _lt_a href_eq__qt_http_dd_//i.imgur.com/PGLphJF.png_qt_ rel_eq__qt_external nofollow_qt__gt_object data panel_lt_/a_gt__co_ use first channel for diffuse map_co_ second for lightmap. Only 2 uv channels can be exported.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOf course assign at least one material_co_ then configure your textures and _lt_a href_eq__qt_http_dd_//i.imgur.com/PjgZI3N.png_qt_ rel_eq__qt_external nofollow_qt__gt_tell your lightmap to use uv channel 2_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat_t_s it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t[edit] don_t_t forget in the texture panel to set your lightmap to ambient rather than diffuse in the influence panel [/edit]\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"erixon","Date":"2016-06-02T15:20:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks for the reply_co_ sounds awesome_co_ going to test that.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"erixon","Date":"2016-06-02T20:18:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWorks good but if I have 5 materials on my object_co_ do I really need to add the second ambient texture 5 times on all then? \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2016-06-03T07:16:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYep. One way to avoid this will be to set a lightmap on the mesh property rather than the material_co_ but _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/22857-assign-lightmap-to-mesh-rather-than-a-material/_qt_ rel_eq__qt__qt__gt_it_t_s not currently possible_lt_/a_gt_.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]