[{"Owner":"Pryme8","Date":"2018-07-23T23:23:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAre we able to do audio output off a shader like_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.shadertoy.com/view/ldfSW2_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.shadertoy.com/view/ldfSW2_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tOr do I need to rely on html5 audio api methods to procedurally generate noise?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is how they do it_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//stackoverflow.com/questions/34859701/how-do-shadertoys-audio-shaders-work_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//stackoverflow.com/questions/34859701/how-do-shadertoys-audio-shaders-work_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tWhich means I doubt we have a like method_co_ but from what this describes I bet we could pull it off decently easy.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-23T23:55:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI would start to send sound to shader that a bit easier to pull off from understanding. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-24T00:01:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah_co_ but I want to generate the sound procedurally on the GPU.  Its part of my asset-less game project.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-24T00:11:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUnderstand that_co_ but when you know how to send sound you only a step away from generate it. We can make this a community project if you like to.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will use WegGL2 32bit Float Textures_co_ later you can convert to WebGL1 equivalent. Hope that is ok. _lt_br /_gt_\n\t_lt_br /_gt_\n\tDo you have experience with HTML5 Audio??? i have only limited knowledge. Would be a good start_co_ if someone show me how to get a 32FloatArray out of Audio context.  A 440Hz Sine would be also nice. hahah_co_ im a noob. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-24T00:16:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyes I do_co_ I have programmed full synths._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//youtu.be/E_HpCoOGMQ8?t_eq_55s_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//youtu.be/E_HpCoOGMQ8?t_eq_55s_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\there is a lame example from like years ago._lt_br /_gt_\n\t_lt_br /_gt_\n\tIve got an idea. Hang tight.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-24T01:05:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think there might be a possible bug in \n_lt_/p_gt_\n\n_lt_p_gt_\n\trenderTargetTexture.readPixels()_sm_\n_lt_/p_gt_\n\n_lt_ol style_eq__qt_color_dd_#212121_sm_font-size_dd_12px_sm__qt__gt_\n\t_lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#881391_sm__qt__gt_buffer_dd__lt_/span_gt__lt_span_gt_[Exception_dd__lt_span_gt_ _lt_/span_gt__lt_span_gt_TypeError_dd_ Method get %TypedArray%.prototype.buffer called on incompatible receiver [object Object] at TypedArray.get buffer [as buffer] (&lt_sm_anonymous&gt_sm_) at TypedArray.remoteFunction (&lt_sm_anonymous&gt_sm__dd_2_dd_14)_lt_/span_gt_]_lt_/span_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#881391_sm__qt__gt_byteLength_lt_/span_gt__lt_span_gt__dd__lt_/span_gt__lt_span_gt_[Exception_dd__lt_span_gt_ _lt_/span_gt__lt_span_gt_TypeError_dd_ Method get TypedArray.prototype.byteLength called on incompatible receiver [object Object] at TypedArray.get byteLength [as byteLength] (&lt_sm_anonymous&gt_sm_) at TypedArray.remoteFunction (&lt_sm_anonymous&gt_sm__dd_2_dd_14)_lt_/span_gt_]_lt_/span_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_span style_eq__qt_color_dd_#881391_sm__qt__gt_byteOffset_lt_/span_gt__lt_span_gt__dd__lt_/span_gt__lt_span_gt_[Exception_dd__lt_span_gt_ _lt_/span_gt__lt_span_gt_TypeError_dd_ Method get TypedArray.prototype.byteOffset called on incompatible receiver [object Object] at TypedArray.get byteOffset [as byteOffset] (&lt_sm_anonymous&gt_sm_) at TypedArray.remoteFunction (&lt_sm_anonymous&gt_sm__dd_2_dd_14)_lt_/span_gt__lt_/span_gt_\n\t_lt_/li_gt_\n_lt_/ol_gt_\n\n_lt_p_gt_\n\tThis is pretty odd.  Im pretty sure if I can get this byteArray to construct correct_co_ we should hear a horrifying noise being played._lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#CL6JEL%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#CL6JEL#4_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tNevermind Im dumb_co_ I got this._lt_br /_gt_\n\t_lt_br /_gt_\n\tGetting closer with this_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#CL6JEL%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#CL6JEL#6_lt_/a_gt__lt_br /_gt_\n\tCause at least I_t_m starting to get the correct bucket size now.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-24T01:49:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/22373-peapboy/?do_eq_hovercard_qt_ data-mentionid_eq__qt_22373_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/22373-peapboy/_qt_ rel_eq__qt__qt__gt_@PeapBoy_lt_/a_gt_ If you find time i need an example of gl.texImage2D(gl.TEXTURE_2D_co_ 0_co_ gl.RGB32F_co_ data_co_ 1_co_ 0_co_ gl.RGB_co_ gl.FLOAT_co_ null)_sm_ in Babylonjs. Thank you_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-24T01:55:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ Don_t_t rush_co_ i need to test things_co_ i keep this thread in mind. will be back asap.  \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-24T01:59:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tmaybe its also easier in terms of babylonjs to work with an Unit8Array. (But then you have to pack it_co_ and unpack it_co_ and pack it ...)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-24T03:11:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok got it._lt_br /_gt_\n\ti will continue tomorrow. out of time right now._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#0GT2HX_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#0GT2HX_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-24T15:35:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt_^_^_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_happy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/happy@2x.png 2x_qt_ title_eq__qt_^_^_qt_ width_eq__qt_20_qt_ /_gt_ awesome I will check out whats going on when I get home and have speakers!  Ill use your rtt method_co_ and combine it with a shader to output a image that gets converted into a byteArray._lt_br /_gt_\n\t_lt_br /_gt_\n\tSo the way that I was conceptualizing this is_dd__lt_br /_gt_\n\t44100 sample rate_lt_br /_gt_\n\t10 seconds of sample_lt_br /_gt_\n\t_lt_br /_gt_\n\tGives us 441000 bytes_lt_br /_gt_\n\tSo in an Image with our max width being 4k_co_ we get a height of 110.25 which we ceil to 111_sm__lt_br /_gt_\n\t_lt_br /_gt_\n\tso now we have a 4k by 111px image which if we wanted to be fancy we could do a square image by doing the sqrt of (441000) which equals approx 665.  So instead of a 4k by 111px lets do a 665x665px image that becomes our rtt._lt_br /_gt_\n\t_lt_br /_gt_\n\tNow in our sound generation shader we pass the uniforms bufferSize vec2(665.)_co_ duration float 10.0.  (we might have to do different ones later but this is a prototype)_lt_br /_gt_\n\t_lt_br /_gt_\n\tThen we need to get our sampling space correct which can effectively be a float that each pxl needs assigned to it._lt_br /_gt_\n\tso something like _lt_br /_gt_\n\tvec2 timeSpace _eq_  vec2(1.0/(vec2(duration)/bufferSize))_sm__lt_br /_gt_\n\tfloat timeCoords _eq_ (vUV.x*timeSpace.x)+(((vUV.y-1.0)*timeSpace.y)*timeSpace.x)_sm__lt_br /_gt_\n\t_lt_br /_gt_\n\t^^^^ that math is not correct I bet_co_ but hopefully gets the idea across._lt_br /_gt_\n\tSo from there each pxl effectively has a timeCoord which should be a unique float starting at 0 and hopefully ending at 10_co_ every pixel after 10 could be ignored unless you wanted a overflow gutter for the sound (useless most of the time)_lt_br /_gt_\n\t_lt_br /_gt_\n\tNow from there we pass the timeCoords through various generators that change each pxl accordingly._lt_br /_gt_\n\tred _eq_&gt_sm_ LeftChannel Min_lt_br /_gt_\n\tgreen _eq_&gt_sm_ LeftChannel Max_lt_br /_gt_\n\tblue _eq_&gt_sm_ RightChannel Min_lt_br /_gt_\n\talpha _eq_&gt_sm_ RightChannel Max_lt_br /_gt_\n\t_lt_br /_gt_\n\tthen whabam_co_ grab the rtt internal texture when its ready and pass that to the audio context to spin up the buffer._lt_br /_gt_\n\t _lt_br /_gt_\n\t_lt_br /_gt_\n\tThis is gonna be dope_co_ if we do this right we could effectively generate whole songs off the GPU and create a whole niche for music/sound production.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-24T23:27:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\there comes the sun\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#0GT2HX%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#0GT2HX#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-25T00:09:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tClose_co_ looks like you are doing a mono deployment though._lt_br /_gt_\n\tWhat you made and what I got sitting at the house_co_ I think we can make this a real thing._lt_br /_gt_\n\t_lt_br /_gt_\n\tthere is no reason to add the iTime in either_co_ that will just mess up the sound generation once we are using functions to make the sounds we want.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#0GT2HX%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#0GT2HX#2_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-25T03:21:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#16HY5Y%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#16HY5Y#3_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tThis is more or less the structure I was hoping for.  Have not gotten this to play a sound yet_co_ so maybe you can help with that part._lt_br /_gt_\n\t_lt_br /_gt_\n\tTrying to get it so the sound can be generated in its entirety in one pass and not have a uniform be updated constantly.  Basically one pass its done and its now a usable asset.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-25T05:06:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\thello_lt_br /_gt_\n\tok_co_ i will look into it. _lt_br /_gt_\n\tYes_co_ stereo is on my to do list. Their is actually a smarter way to to it with Float32 Textures_co_ but i save this one for a weekend._lt_br /_gt_\n\tAnd meanwhile_dd_ this is the base WebGL (easy) _dd_ _lt_a href_eq__qt_https_dd_//jsfiddle.net/nabr/xam09g6c/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//jsfiddle.net/nabr/xam09g6c/_lt_/a_gt_ _lt_br /_gt_\n\tYou need somehow adapt it into you project. Not sure how it should work with Rendertarget textures. What i trying to say_co_ i keep this thread in mind. Will be back asap. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-26T22:12:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_ Problem solved. Or do you have additional questions. Feel free to ask. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-26T23:29:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tStill trying to get a buffer to render out completely_co_ I think we should leave this open for now._lt_br /_gt_\n\t_lt_br /_gt_\n\tThe method that we have that _qt_works_qt_ right now generates constantly and is not ideal for _qt_precompiling_qt_ sounds procedurally and storing them in the ram for later use._lt_br /_gt_\n\t_lt_br /_gt_\n\tI have been doing a bunch of side reading on how the buffers are stored and decoded and think Ill have a more robust solution soon._lt_br /_gt_\n\t_lt_br /_gt_\n\tI just dont get to look at this really while at work_co_ cause we dont have any speakers and only get to check it out when I get home and have free time.  So its not a major priority.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-26T23:38:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_223080_qt_ data-ipsquote-contentid_eq__qt_39051_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1532477350_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 7/25/2018 at 2_dd_09 AM_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_br /_gt_\n\t\t\tthere is no reason to add the iTime in either_co_ that will just mess up the sound generation once we are using functions to make the sounds we want.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#0GT2HX%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#0GT2HX#2_lt_/a_gt__lt_br /_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tiTime is in this context maybe not a proper name_co_ but you need to find the location of a pixel in an array. so the formula _lt_br /_gt_\n\tlocation _eq_ x + y * width_sm_ is just right. Here is a good tutorial_dd_ _lt_a href_eq__qt_https_dd_//processing.org/tutorials/pixels/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//processing.org/tutorials/pixels/_lt_/a_gt__lt_br /_gt_\n\tI chosen iTime becourse you usually want do more stuff inside main(). _lt_br /_gt_\n\t- RenderTarget Texture their is not way you can pull data ( buffer ) out of it. You need something with r e a d option. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tOk. Good luck. Keep us posted.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-27T00:34:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI am already pulling the data buffers out of the rtt_t_s_co_ as an Uint8Array._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#16HY5Y%233_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#16HY5Y#3_lt_/a_gt_ &lt_sm_- you can see it in the console report._lt_br /_gt_\n\t_lt_br /_gt_\n\tGetting pixel data from rtt_t_s is super easy_co_ just need to convert it and then pass it to a Audio Node._lt_br /_gt_\n\t_lt_br /_gt_\n\tI think I have it figured out_co_ I just have not had a chance to do anything with it for a day or two.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-27T03:14:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyes i think you almost their. you can experiment with rawtextures ( i think their are closer to metal )_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#16HY5Y%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#16HY5Y#4_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-07-27T21:49:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.bitsnbites.eu/hello-world/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.bitsnbites.eu/hello-world/_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tDoes this mean i can just convert the buffer to a base64 and then strap the correct header to it?_lt_br /_gt_\n\tOr maybe even as a  blob?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nabroski","Date":"2018-07-29T01:34:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYES! Before WebAudio people done all kind of adventures_co_ still the preferred technique in size coding and testing stuff. \n_lt_/p_gt_\n\n_lt_ul_gt_\n\t_lt_li_gt_\n\t\t_lt_a href_eq__qt_https_dd_//gist.github.com/xem/670dec8e70815842eb95_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//gist.github.com/xem/670dec8e70815842eb95_lt_/a_gt_\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\t_lt_a href_eq__qt_https_dd_//js1k.com/2012-love/details/1265_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//js1k.com/2012-love/details/1265_lt_/a_gt_\n\t_lt_/li_gt_\n_lt_/ul_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]