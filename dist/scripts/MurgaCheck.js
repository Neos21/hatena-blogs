Neos21={append:function(e,t,s){var a=document,n="setAttribute",o="Neos21."+(e?"styles":"scripts")+"("+t+");",t=a.createElement(e?"link":"script");e&&t[n]("rel","stylesheet"),t[n](e?"href":"src",s),t[n]("onload",o),t[n]("onerror",o),a.querySelector("head").appendChild(t)},styles:function(e){var t,s,a,n;"number"==typeof e&&(t=window,(s=document).readyState&&"interactive"!==s.readyState?"loading"!==s.readyState?(a=["https://cdn.jsdelivr.net/gh/Neos21/hatena-blogs@gh-pages/dist/styles/Murga.css","https://raw.githack.com/Neos21/hatena-blogs/gh-pages/dist/styles/Murga.css","https://raw.githubusercontent.com/Neos21/hatena-blogs/gh-pages/dist/styles/Murga.css"],(n=s.getElementById("n-check"))&&0!==parseInt(t.getComputedStyle(n).fontSize)&&(a.length<=(n=e+1)||Neos21.append(!0,n,a[n]))):s.addEventListener("DOMContentLoaded",function(){Neos21.styles(e)}):t.addEventListener("load",function(){Neos21.styles(e)}))},scripts:function(e){var t;"number"==typeof e&&(t=["https://cdn.jsdelivr.net/gh/Neos21/hatena-blogs@gh-pages/dist/scripts/Murga.js","https://raw.githack.com/Neos21/hatena-blogs/gh-pages/dist/scripts/Murga.js","https://raw.githubusercontent.com/Neos21/hatena-blogs/gh-pages/dist/scripts/Murga.js"],Neos21.scriptLoaded||(t.length<=(e=e+1)||Neos21.append(!1,e,t[e])))}};