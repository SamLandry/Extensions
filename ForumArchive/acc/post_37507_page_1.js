[{"Owner":"SterlingRunion","Date":"2018-05-08T18:47:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi everyone new poster here. I have a scene that has several particle systems rotating around a sphere. When the scene starts the particle systems leave a smattering of material that I did not intend. My question is how to I fix this? I want the particle systems to behave without this _qt_smatter_qt_. The picture show the issue.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the url_dd_ _lt_a href_eq__qt_http_dd_//www.sterlingrunion.com/Planet/Index_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.sterlingrunion.com/Planet/Index_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe javascript is  /Scripts/planet.js\n_lt_/p_gt_\n\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/part-system-issue.png.532e0ccf82317cd9f7e6ac82eb72b706.png_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_18191_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_05/part-system-issue.thumb.png.ca73bd04a653e833cec55278fb9f384e.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_part-system-issue.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-05-09T03:24:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi SR_co_ welcome to the forum!  Sorry for the slow replies on this.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    window.onload _eq_ function () {_lt_br /_gt_\n\t        event.preventDefault()_sm__lt_br /_gt_\n\t        let wdlg _eq_ document.getElementById(_t_loader-display_t_)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am getting error_dd_  _lt_em_gt_event is not defined..._lt_/em_gt_ on that middle line 137.  FF 52 ESR.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_Smatter_qt_.. hehe.  I like that term.  We HAVE seen residual particles happen upon re-runs... at times.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAllow me to ask... are the _qt_smatters_qt_ less-likely to happen... on INITIAL loads/unconditional reloads?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt is more-likely to happen on subsequent runs AFTER the initial run?   Thoughts?  (thx)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI don_t_t know what causes it... but smarter people... might. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tResidual particles after re-runs... yep... we_t_ve seen it.  Same weird stuff happens when you un-focus (Alt-Tab) away-from a particle-spraying scene_co_ and then return.  Sort of a PUFF thing happens.  Pent-up particle energy or something.  _lt_span_gt__lt_span_gt__lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SterlingRunion","Date":"2018-05-09T12:48:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Wingnut thanks for the reply. What browser are you using that throws the event is not defined? The residual particles happen on initial run. It starts twice but the code only starts it once. It _qt_puffs_qt_ then starts again.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-05-09T13:16:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_214248_qt_ data-ipsquote-contentid_eq__qt_37507_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1525836284_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 hours ago_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tFF 52 ESR.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat_t_s Firefox 52 ESR... sort of a Pale Moon half-breed.  hahaha.  Ahem. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tInside joke... Pale Moon is a serious branch-off from normal Firefox.  Firefox 52 ESR is _qt_extended support release_qt_... which is a limp branch-off from Firefox normal releases.  I think Firefox ESR is pretty popular... especially among those who are rejecting _qt__lt_span_gt_Quantum_lt_/span_gt__qt_.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the added details about your issue... well done.  I still have no answers_co_ but others are nearby... stay tuned.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCan you do _lt_strong_gt_scene.executeWhenReady(function() { startMyParticleSystems() })_lt_/strong_gt_  ?  Any improvements?  (thx for checking.  just an idea_co_ probably a bad one.)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SterlingRunion","Date":"2018-05-09T18:01:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI will have to do some testing on Firefox it seems. I call scene.executeWhenReady()_co_ then create the particle systems and then in scene.registerBeforeRender() the systems call start() by checking a bool flag on an object that holds the info that I need for display.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tparticleMachine.forEach(function (item) {_lt_br /_gt_\n\t                item.ps.emitter _eq_ new BABYLON.Vector3(item.distance * Math.sin(item.alpha)_co_ theSun.position.y_co_ item.distance * Math.cos(item.alpha))_sm__lt_br /_gt_\n\t                item.pe.position _eq_ new BABYLON.Vector3(item.distance * Math.sin(item.alpha)_co_ theSun.position.y_co_ item.distance * Math.cos(item.alpha))_sm__lt_br /_gt_\n\t                item.alpha +_eq_ .005_sm__lt_br /_gt_\n\t                if (item.started _eq__eq_ false) {_lt_br /_gt_\n\t                    item.started _eq_ true_sm__lt_br /_gt_\n\t                    item.ps.start()_sm__lt_br /_gt_\n\t                }_lt_br /_gt_\n\t            })_sm_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]