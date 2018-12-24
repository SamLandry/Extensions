[{"Owner":"dale.holborow","Date":"2016-10-24T20:06:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_ 1st time poster_co_ only recently even aware of BabylonJS and extremely impressed!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a problem that after hunting around_co_ I am still a bit unclear on how to best proceed. I_t_m an experienced coder_co_ C#_co_ PHP_co_ JS_co_ etc etc_co_ with some game engine programming experience many many years ago_co_ so I am aware of concepts etc_co_ but new to the BJS tech and best approaches to a modelling idea I have.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want to model metal pipe furniture in Babylon... think chairs_co_ bed frames_co_ nightlamps_co_ whatever you can imagine_co_ made out of standard household fittings. Think something like this_dd_ _lt_img alt_eq__qt_5a794ea7ae4cf63ce576cec48ffc7a3c.jpg_qt_ class_eq__qt_ipsImage_qt_ src_eq__qt_https_dd_//s-media-cache-ak0.pinimg.com/236x/5a/79/4e/5a794ea7ae4cf63ce576cec48ffc7a3c.jpg_qt_ /_gt_ or _lt_a href_eq__qt_http_dd_//inspiringhomeideas.net/wp-content/uploads/2015/12/Stunning-copper-pipe-furniture-design-plus-lead-pipe-furniture.jpg_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//inspiringhomeideas.net/wp-content/uploads/2015/12/Stunning-copper-pipe-furniture-design-plus-lead-pipe-furniture.jpg_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe kicker is that I would like to be able to dynamically MODIFY the designs... say_co_ increase the width_co_ add an optional attachment_co_ customise the design. Ideally_co_ i_t_d come up with a furniture design_co_ set parameters on which parts of mandatory_co_ which attachments are optional_co_ which segments can be scaled_co_ apply all such modifications to the 3D rendering_co_ and on approval_co_ save the result for build and sale (if I make it that far). Note that this isnt simply scaling the entire model_co_ instead I need specifically to allow certain parts to grow/shrink in length say_co_ (according to availability of the pipe components)_co_ while not warping in any other way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the B/JS world_co_ would you approach this with pure meshes? With Bones_co_ to define connector points between joints? I_t_ve looked at various house/room designer tools but they tend to deal with furniture LAYOUT_co_ not the design/creation of the furniture itself. And not that i dont want to allow people to design a product from the ground up_co_ merely to apply mods to preexisting designs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf anyone has approached a similar problem_co_ or has ideas on where to start my investigations_co_ I would love your input!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-25T16:49:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello and welcome!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy first thought will be to use stock mesh creation tools (see MeshBuilder _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Mesh/babylon.meshBuilder.ts_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_). You can then create pipe and play with the wonderful _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Ribbon_Tutorial_qt_ rel_eq__qt_external nofollow_qt__gt_ribbon _lt_/a_gt_tool or try the _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/Parametric_Shapes_qt_ rel_eq__qt_external nofollow_qt__gt_parametric shapes_lt_/a_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThese tools allow you to really control your design so you can then scale things up or down and update the global furniture (composed of a mix of these shapes)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dale.holborow","Date":"2016-10-25T19:55:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi mate_co_ thanks! It looks like I am best served by going through the tutorials and just diving in_co_ maybe purchase the books that I keep seeing if required as well. In terms of distorting the models_co_ I see the V8 demo and it looks pretty amazing_co_ in terms of rigid surfaces_co_ moving hinges etc_co_ so if i can get hold of that source code it might point me in the right direction modelling-wise_co_ and then i have to come up with some sort of toolkit/engine structure to perform the modifications etc.. shopping-cart-style _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ The meshbuilder and ribbon etc looks like a fantatstic start_co_ i am really impressed and already thinking about how they might work really nicely. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI notice you didnt mention bones/skeletons_co_ is that because you think they wont be needed_co_ or just didnt mention them and think the mesh approach will be sufficient? I only ask about bones because I can imagine defining pipe connections as connections in a bone structure_co_ and potentially having rotatiosn of joints etc modelled that way?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI noticed one of the other users had built a kind of furniture modelling tool_co_ I might quiz him as well_co_ slightly different idea but he might have some good input. Thanks again! Hopefully I_t_ll become a regular _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-26T01:36:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi DH_co_ welcome aboard.  Yeah_co_ your project sounds excellent... and I think you_t_re in just the right dev environment.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are issues... some big ones.  Let_t_s look at common steel water pipe... and let_t_s talk about furniture/shelving _lt_u_gt_frames_lt_/u_gt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are some _qt_rules_qt_ in the water pipe world.  It comes in limited sizes_co_ so you need to place those same limits on a _qt_dynamic water pipe assembler_qt_ function.  When user wants to assemble/scale a water pipe frame... the user will need to follow the rules of water pipe.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ let_t_s talk about hybrid frames... frames made of a mix of copper water pipe (not threadable)... and standard 1.5 inch steel.  There are some adapters needed_co_ points of connection between one material and another.  There are _qt_rules_qt_ to that_co_ too.  Methods of attachment.... some methods rated for 60 LBS_co_ some for 200 LBS.  Rules_co_ rules_co_ rules.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ let_t_s bring-in the threaded rods.  We must not allow the user to build a contraption (and then order it)... that will collapse or tip-over and kill the poodle FooFoo.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Rules.  Scaling rules.  No threaded rods longer than .75 meter.  Too much wobble in that material.  Same with wooden dowels... wobble... and not rated for high loads.  Rules.  The _qt_let_t_s make furniture out of commonly found materials machine_qt_... will need to be quite a _qt_smart_qt_ algorithm... for these multi-material structures.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis thought... might make you think about making 2-5 machines... a different assembler class/factory for _lt_u_gt_each type_lt_/u_gt_ of common material.  Naturally_co_ 1.5 inch steel water pipe is very common... and extremely sturdy when threaded together into sub-structures.  It is also very heavy_co_ hard to ship_co_ even harder to assemble_co_ and even even even harder to make it be _qt_pretty_qt_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  That_t_s why shelving makers use crap plastic_co_ and a PVC shelving unit is quite a structurally-sound treat.  heh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I_t_m just rattling.  Tubes/cylinders are easy to dynamically generate with BJS/WebGL.  But the connectors... might be another story.  If you need high-detail and complicated widgets at the connectors_co_ you will probably have to make or steal some medium-rez models... and import them into the BJS scene.  It is a good bet that common pipe connectors and couplers HAVE been modeled_co_ somewhere_co_ by somebody.  Joint models.  Got a big collection gathered-up?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut if you DON_t_T need to allow the user to zoom-in on the connectors... then... you will STILL need basic modeled mesh of the connector (such as a 3-way corner of a box)... because... I don_t_t think Babylon_t_s Tube thing... can easily create a 3-receiver tube connector.  I could be wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh yeah_co_ remember _qt_the hybrids_qt_... the furniture that mixed threaded steel waterpipe with 3/4 copper_co_ with wooden dowels_co_ with a mahogany countertop?  How many kinds of connectors/attachers will we need there?  I wonder how many sizes those couplers _qt_come-in_qt__co_ so when we go to scale-up the furniture... it can follow _qt_the rules_qt_.  (As in... the bracket that holds the copper pipe to the countertop... isn_t_t available in 3 inch_co_ so the user is not allowed to scale this table/desk any larger.  Darned rules!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think game programmers call that _qt_game logic_qt_.  What is allowed and what isn_t_t.  Or_co_ I could be talkin_t_ crap.  I_t_m well-known for that.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Welcome again_co_ DH.  You look a little unhappy in that picture.  Can I get you a beer or something?  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_  Party on.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dale.holborow","Date":"2016-10-26T14:03:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tG_t_day Wingnut.. thanks for the feedback! You are absolutely correct_co_ this is a potentially massive headache_co_ and I_t_ve been thinking about it for a while_co_ but I think there are a few key things that I can do to make my life easier. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m not really planning to build a _qt_design furniture from the ground up_qt_ tool... that would be a total pain in the bollocks_co_ and exponentially difficult to code_co_ design_co_ deliver_co_ administer_co_ make safe_co_ etc. Instead_co_ similar to what you suggested_co_ I am planning to design my own items_co_ start off with a few designs that I have built myself for my own use_co_ and use those designs to make somewhat _qt_locked down_co_ preapproved_qt_ modifications.. think say_co_ swapping out the muffler on your motorcycle using pre-approved_co_ _qt_we-know-in-advance-that-this-fits substitutes_qt__co_ for a fee_co_ rather than _qt_here_t_s a pile of metal and a lathe_co_ why don_t_t you mill and weld a design of your own?_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ still a complex problem_co_ but one markedly simpler than a free-design tool.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAbsolute realism isnt critically important_co_ but i WILL need to do some work with textures etc_co_ so that the Babylon model doesnt look brutally ugly. For the pipe furniture itself though_co_ _qt_pretty_qt_ isn_t_t something I_t_m generally going for _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ A more_co_ industrial design ethos_co_ perhaps?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLooking at the V8 and Robot demos_co_ they encompass a few of the ideas I like.. a rigid structure (metal cylinder_co_ rather than cloth)_co_ joins and axes of rotation.. if i can get a hold of their source code_co_ I am pretty sure I can start coming up with something of interest. Then there_t_\\s the question of tying THAT into a shopping system... I_t_m gonna be a busy boy!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs for the face_co_ not much I can do I_t_m afraid_co_ its the one my mother gave me! Coincidentally_co_ I just realised_co_ the background is my mate_t_s garage where we were renovating his house a couple years ago_co_ so maybe that_t_s a good sign...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-10-26T15:54:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey I did not mention bones because I think they are not good candidates here \n_lt_/p_gt_\n\n_lt_p_gt_\n\tregarding v8_co_ it was entirely done with 3dsmax\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-10-26T16:00:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_148924_qt_ data-ipsquote-contentid_eq__qt_25994_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1477490599_qt_ data-ipsquote-userid_eq__qt_24115_qt_ data-ipsquote-username_eq__qt_dale.holborow_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ dale.holborow said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tAs for the face_co_ not much I can do I_t_m afraid_co_ its the one my mother gave me\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\thahah.  Yeah_co_ I understand.  It is a fine face_co_ it is.  But_co_ is there a picture around... where we could see you laughing or smiling?  I_t_d browse it.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Got website?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Convergence","Date":"2016-10-27T06:04:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy attempt (loosely based on your pictures)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#153I2K%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#153I2K#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tChange the dimensions on lines 11 to 13 and Run to customize the table..\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dale.holborow","Date":"2016-10-27T07:07:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_149041_qt_ data-ipsquote-contentid_eq__qt_25994_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1477548265_qt_ data-ipsquote-userid_eq__qt_8101_qt_ data-ipsquote-username_eq__qt_Convergence_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ Convergence said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tMy attempt (loosely based on your pictures)...\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tWow.. I didn_t_t expect that. More than the technical side (Typescript over pure JS_co_ tech demos etc)_co_ this has just just convinced me that a) the library is quick and easy enough to use_co_ and b ) the community is active_co_ proactive and friendly! Thanks very much_co_ I_t_m really looking forward to diving into this!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dale.holborow","Date":"2016-10-27T07:08:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_148954_qt_ data-ipsquote-contentid_eq__qt_25994_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1477497659_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\thahah.  Yeah_co_ I understand.  It is a fine face_co_ it is.  But_co_ is there a picture around... where we could see you laughing or smiling?  I_t_d browse it.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Got website?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYou... you want me to pose and post photos? But mate_co_ I can_t_t.. I have a rule_co_ if you_t_re good at something_co_ never do it for free _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ian","Date":"2016-10-27T11:42:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ you Will have to pay _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]