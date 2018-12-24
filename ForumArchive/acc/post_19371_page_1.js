[{"Owner":"Matt574","Date":"2015-12-20T18:56:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi all_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m having a strange issue. I_t_m working on a project which loads various Babylon files and textures. All works fine when testing locally (I_t_m using Brackets with live preview) However when I upload to my web server none of the textures are able to load (see attached)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_All other resources_co_ scripts etc load fine its just the textures that don_t_t. Any clues as to why this error might be occurring?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Matt_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-17766-0-62612000-1450637557.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_12_2015/post-17766-0-62612000-1450637557.jpg_qt_ data-fileid_eq__qt_5873_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-17766-0-62612000-1450637557.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-12-20T19:49:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Matt_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_any URL we can check with? _lt_/p_gt__lt_p_gt_Might be a relative/absolute URL error_co_ but no idea really without seeing the live version._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Matt574","Date":"2015-12-20T20:44:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Raanan_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Unfortunately the project is hosted on a private server. Its odd_co_ as if I use my own personal server the textures load fine. When I check the network calls in IE dev tools I_t_m getting _t_Aborted_t_ as the result of the call on the textures. While other successful calls give me _t_200_t_ as the result. Could there be something server specific that_t_s causing this?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Matt  _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-12-20T21:58:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Matt_co__lt_/p_gt__lt_p_gt_Is opening the image_t_s url in the browser works? Are they hosted on the same domain?_lt_/p_gt__lt_p_gt_This feels like a server-specific bug_co_ but no idea really.._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Matt574","Date":"2015-12-20T22:54:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes the image url opens in the browser.....It just won_t_t load via Babylon. Seems odd! The results seem different on each browser refresh. Some of the calls are successful but Babylon still says that it was unable to load the texture. On the these calls that are apparently successful the type of call is listed as text/html. Whereas usually they appear as image/jpeg. So it seems like the call is being interpreted as a request for a html file instead of an image file. Weird. I wonder if there is a way to make sure the correct type of get call is being sent from Babylon!?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Its bending my brain!   _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-12-20T23:14:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Matt74_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_RaananW Is requesting a URL where we will be able to see these behaviors ourselves_co_ as well as to review your scripts and image files for potential formatting conflicts which often won_t_t allow elements to be loaded when called from a location within the script_co_ which doesn_t_t allow for operations within the stringent formatting of operations which may occur after such elements are required to be loaded in order to control their properties_co_ which what might be considered _qt_standard_qt_ operations in applying and affecting image properties._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have discovered similar behaviors in scripts recentely_co_ and hopefully the users here on the forum will be able to assist. So please provide a URL which we will be able to test as well as download scene elements and hopefully provide you with some solutions. Welcome to the forum_co_ and I_t_m certain you will find this to be a very valuable resource for almost any problem or performance issue your will unboubtedly come across in your endeavors to develop content and media using the babylon.js framework - and there is no question which anyone on this forum would consider invalid_co_ as we have all found ourselves in dramatically difficult situations with no where else to turn - and rarely_co_ does anyone find their questions unanswered for very long_co_ as all users on this forum have always gone far beyond their individual abilities to work together to make the babylon.js framework the very best of any and all available frameworks in the forthcoming revolution supporting the formally adopted HTML5 and WebGL standards._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_All anyone asks is that we all work together to improve all frameworks and extensions for HTML5 and WebGL_co_ and for us this means specifically babylon.js and supporting extensions - which was originally built as a video game engine by the user on this forum known as DeltaKosh (who is the currator as well)_co_ whose real name is David Cathue_co_ who along with other key individuals and Microsoft developers in Washington State and now around the world_co_ are developing the very best and highly functional content creation tools_co_ control software_co_ and renderring engine which is growing and evolving so rapidly that it is difficult to even keep up with. But David (DK) and the other highly skilled and involved developers working with him are all efficiently coordinating all efforts to develop babylon.js to a point beyond where any competing engine might be at this or any other time now and in the future._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So again welcome to the forum_co_ and we will watch for a post of your files or a URL which will show us the latest scene as well as demonstrate any problems you might have in your scene_co_ or with elements within your scene. Please provide what ever you are able_co_ and please remember to use cntrl + shift + the _qt_j_qt_ key to open up the javascrit console once your scene is either loaded or has attempted to load. This will provide you and other users with as much inforatin we might find to identify the problem. I assume you are already familiar with the javaxcript console_co_ but if not_co_ this is what we will use to troubleshoot and to work whrough any problems which we should be able to identify._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Matt574","Date":"2015-12-21T00:14:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi DB_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Wow thank you for the warm welcome and very informative post. My experience on this forum so far has and continues to be very pleasant _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It would be great to be able to share project files with you all but in this instance I can_t_t as its proprietary information. Also I_t_m not sure it would be necessary in this case as the problem that I_t_m having also occurs if I upload one of the sample scenes from the BJS website which uses the skybox and associated textures. So I_t_m very confident that it_t_s an issue with the server. I don_t_t know a lot about server configuration so I just wondered what could possibly cause a request sent from BJS for an image file to be unrecognised by the server? I_t_ve also tried uploading content created with the create JS framework which also requests images to be loaded from the server. Which works fine. So it seems that the server only has problems loading textures via BJS.....BJS must be requesting the textures in a way that this particular server can_t_t understand or doesn_t_t recognise. I_t_m really hoping somebody else has experienced this issue!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you again for all the help _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Matt_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Matt574","Date":"2015-12-21T00:17:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Also I forgot to mention that I can_t_t share the link where the content is uploaded as it sits behind a private VPN _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wacko.png_qt_ alt_eq__qt__dd_wacko_dd__qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]