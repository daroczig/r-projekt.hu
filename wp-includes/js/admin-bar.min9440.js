"undefined"!=typeof jQuery?(void 0===jQuery.fn.hoverIntent&&function(u){u.fn.hoverIntent=function(e,t,n){function a(e){o=e.pageX,r=e.pageY}var o,r,s,i,c={interval:100,sensitivity:6,timeout:0},c="object"==typeof e?u.extend(c,e):u.isFunction(t)?u.extend(c,{over:e,out:t,selector:n}):u.extend(c,{over:e,out:e,selector:t}),l=function(e,t){return t.hoverIntent_t=clearTimeout(t.hoverIntent_t),Math.sqrt((s-o)*(s-o)+(i-r)*(i-r))<c.sensitivity?(u(t).off("mousemove.hoverIntent",a),t.hoverIntent_s=!0,c.over.apply(t,[e])):(s=o,i=r,void(t.hoverIntent_t=setTimeout(function(){l(e,t)},c.interval)))},t=function(e){var n=u.extend({},e),o=this;o.hoverIntent_t&&(o.hoverIntent_t=clearTimeout(o.hoverIntent_t)),"mouseenter"===e.type?(s=n.pageX,i=n.pageY,u(o).on("mousemove.hoverIntent",a),o.hoverIntent_s||(o.hoverIntent_t=setTimeout(function(){l(n,o)},c.interval))):(u(o).off("mousemove.hoverIntent",a),o.hoverIntent_s&&(o.hoverIntent_t=setTimeout(function(){var e,t;e=n,(t=o).hoverIntent_t=clearTimeout(t.hoverIntent_t),t.hoverIntent_s=!1,c.out.apply(t,[e])},c.timeout)))};return this.on({"mouseenter.hoverIntent":t,"mouseleave.hoverIntent":t},c.selector)}}(jQuery),jQuery(document).ready(function(a){var o=a("#wpadminbar"),r=!1,s=function(e,t){var n=a(t),t=n.attr("tabindex");t&&n.attr("tabindex","0").attr("tabindex",t)},e=function(n){o.find("li.menupop").on("click.wp-mobile-hover",function(e){var t=a(this);t.parent().is("#wp-admin-bar-root-default")&&!t.hasClass("hover")?(e.preventDefault(),o.find("li.menupop.hover").removeClass("hover"),t.addClass("hover")):t.hasClass("hover")?a(e.target).closest("div").hasClass("ab-sub-wrapper")||(e.stopPropagation(),e.preventDefault(),t.removeClass("hover")):(e.stopPropagation(),e.preventDefault(),t.addClass("hover")),n&&(a("li.menupop").off("click.wp-mobile-hover"),r=!1)})},t=function(){var e=/Mobile\/.+Safari/.test(navigator.userAgent)?"touchstart":"click";a(document.body).on(e+".wp-mobile-hover",function(e){a(e.target).closest("#wpadminbar").length||o.find("li.menupop.hover").removeClass("hover")})};o.removeClass("nojq").removeClass("nojs"),"ontouchstart"in window?(o.on("touchstart",function(){e(!0),r=!0}),t()):/IEMobile\/[1-9]/.test(navigator.userAgent)&&(e(),t()),o.find("li.menupop").hoverIntent({over:function(){r||a(this).addClass("hover")},out:function(){r||a(this).removeClass("hover")},timeout:180,sensitivity:7,interval:100}),window.location.hash&&window.scrollBy(0,-32),a("#wp-admin-bar-get-shortlink").click(function(e){e.preventDefault(),a(this).addClass("selected").children(".shortlink-input").blur(function(){a(this).parents("#wp-admin-bar-get-shortlink").removeClass("selected")}).focus().select()}),a("#wpadminbar li.menupop > .ab-item").bind("keydown.adminbar",function(e){var t,n,o;13==e.which&&(n=(t=a(e.target)).closest(".ab-sub-wrapper"),o=t.parent().hasClass("hover"),e.stopPropagation(),e.preventDefault(),(n=!n.length?a("#wpadminbar .quicklinks"):n).find(".menupop").removeClass("hover"),o||t.parent().toggleClass("hover"),t.siblings(".ab-sub-wrapper").find(".ab-item").each(s))}).each(s),a("#wpadminbar .ab-item").bind("keydown.adminbar",function(e){var t;27==e.which&&(t=a(e.target),e.stopPropagation(),e.preventDefault(),t.closest(".hover").removeClass("hover").children(".ab-item").focus(),t.siblings(".ab-sub-wrapper").find(".ab-item").each(s))}),o.click(function(e){"wpadminbar"!=e.target.id&&"wp-admin-bar-top-secondary"!=e.target.id||(o.find("li.menupop.hover").removeClass("hover"),a("html, body").animate({scrollTop:0},"fast"),e.preventDefault())}),a(".screen-reader-shortcut").keydown(function(e){var t;13==e.which&&(t=a(this).attr("href"),-1!=navigator.userAgent.toLowerCase().indexOf("applewebkit")&&t&&"#"==t.charAt(0)&&setTimeout(function(){a(t).focus()},100))}),a("#adminbar-search").on({focus:function(){a("#adminbarsearch").addClass("adminbar-focused")},blur:function(){a("#adminbarsearch").removeClass("adminbar-focused")}}),"sessionStorage"in window&&a("#wp-admin-bar-logout a").click(function(){try{for(var e in sessionStorage)-1!=e.indexOf("wp-autosave-")&&sessionStorage.removeItem(e)}catch(e){}}),navigator.userAgent&&-1===document.body.className.indexOf("no-font-face")&&/Android (1.0|1.1|1.5|1.6|2.0|2.1)|Nokia|Opera Mini|w(eb)?OSBrowser|webOS|UCWEB|Windows Phone OS 7|XBLWP7|ZuneWP7|MSIE 7/.test(navigator.userAgent)&&(document.body.className+=" no-font-face")})):function(l,e){function t(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,function(){return n.call(e,window.event)})}function n(e){for(var t,n,o,a,r,s,i=[],c=0;e&&e!=u&&e!=l;)"LI"==e.nodeName.toUpperCase()&&((n=function(e){for(var t=m.length;t--;)if(m[t]&&e==m[t][1])return m[t][0];return!1}(i[i.length]=e))&&clearTimeout(n),e.className=e.className?e.className.replace(d,"")+" hover":"hover",a=e),e=e.parentNode;if(a&&a.parentNode&&(r=a.parentNode)&&"UL"==r.nodeName.toUpperCase())for(t=r.childNodes.length;t--;)(s=r.childNodes[t])!=a&&(s.className=s.className?s.className.replace(f,""):"");for(t=m.length;t--;){for(o=!1,c=i.length;c--;)i[c]==m[t][1]&&(o=!0);o||(m[t][1].className=m[t][1].className?m[t][1].className.replace(d,""):"")}}function o(e){for(;e&&e!=u&&e!=l;)"LI"==e.nodeName.toUpperCase()&&function(e){var t=setTimeout(function(){e.className=e.className?e.className.replace(d,""):""},500);m[m.length]=[t,e]}(e),e=e.parentNode}function a(e){for(var t,n,o,a=e.target||e.srcElement;;){if(!a||a==l||a==u)return;if(a.id&&"wp-admin-bar-get-shortlink"==a.id)break;a=a.parentNode}for(e.preventDefault&&e.preventDefault(),e.returnValue=!1,-1==a.className.indexOf("selected")&&(a.className+=" selected"),t=0,n=a.childNodes.length;t<n;t++)if((o=a.childNodes[t]).className&&-1!=o.className.indexOf("shortlink-input")){o.focus(),o.select(),o.onblur=function(){a.className=a.className?a.className.replace(f,""):""};break}return!1}var u,d=new RegExp("\\bhover\\b","g"),m=[],f=new RegExp("\\bselected\\b","g");t(e,"load",function(){u=l.getElementById("wpadminbar"),l.body&&u&&(l.body.appendChild(u),u.className&&(u.className=u.className.replace(/nojs/,"")),t(u,"mouseover",function(e){n(e.target||e.srcElement)}),t(u,"mouseout",function(e){o(e.target||e.srcElement)}),t(u,"click",a),t(u,"click",function(e){!function(e){var t,n,o,a,r;if(!("wpadminbar"!=e.id&&"wp-admin-bar-top-secondary"!=e.id||(t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)<1))for(e=800<t?130:100,n=Math.min(12,Math.round(t/e)),o=800<t?Math.round(t/30):Math.round(t/20),a=[],r=0;t;)(t-=o)<0&&(t=0),a.push(t),setTimeout(function(){window.scrollTo(0,a.shift())},r*n),r++}(e.target||e.srcElement)}),t(document.getElementById("wp-admin-bar-logout"),"click",function(){if("sessionStorage"in window)try{for(var e in sessionStorage)-1!=e.indexOf("wp-autosave-")&&sessionStorage.removeItem(e)}catch(e){}})),e.location.hash&&e.scrollBy(0,-32),navigator.userAgent&&-1===document.body.className.indexOf("no-font-face")&&/Android (1.0|1.1|1.5|1.6|2.0|2.1)|Nokia|Opera Mini|w(eb)?OSBrowser|webOS|UCWEB|Windows Phone OS 7|XBLWP7|ZuneWP7|MSIE 7/.test(navigator.userAgent)&&(document.body.className+=" no-font-face")})}(document,window);