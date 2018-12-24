[{"Owner":"mwpowellhtx","Date":"2016-05-04T21:58:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am working on implementing drag and drop in my scene. I have a sphere being created successfully. But when I click on it (mouse down)_co_ I do not get the expected drag behavior.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am basically working from the _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/?18_qt_ rel_eq__qt_external nofollow_qt__gt_example_lt_/a_gt_ and I can even reproduce the example in an _qt_in situ_qt_ text fixture (i.e. Visual Studio hosted standalone HTML page). Both work equally well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNext_co_ I want to connect the drag and drop stuff with a jQuery _qt_scene_dd_created_qt_ trigger. This is potentially where things fall over. I do not get the pointer down event_co_ for starters_co_ that I think I should be getting.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have verified that the trigger is indeed happening. Here is my on trigger event handler_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var sceneCreatedDragAndDropHandler _eq_ function(e_co_ args) {\n\n    var startingPos _eq_ null_sm_\n    var currentMesh _eq_ null_sm_\n\n    var s _eq_ args._scene_sm_\n    var c _eq_ args._canvas_sm_\n    var camera _eq_ s.getCameraByName(_qt_arc1_qt_)_sm_\n\n    var getGroundPosition _eq_ function() {\n\n        /* use a predicate to get position on the ground */\n        var pi _eq_ s.pick(s.pointerX_co_\n            s.pointerY_co_\n            function(m) {\n                return !(/^role-/.test(m.name))_sm_\n            })_sm_\n\n        return pi.hit ? pi.pickedPoint _dd_ null_sm_\n    }\n\n    var onPointerDown _eq_ function(event) {\n\n        if (event.button !_eq__eq_ 0) {\n            return_sm_\n        }\n\n        /* check if we are under a mesh */\n        var pi _eq_ s.pick(s.pointerX_co_\n            s.pointerY_co_\n            function(m) {\n                return /^role-/.test(m.name)_sm_\n            })_sm_\n\n        if (pi.hit) {\n\n            currentMesh _eq_ pi.pickedMesh_sm_\n            startingPos _eq_ getGroundPosition()_sm_\n\n            if (startingPos) {\n                /* we need to disconnect camera from canvas */\n                setTimeout(function() { camera.detachControl(c)_sm_ }_co_ 0)_sm_\n            }\n        }\n    }\n\n    var onPointerUp _eq_ function() {\n\n        if (startingPos) {\n            camera.attachControl(c_co_ true)_sm_\n            startingPos _eq_ null_sm_\n        }\n    }\n\n    var onPointerMove _eq_ function() {\n\n        if (!startingPos) {\n            return_sm_\n        }\n\n        var currentPos _eq_ getGroundPosition()_sm_\n\n        if (!currentPos) {\n            return_sm_\n        }\n\n        var deltaPos _eq_ currentPos.subtract(startingPos)_sm_\n        currentMesh.position.addInPlace(deltaPos)_sm_\n\n        startingPos _eq_ currentPos_sm_\n    }\n\n    c.addEventListener(_qt_pointerdown_qt__co_ onPointerDown_co_ false)_sm_\n    c.addEventListener(_qt_pointerup_qt__co_ onPointerUp_co_ false)_sm_\n    c.addEventListener(_qt_pointermove_qt__co_ onPointerMove_co_ false)_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI have confirmed all the other bits are working. Canvas_co_ scene_co_ etc_co_ are all rendering okay.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe only thing I can figure is that somehow the scope is an issue_co_ even though I am capturing the handler in a global variable_co_ and that the JavaScript GC is collecting the guts of it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf that_t_s the case and it_t_s a GC issue_co_ I wonder what the best way to capture which elements would be. Things like the event handlers_co_ positions_co_ etc_co_ off the cuff.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSuggestions?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-05-04T22:31:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThere_t_s probably something more obvious I am missing cos I am too tired to read properly now_co_ but things to try_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Make sure you have pep.js imported in the HTML and bind to its events. It handles all the drag and drop nicely.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Try adding the event listeners to the window instead of the canvas.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mwpowellhtx","Date":"2016-05-04T22:55:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPerhaps I am the one that is missing something. Pep? This is jQuery_co_ correct? What does that add that the example isn_t_t already doing?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is odd that _qt_pointerdown_qt__co_ etc_co_ is showing cannot resolve_co_ so perhaps there is something to that_co_ at least to pick up the reference.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever_co_ in my HTML working boilerplate_co_ I am not including anything differently than the example_co_ yet the boilerplate works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOther than that_co_ tried the window thing_co_ and no change.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mwpowellhtx","Date":"2016-05-05T00:18:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOKAY!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I wondered what else I was missing_co_ and it was the _lt_a href_eq__qt_https_dd_//code.jquery.com/pep/0.3.0/pep.js_qt_ rel_eq__qt_external nofollow_qt__gt_pep_lt_/a_gt_ script_co_ which apparently got included auto-magically when I pasted code into my HTML test fixture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI like capturing the handlers and properties in a self-contained custom object_co_ but all that is secondary to just including the pep script(s) in my jQuery bundles.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-05-05T08:30:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThe playground imports Babylon and all its deps behind the scenes.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mwpowellhtx","Date":"2016-05-05T21:50:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_127390_qt_ data-ipsquote-contentid_eq__qt_22361_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1462437032_qt_ data-ipsquote-userid_eq__qt_17567_qt_ data-ipsquote-username_eq__qt_Dal_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t13 hours ago_co_ Dal said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThe playground imports Babylon and all its deps behind the scenes.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI see. Thank you. I spent a little time today packaging PEP for nuget. The guys at jquery probably aren_t_t too happy about that_co_ but I gave them first notice to pick it up or not (which they didn_t_t). Anyhow_co_ find it under jQuery.PEPJS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor the most part it works great. There are a couple of _qt_quirks_qt__co_ like the fact that it seems the scroll wheel now applies for the whole page_co_ not just the canvas when the mouse over happens. Other than that_co_ I can click on a mesh and _qt_select_qt_ it_co_ drag it around_co_ and coordinate it with data in other parts of the JS environment. Good stuff.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again for the tips!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mwpowellhtx","Date":"2016-05-06T23:34:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_127365_qt_ data-ipsquote-contentid_eq__qt_22361_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1462401079_qt_ data-ipsquote-userid_eq__qt_17567_qt_ data-ipsquote-username_eq__qt_Dal_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 5/4/2016 at 6_dd_31 PM_co_ Dal said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThere_t_s probably something more obvious I am missing cos I am too tired to read properly now_co_ but things to try_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t- Make sure you have pep.js imported in the HTML and bind to its events. It handles all the drag and drop nicely.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t- Try adding the event listeners to the window instead of the canvas.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/17567-dal/?do_eq_hovercard_qt_ data-mentionid_eq__qt_17567_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/17567-dal/_qt_ rel_eq__qt__qt__gt_@Dal_lt_/a_gt_ This sounds like a stupid question_co_ but do you have a simple playground example? For example I want to do something like this?\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_$(myMesh).pep({ grid_dd_ [16_co_ 16]_co_ shouldEase_dd_ true })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIf I can just do that_co_ and somehow respond to the events_co_ that would be better than the _qt_manual_qt_ methods_co_ even though they_t_re _qt_working_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ll have a look around the repository as well to see if I can piece anything together from there.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dal","Date":"2016-05-07T06:22:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s beyond my level of knowledge of pep I_t_m afraid_co_ but it looks like you are thinking in 2d and trying to move DOM elements around... pep is needed to bind Babylon to the input events but beyond that you should handle everything else using the Babylon API and the 3D canvas. If you want to lay things out in a grid then create meshes and set their positions. If you want them to ease in_co_ then move them a little bit each frame in the render loop.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]