[{"Owner":"mout99","Date":"2017-06-23T14:49:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_div style_eq__qt_color_dd_#212121_sm__qt__gt_\n\t_lt_pre dir_eq__qt_ltr_qt_ style_eq__qt_color_dd_#212121_sm__qt__gt_\n_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_Hello_co_ I have a scene and it_t_s disappearing_co_ I do not know what it can be_co_ I need help_co_ sorry for my english I used google translate_co_ _lt_/span_gt__lt_/pre_gt_\n\n\t_lt_div style_eq__qt_color_dd_#212121_sm__qt__gt_\n\t\t_lt_pre dir_eq__qt_ltr_qt_ style_eq__qt_color_dd_#212121_sm__qt__gt_\n_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_See attached images_co_ _lt_/span_gt_\n_lt_/pre_gt_\n\n\t\t_lt_div style_eq__qt_color_dd_#212121_sm__qt__gt_\n\t\t\t_lt_pre dir_eq__qt_ltr_qt_ style_eq__qt_color_dd_#212121_sm__qt__gt_\n_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_I also attached the 3d file_co_ you can use it in the sandbox to see how it looks _lt_a href_eq__qt_http_dd_//sandbox.babylonjs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//sandbox.babylonjs.com/_lt_/a_gt__lt_/span_gt__lt_/pre_gt_\n\n\t\t\t_lt_pre lang_eq__qt_en_qt_ style_eq__qt_color_dd_#212121_sm__qt_ xml_dd_lang_eq__qt_en_qt__gt_\n\n _lt_/pre_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n\n\t_lt_pre_gt_\n_lt_code_gt_           if (BABYLON.Engine.isSupported()) {\n             var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n             var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n             var newScene_sm_\n\n             BABYLON.SceneLoader.Load(_qt__qt__co_ _qt_js/teste.obj_qt__co_ engine_co_ function (newScene) {\n                 newScene.executeWhenReady(function () {\n                    var camera _eq_ new BABYLON.ArcRotateCamera(_qt_ArcRotateCamera_qt__co_ 0_co_ 0_co_ 0_co_ BABYLON.Vector3.Zero()_co_ newScene)_sm_\n                    camera.setPosition(new BABYLON.Vector3(7000_co_7000_co_7000))_sm_\n                    camera.attachControl(canvas_co_ true)_sm_\n                    camera.lowerRadiusLimit _eq_ 10_sm_\n                    camera.pinchPrecision _eq_ 30_sm_\n                    newScene.activeCamera _eq_ camera_sm_\n                    newScene.activeCamera.attachControl(canvas_co_ true)_sm_\n                    newScene.clearColor _eq_ new BABYLON.Color3(0.5_co_ 0.8_co_ 0.5)_sm_\n\n\n                     engine.runRenderLoop(function() {\n                        newScene.render()_sm_\n                     })_sm_\n\n                 })_sm_\n             }_co_function (progress) {\n             })_sm_\n\n           }\n           window.addEventListener(_qt_resize_qt__co_ function () {\n            engine.resize()_sm_\n        })_sm__lt_/code_gt__lt_/pre_gt_\n\n\t_lt_p dir_eq__qt_ltr_qt__gt_\n\t\t \n\t_lt_/p_gt_\n\n\t_lt_pre lang_eq__qt_en_qt_ style_eq__qt_color_dd_#212121_sm__qt_ xml_dd_lang_eq__qt_en_qt__gt_\n\n _lt_/pre_gt_\n_lt_/div_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/bug1.png.687a9c9bfe546dbbe7d316a62b03fca2.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_13524_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/bug1.thumb.png.b34658ec1488aff9171fee2aaa945f30.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_bug1.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/bug2.png.94d6bc4f0a428b73556182214563ec5d.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_13525_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/bug2.thumb.png.40a3126e76a350857fd08286f41cebe7.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_bug2.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/bug3.png.324e9c384f0b16ce7fdf9d829ae76c65.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_13528_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/bug3.thumb.png.3aa2ee180688fb5bdfaaabd9411119d0.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_bug3.png_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_13529_qt__gt_teste.obj_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-23T15:46:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthis is because your object is really big. (You should scale it down with mesh.scaling)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ to fix your issue_co_ you can increase your camera.maxZ value to avoid being clipped by the far clip plane\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mout99","Date":"2017-06-23T16:29:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_div style_eq__qt_color_dd_#212121_sm__qt__gt_\n\t_lt_pre dir_eq__qt_ltr_qt_ style_eq__qt_color_dd_#212121_sm__qt__gt_\n_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_Thank you so much for your help_co_ I_t_m very grateful to you._lt_/span_gt__lt_/pre_gt_\n\n\t_lt_pre lang_eq__qt_en_qt_ style_eq__qt_color_dd_#212121_sm__qt_ xml_dd_lang_eq__qt_en_qt__gt_\n\n _lt_/pre_gt_\n_lt_/div_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]