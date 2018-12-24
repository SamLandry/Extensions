[{"Owner":"efxlab","Date":"2018-02-07T20:34:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI load a Glft model with a loader\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//bin.fuelphp.com/snippet/view/OI_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//bin.fuelphp.com/snippet/view/OI_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand later with a HTML button I change the model in the same scene with a dispose (to remove it) and reload the new.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe issue is that it seem memory is not released from the previous model_co_ on iPad tablet for exemple_co_ the scene become very slow. After several disposes and loads safari crash out of memory.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe Am I wrong with the mesh capture _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tloader.onMeshLoaded _eq_ function (mesh) {_lt_br /_gt_\n\t            _lt_br /_gt_\n\t            actualMesh _eq_ mesh_sm__lt_br /_gt_\n\t}_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tany idea ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-07T21:32:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI guess this is because your gltf is loading multiple mesh so you have to keep a list of them\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn your case you are storing only the last one\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can call scene.debugLayer.show() to get an UI to get the list of meshes\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"efxlab","Date":"2018-02-08T12:44:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_ it fine now for mesh release_co_ but for Material ? I see in debug that at each load it store material in memory on a new GLFT load_co_ How I can access and dispose ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI use GLFT format so its PBRMaterial ? I tried that but it no work _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor(var i_eq_0_co_ len_eq_activeMeshes.length_sm_ i &lt_sm_ len_sm_ i++){_lt_br /_gt_\n\t                activeMeshes_lt_em_gt_.dispose()_sm__lt_/em_gt__lt_br /_gt_\n\t_lt_em_gt_               activeMeshes_lt_/em_gt__lt_em_gt__lt_em_gt_.PBRMaterial.dispose()_sm__lt_/em_gt__lt_/em_gt__lt_br /_gt_\n\t_lt_em_gt__lt_em_gt_ } _lt_/em_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_em_gt_How I can access to PBRMaterial from a GLFT loader ? _lt_/em_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_em_gt_thanks _lt_/em_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk on loader I can access to materials _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_em_gt_loader.onMaterialLoaded _eq_ function (material) {_lt_br /_gt_\n\t }_sm__lt_/em_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Amarth2Estel","Date":"2018-02-08T13:12:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi efxlab !_lt_br /_gt_\n\t_lt_br /_gt_\n\tBABYLON.Mesh has no attribute PBRMaterial but a single attribute material to deal with StandardMaterial and PBRMaterial._lt_br /_gt_\n\tYou can get material directly this way and dispose it (it will dispose the material only)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tMoreover_co_ there is parameters in the _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/classes/3.1/material#dispose-forcedisposeeffect-forcedisposetextures-rarr-void_qt_ rel_eq__qt_external nofollow_qt__gt_method dispose_lt_/a_gt_ of Material to force disposing its textures._lt_br /_gt_\n\tThe same way_co_ there is parameters in the _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/classes/3.1/mesh#dispose-donotrecurse-disposematerialandtextures-rarr-void_qt_ rel_eq__qt_external nofollow_qt__gt_method dispose_lt_/a_gt_ of Mesh to dispose its material (if exist) as well._lt_br /_gt_\n\t_lt_br /_gt_\n\tHere is a PG showing these 2 solutions _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#10D6YT%2377_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#10D6YT#77_lt_/a_gt__lt_br /_gt_\n\tWith solution 1_co_ textures are still in memory._lt_br /_gt_\n\tWith solution 2_co_ disposing meshes cleans also all the now unnecessary data.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"efxlab","Date":"2018-02-08T13:18:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello Amarth2Estel ! its perfect great just tested.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust for info_co_  I will _dd_ _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_mesh.dispose(_lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_false_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_true_lt_/span_gt__lt_font color_eq__qt_#000000_qt__gt_) instead of true/true_co_ for _lt_/font_gt__lt_span style_eq__qt_color_dd_#000000_sm_font-size_dd_15.199999809265137px_sm__qt__gt_recurse _lt_/span_gt__lt_font color_eq__qt_#000000_qt__gt_release on the mesh_t_s children._lt_/font_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]