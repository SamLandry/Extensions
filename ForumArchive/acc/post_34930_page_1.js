[{"Owner":"BlackMojito","Date":"2018-01-08T11:16:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Guys_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI need to render very large architecture models. But in one certain frame_co_  most of the objects in the scene are not visible. It seems that Occlusion Query can help a lot on such models. Because I have no experience on it. Could you please tell me if it is a good choice?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-08T22:26:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ unfortunately occlusion queries are only available on webgl2\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you don_t_t have a lot of meshes_co_ you can just let Babylon.js deals with it as we have a complete frustum culling in place.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you know which objects are not visible you can also manually call mesh.setEnabled(false)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tin 3.2_co_ we will introduce the notion of Containers that can be used to turn on/off large number of meshes\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2018-01-09T04:55:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_200675_qt_ data-ipsquote-contentid_eq__qt_34930_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1515450392_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t6 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello_co_ unfortunately occlusion queries are only available on webgl2\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you don_t_t have a lot of meshes_co_ you can just let Babylon.js deals with it as we have a complete frustum culling in place.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you know which objects are not visible you can also manually call mesh.setEnabled(false)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tin 3.2_co_ we will introduce the notion of Containers that can be used to turn on/off large number of meshes\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat_t_s interesting. What is the millstone for 3.2? _lt_img alt_eq__qt__dd_lol_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_laugh.png_qt_ title_eq__qt__dd_lol_dd__qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-01-09T18:53:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tearly june_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/milestones_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/milestones_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2018-02-02T03:52:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_200824_qt_ data-ipsquote-contentid_eq__qt_34930_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1515524021_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 2018/1/10 at 2_dd_53 AM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tearly june_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/milestones_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/milestones_lt_/a_gt_\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ is the container available now in alpha7?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-02T19:17:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyes boss!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2018-02-04T10:36:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_203493_qt_ data-ipsquote-contentid_eq__qt_34930_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1517599074_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 2018/2/3 at 3_dd_17 AM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tyes boss!\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tSo cool! Could you please tell me where I can find related code? Or would you mind give me some simple sample code_co_ please? \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-02-05T16:11:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_200675_qt_ data-ipsquote-contentid_eq__qt_34930_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1515450392_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 1/8/2018 at 5_dd_26 PM_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHello_co_ unfortunately occlusion queries are only available on webgl2\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you don_t_t have a lot of meshes_co_ you can just let Babylon.js deals with it as we have a complete frustum culling in place.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tIf you know which objects are not visible you can also manually call mesh.setEnabled(false)\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tin 3.2_co_ we will introduce the notion of Containers that can be used to turn on/off large number of meshes\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI want to comment on this topic  before I forgot about it.  Can I ask how this might be implemented? A _qt_Container_qt_ referenced in a Mesh_co_ or Mesh in a _qt_Container_qt_ dictionary?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis can very good for large scenes from Blender.  The Layer construct within Blender can support up to 20 _qt_Containers_qt_.  The _qt_Only selected Layers_qt_ boolean property could be replaced with a dropdown of_dd_\n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\tAll Layers\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tSelected Layers only\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tLayers as containers (or whatever they are called)\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n_lt_p_gt_\n\tThis could lead to the building really big sets from a single .blend for all the static structures meshes without all the javascript code to control things.  I must admit that .ktx compressed textures have been a big disappointment_co_ but when they are also mixed into the workflow along with the hidden _qt_Force baking_qt_ checkbox_co_ things could really scale up. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t.ktx only really shines with 4K textures.  A 4k textures (with minmaps) only takes up 5mb gpu ram.  Without compression 4k takes up 65 mb ram.  A work flow which exports containers might work like_dd_\n_lt_/p_gt_\n\n_lt_ol_gt_\n\t_lt_li_gt_\n\t\tFor each Layer_co_ manually select all &lt_sm_A&gt_sm_ meshes_co_ and merge &lt_sm_ctrl-J&gt_sm_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tClick _t_Force Baking_t_ on each merged mesh &amp_sm_ set size to 4K.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tExport_co_ remembering not to save .blend_co_ so further edits possible.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tRun batch script to generate compressed formats required.\n\t_lt_/li_gt_\n_lt_/ol_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-02-05T16:47:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOn second thought_co_ If you are going to all the meshes of each layer_co_ then each mesh is equivalent to a _qt_Container_qt_.  So you would not need containers for this workflow_co_ but would still be useful for non-merged meshes.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-02-06T21:44:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is the container doc_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_use_assetcontainer_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/how_to_use_assetcontainer_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA container is a virtual group that can add / remove meshes in one call. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"BlackMojito","Date":"2018-02-07T01:51:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_203856_qt_ data-ipsquote-contentid_eq__qt_34930_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1517953483_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t4 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHere is the container doc_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_use_assetcontainer_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/how_to_use_assetcontainer_lt_/a_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tA container is a virtual group that can add / remove meshes in one call. \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks! It is really useful for me to implement progressive rendering when the model is too big. I will read the source code too.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]