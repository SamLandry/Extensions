[{"Owner":"Mezzorio","Date":"2017-10-04T14:54:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Guys\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am currently struggling significantly with a task_co_ I have my canvas with 38 sprites in_co_ which you pan across each is set up with these values_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tstaffnum _eq_ 38_sm__lt_br /_gt_\n\t                staffs[staffnum].name _eq_ _qt_Dave_qt__sm__lt_br /_gt_\n\t                staffs[staffnum].description _eq_ _qt_Description_dd_ Dave is cool_qt__sm__lt_br /_gt_\n\t                staffs[staffnum].title _eq_ _qt_Title_dd_ Dave_t_s Title_qt__lt_br /_gt_\n\t                staffs[staffnum].image _eq_ _qt_Images/TinyPNG/Dave.png_qt__sm__lt_br /_gt_\n\t                staffs[staffnum].department _eq_ _qt_Dave_t_s Tech_qt__lt_br /_gt_\n\t                staffs[staffnum].position.x _eq_ 23.3_sm__lt_br /_gt_\n\t                staffs[staffnum].position.z _eq_ -0.2_sm__lt_br /_gt_\n\t                staffs[staffnum].position.y _eq_ 5.65_sm__lt_br /_gt_\n\t                staffs[staffnum].isPickable _eq_ true_sm__lt_br /_gt_\n\t                staffs[staffnum].size _eq_ 3_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI currently run through the array and can pull the data values for each.name .description and so on... with a mouse click_co_ so when you click a sprite it opens a modal box in html over the top of the canvas with that image and the values pulled through and displayed_co_ then you can close the box and return to canvas.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe task I am trying to accomplish_co_ is when my mouse cursor is hovering over someone_co_ i want to display there .name and .title value that_t_s being created in my js file through and display above the cursor so you can see who you are hovering over basically. I currently cannot find a way of completing this task_co_ if anyone could make a simple playground_co_ code pen_co_ whatever platform with a small demo of this in affect that I could use to understand and then apply to my work? My build is seperated into multiple files currently so making a babylon playground isnt possible_co_ but if need be i can provide a link to my build folder for download_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTHANKSSSS\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMezz\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-04T15:17:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/overviews/gui_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/overviews/gui_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-10-04T16:09:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed9095333559_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/30739-announcing-babylongui/?do_eq_embed&amp_sm_comment_eq_189650&amp_sm_embedComment_eq_189650&amp_sm_embedDo_eq_findComment_qt__gt__lt_/iframe_gt_\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-04T18:20:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%23269_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#269_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA little starter kit_co_ perhaps.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is one fullscreen cellophane (advancedDynamicTexture)_co_ 2 stack panels stacked atop each other... should be placed side-by-side somehow.  And in each stackpanel _qt_column_qt__co_ there is two textBlocks (non-clickables)_co_ each with a rectangle container around them... for pretty borders.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you can fig how to get the two stack panels to be side-by-side_co_ you_t_re off and rolling.  With me?  Green buttons should be in left column/stack_co_ blue buttons in right column/stack.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThose two stack panels (widget-stacking silos is what they are)... MIGHT need to be put into a third stackPanel or rectangle... whose .isVertical is set to false.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ to summarize... we have texts_co_ inside rects_co_ inside stacks_co_ inside adt.  We might need texts-&gt_sm_rects-&gt_sm_stacks-&gt_sm_horizonatalStack-&gt_sm_adt.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t(folks sure talk funny _t_round these parts_co_ eh?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_update_dd__lt_/strong_gt_  [_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%23270_qt_ rel_eq__qt_external nofollow_qt__gt_link_lt_/a_gt_]  Just for fun_co_ I tried adding _lt_em_gt_papapanel_lt_/em_gt__co_ a _qt_grouping stackpanel_qt_ which I then set isVertical _eq_ false_sm_ and then I put both green and blue stackpanels into IT.  No side-by-side green-blue stacks_co_ yet.  hmm.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mezzorio","Date":"2017-10-05T07:35:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_190878_qt_ data-ipsquote-contentid_eq__qt_33242_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1507133360_qt_ data-ipsquote-userid_eq__qt_4289_qt_ data-ipsquote-username_eq__qt_adam_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 hours ago_co_ adam said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed1376790699_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/30739-announcing-babylongui/?do_eq_embed&amp_sm_comment_eq_189650&amp_sm_embedComment_eq_189650&amp_sm_embedDo_eq_findComment_qt_ style_eq__qt_height_dd_258px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThis is great! Can i make this work with sprites?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-05T17:05:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMezz... over in _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/33238-mouse-hover-events/?do_eq_findComment&amp_sm_comment_eq_190836_qt_ rel_eq__qt__qt__gt_your other thread_lt_/a_gt_... I showed you the modified _qt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#VEGKI1%2310_qt_ rel_eq__qt_external nofollow_qt__gt_Overlapping Sprites_lt_/a_gt__qt_ demo that you created.  It was rigged with actionManagers on the sprites... that reported WHEN you were pointerOver them and pointerExit.  Watch the console. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tConsole is reporting _qt_over Kirsten_qt_ and _qt_exit Kirsten_qt__co_ etc_co_ so you KNOW that you can sense pointerOver and pointerExit for sprites_co_ and take actions for both events.  Currently_co_ that action is a console.log(actionEvent.source.name).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ in THIS thread_co_ Adam showed you how to launch a textBlock_co_ and turn it off_co_ and I did the same_co_ except I never turned it off... and my _qt_panel_qt_ was a bit fancier_co_ trying textblocks inside rectangles inside stackpanels... getting you ready for key/value display from your database of staffers.  Name_dd_ Kirsten_co_ Age_dd_ 24_co_ Location_dd_ Fort Worth_co_ SomethingElse_dd_ whatever_co_ you know... two columns... keys and values.  But_co_ I _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%23270_qt_ rel_eq__qt_external nofollow_qt__gt_wasn_t_t able to get the blue values column to be BESIDE the green keys column_lt_/a_gt_... yet.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe only reason why the keys must be in a different stack/column from values... is that I want to allow the key and value to be different colors.  If you put the key and value on the same textBlock.text_co_ the key and value text must be the same color.  With the 2-column method_co_ keys and values can have individual text colors.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ you know how to sense pointerOvers/Exits for sprites. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tInstead of doing console.log(actionEvent.source.name) whenever you see a pointerOver... do displayStafferData(actionEvent.source.name).  DisplayStafferData() will be a big fat gui builder.  It doesn_t_t add an advancedDynamicTexture every time a staffer panel pops-open.  That is done only once.  It DOES create/enable a special stackpanel or many stackpanels... with many textBlocks and maybe some rectangles.  It displays all the data for THAT staffer... piece by piece_co_ assembled into a fairly large panel... somewhat like the starter kit I made (only much bigger)... or somewhat like Adam_t_s example.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO_co_ you have a 2-piece thing_co_ here. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t   #1 - use/install the _qt_Am I over a sprite?_qt_ code from that other thread. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t   #2 - steal code from Adam_t_s or my Babylon GUI demo _co_ pasting it into a function - displayStafferData(staffer)..   A universal stafferData report-generator func.  With me?  You have all the tools you need.  One part from that other thread_co_ and one part from this thread.  Wire them together_co_ and you have success_co_ yes?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ if you wish_co_ make us a nice 3 non-overlapping-sprite playground_co_ wire-up the pointerOver stuff from the other thread_co_ and then we will attach Adam_t_s or my labelMaker/panelMaker that pops-up when each sprite is pointerOver_t_d.  Sound like a plan?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo yes_co_ it can be done with sprites... and it starts with your other thread that has pointerOver working for sprites.  Include a call to displayStafferData(name) in your onPointerOver() handler_co_ and you_t_re done... sort-of.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tFor at least PART-OF your pop-up panel_co_ I think you will need a two-column display for the key-value structure of your DB_co_ and I have not yet found HOW to position 2 GUI stackpanels side-by-side.  I_t_m stuck at _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#XCPP9Y%23270_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#XCPP9Y#270_lt_/a_gt_ with green stackpanel and blue stackpanel NOT sitting side-by-side... yet.  I_t_ll fight with it a bit... see what I can learn. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRem... #270 is only the PANEL-building part of your 2-part situation. The other... is sensing pointerOver and CALLING the panel launcher with the correct staffer as a param/arg.  Then the panelMaker can do _qt_staffersDB.findByName(name) and use the correct record/data to _qt_populate_qt_ the new popup panel-with.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-10-05T18:19:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tWingnut needs to write a book.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-05T20:28:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  I think I just did.  Felt like I pooped-out a riverboat.  heh\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mezzorio","Date":"2018-05-04T13:34:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre you still around on here!? _lt_span_gt__lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I was made redundant in my last place hence the halting of my work with this_co_ but I am restarting it for my own personal sites use!_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Just hoping your around for me to ask questions of again as you were my light in the dark with this work _lt_span_gt__lt_img alt_eq__qt__dd_P_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ title_eq__qt__dd_P_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt_Thankss_lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]