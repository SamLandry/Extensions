[{"Owner":"sayan751","Date":"2015-09-17T10:28:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_br_gt_ _lt_br_gt_I am really new to BabylonJS. I started with reading the basic tutorials shuch as _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/00-Babylon.js-Primer_qt_ rel_eq__qt_external nofollow_qt__gt_this _lt_/a_gt_and _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/#getting-started_qt_ rel_eq__qt_external nofollow_qt__gt_this_lt_/a_gt__co_ and also visitng the suggested demos in playground._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have one question regarding cloning line meshses. I tried to clone a cube mesh and rotating it_co_ and it is working (_lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/#1SFSNG_qt_ rel_eq__qt_external nofollow_qt__gt_Playgorund link_lt_/a_gt_)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However the same stategy is not working with lines mesh and I wanted to know what is the right way of doing it. I have also created a demo for what I have done so far in _lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/#1BXRGN_qt_ rel_eq__qt_external nofollow_qt__gt_Playground_lt_/a_gt_. The cloned line mesh is not visible and can only be made visible partially when rendering mode _qt_Wireframe_qt_ is selected_co_ as can be seen below._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It will be great_co_ if you please help me understading this better._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is my createScene() method so far_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var createScene _eq_ function () {    //Here goes the scene_co_ light_co_ and camera (sipped for brevity)    // Creation of a triangular lines mesh    var myLines _eq_ BABYLON.Mesh.CreateLines(_qt_myLines_qt__co_ [            new BABYLON.Vector3(-5_co_ 0_co_ 5)_co_            new BABYLON.Vector3(5_co_ 0_co_ 5)_co_            new BABYLON.Vector3(0_co_ 0_co_ -5)_co_            new BABYLON.Vector3(-5_co_ 0_co_ 5)    ]_co_ scene)_sm_    myLines.color _eq_ new BABYLON.Color3(0_co_ 1_co_ 0)_sm_    myLines.position _eq_ new BABYLON.Vector3(3_co_ 0_co_ 0)_sm_    //Clone    var newLines _eq_ myLines.clone(_qt_newLines_qt_)_sm_    newLines.position _eq_ new BABYLON.Vector3(-3_co_ 0_co_ 0)_sm_    newLines.color _eq_ new BABYLON.Color3(1_co_ 1_co_ 0)_sm_   // newLines.rotate(BABYLON.Axis.Y_co_ Math.PI / 2_co_ BABYLON.Space.WORLD)_sm_       return scene_sm_}_lt_/pre_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2015/post-16459-0-42788900-1442485283.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2015/post-16459-0-42788900-1442485283_thumb.jpg_qt_ data-fileid_eq__qt_5112_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-16459-0-42788900-1442485283_thumb.j_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-09-17T15:58:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello this is a bug I guess...I_t_ll fix it for next commit _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]