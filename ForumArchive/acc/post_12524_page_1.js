[{"Owner":"KnisterPeter","Date":"2015-02-16T09:53:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi there_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I would like to create sprites from a dynamic source (canvas with some rendered text)._lt_/p_gt__lt_p_gt_I_t_ve seen that its possible to create textures from base64 data uris but the current SpriteManager does not allow this_co_ since its creating the texture by itself._lt_/p_gt__lt_p_gt_Is there a current way to achieve this_co_ or should I create a pull request which enables this function?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Kind regards_lt_/p_gt__lt_p_gt_Markus_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"KnisterPeter","Date":"2015-02-16T09:58:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh_co_ as well current sprites does not inherit from Node. Therefore Sprites could not be added to a parent node for relative positioning. Is there an easy way to do so?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-02-16T10:00:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ you can _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just create a dynamicTexture object_lt_/p_gt__lt_p_gt_and set this dynamicTexture  to your sprite texture like this _dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/11570-sprite-manager-texture/?p_eq_66937_qt__gt_http_dd_//www.html5gamedevs.com/topic/11570-sprite-manager-texture/?p_eq_66937_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_running ex here _dd_ _lt_a href_eq__qt_http_dd_//logiciels.iut-rodez.fr/proto/weathermap/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//logiciels.iut-rodez.fr/proto/weathermap/_lt_/a_gt__lt_/p_gt__lt_p_gt_or here _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1GWIGC%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1GWIGC#6_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]