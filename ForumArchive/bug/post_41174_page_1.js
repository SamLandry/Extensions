[{"Owner":"TomaszFurca","Date":"2018-11-10T11:54:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi today i saw in my project a lot of draw calls. I just start searching about it and found similar issue_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/2624_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/2624_lt_/a_gt_ with playground _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1KUJ0A%2375_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1KUJ0A#75_lt_/a_gt_. I think issue still happen in BJS_co_ so please look into that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTom\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-11T02:39:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I must admit that I see no problem as the highlight layer needs to render all meshes in the scene to make sure we compute the correct occlusion so it needs to render all meshes to get the correct depth.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can forcefully deactivate some_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1KUJ0A#146_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1KUJ0A#146_lt_/a_gt_ (see line #39 and 45)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-12T23:36:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLooks all normal to me to need to render all the element as occluder or highlighter but the in use shader is pretty sheep and it is to a smaller rtt so is is usually ok on small scenes. On bigger scenes it might be nice to exclude every part which is neither emitter nor occluder to boost perf.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]