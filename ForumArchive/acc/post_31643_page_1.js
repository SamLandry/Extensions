[{"Owner":"dhiru","Date":"2017-07-14T15:45:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I have been trying to draw images (plus importing assets from my blender software) but what I want to do is create a _qt_static_qt_ image of my scene to show on the browser so that it can run on more dumb terminals without requiring a lot of GPU power. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know if I am posing the question right but could you give me some pointers to how this can be done.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdhiru\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-07-14T17:33:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou can either render your scene just once with scene.render() (And thus do not call engine.runRenderLoop).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you want a screenshot of a scene to save it for later_co_ we have BABYLON.Tools.CreateScreenShot_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1DWSMW%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1DWSMW#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dhiru","Date":"2017-07-19T00:37:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMany thanks for this! -- just a quick stupid question_sm_ when I do not use the renderloop() is that in anyway _qt_not_qt_ so stressful on the GPU_sm_ even though my scene is very complex (I guess it should right? or does the frames per second still work its way on the variables between the CPU and the GPU).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI realize my question might not be very intelligent nevertheless doesn_t_t hurt to ask\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-07-19T01:34:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tNot calling the renderloop or just scene.render() will leave your GPU untouched _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ (If I_t_ve got your question correctly)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dhiru","Date":"2017-07-22T18:24:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tActually the reason I am getting freaked out about the GPU is because I am planning to make a product that has 3 independent canvas_t_s/engines_co_  showing three different angles of a Car. For the center one I plan to allow scene.render() only when the user is on a desktop. For low end devices_co_ I would actually prefer to show a screen print (as light as an png/bmp)_sm_ that way I eat up less battery and processing. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am not sure if I am over thinking all of this but I am not sure how I can generate an image from my Babylon.js page (or windows universal app) for low end devices.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll that said_co_ I want to thank you/Babylon.js for even giving me any hope of doing any of this  -- I think it is one of the best frameworks I have come across_sm_ many thanks for your support.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-07-24T17:18:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo worry_co_ your concern is real\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut to be fair_co_ if you call scene.render only once you don_t_t even need to provide a screenshot. The scene.render() will run just once\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]