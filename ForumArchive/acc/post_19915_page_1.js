[{"Owner":"Ingo Chou","Date":"2016-01-17T05:08:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow to serialize a scene ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy scene is modified by the code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to serialize my scene and save the JSON file for next time loading.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI use this code _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_/p_gt__lt_pre class_eq__qt_ipsCode_qt__gt_var jsFile _eq_ BABYLON.SceneSerializer.Serialize(myScene)_sm__lt_/pre_gt__lt_pre_gt_\n_lt_/pre_gt_\n\n_lt_p_gt_\n\tbut it does not work. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your reply and help.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-01-17T07:49:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat exactly is not working ? Did you try to use _dd_\n_lt_/p_gt_\n\n_lt_pre class_eq__qt_ipsCode prettyprint lang-javascript prettyprinted_qt__gt_\n_lt_span_gt_var_lt_/span_gt__lt_span_gt_ strScene _lt_/span_gt__lt_span_gt__eq__lt_/span_gt__lt_span_gt_ JSON_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_stringify_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_serializedScene_lt_/span_gt__lt_span_gt_)_sm__lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tin order to save your json file ?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you show us an example where your problem appears?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ingo Chou","Date":"2016-01-17T09:40:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe following is my code_co_ and I make sure _t_myScene_t_ is my scene object. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_/p_gt__lt_pre class_eq__qt_ipsCode_qt__gt_var saveToJS _eq_ function () {_lt_br_gt_\n\t        var jsFile _eq_ BABYLON.SceneSerializer.Serialize(myScene)_sm_   //alert(_t_ok_t_)_lt_br_gt_\n\t        var js _eq_ JSON.stringify(jsFile)_sm__lt_br_gt_\n\t        return js_sm__lt_br_gt_\n\t    }_lt_/pre_gt__lt_pre_gt_\n_lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI cannot get the results of the serialize function.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe website will crash when call this function_dd_\n_lt_/p_gt_\n\n_lt_pre class_eq__qt_ipsCode_qt_ style_eq__qt_font-family_dd_monospace_co_ monospace_sm_font-size_dd_14px_sm_clear_dd_both_sm_white-space_dd_pre-wrap_sm_padding_dd_15px_sm_border-width_dd_0px 0px 0px 4px_sm_border-left-style_dd_solid_sm_border-left-color_dd_rgb(224_co_224_co_224)_sm_color_dd_rgb(39_co_42_co_52)_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_word-spacing_dd_0px_sm_background_dd_rgb(250_co_250_co_250)_sm__qt__gt_\nvar jsFile _eq_ BABYLON.SceneSerializer.Serialize(myScene)_sm__lt_/pre_gt_\n\n_lt_p_gt_\n\tThe alert(_t_ok_t_) function in my code is not called.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDebug result is_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlocate_dd_   ambientColor.asArray() in function Serialize()\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdesc_dd_   JavaScript runtime error_dd_ Unable to get property _t_asArray_t_ of undefined or null reference\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMust I set the ambient color for every object? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just added several meshes and  lines.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt can serialize if the scene is empty.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-01-17T12:45:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI guess the error is in your variable _qt_myScene_qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTry (Maybe this will help) _dd_\n_lt_/p_gt_\n\n_lt_pre class_eq__qt_ipsCode prettyprint lang-javascript prettyprinted_qt__gt_\n_lt_span_gt_var_lt_/span_gt__lt_span_gt_ js _lt_/span_gt__lt_span_gt__eq__lt_/span_gt__lt_span_gt_ JSON_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_stringify_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_jsFile_lt_/span_gt__lt_span_gt_)_sm__lt_/span_gt__lt_span_gt_\njs _lt_/span_gt__lt_span_gt__eq__lt_/span_gt__lt_span_gt_ encodeURIComponent_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_js_lt_/span_gt__lt_span_gt_)_sm__lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-01-17T18:23:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe problem seems to be in your code... Did you set an ambient color for the scene? Are you sure you set a Color3? Can you show us your code ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ChrisR","Date":"2016-01-17T19:12:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI had this similar error a while back in serializing a scene. I had to modify the babylonjs code to put checks in to not serialize parts of materials that weren_t_t there. However in the latest version of babylon this is fixed. Try using one of these babylonjs files to see if it fixes the problem\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/dist/preview release_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Ingo Chou","Date":"2016-01-18T13:40:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_\n\t_lt_div_gt_\n\t\t_lt_div_gt_\n\t\t\t_lt_div_gt_\n\t\t\t\tHello_co_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t \n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\tThanks for all the replies.\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t_lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_The scene can be serialized after I updated to the latest version._lt_/span_gt_\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t \n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\tThanks.\n\t\t\t_lt_/div_gt_\n\n\t\t\t_lt_div_gt_\n\t\t\t\t \n\t\t\t_lt_/div_gt_\n\t\t_lt_/div_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]