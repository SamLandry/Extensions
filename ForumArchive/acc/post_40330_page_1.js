[{"Owner":"hcmetal","Date":"2018-09-29T02:54:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMore questions regarding using Babylon with React.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow do I use pep.js for Babylon in React?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI understand that pep.js enable pointer events on touch devices_co_ and without it the drag_co_ pinch and other touch interactions won_t_t work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI already _t_npm i pepjs_t_. What is the next step? Where should I import it or use it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe basics are done following the doc_dd_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/resources/babylonjs_and_reactjs_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#3d6594_sm_font-size_dd_14px_sm__qt__gt_https_dd_//doc.babylonjs.com/resources/babylonjs_and_reactjs_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe I also try calling our React Master _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25365_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/_qt_ rel_eq__qt__qt__gt_@brianzinn_lt_/a_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks a lot!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPS_dd_ There is a solved issue regarding loading assets with create-react-app if anyone is interested_dd_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed7142538317_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/40304-trouble-loading-assets-in-react/?do_eq_embed_qt_ style_eq__qt_height_dd_221px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-09-29T03:20:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just edited the /public/index.html and put PEP in the page.  You may want to use defer or async for faster load_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_head&gt_sm_\n...\n&lt_sm_script src_eq__qt_https_dd_//code.jquery.com/pep/0.4.3/pep.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n&lt_sm_/head&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI think if you want to npm import that you just import for side-effects_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_import _t_pepjs_t__sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hcmetal","Date":"2018-09-29T05:06:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/?do_eq_hovercard_qt_ data-mentionid_eq__qt_25365_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/25365-brianzinn/_qt_ rel_eq__qt__qt__gt_@brianzinn_lt_/a_gt__co_ it_t_s working. Thank you so much for your help(s)!_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ to anyone that is trying the same thing_co_ don_t_t forget to add touch-action_eq__qt_none_qt_ property to the canvas.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]