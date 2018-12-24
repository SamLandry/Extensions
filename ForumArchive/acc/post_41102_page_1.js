[{"Owner":"fateriddle","Date":"2018-11-07T08:28:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo some assets I downloaded has a structure of __root__ ----&gt_sm_  node-0_co_ I can find that single child with id node-0_co_ and perform rotation/scaling/isVisible to control the whole object.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut some assets like in _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#JUKXQD%2352_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#JUKXQD#52_lt_/a_gt__co_ has mutiple children meshes_co_ then I don_t_t know how to scale the whole thing_co_ or make it invisible. Please help_co_ many thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-11-07T08:51:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou are already doing this on line _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#JUKXQD%2353_qt_ rel_eq__qt_external nofollow_qt__gt_22_lt_/a_gt__co_ where you apply scaling to the root. If you want to perform a transform to the whole object_co_ then root object is the way.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fateriddle","Date":"2018-11-07T09:31:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_234014_qt_ data-ipsquote-contentid_eq__qt_41102_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1541580699_qt_ data-ipsquote-userid_eq__qt_12295_qt_ data-ipsquote-username_eq__qt_MarianG_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ MarianG said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tYou are already doing this on line _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#JUKXQD%2353_qt_ rel_eq__qt_external nofollow_qt__gt_22_lt_/a_gt__co_ where you apply scaling to the root. If you want to perform a transform to the whole object_co_ then root object is the way.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHey_co_ thanks_co_ scaling seems to work_co_ but isVisible is not working on root. I_t_m trying to createInstance of it and set the original one invisible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tbtw_co_ is .clone() simply creating a new mesh rather than creating an instance? So for performance wise_co_ we should use createInstance() right? But then_co_ createInstance won_t_t copy children as explained here \n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed6502757280_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/25708-createinstance-not-cloning-children/?do_eq_embed_qt_ style_eq__qt_height_dd_339px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tSo the use case of createInstance is very limited? Because for any assets that consist of more than one child_co_ you can_t_t use createInstance?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-07T16:14:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tisVisible only works for meshes and I suspect that your root is a transformNode. You can use setEnabled(false) for transform nodes\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fateriddle","Date":"2018-11-08T02:01:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_234049_qt_ data-ipsquote-contentid_eq__qt_41102_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1541607267_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tisVisible only works for meshes and I suspect that your root is a transformNode. You can use setEnabled(false) for transform nodes\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks_co_ I didn_t_t notice the difference.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBtw_co_ the assets are all using a transformNode as the parent of all meshes (and it makes sense)_co_ if I createIntance of that node_co_ it seems nothing will be copied. If I use .clone that node_co_ things will be fine. But I have performance concern using clone instead of createInstance_co_ should I be worried?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-08T17:06:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe best option would be to createInstance on all meshes and then parent these new instances to the root transformNode\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]