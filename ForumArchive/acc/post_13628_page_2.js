[{"Owner":"jahow","Date":"2015-04-11T15:48:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Glad you like it! and sorry about the ugly playground scene _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-04-12T05:40:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_78435_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_13628_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1428604916_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Thanks guys _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ (Pixel is awesome we decided to choose Lucy_dd_))_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Heh_co_ I only said that because a game developer I know really did name his daughter Pixel. I always wonder if she_t_ll wind up liking it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_78435_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_13628_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1428604916_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Just a side note_co_ we DO sort back to front transparent objects_dd__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Rendering/babylon.renderingGroup.ts#L45_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Rendering/babylon.renderingGroup.ts#L45_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Perhaps I_t_m just being stupid again_co_ but if a list of transparent objects is already being sorted_co_ why not sort particle systems (not particles) into that list_co_ and render them as if they were a transparent object (located at the system_t_s emitter)?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-04-13T13:02:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I didn_t_t know about renderingGroupId_co_ it_t_s an awesome feature. I_t_ve documented it in the article about transparency &amp_sm_ rendering order._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_78633_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_13628_qt_ data-ipsquote-username_eq__qt_fenomas_qt_ data-cite_eq__qt_fenomas_qt_ data-ipsquote-timestamp_eq__qt_1428817220_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Perhaps I_t_m just being stupid again_co_ but if a list of transparent objects is already being sorted_co_ why not sort particle systems (not particles) into that list_co_ and render them as if they were a transparent object (located at the system_t_s emitter)?_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That would be great_co_ although it looks like it would need some serious refactoring of the RenderingManager and RenderingGroup classes. Which means_co_ I wouldn_t_t personally dare attempt it by fear of wreaking havoc in the rendering engine..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Basically particle systems (just as sprite managers) do not derive from the Node class_co_ as meshes do. It_t_s a different system_co_ so mixing them to do depth-sorting is not an easy task. At least that_t_s my conclusions by reading the sources. But yeah_co_ that would be an awesome addition!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-04-13T16:48:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_78724_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_13628_qt_ data-ipsquote-username_eq__qt_jahow_qt_ data-cite_eq__qt_jahow_qt_ data-ipsquote-timestamp_eq__qt_1428930133_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_That would be great_co_ although it looks like it would need some serious refactoring of the RenderingManager and RenderingGroup classes. Which means_co_ I wouldn_t_t personally dare attempt it by fear of wreaking havoc in the rendering engine..._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well_co_ ParticleSystems have an emitter property which can be a node_co_ so I_t_d envisioned something like a proxy. But I_t_m only asking if it_t_s possible. I gather_co_ for example_co_ that particles usually use a different blend mode than transparent textures_co_ so I don_t_t know if that would prevent them from being composted together_co_ etc._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-04-19T03:18:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_78633_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_13628_qt_ data-ipsquote-username_eq__qt_fenomas_qt_ data-cite_eq__qt_fenomas_qt_ data-ipsquote-timestamp_eq__qt_1428817220_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Perhaps I_t_m just being stupid again_co_ but if a list of transparent objects is already being sorted_co_ why not sort particle systems (not particles) into that list_co_ and render them as if they were a transparent object (located at the system_t_s emitter)?_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just wondering if any core devs had thoughts on this!  _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"fenomas","Date":"2015-05-03T02:06:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ just wondering if this was seen  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-05-03T07:34:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_lol  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt_  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt_  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ alt_eq__qt__dd_lol_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-03T21:54:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I saw it but this is not an easy one as the sorter has to be updated and a lot of code changed is involved_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]