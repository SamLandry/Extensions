[{"Owner":"ShiftedClock","Date":"2018-08-01T01:10:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI initialize an ActionManager and register an Action with it_co_ using the OnKeyDownTrigger_co_ like so_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.actionManager _eq_ new BABYLON.ActionManager(scene)_sm_\nscene.actionManager.registerAction(\n    new BABYLON.ExecuteCodeAction(\n        {\n            trigger_dd_ BABYLON.ActionManager.OnKeyDownTrigger_co_\n            parameter_dd_ _qt_y_qt_\n        }_co_\n        function () {\n            console.log(_qt_y button pressed_qt_)_sm_\n        }\n))_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tBut when I press the _qt_y_qt_ key on my keyboard nothing is logged to the console. I_t_ve tried with many others keys_co_ in both Firefox and Chrome_co_ after turning off all plugins. Typescript is throwing no errors.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tChanging the trigger to BABYLON.ActionManager.OnEveryFrameTrigger works as expected_co_ logging to console every frame. Changing it back to the _qt_triggerOptions_qt_ object above makes it non-functioning again.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also tried setting up an actionManager on a Mesh in the scene_co_ and registering the Action with that_co_ which didn_t_t work either. (Although OnPickTrigger on the mesh works fine.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAm I using the correct format for the triggerOptions object?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tShould I not be instantiating the ActionManager directly on to the scene.actionManager property? (Although it works with OnEveryFrameTrigger.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis code is nearly a copy-paste from the last code block under the _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/how_to_use_actions#triggers_qt_ rel_eq__qt_external nofollow_qt__gt_Triggers section _lt_/a_gt_of _qt_How to Use Actions_qt_. I can see the scene.actionManager object when I log it to console_co_ with the action on it_co_ it just isn_t_t firing in response to pressing the y button.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m learning a lot about using Actions in Babylon_co_ I just can_t_t get keyboard inputs/actions to work. Thank you for any help_co_ this is really getting to me!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-08-01T01:47:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi SV!  Welcome to the forum.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#15EY4F%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#15EY4F#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRemember that you need to click on the canvas before the _qt_y_qt_ listener goes active.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI cheated and used a canvas.focus() call in line 7.  Works for me... I see _t_y_t_ keypresses at the console.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBe sure to check-out _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#15EY4F%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#15EY4F#2_lt_/a_gt_ as well.  It doesn_t_t work perfectly_co_ but it has an interesting keypress listener... might be worth playing-with.  \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ShiftedClock","Date":"2018-08-01T06:49:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for putting that Playground example together Wingnut. It_t_s working for me_co_ but my local Typescript implementation is still not working.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing window.addEventListener for the Action works fine_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let yPress _eq_ new BABYLON.ExecuteCodeAction(\n    {\n        trigger_dd_ BABYLON.ActionManager.OnKeyDownTrigger_co_\n        parameter_dd_ _qt_y_qt_\n    }_co_\n    () _eq_&gt_sm_ {\n        console.log(_qt_y pressed_qt_)_sm_\n    }\n)\n\nwindow.addEventListener(_qt_keypress_qt__co_ (event) _eq_&gt_sm_ {\n    if (event.key _eq__eq__eq_ _qt_y_qt_) {\n        yPress.execute()_sm_\n    {\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThat works. But doing this still does nothing_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.actionManager _eq_ new BABYLON.ActionManager(scene)_sm_\nscene.actionManager.registerAction(yPress)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t Yet the actionManager calls ExecuteCodeActions for OnEveryFrameTrigger (the other Scene Trigger type)_co_ as expected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m totally at a loss for why this is happening. It must be something about my development environment. I cleared my cache_co_ turned off all browser plugins_co_ tried two browsers_co_ restarted my computer. Next_co_ I might try hopping around on one foot and reciting Monty Python_co_ just to see if it helps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tUsing window event listeners will work_co_ just a bit sad I can_t_t get the ActionManager to work with keyboard events.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again for the help. If anyone has any ideas about where the problem could be_co_ it would be much appreciated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-01T15:28:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor keyboard event to work you have to make sure that canvas.tabIndex _eq_ 1 (in order to have it receive the events)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheck with F12 object inspector in your browser to make sure that the canvas can receive keyboard events\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ShiftedClock","Date":"2018-08-03T01:55:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAlright_co_ I figured out the problem. This has been one of the most intense multi-day debug sessions I_t_ve had in years.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAfter littering babylon.max.js with console.log statements_co_ I narrowed it down to the fact that Engine._onCanvasFocus wasn_t_t firing_co_ while manually adding an event listener to the canvas focus event worked fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen I noticed_co_ that code was wrapped in a check for canvasOrContext.getContext. Ding ding ding. Winner winner_co_ chicken dinner_co_ as the kids say.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe problem was with this part of my code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_let canvas _eq_ &lt_sm_HTMLCanvasElement&gt_sm_ document.getElementById(_qt_canvas2_qt_)_sm_\nlet gl _eq_ &lt_sm_WebGLRenderingContext&gt_sm_ canvas.getContext(_qt_webgl_qt_)_sm_\nlet engine _eq_ new BABYLON.Engine(gl_co_ true_co_ {_qt_preserveDrawingBuffer_qt__dd_ true})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI had assumed that since the _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/api/classes/babylon.engine#constructor_qt_ rel_eq__qt_external nofollow_qt__gt_Engine_t_s constructor_lt_/a_gt_ took either a canvas or a context_co_ that it would work fine with either.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut WebGLRenderingContext doesn_t_t have a .getContext property!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not sure if this is intended behavior_co_ but the result is that the check for canvasOrContext.getContext silently fails (babylon.max.js line 11393_co_ sorry_co_ don_t_t have the typescript line number).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSince that fails_co_ much of the following option and Observable setup fails. The else part of _qt_if (canvasOrContext.getContext)_qt_ is simply missing all of the setup code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ I think I discovered a bug in the engine? Or at least unintended behavior. I don_t_t have the time or inclination to make the fixes and submit a pull request (this is my first week with Babylon afterall)_co_ but I hope someone can.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor now I_t_ve switched back to passing canvas to the engine constructor_co_ and everything works as expected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSide note_dd_ Having Scene.attachControl and Camera.attachControl have the same method name_co_ while doing very different things_co_ was a source of confusion for me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ This may be intended behavior_co_ just undocumented. It_t_s very unintuitive that Observables aren_t_t properly setup when passing a WeblGLRenderingContext to Engine_co_ while HTMLCanvasElement works fine. The fact that you can_t_t addEventListener on WebGL contexts is probably the source of that difference.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA reasonable compromise would just be mentioning in the documentation that initializing Engine with a WebGlRenderingContext prevents (some?) Observables from being setup.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit2_dd_ Apparently you can get the _lt_a href_eq__qt_https_dd_//developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/canvas_qt_ rel_eq__qt_external nofollow_qt__gt_canvas from the context_lt_/a_gt__co_ so event listeners could still be setup_co_ so long as the canvas is not null.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-03T15:32:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWell this is expected actually _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_ if you provide a context_co_ this is a signal for babylon.js that there is already something working on the webgl context and we are a plugin (this is how the integration in PowerPoint works for instance)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo in this case_co_ the footprint is minimal as we do not own the canvas (so no event hooking etc..). i will mention that in the code comments\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks a lot for your feedback!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ShiftedClock","Date":"2018-08-03T18:32:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood to know_co_ thanks. Hopefully if/when someone runs into the same situation_co_ something is there to say _qt_Observables are not registered when using a WebGLRenderingContext._qt_ Either in documentation_co_ code comments_co_ or console warnings. Anything but failing silently with no indication as to why the Observables aren_t_t being set up.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-08-03T20:45:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI updated the code comments to follow your idea_dd_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]