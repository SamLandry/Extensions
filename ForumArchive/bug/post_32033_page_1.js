[{"Owner":"Gijs","Date":"2017-07-30T10:55:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOn Firefox the camera stops rotating when your pointer leaves the canvas_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhich doesn_t_t happen on Edge_co_ IE_co_ Chrome or Opera\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-07-30T18:04:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI suppose this is how each vendor wants to implement the security in his browser _dd_ can the active browser window still read the pointer events (and coordinates) when this one_t_s outside it ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlthough I like Chrome as a Linux user_co_ because it_t_s the fastest browser for WebGL on this platform_co_ I_t_m not sure that I prefer that it can still access the pointer events when it_t_s outside the window ...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gijs","Date":"2017-07-30T18:48:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNever mind_co_ I found the solution after all_dd_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed4239095370_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/5121-keep-moving-with-mouse-outside-canvas/?do_eq_embed_qt_ style_eq__qt_height_dd_208px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_pre_gt_\n_lt_code_gt_canvas.addEventListener(_t_mousedown_t__co_ function(event){\n    event.target.setCapture()_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThanks for your input @jerome\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe events are only still received when you keep holding down the mouse button as you move outside the canvas\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ apparently it_t_s not a cross-browser thing_co_ so you can_t_t use the snippet above like that\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]