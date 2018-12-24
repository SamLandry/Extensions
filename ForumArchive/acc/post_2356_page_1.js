[{"Owner":"micage","Date":"2013-11-28T14:45:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_i_t_m trying to export my baked ligthmaps from blender. As my model should not receive any dynamic lighting_co_ i created the first UV set for the _qt_Emit_qt_ slot and a second one_co_ lightmap packed_co_ for the _qt_Ambient_qt_ slot. So i have two different sets of texture coordinates for two different texture slots. The python exporter seems to have problems with that_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(excerpt from a simpe babylon file_co_ exporting a quad)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt__co__qt_uvs_qt__dd_[0.2066_co_0.2066_co_0.7934_co_0.2066_co_0.2066_co_0.7934_co_0.7934_co_0.7934]_lt_/div_gt__lt_div_gt__co__qt_uvs_qt__dd_[0.2066_co_0.2066_co_0.7934_co_0.2066_co_0.2066_co_0.7934_co_0.7934_co_0.7934]]_lt_/div_gt__lt_div_gt__co__qt_indices_qt__dd_[0_co_1_co_2_co_1_co_3_co_2]_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_It produces two identical UV arrays and mistakingly adds a bracket _qt_]_qt_ at the end of the second one._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_Does Babylon support multiple texture coordinates?_lt_/div_gt__lt_div_gt_And Is there a way to get them from blender or maybe with FBX?_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_In addition_co_ is there a way to exclude objects from dynamic lighting or specific lights?_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-28T18:03:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Uh! We could have a bug here_dd_) Could you share the blender file? I_t_ll try to debug the python exporter_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In the next version_co_ we will add a new property to light_dd_ excludedMeshes. It will be a way to exclude meshes from a specific light_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"micage","Date":"2013-11-28T19:10:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_First_co_ big thänx for your prompt reply._lt_/p_gt__lt_p_gt_At the moment i have no clou how to share a file. (could you give me a hint _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For test purposes i corrected the exported babylon file manually_dd__lt_/p_gt__lt_p_gt_one array _qt_uvs_qt_ and the second _qt_uvs2_qt__co_ also setting _qt_coordinatesIndex_qt__dd_1_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Finally Lightmaps are working fine for a handcrafted quad. Fixing the exporter remains ..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt__qt_excludedMeshes_qt_ is great news. But wouldn_t_t it be easier to _lt_u_gt_include_lt_/u_gt_ meshes explicitely to a given light?_lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Normally you wouldn_t_t want all or most of your meshes be lit by diffuse light ... just thinking._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_Keep up the good work!_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-29T07:38:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For me_co_ by default a light should includes all object (this is the obvious behavior)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you have a skydrive or a dropbox you can share the blender scene (else you can send me a PM_dd_))_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"micage","Date":"2013-11-29T11:49:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_15725_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_2356_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1385710682_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_For me_co_ by default a light should includes all object (this is the obvious behavior)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you have a skydrive or a dropbox you can share the blender scene (else you can send me a PM_dd_))_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_I found the error in the python export script_co_ around line 553_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_        if hasUV2_dd__lt_/div_gt__lt_div_gt_            uvs2_eq_uvs.rstrip(_t__co__t_)        # this has to be_dd_  uvs2_eq_uvs2.rstrip(_t__co__t_)_lt_/div_gt__lt_div_gt_            uvs2+_eq__qt_]\\n_qt__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_I also used _qt_mesh.uv_layers_qt_ instead of _qt_mesh.tessface_uv_textures_qt_ to get the uvs._lt_/div_gt__lt_div_gt_Maybe this is not necessary_co_ but while testing i found out_co_ that len(mesh.tessface_uv_textures) was zero._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_@ diffuse lighting_dd__lt_/div_gt__lt_div_gt_this is a complex topic_co_ depends a lot on level design and shader management_co_ also a matter of taste _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/div_gt__lt_div_gt_It remembered me of the first steps with the DirectX fixed function pipeline._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_What one would not like is having static geometry lit by vertex lighting._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_But there is the possibility to write custom materials_co_ not depending on vertex lighting or even any lights._lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_cheers_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-29T13:40:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I saw this bug and the exporter on github is now fixed_dd_) (I kept _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_mesh.tessface_uv_texture_co_ could you try it? )_lt_/span_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Exporters/Blender_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Exporters/Blender_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_@diffuse lighting_dd_ exactly _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"micage","Date":"2013-11-29T19:53:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_yes_co_ it_t_s working now! No need for extracting UVs from _qt_uv_layers_qt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think_co_ i didn_t_t get UVs from _qt_mesh._lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_tessface_uv_texture_qt_ because i was in EDIT mode and inside the phyton console._lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Fine. Excited to see the shape of things to come ..._lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-30T10:27:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Good_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]