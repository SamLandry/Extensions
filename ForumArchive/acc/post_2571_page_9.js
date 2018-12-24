[{"Owner":"Wingnut","Date":"2014-03-19T19:19:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ah_co_ ok.  First_co_ lets look at a tiny bit of JS from BABYLON.Light.js..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_BABYLON.Light _eq_ function (name_co_ scene) {_lt_br_gt_        BABYLON.Node.call(this_co_ scene)_sm__lt_/p_gt__lt_p_gt_        this.name _eq_ name_sm__lt_br_gt_        this.id _eq_ name_sm__lt_/p_gt__lt_p_gt_        scene.lights.push(this)_sm__lt_br_gt_       _lt_br_gt_        // Animations_lt_br_gt_        this.animations _eq_ []_sm__lt_br_gt_       _lt_br_gt_        // Exclusions_lt_br_gt_        this.excludedMeshes _eq_ []_sm__lt_br_gt_    }_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Notice that light.name... and light.id... are BOTH set to be _t_name_t_.  Also notice that the light is pushed into an array called scene.lights.  So_co_ the light you want to _t_talk to_t_...  is maybe in scene.lights[0] or maybe scene.lights[1] or... its somewhere in the scene.lights array._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But there is a MUCH easier way._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Take a look at _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_24646_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/page.php?p_eq_24646_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Scroll down into the methods area.  See the method getLightByID(id)  ?  Sure ya do._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So... lets pretend your light has a name of _qt_switchedlight_qt_.  Its ID is also the same._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To turn the light ON..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_scene.getLightByID(_qt_switchedlight_qt_).intensity _eq_ 1.0_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_To turn the light off... just the opposite..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_scene.getLightByID(_qt_switchedlight_qt_).intensity _eq_ 0.0_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe experiment with scene.getLightByID(_qt_switchedlight_qt_).setEnabled(false or true) too._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a feeling that you might ask about NOT knowing if the light is currently on or off... but you need to _t_toggle_t_ its condition no matter what.  JavaScript contains a conditional operator that assigns a value to a variable based on some condition.  Here_t_s how you might use that_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_var mylight _eq_ scene.getLightByID(_qt_switchedlight_qt_)_sm__lt_/p_gt__lt_p_gt_mylight.intensity _eq_ (mylight.intensity &gt_sm_ 0.0) ? 0.0 || 1.0_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The stuff in the parentheses... is a condition question.  If the condition is TRUE_co_ use the value on the left side of the OR bars.  If NOT true_co_ use the value on the right side of the OR bars.  In other words... is my light currently ON (is its intensity &gt_sm_ 0.0) ?  YES?  Then set the intensity to 0.0 (off).  Is it OFF (not &gt_sm_ 0.0)... then turn it on by setting its intensity to 1.0.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Fun with toggling._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-19T19:52:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_setEnabled must be a function because it has to check if the parent is enabled and if the parent of the parent is enabled and so on. So this can_t_t be a property alas _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_About videotexture I think you_t_re right&gt_sm_ Let me fix that for next version_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-03-19T20:01:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi everyone_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a request about this discussion_dd_ would it be possible to start a new discussion when the subject is not directly linked to the previous subject? I would love to follow this discussion but I feel like we talk about too many things in it and for me it_t_s like this discussion is a whole forum on its own _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ so it_t_s difficult to remember that a specific subject was talked about in this discussion (moreover_co_ on which page?). Please help me to keep reading it _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-03-19T20:13:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi gwenael !  (And hi to you too_co_ DK!)  Good to hear from you guys_co_ as always.  Actually_co_ the subject has remained the same for the entire thread.  _qt_Things Wingnut thinks and talks about_qt_.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  But I understand your comment COMPLETELY.  I know you are being serious_co_ but it makes me laugh.  I wish I had an answer for you.  Maybe forum search?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  I am honored that this thread has become so active and varied.  Its more like chat than a forum thread_co_ eh?  *nod*.  Sigh.  Yes_co_ certain subjects really should be _qt_branched_qt__co_ but_co_ I_t_m not sure when and where to DO that_co_ and this thread might be as popular as it is... BECAUSE its _qt_about any subject_co_ anytime_qt_.  I don_t_t know.  I don_t_t have any answers.  This is one TALKIE thread_co_ that_t_s for sure.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-19T20:15:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok next version will allow you to specify a invertY parameter for your video (which natively are down to up)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-03-19T20:24:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@dk - invertY is boolean?  Will you be defaulting it to true?  You don_t_t need to decide yet_co_ of course.  Just curious.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-03-19T20:51:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Notice that light.name... and light.id... are BOTH set to be _t_name_t__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I guess I picked the wrong object to getByName _sm_-)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Works like a charm when you get the syntax right. TY for the explanation._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cameras on the other hand seem to be getByName as there is no getByID function_co_ but there is a getActiveCameraByID. and not by getActiveCameraByName_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Shall have to watch what object I am trying to play with._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_By the way on a minor note - when i unzipped the 9th tutorial (09 - Collisions Gravity) it has a folder named 12 - Collisions Gravity . Confused me initially - thought I was missing something_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-03-19T21:30:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Gryff...  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Cameras/babylon.camera.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Cameras/babylon.camera.js_lt_/a_gt__lt_span_gt_ _lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just like lights_co_ cameras have a .name and .id that are the same._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So...  scene.getCameraByName(name or id)_sm_   ...will work just fine_co_ right?  (as long as you don_t_t manually set a camera.id that is different than its .name)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/page.php?p_eq_24646_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/page.php?p_eq_24646_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Why do lights use _t_byID_t_ and cameras use _t_byName_t_?  Beats me_co_ Gryff.  But since cams and lights have identical names and id_t_s...  everything is interchangeable.  Just look-ups... in scene.cameras and scene.lights arrays._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_activeCameraByID(cam_id) is a setter_co_ of course.  And since ID and name are the same for cameras... activeCameraByID(cam_name) likely works fine as well. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It probably could have been named setActiveCamera(id or name) or maybe activateCamera(id or name)... but... as long as it works.... that_t_s what counts.  Party on!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_PS_dd_  There is no getActiveCameraByID()  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_      Bartender_co_ I_t_ll have what Gryff is having!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-19T22:11:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_invertY is a boolean false by default to preserve compatibility (as always _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ call me the knight of down compatibility)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-03-19T22:21:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hehe.  Yeah_co_ we need to safeguard all 18 of the projects that have used BJS to date.  What a task it would be if we had to update ALL THOSE!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-19T22:41:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Do not be mean_dd_ bjs is used by some huge projects I cannot share right now but wait i bet you will be surprised _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-19T22:45:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_But yes for videotexture I should pre invert to be sure that by default texture are on the right position_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-03-19T22:56:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Sorry.  I_t_m just giving you a little _t_razzing_t__co_ there.  But really_co_ though.  activeCameraByID - a setter?  Really?  What...  did ya blindfold yourself and bang on the keyboard with a dead chicken... to come up with that func name?  hahah._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sorry.  But that IS pretty funny_co_ no?  Not being mean.  Okay_co_ maybe a little.  C_t_mon_co_ laugh along.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Your precious little baby is healthy_co_ but it still has plenty of poo in its diaper_co_ Einstein.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  (I hope you can handle this without pouting).  PLEASE handle it without pouting._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-19T23:46:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_there is no need for getActiveCamera() because it is equal to scene.activeCamera _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-19T23:48:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_activeCameraBy() is really simple_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.Scene.prototype.activeCameraByID _eq_ function (id) {        for (var index _eq_ 0_sm_ index &lt_sm_ this.cameras.length_sm_ index++) {            if (this.cameras[index].id _eq__eq__eq_ id) {                this.activeCamera _eq_ this.cameras[index]_sm_                return_sm_            }        }    }_sm__lt_/pre_gt__lt_p_gt_If you already has a camera just set scene.activeCamera _eq_ camera and you_t_re done_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-03-20T00:32:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I was making fun of the NAME of the activeCameraByID() method... not its necessity or functionality.  I think it would have been much wiser and logical... to NAME the function....  setActiveCamera(camera_id_or_name)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Fix that_co_ will ya?  Hurry up.  hehe.  Fix the docs too_co_ quick_co_ before somebody accidentally calls activeCameraByID()... trying to use it to switch cameras.  Don_t_t worry about backward compat... nobody has ever called activeCameraByID() because its the most confusing name for a setter function... known to mankind.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_(Its beat-up deltakosh day!)  haha  I_t_ll stop now_co_ I promise.  I_t_m just trying to be goofy and funny... and trying to get you to change the name of that function._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Doesn_t_t the train demo... use camera switching?  I think it does... if I remember correctly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yes_co_ I agree. No need for .getActiveCamera()._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-20T00:43:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Right I will change the name of this function to setActiveCameraById() and I aill also add a setActivecameraByName _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-03-20T00:54:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  no_co_ no_co_ no.  Now you are messing with me_co_ right?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_JUST...    setActiveCamera() please.  No _t_ByName_t_ and no _t_ById_t_.  Those are terms used in getters_co_ not setters.  Make .setActiveCamera() accept a camera.id (a string or a number) or a camera.name (a string)... please.  Search scene.cameras for camera.name first.  If not found_co_ search for camera.id.  And keep in mind that .id COULD be a number._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You are going to give me a nervous breakdown_co_ DK.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-20T00:59:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes I messing with you. It is unpleasant right?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Obviously I only add a SetActiveCamera. it checks its parameter to see if this is a camera or a string/number _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-20T01:03:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I love this kind of upgrade to the API sincerely_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-20T01:04:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt__lt_/pre_gt__lt_p_gt_\nBABYLON.Scene.prototype.setActiveCamera _eq_ function (cameraOrIdOrName) {_lt_/p_gt__lt_p_gt_\n        if (cameraOrIdOrName instanceof BABYLON.Camera) {_lt_/p_gt__lt_p_gt_\n            this.activeCamera _eq_ cameraOrIdOrName_sm__lt_/p_gt__lt_p_gt_\n            return_sm__lt_/p_gt__lt_p_gt_\n        }_lt_/p_gt__lt_p_gt_\n        // By ID ?_lt_/p_gt__lt_p_gt_\n        var camera _eq_ this.getCameraByID(cameraOrIdOrName)_sm__lt_/p_gt__lt_p_gt_\n        if (camera) {_lt_/p_gt__lt_p_gt_\n            this.activeCamera _eq_ camera_sm__lt_/p_gt__lt_p_gt_\n            return_sm__lt_/p_gt__lt_p_gt_\n        }_lt_/p_gt__lt_p_gt_\n        // By Name ?_lt_/p_gt__lt_p_gt_\n        camera _eq_ this.getCameraByName(cameraOrIdOrName)_sm__lt_/p_gt__lt_p_gt_\n        if (camera) {_lt_/p_gt__lt_p_gt_\n            this.activeCamera _eq_ camera_sm__lt_/p_gt__lt_p_gt_\n            return_sm__lt_/p_gt__lt_p_gt_\n        }_lt_/p_gt__lt_p_gt_\n    }_sm__lt_/p_gt__lt_p_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-03-20T01:06:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Feel free to suggest others API improvements_dd_ this is the right moment_co_ I_t_m finalizing the 1.10 _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-03-20T01:09:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_... [edite]  I said nothing ... _lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-03-20T01:39:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@DK... No_co_ it is not unpleasant... not when I know you are doing it because of how much you love me.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am sorry that you felt unpleasant.  I won_t_t do that anymore._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ok_co_ changes to the api?  Really?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Change uAng_co_ vAng_co_ and wAng_co_ to uAngle_co_ vAngle_co_ and ...  oh yeah... that was already shot-down._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ok_co_ change wrapU and ... what?  Oh yeah_co_ that was already shot-down_co_ too.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ummm... ok_co_ how about... mesh.clearPhysicsState()  ?  Lets say I used applyImpulse (with a slightly offset contactPoint) to send a box flying and tumbling into the air... but immediately after the applyImpulse... I did a clearPhysicsState().  Could the box continue its flight_co_ continue its tumbling_co_ continue using physicsEngine gravity_co_ but no restitution or physics-active collision anymore?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The tumbling box would continue its flight_co_ then come back down via gravity... and then... something else.  If a collision-active ground/floor was set and a checkCollsion with the floor/box_co_ it would just land on the floor and stop... and not settle to flatness against the floor (no mass or restitution anymore to make it settle)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know HOW the physics engine updates impulsed mesh movements... but I would LOVE to use SOME method to launch tumbling mesh (maybe from a modified particleSystem)... and clearPhysicsState just after mesh/particle launch_co_ or just after an applyImpulse for a non-particleSystem mesh launching.  With me?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Briefly_co_ allow mesh.clearPhysicsState but if mesh currently has ANY motion (position_co_ rotation_co_ gravitational pull)_co_ then let that continue._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If that sounds ridiculous_co_ just ignore me.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks DK!  And thanks for working on 1.10!  I look forward to it!  Sorry if I hurt your feelings. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ That was NOT my intent._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-03-20T04:11:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again_co_ gang!_lt_/p_gt__lt_p_gt_   After reading my previous post_co_ I realized that I am dreaming of a mesh cannon!  A hedra-heaver. A shape-shooter.  A polygun.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Once upon a time_co_ there was a game called Artillery Duel._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/misc/artduel.png_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//urbanproductions.com/wingy/babylon/misc/artduel.png_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The player would check the winds_co_ and then set a powder charge and a cannon angle_co_ and POOM!_lt_/p_gt__lt_p_gt_   [ shell.applyImpulse(charge_co_ angle) ]_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_That requires the physics imposter to already be established... _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_shell.setPhysicsState({ impostor_dd_ BABYLON.PhysicsEngine.BoxImpostor_co_ mass_dd_ shellweight_co_ friction_dd_ winddrag_co_ restitution_dd_ bouncepower })_sm__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For those who have launched a mesh with a particleSystem or a physics applyImpulse... its a nice satifsying feeling.  The BabylonJS particleSystem is cool (to use and to drool-at/borrow its code).  I have done demented experiments with the Babylon particle system_co_ with MANY more to come.  I did eachParticle.setPhysicsState... and... well... it was demented.  _lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/particlefun/splode/pharticles02.htm_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//urbanproductions.com/wingy/babylon/particlefun/splode/pharticles02.htm_lt_/a_gt_ (use a fast machine) (.zip is there_co_ too)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The particleSystem is emitting slowly (frame rate slow) because... all the boxes are colliding with each other at the emitter _t_nozzle_t_... and the physicsState is set on all the boxes... and and and... cannon.js physics engine is calculatin_t_ a kadillion collision formulas per frame.  Also_co_ the smoke trails are thick.  There are tons of _t_quad_t_ mesh in the scene... used to make those smoke trails.  Each particle (each box_co_ in this case) has its very own BABYLON.ParticleSystem running on it... spraying smoke._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The cannon.js physics system... makes the boxes do some nice tumbling parabola flights...  I love _qt_the arches_qt_.  A proper mesh-flinging game like Artillery Duel 3D-BJS... must have that same smooth parabolic flight to its projectiles... I think._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_All that crap aside...  applyImpulse is a lot of fun... and... if we could easily do mesh.clearPhysicsState just after a particle or mesh _qt_launch_qt__co_ that might be handy.  It might assist in making Artillery Duel 3D-BJS_co_ too.  In that game_co_ no bounce is necessary_co_ and no physics-active collisions need to be calculated.  We DO still need basic collision detection_co_ though... so we can blow stuff up. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just chewin_t_ the rag_co_ here... trying to get the juices flowing.  I hope everyone is well!  Party On!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]