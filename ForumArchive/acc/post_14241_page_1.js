[{"Owner":"dsman","Date":"2015-05-01T23:05:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_If I use jquery.min.js I get following error. I have tried referencing jquery in a page before the babylon.js is referenced and after it. Gives same error. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_b.prepare is not a function   (at line # 9 babylon.2.0.js)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-05-02T11:28:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I never had any conflicts with jQuery and babylon. the error probably comes from something else. what is your error in the console?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2015-05-02T17:22:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Earlier I remember having jquery file included in the html page where my babylon scene is hosted. At that time I didn_t_t see error. But at specific day it started appearning. And that day_co_ since jquery wasn_t_t useful for me_co_ I just commented its reference. Then it went away. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But now since I require it_co_ I tried adding jquery reference again. And it gives following error in console. I tried placing jquery reference both before babylon.js reference and after babylon.js reference. Gives error in both case. _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_b.prepare is not a function   (at line # 9 babylon.2.0.js)_lt_/pre_gt__lt_p_gt_I am refering following js files in HTML page. _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_&lt_sm_!--&lt_sm_script src_eq__qt_scripts/jquery.min.js_qt_&gt_sm_&lt_sm_/script&gt_sm_--&gt_sm_  &lt_sm_script src_eq__qt_scripts/babylon.2.0.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_script src_eq__qt_scripts/hand-1.3.8.js_qt_&gt_sm_&lt_sm_/script&gt_sm_&lt_sm_script src_eq__qt_scripts/cannon.js_qt_&gt_sm_&lt_sm_/script&gt_sm_  &lt_sm_script src_eq__qt_scripts/math.js_qt_&gt_sm_&lt_sm_/script&gt_sm_  &lt_sm_!-- _lt_a href_eq__qt_http_dd_//mathjs.org/_qt__gt_http_dd_//mathjs.org/_lt_/a_gt_ --&gt_sm_&lt_sm_script src_eq__qt_scripts/utility.js_qt_&gt_sm_&lt_sm_/script&gt_sm_  &lt_sm_!-- my own code . Code in this file uses jquery code --&gt_sm_&lt_sm_script src_eq__qt_scripts/geoutil.js_qt_&gt_sm_&lt_sm_/script&gt_sm_   &lt_sm_!-- my own code --&gt_sm_&lt_sm_script src_eq__qt_scripts/model.js_qt_&gt_sm_&lt_sm_/script&gt_sm_     &lt_sm_!-- my own code --&gt_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"dsman","Date":"2015-05-02T17:28:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Resolved. Code in my utility.js file was causing the problem. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But strangely the error in console was showin in babylon.js file and it seemed no way relevant to my code in utility.js _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I commented all functions one by one in utility.js and found a function which if was causing a problem. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]