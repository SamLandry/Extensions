[{"Owner":"FbFGlobal_Dev","Date":"2016-07-28T23:52:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Everybody!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a rigged and animated character that is rendering funny. Eyes_co_ teeth_co_ tongue_co_etc are all showing through the main mesh of the head. How can I fix this?\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/579a9a9991808_ScreenShot2016-07-28at4.45.31PM.png.0be2e1434079700d952e075c53ac7fce.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_8808_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/579a9a9991808_ScreenShot2016-07-28at4.45.31PM.png.0be2e1434079700d952e075c53ac7fce.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_Screen Shot 2016-07-28 at 4.45.31 PM.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-07-29T16:24:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22337-fbfglobal_dev/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22337_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22337-fbfglobal_dev/_qt_ rel_eq__qt__qt__gt_@FbFGlobal_Dev_lt_/a_gt__dd_ Hi FbFG - welcome to the forum _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tHard to tell from your image_co_ but my first thought is the normals of the skin mesh are wrong and need flipping.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the image below - a human head - the normals are correct in A_co_ but the wrong way around in B. As you can see_co_ in B you see the eyes and mouth look weird _lt_img alt_eq__qt__dd_wacko_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ title_eq__qt__dd_wacko_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tSo try flipping your normals.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/normals1.png.ed05dda1b943f9609664cc2815689096.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_8815_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_07/normals1.png.ed05dda1b943f9609664cc2815689096.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_normals1.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"FbFGlobal_Dev","Date":"2016-07-30T23:16:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_span_gt_@_lt_/span_gt__lt_a data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard&amp_sm_referrer_eq_http%253A%252F%252Fwww.html5gamedevs.com%252Ftopic%252F24139-rigged-and-animated-character-is-showing-up-semi-transparent-teeth-visible-through-lips-eyes-visible-through-eyelids-etc%252F_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt_ title_eq__qt_Go to gryff_t_s profile_qt__gt_gryff_lt_/a_gt_ !!! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThe images you sent at first glance look like it_t_s exactly what_t_s happening.When I checked the normals_co_ they were all facing outward and there didn_t_t appear to be any rogue ones. To further detail what I_t_m seeing_co_ the front of the head geometry is showing up_co_ but appears to go transparent as it faces the center of the camera_co_ allowing the teeth and eyeballs to be totally visible rather than being obstructed by the lips and eyelids.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t Thank you for the quick response though!  Is there anything else I should look into? Could it be due to intersecting faces (ie the eyes actually intersect the head_co_ teeth intersect the top and bottom of the mouth_co_ etc)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]