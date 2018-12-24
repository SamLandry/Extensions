[{"Owner":"Dad72","Date":"2017-05-12T13:45:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI just discovered ECMASscript 6 that I find really great. On can now use the term _t_class_t_ to _t_constructor_t_ can assign variables in the parameter functions_co_ use static functions_co_ constant_co_ extend the _t_class_t_ very easily_co_ use _t_let_t_ instead of _t_var_t_ and others.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think the future versions in preparation ECMASscript 7 will bring even more opportunities_dd_ function public_co_ private_co_ protected ... typing the valiable with int_co_ float...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo_co_ I think tapuscript will used less in the future. Javascript makes a great leap forward for web applications. I_t_m going to convert my project with the new ECMAScript syntax 6.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat do you think ECMAScript 6 for those familiar?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-05-12T17:18:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI actually switched from ES6 to TypeScript recently.  I have been working in ES6 for over a year.  With ES6 I was using babel_co_ so the generated javascript would run on older browsers and it was a massive improvement over vanilla javascript.  What I found in addition to the ES6 language benefits that TypeScript gave me additional benefits like Interfaces (instead of ES6/javascript conventions)_co_ discriminated unions_co_ enumerations_co_ type inference_co_ generics and the code showing more the intent in TypesScript... plus enforcing at compile time my intentions/mistakes that even a good ESLint cannot detect.  I would not say that I have a strong preference for one over the other_co_ but will continue in TypeScript.  I have starter kits for ES6 and TypeScript for BabylonJS in my github repo.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI agree that if JavaScript keeps going as it is going that TypeScript will end up like CoffeeScript_co_ but I_t_m not sure ES7 is there yet - it_t_s getting the timing right.  Everything ES6 will work in TypeScript_co_ since TypeScript is a superset.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat are the advantages you have found from ES6 over TypeScript or are you switching to ES6 from regular javascript?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-05-12T19:15:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI was using before ES5 and protytype. so switching to ES6 is a good step forward for me. I do not like the typescript made of having to compile. with javascript I just refrech my page to see the results.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-05-13T04:26:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI agree ES6 is a good step forward!  There is a lot of new syntax to get used to as well_co_ which is fun to learn.  Just wanted to mention that TypeScript has a -watch option_co_ so you can just refresh the page to see the results_co_ but TypeScript is not as fast as saved javascript to refresh _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Everybody has their own workflow_co_ so choose what you like best.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jellix","Date":"2017-05-13T17:21:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tjust a question ... isn_t_t TypeScript ECMA 6? As you see a difference there_co_ I seem to get something wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo there is _t_vanilla JS_t_ (native_co_ simple JavaScript) that is ECMA 5_co_ right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd then we have TypeScript that follows the conventions of ECMA 6_co_ right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also have heard about babel but didn_t_t use it yet. But I thought that is another pendant to TypeScript that also has to be compiled down to vanilla JS.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd I thought that the browsers don_t_t support ECMA6 yet_co_ because JavaScript is still ECMA 5_co_ what is the reason why ES6 has to be compiled.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tRight? _dd_-)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bruno_","Date":"2017-05-13T17:30:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tES6 is the way to go. I still use only es5 to support older android versions. But it won_t_t last. Perhaps my next games will be es6 only.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-05-13T17:43:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tES6 is javascript and it is a present supported by the browsers.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJavaScript ES6 (This is not typescript)\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_class actor extends human {\n    \n    constructor()\n    {\n        super()_sm_\n\t\t\n    }\n\t\n    createActor(name _eq_ _qt_namedefault_qt_)\n    {\n        this.c _eq_ null_sm_\n        let age _eq_ 40_sm_\n\t\t\n        setTimeout(() _eq_&gt_sm_ {\n            this.c _eq_ _qt_v_qt__sm_\n        }_co_ 1000)_sm_\n    }\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2017-05-13T18:35:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIf you want to support downlevel browsers then you can write ES6 and Babel will convert it to ES5.  TypeScript is a superset of javascript_co_ so you can write ES6 in TypeScript - so that is maybe confusing_co_ but the typescript is compiled to javascript.  You can set typescript to target different versions of ECMAScript in tsconfig.json.  ie_dd_ _qt_target_qt__dd_ _qt_es6_qt_.  You can see the ES6 compatibility in charts like this one_dd_ _lt_a href_eq__qt_https_dd_//kangax.github.io/compat-table/es6/_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//kangax.github.io/compat-table/es6/_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-05-13T21:01:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOr use this code that transforms the ES6 code to ES5 in the fly. (It can be used if the browser does not support ES6)\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_&lt_sm_script src_eq__qt_https_dd_//google.github.io/traceur-compiler/bin/traceur.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n&lt_sm_script src_eq__qt_https_dd_//google.github.io/traceur-compiler/src/bootstrap.js_qt_&gt_sm_&lt_sm_/script&gt_sm_\n\n&lt_sm_script type_eq__qt_module_qt_&gt_sm_\n        // code ES6 here\n&lt_sm_/script&gt_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tit is a tool developed by Google.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis can help detect if the browser supports ES6_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var supportsES6 _eq_ function() {\n    try {\n        new Function(_qt_(a _eq_ 0) _eq_&gt_sm_ a_qt_)_sm_\n        return true_sm_\n    }\n    catch (err) {\n        return false_sm_\n    }\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bruno_","Date":"2017-05-13T21:28:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_174473_qt_ data-ipsquote-contentid_eq__qt_30390_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1494709315_qt_ data-ipsquote-userid_eq__qt_5292_qt_ data-ipsquote-username_eq__qt_Dad72_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t23 minutes ago_co_ Dad72 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tOr use this code that transforms the ES6 code to ES5 in the fly\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tYou can transpile on the fly_co_ however I don_t_t recommend it_co_ especially for games. It has a perfomance impact that it_t_s not needed if the source if transpiled in build time.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlthough it_t_s nice that you point it out_co_ because for development and prototyping it can be very helpful.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2017-05-13T22:13:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThanks for the information. I do not think that at the current time it is useful to compile in ES5. Most of the browsers today supports ES6.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"bruno_","Date":"2017-05-13T22:31:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_174476_qt_ data-ipsquote-contentid_eq__qt_30390_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1494713601_qt_ data-ipsquote-userid_eq__qt_5292_qt_ data-ipsquote-username_eq__qt_Dad72_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t16 minutes ago_co_ Dad72 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThanks for the information. I do not think that at the current time it is useful to compile in ES5. Most of the browsers today supports ES6.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tIf you want to make cordova applications and run it in the native web view.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOlder android versions don_t_t support es6 in the webview.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou can always use crosswalk or just ignore those android versions_co_ but there_t_s a use case for es5.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]