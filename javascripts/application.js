document.addEventListener("DOMContentLoaded",function(){for(var e=document.getElementsByClassName("delete"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){var e=this.parentNode;e.parentNode.removeChild(e)})}),function(e,t){if(!t.__SV){var n=window;try{var i,a,o,p=n.location,r=p.hash;i=function(e,t){return(a=e.match(RegExp(t+"=([^&]*)")))?a[1]:null},r&&i(r,"state")&&(o=JSON.parse(decodeURIComponent(i(r,"state"))),"mpeditor"===o.action&&(n.sessionStorage.setItem("_mpcehash",r),history.replaceState(o.desiredHash||"",e.title,p.pathname+p.search)))}catch(e){}var l,s;window.mixpanel=t,t._i=[],t.init=function(e,n,i){function a(e,t){var n=t.split(".");2==n.length&&(e=e[n[0]],t=n[1]),e[t]=function(){e.push([t].concat(Array.prototype.slice.call(arguments,0)))}}var o=t;for(void 0!==i?o=t[i]=[]:i="mixpanel",o.people=o.people||[],o.toString=function(e){var t="mixpanel";return"mixpanel"!==i&&(t+="."+i),e||(t+=" (stub)"),t},o.people.toString=function(){return o.toString(1)+".people (stub)"},l="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" "),s=0;s<l.length;s++)a(o,l[s]);t._i.push([e,n,i])},t.__SV=1.2,n=e.createElement("script"),n.type="text/javascript",n.async=!0,n.src="undefined"!=typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js",i=e.getElementsByTagName("script")[0],i.parentNode.insertBefore(n,i)}}(document,window.mixpanel||[]),mixpanel.init("adfd78b96069d99c92e5e4e0e7e7a053");