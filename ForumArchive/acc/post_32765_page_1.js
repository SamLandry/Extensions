[{"Owner":"jghorton14","Date":"2017-09-05T17:07:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am having some trouble taking a screenshot. If you followed along with the tut_co_ at_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/render_scene_on_a_png_qt_ rel_eq__qt_external nofollow_qt__gt_Render A Scene_lt_/a_gt_ you see that they only provided one line which is\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.Tools.CreateScreenshot(engine_co_ camera_co_ size)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#242729_sm_font-size_dd_15px_sm_text-align_dd_left_sm__qt__gt_With size and your camera being the variables that you can change. When I implemented this_co_ I would get a black screenshot. I first thought that maybe the it was taking a screenshot before the page rendered so I added a simple loop at the bottom of the function and added an alert box to wait until the scene loaded before the screenshot would execute. But for some reason I am still getting a black/clear screenshot. Thank you for your input _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var canvas _eq_ document.querySelector(_qt_#renderCanvas_qt_)_sm_\nvar engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n\n//Needed for the CreateScene Function\nvar createScene _eq_ function () {\n    var scene _eq_ new BABYLON.Scene(engine)_sm_\n\n    // Setup camera\n    var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 0_co_ 10_co_ 0_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_\n    camera.setPosition(new BABYLON.Vector3(-10_co_ 10_co_ 25))_sm_\n    camera.attachControl(canvas_co_ true)_sm_\n\n    // Lights\n    var light0 _eq_ new BABYLON.PointLight(_qt_Omni0_qt__co_ new BABYLON.Vector3(0_co_ 10_co_ 5)_co_ scene)_sm_\n    var light1 _eq_ new BABYLON.PointLight(_qt_Omni1_qt__co_ new BABYLON.Vector3(0_co_ -10_co_ 5)_co_ scene)_sm_\n    var light2 _eq_ new BABYLON.PointLight(_qt_Omni2_qt__co_ new BABYLON.Vector3(10_co_ 0_co_ 5)_co_ scene)_sm_\n    var light3 _eq_ new BABYLON.DirectionalLight(_qt_Dir0_qt__co_ new BABYLON.Vector3(1_co_ -1_co_ 2)_co_ scene)_sm_\n    var light4 _eq_ new BABYLON.SpotLight(_qt_Spot0_qt__co_ new BABYLON.Vector3(0_co_ 5_co_ -10)_co_ new BABYLON.Vector3(0_co_ -1_co_ 0)_co_ 0.8_co_ 3_co_ scene)_sm_\n    var light5 _eq_ new BABYLON.HemisphericLight(_qt_Hemi0_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_\n\n    var material _eq_ new BABYLON.StandardMaterial(_qt_kosh_qt__co_ scene)_sm_\n    var sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_Sphere_qt__co_ 16_co_ 3_co_ scene)_sm_\n    var cylinder _eq_ BABYLON.Mesh.CreateCylinder(_qt_cylinder_qt__co_ 7.5_co_ 3_co_ 6_co_ 6_co_ 1_co_ scene)_sm_\n    var box _eq_ BABYLON.Mesh.CreateBox(_qt_box_qt__co_ 6.0_co_ scene)_sm_\n\n    // Creating light sphere\n    var lightSphere0 _eq_ BABYLON.Mesh.CreateSphere(_qt_Sphere0_qt__co_ 16_co_ .5_co_ scene)_sm_\n    var lightSphere1 _eq_ BABYLON.Mesh.CreateSphere(_qt_Sphere1_qt__co_ 16_co_ 0.5_co_ scene)_sm_\n    var lightSphere2 _eq_ BABYLON.Mesh.CreateSphere(_qt_Sphere2_qt__co_ 16_co_ 0.5_co_ scene)_sm_\n\n    //Shifting position up of Sphere\n    sphere.position.y _eq_ 5_sm_\n    box.position.y _eq_ -2_sm_\n\n    //generating shadows\n    var shadowGenerator _eq_ new BABYLON.ShadowGenerator(1024_co_ light3)_sm_\n    shadowGenerator.getShadowMap().renderList.push(box)_sm_\n    shadowGenerator.getShadowMap().renderList.push(sphere)_sm_\n    shadowGenerator.getShadowMap().renderList.push(cylinder)_sm_\n\n    //Colors\n    lightSphere0.material _eq_ new BABYLON.StandardMaterial(_qt_red_qt__co_ scene)_sm_\n    lightSphere0.material.diffuseColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\n    lightSphere0.material.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\n    lightSphere0.material.emissiveColor _eq_ new BABYLON.Color3(1_co_ 0_co_ 0)_sm_\n\n    lightSphere1.material _eq_ new BABYLON.StandardMaterial(_qt_green_qt__co_ scene)_sm_\n    lightSphere1.material.diffuseColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\n    lightSphere1.material.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\n    lightSphere1.material.emissiveColor _eq_ new BABYLON.Color3(0_co_ 1_co_ 0)_sm_\n\n    lightSphere2.material _eq_ new BABYLON.StandardMaterial(_qt_blue_qt__co_ scene)_sm_\n    lightSphere2.material.diffuseColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\n    lightSphere2.material.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\n    lightSphere2.material.emissiveColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 1)_sm_\n\n    // Sphere material\n    material.diffuseColor _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\n    sphere.material _eq_ material_sm_\n\n    // Lights colors\n    light0.diffuse _eq_ new BABYLON.Color3(1_co_ 0_co_ 0)_sm_\n    light0.specular _eq_ new BABYLON.Color3(1_co_ 0_co_ 0)_sm_\n\n    light1.diffuse _eq_ new BABYLON.Color3(0_co_ 1_co_ 0)_sm_\n    light1.specular _eq_ new BABYLON.Color3(0_co_ 1_co_ 0)_sm_\n\n    light2.diffuse _eq_ new BABYLON.Color3(0_co_ 0_co_ 1)_sm_\n    light2.specular _eq_ new BABYLON.Color3(0_co_ 0_co_ 1)_sm_\n\n    light3.diffuse _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\n    light3.specular _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\n\n    light4.diffuse _eq_ new BABYLON.Color3(1_co_ 0_co_ 0)_sm_\n    light4.specular _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\n\n    light5.diffuse _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\n    light5.specular _eq_ new BABYLON.Color3(1_co_ 1_co_ 1)_sm_\n    light5.groundColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\n\n    //Adding the SkyBox\n    var skybox _eq_ BABYLON.Mesh.CreateBox(_qt_skyBox_qt__co_ 100.0_co_ scene)_sm_\n    var skyboxMaterial _eq_ new BABYLON.StandardMaterial(_qt_skyBox_qt__co_ scene)_sm_\n    skyboxMaterial.backFaceCulling _eq_ false_sm_\n    skyboxMaterial.reflectionTexture _eq_ new BABYLON.CubeTexture(_qt_../textures/TropicalSunnyDay_qt__co_ scene)_sm_\n    skyboxMaterial.reflectionTexture.coordinatesMode _eq_ BABYLON.Texture.SKYBOX_MODE_sm_\n    skyboxMaterial.diffuseColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\n    skyboxMaterial.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_\n    skyboxMaterial.disableLighting _eq_ true_sm_\n    skybox.material _eq_ skyboxMaterial_sm_\n\n    // Animations\n    var alpha _eq_ 0_sm_\n    scene.beforeRender _eq_ function () {\n        light0.position _eq_ new BABYLON.Vector3(10 * Math.sin(alpha)_co_ 0_co_ 10 * Math.cos(alpha))_sm_\n        light1.position _eq_ new BABYLON.Vector3(10 * Math.sin(alpha)_co_ 0_co_ -10 * Math.cos(alpha))_sm_\n        light2.position _eq_ new BABYLON.Vector3(10 * Math.cos(alpha)_co_ 0_co_ 10 * Math.sin(alpha))_sm_\n\n        lightSphere0.position _eq_ light0.position_sm_\n        lightSphere1.position _eq_ light1.position_sm_\n        lightSphere2.position _eq_ light2.position_sm_\n\n        lightSphere0.position.y _eq_ 5_sm_\n        lightSphere1.position.y _eq_ 5_sm_\n        lightSphere2.position.y _eq_ 5_sm_\n\n        alpha +_eq_ 0.01_sm_\n    }_sm_\n\n    //ground\n    var ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground1_qt__co_ 100_co_ 100_co_ 2_co_ scene)_sm_\n    ground.receiveShadows _eq_ true_sm_\n\n    var materialGround _eq_ new BABYLON.StandardMaterial(_qt_grassTexture_qt__co_ scene)_sm_\n    materialGround.diffuseColor _eq_ new BABYLON.Color3(1_co_1_co_1)_sm_\n    materialGround.diffuseTexture _eq_ new BABYLON.Texture(_qt_../textures/grass.png_qt__co_scene)_sm_\n    ground.material _eq_ materialGround_sm_\n\n\n//wait loop for the screenshot\n    size _eq_ { width_dd_ 600_co_ height_dd_ 400}_sm_\n    var i _eq_ 1_sm_\n    function myLoop () {\n        setTimeout(function () {\n            alert(_t_Taking Screenshot!_t_)_sm_\n            //Creating png screenshot\n            done _eq_ BABYLON.Tools.CreateScreenshot(engine_co_ camera_co_ size)_sm_\n            console.log(done)_sm_\n            i++_sm_\n            if (i &lt_sm_ 1) {\n                myLoop()_sm_\n                //console.log(done1)_sm_\n            }\n        }_co_ 5000)\n    }\n\n    myLoop()_sm_\n\n\n    //Returning the scene\n    return scene_sm_\n}_sm_\n\nvar scene _eq_ createScene()_sm_\nengine.runRenderLoop(function () {\n    scene.render()_sm_\n})_sm_\n\n\nconsole.log(scene)_sm_\n\nwindow.addEventListener(_qt_resize_qt__co_ function () {\n    engine.resize()_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-09-05T22:19:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMake sure to use these options to create your engine_dd_\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#1e1e1e_sm_color_dd_#d4d4d4_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_engine_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__eq__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_new_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#4ec9b0_sm__qt__gt_BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_#4ec9b0_sm__qt__gt_Engine_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_canvas_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__co_ { _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_preserveDrawingBuffer_dd__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt__co_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#9cdcfe_sm__qt__gt_stencil_dd__lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#569cd6_sm__qt__gt_true_lt_/span_gt__lt_span style_eq__qt_color_dd_#d4d4d4_sm__qt__gt_ })_sm__lt_/span_gt_\n\t_lt_/div_gt_\n\n\t_lt_div_gt_\n\t\t \n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]