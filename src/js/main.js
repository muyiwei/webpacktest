import "../css/test.css"
import "./test.js"
var lang = "zh-cn"
 import(
 	/* webpackChunkName: "lang" */
 	/*webpackMode: "lazy"*/
        `../lang/${lang}.js`)