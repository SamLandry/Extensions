[{"Owner":"ian","Date":"2018-03-16T06:30:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_function getDeltaTime() { \n   return scene.getLastFrameDuration() / 1000_sm_ \n\n}\n\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_How can I get same function with EngineInstrumentation? I am playing around instrumentation._lt_br /_gt_\n\tCan any body help me getDeltaTime? getLastFrameDuration is not working anymore._lt_/strong_gt__lt_br /_gt_\n\tWhich counter can get me solve getDeltaTime like code above?_lt_br /_gt_\n\tAny help hint?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/optimizing_your_scene#instrumentation_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/optimizing_your_scene#instrumentation_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function instrumentFun() {\n            //console.log(instrumentation.gpuFrameTimeCounter.current)_sm_\n            //console.log(instrumentation.gpuFrameTimeCounter.average)_sm_\n            \n            //console.log(instrumentation.gpuFrameTimeCounter.average)_sm_\n            \n            console.log( _qt_current frame time (GPU)_dd_ _qt_ + (instrumentation.gpuFrameTimeCounter.current * 0.000001).toFixed(2) + _qt_ms_qt_ )_sm_\n            console.log( _qt_average frame time (GPU)_dd_ _qt_ + (instrumentation.gpuFrameTimeCounter.average * 0.000001).toFixed(2) + _qt_ms_qt_ )_sm_\n            console.log( _qt_total shader compilation time_dd_ _qt_ + (instrumentation.shaderCompilationTimeCounter.total).toFixed(2) + _qt_ms_qt_ )_sm_\n            console.log( _qt_average shader compilation time_dd_ _qt_ + (instrumentation.shaderCompilationTimeCounter.average).toFixed(2) + _qt_ms_qt_ )_sm_\n            console.log( _qt_compiler shaders count_dd_ _qt_ + instrumentation.shaderCompilationTimeCounter.count )_sm_\n            \n        }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am useing chrome (with debian) And I get _qt_current frame time (GPU)_qt_ and _qt_average frame time (GPU)_qt_  0._lt_br /_gt_\n\tI always get _lt_br /_gt_\n\tcurrent frame time (GPU)_dd_ 0.00ms_lt_br /_gt_\n\taverage frame time (GPU)_dd_ 0.00ms_lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_strong_gt_Should I get also CPU time anyhow? Should I get also CPU frame time?_lt_br /_gt_\n\tCan anybody help me code getDeltaTime function with instrumentations counters?_lt_/strong_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tI test chrome with _lt_a href_eq__qt_http_dd_//webglreport.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//webglreport.com/_lt_/a_gt_ and I get_lt_br /_gt_\n\tWebGL 1_lt_br /_gt_\n\tPlatform_dd_    Linux x86_64_lt_br /_gt_\n\tBrowser User Agent_dd_    Mozilla/5.0 (X11_sm_ Linux x86_64) AppleWebKit/537.36 (KHTML_co_ like Gecko) Chrome/65.0.3325.162 Safari/537.36_lt_br /_gt_\n\tContext Name_dd_    webgl_lt_br /_gt_\n\tGL Version_dd_    WebGL 1.0 (OpenGL ES 2.0 Chromium)_lt_br /_gt_\n\tShading Language Version_dd_    WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)_lt_br /_gt_\n\tVendor_dd_    WebKit_lt_br /_gt_\n\tRenderer_dd_    WebKit WebGL_lt_br /_gt_\n\tUnmasked Vendor_dd_    Intel Open Source Technology Center_lt_br /_gt_\n\tUnmasked Renderer_dd_    Mesa DRI Intel(R) Sandybridge Desktop_lt_br /_gt_\n\tAntialiasing_dd_    Available_lt_br /_gt_\n\tANGLE_dd_    No_lt_br /_gt_\n\tMajor Performance Caveat_dd_    No_lt_br /_gt_\n\tVertex Shader_lt_br /_gt_\n\tMax Vertex Attributes_dd_    16_lt_br /_gt_\n\tMax Vertex Uniform Vectors_dd_    4096_lt_br /_gt_\n\tMax Vertex Texture Image Units_dd_    16_lt_br /_gt_\n\tMax Varying Vectors_dd_    32_lt_br /_gt_\n\tBest float precision_dd_    [-2127_co_ 2127] (23)_lt_br /_gt_\n\tTransform Feedback_lt_br /_gt_\n\tComing in WebGL 2_lt_br /_gt_\n\tRasterizer_lt_br /_gt_\n\tAliased Line Width Range_dd_    [1_co_ 7.375]_lt_br /_gt_\n\tAliased Point Size Range_dd_    [1_co_ 255]_lt_br /_gt_\n\tFragment Shader_lt_br /_gt_\n\tMax Fragment Uniform Vectors_dd_    4096_lt_br /_gt_\n\tMax Texture Image Units_dd_    16_lt_br /_gt_\n\tfloat/int precision_dd_    highp/highp_lt_br /_gt_\n\tBest float precision_dd_    [-2127_co_ 2127] (23)_lt_br /_gt_\n\tFramebuffer_lt_br /_gt_\n\tMax Color Buffers_dd_    8_lt_br /_gt_\n\tRGBA Bits_dd_    [8_co_ 8_co_ 8_co_ 8]_lt_br /_gt_\n\tDepth / Stencil Bits_dd_    [24_co_ 8]_lt_br /_gt_\n\tMax Render Buffer Size_dd_    8192_lt_br /_gt_\n\tMax Viewport Dimensions_dd_    [8192_co_ 8192]_lt_br /_gt_\n\tTextures_lt_br /_gt_\n\tMax Texture Size_dd_    8192_lt_br /_gt_\n\tMax Cube Map Texture Size_dd_    8192_lt_br /_gt_\n\tMax Combined Texture Image Units_dd_    48_lt_br /_gt_\n\tMax Anisotropy_dd_    16_lt_br /_gt_\n\tUniform Buffers_lt_br /_gt_\n\tComing in WebGL 2_lt_br /_gt_\n\tSupported Extensions_dd_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-03-16T08:06:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17776_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/_qt_ rel_eq__qt__qt__gt_@ian_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t think you should use instrumentation at runTime in a production environment_co_ if all you need is deltaTime_co_ too much unneeded measuring etc going on._lt_br /_gt_\n\t_lt_br /_gt_\n\tThis will calculate the deltaTime from the start of last render and to the start of current/this render_co_ \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var deltaTime _eq_ null_sm_\nvar lastUpdate _eq_ null_sm_\nfunction updateDelta(){\n    // Get timestamp in MS.\n    var now _eq_ +new Date()_sm_\n\n    if(!lastUpdate){\n        lastUpdate _eq_ now_sm_\n    }\n\n    // Update deltaTime variable.\n    deltaTime _eq_ now - lastUpdate_sm_\n\n    // Update lastUpdate to being now.\n    lastUpdate _eq_ now_sm_\n\n     // return it incase the function is used as a _qt_variable_qt_.\n    return deltaTime_sm_\n}\n\n// Using it..\nscene.registerBeforeRender(function(){\n// as Variable_co_ after calling the function.\n    updateDelta()_sm_\n    console.log(deltaTime)_sm_\n    myUiText.text _eq_ deltaTime.toString()_sm_\n\n// as Function directly_co_ if you only use it once.\n    myUiText.text _eq_ updateDelta().toString()_sm_\n\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%23452_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#452_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-03-16T10:51:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17776_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17776-ian/_qt_ rel_eq__qt__qt__gt_@ian_lt_/a_gt_ _lt_br /_gt_\n\tI just notised that \n_lt_/p_gt_\n\n_lt_p_gt_\n\tengine.getDeltaTime()_lt_br /_gt_\n\t_lt_br /_gt_\n\tappears to work flawlessly in the latest versions (including stable)_co__lt_br /_gt_\n\tI wrote the above code a few versions ago where it(engine.getDeltaTime()) was giving me some issues. and i also needed the full timestamp._lt_br /_gt_\n\tBut it seems you can just use that instead _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2018-03-16T14:28:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthank you aWerdo your previous answare works also fine._lt_br /_gt_\n\tI_t_ll try tomorrow with engine.getDeltaTime on the latest babylon.js engine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know if babylon did fix this problem_co_ so we will not nedd deltatime anymore._lt_br /_gt_\n\tThe problem is if same things is running on PS (faster gpu)  or phone/tablet (slowest gpu) ???\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know if rendering and physics works with same speed regardless of hardware (cpu_co_gpu) speed ???_lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__lt_br /_gt_\n\tIs there any playground example to test/see this?_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tgreetings\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-16T18:12:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWe have several demo of physics. Just look in the PG search for _qt_enablePhysics_qt__dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground?code_eq_enablePhysics_qt_ ipsnoembed_eq__qt_false_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/playground?code_eq_enablePhysics_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]