[{"Owner":"aarroyoc","Date":"2017-02-01T12:06:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried to load a mesh from Blender. I_t_ve used the exporter but when I loaded it_co_ the onsuccess callback has a an array of zero meshes. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m doing_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.SceneLoader.ImportMesh(_qt_sectarian_qt__co_ _qt_/data/_qt__co_ _qt_untitled.babylon_qt__co_ scene_co_ function (meshes_co_ ps_co_ skeletons) {\n\t\tconsole.dir(meshes)_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd untitled.babylon is attached. I_t_m using Babylon 2.4 and meshes is an array of 0 elements. I_t_ve checked and the babylon file is correctly loaded from the server.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat should I do in order to load the mesh? Am I missing something? Thanks\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_11453_qt__gt_untitled.babylon_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jpdev","Date":"2017-02-01T12:21:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi aarroyoc_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou babylon file only contains a cube named _qt_Cube_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have put your file on my server_co_ and this playground loads the only mesh in it_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#2G9IR%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#2G9IR#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can confirm_co_ that there reallly is only a cube in it (and no _qt_sectarian_qt_) by opening it in a text editor - it_t_s json and human readable.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aarroyoc","Date":"2017-02-01T13:07:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi jpdev_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou were right!! I didn_t_t know what the first parameter was for so I put a random name. Now it works. Thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-01T14:42:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOr just leave the first parameter (name) empty. Babylon automatically get it for you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLike here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#2G9IR%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#2G9IR#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2017-02-01T21:19:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_ -\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBrilliant! I wasn_t_t aware we didn_t_t need to define the object name. Of course this would only work if your scene contained a single mesh. Also_co_ you will most likely want to use your mesh in a seperate function or operation again in your script_co_ so I might advise to always define the name of your imported mesh - especially if it contains children in Blender which you wish to import and clone or instance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-01T23:21:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEven if the name is not in the ImportMesh function_co_ it is still possible to use it. see here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#2G9IR%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#2G9IR#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo no need to define the name. I do not even know why this setting exists for ImportMesh because if we set a different name_co_ the object does not load.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2017-02-02T00:13:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti believe the _qt_name_qt_ parameter is there incase you only want one mesh from a file containing several meshes_co_ e.g. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_/assets/_qt__co_ _qt_myFile.babylon_qt__co_ scene_co_ function (newMeshes_co_ particles_co_ skeletons)_lt_br /_gt__lt_br /_gt_\n\tif your file have two meshes_co_ leaving the name field empty_co_ loads both meshes_co_ respectively at newMeshes[0] and newMeshes[1]_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-02-02T00:28:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAh_co_ yes_co_ well seen. I understand its usefulness now. Thanks for information aWeirdo\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]