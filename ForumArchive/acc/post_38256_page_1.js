[{"Owner":"Wingnut","Date":"2018-06-15T12:46:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  A little off topic... probably belongs in the Wingnut Chronicles_co_ but what the heck.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs I tour the Scene Class code_co_ I often see lines like this...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_if (rigParent &amp_sm_&amp_sm_ rigParent.customRenderTargets &amp_sm_&amp_sm_ rigParent.customRenderTargets.length &gt_sm_ 0) {_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis entire line... COULD be replaced with...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_if(hasSubstance(rigParent.customRenderTargets)) {_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA hasSubstance() would do all three tests... 1.  Check if there_t_s a rigParent_co_ 2. Check if rigParent has property .customRenderTargets_co_ 3. Ensure that rigParent.customRenderTargets has at least one member.  Nice_co_ huh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s look at a two-test line...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_if (camera.customRenderTargets &amp_sm_&amp_sm_ camera.customRenderTargets.length &gt_sm_ 0) {_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA hasSubstance() would work for this_co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_if(hasSubstance(camera.customRenderTargets) {_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe saved 43 bytes in the first line_co_ 29 bytes in the second line.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s remove a few more bytes_co_ and change _lt_strong_gt_hasSubstance()_lt_/strong_gt_ to _lt_strong_gt_check()._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Check()_lt_/strong_gt_ is obviously a wise idea for bloat reduction_co_ but... what about perf?  Check() is slower_co_ isn_t_t it?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe check() is better named peek()  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Add it to JS/ECMA core_co_ eh?  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHey_co_ all thoughts welcome_co_ and I apologize for being JS-dumb and old-school.  It_t_s just that... these big_co_ fat tri-test code lines seem to happen often in our core code_co_ and if they could be avoided_co_ wouldn_t_t that be sweet?  Everyone with thoughts... please comment... even to call me an idiot.  I am proudly one!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ thx.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-15T14:28:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__t_display_dd_ inline !important_sm_ float_dd_ none_sm_ background-color_dd_ transparent_sm_ color_dd_ rgb(53_co_ 60_co_ 65)_sm_ font-family_dd_ _qt_Roboto_qt__co__qt_Helvetica Neue_qt__co_Helvetica_co_Arial_co_sans-serif_sm_ font-size_dd_ 14px_sm_ font-style_dd_ normal_sm_ font-variant_dd_ normal_sm_ font-weight_dd_ inherit_sm_ letter-spacing_dd_ normal_sm_ orphans_dd_ 2_sm_ text-align_dd_ left_sm_ text-decoration_dd_ none_sm_ text-indent_dd_ 0px_sm_ text-transform_dd_ none_sm_ -webkit-text-stroke-width_dd_ 0px_sm_ white-space_dd_ normal_sm_ word-spacing_dd_ 0px_sm__t__gt__qt_if(hasSubstance(rigParent.customRenderTargets)) {_qt_ _eq_&gt_sm_ this cannot test for rigParent and will crash if rigParent is undefined or null _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt__gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m wondering if calling a function will slow things down compare to inline tests. (Well it will slow down but how much?)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-15T14:30:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah_co_ it would need a try/catch... or some other way to return _lt_em_gt_false_lt_/em_gt_ if ANYTHING went wrong.  hmm.  Thx for thoughts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think it needs to be put deep in JS core/internals... but I have no idea what it looks like_co_ there.  Is JS written in machine code?  I_t_m scared.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-15T14:33:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJS is the limit _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ we can_t_t go deeper_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-15T14:39:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSure we can.  We can start a giant campaign to rally for a change to ECMAscript_co_ right?  We can gather our troops_co_ and make a stance for truth_co_ justice_co_ and the javascript way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou got phone numbers and email addresses to Microsoft JS implementers_co_ right DeltaCommando?  Let_t_s make some calls_co_ maybe a movie-trailer-like promo piece... change the JS world forever!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOkay_co_ okay_co_ that_t_s probably too much hoopla.  hmm.  Darn.  SO close to something yummy_co_ yet so far.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-06-19T15:48:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_It would take 10 minutes to add the highly-abusable hasSubstance/peek function to core ECMAscript... which would de-bloat all JS source code worldwide by .001%.  _lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_But_co_ to get that done... would be a miracle.  hehe.  .hasOwnedProperty is close_co_ and so is the has() call in the Underscore.JS add-on lib... but... not quite abusable-enough_co_ yet._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_I think the primary issue... is when a property foo.bar _eq__eq_ _lt_em_gt_false_lt_/em_gt_.  We might try _lt_strong_gt_if (hasSubstance(foo.bar)) { ... }_lt_/strong_gt_  and if hasSubstance() returns _lt_em_gt_false_lt_/em_gt__co_ we would assume that one of the three tests... failed._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_When actually_co_ foo.bar DID have substance_co_ and that substance was _lt_em_gt_false.  _lt_/em_gt_Perhaps hasSubstance returns _lt_em_gt_undefined_lt_/em_gt_ if ANYTHING went wrong during the tri-test.  I dunno.  It_t_s all way over my head.... but still..._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_if (rigParent &amp_sm_&amp_sm_ rigParent.customRenderTargets &amp_sm_&amp_sm_ rigParent.customRenderTargets.length &gt_sm_ 0)_lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t...is an annoyingly-long line for what it accomplishes. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBack in the old days... we could do this...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tif (_lt_strong_gt_var T_lt_/strong_gt_ _eq_ hasSubstance(rigParent.customRenderTargets)) { ... }\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat is weird_co_ eh?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ That_t_s when hasSubstance... becomes peek().\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m babbling aimlessly... what_t_s new?  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-06-19T16:42:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou could pass in the property you wanted to avoid dereferencing null/undefined_co_ but it would be quite slow.  Would be cool if the typescript compiler had an inline annotation like in C.  This is not tested at all._lt_br /_gt_\n\tcalled like_lt_span_gt__lt_span_gt__dd_ _lt_/span_gt__lt_/span_gt_hasSubstance(rigParent_co_ _t_customRenderTargets_t_)\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_@inline(_t_no such annotation_t_)\nhasSubstance(obj_dd_ any_co_ prop_dd_ String) {\n  if (!obj) {\n    return false_sm_\n  }\n\n  if (obj[string] _eq__eq__eq_ undefined || !Array.isArray(obj[string])) { // otherwise do a falsey test\n    return false_sm_\n  }\n\n  return obj[string].length &gt_sm_ 0_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tFun thought experiment.  Sounds like speed wins over readability/code reuse!  I had some similar thoughts when looking at some duplicate code in VR rigs as the inline code seems harder to maintain._lt_br /_gt_\n\tedit_dd_ the above code is maybe even harder to maintain_co_ as it won_t_t refactor or give compile errors when ie_dd_ property is renamed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit2_dd_ wonder about using generics and lambda as function need only be called if obj is non-null and defined -- hasSubstance(obj_dd_ T_co_ (a_dd_ T) _eq_&gt_sm_ a.customRenderTargets... _lt_span_gt__dd__lt_/span_gt_)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]