[{"Owner":"freetoplay","Date":"2018-08-25T18:51:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIs there a way to adjust the camera to assure that the mesh is always within the canvas_co_ when using AssetManager to load the mesh? I have been having issues such as this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TT2BK1_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TT2BK1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-08-25T21:37:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can do some math and adjust camera.fov (and direction/target/alpha/beta).\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.activeCamera.fov _eq_ 2.5_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI tried to see the bounding box to be able to programatically calculate the FOV_co_ but maybe at least that camera property will help you get one step further.  Once you have a bounding box_co_ you can do some math to have that all in the camera frustum.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"freetoplay","Date":"2018-08-26T00:24:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDo you know where I can find the math required to have the mesh to be within the camera frustum? The thing is I want to display different models_co_ without the need to manually position the camera for each one of them. Not sure if that is possible.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-08-26T01:02:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is how you fit a plane exactly in the frustum - it_t_s a playground from Jerome.  That_t_s the math for a plane._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#UJWGY4%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#UJWGY4#1_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tWhat I_t_ve done is that once you get your bounding box then you can work backwards.  I have done moving the camera backwards_co_ so everything was in the frustum.  Here_t_s a PG that I did that moves the camera (based on _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/31367-solved-determine-camera-distance-to-make-mesh-fit/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/31367-solved-determine-camera-distance-to-make-mesh-fit/_lt_/a_gt_ ) _lt_span_gt__dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#P6JAWE%2311_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#P6JAWE#11_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother option is to do isCompletelyInFrustum() - using mesh or camera_co_ but again_co_ you will need a bounding box... here is a PG that I made as well that explores that way.  I think you could do scaling and keep the positions of both the same._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#050P3M_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#050P3M_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was going to make you a PG_co_ but I don_t_t know how to get the bounding box from your mesh without calculating it from position vectors manually.  I think it might be a mesh._children[0] on the duck.  There are some posts how to get the bounding box on groups of imported meshes - I think you are going to need that first.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ as you can see - once you know how big the mesh is there are various ways to accomplish what you are after.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"freetoplay","Date":"2018-08-26T03:38:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis seems to have worked perfectly_co_ thank you so much!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]