[{"Owner":"abhivaidya","Date":"2017-01-14T06:20:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello community!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am using Atom and Brackets as my editors and want to get the intellisense and the auto-complete in JS_co_ working for Babylon in these editors. Any idea how can I do that?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRegards\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"HugoMcPhee","Date":"2017-02-21T08:22:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tfrom this post\n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/9933-new-playground-feature-intellisense-support/?do_eq_embed&amp_sm_comment_eq_84412&amp_sm_embedComment_eq_84412&amp_sm_embedDo_eq_findComment_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t1. Download _lt_span style_eq__qt_color_dd_rgb(82_co_82_co_82)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_13px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(252_co_252_co_252)_sm_float_dd_none_sm__qt__gt__lt_a href_eq__qt_http_dd_//hugos.site/babylonjs.json_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//hugos.site/babylonjs.json _lt_/a_gt__lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(82_co_82_co_82)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_13px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(252_co_252_co_252)_sm_float_dd_none_sm__qt__gt__lt_span_gt_ _lt_/span_gt__lt_/span_gt_ and put it in your project folder_lt_br /_gt_\n\t2. Get the atom plugin _qt_atom-ternjs_qt__lt_br /_gt_\n\t3. Make a file called _qt_.tern-project_qt_ in your project folder and add this\n_lt_/p_gt_\n\n_lt_div_gt_\n\t_lt_pre_gt_\n_lt_code_gt_{\n  _qt__lt_span_gt_ecmaVersion_lt_/span_gt__qt__dd_ _lt_span_gt__lt_span_gt_6_lt_/span_gt__lt_/span_gt__co_\n  _qt__lt_span_gt_libs_lt_/span_gt__qt__dd_ _lt_span_gt_[_lt_span_gt__qt_babylonjs_qt__lt_/span_gt_]\n_lt_/span_gt_}_lt_/code_gt__lt_/pre_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t4. Restart atom and It should give you hints if you start writing BABYLON._lt_br /_gt__lt_br /_gt_\n\tI personally use this _qt_.tern-project_qt_ file_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_{\n  _qt_ecmaVersion_qt__dd_ 6_co_\n  _qt_libs_qt__dd_ [\n    _qt_browser_qt__co_\n    _qt_babylonjs_qt_\n  ]_co_\n  _qt_loadEagerly_qt__dd_ [\n    _qt_path/to/your/js/**/*.js_qt_\n  ]_co_\n  _qt_dontLoad_qt__dd_ [\n    _qt_node_modules/**_qt__co_\n    _qt_path/to/your/js/**/*.js_qt_\n  ]_co_\n  _qt_plugins_qt__dd_ {\n    _qt_modules_qt__dd_ {}_co_\n    _qt_es_modules_qt__dd_ {}_co_\n    _qt_node_qt__dd_ {}_co_\n    _qt_doc_comment_qt__dd_ {\n      _qt_fullDocs_qt__dd_ true_co_\n      _qt_strong_qt__dd_ true\n    }\n  }\n}\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tbecause it enables autocompletion when babylonjs is imported like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_  import {\n      Scene_co_\n      Vector3_co_\n      Mesh\n    } from _qt_babylonjs_qt__sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Florian","Date":"2018-07-08T17:20:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tQuote\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_1. Download_lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fcfcfc_sm_color_dd_#525252_sm_font-size_dd_13px_sm__qt__gt__lt_a href_eq__qt_http_dd_//hugos.site/babylonjs.json_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_transparent_sm_color_dd_#3d6594_sm__qt__gt_http_dd_//hugos.site/babylonjs.json_lt_span_gt_ _lt_/span_gt__lt_/a_gt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#fcfcfc_sm_color_dd_#525252_sm_font-size_dd_13px_sm__qt__gt__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__lt_span_gt_ _lt_/span_gt_and put it in your project folder_lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks a lot _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10882-hugomcphee/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10882_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10882-hugomcphee/_qt_ rel_eq__qt__qt__gt_@HugoMcPhee_lt_/a_gt_. It seems to work on my machine with atom_lt_br /_gt_\n\tDo you have a new version of the custom .JSON file or a way how to generate it on my own?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]