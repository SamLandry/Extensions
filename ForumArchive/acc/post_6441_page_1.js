[{"Owner":"Alex_on_the_web","Date":"2014-05-14T19:42:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello fellows!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_ve been working on my school project_co_ as I_t_ve mentioned before somewhere_co_ and I_t_m taking a break from terrain generation_co_ and getting back to importing some models as meshes_co_ but I_t_ve found something I can_t_t get through._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Namely_co_ I_t_m trying to use some files as models acquired from _lt_a href_eq__qt_http_dd_//www.ro.me_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.ro.me_lt_/a_gt_  (because these are the cutest_co_ and they fit my needs)_co_ but the problem is that they are in three.js_t_ format_co_ and I_t_ve devoted my time to implement this featurette in Babylon.js. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The problem is_co_ that I need my models animated_co_ and the three.js format (in my case) uses mesh morph animation. That is practically a keyframe based animation just like the skeleton animation in babylon_co_ but no skeletons_co_ instead all the vertices for all keyframes._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there any support for such things (I_t_ll do the format conversion) in babylon? Or can you think of a clever workaround_co_ given you know all the hidden bits of babylon? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you deem my case unsolvable_co_ can you suggest a place where I can browse for animatable models (with bones for babylon then)?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks in advance_co__lt_/p_gt__lt_p_gt_Alex_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-15T00:36:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m DEFINITELY thinking about adding morph targets. This is a must have feature. Unfortunately_co_ this won_t_t happen before 1.13 _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In the meantime_co_ you can load the geometries and update your mesh manually through mesh.setVerticesData_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Alex_on_the_web","Date":"2014-05-15T22:46:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks! I myself was also thinking about that alternative_co_ but I thought that might be somehow slower than a stock function (for some unknown WebGL dark trickery)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is this feature_co_ you plan to insert_co_ simply wrapping this workaround in a function_co_ or somewhat more complex? If so_co_ I might try to implement it_co_ as I_t_m going to have to do it anyway._lt_/p_gt__lt_p_gt_(Also_co_ I use typescript_co_ and you mentioned that you would want to move there too)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-15T23:17:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I thought about having animations take care of this but there will be no trickery just a list of vertexData to apply on each frame _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-05-17T18:51:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_trickery just a list of vertexData to apply on each frame_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DK_dd_ Will it be possible to derive that vertex data come from Blender Shape Keys?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-17T18:57:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_yes _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-17T18:58:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey Gryff_co_ to implement this feature I need a sample scene in Blender. I_t_m sure you have that in stock _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-05-17T19:34:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_I_t_m sure you have that in stock_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m sure I can dig one out for you - if not I can make something for you _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-18T23:31:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Let_t_s go for it so_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-05-19T15:56:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok DK - I_t_m sending you two .blend files you can play with._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_1_dd__lt_/strong_gt_ is a ball that has two shape keys - _lt_u_gt__qt_squish_qt__lt_/u_gt_ and _lt_u_gt__qt_squash_qt__lt_/u_gt_. It has a short animation but apart from that it is a very simple file._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_2_dd__lt_/strong_gt_ is a _qt_talking head_qt_. Still very simple though it is four objects - head two eyes and teeth._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I gather from watching your recent talk that you may not be too familiar with Blender so the image below is to describe the layout of the files_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_A_lt_/strong_gt_ - the _lt_u_gt_scene layout_lt_/u_gt_ - just make sure that _qt_Male Head_qt_ is selected and you will see all the other stuff_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_B_lt_/strong_gt_ - the _lt_u_gt_properties_lt_/u_gt_ of the current selected object. Make sure the little triangle is selected and you will see the _lt_u_gt_shape key_lt_/u_gt_ window. You will see 3 shape keys_co_ open_co_ wide_co_ upper in the red box. The first two control vertices of the whole mouth and the last one just the upper lip. The _lt_u_gt__qt_Basis_qt__lt_/u_gt_ is the unaltered orginal mesh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_C_lt_/strong_gt_ - The _lt_u_gt_shape key editor_lt_/u_gt_ - a window for creating shape key animations. Below it is the basic Blender animation timeline - click arrow keys to play. Notice the three shape keys in the purple box. LMB and drag on the green flag with a number and you can scrub through the animation and the values in the purple box will change._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you want to delete theys animation keys_co_ put your mouse over this animation window and making sure all keys are selected (they will be bright yellow-orange) hit the X key and then confirm _qt_delete key frames_qt_. To simply select all key frames - tap the A key till they are that bright yellow orange colour._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_strong_gt_D _lt_/strong_gt_- is a window containing a text file describing the mixes of the three shape keys that roughly describe the basic _lt_a href_eq__qt_http_dd_//www.garycmartin.com/phoneme_examples.html_qt_ rel_eq__qt_external nofollow_qt__gt_Preston Blair phonemes_lt_/a_gt_ for speech. ( only in the _qt_talking head_qt_ file)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hope I am not being insulting with the image and the above - just do not want you confused at all._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I will PM you with a link to the zip files._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If the new Blender exporter looks to be working with shape keys - please post so I can try it out.. Looking forward to trying some lip syncing._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you need anything else - just ask._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_05_2014/post-7026-0-98550300-1400513829.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_05_2014/post-7026-0-98550300-1400513829_thumb.jpg_qt_ data-fileid_eq__qt_1668_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-7026-0-98550300-1400513829_thumb.jp_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-05-19T17:24:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Waooou that is great!! I will work on it for 1.13 (But I need to finish 1.12 before_dd_))_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks again!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Alex_on_the_web","Date":"2014-05-19T18:34:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you guys for looking into it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Please let me know if I can be of any help._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-05-20T06:19:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Give the flair _qt_Blender Master_qt_ to gryff please someone _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Alex_on_the_web","Date":"2014-11-17T15:21:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Any update on this? I was not really following up all updates since 1.12._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Has it been implemented? Where do I look for it and how should I use it?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-11-17T15:52:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes.  It was not made part of the BABYLON repository / namespace.  It is in the MORPH namespace_co_ in the Extensions repository._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Version 1.0 could not actually do the talking shown in the above thread.  Working on 1.1 which will.  See this thread for this._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/10210-webaudio-support-for-version-20/_qt__gt_http_dd_//www.html5gamedevs.com/topic/10210-webaudio-support-for-version-20/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Some 1.0 examples are in this thread.  The name at the time was BABYLON.Automaton.  The Tablecloth &amp_sm_ Multi-group are the ones to concern yourself with_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/9779-alert-shape-shifters-are-in-our-midst-automatons-preview/_qt__gt_http_dd_//www.html5gamedevs.com/topic/9779-alert-shape-shifters-are-in-our-midst-automatons-preview/_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Xeonzinc","Date":"2015-02-25T10:55:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is there any news on morph targets?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was playing around with putting a talking head from 3ds max into babylon and realised it wasn_t_t supported yet._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I imagine getting it into the 3ds max exporter is even further down the road (is this even planned or will it just be blender?) so will put this in hold for now_co_ I_t_m glad it is being worked on though_co_ this will be a really great feature!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-02-25T16:15:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am doing work in that area_co_ though I also see it on road map.  My focus is in the before render architecture (not animation system) _co_ and I also do not believe in the importing of morph targets_co_ per se._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Rather_co_ I import shape keys from Blender_co_ grouping them together.  This has 3 effects over directly importing morph targets_dd__lt_/p_gt__lt_ul_gt__lt_li_gt_You can have multiple groups_co_ say one for face_co_ &amp_sm_ two for hands._lt_/li_gt__lt_li_gt_A group limits the vertices that need changing_co_ not the whole mesh_co_ which improves CPU performance._lt_/li_gt__lt_li_gt_You can make an infinite # of morph targets for each shape key group_co_ once on the babylon side._lt_/li_gt__lt_/ul_gt__lt_p_gt_My first implementation also combined morphing with POV movement &amp_sm_ rotation.  I have since pulled out POV to make it standalone.  MORPH now subclasses it_co_ though that has not been pushed up to repository._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have experimented with speech &amp_sm_ voice syncing.  I am waiting on MakeHuman 1.1 to come out_co_ so things are in a holding pattern.  Their road map has shifted the date_co_ again &amp_sm_ again. _lt_a href_eq__qt_http_dd_//bugtracker.makehuman.org/versions/2_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//bugtracker.makehuman.org/versions/2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have no need to do anything with 3ds max._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]