[{"Owner":"JCPalmer","Date":"2016-03-03T17:21:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am kind of tired of people using the inferior SceneLoader.Load() over SceneLoader.Append() and hearing about all their avoidable problems.  Every time I mention Append()_co_ I get at most a _qt_well_co_ I_t_ll think about trying it_qt_. Append() came about because _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/6528-vousk-prod/?do_eq_hovercard_qt_ data-mentionid_eq__qt_6528_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/6528-vousk-prod/_qt__gt_@Vousk-prod._lt_/a_gt_ wanted to have multiple .babylon files_co_ and was doing all these back flips.  I looked at the source_co_ and saw all I had to do is change the name of the Load() function to Append_co_ switch the engine arg for a scene arg_co_ then make a 1 line wrapper for Load.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_public static Load(rootUrl_dd_ string_co_ sceneFilename_dd_ any_co_ engine_dd_ Engine_co_ onsuccess?_dd_ (scene_dd_ Scene) _eq_&gt_sm_ void_co_ progressCallBack?_dd_ any_co_ onerror?_dd_ (scene_dd_ Scene) _eq_&gt_sm_ void)_dd_ void {\n    SceneLoader.Append(rootUrl_co_ sceneFilename_co_ new Scene(engine)_co_ onsuccess_co_ progressCallBack_co_ onerror)_sm_\n}\n\n/**\n* Append a scene\n* @param rootUrl a string that defines the root url for scene and resources\n* @param sceneFilename a string that defines the name of the scene file. can start with _qt_data_dd__qt_ following by the stringified version of the scene\n* @param scene is the instance of BABYLON.Scene to append to\n*/\npublic static Append(rootUrl_dd_ string_co_ sceneFilename_dd_ any_co_ scene_dd_ Scene_co_ onsuccess?_dd_ (scene_dd_ Scene) _eq_&gt_sm_ void_co_ progressCallBack?_dd_ any_co_ onerror?_dd_ (scene_dd_ Scene) _eq_&gt_sm_ void)_dd_ void {\n    ...\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSo when you call Load()_co_  you are _lt_span style_eq__qt_font-size_dd_20px_sm__qt__gt__lt_u_gt__lt_strong_gt_Append_lt_/strong_gt__lt_/u_gt__lt_/span_gt_ing.  Creating a scene outside of the Load call means you do not need to add your render loop in the callback.  All the scope problems for your scene variable are also gone.  Having more than one .babylon is just 2 simple Appends.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCallbacks are also stupid_co_ and do not scale.  As soon as you have more than 1 .babylon_co_ they become a nightmare.  Just do all your Append()_t_s &amp_sm_ ImportMesh()_t_s_co_ then have all your post load code below inside a blocking executeWhenReady function.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_\nvar engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n        \nvar scene _eq_ new BABYLON.Scene(engine)_sm_\nBABYLON.SceneLoader.Append(_qt_./_qt__co_ _qt_scene.babylon_qt__co_ scene)_sm_\nBABYLON.SceneLoader.ImportMesh([_qt_moe_qt__co__qt_larry_qt__co__qt_curly_qt_]_co_ _qt_./_qt__co_ _qt_meshes.babylon_qt__co_ scene)_sm_\nscene.executeWhenReady(function () {\n    // Attach camera to canvas inputs\n    scene.activeCamera.attachControl(canvas)_sm_\n\n    // Once the scene is loaded_co_ register a render loop\n    engine.runRenderLoop(function() {\n       scene.render()_sm_\n    })_sm_\n    // any post load code grabbing all stuff using scene lookups\n    var skeleton _eq_ scene.getSkeletonByName(_qt_myskelname_qt_)_sm_\n    var material _eq_ scene.getMaterialByName(_qt_mymaterial_qt_)_sm_\n    var camera   _eq_ scene.getCameraByName(_qt_polaroid_qt_)_sm_\n    var bone     _eq_ scene.getBoneByName(_qt_funny_qt_)_sm_\n    var light    _eq_ scene.getLightByName(_qt_spot_qt_)_sm_\n    var node     _eq_ scene.getNodeByName(_qt_node_qt_)_sm_\n    var mesh     _eq_ scene.getMeshByName(_qt_cube_qt_)_sm_\n    var sound    _eq_ scene.getSoundByName(_qt_talking_qt_)_sm_\n    var flare    _eq_ scene.getLensFlareSystemByName(_qt_flare_qt_)_sm_\n})_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tProblems with callbacks for ImportMesh that reference the mesh as mesh[0] are also fixed.  Usually_co_ the problem is either [0] is the wrong mesh or there wasn_t_t anything actually loaded.  Specifying by name in a executeWhenReady should either get the right mesh_co_ or drive home the problem that nothing was done quicker.  Might be a good idea to add optional logging capability to Append (and therefore Load) and ImportMesh to list what actually got done.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLoad must die!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-03T17:31:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI agree with that. I find this more convenient than Append Load.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps a name change as_dd__lt_br_gt_\n\t- NewScene() (Load() current)_lt_br_gt_\n\t- AddScene() (Append() current)\n_lt_/p_gt_\n\n_lt_p_gt_\n\twould be good\n_lt_/p_gt_\n\n_lt_p_gt_\n\tor replace Append() on the Load() function.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-03T18:06:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry no breaking changes...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI completely agree on JCP point. But for compat reason we have to keep Load alive _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vousk-prod.","Date":"2016-03-03T22:12:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI agree with DK_co_ we got to keep Load for compat. To address JCP smart request (advise people to preferably use Append) we could simply mention it in the doc_co_ and maybe add a _qt_deprecated_qt_ comment in the src.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2016-03-04T00:58:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAdding a depreciated message to the browser console was what I wanted.  This is consistent with other discouraged features.  I just threw that _qt_load must die_qt_ crack in at the end as sort of a call to action.  I thought DK was referring to name changes dad72 added.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-03-04T01:05:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyes_co_ I was not thinking breaking changes to avoided when I say this.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]