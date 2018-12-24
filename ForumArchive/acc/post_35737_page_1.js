[{"Owner":"MarianG","Date":"2018-02-16T07:50:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi. I have two scene. In the first scene I configure the object from babylon basic elements and csg_co_ I serialize it and upload it to server. All good _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt__lt_br /_gt_\n\tIn the second scene I import the serialized object from first scene. All good again. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut in the first scene I set some flags to the object and after I serialize it_co_ they gone_co_ ... no problem I add them manual. like that.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var myser _eq_ BABYLON.SceneSerializer.SerializeMesh(component_co_ false_co_ true)_sm_\nvar jsonData _eq_ JSON.stringify($.extend({}_co_ myser_co_ {_qt_setings_qt__dd_settings}))_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tAnd it works again _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ but when I use SceneLoader.ImportMesh I get only the informations from _qt_myser_qt__co_ and this is somewhat expected.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut my question is_co_ how can I hack the ImportMesh function to access _qt_setings_qt_ property too? Or can I add the flags from _t_seting_t_ to my original mesh before to serialize_co_ and it don_sm_t lose them when I serialize it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you guys _lt_img alt_eq__qt_B)_qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_cool.png_qt_ title_eq__qt_B)_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-02-16T21:42:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya MG... sorry for the slow replies.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think you can use node.metadata as a _qt_suitcase_qt_ that will serialize/de-serialize just fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould that work?  You can put _qt_stuff_qt_ inside any mesh.metadata_co_ camera.metadata_co_ or light.metadata.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo maybe_co_ before you serialize scene1... do...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar bigFatObject _eq_ anything_sm_  (maybe bigFatObject.installExtraSettings() is a function on that obj)_lt_br /_gt_\n\tvar myInvisibleDatabase _eq_ new BABYLON.Mesh(_qt_blank_qt__co_ scene)_sm__lt_br /_gt_\n\tmyInvisibleDatabase.metadata _eq_ bigFatObject_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen scene is imported_co_ you should be able to run a pre-installed function... myInvisibleDatabase.metadata.installExtraSettings().\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou are better at JSON stuff than I_co_ but... I believe all node.metadata values are _qt_carried-along_qt_ with all serializations/imports.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps that will work for you.  Holler if you have problems.  I hope I am on-subject.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2018-02-16T21:59:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes_co_ mesh._lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_metadata_lt_span_gt_ _lt_/span_gt__lt_/span_gt_ is a good solution. I use it and it works very well.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-02-17T09:05:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI did not know about metadata.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for sugestions. I_t_ll make a try_co_ and I_t_ll be back with news.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MarianG","Date":"2018-02-17T10:42:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI can confirm_co_ metadata was the trick. It is exactly what I want. _lt_br /_gt_\n\tMany thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]