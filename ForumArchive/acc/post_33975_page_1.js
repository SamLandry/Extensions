[{"Owner":"feilong","Date":"2017-11-13T15:00:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have try to load a glb file generate by microsoft 3d paint.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmy file is in _lt_a href_eq__qt_https_dd_//raw.githubusercontent.com/feilongfl/pic-bed/master/201711/%E6%BB%91%E7%A8%BD.glb_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\ti test createScene function in _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#6MZV8R_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#6MZV8R_lt_/a_gt_ and it works well.but use my code it doesn_t_t work.😭  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t![](_lt_img alt_eq__qt_chrome_2017-11-13_22-45-31.jpg_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_633_qt_ src_eq__qt_https_dd_//lh3.googleusercontent.com/-5iNU-7cnADw/WgmwAbw-6AI/AAAAAAAAEp0/HwUqD78zmR8nKalfkNht7plhvavCVjktQCHMYCw/s0/chrome_2017-11-13_22-45-31.jpg_qt_ width_eq__qt_1000_qt_ /_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tconsole show me\n_lt_/p_gt_\n\n_lt_p_gt_\n\t![](_lt_img alt_eq__qt_chrome_2017-11-13_22-58-27.jpg_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_413_qt_ src_eq__qt_https_dd_//lh3.googleusercontent.com/-YkMZdMuaKoo/WgmzCKLtu8I/AAAAAAAAEqA/h1fmsgh3A8QeFxSFbHNX0ewwcpKpwcNOACHMYCw/s0/chrome_2017-11-13_22-58-27.jpg_qt_ width_eq__qt_1000_qt_ /_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tmy js code is before_co_and div with class name _t_gltfobj_t_.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt__qt_use strict_qt__sm_\n\nfunction setGltf(gltfarea) {\n\t//$(_qt_.gltfobj_qt_)[0].id.match(/(.*\\/)(.*\\.gl(?_dd_b|tf))/)\n\tvar rooturl _eq_ gltfarea.id.match(/(.*\\/)(.*\\.gl(?_dd_b|tf))/)[1]_sm_\n\tvar gltfname _eq_ gltfarea.id.match(/(.*\\/)(.*\\.gl(?_dd_b|tf))/)[2]_sm_\n\tconsole.log(_t_root_dd_ _t_ + rooturl + _t_ _co_name_dd_ _t_ + gltfname)_sm_\n\n\tvar canvas _eq_ document.createElement(_qt_CANVAS_qt_)_sm_\n\tcanvas.width _eq_ 400_sm_\n\tcanvas.height _eq_ 400_sm_\n\tgltfarea.appendChild(canvas)_sm_\n\n\tvar engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_\n\n\tvar createScene _eq_ function () {\n\t\t// This creates a basic Babylon Scene object (non-mesh)\n\t\tvar scene _eq_ new BABYLON.Scene(engine)_sm_\n\t\t// glTF Files use right handed system\n\t\tscene.useRightHandedSystem _eq_ true_sm_\n\n\t\t// Configuring camera\n\t\tvar camera _eq_ new BABYLON.ArcRotateCamera(_qt_camera_qt__co_ 1.55_co_ 1.6_co_ 2_co_ BABYLON.Vector3(0_co_ 0_co_ 0)_co_ scene)_sm_\n\t\tcamera.attachControl(canvas_co_ true)_sm_\n\t\tcamera.wheelPrecision _eq_ 100.0_sm_\n\t\tcamera.minZ _eq_ 0.01_sm_\n\t\tcamera.maxZ _eq_ 1000_sm_\n\n\t\t// This creates a light_co_ aiming 0_co_1_co_0 - to the sky (non-mesh)\n\t\tvar light _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_\n\t\t// Default intensity is 1. Let_t_s dim the light a small amount\n\t\tlight.intensity _eq_ 0.7_sm_\n\n\t\t// Append sample glTF model to scene\n\t\tBABYLON.SceneLoader.Append(_qt_https_dd_//raw.githubusercontent.com/feilongfl/pic-bed/master/201711/_qt__co_ _qt_%E6%BB%91%E7%A8%BD.glb_qt__co_ scene_co_ function (scene) {}_co_ null_co_ function (scene) {\n\t\t\tconsole.log(_qt_error!_qt_)+\n\t\t})_sm_\n\n\t\treturn scene_sm_\n\t}_sm_\n\n\tvar scene _eq_ createScene()_sm_\n\n\tengine.runRenderLoop(function () {\n\t\tscene.render()_sm_\n\t})_sm_\n\n\twindow.addEventListener(_qt_resize_qt__co_ function () { // Watch for browser/canvas resize events\n\t\tengine.resize()_sm_\n\t})_sm_\n}\n\n\n// require([_t_https_dd_//cdnjs.cloudflare.com/ajax/libs/babylonjs/3.0.1-beta/babylon.max.js_t_]_co_ function () {\nrequire([_t_https_dd_//cdn.babylonjs.com/babylon.js_t_]_co_ function () {\n\trequire([_t_https_dd_//cdn.rawgit.com/BabylonJS/Babylon.js/master/dist/preview%20release/loaders/babylon.glTFFileLoader.min.js_t_]_co_ function () {\n\t\tfor (var i _eq_ 0_sm_ i &lt_sm_ $(_qt_.gltfobj_qt_).length_sm_ i++) {\n\t\t\tsetGltf($(_qt_.gltfobj_qt_)[i])_sm_\n\t\t\t// console.log(i)_sm_\n\t\t}\n\t})_sm_\n})_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"feilong","Date":"2017-11-13T15:06:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\twhole project is in _lt_a href_eq__qt_https_dd_//github.com/feilongfl/nodebb-plugin-babylon-gltf_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/feilongfl/nodebb-plugin-babylon-gltf_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-11-13T16:22:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/29270-feilong/?do_eq_hovercard_qt_ data-mentionid_eq__qt_29270_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/29270-feilong/_qt_ rel_eq__qt__qt__gt_@feilong_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twelcome to the forum _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHave you tried using the latest versions of both babylon and the gltf loader? I think you are using the latest GLTF loader_co_ but not the latest babylon_co_ which has a different API (the AddToMesh function was added in 3.1)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"feilong","Date":"2017-11-14T04:41:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThank you very mach!I have changed the _lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_babylon.js to the latest version.and it works well._lt_/span_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]