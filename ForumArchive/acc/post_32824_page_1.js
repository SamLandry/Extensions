[{"Owner":"jools_n_jops","Date":"2017-09-09T07:39:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya all.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust joined up here- seems like a fantastic community_co_ great stuff. Learning a lot from you guys.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t In this previous Q&amp_sm_A (thanks guys) there was a discussion about adjusting a _qt_fade_qt_ post process after its creation_co_ via scene.registerBeforeRender(function(){})_sm_\n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed9960843747_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/22493-fade-in-out-complete-scene/?do_eq_embed_qt_ style_eq__qt_height_dd_187px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\tHere_t_s the afore mentioned code snippet for where the post process gets created. \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var fadeLevel _eq_ 1_sm_\nvar postProcess_fade _eq_ new BABYLON.PostProcess(_qt_Fade_qt__co_ _qt_fade_qt__co_ [_qt_fadeLevel_qt_]_co_ null_co_ 1.0_co_ camera)_sm_\npostProcess_fade.onApply _eq_ (effect) _eq_&gt_sm_ \n\t{\n\t\teffect.setFloat(_qt_fadeLevel_qt__co_ fadeLevel)_sm_\n\t}_sm_\t\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tLets say I wanted to do the same on other post processes such as a horizontal Blur (increasing blur on a certain event for example). I sorta tried doing a similar thing....\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var kernel_eq_50_sm_\nvar postProcess_Blur _eq_ new BABYLON.BlurPostProcess(_qt_Horizontal blur_qt__co_new BABYLON.Vector2(1.0_co_0.0)_co_ [_qt_kernel_qt_]_co_ 1_co_ camera)_sm_\npostProcess_Blur.onApply _eq_ (effect) _eq_&gt_sm_ \n\t{\n\t\teffect.setFloat(_qt_kernel_qt__co_ kernel)_sm_\n\t}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t...the scene / canvas all initialises ok_co_ but it_t_s drawing a black frame. Not sure if its because of some difference with the blur post process in particular? _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/classes/3.0/blurpostprocess_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/classes/3.0/blurpostprocess_lt_/a_gt_ says the parameter name is _qt_kernel_qt_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks v much for any insights or assistance.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t*edit_dd_ link to playground _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#K9NTY4%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#K9NTY4#6_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t*edit_dd_ solved _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#K9NTY4%237_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#K9NTY4#7_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jools_n_jops","Date":"2017-09-10T08:52:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAh got it.. just need to edit the postProcess object .kernel on the event..\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_postProcess_Blur.kernel_eq_1_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSometimes when you ask a question your brain answers it for you _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-09-10T12:43:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thah.  Glad you found your solve.  Welcome to the forum_co_ good to have you with us. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for teaching us these discoveries... well done.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]