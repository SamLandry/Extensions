[{"Owner":"Wingnut","Date":"2016-02-24T05:14:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t   I decided to ask some questions about Babylon animation_co_ per a request from a friend.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  Although I am not currently experimenting with animations_co_ that does not mean others can_t_t.  In this first post_co_ I want to ask some basic questions.  (ok_co_ maybe not THAT basic)  Thanks for input/answers.  Feel free to do long answers.  heh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1.  No _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.3/Animation_qt_ rel_eq__qt_external nofollow_qt__gt_Animation_lt_/a_gt_ can run without an _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.3/Animatable_qt_ rel_eq__qt_external nofollow_qt__gt_Animatable_lt_/a_gt_? (true/false)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(I realize that Animatables are often automatically-created by easy user-exposed create-an-animation functions)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2.  Animation has no _lt_em_gt_target_lt_/em_gt_ / targetMesh.  No Animation knows what mesh it is suppose to animate. (true/false)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3.  All Animations get their _lt_em_gt_target_lt_/em_gt_ (their target mesh) from the Animatable? (t/f)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4.  Animatable.appendAnimations(target_co_ animations)... Can _lt_em_gt_target_lt_/em_gt_ be a different mesh for each call to this?  (y/n)  (next question is related)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5.  Can a single Animatable have multiple _lt_em_gt_target_lt_/em_gt_s?  (multiple mesh_co_ not multiple properties)  (y/n)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t6.  Can a single Animation have multiple _lt_em_gt_target_lt_/em_gt_s?  (again_co_ multiple mesh_co_ not talking about multiple properties.  I think ._lt_em_gt_targetPropertyPath_lt_/em_gt_ is for multi-props_co_ maybe_dd_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t7.  Animatable._lt_em_gt_loopAnimation_lt_/em_gt_ supersedes/overrides Animation._lt_em_gt_loopMode_lt_/em_gt_?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t8.  IF an Animation cannot run without an Animatable_t_s _lt_em_gt_target_co_ _lt_/em_gt_Animation._lt_em_gt_animate(...)_lt_/em_gt_ is not user-callable UNLESS user has somehow created an Animatable for it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExtra credit questions_dd_  (I_t_ll gladly take answers_co_ but I feel guilty because I should research it myself)...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t9.  Is Animatable._lt_em_gt_speedRatio_lt_/em_gt_ related-to _lt_em_gt_framePerSecond_lt_/em_gt_ in _lt_em_gt_new Animation(name_co_ targetProperty_co_ _lt_strong_gt_framePerSecond_lt_/strong_gt__co_ dataType_co_ loopMode)_lt_/em_gt_?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t10.  Is Animatable._lt_em_gt_speedRatio_lt_/em_gt_ the same value as Animation._lt_em_gt_animate(delay_co_ from_co_ to_co_ loop_co_ _lt_/em_gt__lt_strong_gt__lt_em_gt_speedRatio_lt_/em_gt__lt_/strong_gt_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEasy-read format_co_ easy to answer_co_ what else could anyone ask-for?  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt_  Hey_co_ thanks for helping Wingnut get his head on straight.  (get his crap together).  Advanced animation docs and demos... on the horizon.  (yeah_co_ right).  Did you notice that Animation is not one of the Features demos on the BJS main site?  Yet that feature is VERY important to the future of 3D worlds.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ _lt_a href_eq__qt_http_dd_//babylonjs-playground.azurewebsites.net/#HH1U5%2334_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_ is the most complicated Animation demo I ever made_co_ and it is a fun place to experiment.  aa _eq_ animatables_co_ at _eq_ animations.  Easing systems ON_co_ for the blue cone (animation #7/7b_co_ far-down in the code).  It looks like animation7b/keys7b has quit working... or I broke it somehow.  It USED-TO rotate the blue cone... with easing.  It seems to have lost its rotor-motor.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRelated to #8_co_ The Blax Maneuver begins at line 145.  149-150... create some Animatables.  Notice _t_at1_t_ and _t_at2_t_ in arrays as the last param.  I think this is because a LIST of animations can be put there.  I am assuming one animatable can control many animations... but there is a only a single target in the 2nd param.  So_co_ I_t_ll assume no multi-(mesh-) targets allowed.  This begs the question...  is pushing Animations into mesh.animations... necessary?  Or is it simply a convenient storage place?  Extra extra credit questions.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  Lastly_co_ notice I did _lt_u_gt_not_lt_/u_gt_ call Animation.animate(...) in lines 155-156.  I called Animation._animate().  This might be because Animation.animate() did not work in starting those animations.  I can_t_t remember.  Testings allowed.  Please report findings.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the answers/discussions_co_ babbers.  Everyone is welcome to comment_co_ of course.  Be well.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-02-24T17:47:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t1. True_dd_ an animatable is a collection of animations + target + start and end keys\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Correct. Animation animates a value. Animatable are here to use this value and transmit it to a target. Animatable also controls where the animation starts and ends regarding the global animation timeline.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. True\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4. Yes\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5. yes_dd_ Every animations inside an animatable can have its own target\n_lt_/p_gt_\n\n_lt_p_gt_\n\t6. Animations have no target (see #2). \n_lt_/p_gt_\n\n_lt_p_gt_\n\t7. Correct_dd_ _lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_Animatable._lt_/span_gt__lt_em style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_loopAnimation_lt_/em_gt__lt_span style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_float_dd_none_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt__lt_span_gt_ _lt_/span_gt_is created from Animation._lt_/span_gt__lt_em style_eq__qt_color_dd_rgb(39_co_42_co_52)_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-size_dd_14px_sm_font-variant_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_line-height_dd_22.4px_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_loopMode_lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t8. Animation.animate is called by the root animatable to interpolate the value managed by the animation. The animatable will then get the interpolated value and give it to the target\n_lt_/p_gt_\n\n_lt_p_gt_\n\t9. Correct_dd_ the final framePerSecond _eq_ speedRatio * framePerSecond\n_lt_/p_gt_\n\n_lt_p_gt_\n\t10. Correct\n_lt_/p_gt_\n\n_lt_p_gt_\n\t11.is pushing Animations into mesh.animations... necessary?  Or is it simply a convenient storage place? Convenient AND interesting when cascading_dd_ if you animate an object_co_ this object can implement getAnimatable() which is a function that returns objects to animate simultaneously. For instance if you start an animation on a mesh_co_ this mesh can have a material_co_ if this material has animations (stored in material.animations) then this animations will be launched as well. If the material has textures which have animations (in texture.animations) they will be started as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for providing a clear list of questions _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2016-02-24T20:11:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNow you see why I like using Blender Wingy _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt_ I just create the animation and the babylon exporter does the rest.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMind you_co_ now you ask the questions and DK has answered_co_ I guess I should ponder these esoteric issues_lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut since Jeff_co_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/20768-loading-animations-on-the-fly/?do_eq_findComment&amp_sm_comment_eq_118047_qt__gt_as he puts it_lt_/a_gt__co_ _qt__lt_em_gt_I am close to finishing (hopefully) a massively improved animation system_lt_/em_gt__qt_ - maybe I should not rush.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tcheers_co_ gryff _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-24T21:34:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for all the answers_co_ Deltakosh.  Very nice of you.  It helped me a great amount_co_ and hopefully it helped others_co_ too.  I will leave this thread open for some more time.  I and others might have a few follow-up questions.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  Besides_co_ I have not learned where/how to mark a topic as answered.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-02-25T04:22:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSmall update_dd_ I_t_ve just commited the first version of animations blending_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo basically_co_ you can now start an animation with enableBlending _eq_ true and this animation will interpolate FROM the current object_t_s state.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this PG_co_ every time you click on the FPS marker_co_ the animation is blended with box_t_s position_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2BLI9T%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2BLI9T#2_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-25T21:23:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\toooookay_co_ about these blendings... (and _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/16365-contributing-to-documentation-101/?do_eq_findComment&amp_sm_comment_eq_118204_qt__gt_writing the docs for it_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1.  Can the animation blend (re-factor/re-interpolation) happen DURING another animation run?  It seems yes_co_ when I lightly-tested your FPS-button demo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2.  If so_co_ can a blend happen during the SAME animation... running?  (Can the blended animation_co_ blend with itself?)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3.  If an animation is continuously running at its last frame (loopmode-constant)_co_ does the blend do anything?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4.  Will a blended animation have smaller steps than the original animation_co_ because it has less distance till end frame_co_ yet same amount of keys as original?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5.  If both anim1 [orig] and anim2 [blend] are carried by the same Animatable_co_ and reset() is called on the Animatable_co_ will it reset BOTH?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI could go-on for an hour_co_ yet.  It might be a _qt_simple_qt_ feature to _lt_u_gt_you_lt_/u_gt_ (because you know the animation system well)_co_ but for doc writers who are trying to head-off a bunch of forum questions... this is trouble.  In the time it takes to explain all this to me and the forum_co_ you could just add a few vague lines to the animation tutorial_co_ and be done.  We will handle the 500-question fallout on the forum_co_ later_co_ when the users get impatient and grumpy with our less-than-detailed docs on the subject.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf the docs ARE detailed_co_ then the users get grumpy and frustrated because it_t_s too much to read_co_ too much to translate_co_ over-explained by Wingnut_co_ with 35% wrong things written_co_ because Wingy didn_t_t understand it during authoring. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWingy TRIES to crawl inside Deltakosh_t_s head_co_ but Wingy doesn_t_t speak French_co_ and DK is very busy and dislikes puppytalk.  Then Wingy tests and tests and tests_co_ until he has at least SOME understanding of what DK was thinking_co_ or the use-case that caused the added feature.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWingy FINALLY writes a book-worth of text in the animation tutorial_co_ trying desperately to head-off future forum questions.  Then DK and users get discouraged because the Animation docs no longer look _qt_simple_qt_... the way we want BJS to be.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBetter to explain it thorough or explain it basic?  Nobody has an answer_co_ because it is un-answerable.  Wingy needs to make that decision himself_co_ about HOW MUCH to explain_co_ and HOW MUCH he is _lt_strong_gt_qualified_lt_/strong_gt_ to explain.  Then he must choose the words and phrases that travel best through an auto-translator_co_ and meantime_co_ he forgot what Deltakosh taught him about the new system/feature. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWingy then screams.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt_  The whole situation is really not very healthy.  hehe.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYuh_co_ yuh_co_ yuh.  Truth is_co_ I had to pull back... because it was killing me.  Still is_co_ but I cover it up with smoke screen so nobody notices_co_ and I can get back to making people laugh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow_t_s that for a purse dump?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  I know you want me to get back into these docs_co_ guys_co_ but the stress-causing issues still remain_co_ and I still have to hack source myself to get the understanding I need.  Not just hack source_co_ but build test after test... trying to imagine everything that could go wrong or have far-reaching ramifications (FRR)_co_ and writing those warnings into the docs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe camera tutorial is a perfect example.  There is VERY LITTLE detail in there.  Essentially_co_ here_t_s how to turn on THIS camera and THAT camera.  Not much detail.   How_t_s the forum question-levels regarding cameras?  About 50_co_000 questions regarding cameras_co_ so far?  *nod*.   Wingy asks in Tutorial Talk _qt_Hey_co_ should we bust-up the camera tutorial into pieces so we can get more detailed?  Answer_dd_  [crickets chirping].\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAin_t_t this fun?  I once did godray demos and sparticle demos and got lots of LIKES.  Where is it all going?  What_t_s the plan?  How do I quit losing sleep over it?  Hey_co_ here is an idea.  Try to keep-up with the high speed of innovation that is happening to BJS ... and try to keep-up with the docs-writing FOR that.  We_t_re talking INSTANT balding.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-02-25T21:41:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t1. yes\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2.no\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3. no\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4. Same timing. So same steps\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5. yes _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAnd I share your pain here. I feel the same when I write docs..Is it enough? too much? I don_t_t know. But at least there is a doc _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-03-02T23:59:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi gang!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI started a little playground.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1LNWLE%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1LNWLE#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy first time using animationEvent_co_ and it seems to be working just fine.  For a long time_co_ I have wanted ANIMATIONLOOPMODE_PINGPONG.  This is when the animation runs forward_co_ then backward_co_ then forward_co_ etc.  It is one of my favorite types of loop-mode_co_ because it continuously _qt_oscillates_qt__co_ and that is very useful (imho).  WAY back_co_ when I built _lt_a href_eq__qt_http_dd_//webpages.charter.net/wingthing/html/test/jackal/jackal56.htm_qt_ rel_eq__qt_external nofollow_qt__gt_my CSS animator called Jackal_lt_/a_gt__co_ I used ping-pong (pp) and reverse-ping-pong (rpp) often.  (open the motors table).  Boy_co_ those animations sure run MUCH FASTER than they did in the old days.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tWell_co_ today_co_ I decided to play-with accomplishing that.  I used the new animationEvent... on our familiar 4-bone rabbit.  She (he?) has 4 animations on her animat_lt_u_gt_able_lt_/u_gt_ (called _t_able_t_)_co_ one for each bone... 0-3.  Take note that the animation(s) have 100 frames_co_ but have 141 keys.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPingpong() func attempts to flip-flop (reverse) all 141 keys of all 4 animations_co_ by iterating through each _keys array_co_ and un-shifting them into a new array_co_ and then using that newKeys array to replace the old _keys of each animation.  Unshift is front-pushing_co_ so_co_ in theory_co_ key #140 will be at the beginning of the new array_co_ and key #0... at the end. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s a keys flip-flopper.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  Note that I am less-than-pro at nested for-loops_co_ so_co_ please help me check my stuff_co_ there.  I use the drill-able object inspector in the Firefox console area... often.  It also allows live-editing (poke values... from within the inspector).  SUPER handy!  To use the FF object inspector_co_ simply console.log(someObject)_co_ and then click on that object... in the console.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think it_t_s actually working_co_ but I have not been able to restart or animatable.reset() the animations.  Perhaps the animations have already stopped by the time I get the new keys installed.  But I am hoping that animat_lt_u_gt_able_lt_/u_gt_.reset()... which calls all 4 anima_lt_u_gt_tion_lt_/u_gt_.reset()... would get the job done.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAlso note that I have put the animation_lt_u_gt_Event_lt_/u_gt_ on bone0 animation ONLY.  All 4 animations have the same amount of keys_co_ so there is no reason to have _lt_u_gt_all of them_lt_/u_gt_ trigger animationEvents.  All we need is one.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee line 39?  Loop _eq_ false.  That is the only way to get the animationEvent to trigger.  At the 100th frame (141st key) of her animations_co_ Temechon_t_s trusty animationEvent... triggers nicely_co_ calling pingpong().  As you can see (in the console)_co_ I have an error.  Perhaps... I need animationLoopMode_constant... on all 4 animations... which seems impossible to accomplish with the simple Boolean _lt_em_gt_loop_lt_/em_gt_ parameter of animat_lt_u_gt_able_lt_/u_gt_s.  Instead_co_ I would need to set the animationLoopMode_constant on all 4 anima_lt_u_gt_tion_lt_/u_gt_s  (AND then set _lt_em_gt_loop_lt_/em_gt_ _eq_ false on the animat_lt_u_gt_able_lt_/u_gt_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI invite everyone to have a look_co_ see what can be learned_co_ and try to get this pingpong loop mode... activated.  Have fun_co_ thanks for the input and experiments.  Notice that our rabbit... ends-up _qt_thinking outside the box_qt_.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt_   ahem.  Rabbit humor.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-03-03T00:46:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo...some comments and fixes_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1LNWLE%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1LNWLE#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- By default_co_ the beginAnimation provides a parameter for a callback on animation end.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- You cannot directly invert keys as frame must still be in an ascendant order\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- able cannot be restarted because it was already stopped and remove from scene\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-03-03T00:49:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Deltakosh!  Well done!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Rupesh Baghul","Date":"2017-11-21T05:42:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi there_co__lt_br /_gt__lt_br /_gt_\n\tWe_t_re relatively newer to babylonJS and trying to work on the animations bit._lt_br /_gt__lt_br /_gt_\n\tSo the questions pretty simple_co__lt_br /_gt__lt_br /_gt_\n\tWe want to animate multiple targets together._lt_br /_gt_\n\tDo we need to call begin animations on each target separately or is there another way to call animations by timeline and it animates all the meshes in those key frames?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWould really apprecieate any help._lt_br /_gt__lt_br /_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-11-21T22:16:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya RB_co_ welcome to the forum. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBJS animations allow an _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/3.1/animationevent_qt_ rel_eq__qt_external nofollow_qt__gt_AnimationEvent_lt_/a_gt_.  These can be inserted into an animation_co_ and used to trigger the start of OTHER animations.  Using these_co_ you could use a MAIN animation as the controller for all SUB-animations.  You could also make a master _qt_timeline_qt_ animation that contains ONLY animationEvents.  It would be considered your master sequencer/scheduler.  Here_t_s _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground?code_eq_animationEvent_qt_ rel_eq__qt_external nofollow_qt__gt_a playground search for animationEvent_lt_/a_gt__co_ so you have some demo code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is another way to do _qt_scheduling_qt_.  Take a sniff at this_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#HH1U5%2372_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#HH1U5#72_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNotice lines 150-166.  See those big numbers at the end of those lines?  3000 _eq_ 3 secs_co_ 7000 _eq_ 7 secs_co_ 13000 _eq_ 13 secs (elapsed time since scene.isReady)_co_ etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ I think there is another timer called _lt_strong_gt_engine.deltaTime_lt_/strong_gt_.  Here_t_s _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/playground?code_eq_deltaTime_qt_ rel_eq__qt_external nofollow_qt__gt_a playground search for occurrences of that_lt_/a_gt_.  You could build an animation scheduler based-upon that_co_ too_co_ I suspect.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps.  Others may comment soon with different/better ideas.  Be well.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]