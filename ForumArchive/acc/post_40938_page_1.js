[{"Owner":"UeliUeli","Date":"2018-10-29T13:55:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi there\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m a newby in babylonjs and i_t_m trying to build a content viewer for 3d models adjusted to my needs. Now_dd_ Is there a method to disable backface culling for all meshes of a scene? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have tried it with scene.meshes_co_ but i does not work_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.SceneLoader.loggingLevel _eq_ BABYLON.SceneLoader.DETAILED_LOGGING_sm__lt_br /_gt_\n\tBABYLON.SceneLoader.Append(_qt_../../_qt__co_ _qt_..._qt__co_ scene_co_ function (scene) {                      \n_lt_/p_gt_\n\n_lt_p_gt_\n\tscene.meshes.backFaceCulling _eq_ false_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfor(var i_eq_0_sm_ i&lt_sm_scene.meshes.length_sm_ i++)    scene.meshes_lt_em_gt_.checkCollisions_eq_true_sm_\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t...\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t \n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\tHelp is much appreciated_co_ Thanks!\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\t \n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n\n_lt_/em_gt__lt_p_gt__lt_em_gt_\n\tPs_dd_ Additional question_dd_ Would it be possible to give all the backsides of the meshes one color?\n_lt_/em_gt__lt_/p_gt_\n_lt_em_gt_\n_lt_/em_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-29T17:31:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and welcome!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code class_eq__qt_language-javascript_qt__gt_scene.onNewMaterialAddedObservable.add(function(mat) {\nmat.backFaceCulling _eq_ false_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tRegarding coloring backside_dd_ This is not directly possible unless you create a second mesh for the backfaces\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"UeliUeli","Date":"2018-10-29T19:00:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Deltakosh! I put it just before the sceneLoader &amp_sm_ it worked fine _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-30T15:23:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFlagging as solved then _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]