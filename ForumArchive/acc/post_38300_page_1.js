[{"Owner":"dbawel","Date":"2018-06-18T09:46:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve tried every location and jquery syntax for hours_co_ and I still get an error_dd_ Uncaught TypeError_dd_ Cannot read property _t_addEventListener_t_ of null at main2.js_dd_47. It_t_s simply not finding the ID of the variable I_t_ve set. Any help is appriciated. It_t_s 3am_co_ so I_t_m sure I_t_ll feel stupid in the morning.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//qedsoft.com/DEMOS2017/mobile_app/index2.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//qedsoft.com/DEMOS2017/mobile_app/index2.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-06-18T10:01:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLoading the script in the head element will call the javascript before the DOM war generated. hence - the dom elements are null.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif you use jquery_co_ you can wrap it in a DOM-Ready function_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t$(function() {\n_lt_/p_gt_\n\n_lt_p_gt_\n\t// code goes here\n_lt_/p_gt_\n\n_lt_p_gt_\n\t})_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut you can simply add the javascript at the bottom of the body tag_co_ and it will be executed after the dom was loaded (if you dont create the DOM dynamically)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-18T10:27:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks so much for your help. For now I have my JS in my HTML file - not ideal_co_ but keeps me working.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried every which way_co_ but no luck no matter what I try._dd_\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_218473_qt_ data-ipsquote-contentid_eq__qt_38300_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1529316095_qt_ data-ipsquote-userid_eq__qt_10310_qt_ data-ipsquote-username_eq__qt_RaananW_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t22 minutes ago_co_ RaananW said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tif you use jquery_co_ you can wrap it in a DOM-Ready function_dd__lt_span_gt_﻿_lt_span_gt_﻿_lt_/span_gt__lt_/span_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tAny thoughts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-06-18T10:34:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tseems like the error is gone after moving the code to the body tag\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-18T15:35:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOK_co_ I knew if I just waited until morning_co_ the answer would be there. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSimple_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\twindow.onload _eq_ function () {\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd yes I do feel stupid..._lt_span class_eq__qt_ipsEmoji_qt__gt_😴_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-06-18T15:38:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tgreat _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_that_t_s exactly like _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t$(function() {\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t// code goes here\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\t})_sm_\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tif you have jquery integrated. but it doesnt seem like you really need jquery at all\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2018-06-20T08:06:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/?do_eq_hovercard_qt_ data-mentionid_eq__qt_10310_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/10310-raananw/_qt_ rel_eq__qt__qt__gt_@RaananW_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for being there when I needed help. This is why I love this forum and everyone on it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDB\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]