[{"Owner":"Bhupi","Date":"2017-01-17T06:33:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to attach a standard material and a reflective texture on the same surface. I have jpg_t_s for both. I tried to use multi-material_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                var ematerial _eq_ new BABYLON.StandardMaterial(_qt_wall_wood_qt__co_ scene)_sm__lt_br /_gt_\n\t                ematerial.emissiveTexture _eq_ new BABYLON.Texture(_qt_wall_wood.jpg_qt__co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                var rmaterial _eq_ new BABYLON.Texture(_qt_wall_wood_r_qt__co_ scene)_sm__lt_br /_gt_\n\t                rmaterial.reflectionTexture _eq_ new BABYLON.Texture(_qt_wall_wood_r.jpg_qt__co_ scene)_sm__lt_br /_gt_\n\t                rmaterial.reflectionTexture.coordinatesMode _eq_ BABYLON.Texture.PLANAR_MODE_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                var multimat _eq_ new BABYLON.MultiMaterial(_qt_multimat_qt__co_ scene)_sm__lt_br /_gt_\n\t                multimat.subMaterials.push(ematerial)_sm__lt_br /_gt_\n\t                multimat.subMaterials.push(rmaterial)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t                mesh.material _eq_ multimat_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis did not work as expected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow can I achieve this? Is custom shader the way to go?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-17T19:06:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can use the same material_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmaterial.emisseTexture _eq_ ..\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmaterial.reflectionTexture _eq_ ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmesh.material _eq_ material\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"leanderr","Date":"2017-02-03T06:00:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt didn_t_t work for me_co_ I made a playground and tried both ways_co_ even with Alphablending it wont work. Is Z-Indexing the way to go?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#5S6MD%2310_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#5S6MD#10_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Bhupi","Date":"2017-02-03T06:13:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe did not proceed this way (we removed reflection).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn general_co_ for reflection to work_co_ you need 3 things_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1_dd_ surface/mesh to reflect on_dd_ it can have texture\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2_dd_ meshes/objects that need to be reflected_dd_ to be added in the renderlist of the mesh in point 1\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3_dd_ light_dd_ should fall on the mesh in point 1\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"leanderr","Date":"2017-02-03T15:01:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#5S6MD%2311_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs-playground.com/#5S6MD#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill couldn_t_t make it work. Can you provide an Example? Maybe fix the Playground? Can anyone mix the Grid with a Standard Material Diffuse?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-03T17:49:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25519-leanderr/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25519_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25519-leanderr/_qt_ rel_eq__qt__qt__gt_@leanderr_lt_/a_gt_ can you elaborate on what you try to achieve? This seems not related to original question.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"leanderr","Date":"2017-02-03T18:42:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_162014_qt_ data-ipsquote-contentid_eq__qt_27760_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1486144186_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t49 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25519-leanderr/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25519_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25519-leanderr/_qt_ rel_eq__qt__qt__gt_@leanderr_lt_/a_gt_ can you elaborate on what you try to achieve? This seems not related to original question.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_qt__lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_I want to attach a standard material and a reflective texture on the same surface._qt_ (Original Question)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd Second I want to blend the Grid Material and a Standard Material with a certain Ratio / Alpha / Alphamap (from Grid).\n_lt_/p_gt_\n\n_lt_div style_eq__qt_table-layout_dd_fixed_sm_width_dd_1475px_sm_line-height_dd_1.6_sm_color_dd_rgb(39_co_42_co_52)_sm_font-size_dd_14px_sm_margin-bottom_dd_20px_sm_margin-top_dd_0px_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t_lt_p style_eq__qt_margin-top_dd_0px_sm__qt__gt_\n\t\tHere are my Attempts so far. _lt_a href_eq__qt_http_dd_//babylonjs-playground.com/#5S6MD%2311_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_color_dd_rgb(60_co_105_co_148)_sm_text-decoration_dd_underline_sm_background-color_dd_transparent_sm__qt__gt_http_dd_//babylonjs-playground.com/#5S6MD#11_lt_/a_gt_\n\t_lt_/p_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-02-06T18:23:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI replied to first question already (just use a stdmaterial which support reflective texture)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor your second question_dd_ the grid material is a material and meshes can only have one material so you need to have two meshes with the second one transparent to simulate the blending. Multimaterial cannot be used here because it is not for blending. It is used when you want to have some part of the mesh with one material and some with another material\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]