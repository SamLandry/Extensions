[{"Owner":"Panuchka","Date":"2017-04-23T17:24:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust a quick question_sm_ how to not freeze the render loop when doing _qt_heavy_qt_ operations?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tExample_dd__lt_br /_gt_\n\tIn my game_co_ I have a stage that is composed of squares. The player can move around the stage but so can the enemies. The enemies are using a pathfinding system that uses navigation mesh. This navigation mesh is created dynamically when the game runs._lt_br /_gt_\n\tPlayer can destroy the tiles of the stage. The tile destruction triggers the recalculation of the navmesh. The recalculation itself is a pretty heavy operation that freezes the whole game for a second or so.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I_t_m pretty much asking is if there is an async functionality for heavy functions/operations that are triggered from the render loop. Or what is the best way to handle these situations?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-04-24T08:13:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\twebworkers ?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2017-04-24T08:17:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYes the only option is Web workers \n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-04-25T16:05:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tDoes the pathfinding system freeze the game when there is only one enemy using it?  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf not_co_ I_t_d simply limit the amount of times you can call the pathfinding function per frame.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tedit_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOK_co_ I_t_m seeing that just the recalculation of the navmesh freezes the game.  You probably are going to need to use webworkers.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]