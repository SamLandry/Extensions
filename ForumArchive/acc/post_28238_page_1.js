[{"Owner":"J_alchemist","Date":"2017-02-06T03:24:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ _lt_br /_gt__lt_br /_gt_\n\tI_t_m trying to export a model which is about 400_co_000 Polys. _lt_br /_gt_\n\tI know the maximum export is somewhere around 60_co_ 000 for any one mesh. I am thinking about breaking and exporting the mesh in different parts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWill this lead to issues in the scene?_lt_br /_gt_\n\tAlso_co_ what is the best polygon count for a babylon scene for efficiency in web and mobile?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFinaly_co_ what is the maximum polygon count for a babylon scene before it crashes?_lt_br /_gt__lt_br /_gt_\n\tThank you in advance!_lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-06T17:52:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ if you are running on recent devices_co_ babylon.js can use 32bits indices and thus there is no more a 65K vertices limit per mesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBased on WebGLStats_co_ you can be pretty confident _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_a href_eq__qt_http_dd_//webglstats.com/webgl/extension/OES_element_index_uint_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//webglstats.com/webgl/extension/OES_element_index_uint_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is virtually no upper limit of polygon count per scene as long as you have memory\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI suggest trying and experimenting\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]