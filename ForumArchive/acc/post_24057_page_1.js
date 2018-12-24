[{"Owner":"smatt","Date":"2016-07-25T13:18:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m currently working with flat shaded meshes and point lights in my Babylon.JS scene and the light is reflecting in a not-flat-shaded way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlayground demo_dd_ _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#BRSMM%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#BRSMM#0_lt_/a_gt__lt_br /_gt_\n\tMy own screenshot_dd_ _lt_a href_eq__qt_http_dd_//prnt.sc/bx9h3o_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//prnt.sc/bx9h3o_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tMy target is to have one _qt_flat color_qt_ per face and no light beam reflections which fade over distance._lt_br /_gt_\n\tIs my target even possible with point lights or do I have to use other lights like the hemispheric light?_lt_br /_gt__lt_br /_gt_\n\tThanks for every answer_co_ Simon\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-07-25T21:52:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt has something to do with the specular channel of the light i think\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tgive it a try _lt_br /_gt_\n\tlight.specular _eq_ new BABYLON.Color3(0_co_0.0_co_0.0)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/tutorials/Lights_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/tutorials/Lights_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tyeah im just playing aroung_co_ nothing to do with the question_lt_br /_gt_\n\tlasers_lt_br /_gt__lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#BRSMM%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#BRSMM#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twith music\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#BRSMM%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#BRSMM#7_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-07-25T21:53:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ flat shaded meshes simply have their normals calculated differently. As the normals of a ground are always pointing up_co_ you won_t_t see the effect. Here is a flat shaded sphere - _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#BRSMM%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#BRSMM#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can achieve what you are trying to do with multi-materials - _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/CreateBox_Per_Face_Textures_And_Colors_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/CreateBox_Per_Face_Textures_And_Colors_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"smatt","Date":"2016-07-26T04:29:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_137469_qt_ data-ipsquote-contentid_eq__qt_24057_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1469483555_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 hours ago_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tgive it a try _lt_br /_gt_\n\t\t\tlight.specular _eq_ new BABYLON.Color3(0_co_0.0_co_0.0)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_ thank you for the hint about the specular property. I_t_ve unchecked the _qt_Specular_qt_ box in blender of all point lights and it_t_s working! Thanks _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-07-26T04:43:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\trun often in the same error. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]