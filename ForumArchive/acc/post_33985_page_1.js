[{"Owner":"Alenvei","Date":"2017-11-13T23:32:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello guys .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have some issue whit image load texture. \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var panel _eq_ BABYLON.Mesh.CreateBox(_qt_panel_qt__co_ 0.2_co_ scene)_sm_\nvar panelMat _eq_ new BABYLON.StandardMaterial(_qt_panel1_qt__co_scene)_sm_\t\n\tpanelMat.diffuseTexture _eq_ new BABYLON.Texture(_qt_tpanel.png_qt__co_ scene)_sm_\n\tpanel.material _eq_ panelMat_sm_\n\tpanel.scaling.z _eq_ 0.1_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIn developer tools always show me this _dd_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt__lt_strong_gt_index.html_dd_1 _dd_ Access to Image at _t_file_dd_///C_dd_/Users/user/Desktop/trapbox/tvorbamodelov/tpanel.png_t_ from origin _t_null_t_ has been blocked by CORS policy_dd_ Invalid response. Origin _t_null_t_ is therefore not allowed access.  _lt_/strong_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#c0392b_sm__qt__gt__lt_strong_gt_babylon.js_dd_3 _dd_  BJS - [00_dd_16_dd_44]_dd_ Error while trying to load image_dd_ tpanel.png._lt_/strong_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am new in this and I am trying to understand how BABYLON.JS works.  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you  in advance for your answers . \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-13T23:37:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello this is a more general web based question. You cannot directly serve your content from the file system because of security constraints\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou have to use a local webserver (like IIS express or Apache)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Alenvei","Date":"2017-11-14T07:14:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh I got it thank you 😀 I am feel littel dump know that I didnt find out 😀\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAgain thank you very much _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]