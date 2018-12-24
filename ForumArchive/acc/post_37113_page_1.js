[{"Owner":"Convergence","Date":"2018-04-19T17:52:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSay you have a project that loads has a large number of meshes_co_ for example furniture_co_  each with their own (multi)material. Now the actual scene only displays a select few of the loaded meshes according to what the user wants to see (eg. house blueprint). However all the vertices of all meshes and all textures of all materials are loaded into memory_co_ which of course increases the memory consumption quite a bit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve tried using the meshName filter of the ImportMesh call_co_ but that increases the scene loading time by quite a bit since it will reload and reparse the .babylon file for every asset used in the scene to load the specific mesh. Additionally if the user wants to add another asset to the scene after the initial load_co_ the .babylon file will have to be called yet again. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen I tried to at least dispose() all materials of all unused assets to free up the texture memory after loading them_co_ and only recreate the required material if a mesh is actually enabled in the scene (by storing the texture url in an array)_co_ but mass disposing of materials/textures that are not yet done loading causes quite some quirks in the babylon scene where the textures are sometimes applied to random other meshes and even random renderTargetTextures like my shadowgenerator.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny ideas on how to reduce the memory footprint?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-04-19T19:02:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhat about having a file per furniture?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2018-04-25T14:33:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHmm_co_ that is quite the commitment _co_ to export every mesh out of hundreds  individually _lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SvenFrankson","Date":"2018-04-25T14:54:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDon_t_t you need to split it anyway to avoid network latency ? ^^_t_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Arte","Date":"2018-04-25T18:51:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8101-convergence/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8101_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8101-convergence/_qt_ rel_eq__qt__qt__gt_@Convergence_lt_/a_gt_ You can control everything by tags (mesh_co_ material_co_ multimaterial ...). With tags I never had a problem. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor loading _qt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_file per furniture_qt__co_ best option._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]