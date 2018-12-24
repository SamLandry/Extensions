[{"Owner":"Eelis","Date":"2016-09-16T11:53:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tConsider_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var s _eq_ new BABYLON.Vector3()_sm_\nvar r _eq_ new BABYLON.Quaternion()_sm_\nvar t _eq_ new BABYLON.Vector3()_sm_\n\nif (BABYLON.Matrix.Scaling(1_co_ -1_co_ 1).decompose(s_co_ r_co_ t))\n{\n\tconsole.log(_qt_scale_dd_ _qt_ + s)_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI get the following output_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scale_dd_ {X_dd_ 1 Y_dd_1 Z_dd_1}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tNaively I expected to get {1_co_ -1_co_ 1} back out again. What am I missing here? _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-16T17:56:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWhat are the values of t and r?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Eelis","Date":"2016-09-16T18:54:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_144302_qt_ data-ipsquote-contentid_eq__qt_25222_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1474048587_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t56 minutes ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWhat are the values of t and r?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tr_dd_ {X_dd_ 0 Y_dd_0 Z_dd_0 W_dd_0.7071067811865476}_lt_br /_gt_\n\tr.toEulerAngles()_dd_ {X_dd_ 0 Y_dd_0 Z_dd_0}_lt_br /_gt_\n\tt_dd_ {X_dd_ 0 Y_dd_0 Z_dd_0}\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wonder what that nonzero W component in r is doing. From the Euler angles it looks like it_t_s not doing anything.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-09-16T20:46:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m not 100% sure about what I_t_m going to tell_co_ but this reminds me old things.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf I remember correctly most of the matrix decomposition routines can_t_t extract non uniform scale (i.e. not the same scale value for x_co_ y &amp_sm_ z). I think it has something to do with finding the matrix determinant which is needed after. Well can_t_t remember exactly but googling will tell you if I_t_m right or not.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Eelis","Date":"2016-09-16T21:51:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHmm_co_ well if the decompose function only yields correct outputs for certain inputs_co_ it would be useful if the documentation stated these preconditions. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nockawa","Date":"2016-09-16T23:03:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_144335_qt_ data-ipsquote-contentid_eq__qt_25222_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1474062716_qt_ data-ipsquote-userid_eq__qt_20182_qt_ data-ipsquote-username_eq__qt_Eelis_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Eelis said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHmm_co_ well if the decompose function only yields correct outputs for certain inputs_co_ it would be useful if the documentation stated these preconditions. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWell_co_ mixing 3 different matrices into one may lead to information loss_co_ which means you can_t_t decompose to get back what you had initially in some cases. There_t_s no mystery_co_ the decomposition only works if some specific conditions are met.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut we_co_ you_t_re right_co_ documentation should state the limitations of this methods. Overall if you deal with non uniform scale be aware there could be other _qt_issues_qt_ like that. A good general rule is to allow non uniform scaling only for final stage animation (vertex blending/bones/etc.).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you still need to get it back I suggest you to work with a custom structure I used to call PRS_dd_ Position (Vector3)_co_ Rotation (Quaternion) and Scale (Vector3)_co_ you can easily create a matrix from it and you will always have each info stored specifically. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-19T17:12:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThe problem is that the decomposition is not unique. Several matrices can lead to same transform. Here the scale is positive because the quaternion will then rotate the mesh to achieve the same result as scaling to 1_co_ -1_co_ 1\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]