[{"Owner":"Abdullah","Date":"2017-03-30T07:54:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHow to dispose a material on run time and dynamically create again. I want when my sphere material collide with floor material my sphere material should dispose completely and I want to create a new sphere material again. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-03-30T08:13:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTo dispose a mesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_sphere.dispose()_sm__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor create sphere\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_var sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere_qt__co_ 16_co_ 2_co_ scene)_sm__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUse _lt_em_gt_sphere.intersectsMesh(ground_co_ false)_lt_/em_gt_ for to detect the collision with the ground\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExemple _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground1_qt__co_ 6_co_ 6_co_ 2_co_ scene)_sm_\nvar sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere_qt__co_ 16_co_ 2_co_ scene)_sm_\n\nif(sphere.intersectsMesh(ground_co_ false))\n{\n    sphere.dispose()_sm_ // dispose sphere\n    sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_sphere_qt__co_ 16_co_ 2_co_ scene)_sm_// create again sphere\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-30T10:01:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep_co_ well said_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.5/material#dispose-forcedisposeeffect-forcedisposetextures-rarr-void_qt_ rel_eq__qt_external nofollow_qt__gt_for materials_co_ there is also a dispose()_lt_/a_gt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I _lt_u_gt_THINK_lt_/u_gt_ (speculate)... that if you create a replacement material_co_ and then set _lt_em_gt_mesh.material _eq_ replacementMaterial... _lt_/em_gt_that will replace the previous material. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen_co_ I think the JS garbage collection (GC) system... will dispose the old material _lt_strong_gt_for you_lt_/strong_gt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t(Clear ALL variables and properties of _qt_references-to_qt_ the old material... when you are finished using it.) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot sure about the GC situation_co_ though._lt_em_gt_  _lt_/em_gt_Test/read to verify.  Hope this helps.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-03-30T10:54:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIf possible_co_ it would be more efficient to hide the _lt_s_gt_sphere_lt_/s_gt_ material and reuse it.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Raggar","Date":"2017-03-30T11:01:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think there is a difference between the title and the content of the thread.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think he means only the material_co_ although the title says otherwise.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo in _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5292_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5292-dad72/_qt_ rel_eq__qt__qt__gt_@Dad72_lt_/a_gt__t_s example_co_ instead of creating a new sphere_co_ create a new material and either dispose the old one_co_ or let the GC do the job (Something I have absolutely No knowledge of).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould saying oldmaterial _eq_ _qt__qt__sm_ be enough_co_ assuming you don_t_t have other references to the material?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BangTao","Date":"2017-03-30T11:14:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12262_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/58dce85b6095e_LIMDE1ZXM70_363U7UCW.png.dd268c6b11240b55d20f33c9cdcd9416.png_qt_ alt_eq__qt_58dce85b6095e_LIMDE1ZXM70_363U7UCW.png.dd268c6b11240b55d20f33c9cdcd9416.png_qt_ /_gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12263_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_03/58dce85f73d2e_OOISMZFJX_U8((PZMSXK.png.16c061f5f66c9fa4bd4e80ba18527065.png_qt_ alt_eq__qt_58dce85f73d2e_OOISMZFJX_U8((PZMSXK.png.16c061f5f66c9fa4bd4e80ba18527065.png_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-03-30T14:49:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPretty!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Good grinding code... yet tootie frootie.  heh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYeah_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24295-abdullah/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24295_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24295-abdullah/_qt_ rel_eq__qt__qt__gt_@Abdullah_lt_/a_gt__co_ did you mean _qt_mesh_qt_ like in the thread title_co_ or _qt_material_qt_ like in the post?  Can you fix one of them... for us?  thx! \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Abdullah","Date":"2017-03-30T20:25:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you all for replying_co_ My bad I meant _qt_material_qt__co_ I want to dynamically dispose material and re create it whenever i detect collision\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_pre_gt_\n\n_lt_code_gt_if(sphere.intersectsMesh(ground_co_ false)_lt_/code_gt__lt_/pre_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]