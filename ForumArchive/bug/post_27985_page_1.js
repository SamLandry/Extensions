[{"Owner":"Dad72","Date":"2017-01-25T16:51:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI noticed on this PG on VR cameras that detachControl is not defined _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#IGIJC%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#IGIJC#3_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"eugenesia","Date":"2017-01-25T17:15:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe error I_t_m getting is _lt_span style_eq__qt_color_dd_rgb(185_co_74_co_72)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(242_co_222_co_222)_sm_float_dd_none_sm__qt__gt_Line 12_dd_44 - Cannot read property _t_detachControl_t_ of undefined_lt_/span_gt_ for the line \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_12 camera.inputs.attached.VRDeviceOrientation.detachControl(canvas)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIt seems to be due to the object _lt_em_gt_camera.inputs.attached_lt_/em_gt_ not having a property _lt_em_gt_VRDeviceOrientation ._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInstead of_dd_ _lt_em_gt_camera.inputs.attached._lt_strong_gt__lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_VRDeviceOrientation_lt_/span_gt__lt_/strong_gt__lt_/em_gt__lt_br /_gt_\n\tyou can try using_dd_ _lt_em_gt_camera.inputs.attached._lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_strong_gt_deviceOrientation_lt_/strong_gt__lt_/span_gt__lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat seems to make the error go away. Does this solution work for you?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-01-25T17:22:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt_t_s not my PG. I was researching the forum on VR cameras and I happened to fall on this PG and saw this error or the person said it worked.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo maybe there is a bug now or things change in the engine\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-01-26T16:26:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThings changed (I think this PG was done during beta phases)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-01-26T17:14:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOk\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]