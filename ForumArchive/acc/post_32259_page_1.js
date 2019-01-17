[{"Owner":"SvenFrankson","Date":"2017-08-09T10:50:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d like to do the following _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_- Using a ReflectionProbe\n\n- Assign renderList and position\n\n- Render the cubeTexture\n\n- Assign cubeTexture to a given mesh\n\n- Dispose reflectionProbe / Use it for something else._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tTo do so_co_ I_t_d like to clone the renderered cubeTexture_co_ like here _dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#NPSPXA%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#NPSPXA#1_lt_/a_gt_ (see lines 37 - 38)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut cloning a cubeTexture gives odd results. _lt_strong_gt_Is there already a method to clone cubeTexture ?_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_(actually_co_ here it_t_s a cubic RenderTargetTexture_co_ maybe that_t_s where my problem is ?)_lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks a lot for your inputs ! Have a nice day.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SvenFrankson","Date":"2017-08-09T15:26:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSome other ideas _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlternatively_co_ I think I could find a workaround by creating a Cubic Dynamic Texture_co_ is it theoretically possible ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOr by creating a CubeTexture without provide file urls (like_co_ from base64 data_co_ or some pixel buffer)_co_ but I can_t_t find methods to do that either...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-08-09T18:26:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello you are cloning a RenderTargetTexture_co_ which will create a rendertargettexture _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ you are not cloning the content. The new RTT will then get its content from the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can still think about creating an empty CubeTexture_dd_ cubeTexture _eq_ new BABYLON.CubeTexture(null_co_scene) and then connect it to the internal webgl texture used by the rendertargettexture but this will not work as the next time the RTT will be updated your cube texture will be as well\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo my question is_dd_ why do you need this? why not creating multiple RTT? As long as you set the refreshRate to 0 it will only be updated once. Memory wise_co_ you can call RTT.disposeFramebufferObjects() and thus the memory footprint will be the same as a regular cubetexture\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SvenFrankson","Date":"2017-08-10T07:36:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe use case is an room visualisation app. There is many static meshes_co_ and I want to assign them a cubic environmentTexture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs it_t_s nearly all static_co_ the rendering has to be done only once_co_ so I_t_d like to manage it to split it accross frames (generate the 30 environmentTexture accross 30 different frames). Using one probe moving from mesh to mesh seemed like easy to implement on my side_co_ but it_t_s obviously not the way to go with renderTargetTexture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll create multiple probes and sync them from a Manager object_co_ it should be easier.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]