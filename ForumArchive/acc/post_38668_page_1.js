[{"Owner":"JohnM","Date":"2018-07-06T08:04:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am trying to use a dds file as a cube texture. it works fine if i link to it in the usual way_co_ but i am trying to instead load a file into my html5 page of which would then be turned into a cube texture as so - \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_new BABYLON.CubeTexture(reader.result_co_ scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\ti have got this working with a normal texture as so - \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_new BABYLON.Texture(reader.result_co_ scene)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tso im wondering_co_ is it the base64 encoding that is messing up the dds file? if so does anyone know a better way of doing this? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe dds file im using is from the _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Playground/textures/environment.dds_qt_ rel_eq__qt_external nofollow_qt__gt_playground textures_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tmany thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-06T15:22:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you try something like that_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code class_eq__qt_language-javascript_qt__gt_new BABYLON.CubeTexture(reader.result_co_ scene_co_ null_co_ false_co_ null_co_ null_co_ null_co_ BABYLON.Engine.TEXTUREFORMAT_RGBA_co_ false_co_ _qt_.dds_qt_)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis will force the system to use the DDS code path\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnM","Date":"2018-07-09T07:14:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thmm this still doesnt seem to work for me_co_ reflection texture still appears as undefined.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#S0N2H2_qt_ rel_eq__qt_external nofollow_qt__gt_here is a PG of what i am &amp_sm_nbsp_sm_trying to do on a very basic level. _lt_/a_gt_although there seems to be an error that I am not getting on my local project so not sure if this will actually work with PG\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\thope that helps \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-07-09T07:43:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29456-johnm/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29456_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29456-johnm/_qt_ rel_eq__qt__qt__gt_@JohnM_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would use the PVRTexTool to help figure out the format of your DDS file. Also_co_ read the following post_co_ as it_t_s full of info_dd_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed8613973801_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/27362-dds-texture/?do_eq_embed_qt_ style_eq__qt_height_dd_341px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnM","Date":"2018-07-09T08:16:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthanks for the link it was interesting indeed however - \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI would assume seeing as the .dds file i am using is included in many of the babylon examples that its the best .dds format i could get with regards to compatability? _lt_span_gt__lt_span class_eq__qt_ipsEmoji_qt__gt_😛_lt_/span_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_also the .dds file does work when used _qt_normally_qt_ but when i want to insert it dynamically_co_ this is where my issue is. so i would then assume my problem is how I am passing the data from reader to babylon as i dont have much experience with reader_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-09T15:39:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe CubeTexture expects that you send data as base64 which seems to not be the case here\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnM","Date":"2018-07-10T06:00:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tseems to be base64 to me? \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/image.png.a17083b788b31c1be11340796bbf68fc.png_qt_ data-fileid_eq__qt_19098_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19098_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_07/image.thumb.png.e31413f00ce36b1b964190000f1eaa05.png_qt_ alt_eq__qt_image.thumb.png.e31413f00ce36b1b964190000f1eaa05.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-07-10T08:02:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou have the right Base64.  I_t_ve created a PG that works for me_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/index.html#JPMIF9_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/index.html#JPMIF9_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnM","Date":"2018-07-10T08:34:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthats perfect_co_ thank you! fixed what ever my issue was. dont really understand what i was doing wrong_co_ only thing i see different is that you didnt use onload or onloadend? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]