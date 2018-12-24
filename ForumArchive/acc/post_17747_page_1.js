[{"Owner":"srt","Date":"2015-10-08T18:17:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi everyone_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m just a newbie exploring the possibilities with babylon.js. I have gone through simple tutorials and managed to create some shapes_co_ explored the light and camera options. Then I wanted to insert more complicated things in my scene and downloaded blender for creating those scenes. As it turns out blender was a little bit complicated for me to create something sophisticated so I searched for models created by other users. I found this soccer stadium model_dd_ _lt_a href_eq__qt_http_dd_//www.blendswap.com/blends/view/62667_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.blendswap.com/blends/view/62667_lt_/a_gt_ _co_ and thought it would be great playground for my little shapes to move around. I tried to export the scene as it is to .babylon file using the babylon exporter for blender but there was some problems with the windows of the stadium. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_processing begun of mesh_dd_  Windows_Inner_lt_/p_gt__lt_div_gt_processing begun of baked material_dd_  Windows_Inner_lt_/div_gt__lt_div_gt__eq__eq__eq__eq__eq__eq__eq__eq__eq_ An error was encountered _eq__eq__eq__eq__eq__eq__eq__eq__eq__lt_/div_gt__lt_div_gt_  File _qt_C_dd_\\Program Files\\Blender Foundation\\Blender\\2.76\\scripts\\addons\\io_export_babylon.py_qt__co_ line 288_co_ in execute_lt_/div_gt__lt_div_gt_    mesh _eq_ Mesh(object_co_ scene_co_ nextStartFace_co_ forcedParent_co_ nameID_co_ self)_lt_/div_gt__lt_div_gt_  File _qt_C_dd_\\Program Files\\Blender Foundation\\Blender\\2.76\\scripts\\addons\\io_export_babylon.py_qt__co_ line 694_co_ in __init___lt_/div_gt__lt_div_gt_    bakedMat _eq_ BakedMaterial(exporter_co_ object_co_ recipe)_lt_/div_gt__lt_div_gt_  File _qt_C_dd_\\Program Files\\Blender Foundation\\Blender\\2.76\\scripts\\addons\\io_export_babylon.py_qt__co_ line 1870_co_ in __init___lt_/div_gt__lt_div_gt_    bpy.ops.mesh.select_all(action_eq__t_SELECT_t_)_lt_/div_gt__lt_div_gt_  File _qt_C_dd_\\Program Files\\Blender Foundation\\Blender\\2.76\\scripts\\modules\\bpy\\ops.py_qt__co_ line 189_co_ in __call___lt_/div_gt__lt_div_gt_    ret _eq_ op_call(self.idname_py()_co_ None_co_ kw)_lt_/div_gt__lt_div_gt_ERROR_dd_  Operator bpy.ops.mesh.select_all.poll() failed_co_ context is incorrect_lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I couldn_t_t find a way around to make it work with windows_co_ so I removed the window layers from the scene and exported .babylon file this time._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But the scene on babylon didn_t_t look like the images that are rendered in the blender. This might be a stupid expectation since I don_t_t know too much about this stuff. But I think there should be a way to accomplish this. Then I found out that I_t_m getting the openGL rendered version of the scene rather than full render._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Difference is as follows_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_OpenGL_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//i.imgur.com/BdZdhlz.png_qt_ alt_eq__qt_BdZdhlz.png_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_full render_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//i.imgur.com/dmTZ2HT.png_qt_ alt_eq__qt_dmTZ2HT.png_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there any possible way to export the scene as it looks like the full render option?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-10-08T19:35:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_I downloaded this.  I looked at it_co_ but would not get to this for a while.  Noticed some things on the description page that even if the export worked_co_  it might cause to never run right as this was designed_dd__lt_/p_gt__lt_ul_gt__lt_li_gt_Said there is a _lt_strong_gt_low_lt_/strong_gt_ poly version on layer 3 that is only _lt_strong_gt_77_co_000_lt_/strong_gt_ tris.  That is a lot of resources just for a background.  You would definitely want to use the low poly version_co_ the high poly looks over 400k tris.  You should make layer 3 the only one active_co_ &amp_sm_ check _t_Export only Selected Layers_t_ in Exporter Settings (On scene properties tab).  Doing nothing would have resulted in 2 stadiums_co_ had it worked._lt_/li_gt__lt_li_gt_Built for Blender version 2.68.  The baking section_co_ where this errored_co_ is very version sensitive.  You are running 2.76 which has not been tested as well_co_ but this old .blends from Blendswap are not working out too well._lt_/li_gt__lt_/ul_gt__lt_p_gt_Wish I could say it looks possible_co_ but most people making these .blends did not have exporting into a gaming engine in mind.  You might try deleting the Windows_inner mesh.  Problem will probably just happen on a different mesh._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-10-08T19:48:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ I selected layer 3 only_co_ and tried exporting with _t_Export only Selected Layers_t_ checked for the hell of it using 2.75.  It exported.  Noticed a number of problems._lt_/p_gt__lt_ul_gt__lt_li_gt_There are 3 cameras_co_ but none on layer 3_co_ so they all ignored_lt_/li_gt__lt_li_gt_There is only light_co_ &amp_sm_ is not on layer 3._lt_/li_gt__lt_/ul_gt__lt_p_gt_You would need to move a camera &amp_sm_ light at bare minimum._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]