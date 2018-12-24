[{"Owner":"Karl Hulme","Date":"2016-06-30T11:42:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat is the correct format of a _lt_strong_gt_.babylon file_lt_/strong_gt_ so that it can load an HDR texture into the reflectionTexture slot of a PBRMaterial?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know how to do this in code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var hdrTexture _eq_ new BABYLON.HDRCubeTexture(_qt_/g/test/interior.hdr_qt__co_ scene_co_ 512)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBut I can_t_t achieve the same thing with a _lt_strong_gt_.babylon file_lt_/strong_gt_ that is loaded with BABYLON.SceneLoader.ImportMesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is the last format I tried_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_{\n  _qt_materials_qt__dd_ \n  [\n    {\n      _qt_customType_qt__dd__qt_BABYLON.PBRMaterial_qt__co_\n      _qt_name_qt__dd__qt_Material_qt__co_\n      _qt_id_qt__dd__qt_Material_qt__co_\n      _qt_alpha_qt__dd_1_co_\n      _qt_backFaceCulling_qt__dd_true_co_\n      _qt_albedoTexture_qt__dd_         // the albedo loads fine!\n      {\n        _qt_name_qt__dd__qt_DefaultMaterial_Base_Color.png_qt__co_\n        _qt_level_qt__dd_1_co_\n        _qt_hasAlpha_qt__dd_0_co_\n        _qt_coordinatesMode_qt__dd_0_co_\n        _qt_uOffset_qt__dd_0_co_\n        _qt_vOffset_qt__dd_0_co_\n        _qt_uScale_qt__dd_1_co_\n        _qt_vScale_qt__dd_1_co_\n        _qt_uAng_qt__dd_0_co_\n        _qt_vAng_qt__dd_0_co_\n        _qt_wAng_qt__dd_0_co_\n        _qt_wrapU_qt__dd_true_co_\n        _qt_wrapV_qt__dd_true_co_\n        _qt_coordinatesIndex_qt__dd_0\n      }_co_\n      _qt_reflectionTexture_qt__dd_    // this causes an error on load!\n      {\n        _qt_name_qt__dd__qt_interior.hdr_qt__co_\n        _qt_level_qt__dd_1_co_\n        _qt_hasAlpha_qt__dd_0_co_\n        _qt_coordinatesMode_qt__dd_3_co_\n        _qt_size_qt__dd_512_co_\n        _qt_uOffset_qt__dd_0_co_\n        _qt_vOffset_qt__dd_0_co_\n        _qt_uScale_qt__dd_1_co_\n        _qt_vScale_qt__dd_1_co_\n        _qt_uAng_qt__dd_0_co_\n        _qt_vAng_qt__dd_0_co_\n        _qt_wAng_qt__dd_0_co_\n        _qt_wrapU_qt__dd_true_co_\n        _qt_wrapV_qt__dd_true_co_\n        _qt_coordinatesIndex_qt__dd_0\n      }\n    }\n  ]_co_\n  _qt_meshes_qt__dd_[{...}]\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe model loads fine.  As does the albedo texture (shown) and the reflectivity and normal textures (not shown).  But when I include the Reflection texture it fails.  The message in the console is_dd_ _qt_babylon.js_dd_3 BJS - [12_dd_09_dd_33]_dd_ Error while trying to load texture_dd_ /g/test/interior.hdr_qt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny help much appreciated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tkind regards_lt_br /_gt_\n\tKarl\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-07-01T19:20:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell Spoted_co_ I ll fix it this week end_co_ thanks for the feeddback !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCU\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-07-01T23:16:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe fix is in a pull request and should then be available by tomorrow evening in the repo_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1244_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/pull/1244_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically_co_ you ll only need to add this line in your json to fix it after updating to the latest version_dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_customType_qt__dd_ _qt_BABYLON.HDRCubeTexture_qt__co_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_{\n\n      _qt_reflectionTexture_qt__dd_    // this causes an error on load!\n      {\n        _qt_customType_qt__dd_ _qt_BABYLON.HDRCubeTexture_qt__co_\n        _qt_name_qt__dd__qt_interior.hdr_qt__co_\n        _qt_level_qt__dd_1_co_\n        _qt_hasAlpha_qt__dd_0_co_\n        _qt_coordinatesMode_qt__dd_3_co_\n        _qt_size_qt__dd_512_co_\n        _qt_uOffset_qt__dd_0_co_\n        _qt_vOffset_qt__dd_0_co_\n        _qt_uScale_qt__dd_1_co_\n        _qt_vScale_qt__dd_1_co_\n        _qt_uAng_qt__dd_0_co_\n        _qt_vAng_qt__dd_0_co_\n        _qt_wAng_qt__dd_0_co_\n        _qt_wrapU_qt__dd_true_co_\n        _qt_wrapV_qt__dd_true_co_\n        _qt_coordinatesIndex_qt__dd_0\n      }\n\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tHope that will help you.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Karl Hulme","Date":"2016-07-02T08:14:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCool_co_ thanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-04T01:15:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt_t_s online_dd_)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Karl Hulme","Date":"2016-07-04T13:36:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMarvellous!  Thanks to both of you.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]