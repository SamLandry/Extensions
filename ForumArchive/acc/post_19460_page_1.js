[{"Owner":"Nikos123","Date":"2015-12-25T21:07:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi all!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In my game_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//quantuminformation.github.io/Density-Wars/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//quantuminformation.github.io/Density-Wars/_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can select units by clicking on them and a bounding box shows it as currently selected.  If a user clicks anywhere on scene I want to deselect them. Obviously I can listen to canvas click natively but that won_t_t tell me if no unit is under the mouse._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What is my correct strategy?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_As a bonus does anyone know a good tweening lib for moving from (x1_co_y1) to (x2_co_y2). Basically I want to have a a unit acceleration to top speed and deceleration approaching end point._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-12-25T22:41:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Nikos\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#ZVHBC_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#ZVHBC_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust a few mods to our drag_t_n_t_drop playground demo.  In the onPointerDown func... line 83... showBoundingBox if a mesh was hit.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThen I added lines 93-99. If user clicked but didn_t_t hit a mesh (else)_co_ then scan through all scene meshes_co_ and if its bounding box is true_co_ shut it off.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn fact_co_ you could just set all bounding boxes false... whether any are set true or not.  (set them all false_co_ no matter what.)  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t-----------------\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBonus_dd_  That is called _qt_easing_qt_ and the playground for easing is _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/?20_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/?20_lt_/a_gt_  .  Documentation for easing is found at _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/07._Animations%C2%A0%C2%A0_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/07._Animations  _lt_/a_gt_ - section 4.  Good luck!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nikos123","Date":"2015-12-25T23:12:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks wingnut! Next step lasers._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Do you think its better to have instantaneous laser speed or have more bullet like speed? With bullets have to allow chance of missing and complications._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nikos123","Date":"2015-12-25T23:14:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Also is pointerdown a custom event fired by babylon that bubbles up?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nikos123","Date":"2015-12-25T23:40:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_For whatever reason this function is never excecuted pointerdown_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt_    this.canvas.addEventListener(_qt_pointerdown_qt__co_ e _eq_&gt_sm_ {_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        if (e.button !_eq__eq_ 0) {_lt_/div_gt__lt_div_gt_          return_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        // check if we are under a mesh_lt_/div_gt__lt_div_gt_        var pickInfo _eq_ this.scene.pick(this.scene.pointerX_co_ this.scene.pointerY_co_ function (mesh) {_lt_/div_gt__lt_div_gt_          return mesh !_eq__eq_ this.ground.mesh_sm__lt_/div_gt__lt_div_gt_        })_sm__lt_/div_gt__lt_div_gt_        if (!pickInfo.hit) {_lt_/div_gt__lt_div_gt_          this.cores.forEach(core_eq_&gt_sm_ {_lt_/div_gt__lt_div_gt_            core.deselect()_sm__lt_/div_gt__lt_div_gt_          })_lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_      }_co__lt_/div_gt__lt_div_gt_      false)_sm__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nikos123","Date":"2015-12-26T11:46:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I managed to get the onpointer down to work like so_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_    this.scene.onPointerDown _eq_ (evt_co_ pickResult_dd_PickingInfo) _eq_&gt_sm_ {      if (evt.button !_eq__eq_ 0) {        return_sm_      }      this.addMoveCommand(pickResult.pickedPoint)_sm_    }_lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-12-26T13:57:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Good job_co_ Nikos.  A little experimenting and some console logging... gets the job done_co_ eh? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_onPointerDown is a custom event HANDLER... but it is a standard HTML event_co_ on a HTML canvas element.  So it follows standard HTML element bubbling and cascading.  There_t_s plenty to read about canvas events on the web._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Likely_co_ you will use a picking ray to test for laser target hits_co_ so it doesn_t_t matter what type of animation you use for the lasers.  Only if you are firing real mesh objects... do you need to be concerned with gaps between _qt_pulses_qt_.  Particles work nice for this_co_ but they CAN have a little delay time before they reach the target.  Also_co_ intersect testing can be a challenge with particles.  A fine forum thread is _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/11278-controlling-particles/_qt__gt_http_dd_//www.html5gamedevs.com/topic/11278-controlling-particles/_lt_/a_gt_ ...  see the light sabers. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In particular_co_ notice the distance-measuring information and code.  I don_t_t know if mesh intersect works on standard particles_co_ so you may want to put a small invisible plane or box at the end of the particle stream.  Maybe check for intersect with THAT mesh... against a target.  This might not be the best approach_co_ but it is AN approach.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Good luck!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Nikos123","Date":"2015-12-27T19:43:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks Wingnut for this helpful and inspiring advice. I think for now I will focus on_lt_a href_eq__qt_https_dd_//github.com/QuantumInformation/Density-Wars/blob/master/lib/weapons/Laser.ts#L21_qt_ rel_eq__qt_external nofollow_qt__gt_ instantaneous weapons_lt_/a_gt_ and only draw (thin very fast growing neon cylinders ) for the users benefit._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m quite excited about this game_co_ its more fun coding it than playing existing RTS_t_s out there as I can build it how I like and implement users feedback._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Once I get basic gameplay I will set up Peer to Peer with webRTC_co_ do you think that is achievable with B..js?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]