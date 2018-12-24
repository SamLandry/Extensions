[{"Owner":"Xetar","Date":"2018-03-17T16:04:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello everyone_co_ I have little issue with my mesh _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen i load it_co_ it get _qt_auto smoothed_qt__co_ and also get _qt_cutted_qt_ apart.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically when I save my mesh in blender it looks like this _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_1521302608-nouvelle-image-bitmap.png_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_564_qt_ src_eq__qt_http_dd_//image.noelshack.com/fichiers/2018/11/6/1521302608-nouvelle-image-bitmap.png_qt_ width_eq__qt_1000_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut when I load it with babylonjs\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_1521302515-nouvelle-image-bitmap.png_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_564_qt_ src_eq__qt_http_dd_//image.noelshack.com/fichiers/2018/11/6/1521302515-nouvelle-image-bitmap.png_qt_ width_eq__qt_1000_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease help me to fix this_co_ Thank you !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-03-17T18:58:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29350-xetar/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29350_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29350-xetar/_qt_ rel_eq__qt__qt__gt_@Xetar_lt_/a_gt_ _lt_br /_gt_\n\tTry _lt_strong_gt_Mesh._lt_/strong_gt__lt_span_gt__lt_strong_gt_convertToFlatShadedMesh()_sm__lt_/strong_gt__lt_/span_gt__lt_br /_gt_\n\tIf it doesn_t_t resolve it_co_ do you mind sharing your .bablylon to help debugging it? _lt_br /_gt_\n\tYou can PM it if you don_t_t want to make it publicly available.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2018-03-18T16:10:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can also use the _qt_Flat Shade Entire Scene_qt_ option in the Blender Exporter_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/resources/blender_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/resources/blender_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe faces that aren_t_t showing might be due to face normals pointing inward. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-03-19T14:11:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn Blender_co_ consider to always use smooth shading mode on your object_co_ and play with autosmooth params in your mesh. As for the Blender exporter_co_ you can check the flat option like adam said_co_ or activate an edge split modifier on your meshes too (no need to apply it).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/resources/normals_qt_ rel_eq__qt_external nofollow_qt__gt_You can read this_lt_/a_gt_ to better understand why 1 vertex in Blender can finally be 2 or more when import in a realtime engine.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-03-19T15:07:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe exporter dropped actually flat shading by itself in version 5.6.  Adding a split edged modifier is an actual Blender feature_co_ plus it generated meshes with less vertices than the exporter.  You can still convert to flatshaded. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you still have parts of the mesh which do not show_co_ that is probably not completely related.  Sounds like a normals problem though.  Perhaps recomputing normals in edit mode.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"V!nc3r","Date":"2018-03-19T15:16:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAbout the normals_co_ JCPalmer probably spot the issue. To avoid doing wrong things with normals during modeling in Blender_co_ I highly suggest you to always have checked _lt_a href_eq__qt_https_dd_//i.imgur.com/ZxhwajN.png_qt_ rel_eq__qt_external nofollow_qt__gt_Backface culling_lt_/a_gt_ in your 3D View shading.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]