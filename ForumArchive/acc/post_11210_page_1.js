[{"Owner":"giertych97","Date":"2014-12-20T22:40:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ I_t_m new in babylon.js (and the others 3d frameworks). A moment ago I exported scene from *.obj to *.babylon. Now I_t_m trying to load it_co_ but im getting error_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_TypeError_dd_ a is undefined_lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_ [babylon.min.js_dd_2]_lt_/span_gt__lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My simple code_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_    if (BABYLON.Engine.isSupported()) {        var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm_        var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm_        BABYLON.SceneLoader.Load(_qt__qt__co_ _qt_/~patrol/objects/maps/city/scene.babylon_qt__co_ engine_co_ function (newScene) {            // Wait for textures and shaders to be ready            newScene.executeWhenReady(function () {                // Attach camera to canvas inputs                newScene.activeCamera.attachControl(canvas)_sm_                // Once the scene is loaded_co_ just register a render loop to render it                engine.runRenderLoop(function() {                    newScene.render()_sm_                })_sm_            })_sm_        }_co_ function (progress) {            // To do_dd_ give progress feedback to user        })_sm_    }_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Carlos R","Date":"2014-12-21T17:16:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi @giertych97_co_ can you share us your ._lt_span_gt_babylon_lt_/span_gt_ scene? or in order to get a quick look we need a repro case in the playground_co_ can you share it?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-12-21T17:31:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Your error is on this line_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_Bad _eq_ &gt_sm_ BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm__qt__gt_SceneLoader_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm__qt__gt_Load_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_136_co_0)_sm__qt__gt__qt__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_136_co_0)_sm__qt__gt__qt_/~patrol/objects/maps/city/scene.babylon_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ engine_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_function_lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span_gt_newScene_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)_lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_{_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The path should be in the first argument _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span_gt_Good _eq_&gt_sm_ BABYLON_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm__qt__gt_SceneLoader_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_._lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_0_co_102)_sm__qt__gt_Load_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_136_co_0)_sm__qt__gt__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_136_co_0)_sm__qt__gt_/~patrol/objects/maps/city/_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_136_co_0)_sm__qt__gt__qt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_136_co_0)_sm__qt__gt__qt_scene.babylon_qt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ engine_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(0_co_0_co_136)_sm__qt__gt_function_lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_(_lt_/span_gt__lt_span_gt_newScene_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_)_lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(102_co_102_co_0)_sm__qt__gt_{_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2014-12-21T19:16:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_This usually happens to me when the babylon scene is missing needed information. If dad_t_s advice didn_t_t help_co_ paste your babylon scene file. My guess is that something is wrong there._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-12-21T19:28:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Couple of thoughts_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you are going to post about an error in Babylon.js_co_ do yourself a favor &amp_sm_ use the debug version.  Line 2 of babylon.min.js has probably hundreds of statements._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_SceneLoader_co_ is not a statement executed inside a tight loop_co_ so if having a _t_/_t_ is not valid inside the filename arg_co_ then performing argument validation should be done.  You can look at such things for a long time and not notice the issue._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]