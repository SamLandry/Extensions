[{"Owner":"NinjaMark","Date":"2016-06-13T11:41:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m getting a crash in the current Babylon 2.4 Beta on Scene.Dispose()_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_Unable to get property _t_LEQUAL_t_ of undefined or null reference_qt__lt_br /_gt_\n\tat Engine.prototype.setDepthFunctionToLessOrEqual_lt_br /_gt_\n\tat Engine.prototype.wipeCaches\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLooks to be due to the addition of _qt_this.setDepthFunctionToLessOrEqual()_sm__qt_ to wipeCaches()_co_ this references this._gl which is already null at this point.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-06-13T15:29:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHum this is weird. this._gl is null only when you call engine_co_dispose() and not scene.dispose()\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tcan you reproduce the issue in the playground?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2016-06-13T20:12:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis has been checked and was coming from _wipeCaches being called manually after dispose the engine _dd_-)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for your help_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]