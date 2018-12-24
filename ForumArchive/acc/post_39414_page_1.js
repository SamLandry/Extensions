[{"Owner":"SchneeHenry","Date":"2018-08-13T10:20:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello community_co__lt_br /_gt_\n\t_lt_br /_gt_\n\tI_t_m new to babylonjs and I have a question concerning to the collision detection of holes in meshes. I want to recognize that a sphere flies through a hole (any kind of shape possible)._lt_br /_gt_\n\t_lt_br /_gt_\n\tI prepared a example with an cylinder which contains some holes (different shapes) at a random position. A sphere is moving up and down to collide with the cylinder and I want to know_co_ if that sphere collides with a hole or with the surface of the mesh object._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W#6_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tAt the moment_co_ the collision with the mesh object changes the color of the sphere on any _t_collision_t_. My goal is_co_ that the sphere changes the color only passing/flying through a hole_co_ but the holes can be random positioned and could also have a random shape. _lt_br /_gt_\n\t_lt_br /_gt_\n\tIt would be great if you guys can help/teach me how to achieves this. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-13T12:31:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThe easiest would be to make the hole an invisible mesh so then you could detect collision with it. The best part is that if it is invisible you could rely on efficient shapes like spheres fitting as best as you can with your hole shapes to detect the collisions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo not hesitate to let me know if I am not clear enough.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-13T13:02:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh And I forgot the most important... fortunately _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ is watching _lt_span class_eq__qt_ipsEmoji_qt__gt_😉_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWelcome to the forum !!! \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SchneeHenry","Date":"2018-08-13T14:19:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi and thx for the reply._lt_br /_gt_\n\t_lt_br /_gt_\n\tI changed some lines of code so that the _qt_hole objects_qt_ are invisible and added via ActionManager a collision detection on these._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W#8_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tBut the detection isn_t_t as accurate as I thought. If the sphere just hit the edge of the hole the detection fires_co_ but visually the sphere would hit the ground and only the edge of the hole._lt_br /_gt_\n\t_lt_br /_gt_\n\tMaybe I should add more smaller _t_collider_t_ objects to make a more precise detection_co_ but that could  cause a performance issue?!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-08-13T14:48:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi SH_co_ and welcome from me_co_ too.  Sebavan and I talked a bit... in a personal message.... about your issue.  We (I) talked a bit about using a _lt_u_gt_small_lt_/u_gt_ invisible collider in _lt_u_gt_center_lt_/u_gt_ of hole.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWe (I) also wondered if your spheres would ALWAYS be spheres_co_ which would allow CannonJS physics engine to use its _t_meshImpostor_t_ on the CSG mesh.  This would give you sphere bounce-off (like a basketball hoop) IF sphere hit too much edge. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSO_co_ may I ask... Will your spheres... ALWAYS be spheres?   CannonJS meshImpostor _lt_u_gt_only allows spheres_lt_/u_gt_ (sphereImpostors) to collide with it (and rebound/recoil realistically).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd yes_co_ your idea of making precise collision... using many little invisible colliders... is a good idea.  It has been used for a few other BJS projects. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes_co_ that method DOES have some performance concerns_co_ but still possibly worth testing.  You are doing good thinking_co_ SH.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIF you decide to use the CannonJS physics engine and meshImpostor collider... there is a performance issue with that_co_ too.  Quite a few impact-angle and bounce-off angle math calculations are done by the physics engine.  IF the sphere doesn_t_t need to spin after edge-impact_co_ we can remove SOME physics calculations (fixedRotation).  *shrug*  Thinkin_t_.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-13T15:09:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tYou need to add a check in onEntry to ensure you are only colliding with the Hole collider so that you would not have false positive when colliding with both the hole and the shape.\n_lt_/p_gt_\n\n_lt_p style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_\n\tAs this might cost a bit of perf the other way is to shrink your colliders to ensures that as long as the ball collides with them it can not touch the other shape by leaving a border equal to the diameter of the ball around the colider.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-08-13T17:42:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tanother approach would be to use the facetData partitioning that can work with any mesh if you like to tweak things _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_use_facetdata#mesh-partitioning_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/how_to_use_facetdata#mesh-partitioning_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/how_to_use_facetdata_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/how_to_use_facetdata_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SchneeHenry","Date":"2018-08-13T18:47:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for all the feedback _lt_span class_eq__qt_ipsEmoji_qt__gt_😊_lt_/span_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tTo make my goal clearer I_t_ll tell you my intentions about my game. I_t_ll try to develop a kind of _t_flying game_t_. In the game you_t_re flying through a tunnel. Your _t_plane_t_ is always a sphere. In that tunnel you have discs/cylinders that are rotating. I will call them gates. These gates have holes where you can fly through. Those holes can have different shapes_co_ sometimes it could be a circle_co_ or an object with edges_co_... . If you hit the gate your plane will be destroyed. If you pass the gate_co_ you get some points and your movement speed increases. And so on _lt_span class_eq__qt_ipsEmoji_qt__gt_😉_lt_/span_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tThat_t_s why I_t_m asking for _qt_hole collision detection_qt_ and also pay attention about game performance._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ it will always be a sphere and I_t_ll try to make an example with cannonJS and post it (but it takes some time _lt_span class_eq__qt_ipsEmoji_qt__gt_😉_lt_/span_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ That was exactly my next step to make it better. I_t_ll try to optimize my colliders. But what exactly did you mean with  _qt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__lt_span_gt_ _lt_/span_gt_ensure you are only colliding with the Hole collider so that you would not have false positive when colliding with both the hole and the shape_qt_ --&gt_sm_ I thought I just add intersections with my hole colliders and the sphere and turn off the collision check for any other objects._lt_br /_gt_\n\t_lt_br /_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ interesting approach _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I have to read these articles and examples and try to implement that._lt_/span_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt__lt_span_gt_Thx so far_lt_/span_gt__lt_/span_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-08-13T19:02:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBasicaly I mean as long as your collider is small enough you could not interact with it and another mesh at the same time which prevents the need to double check what you are colliding with.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SchneeHenry","Date":"2018-08-14T11:10:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I_t_ve got  a question ..._lt_br /_gt_\n\t_lt_br /_gt_\n\tis it possible to show a intersection area of the collider? _lt_br /_gt_\n\tIn my PG  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W%239_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W#9_lt_/a_gt_ you see_co_ that the sphere is not collide with the collider but the detection tracks it as a collision (look at the console)._lt_br /_gt_\n\tDo I have to adjust the ellipsoid of my collider? Sry if the question ever came up\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-08-14T12:56:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  SH_co_ I don_t_t have an answer for your last question_co_ but ellipsoid and ellipsoidOffset [and moveWithCollisions()] were created for use-with a built-into BJS system... used for camera-&gt_sm_object collisions... for first-person shooter games.  When using intersectsMesh()_co_ or actionManager intersection stuff_co_ I have never adjusted .ellipsoid.  I think actionManager intersect uses boundingBox and boundingSphere stuff  (no .ellipsoid).  I could be wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou might want to set _lt_strong_gt_anymesh.showBoundingBox _eq_ true_sm__lt_/strong_gt_ on some things... to help see what is happening.  *shrug*  Many of us are learning right along-side you_co_ SH!  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPerhaps we will all assemble an _qt__lt_strong_gt_Everything you ever wanted to know about colliding_lt_/strong_gt__qt_ -document/tutorial_co_ later_co_ using your discoveries and whatever other knowledge we can find.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tANYWAY... I built a playground version with basic CannonJS meshImpostor colliding.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1ZQS9W%2310_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1ZQS9W#10_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t*shrug*.  Something to play-with.  _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Friction_co_ for spheres... is almost non-operational_co_ due to their near-0 surface-area contact with other surfaces.  If you wish... you can reach deep into the CannonJS _qt_native_qt_ (lower level) objects/classes_co_ and do this..._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt__lt_span_gt_sphere.physicsImpostor.physicsBody.linearDamping _eq_ 0.4_sm_   _lt_/span_gt__lt_/strong_gt__lt_span_gt_(Found here_dd_  _lt_/span_gt__lt_a href_eq__qt_http_dd_//schteppe.github.io/cannon.js/docs/classes/Body.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//schteppe.github.io/cannon.js/docs/classes/Body.html_lt_/a_gt__lt_span_gt_  You can also see the ._lt_em_gt_fixedRotation_lt_/em_gt_ property that I spoke-of earlier.)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_Automatic brakes for roll-forever spheres.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_   Demo_dd_  _lt_/span_gt__lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#OJVVA%2318_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#OJVVA#18_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-08-14T15:21:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_225008_qt_ data-ipsquote-contentid_eq__qt_39414_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1534245045_qt_ data-ipsquote-userid_eq__qt_32482_qt_ data-ipsquote-username_eq__qt_SchneeHenry_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t3 hours ago_co_ SchneeHenry said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tyou see_co_ that the sphere is not collide with the collider\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/32482-schneehenry/?do_eq_hovercard_qt_ data-mentionid_eq__qt_32482_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/32482-schneehenry/_qt_ rel_eq__qt__qt__gt_@SchneeHenry_lt_/a_gt_ and a welcome from me. Actually they do overlap. It is a little easier to see from this angle _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W%2311_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W#11_lt_/a_gt_ and even easier to see if you do as _lt_span_gt__lt_span_gt__lt_span_gt__lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt__lt_/span_gt__lt_/span_gt__lt_/span_gt_ suggests and show the bounding boxes for the sphere and cylinderHole Top. You need to check your measurements and also remember that an intersection is calculated from a bounding box.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou collision cylinder has a diameter of 2.25 * 0.05 _eq_ 0.1125 and so a radius of 0.02625_co_ so looking down onto the XZ plane gives the following results\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_19587_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_08/bounds.jpg.a62306ece07834aad458bc9810fa79eb.jpg_qt_ alt_eq__qt_bounds.jpg.a62306ece07834aad458bc9810fa79eb.jpg_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tthe bottom edge of your collision cylinder is at -1.72625 but the top edge of the sphere is at -1.6 .\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso the left edge of the collider is at -0.02625 whereas the right edge of the sphere is at 0.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen R is the radius of the sphere for them not to intersect you need -2.1 + R &lt_sm_ -1.72625\n_lt_/p_gt_\n\n_lt_p_gt_\n\tR &lt_sm_ 2.1 - 1.72625\n_lt_/p_gt_\n\n_lt_p_gt_\n\tR &lt_sm_ 0.47375 and so the diameter of the sphere has to be less than 2R _eq_ 0.9465\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn practice (either due to my error somewhere in calculations or to rounding errors) max radius is 0.88 as you can see in this _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W%2312_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W#12_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JohnK","Date":"2018-08-14T16:39:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere is a minor development - currently it is restricted to the sphere moving in the y direction and the plane of the item must be perpendicular the Y axis. You could extend it to other shaped holes but would need to use the inscribed circle of the shape as the hole boundary. I have also simplified to one hole and everything centered on the origin. You can soon extend.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe idea is that provided the sphere is smaller than the hole it will go through if the centre of the sphere is close enough to the centre of the hole.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W%2315_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W#15_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think the code is self explanatory but if you need something explaining please ask. Have fun. Adjust line 51 for sphere not the pass through.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis one is just playing around with a reaction if the sphere cannot get through. It is not very good as the reaction is not what you would expect.  To get a better reaction you would need to determine the position of the sphere_t_s central column to the centre of the hole. _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W%2316_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W#16_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SchneeHenry","Date":"2018-08-15T18:40:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/?do_eq_hovercard_qt_ data-mentionid_eq__qt_14282_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/14282-johnk/_qt_ rel_eq__qt__qt__gt_@JohnK_lt_/a_gt_ Thx for your detailed feedback. It helped me a lot and I totally forgot to take the bounding box of each element into account _lt_span class_eq__qt_ipsEmoji_qt__gt_😅_lt_/span_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tAt this point I think I_t_ll continue with the small collider objects for the collision detection._lt_br /_gt_\n\tI_t_ll guess the CannonJS is quite useful but I think I_t_ll run into performance issues when I have a lot of objects but I_t_m not sure._lt_br /_gt_\n\t_lt_br /_gt_\n\tWhen I have time I_t_ll give the facelets a shot. I will keep you up to date.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"SchneeHenry","Date":"2018-09-05T13:01:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys_co__lt_br /_gt_\n\t_lt_br /_gt_\n\tI had some time to deal with the faceData approach._lt_br /_gt_\n\t_lt_br /_gt_\n\tI update my PG_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W%2317_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/indexStable.html#1ZQS9W#18_lt_/a_gt__lt_br /_gt_\n\t_lt_br /_gt_\n\tFrom line 92 to 104 I added some positions for different situations where a collision detection doesn_t_t work._lt_br /_gt_\n\tSo my question is_co_ why I get a null object in line 142 when my sphere collides with my item. Sometimes I get some facelets and sometimes not._lt_br /_gt_\n\t_lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-09-05T15:24:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5453_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5453-jerome/_qt_ rel_eq__qt__qt__gt_@jerome_lt_/a_gt_ is our facet master _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2018-09-06T04:04:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\treading quickly your code _lt_span_gt__dd__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_- you don_t_t need to update the facetData once they were computed if your mesh is not morphed in some way_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_- I think you_t_re trying to find the closest item facet near to the sphere position (so its center) and not from the sphere surface ... FacetData are a facet related feature _dd_ if you search for the closest item facet from the sphere center_co_ you_t_ll probably get nothing_co_ hence the returned _qt_null_qt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_As you can_t_t know what part of the sphere could hit the item_co_ you would check in theory is there_t_s some closest item facet near to _lt_em_gt_each_lt_/em_gt_ sphere facet what you probably be too much computation. Maybe you could instead check only some part of the sphere surface to lower these computations and keep a good approximation (like there were some points or vertices on the sphere acting as collision sensors)_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]