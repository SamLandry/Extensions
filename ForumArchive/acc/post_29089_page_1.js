[{"Owner":"touslecoq","Date":"2017-03-15T23:45:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHaving some difficulty getting CastorGUI to work when my Babylon.js app is embedded in a Drupal (it works when all in a single html file).  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt fails with a 404 as cannot find the file _lt_em_gt_mysite_dd_8083/node/themesGUI/default.css_lt_/em_gt_.  Clearly that is because that location doesn_t_t exist.  The _lt_strong_gt_/node/_lt_/strong_gt_ notation is the Drupal URL for the current content_co_ not the location of the CSS file.  The file is actually at _lt_em_gt_mysite_dd_8083/themes/mytheme/themesGUI/default.css._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI did some tracing in Chrome Dev Tools and found the following_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- I kick things off with\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_gui _eq_ createGUI()_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t- createGUI function looks like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var createGUI _eq_ function() {\n\n  var css _eq_ _qt_button{cursor_dd_pointer_sm_}_qt__sm_\n\n  var guiSystem _eq_ new CASTORGUI.GUIManager(canvas_co_ css_co_ {\n    themeRoot_dd_ _qt_themes/uconstruct/_qt__co_ \n    themeGUI_dd_ _qt_default_qt__co_ pixel_dd_ true\n  })_sm_\n\n  var form _eq_ new CASTORGUI.GUIWindow(_qt_form_qt__co_ {\n    x_dd_ 0_co_\n    y_dd_ 0_co_\n    w_dd_ 300_co_\n    h_dd_ 80_co_\n    textTitle_dd__qt_Scene Menu _qt__co_\n    closeButton_dd_ false_co_\n    heightTitle_dd__qt_10px_qt__co_\n    overflow_dd_ _qt_hidden_qt__co_\n    backgroundColor_dd_ _qt_rgba(60_co_ 60_co_ 60_co_ 0.6)_qt__co_\n    colorTitle_dd_ _qt_rgba(90_co_90_co_90_co_0.3)_qt__co_\n    borderWindow_dd_ _qt_0px_qt_\n  }_co_ guiSystem)_sm_\n\n  ...\n}_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWhen I trace with Chrome I can see the _lt_strong_gt_guiSystem_lt_/strong_gt_ object created and the line in _lt_em_gt_CASTORGUI.GUIManager.prototype.addStyle() _lt_/em_gt_where it reads the _lt_strong_gt_themeRoot_lt_/strong_gt_ and _lt_strong_gt_theme_lt_/strong_gt_ variables that were passed and uses it to populate the href for the CSS file_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_CASTORGUI.GUIManager.prototype.addStyle _eq_ function(css_co_ theme)\n{\n  ...\n  this.GUItheme _eq_ document.createElement(_t_link_t_)_sm_\n  this.GUItheme.type _eq_ _t_text/css_t__sm_\n  this.GUItheme.rel _eq_ _t_stylesheet_t__sm_\n  this.GUItheme.media _eq_ _t_screen_t__sm_\n  this.GUItheme.id _eq_ _qt_themeGUI_qt__sm_\n  this.GUItheme.href _eq_ this.themeRoot+_qt_themesGUI/_qt_+theme+_qt_.css_qt__sm_\n  this.head.appendChild(this.GUItheme)_sm_\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis results in the correct file path being constructed ..._lt_em_gt_ themes/mytheme/themesGUI/default.css_lt_/em_gt_ ... all good so far.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen the next statement in my createGUI() function is to create the form object (ie _lt_em_gt_form _eq_ new CASTORGUI.GUIWindow_lt_/em_gt_) as you can see above_co_ I pass the _lt_strong_gt_guiSystem_lt_/strong_gt_ object (which contains the correct themeRoot and theme values) as the third argument.  I can follow the trace and see that this is picked up as _lt_strong_gt_guimanager_lt_/strong_gt_ in the CASTORGUI.GUIWindow() function_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_CASTORGUI.GUIWindow _eq_ function (id_co_ options_co_ guimanager) {\n  CASTORGUI.GUIManager.call(this_co_ guimanager.canvas_co_ guimanager.canvasCss)_sm_\n  this.id _eq_ id_sm_\n  this.html _eq_ document.body || document.getElementsByTagName(_t_body_t_)[0]_sm_\n  ...\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis is where it seemed to go a bit odd (to my eyes anyway). The first statement in this function is to call the GUIManager function.  It passes 3 arguments.  However the first argument (_lt_strong_gt_this_lt_/strong_gt_) is undefined at this stage and the second 2 arguments are a reference to sub-elements of _lt_strong_gt_guimanager_lt_/strong_gt_ but they do not include the _lt_strong_gt_themeRoot_lt_/strong_gt_ or _lt_strong_gt_theme _lt_/strong_gt_variables.  So then when _lt_em_gt_GUIManager_lt_/em_gt_ calls _lt_em_gt_.addStyle()_lt_/em_gt_ again_co_ this time it doesn_t_t have any value for _lt_strong_gt_themeRoot_lt_/strong_gt_ or _lt_strong_gt_theme_lt_/strong_gt_ (although it defaults _lt_strong_gt_theme_lt_/strong_gt_ variable to _t_default_t_ if it is empty).  As I trace through from that point onward_co_ all references to _lt_strong_gt_themeRoot_lt_/strong_gt_ are _qt__qt_.  There is probably a good explanation for all of this_co_ but this is the only thing I could find.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHowever I am not sure this explains the issue as even if this did work it doesn_t_t fully explain what is happening.  It seems that somewhere (although I cannot find it) the current page base URL (mysite_dd_8083/node/) then has the constructed theme path appended to it. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWith the issue above (ie the empty themeRoot value)_co_ this results in a 404 looking for_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\t_lt_em_gt_mysite_dd_8083/node/themesGUI/default.css_lt_/em_gt_\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tHowever even if the correct _lt_strong_gt_themeRoot_lt_/strong_gt_ value was being pulled through_co_ this would presumably appear as_dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\t_lt_em_gt_mysite_dd_8083/_lt_strong_gt_node_lt_/strong_gt_/themes/mytheme/themesGUI/default.css_lt_/em_gt_  (ie with the erroneous _t_node_t_)\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tThis would not work as the correct path (I think) is without the _qt_node_qt__dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\t_lt_em_gt_mysite_dd_8083/themes/mytheme/themesGUI/default.css_lt_/em_gt_\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo a long-winded way of getting to 2 questions really _dd_\n_lt_/p_gt_\n\n_lt_ul_gt__lt_li_gt_\n\t\twhy does the themeRoot value not get passed through from GUIWindow &gt_sm_ GUIManager &gt_sm_ GUIManager.addStyle?  Is this supposed to work this way?\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tHow is mysite_dd_8083/node being prepended to the themeRoot value when it should be mysite_dd_8083/ (ie without the _t_node/_t_)?\n\t_lt_/li_gt_\n_lt_/ul_gt__lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRich\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"inteja","Date":"2017-03-16T00:51:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI work with Drupal daily.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHave you tried prepending themeRoot with forward slash i.e._dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_themeRoot_dd_ _qt_/themes/uconstruct/_qt__co_ _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis should ensure the path is relative to the Drupal web root rather than appended to the current URL.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"touslecoq","Date":"2017-03-16T08:49:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey Inteja thanks for the tip - although_co_ I wouldn_t_t have admitted the Drupal thing as I may be bugging you for help now! _dd_).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think I did try that combination but will try again.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFrom what you said ... is it Drupal that is applying logic as to what prefix to use (ie site only or current URL?).  That is what puzzled me.  Although I could see where themeRoot was coming from (or not in the case of GUIWindow)_co_ I could not see where it was obtaining and applying the site name and any existing URL.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"inteja","Date":"2017-03-16T09:16:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn this case I don_t_t think it_t_s a Drupal specific issue. In Drupal /node is just the default path for the home page content (usually a list of published teasers that have been promoted to front page) so I_t_m guessing your BJS app is embedded on your home page_co_ therefore your css path is relative to /node unless you prefix it with forward slash_co_ then it should be relative to the web root.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ I_t_m no expert_co_ just a guess.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-03-16T09:38:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tinteja reasons. Alternatively_co_ you can try using a url like http path.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTHe path must point to the theme folder _lt_strong_gt_themesGUI_lt_/strong_gt__dd_ this directory themesGUI should exist_co_ it can not be other name.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthemeRoot_dd_ _qt_http_dd_//www.site.com/_qt__co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDefault themes are saving to a folder and inside you can create multiple theme\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthemeGUI_dd_ _qt_default_qt_ // here it will use the default css file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s hard for me to see where you made a error.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"touslecoq","Date":"2017-03-16T22:04:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks both.  That is the thing - I am trying to force Castor to take the path I provide (/themes/mysite/) and append themesGUI/default.css to it.  it does this the first time round_co_ but prefixes it with http_dd_//mysite_dd_9999/node/ which is not the correct path.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tInteja - the canvas is embedded in a custom block that is only displayed when content type of model3d is selected.  The block is then overridden using a drupal twig which just loads the editor3d.js script and creates my scene.  At the moment the scene is all hard coded and not driven by drupal content - that is the next challenge.  However when the hardcoded scene (all from editor3d.js) it all works except for the Castor calls returning a 404.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDad72 - is the first question I posed expected behaviour?  At the end of the first call to GUIManager.addStyle it has the correct themeRoot and theme values.  However after calling GUIWindow_co_ which in turn calls GUIManager again_co_ which again calls GUIManager.addStyle_co_ the themeRoot and theme values are empty.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-03-17T09:55:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_167487_qt_ data-ipsquote-contentid_eq__qt_29089_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1489701896_qt_ data-ipsquote-userid_eq__qt_19275_qt_ data-ipsquote-username_eq__qt_touslecoq_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t11 hours ago_co_ touslecoq said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tDad72 - is the first question I posed expected behaviour?  At the end of the first call to GUIManager.addStyle it has the correct themeRoot and theme values.  However after calling GUIWindow_co_ which in turn calls GUIManager again_co_ which again calls GUIManager.addStyle_co_ the themeRoot and theme values are empty.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI_t_ll look at it and make a correction if necessary. I will come back to you.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-03-17T10:22:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOk_co_ I find the bug. I_t_ve updated the deposit with the fix. it should now be good for you after your castorGUI.min.js updated file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/dad72/CastorGUI/tree/master/dist_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/dad72/CastorGUI/tree/master/dist_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]