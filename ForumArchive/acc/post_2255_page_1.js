[{"Owner":"Temechon","Date":"2013-11-21T17:36:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a problem when I try to use the water shader created in the sample _qt__lt_strong_gt_WorldMonger_lt_/strong_gt__qt_. Here is my code _dd_ _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_        var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_        var scene_sm_        // Resize        window.addEventListener(_qt_resize_qt__co_ function () {            engine.resize()_sm_        })_sm_        scene _eq_ new BABYLON.Scene(engine)_sm_        var camera _eq_ new BABYLON.FreeCamera(_qt_cam_qt__co_ new BABYLON.Vector3(0_co_10_co_-10)_co_ scene)_sm_        var light0 _eq_ new BABYLON.PointLight(_qt_light0_qt__co_new BABYLON.Vector3(0_co_10_co_-10)_co_ scene )_sm_        // Skybox        var skybox _eq_ BABYLON.Mesh.CreateBox(_qt_skyBox_qt__co_ 1000.0_co_ scene)_sm_        var skyboxMaterial _eq_ new BABYLON.StandardMaterial(_qt_skyBox_qt__co_ scene)_sm_        skyboxMaterial.backFaceCulling _eq_ false_sm_        skyboxMaterial.reflectionTexture _eq_ new BABYLON.CubeTexture(_qt_skybox/skybox_qt__co_ scene)_sm_        skyboxMaterial.reflectionTexture.coordinatesMode _eq_ BABYLON.Texture.SKYBOX_MODE_sm_        skyboxMaterial.diffuseColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_        skyboxMaterial.specularColor _eq_ new BABYLON.Color3(0_co_ 0_co_ 0)_sm_        skybox.material _eq_ skyboxMaterial_sm_        var extraGround _eq_ BABYLON.Mesh.CreateGround(_qt_extraGround_qt__co_ 1000_co_ 1000_co_ 1_co_ scene_co_ false)_sm_        var waterMaterial _eq_ new WaterMaterial(_qt_waterMat_qt__co_ scene_co_ light0)_sm_        waterMaterial.reflectionTexture.renderList.push(skybox)_sm_        extraGround.material _eq_ waterMaterial_sm_        scene.activeCamera.attachControl(canvas)_sm__lt_/pre_gt__lt_p_gt_When i do this_co_ the water is correctly applied._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However_co_ the skybox is not displayed anymore. The skybox is only displayed when my camera is under the water plane. _lt_/p_gt__lt_p_gt_What is this sorcery ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you for your help._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-21T17:44:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Could you try with the babylon.js available on the root of _lt_a href_eq__qt_http_dd_//www.babylonjs.com_qt_ rel_eq__qt_external nofollow_qt__gt_www.babylonjs.com_lt_/a_gt_?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2013-11-22T07:31:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Same issue with the babylon.js at the root of the website... _lt_a href_eq__qt_http_dd_//imgur.com/a/nM8BW_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//imgur.com/a/nM8BW_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edit _dd_ I have several error in my console _dd_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_12px_sm_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm__qt__gt_WebGL_dd_ drawElements_dd_ texture bound to texture unit 1 is not renderable. It maybe non-power-of-2 and have incompatible texture filtering or is not _t_texture complete_t_. Or the texture is Float or Half Float type with linear filtering while OES_float_linear or OES_half_float_linear extension is not enabled._lt_/span_gt__lt_span style_eq__qt_font-size_dd_12px_sm_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm__qt__gt_ _lt_/span_gt__lt_/p_gt__lt_div style_eq__qt_margin-left_dd_24px_sm_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm_font-size_dd_12px_sm__qt__gt__lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt__lt_a href_eq__qt_http_dd_//localhost_dd_63342/MUSEUM/js/babylon.1.6.0.js_qt_ title_eq__qt_http_dd_//localhost_dd_63342/MUSEUM/js/babylon.1.6.0.js_dd_1818_qt_ rel_eq__qt_external nofollow_qt__gt_babylon.1.6.0.js_dd_1818_lt_/a_gt__lt_/span_gt__lt_/div_gt__lt_div style_eq__qt_margin-left_dd_24px_sm_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm_font-size_dd_12px_sm__qt__gt__lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt__lt_span_gt_GL_INVALID_ENUM _dd_ glActiveTexture_dd_ texture was GL_LINES_lt_/span_gt_ _lt_a href_eq__qt_http_dd_//localhost_dd_63342/MUSEUM/js/babylon.1.6.0.js_qt_ title_eq__qt_http_dd_//localhost_dd_63342/MUSEUM/js/babylon.1.6.0.js_dd_1818_qt_ rel_eq__qt_external nofollow_qt__gt_babylon.1.6.0.js_dd_1818_lt_/a_gt__lt_/span_gt__lt_/div_gt__lt_div style_eq__qt_margin-left_dd_24px_sm_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm_font-size_dd_12px_sm__qt__gt__lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt__lt_span_gt_WebGL_dd_ drawElements_dd_ texture bound to texture unit 1 is not renderable. It maybe non-power-of-2 and have incompatible texture filtering or is not _t_texture complete_t_. Or the texture is Float or Half Float type with linear filtering while OES_float_linear or OES_half_float_linear extension is not enabled._lt_/span_gt_ _lt_a href_eq__qt_http_dd_//localhost_dd_63342/MUSEUM/js/babylon.1.6.0.js_qt_ title_eq__qt_http_dd_//localhost_dd_63342/MUSEUM/js/babylon.1.6.0.js_dd_1818_qt_ rel_eq__qt_external nofollow_qt__gt_babylon.1.6.0.js_dd_1818_lt_/a_gt__lt_/span_gt__lt_/div_gt__lt_div style_eq__qt_margin-left_dd_24px_sm_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm_font-size_dd_12px_sm__qt__gt__lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt__lt_span_gt_GL_INVALID_ENUM _dd_ glActiveTexture_dd_ texture was GL_FALSE_lt_/span_gt_ _lt_a href_eq__qt_http_dd_//localhost_dd_63342/MUSEUM/js/babylon.1.6.0.js_qt_ title_eq__qt_http_dd_//localhost_dd_63342/MUSEUM/js/babylon.1.6.0.js_dd_1818_qt_ rel_eq__qt_external nofollow_qt__gt_babylon.1.6.0.js_dd_1818_lt_/a_gt__lt_/span_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_div style_eq__qt_margin-left_dd_24px_sm_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm_font-size_dd_12px_sm__qt__gt__lt_span style_eq__qt_font-size_dd_12px_sm__qt__gt__lt_span_gt_GL_INVALID_ENUM _dd_ glActiveTexture_dd_ texture was GL_LINES_lt_/span_gt_ _lt_/span_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The line 1818 in babylon is the following _dd_ _lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.Engine.prototype.draw _eq_ function (useTriangles_co_ indexStart_co_ indexCount) {this._gl.drawElements(useTriangles ? this._gl.TRIANGLES _dd_ this._gl.LINES_co_ indexCount_co_ this._gl.UNSIGNED_SHORT_co_ indexStart * 2)_sm_}_sm__lt_/pre_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-22T21:19:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_could you share the vs project?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2013-11-22T22:06:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It_t_s not a visual studio project_co_ but here we are _dd_ _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/17799537/TEME_TEST_SHADERS.zip_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//dl.dropboxusercontent.com/u/17799537/TEME_TEST_SHADERS.zip_lt_/a_gt__lt_/p_gt__lt_p_gt_It_t_s a simple html page with js_co_ css folders._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you for your help !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-11-23T13:14:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok this is linked to an issue we have when there is no item inside the refractionTexture._lt_/p_gt__lt_p_gt_Here is a fixed version for you_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/babylon.zip_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/babylon.zip_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2013-11-23T13:28:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Awwww yeah !! Thank you very much_co_ I_t_m going to try this right now !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Edit _dd_ And it_t_s working !! Thanks !_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]