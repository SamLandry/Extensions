[{"Owner":"Pawel W","Date":"2014-10-03T11:41:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Hello there_co__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I_t_m trying to create placeholder editor (svg)_co_ where users can edit photo on the left and they get 3d preview of it on the right._lt_/div_gt__lt_br_gt__lt_div_gt_So far so good_co_ but I_t_m having problems with texturing mesh._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_Here is a screen how it looks_dd__lt_/div_gt__lt_br_gt__lt_div_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2014/post-10944-0-19208800-1412335111.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2014/post-10944-0-19208800-1412335111_thumb.jpg_qt_ data-fileid_eq__qt_2864_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-10944-0-19208800-1412335111_thumb.j_qt__gt__lt_/a_gt__lt_/div_gt__lt_br_gt__lt_div_gt_Model I use_dd_ _lt_a href_eq__qt_https_dd_//www.dropbox.com/s/iaxrakz0a5knu1o/cup_v2.blend?dl_eq_0_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.dropbox.com/s/iaxrakz0a5knu1o/cup_v2.blend?dl_eq_0_lt_/a_gt__lt_/div_gt__lt_br_gt__lt_div_gt_And function how I update texture_dd__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_//get texture url and create material_dd__lt_/div_gt__lt_br_gt__lt_div_gt__lt_br_gt__lt_div_gt_var textureUrl _eq_ _qt__lt_a href_eq__qt_http_dd_//localhost/FotoEditor/app/php/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//localhost/FotoEditor/app/php/_lt_/a_gt__qt_ + response +_qt_?_qt_+new Date().getTime()_sm_   _lt_/div_gt__lt_br_gt__lt_div_gt_var materialTest _eq_ new BABYLON.StandardMaterial(_qt_texture_qt__co_ $scope.babylon.sceneVars.scene)_sm_ _lt_/div_gt__lt_br_gt__lt_div_gt_materialTest.diffuseTexture _eq_ new BABYLON.Texture(textureUrl_co_ $scope.babylon.sceneVars.scene)_sm__lt_/div_gt__lt_br_gt__lt_div_gt_           _lt_/div_gt__lt_br_gt__lt_div_gt_ //scale it somehow_co_ dont know is it good or not_co_ but without it texture is strongly zoomed_dd__lt_/div_gt__lt_br_gt__lt_div_gt_materialTest.diffuseTexture.uScale _eq_ 5_sm_ _lt_/div_gt__lt_br_gt__lt_div_gt_materialTest.diffuseTexture.vScale _eq_ 5_sm_  _lt_/div_gt__lt_br_gt__lt_div_gt_   _lt_/div_gt__lt_br_gt__lt_div_gt_ //assign material to mesh_dd__lt_/div_gt__lt_br_gt__lt_div_gt_$scope.babylon.sceneVars.scene.meshes[0].material _eq_ materialTest_sm__lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_/div_gt__lt_br_gt__lt_div_gt__lt_strong_gt__lt_em_gt_Issues_dd__lt_/em_gt__lt_/strong_gt__lt_/div_gt__lt_br_gt__lt_div_gt_1. Why is texture initially rotated? Object is in 0_co_0_co_0 position and it_t_s not turned around..._lt_/div_gt__lt_br_gt__lt_div_gt_2. Is there any way I can make sure proportions from what user create on the left are exact on 3d model? In SVG users create in editor on the left I have all dimensions I need_co_ but I_t_m not sure how can i connect them with those on 3d model (model is created in blender with metrics dimensions)_lt_/div_gt__lt_br_gt__lt_div_gt_3. How can I turn off texture repetition? If user pan out image it should not repeat on 3d object and leave white space instead._lt_/div_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2014/post-10944-0-19208800-1412335111.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2014/post-10944-0-19208800-1412335111_thumb.jpg_qt_ data-fileid_eq__qt_2864_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-10944-0-19208800-1412335111_thumb.j_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-10-03T12:55:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Pawel _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_How can I turn off texture repetition? If user pan out image it should not repeat on 3d object and leave white space instead._lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I took a look at your blend file and the UV map for the _qt_placeholder_qt_ object (what appears to be the label). Your map is marked A below._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Try remapping the UVs so that they look like B in image below._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2014/post-7026-0-32021900-1412340834.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_10_2014/post-7026-0-32021900-1412340834_thumb.jpg_qt_ data-fileid_eq__qt_2866_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-7026-0-32021900-1412340834_thumb.jp_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pawel W","Date":"2014-10-06T07:08:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you_co_ _lt_/p_gt__lt_p_gt_took me a while to edit this uv map (also_co_ had to rotate it)_co_ but it got the work done!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]