[{"Owner":"MackeyK24","Date":"2016-10-17T20:51:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_margin-bottom_dd_16px_sm_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_-apple-system_t__co_ BlinkMacSystemFont_co_ _t_Segoe UI_t__co_ Helvetica_co_ Arial_co_ sans-serif_co_ _t_Apple Color Emoji_t__co_ _t_Segoe UI Emoji_t__co_ _t_Segoe UI Symbol_t__sm_font-size_dd_14px_sm__qt__gt_\n\tShadows from UnityExporter not showing.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin-bottom_dd_16px_sm_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_-apple-system_t__co_ BlinkMacSystemFont_co_ _t_Segoe UI_t__co_ Helvetica_co_ Arial_co_ sans-serif_co_ _t_Apple Color Emoji_t__co_ _t_Segoe UI Emoji_t__co_ _t_Segoe UI Symbol_t__sm_font-size_dd_14px_sm__qt__gt_\n\tThe export shadows options is on but i don_t_t see any shadows... I can manually create shadows_co_ but i thought the exporter was supposed to create shadows for you_co_ if you have a _t_Render_t_ component on the game object along side the MeshFilter. \n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin-top_dd_0px_sm_margin-bottom_dd_16px_sm_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_-apple-system_t__co_ BlinkMacSystemFont_co_ _t_Segoe UI_t__co_ Helvetica_co_ Arial_co_ sans-serif_co_ _t_Apple Color Emoji_t__co_ _t_Segoe UI Emoji_t__co_ _t_Segoe UI Symbol_t__sm_font-size_dd_14px_sm__qt__gt_\n\tOr is there something i have to do thru code to enable the shadows from UnityExporter?\n_lt_/p_gt_\n\n_lt_p style_eq__qt_margin-top_dd_0px_sm_color_dd_rgb(51_co_51_co_51)_sm_font-family_dd__t_-apple-system_t__co_ BlinkMacSystemFont_co_ _t_Segoe UI_t__co_ Helvetica_co_ Arial_co_ sans-serif_co_ _t_Apple Color Emoji_t__co_ _t_Segoe UI Emoji_t__co_ _t_Segoe UI Symbol_t__sm_font-size_dd_14px_sm__qt__gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-17T20:54:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcan you try to play with shadow bias?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-10-18T03:24:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t1... So is there anything that needs to be done to _t_Active_t_ the shadows created by unity exporter? or is supposed to be automatic?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2... When you say play with shadow bias_co_ are talking about adjusting the bias on the Unity Exporter side?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_            var generator _eq_ new BabylonShadowGenerator\n            {\n                lightId _eq_ GetID(light.gameObject)_co_\n                usePoissonSampling _eq_ light.shadows _eq__eq_ LightShadows.Soft_co_\n                mapSize _eq_ 256 + 256 * QualitySettings.GetQualityLevel()_co_\n                bias _eq_ light.shadowBias / 10.0f\n            }_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t3... How do i get a reference on client client javascript side after the scene has been loaded_co_ to the ShadowGenerator created from UnityExporter_co_ Is there some kind of scene.getShadowGenerator() or something...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo far the only way i got shadows working is to manually create on client side javascript in the scene ready event like so_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\tfloat quality _eq_ 1.0f_sm_\n\tvar shadows _eq_ new BABYLON.ShadowGenerator(256 + 256 * quality_co_ light)_sm_\n\tshadows.useBlurVarianceShadowMap _eq_ true_sm_\n\tshadows.getShadowMap().renderList.push(cube.As&lt_sm_dynamic&gt_sm_())_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-10-18T04:04:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIf i am reading things right... The lower the shadow bias to 0 for it to show up... since the light shadow bias default to like 0.05... Then the shadow generator in the unity exporter should divide by 100 instead of 10... Like so_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_            var generator _eq_ new BabylonShadowGenerator\n            {\n                lightId _eq_ GetID(light.gameObject)_co_\n                usePoissonSampling _eq_ light.shadows _eq__eq_ LightShadows.Soft_co_\n                mapSize _eq_ 256 + 256 * QualitySettings.GetQualityLevel()_co_\n                bias _eq_ light.shadowBias / 100.0f\n            }_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-10-18T04:21:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlso i found the shadow generator on the light not the scene_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var shadows _eq_ light.getShadowGenerator()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t And i Added a field _t_Map Size Factor_t_ to the Shadow Export Section of the ExportWindow.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDefault ExportWindow.MapSizeFactor to _t_256_t_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut now you can easily change your shadow map size from exporter by using mapSizeFactor instead of hard coding _t_256_t__dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var generator _eq_ new BabylonShadowGenerator\n{\n    lightId _eq_ GetID(light.gameObject)_co_\n    usePoissonSampling _eq_ light.shadows _eq__eq_ LightShadows.Soft_co_\n    mapSize _eq_ mapSizeFactor + mapSizeFactor * QualitySettings.GetQualityLevel()_co_\n    bias _eq_ light.shadowBias / 100.0f\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-18T17:55:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou should submit a PR _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-10-19T04:13:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey David...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a way to either from the UnityExport Babylon classes or in Babylon JS client_co_ to set the Default Physics Framework?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know about scene.enablePhysics()... BUT i have went ahead and implemented Unity Exporter Physics Option. The only problem is at the UnityExporter level i can_t_t seem to find any api to set where the framework should use OIMO or CANNON. By default it seems to use CANNON. But i want to give the option on the Unity Exporter Window to specify which physics to use. Using my new exporter physics stuff you can now easily just add a _t_BabylonPhysicsState_t_ unity script component to your mesh in unity_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_using System_sm_\nusing UnityEngine_sm_\n\npublic sealed class BabylonPhysicsState _dd_ MonoBehaviour\n{\n\tpublic float mass _eq_ 0.0f_sm_\n\tpublic float friction _eq_ 0.2f_sm_\n\tpublic float restitution _eq_ 0.2f_sm_\n\tpublic BabylonPhysicsImposter imposter _eq_ BabylonPhysicsImposter.None_sm_\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThen the SceneBuilder.Meshes  ConvertUnityMeshToBabylon_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// Babylon Physics\nif (exportationOptions.ExportPhysics)\n{\n\tvar physics _eq_ gameObject.GetComponent&lt_sm_BabylonPhysicsState&gt_sm_()_sm_\n\tif (physics !_eq_ null)\n\t{\n\t\tbabylonMesh.physicsMass _eq_ physics.mass_sm_\n\t\tbabylonMesh.physicsFriction _eq_ physics.friction_sm_\n\t\tbabylonMesh.physicsRestitution _eq_ physics.restitution_sm_\n\t\tbabylonMesh.physicsImpostor _eq_ (int)physics.imposter_sm_\n\t}\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tUsing _t_BabylonPhysicsImposter_t_ enums in the Unity Inspector_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_public enum BabylonPhysicsImposter\n{\n\tNone _eq_ 0_co_\n\tSphere _eq_ 1_co_\n\tBox _eq_ 2_co_\n\tPlane _eq_ 3_co_\n\tMesh _eq_ 4_co_\n\tCylinder _eq_ 7_co_\n\tParticle _eq_ 8_co_\n\tHeightmap _eq_ 9\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd is all kicked off from SceneBuilder ConvertFromUnity_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_// Babylon Physics\nif (exportationOptions.ExportPhysics)\n{\n\tbabylonScene.physicsEnabled _eq_ true_sm_\n\tbabylonScene.physicsGravity _eq_ exportationOptions.Gravity.ToFloat()_sm_\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis works great... No need to manually call scene.enablePhysics from code OR mesh.setPhysicsState.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut would be REAL NICE if i could do_dd_ babylonScene.physicsEngine _eq_ _qt_oimo_qt_ at the UnityExporter level or at least a engine.setDefaultPhysicsEngine(_qt_oimo_qt_)... Or something like that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRight now_co_ using my built-in unity exported physics will ONLY use cannon.js\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNOTE_dd_ I will be push all this to a github Pull Request after i done cleaning up a few things.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo far i got_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1... Manifest export support\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2... Unity Meta Data Support (including unity tags and layers)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3... Extended shadow export options\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4... Babylon Physics State Script Component\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5... Abstract base class _t_BabylonGameComponent_t_ to support custom babylon client side game components classes.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_public abstract class BabylonGameComponent _dd_ MonoBehaviour\n{\n\tinternal const string DEFAULT_GAME_COMPONENT _eq_ _qt_System.Default.Component_qt__sm_\n\t[Unity3D2Babylon.ReadOnly]\n\tpublic string babylonClass_sm_\n\tprotected BabylonGameComponent()\n\t{\n\t\tthis.babylonClass _eq_ BabylonGameComponent.DEFAULT_GAME_COMPONENT_sm_\n\t}\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tYou can them make custom scripts in unity and attach to components like normal_co_ including Meshes_co_ Cameras_co_ Lights and Empty GameObjects_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_using UnityEngine_sm_\nusing System.Collections_sm_\n\npublic class MyRotator _dd_ BabylonGameComponent {\n\n\tpublic MyRotator()\n\t{\n\t\tthis.babylonClass _eq_ _qt_My.Custom.RotatorClass_qt__sm_\n\t}\n\n\t[BabylonProperty]\n\tpublic float speed_sm_\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI think its SWEET _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-10-19T04:16:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tA couple screen shots\n_lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/Shot2.jpg.dcb534815fd98ee3054aa646a4469f3e.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_9896_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/Shot2.jpg.dcb534815fd98ee3054aa646a4469f3e.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Shot2.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/Shot1.jpg.749e129dda655c6368c4e07256808f68.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_9897_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_10/Shot1.jpg.749e129dda655c6368c4e07256808f68.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Shot1.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-19T18:09:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI_t_m not opposed to this idea_co_ we could add this at scene level.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2016-10-21T16:21:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI don_t_t know how to change the src to make default physics engine at the scene level. You (or someone who knows the codebase) will have to do that... PLEASE _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]