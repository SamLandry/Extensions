[{"Owner":"dbawel","Date":"2015-05-13T19:55:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Can someone share their experience(s) with cocoonjs?  I_t_m not fond of proprietary software and APIs_co_ but I_t_d like to learn more about Ludei._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-05-13T21:01:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_CocoonJS is for wrapping your html5_co_ primarily canvases_co_ into something for the iOS_co_ Android_co_ &amp_sm_ Amazon app stores.  If you just want run on a mobile browser_co_ then no need to read any further._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Biggest advantages for making an app &amp_sm_ cocoon_dd__lt_/p_gt__lt_ul_gt__lt_li_gt_All the downloading is done when the app is installed.  Think 30mb after zipping is the free account limit for game code / resources.  I am going with as much inline code as possible.  It comes up pretty fast.  You might still be able to grab a .babylon off the net once the app is built_co_ but I would pack all the high priority stuff in the app._lt_/li_gt__lt_li_gt_Cocoon can also run native code from Javascript.  See Apache Cordova.  Do not think you can call native code from a browser.  Part of their API does native calls for things like front or rear camera access.  You do not have to know how either iOS or Android do it._lt_/li_gt__lt_li_gt_Development is eased_co_ because there is a launcher App for CocoonJS at those 3 app stores.  This means run your app as you develop it inside of the launcher.  The launcher just wants a url.  I just put a http server_co_ (Jetty since I have done a lot of Java)_co_ on my desktop.  Both are on my wifi_co_ so I enter _lt_a href_eq__qt_/mygame.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//192.168.1.1xx_dd_8080/mygame.html_lt_/a_gt_.  It saves it_co_ so you only have to do it once. _lt_/li_gt__lt_li_gt_When you are done_co_ you submit your stuff to their server &amp_sm_ it returns everything packaged up for each platform.  I have not done this_co_ but probably should just to see how it works._lt_/li_gt__lt_li_gt_You still need Android &amp_sm_ iOS developer accounts.  You also still need to digitally sign the android app after you get it back.  There is probably iOS stuff that cannot be done by them._lt_/li_gt__lt_/ul_gt__lt_p_gt_I have used the forum a number of times.  Babylon 1.14 did not really work on it.  I submitted something to them about it.  It took quite a while for the response_co_ but they did pinpoint the problem.  I PRed a fix for BJS 2.0_co_ and improved it for 2.1.  Since then_co_ Marta has responded to my stuff fairly quickly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This part may change soon_co_ so I am not going to put a lot of effort into.  They have 3 ways of running_dd__lt_/p_gt__lt_ul_gt__lt_li_gt_Their own VM_co_ called Canvas+._lt_/li_gt__lt_li_gt_The platforms VM_lt_/li_gt__lt_li_gt_Both at the same time.  Confusing yes._lt_/li_gt__lt_/ul_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dbawel","Date":"2015-05-13T21:54:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Jeff_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That tells me about all I need to know concerning cocoonjs.  It might be valuable for developers to create sellable products_co_ but not for the work I_t_m currently doing.  Thanks for all of the info and advice._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_DB_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]