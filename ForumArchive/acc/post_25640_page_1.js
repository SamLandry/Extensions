[{"Owner":"getzel","Date":"2016-10-08T09:47:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_strong_gt_Edit _dd_ problem solved_co_ look below _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t______\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tlookAt works well on the view.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut the parameter rotation doesn_t_t change staying at 0_co_0_co_0.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd I need it after to calculate the vector forward in local space of a mesh to moveWithCollision _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code class_eq__qt_lang-javascript_qt__gt__lt_span_gt_var_lt_/span_gt_ forwards _eq_ _lt_span_gt_new_lt_/span_gt_ BABYLON.Vector3(_lt_span_gt_parseFloat_lt_/span_gt_(_lt_span_gt_Math_lt_/span_gt_.sin(character.rotation.y)) / speedCharacter_co_ gravity_co_ _lt_span_gt_parseFloat_lt_/span_gt_(_lt_span_gt_Math_lt_/span_gt_.cos(character.rotation.y)) / speedCharacter)_sm_\nforwards.negate()_sm_\ncharacter.moveWithCollisions(forwards)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the playground_co_ I don_t_t know how to display text to debug and Jsfiddle doesn_t_t work so I paste my code here _dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_html&gt_sm_\n\n&lt_sm_head&gt_sm_\n&lt_sm_meta http-equiv_eq__qt_Content-Type_qt_ content_eq__qt_text/html_sm_ charset_eq_utf-8_qt_ /&gt_sm_\n\n&lt_sm_style&gt_sm_\n\n\n#renderCanvas {\n    width_dd_ 100%_sm_\n    height_dd_ 95%_sm_\n    min-height_dd_ 95%_sm_\n}\n\n&lt_sm_/style&gt_sm_\n\n&lt_sm_/head&gt_sm_\n\n&lt_sm_body&gt_sm_\n\n&lt_sm_div id_eq__qt_info_qt_&gt_sm_\naaa\n&lt_sm_/div&gt_sm_\n\n&lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm_\n\n&lt_sm_script src_eq__qt_http_dd_//cdn.babylonjs.com/2-4/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n&lt_sm_script&gt_sm_\n\nvar info _eq_ document.getElementById(_t_info_t_)_sm_\n\n\n var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\n var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n var scene _eq_ new BABYLON.Scene(engine)_sm_\n var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 0_co_ 0.8_co_ 10_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_\ncamera.attachControl(canvas_co_ false)_sm_\n var light _eq_ new BABYLON.PointLight(_qt_Omni0_qt__co_ new BABYLON.Vector3(0_co_ 100_co_ 100)_co_ scene)_sm_\n  var cube _eq_ BABYLON.Mesh.CreateBox(_qt_Box_qt__co_ 1_co_ scene)_sm_\n  var cube2 _eq_ BABYLON.Mesh.CreateBox(_qt_Box2_qt__co_ 1_co_ scene)_sm_\n   cube.position.x _eq_ -5_sm_\n \n var material _eq_ new BABYLON.StandardMaterial(_qt_default_qt__co_ scene)_sm_\n material.emissiveColor _eq_ new BABYLON.Color3(0.3_co_ 0.3_co_ 0.5)_sm_\n cube.material _eq_ material_sm_\n    \n var material2 _eq_ new BABYLON.StandardMaterial(_qt_default2_qt__co_ scene)_sm_\n material2.emissiveColor _eq_ new BABYLON.Color3(0.5_co_ 0.3_co_ 0.3)_sm_\n cube2.material _eq_ material2_sm_\n\n\nscene.beforeRender _eq_ function() {\n\n      \n   }_sm_\n \n    \n    // Render loop\n    var renderLoop _eq_ function () {\n        \n\tcube.lookAt(cube2.position)_sm_\n     cube2.position.z +_eq_ 0.01_sm_\n\tinfo.innerHTML _eq_ cube.rotation_sm_    //                               !!!       display 0_co_0_co_0 everytime      !!!\n\t\t\n\tscene.render()_sm_\n\t\t\n    }_sm_\n    \n    // Launch render loop\n    engine.runRenderLoop(renderLoop)_sm_\n\n&lt_sm_/script&gt_sm_\n\n&lt_sm_/body&gt_sm_\n\n&lt_sm_/html&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"getzel","Date":"2016-10-08T10:14:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThere is a topic about that _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/16160-retrieving-rotation-after-meshlookat/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tlookAt changes the rotation to quaternion mode.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI try the code and then change my mesh.rotation.x _eq_ mesh.rotation.z _eq_ 0_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHe looks to the good direction but only 180°.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis function seems to work to retrieve rotation euler _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmesh.rotationQuaternion.toEulerAngles()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"getzel","Date":"2016-10-08T12:57:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFinally I found a solution without quaternion but trigonometry.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis code is to rotate a character on y axis _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function mousemovef(){\n\n   var pickResult _eq_ scene.pick(scene.pointerX_co_ scene.pointerY)_sm_\n\n    if (pickResult.hit) {\n\n  \n                \n             var   pickResultPos.x _eq_ pickResult.pickedPoint.x_sm_\n              var  pickResultPos.z _eq_ pickResult.pickedPoint.z_sm_\n                \n                var diffX _eq_ pickResultPos.x - man.position.x_sm_\n                var diffZ _eq_ pickResultPos.z - man.position.z_sm_\n                man.rotation.y _eq_ Math.atan2(-diffX_co_-diffZ)_sm_\n                \n       \n    }// if result\n    \n \n    \n}//mousemovef()\n\n\n window.addEventListener(_qt_mousemove_qt__co_ function() {\n\n    mousemovef()_sm_\n \n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n\t_lt_/p_gt_\n_lt_p_gt_\n\t\t \n\t_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2016-10-10T07:10:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tSounds good_co_ maybe you can add a little playground to show how it works_co_ that would be awesome! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"getzel","Date":"2016-10-10T15:23:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/12304-iiceman/?do_eq_hovercard_qt_ data-mentionid_eq__qt_12304_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/12304-iiceman/_qt_ rel_eq__qt__qt__gt_@iiceman_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSure ! \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is an example of rotating and moving with the mouse without lookAt _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1JPHAD%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1JPHAD#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]