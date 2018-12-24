[{"Owner":"neelepl87","Date":"2015-09-26T17:31:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have multiple hexagon in the screen. My requirement is when user clicks on a particular hexagon_co_ it needs to be zoomed in_co_ favorably_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_that particular hexagon occupying the total canvas. I can get the hexagon clicked on_co_ get it_t_s id_co_ but unable to zoom it in. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am using FreeCamera. Can anyone please help._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks much in advance._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Neel._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-09-26T19:49:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Neel and welcome to the forum!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A FreeCamera has a setTarget() function that accepts a Vector3_co_ which can be the picked mesh position. a very simple demo would be this _dd_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2HJZBR_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2HJZBR_lt_/a_gt__lt_/p_gt__lt_p_gt_try clicking on both meshes_co_ you will see how it works._lt_/p_gt__lt_p_gt_This will not zoom in_co_ but will focus on this mesh. _lt_/p_gt__lt_p_gt_Zooming in can be done this way - _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#2HJZBR%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#2HJZBR#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Hope it helps _dd_-)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"neelepl87","Date":"2015-09-28T09:19:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Rannan_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks for your reply. Your code for zooming works like a charm in the example you have shown. Somehow I can not get it worked for my code. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Right now I have created two hexagon with all their vertices manually defined. In your example you have set the position of the sphere as_dd_ sphere.position.y _eq_ 1_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am not sure what will be the position of the hexagons in my case. I tried to set the position as the center point of the hexagon. My hexagons are_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_all flat. But then also it is not working as it is working in your case._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Any idea what to set as position in case of a 2D hexagon_co_ so the camera points to it perfectly?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am practically new to Babylon js_co_ so struggling._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_co__lt_/p_gt__lt_p_gt_Neel._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-09-28T10:07:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Neel_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_maybe you can do a playground version of your problem so we can see whats going on and try to make it work for you. Your hexagons still have a position so RaananWs code should still work since it reads the position directly from your mesh._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"neelepl87","Date":"2015-09-28T20:31:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yeah_co_ I should have done that earlier._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have tried this_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1XBFPL_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1XBFPL_lt_/a_gt_._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_When I click on individual hexagon_co_ it is behaving strangely_co_ as I am sure have done some mad coding here._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Kindly help me understand what I am doing wrong._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks_co__lt_/p_gt__lt_p_gt_Neel._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-09-28T22:54:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Okay_co_ I gave it a try. Check this out and let me know if that_t_s basically what you want_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1XBFPL%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1XBFPL#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I changed the way of zooming in on a certain polygon. Instead of calculating a direction vector I would suggest simply placing the camera above that polygon. You can use the boundingBoxInfo to find the center of it. I added some comments in the code and did some formatting_co_ but didn_t_t change too much I think.. You really did some fancy coding there _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am not sure what you want to achieve in the end. Some kind of hex based game with a really big board? You seem very concerned about being ... well... efficient. There might be easier ways to create a hex grid (you can make nice hexagons with the createClyinder method I think). But yeah_co_ if you only need a 2D hexagon creating it from scratch might be a good solution. Something else I noticed_dd_ you set the vertices potion for each hexagon by defining those chunks. Wouldn_t_t it be easier to handle if you just create a polygon and then clone it to place it somewhere according to you grid instead of having to define the vertices positions for every chunk?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As I said_co_ I don_t_t know what you want to achieve in the end. But I like those hexagon stuff and I have something like that_co_ too_co_ that I want to play around with (someday) when I have time. So I am just curious and would love to hear a bit more about your project and your ideas _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well I talk/write too much _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ anyways_co_ let me know if it helped or if it_t_s not what you need yet._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-09-29T02:05:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just use CreateDisc with tessellation _eq_ 6 to create a 2D hexagon_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-09-29T06:41:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Oh_co_ there is a _lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_CreateDisc_co_ cool! Still feel like I don_t_t know half of all those function after playing with it for almost a year now O_o_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"neelepl87","Date":"2015-09-29T20:55:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_98578_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_17461_qt_ data-ipsquote-username_eq__qt_iiceman_qt_ data-cite_eq__qt_iiceman_qt_ data-ipsquote-timestamp_eq__qt_1443480844_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Okay_co_ I gave it a try. Check this out and let me know if that_t_s basically what you want_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1XBFPL%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1XBFPL#1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I changed the way of zooming in on a certain polygon. Instead of calculating a direction vector I would suggest simply placing the camera above that polygon. You can use the boundingBoxInfo to find the center of it. I added some comments in the code and did some formatting_co_ but didn_t_t change too much I think.. You really did some fancy coding there _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am not sure what you want to achieve in the end. Some kind of hex based game with a really big board? You seem very concerned about being ... well... efficient. There might be easier ways to create a hex grid (you can make nice hexagons with the createClyinder method I think). But yeah_co_ if you only need a 2D hexagon creating it from scratch might be a good solution. Something else I noticed_dd_ you set the vertices potion for each hexagon by defining those chunks. Wouldn_t_t it be easier to handle if you just create a polygon and then clone it to place it somewhere according to you grid instead of having to define the vertices positions for every chunk?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As I said_co_ I don_t_t know what you want to achieve in the end. But I like those hexagon stuff and I have something like that_co_ too_co_ that I want to play around with (someday) when I have time. So I am just curious and would love to hear a bit more about your project and your ideas _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well I talk/write too much _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ anyways_co_ let me know if it helped or if it_t_s not what you need yet._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_Hello iiceman_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It worked perfectly. I was trying to use babylon 2.2.js statically from my html_co_ so it was giving some strange effect with your code_co_ now it is working absolutely fine. Is it anyway possible to tell which version is used when I write _t_&lt_sm_script src_eq__qt__lt_a href_eq__qt_http_dd_//www.babylonjs.com/babylon.js_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/babylon.js_lt_/a_gt__qt_&gt_sm_&lt_sm_/script&gt_sm__t_ ? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Coming to what I am working on_co_ I will try to tell a long story shortly. Basically we are trying to make a 3-D simulation of car driving through some different terrains. But (unfortunately) we are not doing this using any standard language_co_ rather a new lesser known scripting language based on javascript only ( in other words_co_ reinventing many wheels) . We also need a simplified version ( call it Tester Interface) of the whole 3-D scene to facilitate random scene modification. Fortunately that part we are doing in babylon js. We have divided our actual terrains into multiple hexagons ( with some irregularity)_co_ and the hexagon vertices will come to this Tester Interface as an input. That is why I created the hexagons with manually defined points._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The desire is endless and passions are high_co_ so we are not enough sure where we will put the boundary _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks much for your help. _lt_/p_gt__lt_p_gt_Neel._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-09-30T07:43:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Wow_co_ that definitely sounds like a lot of work. Glad I could help. About the babylon version_dd_ I don_t_t think so. But I always download the version I want and name it myself. If you use bower you can download and update babylon js easily_co_ too._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Good luck with your project and don_t_t forget to show us if you made somethink cool! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By the way_dd_ If you question is answered feel free to mark the thread as answered_co_ too _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]