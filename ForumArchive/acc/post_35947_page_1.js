[{"Owner":"stormwarestudios","Date":"2018-02-25T21:41:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m (slowly!) building the GUI for my game_co_ and I believe I have a use-case which the current API does not cover. I have a workaround_co_ but I thought I would discuss it here.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe game itself is a client/server model (websockets for transport)_co_ where various states of the GUI are loaded from the server once the user has jumped through the usual hoops (auth_co_ chosen context_co_ etc). For example_co_ the current feature I am developing involves Slider controls.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I want to do with the sliders is three things_dd_\n_lt_/p_gt_\n\n_lt_ol_gt_\n\t_lt_li_gt_\n\t\tOnce the hoop-jumping is done_co_ Slider state is loaded from the server_co_ and the Slider value is set.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tA player may be an _lt_em_gt_initiator_lt_/em_gt_ of a Slider value-change_co_ whereby I use the _lt_em_gt_onValueChangedObservable_lt_/em_gt_ event to send the change to the server. Such changes are broadcast to all players sharing a similar context.\n\t_lt_/li_gt_\n\t_lt_li_gt_\n\t\tA different player who shares context as #2 may be a _lt_em_gt_receiver_lt_/em_gt_ of a Slider value-change (e.g. as done by a player in #2)_co_ whereby I must update the Slider value without triggering _lt_em_gt_onValueChangedObservable_lt_/em_gt_ and just cause the slider appearance to be modified.\n\t_lt_/li_gt_\n_lt_/ol_gt_\n\n_lt_p_gt_\n\tIn the case of #1_co_ when I load the Slider value from the server and set Slider.value _eq_ _lt_em_gt_newValue_lt_/em_gt__co_ this triggers a _lt_em_gt_onValueChangedObservable_lt_/em_gt__co_ which pushes the change to the server_co_ which would broadcast the value change to all clients in the same context_co_ which would cause their Sliders to update_co_ which would trigger _lt_em_gt_onValueChangedObservable_lt_/em_gt__co_ and so on_co_ until a rift in the spacetime continuum appears.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn the case of #2_co_ the same sort of thing may occur_co_ except initiated by a player.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat I have done to avoid the _lt_em_gt_onValueChangedObservable_lt_/em_gt_ trigger_co_ is to call_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSlider._value _eq_ _lt_em_gt_newValue_lt_/em_gt__sm__lt_br /_gt_\n\tSlider._markAsDirty()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis works perfectly_co_ and does not trigger _lt_em_gt_onValueChangedObservable_lt_/em_gt_. However_co_ it feels ... _lt_em_gt_dirty_lt_/em_gt_. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a better way to handle this? I suspect I_t_ll get deep into this pattern once I get to the rest of the types of controls I have planned.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2018-02-26T13:41:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh_co_ I like those software-architecture questions _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI see a few different ways of handling this (the one you suggested is actually one of them)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) Override the value-setter of the slider. Something along this line_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ Object.defineProperty(BABYLON.GUI.Slider.prototype_co_ _qt_value_qt__co_ {\n                get_dd_ function () {\n                    return this._value_sm_\n                }_co_\n                set_dd_ function (value) {\n                    value _eq_ Math.max(Math.min(value_co_ this._maximum)_co_ this._minimum)_sm_\n                    if (this._value _eq__eq__eq_ value) {\n                        return_sm_\n                    }\n                    this._value _eq_ value_sm_\n                    this._markAsDirty()_sm_\n                    // this.onValueChangedObservable.notifyObservers(this._value)_sm_\n                }_co_\n                enumerable_dd_ true_co_\n                configurable_dd_ true\n            })_sm_ _lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tSo the setter now don_t_t notify the observers. You will need to do it manually_co_ when the user changes the value (detecting that should be easy)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) Push a function to the onValueChanged observable that will stop observable iteration if a server value was received. You will need to set skipNextObservers to true in the event state object_co_ which will prevent the next observers to be executed). If it is user-triggered_co_ don_t_t set it to true_co_ and the value will be sent to the server.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]