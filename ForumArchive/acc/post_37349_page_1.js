[{"Owner":"Mrso92","Date":"2018-05-02T09:30:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello to all of you!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to thank everyone for support on my previous issue_co_ especially _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_. At that time I had(and still have because of trouble of applying his suggestion) one structural problem with performance that I am caring for a longer period of time. But that is out of the scope for the moment being because I had one little problem which troubles me a lot. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tEssentially from time to time when zooming out(on the maximum level) and panning the camera I have the horrendous flickering which is even more obvious than on demo due to fact that I also add transparent hole(I have not added it here for the sake of the code complexity).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIssue can be seen here_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#LE1BSK%239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#LE1BSK#9_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom my understanding the issue is happening because of some sort of weird collision between two textures ground and location one. But I really cannot afford to do any positioning change.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any other_co_ more elegant way to resolve this problem?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tProbably I am missing something really trivial.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks to all\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2018-05-02T09_dd_33_dd_21Z_t_ title_eq__t_05/02/2018 09_dd_33  AM_t_ data-short_eq__t_May 2_t__gt_May 2_lt_/time_gt_ by Mrso92_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_Newer version\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-02T09:48:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPresuming that lowering the ground a little stops the flickering have you tried smaller numbers than -0.2? How about -0.001?  I note that you cannot afford to do any positioning changes and would ask what issues arise when you do lower the ground. Lowering the ground is the only solution I can think of_co_ other greater minds than mine might have a solution.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mrso92","Date":"2018-05-02T10:13:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI knew that just by setting the value to -0.01 flickering was gone. But I was hoping that there was some some magic parameter because I also have some other elements on screen like axis and even though I am increasing position parameter to let_t_s say 0.15 it continues to flicker. I can set the bar higher but than it is a bit ugly.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mrso92","Date":"2018-05-10T13:50:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have resolved the issue with multi scenes. But now I have the problems that one scene  meshes are having precedence over another. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any property that resolves this something like z-index in css?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tP.S I have tried with RenderingGroupId\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-10T15:15:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_214437_qt_ data-ipsquote-contentid_eq__qt_37349_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1525960209_qt_ data-ipsquote-userid_eq__qt_30497_qt_ data-ipsquote-username_eq__qt_Mrso92_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Mrso92 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tI have resolved the issue with multi scenes. But now I have the problems that one scene  meshes are having precedence over another. \n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIs there any property that resolves this something like z-index in css?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNo meshes from top scene will always be on top of those in lower scene.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mrso92","Date":"2018-05-10T15:18:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSorry top in what sense(in terms of precedense of...)? Creation logic or..?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-05-10T19:04:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tRender ordering in as given in engine rendering loop.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]