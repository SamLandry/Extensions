[{"Owner":"Buzul","Date":"2018-11-28T13:54:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi to all.. I hopefully everybody is fine..\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m tryed to do create highlight effect and i_t_ve done it easly_co_ it was very quick_sm_ and i know this effect not apply to the transparent meshes (i_t_ve read HL part so many time).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut my issue is that...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve some pictures designed like buttons_co_ and those pictures atteched to each other while designing. (Seems like one mesh)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was created some invisible boxes on front of all those button pictures and i given action them_co_ they are all together clickable and working fine. No problem in there..\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut i want to create highlight effect for them_co_ i haven_t_t got any idea about this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs i said_co_ highlight layer unusuable for invisible meshes_co_ i know that. How can solve this case?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m here for all suggestions. Thanks in advance.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-28T22:06:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUnfortunately_co_ highlights heavily rely on stencil and depth which we would no be able to fill for transparent meshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is  the main reason they are not compatible.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am wondering how you could solve it without other compromise.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Buzul","Date":"2018-11-29T06:47:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ thanks for your reply_co_ actualy I_t_m wondering too how i_t_ll solve this _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]