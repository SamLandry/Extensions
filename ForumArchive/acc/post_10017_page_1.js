[{"Owner":"notjesseolsson","Date":"2014-10-26T14:34:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am thinking about creating a minified version of my project with the closure compiler (_lt_a href_eq__qt_http_dd_//closure-compiler.appspot.com/home_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//closure-compiler.appspot.com/home_lt_/a_gt_). This compiler would remove a lot of the unused babylon.js code. I don_t_t know very much about open source licensing_co_ is there a way to do this legally? Would I have to put a license somewhere?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Oh_co_ and also would this be possible with jQuery?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"macguyvok","Date":"2014-10-26T17:43:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Disclaimer_dd_ _lt_strong_gt_I am not a lawyer. Nor am I associated with Babylon.js._lt_/strong_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That out of the way_co_ I strongly recommend you read through this stack overflow question about almost exactly what you_t_re asking about_dd_ _lt_a href_eq__qt_http_dd_//programmers.stackexchange.com/questions/251375/combining-3rd-party-javascript-libraries-with-my-code-then-using-closure-compil_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//programmers.stackexchange.com/questions/251375/combining-3rd-party-javascript-libraries-with-my-code-then-using-closure-compil_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The tl_sm_dr of it is basically_co_ closure has some mechanisms for complying with the licenses of other libraries_co_ like _lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_@preserve_lt_/span_gt_. You will want to use them to be compliant. On the other hand_co_ it may be better to simply use babylon.js through a CDN. I don_t_t know if it_t_s available through any official CDN_co_ but I highly recommend using _lt_a href_eq__qt_https_dd_//rawgit.com/_qt_ rel_eq__qt_external nofollow_qt__gt_RawGit_lt_/a_gt__t_s CDN mechanism (the production url on that page) and simply linking to the babylon.js source. It will provide more benefit than running babylon through closure_co_ I_t_ll bet._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-10-26T19:02:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Not a lawyer either_co_ but even inside the code base there is a procedure for making a custom build_co_ see.  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Tools/BuildOurOwnBabylonJS_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Tools/BuildOurOwnBabylonJS_lt_/a_gt_.  This is visual studio dependent.  I can also think of a way to do it with the gulp build process.  Just comment out lines in gulpfile.js_co_ such that it still builds_co_ then test that your app still runs._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As far as doing it externally to a build process_co_ you are most likely on your own_co_ as far as support from here goes.  I would also not follow advise given here about JQuery_co_ if it was given.  I assume they have their own forum._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"notjesseolsson","Date":"2014-10-26T20:44:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Basically I_t_m looking for confirmation that there _lt_em_gt_is_lt_/em_gt_ something illegal about it? Because it_t_s open source so..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-10-27T15:59:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can. No problem at all. babylonjs is under Apache 2.0 which allows you to do whatever you want._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I may add this_dd_ babylonjs is also published under _qt_loveware_qt__dd_ If you like it_co_ please let us know there is a project using. We love that _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]