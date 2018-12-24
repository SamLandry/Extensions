[{"Owner":"dmonkeyjazz","Date":"2017-02-22T16:53:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCould it be it_t_s impossible to load a diffuse texture on a mesh that is imported from an stl file ?_lt_br /_gt__lt_br /_gt_\n\tI_t_m able to set the same material on a basic plane and it works_co_ but not on the stl _dd_/\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor some reason the material does show a color matching the jpg texture file_co_ but does not render the full texture ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tshould I apply special u/v mapping ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-22T17:56:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello this is due to the fact that the loaded STL has no UV\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou will have to either export a new model with UV or generate them by hand (I don_t_t recommend this way _dd_))\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dmonkeyjazz","Date":"2017-02-22T19:37:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks for your reply Deltakosh !_lt_br /_gt__lt_br /_gt_\n\tI had no knowledge of this..._lt_br /_gt_\n\tI created the stl with OpenSCAD ... I don_t_t believe there is an option to generate uv mapping in OpenScad_co_ or is there ?_lt_br /_gt__lt_br /_gt_\n\tThe object I need to apply a texture to is basically a triangle which is easy to recreate using primitives (or so i presume)._lt_br /_gt_\n\tBut just for future reference_dd_ it would be interesting to know if there is software that can generate the uv mapping from a given stl file (i.e. could Blender do it ?)_lt_br /_gt__lt_br /_gt_\n\tMany thanks_co__lt_br /_gt_\n\tyou certainly saved me some head scratching _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dmonkeyjazz","Date":"2017-02-22T19:49:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\thmm_co_ I was thinking_co_ since my shape is so basic_co_ how could i fake the uv mapping_co_ I could easily pretend the triangle is a plane..._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2017-02-22T20:32:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_164564_qt_ data-ipsquote-contentid_eq__qt_28624_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1487792239_qt_ data-ipsquote-userid_eq__qt_20409_qt_ data-ipsquote-username_eq__qt_dmonkeyjazz_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t46 minutes ago_co_ dmonkeyjazz said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t(i.e. could Blender do it ?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20409-dmonkeyjazz/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20409_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20409-dmonkeyjazz/_qt_ rel_eq__qt__qt__gt_@dmonkeyjazz_lt_/a_gt__sm_ welcome to the forum _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYes Blender can import .stl files - and it has some nice uv unwrapping tools. So perfectly doable in Blender.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd you can then export directly from Blender as a .babylon file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEach of these three of these models started life as an .stl file that I imported into Blender.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.3dworlds.ca/beet/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Beethoven and Friends_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]