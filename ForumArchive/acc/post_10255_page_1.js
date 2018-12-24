[{"Owner":"darcome","Date":"2014-11-05T22:57:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello everyone!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As you can see here_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//ludem.net/babylon/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//ludem.net/babylon/index.html_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_there_t_s a little demo with all the features I need right now from BabylonJS..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For example_co_ you can click on an element in the 3d scene or in the table on the right_co_ and it becomes selected_co_ both in 3d and in the table..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My question is... how much can i _qt_zoom_qt_ to the selected mesh and keep it into view? I mean_co_ I want very vertice of the mesh visible..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you in advance!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_P.S_dd_ If you have some tips about my code_co_ don_t_t hesitate to tell me! (Everything is in the index.html code) or general comments!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-11-06T00:24:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Tadammmm! I_t_ve just published just for you a new function mesh.isCompletelyInFrustum(). So you can zoom as long as this function returns true_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"darcome","Date":"2014-11-06T08:38:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m sorry for the stupid question... but where i can find it? In the 2.0 alpha?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-11-06T12:41:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ alpha 2.0_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"darcome","Date":"2014-11-06T13:19:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you! I_t_ll try it asap!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"darcome","Date":"2014-11-06T22:26:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello Deltakosh_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a question about the function you created..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1) Where do I have to use it?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_From what I understand_co_ I should use it in the scene_lt_span_gt_._lt_/span_gt__lt_span_gt_registerBeforeRender_lt_/span_gt_ and if the function returns false_co_ i call the .stop () function on the animatable returned by the scene.beginAnimation..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But doing so_co_ I_t_d have_co_ for every frame_co_ an if that evaluates the mesh_co_ even if there is no mesh to evalutate because I am not animating anything..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I mean_co_ something like this_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if (mesh !_eq_ null)      if (mesh.isCompletelyInFrustum () _eq__eq_ false)           animatable.stop ()_sm__lt_/pre_gt__lt_p_gt_Do you think would be possible to add a callback in the Animation like .onTick () that if returns false_co_ stops the animation?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Or there are other ways?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2) Can I pass an array of meshes to the function_co_ or only one?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks in advance!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-11-07T00:24:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_1/ onTick would do exactly the same as checking during onBeforeRender so what you are doing is great_lt_/p_gt__lt_p_gt_2/ You have to enumerate with a _qt_for_qt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]