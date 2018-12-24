[{"Owner":"Vorion","Date":"2018-03-05T20:22:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tdo you plan on adding button masks for gui buttons_co_ so that we can have buttons that are only clickable on the desired areas?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s an example_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WWBIKZ_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WWBIKZ_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe button image is a circle_co_ but the clickable area is actually a rectangle. Buttons can also have other different shapes_co_ like cut off edges.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess the best way would be to add some kind of button mask_co_ maybe an optional second image that contains information about the clickable/hover area (like white color _eq_&gt_sm_ clickable_co_ alpha_eq_0 _eq_&gt_sm_ gets ignored)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-06T20:58:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is not something that we have in the roadmap so far but everything is possible\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-07T15:03:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_... if we had a _lt_strong_gt_control.getPixelColorUnderPointer() -&gt_sm_ color4_lt_/strong_gt_...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t..then in the onPointerDownObserver.add...  first line...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif (control.getPixelColorUnderPointer().a _eq__eq__eq_ 0)  { return }\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTHAT would reject clicking upon the control_t_s canvas... wherever it was transparent.  (I think)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWise?  Doable?  Pain-in-the-butt to do?  Am I forgetting something?   (thx)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould this solve Vorion_t_s issue?  I think so. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis would allow precision color-filtering_co_ too.  if (control.getPixelColorUnderPointer() _eq__eq_ { r_dd_ 255_co_ g_dd_ 127_co_ b_dd_ 64_co_ a_dd_ 128 })  { return }\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis would also work for _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WWBIKZ%232_qt_ rel_eq__qt_external nofollow_qt__gt_onEnter and onOut filtering_lt_/a_gt_.  (For ensuring that the CSS _lt_em_gt_cursor_lt_/em_gt_ doesn_t_t change to a fingerpointer when upon transparent background area.  Only changes to fingerpointer when entering/exiting ACTUAL colored-button area.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen using this method_co_ user would likely want to disable the automatic _lt_u_gt_default_lt_/u_gt_ onEnter button action.  (seen _lt_strong_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WWBIKZ%233_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt__lt_/strong_gt_ when pointer-entering the control_t_s background area).  In the docs_co_ I think it_t_s called\n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\tpointerEnterAnimation\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tpointerOutAnimation\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tpointerDownAnimation\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tpointerUpAnimation\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n_lt_p_gt_\n\tYa know... maybe we just need a flag.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  _lt_strong_gt_control.disallowObservationsOverTransparentAreas _eq_ true/false_lt_/strong_gt_.   Wow.  What would be the far-reaching ramifications of THAT puppy?  heh  Hmm... if user had a button image with a transparent hole in the middle_co_ user could get an onOut observation by mousing over it... and it_t_s right in the middle of a button image!  Weird.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI like my first idea better.  With precision color filtering_co_ user could make 10 buttons with one image... separating them by discrete colors.  User could know WHICH color was entered_co_ exited_co_ or clicked-upon... all on a single imagebutton.  WOW!  Crazy Wingnut ideas.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI still need help with Arbrakan_t_s wanted _lt_strong_gt_SCENE_lt_/strong_gt_.getPixelColorUnderPointer()_co_ too.  [_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#742772%2315_qt_ rel_eq__qt_external nofollow_qt__gt_PG_lt_/a_gt_]  I_t_m getting color numbers @console_co_ but not the correct colors.  hmm.  My whole life is about getting pixel colors under pointers_co_ these days_co_ it seems.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-03-07T16:46:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis is doable for sure but will require time to code it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAdding a mask to a button require to know how to apply the mask_dd_ is it stretched? how does the image fills the button..Then knowing this_co_ we will need to read from the data array on every click / move. So definitely not something to do without thinking about it _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_1_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI recommend adding an issue on the repo so we can discuss implementation there\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Vorion","Date":"2018-03-07T18:22:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you both for your input. I_t_ve created a github issue as suggested_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/3897_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/3897_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-07T20:42:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_207337_qt_ data-ipsquote-contentid_eq__qt_36147_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1520441164_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tneed to read from the data array on every click / move.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYeah.  It_t_s CPU heavy/slow.  hmm.  Thx for reminder_co_ Dk.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNeed something at hardware level/speeds_co_ if possible.  Darn.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gijs","Date":"2018-03-07T21:20:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is what you talked about_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WWBIKZ%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WWBIKZ#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-07T21:28:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thaha.  NICE!!!  Thx Gijs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust now_co_ I was trying something similar... _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#742772%2316_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#742772#16_lt_/a_gt_  line 60.  Interesting!  getImageData works much better than readPixels_co_ it seems.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tVery cool.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gijs","Date":"2018-03-07T21:44:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t _lt_strong_gt_SCENE_lt_/strong_gt_.getPixelColorUnderPointer() seems to work if you invert pointerY_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#742772%2317_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#742772#17_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-07T21:57:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tExcellent!!!  haha.  VERY GOOD!  THANKS!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease go tell Arbrakan_co_ too... in his thread.  _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/36104-get-pixel-color/?tab_eq_comments#comment-207214_qt_ rel_eq__qt__qt__gt_http_dd_//www.html5gamedevs.com/topic/36104-get-pixel-color/?tab_eq_comments#comment-207214_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(thx).  You_t_ll be a hero to him/her.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWow_co_ nice work.  Looks pretty fast_co_ too_co_ but like I would know.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor CSS cursor-changing_co_ I went experimenting with control-based gPCUP() for onEnter and onOut observers... _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WWBIKZ%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#WWBIKZ#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\thehe.  Gijs... your code works fine.  My hopes... not so good.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen pointer crosses onto blue circle_co_ BJS GUI says... _qt_Sorry_co_ I already generated an onEnter back when you crossed the Trump wall (the edge of the square).  Only one onEnter per customer._qt_  heh.  Oh well_co_ it sounded good in theory_co_ and still works for pointerDown.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gijs","Date":"2018-03-07T22:28:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes_co_ I will tell him/her. In that thread I see you_t_ve been very busy with the color picking! I think it_t_s difficult with all the events_co_ and GUIs being so flexible that they can be either a texture on a mesh or a 2d canvas image _lt_img alt_eq__qt__dd_wacko_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ title_eq__qt__dd_wacko_dd__qt_ /_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-03-07T22:36:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah_co_ and when it IS a texture... phew... the color is affected by lighting and shading and... colors get _qt_summed_qt_ with other colors.  Precision color testing becomes impossible (not like it was a good idea in the first place_co_ though).  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  But yeah_co_ sometimes folks ask questions (like Arbrakan and Vorion)_co_ and answers are slow-coming... so I jump-in with a limp/bad answer.  Essentially_co_ it is a _qt_we_t_re looking for an answer_qt_ comment_co_ sometimes with a Wingnut-provided complimentary testing-PG.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen_co_ I _qt_get-in_qt_ over my head... trying to find answers to things which I am not qualified to answer.  *sigh*.  Then I start begging for help_co_ and everyone runs_co_ fast and far.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThx for working on these two issues with us_co_ G!  You gave us the tools to test the limits of the idea.  Perfect. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"aWeirdo","Date":"2018-03-10T11:31:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_em_gt_aWeirdo randomly starts blabbering about optimization.._lt_/em_gt__lt_br /_gt_\n\tDo we really need that new color4 on every click?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#WWBIKZ%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#WWBIKZ#7_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]