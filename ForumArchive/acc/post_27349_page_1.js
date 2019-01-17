[{"Owner":"JCPalmer","Date":"2016-12-29T19:40:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am probably talking to myself_co_ but I have coded a solution for the 4 pvrtc texture formats inside a pvr container (file format).  It is based on _lt_a href_eq__qt_https_dd_//github.com/toji/texture-tester_qt_ rel_eq__qt_external nofollow_qt__gt_Brandon Jones work_lt_/a_gt_ (as is the dxt / dds code already in BJS).  When looking at the _lt_a href_eq__qt_http_dd_//cdn.imgtec.com/sdk-documentation/PVR+File+Format.Specification.pdf_qt_ rel_eq__qt_external nofollow_qt__gt_pvr file format spec_lt_/a_gt__co_ I noticed that there is a format element in the header (page 5) that has many more texture formats than just the 4.  It includes pretty much everything even dxt &amp_sm_ astc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ I think it would be a bad idea to use a pvr file container to hold dxt textures.  It does seem possible to use a pvr container for any of the rest.  Reason is that these WebGL texture extensions do not even know what a container file format is.  You or your framework is responsible for the sucking of the faces (for cube textures) &amp_sm_ mipmap levels out of the file.  WebGL just has a _lt_span style_eq__qt_color_dd_#0000cd_sm__qt__gt__lt_em_gt__lt_strong_gt_compressedTexImage2D _lt_/strong_gt__lt_/em_gt__lt_/span_gt_call where you pass it the data and a code for the format.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI know astc has it_t_s own file container format (in addition to dxt)_co_ but not sure about etc1/2 &amp_sm_ atc.  Anyone have a workflow for generating any of these texture formats_co_ &amp_sm_ know what container format is used?  Used PVRTexToolGUI  or PVRTexToolCLI_co_ maybe?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe intelligent texture selector is enabled by calling _lt_span style_eq__qt_color_dd_#0000cd_sm__qt__gt__lt_em_gt__lt_strong_gt_engine.setTextureFormatToUse()_lt_/strong_gt__lt_/em_gt__lt_/span_gt_ with the extensions of the formats you have to pick from on the server prior to loading any textures.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_/**\n * Set the compressed texture format to use_co_ based on the formats you have_co_\n * the formats supported by the hardware / browser_co_ and those currently implemented\n * in BJS.\n * \n * Note_dd_ The result of this call is not taken into account when texture is base64 or when\n * using a database / manifest.\n * \n * @param {Array&lt_sm_string&gt_sm_} formatsAvailable - Extension names including dot.  Case\n * and order do not matter.\n * @returns The extension selected.\n */\npublic setTextureFormatToUse(formatsAvailable _dd_ Array&lt_sm_string&gt_sm_) _dd_ string {\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSince I do not have .astc exposed on any of my hardware (Apple A8_t_s do support it though)_co_ I will table any decision whether to use it_t_s container format or pvr.  I am going to rework into a PVRContainer class and a PVRTCTools class that is a subclass.  Separating will make things a little more modular.  If I can come up with a way to figure out the how to detect the container type_co_ even dxt could be separated from it_t_s native container.  The big plus would be you could use either the _lt_a href_eq__qt_https_dd_//community.imgtec.com/developers/powervr/tools/pvrtextool/_qt_ rel_eq__qt_external nofollow_qt__gt_GUI or CLI tools_lt_/a_gt_ above for all_co_ I think.  Would need help to do that though for dxt_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]