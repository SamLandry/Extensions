[{"Owner":"fenomas","Date":"2015-02-02T15:57:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi - I just ran across BJS today but it_t_s great fun so far!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My question is_co_ how can I get vertex colors to show up even when a material has a (diffuse) texture?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_After poking around I_t_m guessing this could be done with a custom shader_co_ by multiplying by _t_vColor_t_ after the texture is sampled. I couldn_t_t get this to work in CYOS though - I tried added color data to the scene_t_s mesh but _t_vColor_t_ didn_t_t get passed into the shader._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is this the right way to go about this_co_ or is there an easy way built into the engine?_lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-02-02T19:28:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By default StandardMaterial supports vertex color_dd_)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just let Babylon.js knows that you want it_dd_ mesh.useVertexColors _eq_ true_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-02-03T05:25:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_70245_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_12192_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1422905336_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_By default StandardMaterial supports vertex color_dd_)_lt_/p_gt__lt_p_gt_Just let Babylon.js knows that you want it_dd_ mesh.useVertexColors _eq_ true_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_co_ but is this intended to work even when there_t_s a diffuse texture?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m testing in the _qt_Material Editor_qt_ demo_co_ after applying vertex colors and verifying that _t_useVertexColors_t_ is true_co_ and can_t_t get the vertex colors to show up if there_t_s a diffuse texture enabled. (They show up with emissive or ambient textures_co_ just not diffuse.)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edit_dd_ graphics to show what I mean_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_img src_eq__qt_http_dd_//i.imgur.com/Jttd7q4.png_qt_ alt_eq__qt_Jttd7q4.png_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-02-03T07:13:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Better yet_co_ a playground (document.onclick toggles the diffuse texture)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2EUHZW_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2EUHZW_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-02-03T17:18:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Actually you_t_re right but you can then use the ambient channel_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2EUHZW%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2EUHZW#1_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-02-03T18:48:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_70463_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_12192_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1422983880_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Actually you_t_re right but you can then use the ambient channel_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yes_co_ as I mentioned I noticed that_co_ and I will try it out. (The motivation here is to simulate AO by baking occlusion into the vertex colors.)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just to finish with my question though_co_ would it also be possible to get vertex colors over the diffuse texture by using a custom shader that multiplied the texture by vColor?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-02-03T22:23:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sure thing_co_ in this case just create your own shader_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2014/04/17/learning-shaders-create-your-own-shaders-with-babylon-js.aspx_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//blogs.msdn.com/b/eternalcoding/archive/2014/04/17/learning-shaders-create-your-own-shaders-with-babylon-js.aspx_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]