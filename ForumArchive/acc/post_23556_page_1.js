[{"Owner":"Ruffle","Date":"2016-07-01T09:48:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI recently implemented LODs for an InstancedMesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe problem is_co_ this InstancedMesh has an EdgesRenderer (which works great) but when the quality is reduced (LOD)_co_ the edges aren_t_t rendered anymore.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe problem doesn_t_t exist for a regular Mesh_co_ even with LODs_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#QE7KM%2314_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#QE7KM#14_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s what happens when you add instances_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#14ESWC%2313_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#14ESWC#13_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can see that edges are rendered only for the masterMesh and when one of the instances gets degraded_co_ the edges are rendered for the sourceMesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried to find an obvious solution to this but to no avail. It_t_s not that big of a deal for me but I thought I_t_d ask anyway. Perhaps somebody knows a solution? Or maybe you_t_re aware of this problem and are going to resolve it in a future update?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks in advance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-01T15:47:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI would say_dd_ this is a known limitation _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-07-03T12:52:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHeya guys!  _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ would you have a moment to tell-of this _qt_known_qt_ limitation... in _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/How_to_use_EdgesRenderer_qt_ rel_eq__qt_external nofollow_qt__gt_the edgesRenderer tutorial_lt_/a_gt_?  Maybe a little sentence or two about WHY_co_ too?  Thanks!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-04T01:10:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tActually this is pretty easy to say_dd_ EdgesRenderer does not work well with instances when used with LOD. This is something I need to fix for 2.5\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-04T02:39:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAnd this is now fixed _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ Check your PG (clear cache obviously)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ruffle","Date":"2016-07-04T15:45:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks for help Deltakosh !_lt_br /_gt_\n\t_qt_ clear cache _qt_ is my middle name\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ruffle","Date":"2016-07-04T15:58:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBtw_co_ not directly related to edge renderers but\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI noticed that if I change the .visibility of a LODed mesh_co_ the value isn_t_t carried over when the LOD changes (regardless if it_t_s an InstancedMesh or a regular Mesh).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs that the expected behavior? I can go around it by changing the .visibility of the MeshLODLevel.mesh but since I_t_m also using Instances_co_ there are only some InstancedMeshed that I_t_d like to change the .visibility of...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-05T22:40:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYep it is. We want every layer to be independent (think for isntance that you want the last one to have a visibility reduce to simulate fading)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]