[{"Owner":"jSnake04","Date":"2016-09-08T17:12:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m getting an error when trying to export from blender. It exported fine until I added a UV mapped texture material to the model.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s the log file_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t    Exporter version_dd_ 4.6.1_co_ Blender version_dd_ 2.77 (sub 0)_lt_br /_gt_\n\t_eq__eq__eq__eq__eq__eq__eq__eq__eq_ Conversion from Blender to Babylon.js _eq__eq__eq__eq__eq__eq__eq__eq__eq__lt_br /_gt_\n\t    Scene settings used_dd__lt_br /_gt_\n\t        selected layers only_dd_  false_lt_br /_gt_\n\t        flat shading entire scene_dd_  false_lt_br /_gt_\n\t        inline textures_dd_  false_lt_br /_gt_\n\t        texture directory_dd_  C_dd_\\data\\web\\html5game\\models\\soldier\\_lt_br /_gt_\n\t    Python World class constructor completed_lt_br /_gt_\n\t    processing begun of skeleton_dd_  ArmLow_co_ id_dd_  0_lt_br /_gt_\n\t        processing begun of bone_dd_  Hip_co_ index_dd_  0_lt_br /_gt_\n\t        processing begun of bone_dd_  Back_co_ index_dd_  1_lt_br /_gt_\n\t        processing begun of bone_dd_  Shoulder.Left_co_ index_dd_  2_lt_br /_gt_\n\t        processing begun of bone_dd_  Upperarm.Left_co_ index_dd_  3_lt_br /_gt_\n\t        processing begun of bone_dd_  Forearm.Left_co_ index_dd_  4_lt_br /_gt_\n\t        processing begun of bone_dd_  Hand.Left_co_ index_dd_  5_lt_br /_gt_\n\t        processing begun of bone_dd_  Head_co_ index_dd_  6_lt_br /_gt_\n\t        processing begun of bone_dd_  Shoulder.Right_co_ index_dd_  7_lt_br /_gt_\n\t        processing begun of bone_dd_  Upperarm.Right_co_ index_dd_  8_lt_br /_gt_\n\t        processing begun of bone_dd_  Forearm.Right_co_ index_dd_  9_lt_br /_gt_\n\t        processing begun of bone_dd_  Hand.Right_co_ index_dd_  10_lt_br /_gt_\n\t        processing begun of bone_dd_  Thigh.Left_co_ index_dd_  11_lt_br /_gt_\n\t        processing begun of bone_dd_  Shin.Left_co_ index_dd_  12_lt_br /_gt_\n\t        processing begun of bone_dd_  Foot.Left_co_ index_dd_  13_lt_br /_gt_\n\t        processing begun of bone_dd_  Thigh.Right_co_ index_dd_  14_lt_br /_gt_\n\t        processing begun of bone_dd_  Shin.Right_co_ index_dd_  15_lt_br /_gt_\n\t        processing begun of bone_dd_  Foot.Right_co_ index_dd_  16_lt_br /_gt_\n\t    processing begun of mesh_dd_  HumanLow_lt_br /_gt_\n\t_eq__eq__eq__eq__eq__eq__eq__eq__eq_ An error was encountered _eq__eq__eq__eq__eq__eq__eq__eq__eq__lt_br /_gt_\n\t  File _qt_C_dd_\\Program Files\\Blender Foundation\\Blender\\2.77\\scripts\\addons\\io_export_babylon.py_qt__co_ line 330_co_ in execute_lt_br /_gt_\n\t    mesh _eq_ Mesh(object_co_ scene_co_ nextStartFace_co_ forcedParent_co_ nameID_co_ self)_lt_br /_gt_\n\t  File _qt_C_dd_\\Program Files\\Blender Foundation\\Blender\\2.77\\scripts\\addons\\io_export_babylon.py_qt__co_ line 780_co_ in __init___lt_br /_gt_\n\t    recipe _eq_ BakingRecipe(object)_lt_br /_gt_\n\t  File _qt_C_dd_\\Program Files\\Blender Foundation\\Blender\\2.77\\scripts\\addons\\io_export_babylon.py_qt__co_ line 1872_co_ in __init___lt_br /_gt_\n\t    self.backFaceCulling &amp_sm__eq_ material.game_settings.use_backface_culling_lt_br /_gt_\n\tERROR_dd_  _t_NoneType_t_ object has no attribute _t_game_settings_t__lt_br /_gt_\n\t_eq__eq__eq__eq__eq__eq__eq__eq__eq_ end of processing _eq__eq__eq__eq__eq__eq__eq__eq__eq__lt_br /_gt_\n\telapsed time_dd_  0 min_co_ 0.01 secs\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried commenting out the _qt_self.backFaceCulling_qt_ line in the python addon script but it appears that _t_material_slot.material_t_ is a null value and it just threw the same error on the next if statement.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_for material_slot in mesh.material_slots_dd_\n            # a material slot is not a reference to an actual material_sm_ need to look up\n            material _eq_ material_slot.material\n\n            self.backFaceCulling &amp_sm__eq_ material.game_settings.use_backface_culling\n\n            # testing for Cycles renderer has to be different\n            if material.use_nodes _eq__eq_ True_dd_\n                self.needsBaking _eq_ True\n                self.cyclesRender _eq_ True\n                self.nodeTrees.append(material.node_tree)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am using blender render. I attached the blend file. Not sure what else to try.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_9400_qt__gt_soldier_armature_2.blend_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jSnake04","Date":"2016-09-08T18:06:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSeems I got it to work_co_ not sure if it is the best solution_co_ but I made a few changes to the exporter addon script to skip the null materials. I have no idea why the material object is null though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI figured out that there were two materials attempting to be exported. I only added one that I know of.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne of the materials was correct and the other was the null one causing problems.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tstarting at line #793_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_for slot in object.material_slots_dd_\n\n    #------ my change----------\n    if slot.material is None_dd_\n        continue\n    #--------------------------\n    \n    # None will be returned when either the first encounter or must be unique due to baked textures\n    material _eq_ exporter.getMaterial(slot.name)\n    if (material !_eq_ None)_dd_\n        Main.log(_t_registered as also a user of material_dd_  _t_ + slot.name_co_ 2)\n    else_dd_\n        material _eq_ StdMaterial(slot_co_ exporter_co_ object)\n        exporter.materials.append(material)_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tand at line #1872_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_for material_slot in mesh.material_slots_dd_\n    # a material slot is not a reference to an actual material_sm_ need to look up\n    material _eq_ material_slot.material\n\n    #------------ my change -----------\n    if material is None_dd_\n        continue\n    #----------------------------------\n\n    self.backFaceCulling &amp_sm__eq_ material.game_settings.use_backface_culling_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI attached the modified script. Let me know if you guys think I should make a pull request on github or something. Seems to work_co_ but i_t_m not sure if there are any unintended consequences.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI probably should have taken a look at the 5.0 version of the exporter. Not sure if that would play nice with my babylon js version though.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_9401_qt__gt_io_export_babylon.py_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-09-08T19:09:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have no intension of changing 4.6.1_co_ myself.  You can have 4.6.1 &amp_sm_ 5.0 of the exporter installed at the same time_co_ since 5.0 media is a zip file &amp_sm_ 4.6 is a py file. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI do not know the implied min BJS version of either exporter_co_ but if the exporter writes fairly new fields (e.g. animationRanges) and your version of BJS does not have_co_ they should just be ignored.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFYI_co_ how old is this .blend?  Maybe saveAs it.  Please post a 5.0 logfile should it throw error.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jSnake04","Date":"2016-09-08T19:34:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDidn_t_t realize you could have the exporter versions at the same time like that. I will give 5.0 a shot here in a bit. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m pretty new to blender_co_ babylon_co_ and python. lol. I_t_m willing to dig in and get my hands dirty though.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m using babylon 2.4 at the moment.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre there any big differences between 5.0 and 4.6.1? or circumstances where 4.6.1 should be used instead of 5.0?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe blend file probably started as an older version then I modified it and savedAs it several times as I made progress with the model--creating a bunch of backups being so new to blender.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jSnake04","Date":"2016-09-08T21:09:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLooks like it gives the same error with 5.0.5\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tExporter version_dd_ 5.0.5_co_ Blender version_dd_ 2.77 (sub 0)_lt_br /_gt_\n\t_eq__eq__eq__eq__eq__eq__eq__eq__eq_ Conversion from Blender to Babylon.js _eq__eq__eq__eq__eq__eq__eq__eq__eq__lt_br /_gt_\n\t    Scene settings used_dd__lt_br /_gt_\n\t        selected layers only_dd_  false_lt_br /_gt_\n\t        flat shading entire scene_dd_  false_lt_br /_gt_\n\t        inline textures_dd_  false_lt_br /_gt_\n\t        texture directory_dd_  C_dd_\\data\\web\\html5game\\models\\soldier\\export\\_lt_br /_gt_\n\t    Python World class constructor completed_lt_br /_gt_\n\t    processing begun of skeleton_dd_  ArmLow_co_ id_dd_  0_lt_br /_gt_\n\t        processing begun of bone_dd_  Hip_co_ index_dd_  0_lt_br /_gt_\n\t        processing begun of bone_dd_  Back_co_ index_dd_  1_lt_br /_gt_\n\t        processing begun of bone_dd_  Shoulder.Left_co_ index_dd_  2_lt_br /_gt_\n\t        processing begun of bone_dd_  Upperarm.Left_co_ index_dd_  3_lt_br /_gt_\n\t        processing begun of bone_dd_  Forearm.Left_co_ index_dd_  4_lt_br /_gt_\n\t        processing begun of bone_dd_  Hand.Left_co_ index_dd_  5_lt_br /_gt_\n\t        processing begun of bone_dd_  Head_co_ index_dd_  6_lt_br /_gt_\n\t        processing begun of bone_dd_  Shoulder.Right_co_ index_dd_  7_lt_br /_gt_\n\t        processing begun of bone_dd_  Upperarm.Right_co_ index_dd_  8_lt_br /_gt_\n\t        processing begun of bone_dd_  Forearm.Right_co_ index_dd_  9_lt_br /_gt_\n\t        processing begun of bone_dd_  Hand.Right_co_ index_dd_  10_lt_br /_gt_\n\t        processing begun of bone_dd_  Thigh.Left_co_ index_dd_  11_lt_br /_gt_\n\t        processing begun of bone_dd_  Shin.Left_co_ index_dd_  12_lt_br /_gt_\n\t        processing begun of bone_dd_  Foot.Left_co_ index_dd_  13_lt_br /_gt_\n\t        processing begun of bone_dd_  Thigh.Right_co_ index_dd_  14_lt_br /_gt_\n\t        processing begun of bone_dd_  Shin.Right_co_ index_dd_  15_lt_br /_gt_\n\t        processing begun of bone_dd_  Foot.Right_co_ index_dd_  16_lt_br /_gt_\n\t    processing begun of mesh_dd_  HumanLow_lt_br /_gt_\n\t_eq__eq__eq__eq__eq__eq__eq__eq__eq_ An error was encountered _eq__eq__eq__eq__eq__eq__eq__eq__eq__lt_br /_gt_\n\t  File _qt_C_dd_\\Users\\***[removed]***\\AppData\\Roaming\\Blender Foundation\\Blender\\2.77\\scripts\\addons\\babylon-js\\json_exporter.py_qt__co_ line 99_co_ in execute_lt_br /_gt_\n\t    mesh _eq_ Mesh(object_co_ scene_co_ nextStartFace_co_ forcedParent_co_ nameID_co_ self)_lt_br /_gt_\n\t  File _qt_C_dd_\\Users\\***[removed]***\\AppData\\Roaming\\Blender Foundation\\Blender\\2.77\\scripts\\addons\\babylon-js\\mesh.py_qt__co_ line 144_co_ in __init___lt_br /_gt_\n\t    recipe _eq_ BakingRecipe(object)_lt_br /_gt_\n\t  File _qt_C_dd_\\Users\\***[removed]***\\AppData\\Roaming\\Blender Foundation\\Blender\\2.77\\scripts\\addons\\babylon-js\\material.py_qt__co_ line 199_co_ in __init___lt_br /_gt_\n\t    self.backFaceCulling &amp_sm__eq_ material.game_settings.use_backface_culling_lt_br /_gt_\n\tERROR_dd_  _t_NoneType_t_ object has no attribute _t_game_settings_t__lt_br /_gt_\n\t_eq__eq__eq__eq__eq__eq__eq__eq__eq_ end of processing _eq__eq__eq__eq__eq__eq__eq__eq__eq__lt_br /_gt_\n\telapsed time_dd_  0 min_co_ 0.01 secs\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-09-09T01:12:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23249-jsnake04/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23249_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23249-jsnake04/_qt_ rel_eq__qt__qt__gt_@jSnake04_lt_/a_gt_ _dd_ Welcome to thew forum _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI downloaded your .blend file and loaded it into Blender 2.76 and exported using version 5.0.5 of the exporter - and got the same results as you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe solution lies in the error message you are getting\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_143283_qt_ data-ipsquote-contentid_eq__qt_25058_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1473368997_qt_ data-ipsquote-userid_eq__qt_23249_qt_ data-ipsquote-username_eq__qt_jSnake04_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ jSnake04 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tERROR_dd_  _t_NoneType_t_ object has no attribute _t_game_settings_t_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNow to get to _qt_game settings_qt_ in Blender 2.76 I have to change the drop down box from _qt_Blender Renderer_qt_ to _qt_Blender Game_qt_ and once you make changes there Blender remembers even if you change it back to _qt_Blender Render_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo - a solution in Blender Render_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Select the mesh  -&gt_sm_ Texture Tab -&gt_sm_ Delete the texture (Shift+Click on the little X next to the + sign beside the texture name)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. With mesh still selected -&gt_sm_ Material Tab -&gt_sm_ Delete the material (Shift + Click the little X ......as above)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. G to the UV image editor -&gt_sm_Select the image you are using -&gt_sm_ Delete Image  (Shift + Click on little X  ... as above).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t$. Now save your file and reopen it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf the above is done correctly your figure now has no material or texture any more when reloaded..\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn Blender Render mode - Now give it a new material and texture (the UVmap is still there so your original texture should work fine.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOhh and below is your little soldier boy with the fix above applied in the _lt_a href_eq__qt_http_dd_//www.babylonjs.com/sandbox/_qt_ rel_eq__qt_external nofollow_qt__gt_BJS Sandbox_lt_/a_gt_ - unfortunately with no texture as you did not include it with the .blend file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/soldier1.png.bbb5a784778e883361ef8c1bcf1caa3e.png_qt_ data-fileid_eq__qt_9408_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_soldier1.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_9408_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/soldier1.png.bbb5a784778e883361ef8c1bcf1caa3e.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jSnake04","Date":"2016-09-09T20:00:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt__co_ thanks for the help\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried following your steps_co_ but it seems it isn_t_t working for me. I tried it several times. Maybe I_t_m doing something slightly different.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m of the opinion that this should probably be considered a bug (not sure if blender or the exporter is the root cause). I_t_ve always thought that a crazy monkey at the keyboard and mouse shouldn_t_t be able to cause an exception in a application no matter what key and click combinations in the ui_co_ but maybe that is just me. lol\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust curious_co_ but why are there so many blank textures and one blank material in the materials tab?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my debugging_co_ I noticed that it was trying to output two materials_co_ my material worked okay_co_ but the last one was a null object...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWell I just realized all I had to do was delete that one material with a blank name and it started working again. I wonder how that got there in the first place? _lt_img alt_eq__qt_B)_qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_cool.png_qt_ title_eq__qt_B)_qt_ /_gt__lt_br /_gt_\n\tI guess that answers my question. lol\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh well_co_ thanks again for the help guys. Got me pointed in the right direction.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI attached my texture if you are still curious. consider my most bestest model and texture ever created in the history of the planet_co_ public domain._lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI made the texture and the model comes from_dd_ _lt_a href_eq__qt_http_dd_//opengameart.org/content/very-low-poly-human_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//opengameart.org/content/very-low-poly-human_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/soldier_uv_map_test.png.85d6b9928b25f8c50ebace316f8d755a.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_9415_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/soldier_uv_map_test.thumb.png.80b313d2f7f97c435343a0a35e52198f.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_soldier_uv_map_test.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-09-09T20:27:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23249-jsnake04/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23249_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23249-jsnake04/_qt_ rel_eq__qt__qt__gt_@jSnake04_lt_/a_gt_ _dd_ Glad you got your materials sorted.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tImage below the soldier boy now in his uniform _sm_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/soldier2.png.9c4ef2ed348f45e514eb9b93e1a5b1ce.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_9416_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_09/soldier2.png.9c4ef2ed348f45e514eb9b93e1a5b1ce.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_soldier2.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-09-09T20:45:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23249-jsnake04/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23249_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23249-jsnake04/_qt_ rel_eq__qt__qt__gt_@jSnake04_lt_/a_gt_ _dd_ just a recommendation jSnake - you might want to make your texture size a power of 2. So 512x512_co_ 1024x1024 etc. Some devices don_t_t like textures not a power of 2_co_ I believe.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow lets see it animated _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAnd if you are planning more humanoid characters - take a look at a piece of software called MakeHuman\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jSnake04","Date":"2016-09-09T21:49:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_ should be 1024X1024_co_ unless I_t_m missing something. Could probably pack things in better and optimize a bit_co_ but I_t_m just trying to prototype at this point.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI plan on doing a walk and run animation here pretty soon.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the MakeHuman tip_co_ that should come in handy when I start polishing things. Looks like a pretty cool app.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI plan on creating an ambitious reusable ragdoll manager for babylon js. I want to make it work with any model and babylon physics plugin (plus some config of course).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s coming along pretty good so far. Been working on it for a while now._lt_br /_gt_\n\tGot it working decently with a cube worm model/animation so far. Just need to try it out with a human form and simplify/reorganize the config options.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI plan on releasing it as a babylon extension or something once I get further along. I noticed there was quite a bit of talk here on the forum about ragdoll physics. Definitely not a simple thing to do_co_ but it sure is a fun challenge. _lt_img alt_eq__qt_B)_qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_cool.png_qt_ title_eq__qt_B)_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m descending deep into the world of matrix math and quaternion rotation fourth dimension hyper-spheres. Wish me luck and if I_t_m not back in a few months_co_ then wait another few months. lol. I already scoured the forums for every bit of ragdoll talk and even various robotics tutorials.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will post a playground with the model animation and ragdoll effect once I get things working well.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-09-09T22:31:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23249-jsnake04/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23249_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23249-jsnake04/_qt_ rel_eq__qt__qt__gt_@jSnake04_lt_/a_gt_ _dd_ turns out how I saved the image gave me one 750x750. (I went_dd_  Right click -&gt_sm_ view Image -&gt_sm_ copy image). If I just click on the image and then copy image it comes over as 1024x1024. No idea why _lt_img alt_eq__qt__dd_blink_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_blink.png_qt_ title_eq__qt__dd_blink_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tLooking forward to seeing your stuff.\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_143437_qt_ data-ipsquote-contentid_eq__qt_25058_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1473457790_qt_ data-ipsquote-userid_eq__qt_23249_qt_ data-ipsquote-username_eq__qt_jSnake04_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t38 minutes ago_co_ jSnake04 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI_t_m descending deep into the world of matrix math and quaternion rotation fourth dimension hyper-spheres.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tGood luck with that - a braver man than me. _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]