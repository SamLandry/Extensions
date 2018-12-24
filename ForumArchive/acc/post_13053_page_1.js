[{"Owner":"mop","Date":"2015-03-11T10:54:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_i am compositing multiple scenes to a final render result. Currently i am not really sure if i am doing things correctly. Either i have hit multiple bugs or i am doing things wrong. So i am asking for feedback and or alternative ways to achieve my goal._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So here is what i have (a minimal testcase)_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//mop.aries.uberspace.de/glowtestung/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//mop.aries.uberspace.de/glowtestung/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I tried to make a playground file but somehow i keep getting an error_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#24BIXP_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#24BIXP_lt_/a_gt_ . _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Some explanation on what i am trying to do_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a base scene with several objects. Then i have a special scene where i am rendering a few special objects. I want to apply a glow effect on these objects via postprocessing._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Finally i have a composite scene. I want to render both scenes as a RenderTargetTexture and then combine them_dd_ This should be my final render result._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now i am having multiple problems_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1. Whenever i am using a scene ONLY as a renderTarget multiple BABYLON features won_t_t work_dd_ Animations_co_ Physics_co_ Particlesystems (the red box in the example should have an animation)._lt_/p_gt__lt_p_gt_2. How can i apply a post process for one scene only? I want to reuse the same camera (see code comments). Bug?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The more i am working with it the more i think that i am working against babylon.js _dd_S How can i achieve my goal? Or am i doing everything alright and i simply hit some bugs? _dd_S_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-12T01:30:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That_t_s a lot of questions _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1. Just in case I would like to get some playgrounds example to understand each step _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_2. You cannot share a camera between scene_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But from my point of view_dd__lt_/p_gt__lt_p_gt_- I would probably suggest to keep just one scene_lt_/p_gt__lt_p_gt_- You can have several cameras and use them with various custom render target (see example here_dd__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Samples/blob/master/Scenes/Customs/customRenderTarget.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Samples/blob/master/Scenes/Customs/customRenderTarget.js_lt_/a_gt_ ) _lt_/p_gt__lt_p_gt_- renderTarget can use beforeRender and afterRender to define meshes visibility (in order to hide some of them according to the current renderTarget)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not sure I_t_m clear _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-03-12T08:11:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_There is an error in the link DK_co_ the _qt_)_qt_ closing at the end_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-12T22:53:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Fixed_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mop","Date":"2015-03-15T14:46:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sorry for the late reply and thanks for your answer._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What you describe makes sense to me and i would really like to have only one scene. I consider my initial approach a big_co_ ugly workaround. That_t_s why i reached out to the forums _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However i still can_t_t figure out how to achieve my goal in code_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#20Z4QM%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#20Z4QM#3_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I now have my scene and a plane to display my rendertarget._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However switching the activeCamera in renderTarget.onBeforeRender doesn_t_t seem to work _dd_S_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also how would i position the plane so it would always fill out the screen (like a glass pane right in front of the camera)._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-15T16:55:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can define which camera to use directly on the renderTarget_dd_ myRenderTarget.activeCamera _eq_ camera_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mop","Date":"2015-03-15T16:56:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_oh! awesome _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ thanks_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mop","Date":"2015-03-16T07:14:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am very very close to the desired result now _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1FWVTO_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1FWVTO_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Problems_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1. the postprocess effect on the rendertargettexture camera won_t_t get applied _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I could of course merge the shader with my result postprocess but i think that would be very ugly _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_2. you can_t_t use isVisible with rendertargettextures (i worked around using material.alpha which is ok for me)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-16T18:58:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_1. What do you mean by _qt_won_t_t get applied_qt_ ?_lt_/p_gt__lt_p_gt_2. What do you want to achieve here?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mop","Date":"2015-03-16T20:07:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I want to render the target texture and then apply a post process effect on the result._lt_/p_gt__lt_p_gt_Afterwards i want to mix the resulting (post processed) image with the rest of the scene._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In my example_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I want to render the red box separately with the applied to it. Then i want to render the normal scene WITHOUT the blur. The resulting image should contain a blurred red box and _lt_/p_gt__lt_p_gt_the non blurred scene. Does that make sense?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_1. During scene rendering postprocesses on rendertargetcameras will be ignored (won_t_t get applied) _eq_&gt_sm_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/babylon.scene.ts#L1258_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/babylon.scene.ts#L1258_lt_/a_gt_ (its hardcoded to false _dd_|) _lt_/p_gt__lt_p_gt_2. see above. i hope it is clear? _dd_S_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"mop","Date":"2015-03-16T20:10:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ah lol...didn_t_t even answer to 2_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1FWVTO%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1FWVTO#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I replaced the alpha workaround with _qt_isVisible_qt_. As you can see the red box is now NEVER visible. It should however be visible for the renderTarget. The red box should never be rendererd as part of the main scene. That_t_s not possible using isVisible it seems. However material.alpha works. That is perfectly fine for me_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-16T20:19:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes you_t_re right (PR validated though_dd_))_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_isVisible is evaluated before renderTargets _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]