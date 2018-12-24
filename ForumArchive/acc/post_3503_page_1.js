[{"Owner":"Dad72","Date":"2014-02-01T11:34:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_\n _lt_/p_gt__lt_p_gt_\nThe target update no longer works with the rotating camera. It worked before. The code that I have given you in the link worked and now when I click on ALT_co_ all the scene disappears._lt_/p_gt__lt_p_gt_\nI used a camera free to move on the ground freely and then a rotating camera with the ALT key to observe an object._lt_/p_gt__lt_p_gt_\nTry this example. If you click ALT_co_ this should go to a rotating camera which turn around the Box_co_ but the screen becomes purple. _lt_/p_gt__lt_p_gt_\n_lt_a href_eq__qt_http_dd_//www.actifgames.com/babylon/changeCamera/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Test change camera with target update_lt_/a_gt__lt_/p_gt__lt_p_gt_\nThank you Deltakosh_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-02-01T15:34:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello I_t_m sorry but the bug is not on my side _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This line _dd_ _lt_/p_gt__lt_p_gt_camera[1].radius _eq_ valeurBoiteMax + 20_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_uses a valeurBoiteMax which is undefined _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-02-01T17:46:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am confused. Yesterday it work not. Today I tested the example and it work. It may be my browser?_lt_br_gt__lt_br_gt_However_co_ on my project in development_co_ the bug was still present and i have resolved with parseFloat() (_lt_em_gt_It is sometimes forgotten_lt_/em_gt_)_lt_br_gt_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_cameraArcRotative[0].target _eq_ new BABYLON.Vector3(parseFloat(_mesh.position.x)_co_ parseFloat(_mesh.position.y + 3)_co_ parseFloat(_mesh.position.z))_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Boz","Date":"2014-05-04T19:54:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey there !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a question if you managed to get it work._lt_/p_gt__lt_p_gt_I want_co_ like dad72_co_ define a target for my arcCamera as a mesh position. So I create my mesh and apply the target like this _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.SceneLoader.ImportMesh(_qt_him_qt__co_ _qt_models/Dude/_qt__co_ _qt_Dude.babylon_qt__co_ scene_co_ function (newMeshes_co_ particleSystems_co_ skeletons) {        // Get mesh and initialize it\tdude _eq_ newMeshes[0]_sm_\tdude.position _eq_ new BABYLON.Vector3(0_co_ 0_co_ 0)_sm_\t// Adjust camera relative to mesh\tarcCamera.target _eq_ dude.position_sm_})_sm__lt_/pre_gt__lt_p_gt_All is ok_co_ the camera aims the mesh._lt_/p_gt__lt_p_gt_I move my mesh with keyboard inputs and the camera follows perfectly the mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I just want to put my camera a little higher_co_ to have a better overview._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So I replace_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_arcCamera.target _eq_ dude.position_sm__lt_/pre_gt__lt_p_gt_by _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_arcCamera.target _eq_ new BABYLON.Vector3(dude.position.x_co_ dude.position.y+3_co_ dude.position.z)_sm__lt_/pre_gt__lt_p_gt_When I initialized the scene_co_ great_co_ this is how I wanted !_lt_/p_gt__lt_p_gt_But when I move my mesh_co_ the camera does not follow _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Neither with the parseFloat suggestion by dad72._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know if when I define the target as mesh.position_co_ this is a pointer on a Vector3 ?_lt_/p_gt__lt_p_gt_And with the 2nd solution_co_ the Vector is simply copied when created ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you have any suggestions to help me putting my camera a little higher_co_ it could be great _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_Thanks !_lt_/p_gt__lt_p_gt_Pouet--_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT _dd_ It works only if I define the target as the 2nd way in a loop_co_ so the computation is made every time._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-05T15:45:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This is logical. The camera uses its target as an object. I mean_co_ if you give the position of the mesh it will use mesh.position each time. If you use _qt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_new_lt_/span_gt__lt_span_gt_ BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm__qt__gt_Vector3_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span_gt_dude_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_position_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_x_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ dude_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_position_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_y_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_+_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_102_co_102)_sm__qt__gt_3_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ dude_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_position_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span_gt_z_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)_sm__qt_ then you create a new object no longer related to the mesh.position (It is just a copy ten)_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]