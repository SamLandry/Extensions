[{"Owner":"chicagobob123","Date":"2018-03-09T15:29:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI loaded meshes with BABYLON.SceneLoader.ImportMesh and saved them into an array (Not shown here to make an easier example).   \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere was only one mesh per babylon file. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t        BABYLON.SceneLoader.ImportMesh(_qt__qt__co__t_models/numbers/_t__co__t__t_sample.babylon_t__co_scene_co_function(meshes_co_particlesystems_co_skeletons) {        \n_lt_/p_gt_\n\n_lt_p_gt_\n\t           ...          \n_lt_/p_gt_\n\n_lt_p_gt_\n\t       Sample[x]_eq_meshes[0]_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     }\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLater I cloned the mesh array\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsample2[x]  _eq_ Sample[x].clone()_sm_ _lt_br /_gt_\n\tsample2[x] .addLODLevel(400_co_null)_sm__lt_br /_gt_\n\t       \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBecause Sample needed to be seen all the time and sample2 did not_co_ sample2 is later instanced because there is a lot of them and  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tneeded an LOD.  Great_co_ but something is very wrong. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I include the sample2 array meshes as soon as the become visible items from the Sample[] array disappear. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHELP? I really don_t_t get whats going on. I thought Clone would create new meshes independent of the orginal. Is that not true?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-03-09T16:06:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21732-chicagobob123/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21732_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21732-chicagobob123/_qt_ rel_eq__qt__qt__gt_@chicagobob123_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tOther than the null in_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__lt_span_gt_ _lt_/span_gt__lt_em_gt_.addLODLevel(400_co_null)_sm__lt_/em_gt_ should be a mesh_co_ _lt_/span_gt_I_t_m not quite sure what the issue is_co__lt_br /_gt_\n\t_lt_br /_gt_\n\tcan you reproduce?_lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#8UYLBH%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#8UYLBH#1_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2018-03-09T16:26:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__qt_the null in_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__lt_span_gt_ _lt_/span_gt__lt_em_gt_.addLODLevel(400_co_null)_sm__lt_/em_gt__lt_span_gt_ _lt_/span_gt_should be a mesh_qt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_actually not if you want the stuff to not be seen at distance xx away. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the example the mesh is set to null to make the knot disappear. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/how_to_use_lod_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/how_to_use_lod_lt_/a_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#f0f0f0_sm_color_dd_#444444_sm_font-size_dd_16px_sm__qt__gt_--&gt_sm_knot00.addLODLevel(_lt_/span_gt__lt_span style_eq__qt_color_dd_#880000_sm_font-size_dd_16px_sm__qt__gt_55_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#f0f0f0_sm_color_dd_#444444_sm_font-size_dd_16px_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#78a960_sm_font-size_dd_16px_sm__qt__gt_null_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#f0f0f0_sm_color_dd_#444444_sm_font-size_dd_16px_sm__qt__gt_)_sm__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#f0f0f0_sm_color_dd_#444444_sm_font-size_dd_16px_sm__qt__gt_As for reproduction thats where this gets complicated. _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#f0f0f0_sm_color_dd_#444444_sm_font-size_dd_16px_sm__qt__gt_I am not sure I can. I guess I can try with the knots example_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]