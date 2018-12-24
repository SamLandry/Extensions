[{"Owner":"EvilMax","Date":"2016-04-29T15:36:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ i wonder how could i do something like 3d chess.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_1) So lets say_co_ there should be a tailed 3d map (i already saw tutorials to do it _sm_))._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_2) Lets say in one tail there is a cube(or any mesh). Here i dont know how to set right position to the center of certain tail._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_3) And than i would like to know how can i drag the cube to another tail_co_ but at the same time i should check that the drag is inside the limited field._lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt__lt_u_gt_Any suggestions_co_ links for some useful tutorials or pieces of code?_lt_/u_gt__lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-04-29T18:05:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi EvilMax_co_ welcome to the forum!  Yes_co_ all your dreams can come true... with Babylon.js.  And you don_t_t necessarily need to use a tiled ground.  You can create the _qt_tiled_qt_ effect.... by using a texture.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#JBHRC_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#JBHRC_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tA pretty good start_co_ eh?  Drag on background color... to pan cam. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat web site is called _qt_The Playground_qt_.  We BJS folk edit_co_ test_co_ experiment_co_ run_co_ save_co_ zip... and have tons of fun_co_ there.  It is a great way to share small webGL scenes with one another_co_ and help each other find solutions.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlthough your playground demo now has a decent tiled board_co_ and has drag_t_n_t_drop working well (with help from our drag-and-drop pre-made playground demo)... you still need _qt_snap_qt__co_ right?  When the user has dragged a mesh more than 50% across a tile border_co_ you would like to _qt_snap_qt_ the mesh to tile center... in onPointerUp_co_ yes?  You don_t_t want any mesh _qt_sitting on the fence_qt_ sotospeak_co_ right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ you have more fun ahead.  You might want to think about HOW BIG is that ground/board that is created in line 16.  300 by 300.  Hmm.  Looks like EvilMax will be writing a function.... perhaps called _qt_snapAll()_qt_.  Perhaps it _qt_squares-up_qt_ all mesh on the board.  Or possibly... it ONLY squares-up the most-recently MOVED mesh.  There is adventure ahead for EvilMax and his forum of super-helpers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAgain_co_ welcome to the forum_co_ welcome to Babylon.js_co_ and just plain welcome.  Try out some _qt_snap_qt_ experiments... a little math... a little web reading... a little bravery.  You can edit_co_ run_co_ and save as much as you like... in the playground.  It is impossible to over-write anything or do anything bad.  In fact_co_ some of us think it is great fun to see how well we can blow-up the playground and its edited scene.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Remember_co_ when editing in the playground_co_ hit RUN over and over_co_ but avoid control-r (reload)... which could cause you heartache.  (there is a warning alert - so don_t_t worry)  Have fun_co_ stay in touch.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"EvilMax","Date":"2016-05-03T14:23:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks_co_ for first fast example_co_ i will try something_co_ like you said. By the way_co_ do you think that in this case Ray may be useful to detect if the square is occupied or not?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-05-03T16:15:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi again EM.  Sure_co_ ray would work fine.  But_co_ hmm_co_ keep in mind that you COULD maintain a 2 dimensional array in JS_co_ and therefore you would KNOW which array elements of the board were occupied_co_ and which not_co_ well before the user tried to move.  If your internal JS array tester says there is a mesh already in that array slot_co_ then the move will be refused.  They might be disallowed from even TRYING to do that drag-attempt.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ your mesh won_t_t be _qt_normal_qt_ mesh.  They will each have special behaviors.  For example_co_ user _qt_picks-up_qt_ a _lt_u_gt_position_lt_/u_gt_.  Your JS quickly queries your array and discovers that the user has chosen a position with a chess piece on it... because there is an [object] in your boardTileArray at that location.  That object could be or is... a mesh.  But then you discover that it is a knight.  Knights have move-distance/location limitations.  The knight object itself (a standard mesh but it could have added knight-methods and knight-properties)... could be smart.  IT could _qt_carry_qt_ its knight-characteristics.  IT... could check if the user is trying a _qt_legal_qt_ move for knight-class mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis is one possible design strategy.  Quickly hand-off the _qt_check if this move is ok_qt_-task... to the chess piece that is trying to be moved.  Maybe let IT allow or refuse the move.  This would require creating a new subclass from Babylon.Mesh_co_ I suppose.  Perhaps a mesh.chesspiece class_co_ and then mesh.chesspiece.knight class_co_ etc.  A different class for each TYPE of chess piece.   Perhaps... baseobj.chesspiece.knight.toMesh().  Know anything about OOP?  I don_t_t.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  I_t_m really not a good game designer.  I hope smarter people than I... leave comments_co_ too.  My ideas are not always good ideas.  heh\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]