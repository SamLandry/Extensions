[{"Owner":"gamefan","Date":"2018-05-30T06:56:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI find renderTargetsOptimization very helpful. Is there a way a renderTarget frame can be cleared so that the last frame before render targets are disabled doesn_t_t stay?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can set ReflectionTextureEnabled _eq_ false_co_ but I want to have reflection textures that don_t_t use render targets.\n_lt_/p_gt_\n\n_lt_p_gt_\n\thttp_dd_//www.babylonjs-playground.com/#1YAIO7#37\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn this playground I have disabled render targets after 3 seconds but the ball reflection remains static\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-30T16:06:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can set each render target with the refresh rate you want_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tprobe.refreshRate _eq_ BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tprobe.refreshRate _eq_ BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONEVERYFRAME_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tprobe.refreshRate _eq_ BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONEVERYTWOFRAMES_sm_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamefan","Date":"2018-06-04T06:19:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Deltakosh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you for your reply but this is not what I want. I want the render targets textures to disappear after renderTargets optimization is done. The scene looks awkward when the render target textures just stay there at their last rendered frame. It looks awkward even for renders at intermittent frames with the use of refreshRate.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI want a result similar to what _qt_StandardMaterial.ReflectionTextureEnabled _eq_ false_qt_ does.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-04T16:32:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo is that custom render targets? Which render targets are we talking about?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamefan","Date":"2018-06-05T05:09:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tReflections made by MirrorTexture and ReflectionProbe. We want something like what\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_material.reflectionTexture _eq_ null_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\twould do. (As disabling render targets won_t_t update the reflection texture in the next render frames)\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_StandardMaterial.ReflectionTexturesEnabled _eq_ false _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tis the right thing to do but I don_t_t want to disable reflection textures that aren_t_t using render targets._lt_br /_gt_\n\t_lt_br /_gt_\n\tI think scene.renderTargetsEnabled should render/hide the render target texture. What affect this has now is equivalent to (an imaginary) scene.pauseRenderTargets.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2018-06-05T05_dd_13_dd_38Z_t_ title_eq__t_06/05/2018 05_dd_13  AM_t_ data-short_eq__t_Jun 5_t__gt_June 5_lt_/time_gt_ by gamefan_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_After Thought\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-05T16:28:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk make sense. I_t_m afraid you will have to go through scene.materials and get reflectionTexture property and then test if texture.isRender is true\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamefan","Date":"2018-06-06T08:21:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMan!! I was afraid of this _lt_span class_eq__qt_ipsEmoji_qt__gt_😅_lt_/span_gt_. Any chances this will be incorporated in a future release?_lt_br /_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-06T16:35:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThat_t_s kind of a really specific need no? _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gamefan","Date":"2018-06-11T10:18:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy head says no_co_ but it probably is _lt_span class_eq__qt_ipsEmoji_qt__gt_😅_lt_/span_gt_._lt_br /_gt_\n\tI am fine with your solution but wonder why no one else came across this?  _lt_span class_eq__qt_ipsEmoji_qt__gt_🤔_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-06-11T16:33:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\twell..Perhaps more will and in this case we will probably add it in the engine _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]