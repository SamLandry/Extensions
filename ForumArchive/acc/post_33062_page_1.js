[{"Owner":"boston160","Date":"2017-09-23T11:31:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve got a problem with loading scene with .babylon extension. I making project in .NET Core with BabylonJS addon and I got a problem with this script_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_      // Get the canvas element from our HTML below\n      var canvas _eq_ document.querySelector(_qt_#renderCanvas_qt_)_sm_\n      // Load the BABYLON 3D engine\n      var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n      // -------------------------------------------------------------\n      \n      engine.enableOfflineSupport _eq_ false_sm_\n\n      var scene _eq_ new BABYLON.Scene(engine)_sm_\n\n      BABYLON.SceneLoader.Load(_qt_./js/_qt__co_ _qt_babilon_blender.babylon_qt__co_ engine_co_ function(newScene){\n          var scene _eq_ newScene_sm_\n\n          scene.executeWhenReady(function(){\n              scene.activeCamera.attachControl(canvas)_sm_\n\n              engine.runRenderLoop(function(){\n                  scene.render()_sm_\n              })_sm_\n          })_sm_\n      })_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tPage is build and start loading scene_co_ but this is over. Neverending loading with Babylon mark._lt_br /_gt_\n\tCould someone help me and advice what should I do to make a load scene properly?_lt_br /_gt_\n\tThanks for help _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/004.png.f57b8c94c1a95e598bc1f0d6cbc9c3b2.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_14957_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_09/004.thumb.png.0a821671bdd6f09d7257aedc4b6feb2f.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_004.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-09-23T14:55:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/28612-boston160/?do_eq_hovercard_qt_ data-mentionid_eq__qt_28612_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/28612-boston160/_qt_ rel_eq__qt__qt__gt_@boston160_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWelcome to the forum!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any error in the console? anything we can work with? Can we see the uploaded project live somewhere? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYour code seems ok at first look_co_ but there might be a different problem we cannot debug with code only.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-09-23T16:19:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTry this _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// Get the canvas element from our HTML below\n      var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n      // Load the BABYLON 3D engine\n      var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n      // -------------------------------------------------------------\n      \n      engine.enableOfflineSupport _eq_ false_sm_\n\n      var scene _eq_ new BABYLON.Scene(engine)_sm_\n\n      BABYLON.SceneLoader.Append(_qt_js/_qt__co_ _qt_babilon_blender.babylon_qt__co_ scene_co_ function(newScene){\n          scene _eq_ newScene_sm_\n\n          scene.executeWhenReady(function(){\n              scene.activeCamera.attachControl(canvas)_sm_\n\n              engine.runRenderLoop(function(){\n                  scene.render()_sm_\n              })_sm_\n          })_sm_\n      })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-23T16:21:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tDid you make sure to enable .babylon mime type?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-09-23T17:15:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCheck the network logs for 404s.  For your .NET project make sure your wwwroot has the files - you may need a postbuild event to copy.  Like DK said - you can enable specific mime types in your config_co_ but try this to start and then lock it down more after (in startup.cs)_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_app.UseStaticFiles(\n    new StaticFileOptions\n    {   /* unknown mime types (ie_dd_ .fx) files will not be served_co_ otherwise! */\n        ServeUnknownFileTypes _eq_ true\n    }\n)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tedit_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tServing unknown file types is not recommended security-wise_co_ so once you get it working switch over to FileExtensionContentTypeProvider_lt_br /_gt__lt_a href_eq__qt_https_dd_//docs.microsoft.com/en-us/aspnet/core/fundamentals/static-files_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//docs.microsoft.com/en-us/aspnet/core/fundamentals/static-files_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"boston160","Date":"2017-09-23T20:55:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks guys. Now it_t_s work well. _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_ I work with Visual Code and terminal show nothing. On Visual Studio got 404 error. When I added change in Startup.cs_co_ thats it_t_s load well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"boston160","Date":"2017-10-04T13:14:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys. I have new problem with SceneLoader. I have in Startup.cs_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_            app.UseStaticFiles(new StaticFileOptions\n            {\n                ServeUnknownFileTypes _eq_ true\n            })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd _lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_scene is loading correctly in Index.cshtml. But how do i throw a new scene in a new view (not Index.cshtml)_co_ this new scene_lt_/span_gt__lt_/span_gt_ does not load and _lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_I get an error from the console_lt_/span_gt__lt_/span_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhile I adding a new scene in Index.cshtml_co_ it is loaded correctly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCould someone help me and advice what should I do to make a load scene properly?_lt_br /_gt_\n\tThanks for help _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_o_1brjo8f1sjki1ks9u4p1e8j16ltb_qt_ src_eq__qt__qt_ alt_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/59d4deb63b77b_Zrzutekranuz2017-10-0414-53-32.png.7f98fb390303c75bd9d34df450246331.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_15101_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_10/59d4deb63b77b_Zrzutekranuz2017-10-0414-53-32.png.7f98fb390303c75bd9d34df450246331.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Zrzut ekranu z 2017-10-04 14-53-32.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-10-04T21:13:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt looks like you are using traditional NetCore MVC full page-load.  I did a BabylonJS SPA example that works with multiple canvas/scene using _qt_dotnet new_qt_ MVC (.NET core 2.0)_dd_ _lt_a href_eq__qt_https_dd_//github.com/brianzinn/dotnet-new-babylonjs-starter_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/brianzinn/dotnet-new-babylonjs-starter_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe screenshot you have provided doesn_t_t really show what the problem could be.  Show the web browser dev tools (network/console) where the issue is instead.  If there is an issue with the .babylon file then you can create a PG (playground) and lots of people available to help with reproducible errors.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"boston160","Date":"2017-10-04T23:04:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_Error processing XML_dd_ no master element found Area_dd_ http_dd_ // localhost_dd_ 3262 / Home / scenes / quiz / escape.babylon\n\nRow number_dd_ 1_co_ column 1_dd_ escape.babylon_dd_ 1_dd_ 1\n\nError_dd_ Error status_dd_ 404 - Unable to load scenes / quiz / escape.babylon babylon.js_dd_ 3_dd_ 5023\nt.LoadFile / l / e.onreadystatechange_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI get this error with the web browser dev tools.\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_div_gt_\n\t\t_lt_div_gt_\n\t\t\t_lt_pre dir_eq__qt_ltr_qt_ style_eq__qt_text-align_dd_left_sm_height_dd_108px_sm__qt__gt_\n_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt_I work on VisualCode on Debian 9. I have .NET Core 2.0 installed and the project was created in the console_dd_ dotnet new mvc._lt_/span_gt__lt_/pre_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"boston160","Date":"2017-10-05T11:05:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is my project_dd_ _lt_a href_eq__qt_https_dd_//1drv.ms/u/s!ApEWaFgXVeBEg-1R_mD2yJUGcNTPhA_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//1drv.ms/u/s!ApEWaFgXVeBEg-1R_mD2yJUGcNTPhA_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_I_t_ve just thrown a new project with 3D views_co_ because the project is large and weighs a lot._lt_/span_gt__lt_/span_gt__lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_ Can someone peek at what I_t_m doing wrong in the files_lt_/span_gt__lt_/span_gt__dd_ Index.cshtml_co_ QuizReception.cshtml_co_ recepton.js and quiz_reception.js?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_I just started with babylon.js and _lt_/span_gt__lt_/span_gt_I don_t_t know _lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_how I can add scenes in other views. The point is that as I type in the browser bar_dd_ _lt_/span_gt__lt_/span_gt__lt_a href_eq__qt_http_dd_//localhost_dd_5000/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//localhost_dd_5000/_lt_/a_gt__lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_ - works correctly but_dd_ _lt_/span_gt__lt_/span_gt__lt_a href_eq__qt_http_dd_//localhost_dd_5000/Home/QuizReception_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//localhost_dd_5000/Home/QuizReception_lt_/a_gt__lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_ - does not load scenes._lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span lang_eq__qt_en_qt_ xml_dd_lang_eq__qt_en_qt__gt__lt_span_gt_In addition_co_ I have a problem with collision and gravity. _lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-10-05T17:08:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt looks like the file does not exists (404).  I think that error message is Firefox specific if you return content-type _qt_text/xml_qt_.  The network tab in dev tools is more helpful than the console in this case.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think you need to set the .babylon file to be included as output (it_t_s a project file property BuildAction-&gt_sm_Content and CopyToOutputDirectory-&gt_sm_ Copy If Newer)._lt_br /_gt_\n\tMake sure that there is no _qt_MVC_qt_ route matching /Home/scenes/quiz/escape.babylon_co_ otherwise I believe that will activate before the static file handler.  In other words_co_ if you try this .babylon file in the same directory as the other working scene then it will likely work.  MVC routes are handled in the order they are added.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-10-05T17:32:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tJust looked at your .zip file.  If you want to post your project then I would suggest just static html or setup a public facing website.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]