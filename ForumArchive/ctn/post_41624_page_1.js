[{"Owner":"yokewang","Date":"2018-12-01T09:32:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_border_dd_0px_sm_color_dd_#242729_sm_font-size_dd_15px_sm_padding_dd_0px_sm_text-align_dd_left_sm_vertical-align_dd_baseline_sm__qt__gt_\n\tI have an obj mesh with some textures_co_ several of them are repeated(uvs are not within [0_co_1]). I_t_d like to merge all those textures into one texture and transform the uvs.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_border_dd_0px_sm_color_dd_#242729_sm_font-size_dd_15px_sm_padding_dd_0px_sm_text-align_dd_left_sm_vertical-align_dd_baseline_sm__qt__gt_\n\tAs I know so far_co_ some algorithms 1)uv transforming when texture merge. 2)split triangles into small triangles to keep each uv within [0_co_1]. 3)RTT method may help to solve this problem.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_border_dd_0px_sm_color_dd_#242729_sm_font-size_dd_15px_sm_padding_dd_0px_sm_text-align_dd_left_sm_vertical-align_dd_baseline_sm__qt__gt_\n\tAre there any tools can implement it?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-12-03T08:31:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhich 3D modeler do you use?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe best way is to use RTT method_dd_\n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\tduplicate your current object\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tunfold UV on your new object within [0_co_1]\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tbake your old object into your new one\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"yokewang","Date":"2018-12-03T15:56:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think RTT method is the best way. The original 3d file is in max format_co_ can I use 3D MAX to implement it? I am newbie in 3D MAX_co_ any guid or documents will be appreciated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI found a video on youtube.  \n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/dzLJ2HEMa40?feature_eq_oembed_qt_ width_eq__qt_480_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks V!nc3r.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]