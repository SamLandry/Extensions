[{"Owner":"Beemertron","Date":"2016-10-24T02:57:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey everyone_co_ I_t_m a little new to game development_co_ so I really appreciate the advice! I_t_m just looking to understand local translations a little better.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBasically what I have is 2 blender models (that I downloaded off Turbosquid) I have the distance value to my first model set to 300_co_ and the second model set to 1_co_ however_co_ the model that is set to 1 is moving faster then the model set to 300_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_game.subject.translate(BABYLON.Axis.Y_co_ 300_co_ BABYLON.Space.LOCAL)_sm_\nunit.mesh.translate(BABYLON.Axis.Y_co_ 1_co_ BABYLON.Space.LOCAL)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSo I guess my question is_co_ is the distance value relative to something? Both models are about the same size.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-24T16:37:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and welcome!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLocal space is the space where the mesh is at 0_co_0_co_0 with no rotation and no scaling.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo if your first mesh has a scaling set to (0.001_co_ 0.001_co_ 0.001) then 300 units on Y axis will appear like 0.3 units in the global world\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes it make sense?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Beemertron","Date":"2016-10-24T17:07:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think so. The first mesh_co_ when I downloaded it was huge_co_ so I did scale it down_co_ but in Blender_co_ I also scaled the second mesh in blender as well_co_ but it needed to be scaled up. Would that created the difference that I_t_m seeing here?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-24T18:09:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know how but I_t_m sure there is a way to reset all transformations in Blender (ping _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/?do_eq_hovercard_qt_ data-mentionid_eq__qt_7026_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/7026-gryff/_qt_ rel_eq__qt__qt__gt_@gryff_lt_/a_gt_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-10-24T18:16:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@Deltakosh - er the _qt_Man From Babylon_qt_ called so ...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24102-beemertron/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24102_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24102-beemertron/_qt_ rel_eq__qt__qt__gt_@Beemertron_lt_/a_gt_ If you are scaling your models in Blender - make sure you _qt_Apply the Scale_qt_ (In _qt_Object Mode_qt_ -&gt_sm_Object-&gt_sm_Apply -&gt_sm_Scale). If you have any rotations - apply those too._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Beemertron","Date":"2016-10-25T02:06:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tJust got a chance to fix this now_co_ worked great_co_ thanks for the help!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]