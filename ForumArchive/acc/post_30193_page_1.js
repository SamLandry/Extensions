[{"Owner":"Pryme8","Date":"2017-05-03T17:54:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBack from the dead ^_^_^ MUAHAHAHA...._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tAnyways_co_ I am loading an external STL_co_ and everything seems to be going as planned.  The file loads but nothing ever appears in the draw stack.  It shows that there is a loaded mesh_co_ that it contains polygonal data etc_co_ but the draw calls remain at 0._lt_br /_gt__lt_br /_gt_\n\tIts been a while seine I have worked in BJS so I kinda don_t_t even know where to start debugging this._lt_br /_gt__lt_br /_gt_\n\tThis is the STL file _lt_a href_eq__qt_https_dd_//s3-us-west-1.amazonaws.com/kirakira-dev/user-photos-main/577bfb3b6aa5717c0c06af6c/user-photos/1483735045390group_lmnop.stl_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//s3-us-west-1.amazonaws.com/kirakira-dev/user-photos-main/577bfb3b6aa5717c0c06af6c/user-photos/1483735045390group_lmnop.stl_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tand here is a screenshot of the debug layer_dd__lt_br /_gt__lt_br /_gt_\n\tAny help on this would be greatly appreciated._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/Example.png.f1309f0bea4c485ced655de6bf4e98ec.png_qt_ data-fileid_eq__qt_12827_qt_ rel_eq__qt__qt__gt__lt_img alt_eq__qt_Example.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_12827_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_05/Example.thumb.png.acbb2e0730b8a9590795f50008ce33fa.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-05-03T18:04:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk I think I may be doing it wrong... Do I have to load the STL with\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#444444_sm__qt__gt_BABYLON.SceneLoader.Load(_lt_/span_gt__lt_span style_eq__qt_color_dd_#444444_sm__qt__gt_)?_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#444444_sm__qt__gt_and not the asset manager?_lt_br /_gt__lt_br /_gt_\n\tI found _lt_/span_gt_\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/29134-import-stl-file/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tbut the information on there was not much help._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tDoes anyone have a working example of a STL being loaded (ASCII because of no binary support)_lt_br /_gt__lt_br /_gt_\n\tThe thing that is tripping me out is the fact there are no draw calls though there is and active mesh._lt_br /_gt__lt_br /_gt__lt_br /_gt_\n\tHere are two playgrounds showing it does not work_dd__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#VSVK9G%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#VSVK9G#1_lt_/a_gt__lt_br /_gt_\n\t- this one is using the AssetManager_lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#VSVK9G_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#VSVK9G_lt_/a_gt__lt_br /_gt_\n\t- this one is using the SceneLoader_lt_br /_gt__lt_br /_gt_\n\tThe SceneLoader one does not even finish up because of an error in the STL loader. I have also tried the _lt_a href_eq__qt_https_dd_//cdn.coursesaver.com/files/Part26-4.STL_qt_ rel_eq__qt_external nofollow_qt__gt_a_lt_/a_gt_ different STL file to verify and im getting the same errors it seems_dd__lt_a href_eq__qt_https_dd_//cdn.coursesaver.com/files/Part26-4.STL_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//cdn.coursesaver.com/files/Part26-4.STL_lt_/a_gt_ at least on the SceneLoader it seems to work when I use the AssetManager._lt_br /_gt__lt_br /_gt_\n\t**Kinda Solved... Im thinking its just because some of the STL files are crap..._lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#VSVK9G%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#VSVK9G#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-05-03T20:12:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWelcome back _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAsset manager should just work..Do you mind sharing the code used?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-05-03T20:14:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tJust added some playgrounds.  I think the problem I was having is some of the STL_t_s were binary and some of them were also badly formatted ASCII._lt_br /_gt__lt_br /_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#VSVK9G%231_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_color_dd_#3c6994_sm__qt__gt_https_dd_//www.babylonjs-playground.com/#VSVK9G#1_lt_/a_gt__lt_br /_gt_\n\tKinda stumps me though_co_ it looks like the mesh loaded but I get no draw calls... I pretty much moved onto a different STL and the issues stopped_co_ but thought this was weird behavior.  Is it because the mesh is not in the cameras view?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-05-03T20:22:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI can see it if you move the camera. So it is correctly loaded but not just in the frustum. Perhaps you can call camera.setTarget(yourMesh) ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-05-03T22:24:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk so it was just the binary files that were giving me trouble.  thanks for your help!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]