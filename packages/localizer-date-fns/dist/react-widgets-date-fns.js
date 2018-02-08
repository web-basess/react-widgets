/*! (c) 2014 - present: Jason Quense | https://github.com/jquense/react-widgets/blob/master/LICENSE.md */
!function(e){function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,r){"use strict";function n(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(null===e)return new Date(NaN);var r=t||{},n=void 0===r.additionalDigits?c:Number(r.additionalDigits);if(2!==n&&1!==n&&0!==n)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date)return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var s=u(e),f=a(s.date,n),m=f.year,p=f.restDateString,h=o(p,m);if(h){var y,g=h.getTime(),M=0;return s.time&&(M=i(s.time)),s.timezone?y=l(s.timezone):(y=new Date(g+M).getTimezoneOffset(),y=new Date(g+M+y*d).getTimezoneOffset()),new Date(g+M+y*d)}return new Date(e)}function u(e){var t,r={},n=e.split(m.dateTimeDelimeter);if(m.plainTime.test(n[0])?(r.date=null,t=n[0]):(r.date=n[0],t=n[1]),t){var u=m.timezone.exec(t);u?(r.time=t.replace(u[1],""),r.timezone=u[1]):r.time=t}return r}function a(e,t){var r,n=m.YYY[t],u=m.YYYYY[t];if(r=m.YYYY.exec(e)||u.exec(e)){var a=r[1];return{year:parseInt(a,10),restDateString:e.slice(a.length)}}if(r=m.YY.exec(e)||n.exec(e)){var o=r[1];return{year:100*parseInt(o,10),restDateString:e.slice(o.length)}}return{year:null}}function o(e,t){if(null===t)return null;var r,n,u,a;if(0===e.length)return n=new Date(0),n.setUTCFullYear(t),n;if(r=m.MM.exec(e))return n=new Date(0),u=parseInt(r[1],10)-1,n.setUTCFullYear(t,u),n;if(r=m.DDD.exec(e)){n=new Date(0);var o=parseInt(r[1],10);return n.setUTCFullYear(t,0,o),n}if(r=m.MMDD.exec(e)){n=new Date(0),u=parseInt(r[1],10)-1;var i=parseInt(r[2],10);return n.setUTCFullYear(t,u,i),n}if(r=m.Www.exec(e))return a=parseInt(r[1],10)-1,s(t,a);if(r=m.WwwD.exec(e)){a=parseInt(r[1],10)-1;return s(t,a,parseInt(r[2],10)-1)}return null}function i(e){var t,r,n;if(t=m.HH.exec(e))return(r=parseFloat(t[1].replace(",",".")))%24*f;if(t=m.HHMM.exec(e))return r=parseInt(t[1],10),n=parseFloat(t[2].replace(",",".")),r%24*f+n*d;if(t=m.HHMMSS.exec(e)){r=parseInt(t[1],10),n=parseInt(t[2],10);var u=parseFloat(t[3].replace(",","."));return r%24*f+n*d+1e3*u}return null}function l(e){var t,r;return(t=m.timezoneZ.exec(e))?0:(t=m.timezoneHH.exec(e))?(r=60*parseInt(t[2],10),"+"===t[1]?-r:r):(t=m.timezoneHHMM.exec(e),t?(r=60*parseInt(t[2],10)+parseInt(t[3],10),"+"===t[1]?-r:r):0)}function s(e,t,r){t=t||0,r=r||0;var n=new Date(0);n.setUTCFullYear(e,0,4);var u=n.getUTCDay()||7,a=7*t+r+1-u;return n.setUTCDate(n.getUTCDate()+a),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var f=36e5,d=6e4,c=2,m={dateTimeDelimeter:/[T ]/,plainTime:/:/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-])(\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};e.exports=t.default},function(e,t,r){"use strict";function n(e,t){var r=(0,a.default)(e,t),n=r.getUTCDay(),u=(n<1?7:0)+n-1;return r.setUTCDate(r.getUTCDate()-u),r.setUTCHours(0,0,0,0),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(u);e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(13),a=n(u),o=r(14),i=n(o),l=r(16),s=n(l),f=r(17),d=n(f),c=r(20),m=n(c),p={formatDistance:a.default,formatLong:i.default,formatRelative:s.default,localize:d.default,match:m.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=p,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var r=(0,o.default)(e,t),n=new Date(0);return n.setUTCFullYear(r,0,4),n.setUTCHours(0,0,0,0),(0,l.default)(n,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=r(6),o=n(a),i=r(1),l=n(i);e.exports=t.default},function(e,t,r){"use strict";function n(e,t,r){return r=r||[],r.length>=t?e.apply(null,r.slice(0,t).reverse()):function(){var u=Array.prototype.slice.call(arguments);return n(e,t,r.concat(u))}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var r=(0,o.default)(e,t),n=(0,l.default)(r,t).getTime()-(0,f.default)(r,t).getTime();return Math.round(n/d)+1}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=r(0),o=n(a),i=r(1),l=n(i),s=r(3),f=n(s),d=6048e5;e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var r=(0,o.default)(e,t),n=r.getUTCFullYear(),u=new Date(0);u.setUTCFullYear(n+1,0,4),u.setUTCHours(0,0,0,0);var a=(0,l.default)(u,t),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var s=(0,l.default)(i,t);return r.getTime()>=a.getTime()?n+1:r.getTime()>=s.getTime()?n:n-1}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=r(0),o=n(a),i=r(1),l=n(i);e.exports=t.default},function(e,t,r){"use strict";function n(e){e=e||{};var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,r){var e=r(9);"function"==typeof e&&e()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r){return r.format(e,"YYYY",t)}function a(e,t,r){return u(e,t,r)+" - "+u(M(e),t,r)}function o(e,t,r){return u(e,t,r)+" - "+u(D(e),t,r)}function i(){function e(e){return i[e]||h.default}function t(t,r,n){return(0,s.default)({locale:e(n)},r,t)}function r(t,r,n){return(0,d.default)({locale:e(n)},new Date,r,t)}function n(t){var r=e(t),n=r.options;return n&&n.weekStartsOn||0}var u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=u.formats,o=u.locales,i=void 0===o?{}:o;g.default.setDateLocalizer({firstOfWeek:n,parse:r,format:t,formats:a||v})}t.__esModule=!0,t.defaultFormats=void 0,t.default=i;var l=r(10),s=n(l),f=r(28),d=n(f),c=r(39),m=n(c),p=r(2),h=n(p),y=r(43),g=n(y),M=(0,m.default)(10),D=(0,m.default)(100),v=t.defaultFormats={date:"L",time:"LT",default:"lll",header:"MMMM YYYY",footer:"LL",weekday:"dd",dayOfMonth:"DD",month:"MMM",year:"YYYY",decade:a,century:o}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(11),a=n(u),o=r(4),i=n(o),l=(0,i.default)(a.default,3);t.default=l,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=String(t),u=r||{},o=u.locale||d.default;if(!o.localize)throw new RangeError("locale must contain localize property");if(!o.formatLong)throw new RangeError("locale must contain formatLong property");var l=o.formatters||{},f=o.formattingTokensRegExp||D,c=o.formatLong,p=(0,i.default)(e,u);if(!(0,s.default)(p,u))return"Invalid Date";var y=p.getTimezoneOffset(),v=(0,g.default)(p,-y,u),T=(0,h.default)(u);return T.locale=o,T.formatters=m.default,T._originalDate=p,n.replace(M,function(e){return"["===e[0]?e:"\\"===e[0]?a(e):c(e)}).replace(f,function(e){var t=l[e]||m.default[e];return t?t(v,T):a(e)})}function a(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|]$/g,""):e.replace(/\\/g,"")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var o=r(0),i=n(o),l=r(12),s=n(l),f=r(2),d=n(f),c=r(25),m=n(c),p=r(7),h=n(p),y=r(27),g=n(y),M=/(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g,D=/(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;e.exports=t.default},function(e,t,r){"use strict";function n(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=(0,a.default)(e,t);return!isNaN(r)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(u);e.exports=t.default},function(e,t,r){"use strict";function n(e,t,r){r=r||{};var n;return n="string"==typeof u[e]?u[e]:1===t?u[e].one:u[e].other.replace("{{count}}",t),r.addSuffix?r.comparison>0?"in "+n:n+" ago":n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};e.exports=t.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(15),u=function(e){return e&&e.__esModule?e:{default:e}}(n),a=(0,u.default)({LT:"h:mm aa",LTS:"h:mm:ss aa",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY h:mm aa",LLLL:"dddd, MMMM D YYYY h:mm aa"});t.default=a,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e.replace(a,function(e){return e.slice(1)})}function u(e){var t={LTS:e.LTS,LT:e.LT,L:e.L,LL:e.LL,LLL:e.LLL,LLLL:e.LLLL,l:e.l||n(e.L),ll:e.ll||n(e.LL),lll:e.lll||n(e.LLL),llll:e.llll||n(e.LLLL)};return function(e){return t[e]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=/MMMM|MM|DD|dddd/g;e.exports=t.default},function(e,t,r){"use strict";function n(e,t,r,n){return u[e]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u={lastWeek:"[last] dddd [at] LT",yesterday:"[yesterday at] LT",today:"[today at] LT",tomorrow:"[tomorrow at] LT",nextWeek:"dddd [at] LT",other:"L"};e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var r=Number(e),n=r%100;if(n>20||n<10)switch(n%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"}Object.defineProperty(t,"__esModule",{value:!0});var a=r(18),o=n(a),i=r(19),l=n(i),s={narrow:["Su","Mo","Tu","We","Th","Fr","Sa"],short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},f={short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],long:["January","February","March","April","May","June","July","August","September","October","November","December"]},d={uppercase:["AM","PM"],lowercase:["am","pm"],long:["a.m.","p.m."]},c={ordinalNumber:u,weekday:(0,o.default)(s,"long"),weekdays:(0,l.default)(s,"long"),month:(0,o.default)(f,"long"),months:(0,l.default)(f,"long"),timeOfDay:(0,o.default)(d,"long",function(e){return e/12>=1?1:0}),timesOfDay:(0,l.default)(d,"long")};t.default=c,e.exports=t.default},function(e,t,r){"use strict";function n(e,t,r){return function(n,u){var a=u||{},o=a.type?String(a.type):t;return(e[o]||e[t])[r?r(Number(n)):Number(n)]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e,t){return function(r){var n=r||{},u=n.type?String(n.type):t;return e[u]||e[t]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(21),a=n(u),o=r(22),i=n(o),l=r(23),s=n(l),f=r(24),d=n(f),c=/^(\d+)(th|st|nd|rd)?/i,m={narrow:/^(su|mo|tu|we|th|fr|sa)/i,short:/^(sun|mon|tue|wed|thu|fri|sat)/i,long:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},p={any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},h={short:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,long:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},y={any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},g={short:/^(am|pm)/i,long:/^([ap]\.?\s?m\.?)/i},M={any:[/^a/i,/^p/i]},D={ordinalNumbers:(0,s.default)(c),ordinalNumber:d.default,weekdays:(0,a.default)(m,"long"),weekday:(0,i.default)(p,"any"),months:(0,a.default)(h,"long"),month:(0,i.default)(y,"any"),timesOfDay:(0,a.default)(g,"long"),timeOfDay:(0,i.default)(M,"any")};t.default=D,e.exports=t.default},function(e,t,r){"use strict";function n(e,t){return function(r,n){var u=n||{},a=u.type?String(u.type):t,o=e[a]||e[t];return String(r).match(o)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e,t){return function(r,n){var u=n||{},a=u.type?String(u.type):t,o=e[a]||e[t],i=r[1];return o.findIndex(function(e){return e.test(i)})}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e){return function(t){return String(t).match(e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e){return parseInt(e[1],10)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t){t=t||"";var r=e>0?"-":"+",n=Math.abs(e),u=Math.floor(n/60),o=n%60;return r+a(u,2)+t+a(o,2)}function a(e,t){for(var r=Math.abs(e).toString();r.length<t;)r="0"+r;return r}Object.defineProperty(t,"__esModule",{value:!0});var o=r(26),i=n(o),l=r(5),s=n(l),f=r(6),d=n(f),c={M:function(e){return e.getUTCMonth()+1},Mo:function(e,t){var r=e.getUTCMonth()+1;return t.locale.localize.ordinalNumber(r,{unit:"month"})},MM:function(e){return a(e.getUTCMonth()+1,2)},MMM:function(e,t){return t.locale.localize.month(e.getUTCMonth(),{type:"short"})},MMMM:function(e,t){return t.locale.localize.month(e.getUTCMonth(),{type:"long"})},Q:function(e){return Math.ceil((e.getUTCMonth()+1)/3)},Qo:function(e,t){var r=Math.ceil((e.getUTCMonth()+1)/3);return t.locale.localize.ordinalNumber(r,{unit:"quarter"})},D:function(e){return e.getUTCDate()},Do:function(e,t){return t.locale.localize.ordinalNumber(e.getUTCDate(),{unit:"dayOfMonth"})},DD:function(e){return a(e.getUTCDate(),2)},DDD:function(e){return(0,i.default)(e)},DDDo:function(e,t){return t.locale.localize.ordinalNumber((0,i.default)(e),{unit:"dayOfYear"})},DDDD:function(e){return a((0,i.default)(e),3)},dd:function(e,t){return t.locale.localize.weekday(e.getUTCDay(),{type:"narrow"})},ddd:function(e,t){return t.locale.localize.weekday(e.getUTCDay(),{type:"short"})},dddd:function(e,t){return t.locale.localize.weekday(e.getUTCDay(),{type:"long"})},d:function(e){return e.getUTCDay()},do:function(e,t){return t.locale.localize.ordinalNumber(e.getUTCDay(),{unit:"dayOfWeek"})},E:function(e){return e.getUTCDay()||7},W:function(e){return(0,s.default)(e)},Wo:function(e,t){return t.locale.localize.ordinalNumber((0,s.default)(e),{unit:"isoWeek"})},WW:function(e){return a((0,s.default)(e),2)},YY:function(e){return a(e.getUTCFullYear(),4).substr(2)},YYYY:function(e){return a(e.getUTCFullYear(),4)},GG:function(e){return String((0,d.default)(e)).substr(2)},GGGG:function(e){return(0,d.default)(e)},H:function(e){return e.getUTCHours()},HH:function(e){return a(e.getUTCHours(),2)},h:function(e){var t=e.getUTCHours();return 0===t?12:t>12?t%12:t},hh:function(e){return a(c.h(e),2)},m:function(e){return e.getUTCMinutes()},mm:function(e){return a(e.getUTCMinutes(),2)},s:function(e){return e.getUTCSeconds()},ss:function(e){return a(e.getUTCSeconds(),2)},S:function(e){return Math.floor(e.getUTCMilliseconds()/100)},SS:function(e){return a(Math.floor(e.getUTCMilliseconds()/10),2)},SSS:function(e){return a(e.getUTCMilliseconds(),3)},Z:function(e,t){return u((t._originalDate||e).getTimezoneOffset(),":")},ZZ:function(e,t){return u((t._originalDate||e).getTimezoneOffset())},X:function(e,t){var r=t._originalDate||e;return Math.floor(r.getTime()/1e3)},x:function(e,t){return(t._originalDate||e).getTime()},A:function(e,t){return t.locale.localize.timeOfDay(e.getUTCHours(),{type:"uppercase"})},a:function(e,t){return t.locale.localize.timeOfDay(e.getUTCHours(),{type:"lowercase"})},aa:function(e,t){return t.locale.localize.timeOfDay(e.getUTCHours(),{type:"long"})}};t.default=c,e.exports=t.default},function(e,t,r){"use strict";function n(e,t){var r=(0,a.default)(e,t),n=r.getTime();r.setUTCMonth(0,1),r.setUTCHours(0,0,0,0);var u=r.getTime(),i=n-u;return Math.floor(i/o)+1}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(u),o=864e5;e.exports=t.default},function(e,t,r){"use strict";function n(e,t,r){var n=(0,a.default)(e,r),u=Number(t);return n.setUTCMinutes(n.getUTCMinutes()+u),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(u);e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(29),a=n(u),o=r(4),i=n(o),l=(0,i.default)(a.default,4);t.default=l,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r,n){if(arguments.length<3)throw new TypeError("3 arguments required, but only "+arguments.length+" present");var u=String(e),i=n||{},s=void 0===i.weekStartsOn?0:Number(i.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=i.locale||c.default,m=d.parsers||{},h=d.units||{};if(!d.match)throw new RangeError("locale must contain match property");if(!d.formatLong)throw new RangeError("locale must contain formatLong property");var g=String(t).replace(T,function(e){return"["===e[0]?e:"\\"===e[0]?o(e):d.formatLong(e)});if(""===g)return""===u?(0,l.default)(r,i):new Date(NaN);var v=(0,M.default)(i);v.locale=d;var w,Y=g.match(d.parsingTokensRegExp||_),b=Y.length,O=[{priority:D,set:a,index:0}];for(w=0;w<b;w++){var L=Y[w],C=m[L]||p.default[L];if(C){var U;if(!(U=C.match instanceof RegExp?C.match.exec(u):C.match(u,v)))return new Date(NaN);var x=C.unit,S=h[x]||y.default[x];O.push({priority:S.priority,set:S.set,value:C.parse(U,v),index:O.length});var H=U[0];u=u.slice(H.length)}else{var N=Y[w].match(/^\[.*]$/)?Y[w].replace(/^\[|]$/g,""):Y[w];if(0!==u.indexOf(N))return new Date(NaN);u=u.slice(N.length)}}var k=O.map(function(e){return e.priority}).sort(function(e,t){return e-t}).filter(function(e,t,r){return r.indexOf(e)===t}).map(function(e){return O.filter(function(t){return t.priority===e}).reverse()}).map(function(e){return e[0]}),j=(0,l.default)(r,i);if(isNaN(j))return new Date(NaN);var W=(0,f.default)(j,j.getTimezoneOffset()),P={date:W},z=k.length;for(w=0;w<z;w++){var F=k[w];P=F.set(P,F.value,v)}return P.date}function a(e){var t=e.date,r=t.getTime(),n=t.getTimezoneOffset();return n=new Date(r+n*v).getTimezoneOffset(),e.date=new Date(r+n*v),e}function o(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|]$/g,""):e.replace(/\\/g,"")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var i=r(0),l=n(i),s=r(30),f=n(s),d=r(2),c=n(d),m=r(33),p=n(m),h=r(34),y=n(h),g=r(7),M=n(g),D=110,v=6e4,T=/(\[[^[]*])|(\\)?(LTS|LT|LLLL|LLL|LL|L|llll|lll|ll|l)/g,_=/(\[[^[]*])|(\\)?(x|ss|s|mm|m|hh|h|do|dddd|ddd|dd|d|aa|a|ZZ|Z|YYYY|YY|X|Wo|WW|W|SSS|SS|S|Qo|Q|Mo|MMMM|MMM|MM|M|HH|H|GGGG|GG|E|Do|DDDo|DDDD|DDD|DD|D|A|.)/g;e.exports=t.default},function(e,t,r){"use strict";function n(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Number(t);return(0,a.default)(e,-n,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u=r(31),a=function(e){return e&&e.__esModule?e:{default:e}}(u);e.exports=t.default},function(e,t,r){"use strict";function n(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Number(t);return(0,a.default)(e,n*o,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u=r(32),a=function(e){return e&&e.__esModule?e:{default:e}}(u),o=6e4;e.exports=t.default},function(e,t,r){"use strict";function n(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=(0,a.default)(e,r).getTime(),u=Number(t);return new Date(n+u)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(u);e.exports=t.default},function(e,t,r){"use strict";function n(e){return parseInt(e[1],10)}Object.defineProperty(t,"__esModule",{value:!0});var u={M:/^(1[0-2]|0?\d)/,D:/^(3[0-1]|[0-2]?\d)/,DDD:/^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,W:/^(5[0-3]|[0-4]?\d)/,YYYY:/^(\d{1,4})/,H:/^(2[0-3]|[0-1]?\d)/,m:/^([0-5]?\d)/,Z:/^([+-])(\d{2}):(\d{2})/,ZZ:/^([+-])(\d{2})(\d{2})/,singleDigit:/^(\d)/,twoDigits:/^(\d{2})/,threeDigits:/^(\d{3})/,fourDigits:/^(\d{4})/,anyDigits:/^(\d+)/},a={YY:{unit:"twoDigitYear",match:u.twoDigits,parse:function(e){return n(e)}},YYYY:{unit:"year",match:u.YYYY,parse:n},GG:{unit:"isoYear",match:u.twoDigits,parse:function(e){return n(e)+1900}},GGGG:{unit:"isoYear",match:u.YYYY,parse:n},Q:{unit:"quarter",match:u.singleDigit,parse:n},Qo:{unit:"quarter",match:function(e,t){return t.locale.match.ordinalNumbers(e,{unit:"quarter"})},parse:function(e,t){return t.locale.match.ordinalNumber(e,{unit:"quarter"})}},M:{unit:"month",match:u.M,parse:function(e){return n(e)-1}},Mo:{unit:"month",match:function(e,t){return t.locale.match.ordinalNumbers(e,{unit:"month"})},parse:function(e,t){return t.locale.match.ordinalNumber(e,{unit:"month"})-1}},MM:{unit:"month",match:u.twoDigits,parse:function(e){return n(e)-1}},MMM:{unit:"month",match:function(e,t){return t.locale.match.months(e,{type:"short"})},parse:function(e,t){return t.locale.match.month(e,{type:"short"})}},MMMM:{unit:"month",match:function(e,t){return t.locale.match.months(e,{type:"long"})||t.locale.match.months(e,{type:"short"})},parse:function(e,t){var r=t.locale.match.month(e,{type:"long"});return null==r&&(r=t.locale.match.month(e,{type:"short"})),r}},W:{unit:"isoWeek",match:u.W,parse:n},Wo:{unit:"isoWeek",match:function(e,t){return t.locale.match.ordinalNumbers(e,{unit:"isoWeek"})},parse:function(e,t){return t.locale.match.ordinalNumber(e,{unit:"isoWeek"})}},WW:{unit:"isoWeek",match:u.twoDigits,parse:n},d:{unit:"dayOfWeek",match:u.singleDigit,parse:n},do:{unit:"dayOfWeek",match:function(e,t){return t.locale.match.ordinalNumbers(e,{unit:"dayOfWeek"})},parse:function(e,t){return t.locale.match.ordinalNumber(e,{unit:"dayOfWeek"})}},dd:{unit:"dayOfWeek",match:function(e,t){return t.locale.match.weekdays(e,{type:"narrow"})},parse:function(e,t){return t.locale.match.weekday(e,{type:"narrow"})}},ddd:{unit:"dayOfWeek",match:function(e,t){return t.locale.match.weekdays(e,{type:"short"})||t.locale.match.weekdays(e,{type:"narrow"})},parse:function(e,t){var r=t.locale.match.weekday(e,{type:"short"});return null==r&&(r=t.locale.match.weekday(e,{type:"narrow"})),r}},dddd:{unit:"dayOfWeek",match:function(e,t){return t.locale.match.weekdays(e,{type:"long"})||t.locale.match.weekdays(e,{type:"short"})||t.locale.match.weekdays(e,{type:"narrow"})},parse:function(e,t){var r=t.locale.match.weekday(e,{type:"long"});return null==r&&null==(r=t.locale.match.weekday(e,{type:"short"}))&&(r=t.locale.match.weekday(e,{type:"narrow"})),r}},E:{unit:"dayOfISOWeek",match:u.singleDigit,parse:function(e){return n(e)}},D:{unit:"dayOfMonth",match:u.D,parse:n},Do:{unit:"dayOfMonth",match:function(e,t){return t.locale.match.ordinalNumbers(e,{unit:"dayOfMonth"})},parse:function(e,t){return t.locale.match.ordinalNumber(e,{unit:"dayOfMonth"})}},DD:{unit:"dayOfMonth",match:u.twoDigits,parse:n},DDD:{unit:"dayOfYear",match:u.DDD,parse:n},DDDo:{unit:"dayOfYear",match:function(e,t){return t.locale.match.ordinalNumbers(e,{unit:"dayOfYear"})},parse:function(e,t){return t.locale.match.ordinalNumber(e,{unit:"dayOfYear"})}},DDDD:{unit:"dayOfYear",match:u.threeDigits,parse:n},A:{unit:"timeOfDay",match:function(e,t){return t.locale.match.timesOfDay(e,{type:"short"})},parse:function(e,t){return t.locale.match.timeOfDay(e,{type:"short"})}},aa:{unit:"timeOfDay",match:function(e,t){return t.locale.match.timesOfDay(e,{type:"long"})||t.locale.match.timesOfDay(e,{type:"short"})},parse:function(e,t){var r=t.locale.match.timeOfDay(e,{type:"long"});return null==r&&(r=t.locale.match.timeOfDay(e,{type:"short"})),r}},H:{unit:"hours",match:u.H,parse:n},HH:{unit:"hours",match:u.twoDigits,parse:n},h:{unit:"timeOfDayHours",match:u.M,parse:n},hh:{unit:"timeOfDayHours",match:u.twoDigits,parse:n},m:{unit:"minutes",match:u.m,parse:n},mm:{unit:"minutes",match:u.twoDigits,parse:n},s:{unit:"seconds",match:u.m,parse:n},ss:{unit:"seconds",match:u.twoDigits,parse:n},S:{unit:"milliseconds",match:u.singleDigit,parse:function(e){return 100*n(e)}},SS:{unit:"milliseconds",match:u.twoDigits,parse:function(e){return 10*n(e)}},SSS:{unit:"milliseconds",match:u.threeDigits,parse:n},Z:{unit:"timezone",match:u.Z,parse:function(e){var t=e[1],r=parseInt(e[2],10),n=parseInt(e[3],10),u=60*r+n;return"+"===t?u:-u}},ZZ:{unit:"timezone",match:u.ZZ,parse:function(e){var t=e[1],r=parseInt(e[2],10),n=parseInt(e[3],10),u=60*r+n;return"+"===t?u:-u}},X:{unit:"timestamp",match:u.anyDigits,parse:function(e){return 1e3*n(e)}},x:{unit:"timestamp",match:u.anyDigits,parse:n}};a.a=a.A,t.default=a,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(0===t){if(12===e)return 0}else if(12!==e)return 12+e;return e}Object.defineProperty(t,"__esModule",{value:!0});var a=r(35),o=n(a),i=r(36),l=n(i),s=r(37),f=n(s),d=r(38),c=n(d),m=r(1),p=n(m),h=r(3),y=n(h),g={twoDigitYear:{priority:10,set:function(e,t){var r=Math.floor(e.date.getUTCFullYear()/100),n=100*r+t;return e.date.setUTCFullYear(n,0,1),e.date.setUTCHours(0,0,0,0),e}},year:{priority:10,set:function(e,t){return e.date.setUTCFullYear(t,0,1),e.date.setUTCHours(0,0,0,0),e}},isoYear:{priority:10,set:function(e,t,r){return e.date=(0,y.default)((0,c.default)(e.date,t,r),r),e}},quarter:{priority:20,set:function(e,t){return e.date.setUTCMonth(3*(t-1),1),e.date.setUTCHours(0,0,0,0),e}},month:{priority:30,set:function(e,t){return e.date.setUTCMonth(t,1),e.date.setUTCHours(0,0,0,0),e}},isoWeek:{priority:40,set:function(e,t,r){return e.date=(0,p.default)((0,f.default)(e.date,t,r),r),e}},dayOfWeek:{priority:50,set:function(e,t,r){return e.date=(0,o.default)(e.date,t,r),e.date.setUTCHours(0,0,0,0),e}},dayOfISOWeek:{priority:50,set:function(e,t,r){return e.date=(0,l.default)(e.date,t,r),e.date.setUTCHours(0,0,0,0),e}},dayOfMonth:{priority:50,set:function(e,t){return e.date.setUTCDate(t),e.date.setUTCHours(0,0,0,0),e}},dayOfYear:{priority:50,set:function(e,t){return e.date.setUTCMonth(0,t),e.date.setUTCHours(0,0,0,0),e}},timeOfDay:{priority:60,set:function(e,t,r){return e.timeOfDay=t,e}},hours:{priority:70,set:function(e,t,r){return e.date.setUTCHours(t,0,0,0),e}},timeOfDayHours:{priority:70,set:function(e,t,r){var n=e.timeOfDay;return null!=n&&(t=u(t,n)),e.date.setUTCHours(t,0,0,0),e}},minutes:{priority:80,set:function(e,t){return e.date.setUTCMinutes(t,0,0),e}},seconds:{priority:90,set:function(e,t){return e.date.setUTCSeconds(t,0),e}},milliseconds:{priority:100,set:function(e,t){return e.date.setUTCMilliseconds(t),e}},timezone:{priority:110,set:function(e,t){return e.date=new Date(e.date.getTime()-6e4*t),e}},timestamp:{priority:120,set:function(e,t){return e.date=new Date(t),e}}};t.default=g,e.exports=t.default},function(e,t,r){"use strict";function n(e,t,r){var n=r||{},u=n.locale,o=u&&u.options&&u.options.weekStartsOn,i=void 0===o?0:Number(o),l=void 0===n.weekStartsOn?i:Number(n.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=(0,a.default)(e,r),f=Number(t),d=s.getUTCDay(),c=f%7,m=(c+7)%7,p=(m<l?7:0)+f-d;return s.setUTCDate(s.getUTCDate()+p),s}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(u);e.exports=t.default},function(e,t,r){"use strict";function n(e,t,r){var n=Number(t);n%7==0&&(n-=7);var u=(0,a.default)(e,r),o=u.getUTCDay(),i=n%7,l=(i+7)%7,s=(l<1?7:0)+n-o;return u.setUTCDate(u.getUTCDate()+s),u}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(u);e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r){var n=(0,o.default)(e,r),u=Number(t),a=(0,l.default)(n,r)-u;return n.setUTCDate(n.getUTCDate()-7*a),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=r(0),o=n(a),i=r(5),l=n(i);e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r){var n=(0,o.default)(e,r),u=Number(t),a=(0,l.default)(n,r),i=Math.floor((n.getTime()-a.getTime())/s),f=new Date(0);return f.setUTCFullYear(u,0,4),f.setUTCHours(0,0,0,0),n=(0,l.default)(f,r),n.setUTCDate(n.getUTCDate()+i),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=r(0),o=n(a),i=r(3),l=n(i),s=864e5;e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=r(40),a=n(u),o=r(4),i=n(o),l=(0,i.default)(a.default,2);t.default=l,e.exports=t.default},function(e,t,r){"use strict";function n(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Number(t);return(0,a.default)(e,12*n,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u=r(41),a=function(e){return e&&e.__esModule?e:{default:e}}(u);e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function u(e,t,r){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=(0,o.default)(e,r),u=Number(t),a=n.getMonth()+u,i=new Date(0);i.setFullYear(n.getFullYear(),a,1),i.setHours(0,0,0,0);var s=(0,l.default)(i,r);return n.setMonth(a,Math.min(s,n.getDate())),n}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=r(0),o=n(a),i=r(42),l=n(i);e.exports=t.default},function(e,t,r){"use strict";function n(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var r=(0,a.default)(e,t),n=r.getFullYear(),u=r.getMonth(),o=new Date(0);return o.setFullYear(n,u+1,0),o.setHours(0,0,0,0),o.getDate()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u=r(0),a=function(e){return e&&e.__esModule?e:{default:e}}(u);e.exports=t.default},function(e,t){e.exports=window.ReactWidgets}]);
//# sourceMappingURL=react-widgets-date-fns.js.map