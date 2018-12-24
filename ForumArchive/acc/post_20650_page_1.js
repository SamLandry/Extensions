[{"Owner":"Kesshi","Date":"2016-02-19T20:07:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ i have two questions._lt_br_gt_\n\t1. If i look at the sources it looks like all of the parent handling is done in _lt_span_gt_AbstractMesh but _lt_/span_gt_getChildren is only available at Mesh._lt_br_gt_\n\tWhy? Shouldn_t_t getChildren be part of AbstractMesh? I mean an _lt_span_gt_InstancedMesh can be also used as a parent and it doesn_t_t have getChildren ... or?_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_2. If you have a big scene with many meshes a call to getChildren() will be a slow operation because_lt_br_gt_\n\tall scene meshes will be iterated everytime. In my application i need to iterate over the children of my meshes quite often._lt_/span_gt__lt_br_gt__lt_span_gt_Wouldn_t_t it be more effective if Mesh/AbstractMesh manages a list of all its children or atleast caches them?_lt_br_gt_\n\tAbstractMesh.dispose() would also benefit from this becasue its doing the same iteration over the whole scene everytime a mesh is disposed._lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-02-19T21:20:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t1. This will be fixed soooooon _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\t2. You can already save the list of children in your mesh. (Thanks to JS dynamic way of working)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kesshi","Date":"2016-02-20T14:47:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_117418_qt_ data-ipsquote-contentid_eq__qt_20650_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1455916815_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t17 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t1. This will be fixed soooooon _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tNice _dd_-)\n_lt_/p_gt_\n\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t17 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t2. You can already save the list of children in your mesh. (Thanks to JS dynamic way of working)\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tI know_co_ i was thinking about that already. This way i could speedup the _qt_getChildren_qt_._lt_br_gt_\n\tBut i still have a bad feeling about the dispose()_co_ Maybe the overhead is not as big as i_t_m thinking but i have the feeling that its a bit inefficient to iterate the whole scene for every_lt_br_gt_\n\tdisposed mesh. Even if i never use the parenting system at all in my scene_co_ the scene will be iterated on dispose._lt_br_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-20T15:11:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi.  I_t_m confused.  Aren_t_t we getting the TWO kinds of parent/child relationship... confused with each other_co_ here?  For example_co_ a box can be a parent-of other mesh_co_ lights_co_ and cameras.  What does .getChildren() return?  Does it return different results_co_ depending upon if it is called on a base class_co_ versus when it is called on other mesh_co_ lights_co_ and cameras?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd then we have other trouble... like isInstanceOf() / getInstances()_co_ and isCloneOf() / getClones()_co_ and maybe even isManagedBy() / getManaged()... for sprites and particles.  *scratch scratch* \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess _qt_normal_qt_ sprites/particles aren_t_t really standard find-able mesh_co_ but SPS particles _lt_u_gt_are_lt_/u_gt_ standard mesh_co_ I think. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tShould the new Line_lt_u_gt_System_lt_/u_gt_ be called line_lt_u_gt_Manager_lt_/u_gt_ instead? \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe particleSystem should become particleManager?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe the current property .parent... should be renamed to .master or maybe .director.  How_t_s that for some _qt_breaking_qt_ changes?  _lt_img alt_eq__qt__dd_o_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ title_eq__qt__dd_o_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAnd_co_ of course_co_ when this new _qt_revamped_qt_ BJS is released_co_ we _t_might just as well_t_ (mizewell) set createSphere_t_s parameters in the correct order_co_ too_co_ with size before subdivs.  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI bet Deltakosh has some _qt_big breakers_qt_ in his regrets bag... that he would like to _qt_activate_qt__co_ too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet_t_s do it.  Backward-compat is for sissies.  It will only take a few hours to repair all the demos on the BJS site and on github and the docs.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll the broken playgrounds might take a bit longer.  I_t_ll handle all the pissed-off users (_lt_a href_eq__qt_https_dd_//www.google.com/search?q_eq_bop+bag+bag&amp_sm_tbm_eq_isch_qt_ rel_eq__qt_external nofollow_qt__gt_bop bag duty_lt_/a_gt_).  hehe. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-02-20T18:50:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tA bit more.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn LambdaCore moos... everything had a number.  About the first 1000 numbers... were reserved for system objects... sometimes called $core objects.  For example_co_ abstract mesh might be #300_co_ and it stays #300 for ever and ever.  Then_co_ on $core object (object #0)... each property on IT... caused a _qt_corified_qt_ name/ref.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example_co_ there would be a property $core.abstractMesh and it would be set to the value #300... an objNumber-type value.  Abstract mesh would then be _qt_corified as $abstractMesh_qt_.  Then_co_ anywhere in the framework or scene code... the author could refer-to BABYLON.AbstractMesh...  as _t_$abstractMesh_t_... its corified name.  Neat_co_ eh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou could even refer to abstract mesh by its _lt_u_gt_number_co__lt_/u_gt_ IN code...  #300.children... but that is discouraged and called _qt_hard coding numbers_qt_.  Smart coders frown at that. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNeedless to say_co_ .toObjNum(this/that/$someCorified)... was used quite often.  if (this.toObjNum() in $abstractMesh.children) {_qt_its not a light or cam!_qt_}.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  Or maybe if (this.typeOf($abstractMesh)) {...}    Corifieds!   Yay!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t$thing was a common one... the generic thing object.  $room was common.  @create $room named _qt_MyRoom_qt_...  and $room.children returned an array of objnums.  {#1122_co_ #2389_co_ #6320_co_ ...}.  (moos had a command line interface)  All objects were directly/indirectly... children of $root (#1)_co_ which would equate to our node class.   The _lt_em_gt_Generic Programmable Following/Wandering Belching Farting Joke-Telling Robot_lt_/em_gt_... was a fairly popular fertile_co_ too.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_  In fact_co_ $feature was created... the _lt_em_gt_Generic Feature Class Object_lt_/em_gt_... designed specifically for... you know... adding features to stuff... overloading.  Users had memory quota on the telnet server_co_ and their objects would persist... via flat ascii db.  This will happen here... after DK builds us a MS-sponsored persistent scene/world server (tile server).  _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tValue-added rooms_co_ things_co_ vehicles_co_ containers_co_ avatars_co_ bots... were common.  People OFTEN made a child of $robot... and then just overloaded the hell out of it... too fun.  In moos_co_ most user-methods are called _qt_verbs_qt_.  Sneeze_co_ fart_co_ punch_co_ kick_co_ talk_co_ send_co_ wander_co_ home_co_ go_co_ jump_co_ toss... common _t_verbs_t_ to overload various generic base-classes.  It was just text.  Characters in the story... coming alive and acting retarded... wondering _lt_em_gt_when_lt_/em_gt_ you will enter the next room.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe .children method had a 2nd parameter... a return-full-inheritence flag.  children(mymesh_co_ 1)... returned the children of mymesh_co_ and IF mymesh.fertile _eq_ true... and mymesh had its own children... it would return the children_t_s children_co_ too.  And the children of the children of the children_co_ etc.  Full-drill.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt the command line...   _sm_children($light) would return all the lights in a scene (as an array of objNums).  It worked inside code_co_ too_co_ because .children() was a method on $root (#1) (root methods)  And if a mesh has a .definesPropertyOrMethod  of _qt_children_qt__co_ calling mesh.children would override $root.children (and $root.children()... wrapper method).  If you ref mesh.somename or call mesh.somename()... and if it returned propNF or methodNF for mesh_co_ the _qt_system_qt_ will seek upward through inheritence chain.  Eventually... it checks $root.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think the moo used .isTypeOf() to determine what class of object... something is.  Can_t__t_t remember_co_ too long ago. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe property named .parent was not used for inheriting position_co_ rotation_co_ or scale.  We didn_t_t have those things... it was a text-based Infocom-like thing.  Later_co_ when we attached VRML scenes to some of the objects... pos_co_ rot_co_ and scale became more important_co_ but then VRML died_co_ which saved our butts.  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tLikely_co_ none of this is applicable for the new BabylonX.js project_co_ but... I thought I_t_d rattle-on about it just the same.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ Party on.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2016-02-23T11:10:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tso_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlet_t_s organize things a bit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA camera_co_ a light and a mesh - are all Nodes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEach node can have a parent (mean also means that each node can also be a parent _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt_ ). Kesshi is right - there is no problem moving the getChildren function to the node. It will work the same as it is.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhich is what I did. But only for backward-compatibility _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt_ The Node already had geDecendants()_co_ which does the same as the abstract mesh_t_s getChildren(). Having said that - I have extended the getDecendants() function - it now accepts a boolean_co_ whether or not you want direct decendants or to traverse the entire tree. This should speed up a bit_co_ if you want direct children only.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere is also a new function that was just moved from the AbstractMesh to Node - getChildMeshes() (with the same boolean as the getDecedants_co_ defaults to false) which will return meshes only.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI hope this clears things up a bit!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kesshi","Date":"2016-02-23T11:48:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you RaananW. Your changes look good. I like the getChildMeshes() ... one _qt_instanceof BABYLON.AbstractMesh_qt_ less in my code _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAnd about breaking changes. I also try to avoid them but doing breaking changes from time to time is not a bad thing._lt_br_gt_\n\tIt helps to keep the API clean and simple. Having to much deprecated/old stuff in the API just makes things more complicated._lt_br_gt_\n\tIf the breaking changes are documented i see no problem ... and no one is forced to update to new versions _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]