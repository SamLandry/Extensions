[{"Owner":"chicagobob123","Date":"2016-07-08T15:45:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am using a 2D canvas to render a ground for my world. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn the PC its fine consistent between machines. Then I went to view it on my phone (Samsung S7) chrome and the ground is in the wrong location. Its moved in the Z direction? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyone have an idea?  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-08T16:06:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDo you mean Canvas2D?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-07-08T19:44:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo Sorry I really spaced out. It involves a context not canvas. There should be a hit head _lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_0)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_24px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_Emoticons_lt_/span_gt_ _lt_/span_gt_for this. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tLets start again.  I created a  BABYLON.DynamicTexture\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar sizelimit_eq_8192_sm__lt_br /_gt_\n\tvar dTexture_eq_new BABYLON.DynamicTexture(_qt_dtex_qt__co_sizelimit_co_scene_co_true)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar context_eq_dTexture.getContext()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t----&gt_sm_ I drew the ground with different image tiles. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tcontext.drawImage(grnd[0]_co_j*size_co_i*size)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t       var materialGround_eq_new BABYLON.StandardMaterial(_qt_std_qt__co_scene)_sm__lt_br /_gt_\n\t       materialGround.diffuseTexture_eq_dTexture_sm__lt_br /_gt_\n\t       materialGround.specularPower_eq_300000_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t       dTexture.update()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t--&gt_sm_ created the ground and used the material\n_lt_/p_gt_\n\n_lt_p_gt_\n\t      var ground_eq_BABYLON.Mesh.CreateGround(_qt_ground1_qt__co_8192_co_8192_co_2_co_scene)_sm__lt_br /_gt_\n\t       ground.material_eq_materialGround_sm__lt_br /_gt_\n\t       ground.material.backFaceCulling_eq_false_sm__lt_br /_gt_\n\t       ground.position.y_eq_0.1_sm__lt_br /_gt_\n\t       ground.convertToFlatShadedMesh()_sm__lt_br /_gt_\n\t       ground.isPickable_eq_false_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll works just fine except its not in the same place on android? Its hard to tell if its only the Z\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdirection where its off because its a phone but its off all right. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Fatalist","Date":"2016-07-09T10:47:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis is why _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_Canvas2D_lt_/span_gt_ is a bad name for that library.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-07-10T01:11:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis may be related to texture size. Can you provide a playground?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-07-13T14:03:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry so far I have not been able to pull off an example but could reall use some help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was able to see what is going on. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have tiles from the same image as a top and bottom border gnd[0] (all preloaded). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the center I loaded a bunch of different image tiles. What occurs is so ODD. ALL the same gnd[0] tiles in the positive z axis\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhile the center group shows up below. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAndroid Chrome\n_lt_/p_gt_\n\n_lt_p_gt_\n\txxxxxxxxxxxxx same\n_lt_/p_gt_\n\n_lt_p_gt_\n\txxxxxxxxxxxxx same \n_lt_/p_gt_\n\n_lt_p_gt_\n\txxxxxxxxxxxxx multiple images \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhile on the PC it renders correctly \n_lt_/p_gt_\n\n_lt_p_gt_\n\txxxxxxxxxxxxx same\n_lt_/p_gt_\n\n_lt_p_gt_\n\txxxxxxxxxxxxx multiple images \n_lt_/p_gt_\n\n_lt_p_gt_\n\txxxxxxxxxxxxx same \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t// create texture for ground\n_lt_/p_gt_\n\n_lt_p_gt_\n\t       var sizelimit_eq_8192_sm__lt_br /_gt_\n\t       var dTexture_eq_new BABYLON.DynamicTexture(_qt_dtex_qt__co_sizelimit_co_scene_co_true)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t       var context_eq_dTexture.getContext()_sm__lt_br /_gt_\n\t       var span_eq_sizelimit/512_sm__lt_br /_gt_\n\t       var size_eq_w_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t for(var i_eq_0_sm_i&lt_sm_6_sm_i++)_lt_br /_gt_\n\t        {_lt_br /_gt_\n\t         for(var j_eq_0_sm_j&lt_sm_span_sm_j++)_lt_br /_gt_\n\t          {_lt_br /_gt_\n\t           context.drawImage(grnd[0]_co_j*size_co_i*size)_sm__lt_br /_gt_\n\t          }_lt_br /_gt_\n\t        }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t       // draw out the tiles that make the ground.      _lt_br /_gt_\n\t       var cnt_eq_1_sm__lt_br /_gt_\n\t       for(var i_eq_0_sm_i&lt_sm_4_sm_i++)_lt_br /_gt_\n\t        {_lt_br /_gt_\n\t         for(var j_eq_0_sm_j&lt_sm_span_sm_j++)_lt_br /_gt_\n\t          {_lt_br /_gt_\n\t           context.drawImage(grnd[cnt]_co_j*size_co_(i+6)*size)_sm__lt_br /_gt_\n\t           cnt++_sm__lt_br /_gt_\n\t          }_sm__lt_br /_gt_\n\t        }_lt_br /_gt_\n\t    _lt_br /_gt_\n\t             // draw out the tiles that make the ground._lt_br /_gt_\n\t       for(var i_eq_0_sm_i&lt_sm_6_sm_i++)_lt_br /_gt_\n\t        {_lt_br /_gt_\n\t         for(var j_eq_0_sm_j&lt_sm_span_sm_j++)_lt_br /_gt_\n\t          {_lt_br /_gt_\n\t           context.drawImage(grnd[0]_co_j*size_co_(i + 10) *size)_sm__lt_br /_gt_\n\t          }_lt_br /_gt_\n\t        }\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t     var materialGround_eq_new BABYLON.StandardMaterial(_qt_std_qt__co_scene)_sm__lt_br /_gt_\n\t       materialGround.diffuseTexture_eq_dTexture_sm__lt_br /_gt_\n\t       materialGround.specularPower_eq_300000_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t       dTexture.update()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t       var ground_eq_BABYLON.Mesh.CreateGround(_qt_ground1_qt__co_8192_co_8192_co_2_co_scene)_sm__lt_br /_gt_\n\t       ground.material_eq_materialGround_sm__lt_br /_gt_\n\t       ground.material.backFaceCulling_eq_false_sm__lt_br /_gt_\n\t       ground.position.y_eq_0.1_sm__lt_br /_gt_\n\t       ground.convertToFlatShadedMesh()_sm__lt_br /_gt_\n\t       ground.isPickable_eq_false_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"chicagobob123","Date":"2016-07-13T14:23:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnd I answered my own question. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you CHOOSE 8192 like I did it works on PC_t_s but not android. I changed my resolution to 4096\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(where I think I recall someone telling was the limit) and like magic it just worked. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo the moral of the story_co_ know your limitations _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]