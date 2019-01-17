[{"Owner":"David78","Date":"2015-01-01T14:38:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi there everyone._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve been learning modelling and animation in blender as part of establishing a working pipeline from blender-&gt_sm_babylon. Currently_co_ I_t_m working on exporting textured meshes. I made a mesh of a goblin-like creature and textured it and applied a pinkish material to it. I exported it to babylon and there seemed to be no issue_co_ except that when running the script_co_ it was blank. I did put the texture in the same directory as the .babylon file and used blender render as opposed to cycles render. Here is the code that executes the script_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if (BABYLON.Engine.isSupported()) {        var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\t\tscene _eq_ new BABYLON.Scene(engine)_sm_BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt__qt__co_ _qt_FACE.babylon_qt__co_ scene_co_ function (newMeshes_co_ particleSystems)            // Wait for textures and shaders to be ready{           \t\t   scene.executeWhenReady(function () {                // Attach camera to canvas inputs                //scene.activeCamera.attachControl(canvas)_sm_    var camera _eq_ new BABYLON.ArcRotateCamera(_qt_Camera_qt__co_ Math.PI_co_ Math.PI / 8_co_ 150_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_camera.attachControl(canvas_co_ true)_sm_\t\tlight0 _eq_ new BABYLON.DirectionalLight(_qt_hemi_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_                scene.collisionsEnabled _eq_ true_sm_\t\t// Material    var matPlan _eq_ new BABYLON.StandardMaterial(_qt_matPlan1_qt__co_ scene)_sm_    matPlan.backFaceCulling _eq_ false_sm_    matPlan.emissiveColor _eq_ new BABYLON.Color3(0.2_co_ 1_co_ 0.2)_sm_  var plan1 _eq_ BABYLON.Mesh.CreatePlane(_qt_plane1_qt__co_ 20_co_ scene)_sm_    plan1.position _eq_ new BABYLON.Vector3(13_co_ 0_co_ 0)_sm_\t plan1.rotation.x _eq_ -Math.PI / 4_sm_plan1.checkCollisions_eq_true_sm_// Once the scene is loaded_co_ just register a render loop to render itengine.runRenderLoop(function() {\t\t\t                    scene.render()_sm_                })_sm_            })_sm_        }_co_ function (progress) {            // To do_dd_ give progress feedback to user        })_sm_    }_lt_/pre_gt__lt_p_gt_As you can see_co_ it_t_s just like the example code._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve attached a zip that has the .blend and the .babylon and the textures used for the object. I would highly appreciate it if someone could view the .babylon or export the .blend to .babylon and help me see where exactly the issue is. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I should mention that this is just for learning purposes_co_ in the event that this leads to an actual game_co_ then the poly count will be reduced to a reasonable number. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks in advance for your time._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_3353_qt__gt_resources.zip_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-01-01T15:27:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello David_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I cannot see anything neither with your assets. I_t_m not a blender expert_co_ so I just took the babylon file and loaded it _dd_ nothing on my screen._lt_/p_gt__lt_p_gt_However_co_ if I had the bounding box renderer_co_ here is what I can see _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_img src_eq__qt_https_dd_//dl.dropboxusercontent.com/u/17799537/misc/2015-01-01%2016_26_27-localhost_63342_ninja_.png_qt_ alt_eq__qt_2015-01-01%2016_26_27-localhost_63342_ni_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I guess the issue should be in your blender file._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_co_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-01-01T18:06:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi David_co_ I took a look at your .blend file and to be honest it is a bit messy - it seems to have four scenes in it - three of which seem to be duplicates. Not sure how the exporter handles that situation but looking at your babylon file it does seem to contain all the materials you have defined in all the scenes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/david78/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Final Creature_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway_co_ I created a clean blend file and then imported the .003 body - I still could not see your character in the exported .babylon file but could see a simple textured cylinder that I added to the scene. Looking at your material/textures_co_ I found 5-6 materials that were not assigned to any parts of the mesh - so I deleted all those. Still could not see the character. So I deleted the one remaining material and texture and created a new one. It worked. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ (See above)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Somewhere in your material/texture settings you seem to have a setting I think which is making the whole mesh transparent._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By they way_co_ the model looks like it came from MakeHuman (poly count and UVmap). If you use MH_co_ I prefer the _qt_game rig_qt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-01-01T18:22:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_David_co_ here are the blend (v2.71)_co_ babylon and texture and html files for my example_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/david78/david.zip_qt_ rel_eq__qt_external nofollow_qt__gt_david.zip_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So you can get a close up of what I did._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"David78","Date":"2015-01-01T19:48:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi gryff and thank you so much for your extremely detailed help. This is a pretty amazing community_co_ I must say_co_ after a few hours the issue is solved. Yes I did get the mesh from MH_co_ because it was taking me ages to finish a whole model from scratch (see attached for screenshot of masked-head) and I am still learning the ropes as I keep saying_co_ so it made no point to go through all that just to see imported textures and animations in babylon.js. Sorry about the messed up .blend file_co_ I_t_m also still learning how to use it_co_ and I hope to get better with time. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Again_co_ I really appreciate you helping me_co_ restarting the file and loading up the .003 and then re-applying the materials and textures cleared it all up.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_01_2015/post-11887-0-40609500-1420141601.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_01_2015/post-11887-0-40609500-1420141601.jpg_qt_ data-fileid_eq__qt_3354_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-11887-0-40609500-1420141601.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]