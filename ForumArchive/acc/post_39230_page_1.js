[{"Owner":"Aidoru","Date":"2018-08-02T11:42:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello everyone_co__lt_br /_gt_\n\tI have a little problem_dd__lt_br /_gt_\n\tI would like to use CSG on mesh imported using assetsmanager_co_ everythins work ok but I cant reach to have a CSG object_co_ that I think it_t_s because I have an abstractmesh and not a mesh_co__lt_br /_gt_\n\tSo how to convert AbstractMesh to mesh? My bad part of code is that_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_assetsManager.onFinish _eq_ function(task)\n        {\n            var prova _eq_ task[0].loadedMeshes[0]_sm_\n            aCSG _eq_ BABYLON.CSG.FromMesh(prova)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI get _qt_Cannot read property _t_0_t_ of null_qt__co_ that I think because loadeMeshes return an _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#222222_sm_font-size_dd_14px_sm__qt__gt_Array_lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_font-size_dd_14px_sm__qt__gt_&lt_sm__lt_/span_gt__lt_a href_eq__qt_https_dd_//doc.babylonjs.com/api/classes/babylon.abstractmesh_qt_ style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#4da6ff_sm_font-size_dd_14px_sm__qt_ rel_eq__qt_external nofollow_qt__gt_AbstractMesh_lt_/a_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_font-size_dd_14px_sm__qt__gt_&gt_sm_ as the documentation here_dd_ _lt_/span_gt_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/api/classes/babylon.meshassettask#loadedmeshes_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/api/classes/babylon.meshassettask#loadedmeshes_lt_/a_gt__lt_br /_gt_\n\tbut BABYLON.CSG.FromMesh() method need a Mesh type as you can see in the documentation here_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/api/classes/babylon.csg#frommesh_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/api/classes/babylon.csg#frommesh_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCould someone help me?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThnak you\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-08-02T12:19:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24715-aidoru/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24715_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24715-aidoru/_qt_ rel_eq__qt__qt__gt_@Aidoru_lt_/a_gt_ and welcome to the forum from me. Difficult to tell what you problem is without seeing other parts of your code. Here is a rough and ready playground that shows assetManager and CSG working together _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#SAFTNA_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#SAFTNA_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave a play around with it so that the code looks more like the one you are writing and get back to us.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Aidoru","Date":"2018-08-02T16:40:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you JohnK.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s my code using your (only changed the model) _lt_span_gt__dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_ // Get the canvas element \n\nvar engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_ // Generate the BABYLON 3D engine\n\nvar modelMesh_sm_\n\n/******* Add the create scene function ******/\nvar createScene _eq_ function () {\n    var scene _eq_ new BABYLON.Scene(engine)_sm_\n\n    //Adding a light\n    var light _eq_ new BABYLON.PointLight(_qt_Omni_qt__co_ new BABYLON.Vector3(20_co_ 20_co_ 100)_co_ scene)_sm_\n    var light0 _eq_ new BABYLON.HemisphericLight(_qt_Hemi0_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_\n    //Adding an Arc Rotate Camera\n    var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ 0_co_ 1.2_co_ 40_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_\n    camera.attachControl(canvas_co_ false)_sm_\n    var ground _eq_ BABYLON.Mesh.CreateGround(_qt_ground1_qt__co_ 26_co_ 26_co_ 2_co_ scene)_sm_\n    ground.visibility _eq_ 0.4_sm_\n    var assetsManager _eq_ new BABYLON.AssetsManager(scene)_sm_\n\n\tvar meshTask _eq_ assetsManager.addMeshTask(_qt_parte_qt__co_ _qt_model1_qt__co_ _qt_public/Models/_qt__co_ _qt_parte.stl_qt_)_sm_\n\tbox _eq_ BABYLON.MeshBuilder.CreateBox(_qt__qt__co_ {size_dd_ 5}_co_ scene)_sm_\n    box.position.x _eq_ 1_sm_\n    box.position.z _eq_ -2_sm_\n\tmeshTask.onSuccess _eq_ function (task) {      \n\t    task.loadedMeshes[0].position _eq_ BABYLON.Vector3.Zero()_sm_\n        task.loadedMeshes[0].scaling.copyFromFloats(0.03_co_0.03_co_0.03)_sm_\n        fishMesh _eq_ task.loadedMeshes[0]_sm_\n        fishMesh.rotationQuaternion _eq_ new BABYLON.Quaternion()_sm_\n        fishMesh.position.y -_eq_ 1.2_sm_\n        \n\t}\t\n\n\tassetsManager.onFinish _eq_ function (tasks) {\n        csgFish _eq_ BABYLON.CSG.FromMesh(fishMesh)_sm_\n        csgBox _eq_ BABYLON.CSG.FromMesh(box)_sm_\n        csgHalfFish _eq_ csgFish.subtract(csgBox)_sm_\n        fishMesh.dispose()_sm_\n        box.dispose()_sm_\n        csgHalfFish.toMesh(_qt_fishMesh_qt_)_sm_\n\n\t}_sm_\n\t\n\tassetsManager.load()_sm_\n\n\n    return scene_sm_\n}\n\n/******* End of the create scene function ******/\n\nvar scene _eq_ createScene()_sm_ //Call the createScene function\n\nengine.runRenderLoop(function () { // Register a render loop to repeatedly render the scene\n    scene.render()_sm_\n})_sm_\n\n\nwindow.addEventListener(_qt_resize_qt__co_ function () { // Watch for browser/canvas resize events\n    engine.resize()_sm_\n})_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd here_t_s the error code on Console in Chrome_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTypeError_dd_ Cannot read property _t_0_t_ of null_lt_br /_gt_\n\t    at Function.r.FromMesh (babylon.js_dd_43)_lt_br /_gt_\n\t    at i.assetsManager.onFinish (myscript_Forum.js_dd_35)_lt_br /_gt_\n\t    at i._decreaseWaitingTasksCount (babylon.js_dd_50)_lt_br /_gt_\n\t    at i (babylon.js_dd_50)_lt_br /_gt_\n\t    at i.e.onDoneCallback (babylon.js_dd_50)_lt_br /_gt_\n\t    at babylon.js_dd_49_lt_br /_gt_\n\t    at babylon.js_dd_50_lt_br /_gt_\n\t    at p (babylon.js_dd_35)_lt_br /_gt_\n\t    at babylon.js_dd_35_lt_br /_gt_\n\t    at m (babylon.js_dd_35)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-08-02T16:51:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_223979_qt_ data-ipsquote-contentid_eq__qt_39230_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1533228033_qt_ data-ipsquote-userid_eq__qt_24715_qt_ data-ipsquote-username_eq__qt_Aidoru_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 minutes ago_co_ Aidoru said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHere_t_s my code using your (only changed the model) _lt_span_gt__dd__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIn that case have you checked that the box and your model intersect. Actually the first step is to check your model loads. Do you get the same error messages if you only load the file?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee you are using an STL model_co_ have you read this _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/stl_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/stl_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you have read and done this I cannot help as I do not work very much with loaded files. Could also be an error in your file.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Aidoru","Date":"2018-08-02T18:03:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you John_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes I know SceneLoader but I would like to use AssetsManager if it is possible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBox and my model intersect_co_ and I get that error when using CSG.FromMesh\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I think that probably because FromMesh method need a Mesh amd I only have an AbstractMesh that I think is a Mesh parent if I look on that tree http_dd_//doc.babylonjs.com/api/classes/babylon.mesh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-08-02T20:21:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy suggestion to get more help  would be edit your first post and change your title to better reflect your issue. Something like imported stl file not converting to CSG\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]