[{"Owner":"freetoplay","Date":"2018-05-04T19:16:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI tested a gltf model in the babylon sandbox that does not appear to be rendering double sided mesh (it_t_s poking holes in the mesh). Is there a way to get around this issue? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-05-04T19:29:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can duplicate your indices and reverse the order then update the vertexData or maybe disable backface culling\n_lt_/p_gt_\n\n_lt_div style_eq__qt_background-color_dd_#fffffe_sm_color_dd_#000000_sm_font-size_dd_14px_sm__qt__gt_\n\t_lt_div_gt_\n\t\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_mat.backFaceCulling _eq_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#0000ff_sm__qt__gt_false_lt_/span_gt__lt_span style_eq__qt_color_dd_#000000_sm__qt__gt__sm__lt_/span_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"freetoplay","Date":"2018-05-05T15:26:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDisabling backface culling closes the holes inside of the mesh_co_ but I still have an issue with random holes outside of the mesh_co_ does anyone know of a possible solution for this?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-10T18:16:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe best option remains to set the glTF object_t_s material to two-sided lightning mode\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-10T18:17:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t(or get the mesh material and set mesh.material.twoSidedLighting _eq_ true)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-05-11T14:53:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_214509_qt_ data-ipsquote-contentid_eq__qt_37422_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1525976255_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t20 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t(or get the mesh material and set mesh.material.twoSidedLighting _eq_ true)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSide question_co_ might this be good for semi-transparent closed bodies (like a cube)_co_ or is face ordering the only way out?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-11T15:02:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUnfortunately face ordering is still the best option (or using alpha premultiplied as well)_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/resources/transparency_and_how_meshes_are_rendered#things-to-do-and-not-to-do_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/resources/transparency_and_how_meshes_are_rendered#things-to-do-and-not-to-do_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]