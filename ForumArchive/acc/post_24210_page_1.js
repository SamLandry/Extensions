[{"Owner":"Shawn Dao","Date":"2016-08-02T03:35:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m a beginner with babylonjs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to make a demo to see how it_t_s work. Everything work fine with  _qt_Bane_co_ Batman_co_ Penguin_qt_ sample\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/2016-08-02_10-26-59.png.1847484dada7a6955b987a987cdca6a3.png_qt_ data-fileid_eq__qt_8842_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_8842_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/2016-08-02_10-26-59.thumb.png.4dd8877f8641cf61db386dfdd5aa6436.png_qt_ alt_eq__qt_2016-08-02_10-26-59.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut when i try to load the model downloaded from sketchfab.com it just not working properly. Here what i_t_ve got.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/2016-08-02_10-28-43.png.bfce328e8c9a77b94688adfc7e2fb868.png_qt_ data-fileid_eq__qt_8843_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_8843_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/2016-08-02_10-28-43.thumb.png.e014ef076df3ff0737a9ffca9295d5fd.png_qt_ alt_eq__qt_2016-08-02_10-28-43.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_What_t_s happening? What am i missing?_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere the entire code_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// The first step is to get the reference of the canvas element from our HTML document_dd_\nvar canvas _eq_ document.getElementById(_t_renderCanvas_t_)_sm_\n\n// Then_co_ load the Babylon 3D engine_dd_\nvar engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n\n// After that_co_ we create our scene. In order to keep your program compatible with the Babylon.js Playground_co_ we recommend that you insert a _qt_createScene_qt_ function at this point. Beside generating a Babylon Scene Object_co_ createScene() is where you will add your basic scene requirements_dd_ a camera_co_ a light_co_ and two basic meshes (a sphere and a ground plane).\nvar createScene _eq_ function() {\n\n    // This creates a basic Babylon Scene object (non-mesh)\n    var scene _eq_ new BABYLON.Scene(engine)_sm_\n\n    // Light\n    new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_\n\n    // Uncaught Error_dd_ No camera defined\n    var cam _eq_ new BABYLON.ArcRotateCamera(_qt_ArcRotateCamera_qt__co_ 0_co_ 0_co_ 5_co_ new BABYLON.Vector3(0_co_ 3_co_ 0)_co_ scene)_sm_\n\n    // Panning_dd_ Ctrl + Left click _eq_&gt_sm_ Right click\n    // AttachControl Params_dd_ canvas_co_ noPreventDefault_co_ useCtrlForPanning\n    cam.attachControl(canvas_co_ true_co_ false)_sm_\n\n    var loader _eq_ new BABYLON.AssetsManager(scene)_sm_\n    var obj _eq_ loader.addMeshTask(_qt_azir_qt__co_ _qt__qt__co_ _qt_sample/azir/_qt__co_ _qt_b_azir.obj_qt_)_sm_\n\n    loader.onFinish _eq_ function() {\n        engine.runRenderLoop(function() {\n            scene.render()_sm_\n        })_sm_\n    }_sm_\n\n    loader.load()_sm_\n\n    return scene_sm_\n}_sm_\n\n// Now that our createScene() function is ready_co_ we need to call it_dd_\nvar scene _eq_ createScene()_sm_\n\n// The next three javascript lines are very important_co_ as they register a render loop to repeatedly render the scene on the canvas_dd_\nengine.runRenderLoop(function() {\n    scene.render()_sm_\n})_sm_\n\n// Lastly_co_ you should implement a little canvas/window resize event handler_co_ like this_dd_\nwindow.addEventListener(_t_resize_t__co_ function() {\n    engine.resize()_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tExpectation_dd_ _lt_a href_eq__qt_https_dd_//sketchfab.com/models/a3aa2827a6764f90aede27b9c0d5a630_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//sketchfab.com/models/a3aa2827a6764f90aede27b9c0d5a630_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_8846_qt__gt_azir.zip_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-08-02T14:53:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tA few things to check_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) is the .mtl file included in the object\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) are the textures loading correctly\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3) is the light strong enough? (dunno_co_ the entire scene looks a bit dark_co_ also with the other models).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4) have you loaded the object in a different application (like meshlab for example)?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-08-02T18:13:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ _lt_br /_gt_\n\tit just don_t_t working out of the box_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/24207-how-to-apply-show-diffuse-texture-with-pbr/?do_eq_embed_qt__gt__lt_/iframe_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/24073-load-texture-form-obj-file-err/?do_eq_embed_qt__gt__lt_/iframe_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#RBMUC%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#RBMUC#2_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-08-02T21:32:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSeems like it is working in your demo_co_ what do you mean by _qt_not working out of the box_qt_?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-08-02T21:41:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI don_t_t know exactly_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/24073-load-texture-form-obj-file-err/_qt_ rel_eq__qt__qt_ style_eq__qt_color_dd_rgb(60_co_105_co_148)_sm_text-decoration_dd_none_sm_background-color_dd_transparent_sm__qt__gt_load texture form Obj file err_lt_/a_gt_ i really don_t_t know_co_ i just see that some floating point numbers are changed._lt_br /_gt__lt_br /_gt_\n\tin How to apply show diffuse texture with PBR? the material is not overloading to a scene._lt_br /_gt__lt_br /_gt_\n\there _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/24210-textures-not-loaded/_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/24210-textures-not-loaded/_lt_/a_gt__lt_br /_gt_\n\tthe mirror material of the obj has refuses babylonjs from load._lt_br /_gt__lt_br /_gt_\n\ti think something with babylonjs the reflectionTexture texture. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-08-02T21:52:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry_co_ I can_t_t follow _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tYou pasted before a demo of the loader_co_ where the object is perfectly shown. Did you modify the object in any way?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tObj doesn_t_t support PBR_co_ it only supports the standard material. if you want to use PBR you will have to create it by yourself and attach it to the right mesh.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-08-02T23:13:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//translate.google.de/?espv_eq_2&amp_sm_bav_eq_on.2_co_or.r_cp.&amp_sm_biw_eq_1364&amp_sm_bih_eq_668&amp_sm_dpr_eq_1&amp_sm_ion_eq_1&amp_sm_um_eq_1&amp_sm_ie_eq_UTF-8&amp_sm_hl_eq_en&amp_sm_client_eq_tw-ob#auto/fr/yes%20i%20modify%20them%20in%20one%20or%20in%20another%20way%2C%20obj%20works%20not%20out%20of%20the%20box.%20i%20will%20do%20some%20test%20later%20(maybe)_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//translate.google.de/?espv_eq_2&amp_sm_bav_eq_on.2_co_or.r_cp.&amp_sm_biw_eq_1364&amp_sm_bih_eq_668&amp_sm_dpr_eq_1&amp_sm_ion_eq_1&amp_sm_um_eq_1&amp_sm_ie_eq_UTF-8&amp_sm_hl_eq_en&amp_sm_client_eq_tw-ob#auto/fr/yes i modify them in one or in another way%2C obj works not out of the box. i will do some test later (maybe)_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-08-02T23:26:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthe workaround for this file\n_lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/objbug.gif.fda2ea81978b1e2435ac57bcc0999d5b.gif_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_8852_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/objbug.thumb.gif.b1b37df42956d19a631435c9e2d69e58.gif_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_objbug.gif_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Shawn Dao","Date":"2016-08-03T01:56:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_138548_qt_ data-ipsquote-contentid_eq__qt_24210_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1470180403_qt_ data-ipsquote-userid_eq__qt_21965_qt_ data-ipsquote-username_eq__qt_Nabroski_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t2 hours ago_co_ Nabroski said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tthe workaround for this file\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/objbug.gif.fda2ea81978b1e2435ac57bcc0999d5b.gif_qt_ data-fileid_eq__qt_8852_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_objbug.gif_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_8852_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/objbug.thumb.gif.b1b37df42956d19a631435c9e2d69e58.gif_qt_ /_gt__lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks_co_ let me try\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Shawn Dao","Date":"2016-08-03T02:00:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_138459_qt_ data-ipsquote-contentid_eq__qt_24210_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1470149638_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tA few things to check_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t1) is the .mtl file included in the object\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t2) are the textures loading correctly\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t3) is the light strong enough? (dunno_co_ the entire scene looks a bit dark_co_ also with the other models).\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t4) have you loaded the object in a different application (like meshlab for example)?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t1. I saw this line _lt_strong_gt_mtllib b_azir.mtl_lt_/strong_gt_ in the object\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. How can i check it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. I dont think it_t_s related to the light because the texture quite clearly\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4. Not yet. But I_t_m going to use babylonjs for my project so need to workaround to fix it. and i think _lt_strong_gt_Nabroski _lt_/strong_gt_had it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Shawn Dao","Date":"2016-08-03T02:30:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_ Help me with this_co_ I_t_m using Blender to edit the object but it_t_s not looks like you did\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/2016-08-03_9-29-42.png.8ab5dfe82a999b603efba5e7ec15f1fa.png_qt_ data-fileid_eq__qt_8854_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_8854_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/2016-08-03_9-29-42.thumb.png.2d711ec30fc0cc26882f6352ffa846aa.png_qt_ alt_eq__qt_2016-08-03_9-29-42.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-08-03T02:32:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthey changes something inside blender_co_ and im too lazy to read the doc_lt_br /_gt__lt_br /_gt_\n\tthis one is working out of the box with obj_lt_br /_gt__lt_a href_eq__qt_https_dd_//download.blender.org/release/Blender2.62/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//download.blender.org/release/Blender2.62/_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Shawn Dao","Date":"2016-08-03T02:34:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDoes this workaround fix the babylonjs issue _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_ ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-08-03T02:36:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/23020-shawn-dao/?do_eq_hovercard_qt_ data-mentionid_eq__qt_23020_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/23020-shawn-dao/_qt_ rel_eq__qt__qt__gt_@Shawn Dao_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tthe last time i tested it it works_co_ report if you run into troubles_co_ ask questions etc._lt_br /_gt_\n\ti also changed the texture from .tga to .png_co_ but try the simplest solution first._lt_br /_gt__lt_br /_gt_\n\tGood Luck\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Shawn Dao","Date":"2016-08-03T04:53:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt_ I can see the textures on the Blender now. What_t_s next?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have tried to export the model and load it from the babylonjs. Same result.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBtw_dd_ What is simplest solution you mean?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2016-08-03T05:49:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou have to delate the material and create a new material inside blender and then export it to obj_co_ its only two clicks._lt_br /_gt__lt_br /_gt_\n\tyou can do it also with babylonjs_co_ also very easy_lt_br /_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#RBMUC%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#RBMUC#3_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tGood Luck_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_8858_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/objwork.gif.b548f80a74879bd4a337e223a1ec682a.gif_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_objwork.gif_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_8858_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_08/objwork.thumb.gif.3a91afd4512341094e8c92db1e9bbb2e.gif_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Shawn Dao","Date":"2016-08-03T08:15:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou_t_re my saver _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/?do_eq_hovercard_qt_ data-mentionid_eq__qt_21965_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/21965-nabroski/_qt_ rel_eq__qt__qt__gt_@Nabroski_lt_/a_gt__co_ thank you very much for the babylonjs sample. \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]