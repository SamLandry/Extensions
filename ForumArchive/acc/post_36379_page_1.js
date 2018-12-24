[{"Owner":"Tomm Huth","Date":"2018-03-14T19:42:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m playing around with the particle system_co_ trying to create subtle background particles wafting randomly around. I think i have something (_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WJBZQH_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#WJBZQH_lt_/a_gt_)_co_ but I_t_d like to fade in particles - not just out. Particles suddenly appearing is a little jarring. Is that even possible? I know a _qt_soft birth_qt_ of particles has been mention here before_co_ but I couldn_t_t really make much sense of it as is also tried to do alot more. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_dd_ how can i use particles with a transparent scene clearColor? With that_co_ particles are simply not visible until they appear over some geometry in the scene.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny tips?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Tomm Huth","Date":"2018-03-15T00:06:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHa! I think there was something with my colors that messed things up_co_ but\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_\nparticleSystem.color1 _eq_ new Color4(1_co_ 1_co_ 1_co_ .1)\nparticleSystem.color2 _eq_ new Color4(1_co_ 1_co_ 1_co_ .85)\nparticleSystem.colorDead _eq_ new Color4(1_co_ 1_co_ 1_co_ 0.0)\n\nparticleSystem.blendMode _eq_ ParticleSystem.BLENDMODE_STANDARD_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tworks like a charm. I don_t_t know why tho_co_ so if anyone has any background info on this that would be great. How does particles get blended with the environment? My texture is an alpha channel png.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow if only i could get the particles to fade in. I tried the suggestion from \n_lt_/p_gt_\n_lt_iframe allowfullscreen_eq__qt__qt_ data-controller_eq__qt_core.front.core.autosizeiframe_qt_ data-embedcontent_eq__qt__qt_ data-embedid_eq__qt_embed6734781033_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/11075-particles-smooth-birth/?do_eq_embed_qt_ style_eq__qt_height_dd_205px_sm_max-width_dd_502px_sm__qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t but that did not work.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-15T00:21:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#ZVNDN%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#ZVNDN#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Tomm Huth","Date":"2018-03-15T12:07:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthats static particles_co_ and not really what my playground does tho. Copying the updateFunction does not seem to make a difference either_co_ in fact it messes up the fading out of the particles (they fade out_co_ then in_co_ and then just disappear).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#WJBZQH%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#WJBZQH#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-15T12:55:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIts showing you that you can make a custom update function... modify it how you need.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Tomm Huth","Date":"2018-03-15T22:02:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_m trying to_co_ but its not obvious to me what to do. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying this\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (particle.age &lt_sm_ particle.lifeTime * .35) {\n                particle.color.a _eq_ particle.age / (particle.lifeTime * .35)\n            }\n\n            if (particle.age &gt_sm_ particle.lifeTime * .7) {\n                let x _eq_ (particle.age - particle.lifeTime * .7) / particle.lifeTime * .3\n                particle.color.a _eq_ 1 - x\n                console.log(x)\n            }_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tbut it does not work_co_ but i cannot find how the math is wrong. Fade in works_co_ but fade out does not. Is this a case of to many decimals?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Tomm Huth","Date":"2018-03-15T22:53:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tTurns out_lt_strong_gt_ x * 10_lt_/strong_gt_ solved it! Man I suck at math lol\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-03-16T15:21:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tnaw_co_ math just sucks.  &lt_sm_3 glad you figured it out.  I was gonna get at it for you this morning but you got it so cool!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]