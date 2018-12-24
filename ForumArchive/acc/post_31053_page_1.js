[{"Owner":"TomaszFurca","Date":"2017-06-13T20:05:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tToday i was start develop GUI of my game. When i started reading about new babylon GUI i decided to change old CastorGUI. So to start work with babylon GUI i need to init babylon 3.0 instead 2.5. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tGUI works fine_co_ but my scene is rendered in half_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//postimg.org/image/ng3imoicz/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//postimg.org/image/ng3imoicz/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twhen i change position of my orho camerai can see that_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//postimg.org/image/f2vgtin7f/9ddf0387/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//postimg.org/image/f2vgtin7f/9ddf0387/_lt_/a_gt_ - not visible shadows_co_ and half of last tree\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is scene from BJS 2.5_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//postimg.org/image/t3f1nj21x/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//postimg.org/image/t3f1nj21x/_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gijs","Date":"2017-06-13T20:35:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDid you make it with TypeScript? Because when I upgraded_co_ the code checker showed me which parts I had to rewrite. I also had some hacks in place that worked for 2.5 only_co_ so that_t_s also something you could check. Finally_co_ the 3.0 version is being updated all the time_co_ so you could check if an earlier version does work_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/commits/master/dist/preview%20release/babylon.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/commits/master/dist/preview release/babylon.js_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-13T23:38:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCan you reproduce in the PG? It_t_s kind of tough to help with no code _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TomaszFurca","Date":"2017-06-14T06:16:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCannot reproduce it on PG_co_ because after save i can see error _qt_Unable to save your code. It may be too long._qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo open my PG code from guthub _lt_a href_eq__qt_https_dd_//raw.githubusercontent.com/furcatomasz/slavs/master/PG01.txt_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//raw.githubusercontent.com/furcatomasz/slavs/master/PG01.txt_lt_/a_gt_ and put it on PG _dd_).\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-14T17:03:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDo you think that an human can read that? _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe whole idea of a repro case is to reduce the problem to a few lines of code _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TomaszFurca","Date":"2017-06-14T18:28:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes _dd_D. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry for that_co_ human code is in the end of the file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTextures are not loaded_co_ because is no need to recreate this problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre style_eq__qt_color_dd_#000000_sm__qt__gt_\nmap01 variable is scene from blender_co_ exported by tower of babel. On babylon exporter scene is displayed not correct too._lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TomaszFurca","Date":"2017-06-15T09:22:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOks - Today i preapre PG _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#S2RF02_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#S2RF02_lt_/a_gt__co_ i was loaded JS fles from my server and now I can show only code to fix _dd_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn first open you can see error_co_ but click run and now everything will be ok.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo problem is with shadows - its are not generated correctly. And next problem in babylon 3.0 is ortho camera.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-15T15:52:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI get a _qt_map01 is not defined_qt_ error.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TomaszFurca","Date":"2017-06-15T15:57:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tClick RUN 2x_co_ then you will see my scene _dd_).\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-15T16:00:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNope _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tEven clicking run 10 times does not work. You should execute your code on script.onload _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TomaszFurca","Date":"2017-06-15T16:11:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWith error but work on firefox and chrome _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#S2RF02%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#S2RF02#2_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-06-15T17:07:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_178179_qt_ data-ipsquote-contentid_eq__qt_31053_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1497384352_qt_ data-ipsquote-userid_eq__qt_23452_qt_ data-ipsquote-username_eq__qt_TomaszFurca_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 13/06/2017 at 10_dd_05 PM_co_ TomaszFurca said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWhen i started reading about new babylon GUI i decided to change old CastorGUI\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tLOL_co_ It is not that old_co_ I rewrote it with ECEMAScript 6 _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ (The _lt_a href_eq__qt_https_dd_//bitbucket.org/JSbabylon/_qt_ rel_eq__qt_external nofollow_qt__gt_deposit_lt_/a_gt_ has moved) But you have reasons BABYLON.GUI is awesome rather than a layer on top of the canvas as does CastorGUI.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-06-16T15:35:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is all I get_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_13412_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_06/Capture.JPG.ef1dfccc324041dfd54f752c36ebfdff.JPG_qt_ alt_eq__qt_Capture.JPG.ef1dfccc324041dfd54f752c36ebfdff.JPG_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TomaszFurca","Date":"2017-06-16T17:15:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMaybe using JQuery will work on your computer _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#S2RF02%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#S2RF02#4_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borislav","Date":"2017-06-17T10:31:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_178320_qt_ data-ipsquote-contentid_eq__qt_31053_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1497459830_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 14.06.2017 at 9_dd_03 PM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tDo you think that an human can read that? _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThe whole idea of a repro case is to reduce the problem to a few lines of code _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\ta human*\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is not french _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Borislav","Date":"2017-06-17T10:43:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt_@TomaszFurca_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_It must be the thing that makes objects and meshes disappear from the distance._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe trees and rocks are getting erased together with the ground_sm_ hence_co_ this is something is making things get erased from a certain distance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDid you have a line in which it states that the game shouldn_t_t render anything farther or nearer than a certain distance?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf yes_co_ that_t_s the problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TomaszFurca","Date":"2017-06-18T19:02:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhen I disable orthocamera_co_ then everything is displayed correct. Maybe this is some problem with orthocamera.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is my all code of camera definition (I do not have any distance options_co_ yet)_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_        var camera _eq_ new BABYLON.FreeCamera(_qt_camera1_qt__co_ new BABYLON.Vector3(0_co_ 0_co_ 0)_co_ scene)_sm_\n        camera.mode _eq_ BABYLON.Camera.ORTHOGRAPHIC_CAMERA_sm_\n        camera.orthoTop _eq_ 18_sm_\n        camera.orthoBottom _eq_ 0_sm_\n        camera.orthoLeft _eq_ -15_sm_\n        camera.orthoRight _eq_ 15_sm_\n        var ratio _eq_ window.innerWidth / window.innerHeight _sm_\n        var zoom _eq_ camera.orthoTop_sm_\n        var newWidth _eq_ zoom * ratio_sm_\n        camera.orthoLeft _eq_ -Math.abs(newWidth)_sm_\n        camera.orthoRight _eq_ newWidth_sm_\n        camera.orthoBottom _eq_ -Math.abs(zoom/4)_sm_\n        camera.rotation _eq_ new BABYLON.Vector3(0.4_co_ -0.98_co_ 0)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"TomaszFurca","Date":"2017-06-19T11:57:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOkey! - Problem was camera minZ - it works _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#S2RF02%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#S2RF02#5_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]