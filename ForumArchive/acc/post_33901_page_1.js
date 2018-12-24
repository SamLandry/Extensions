[{"Owner":"WildBill","Date":"2017-11-09T15:38:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo this is weird.... I_t_ve got a rigged character in Blender that I want to duplicate so that I can animate a scene with two characters interacting. The issue I_t_m having is that when I duplicate that mesh in Blender (by selecting both the mesh and the armature and pressing Shift + D) and export it_co_ the duplicated character is rotated differently in my BJS scene than it was in Blender.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I rotate the duplicated mesh 45 degrees (along the Z axis) in Blender_co_ then export it to a .babylon file_co_ it renders as being rotated 90 degrees in BJS. Rotating him 90 degrees in Blender gets even weirder_dd_ the mesh starts rotating along a different axis. And if I rotate him further then he starts doing all sorts of crazy acrobatics.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s a few screenshots of what I_t_m talking about_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt_ES6Lb11.jpg_qt_ class_eq__qt_ipsImage_qt_ height_eq__qt_750_qt_ src_eq__qt_https_dd_//i.imgur.com/ES6Lb11.jpg_qt_ width_eq__qt_219_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAny ideas why it_t_s rotating like this or how I might fix it? I have a hunch it_t_s something to do with how I duplicated the mesh (maybe Shift + D was a bad idea? Is there a better way to duplicate this rigged mesh?) but I_t_m a newbie to Blender and BJS and I_t_m at a loss here. My log file didn_t_t return any errors when I exported the .babylon file too_co_ for what that might be worth. I_t_d be happy to attach the .blend and .babylon files too if that_t_d help diagnose it_co_ just let me know!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs a side note_co_ I_t_ve been lurking these forums for a while and its incredible how helpful everyone here has been. Your answers on all these countless old topics has helped me get this far_co_ I feel like I already owe you guys big time. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-09T16:19:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWe may need _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_ or _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20526_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20526-vnc3r/_qt_ rel_eq__qt__qt__gt_@V!nc3r_lt_/a_gt_ super powers _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2017-11-10T10:59:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLooks like a feature... _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tCan you share one of the .babylon files exported (of course one of the weird ones)? Just to see what the rotation values are?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"WildBill","Date":"2017-11-10T14:36:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHaha I thought so. _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSure thing_co_ here_t_s a .zip with the babylon_co_ blend_co_ and log files.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think I may have fixed the issue though_co_ or at least discovered why it_t_s acting up. Originally_co_ I was rotating the character by selecting the main root bone (his hip) and rotating it in _lt_em_gt_Local_lt_/em_gt_ mode instead of _lt_em_gt_Global_lt_/em_gt_ mode. Normally this would be fine since those two should be oriented the same for that main hip bone_co_ but somehow it looks like the Y and Z axes got flipped between Local and Global. It must_t_ve been an accident when I was rigging him earlier. But when I rotated him 180 degrees in Global mode he rendered perfectly in BJS... sweet!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt _lt_em_gt_may_lt_/em_gt_ be worth looking into that inconsistency between how Blender and the Babylon exporter interprets the final rotation of a mesh with Global and Local rotation values_co_ but it_t_s not a big deal since it seems easy to fix (at least in this simple scene of mine) by just using Global instead of Local_co_ at least on root bones. You guys already work hard enough on solving everyone else_t_s issues as it is haha. Thanks again!\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_15622_qt__gt_meshes.zip_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-11-10T14:58:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tsounds like the orientation to origin are off on the meshes... let me look really quick 1 sec lll edit this post in a min._lt_br /_gt__lt_br /_gt_\n\tYup...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyour orientation is all screwy._lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/show.png.1bc4ec476885a0b14ce726fb5030b986.png_qt_ data-fileid_eq__qt_15624_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15624_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/show.thumb.png.2e4de49638f07e93120c10f8f4e8f882.png_qt_ alt_eq__qt_show.thumb.png.2e4de49638f07e93120c10f8f4e8f882.png_qt_ /_gt__lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tYou need to set the models origin to 0_co_0_co_0 and have its local axes be aligned correctly in your editing program_co_ or bake the vertex data post process.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"WildBill","Date":"2017-11-10T15:08:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_194620_qt_ data-ipsquote-contentid_eq__qt_33901_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1510325929_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 minutes ago_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tsounds like the orientation to origin are off on the meshes... let me look really quick 1 sec lll edit this post in a min._lt_br /_gt__lt_br /_gt_\n\t\t\tDo you have the meshes before babylon export?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAnd yeah it should be the .blend file in that meshes.zip file attached above. I_t_m 99% sure I just messed up the orientation of that root hip bone when I was first rigging it_co_ and that_t_s totally on me. It_t_s just weird how the exporter interpreted the final values differently than Blender shows them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEdit_dd_ You rock_co_ thanks for confirming that! I_t_ll go back and reset the local orientation to match the global orientation and that should fix it.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]