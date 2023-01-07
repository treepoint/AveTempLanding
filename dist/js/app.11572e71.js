(function(){"use strict";var e={5805:function(e,t,n){var o=n(9242),i=n(3396);function r(e,t,n,o,r,a){const s=(0,i.up)("MainHeader"),l=(0,i.up)("Main"),u=(0,i.up)("MainFooter");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(s),(0,i.Wm)(l),(0,i.Wm)(u)],64)}var a=n.p+"img/logo.11d4368c.png";const s={class:"footer_and_header"},l=(0,i._)("div",{class:"header"},[(0,i._)("a",{class:"name",href:"https://avetemp.ru",target:"_blank",rel:"noopener"},[(0,i._)("img",{alt:"AveTemp Main Screen",class:"logo",src:a}),(0,i.Uk)("AveTemp ")]),(0,i._)("div",{class:"header_menu"},[(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",{href:"#about",rel:"noopener"},"About")]),(0,i._)("li",null,[(0,i._)("a",{href:"#features",rel:"noopener"},"Features")]),(0,i._)("li",null,[(0,i._)("a",{href:"#support",rel:"noopener"},"Support")]),(0,i._)("li",null,[(0,i._)("a",{href:"#changelog",rel:"noopener"},"Changelog")])])]),(0,i._)("div",{class:"spacer"}),(0,i._)("a",{class:"btn btn-danger",href:"https://github.com/treepoint/AveTemp/releases/download/1.3.2/AveTemp.exe",role:"button"},"Download")],-1),u=[l];function d(e,t){return(0,i.wg)(),(0,i.iD)("div",s,u)}var c=n(89);const p={},h=(0,c.Z)(p,[["render",d]]);var m=h,f=n.p+"img/main_window.9c2b5139.png",g=n.p+"img/settings.f94d7e4f.png",v=n.p+"img/heart_icon.99cf37dd.svg";const b={class:"container"},w=(0,i._)("div",{class:"columns two"},[(0,i._)("div",null,[(0,i._)("h2",{id:"about"},"About"),(0,i._)("p",null,[(0,i.Uk)(" AveTemp is free to use and based on "),(0,i._)("a",{href:"https://www.python.org/",rel:"noopener"},"Python"),(0,i.Uk)(" and "),(0,i._)("a",{href:"https://github.com/LibreHardwareMonitor/LibreHardwareMonitor",rel:"noopener"},"LibreHardwareMonitorLib"),(0,i.Uk)(" for continuous monitoring CPU temperature and TDP, also for auto adjust CPU performance state and CPU Turbo mode depends on current workload. ")]),(0,i._)("p",null," Basically, it was developed for notebooks but may help with desktop CPUs too. "),(0,i._)("a",{class:"btn btn-outline-danger",href:"https://github.com/treepoint/AveTemp/releases/download/1.3.2/AveTemp.exe",role:"button"},"Download")]),(0,i._)("img",{alt:"AveTemp Main Screen",class:"screenshot",src:f})],-1),_=(0,i.uE)('<div class="columns two reverse"><div><h2 id="features">Features</h2><ul><li>Continuous monitoring temperature and TDP of CPU</li><li>Collecting and showing min, max and current temps and TDP states</li><li>Collecting and showing average scores for 1, 5, 15, 60 minutes and 24 hours</li><li>Automatic adjust CPU performance state and CPU Turbo mode. Also, you can setup preferred CPU load threshold, Turbo modes and CPU states or disable it at all.</li><li>Autostart on user logon</li><li>Automatic changing the color of tray font for dark and light Windows mode. It&#39;s checking on AveTemp restart and every 5 minutes.</li><li>Low CPU usage. For Ryzen 4600H it&#39;s &lt; 1% on the peak, most of the time — 0.01%.</li></ul></div><img alt="AveTemp Main Screen" class="screenshot" src="'+g+'"></div><div class="columns one"><h2 id="support">Support AveTemp</h2><img alt="AveTemp Main Screen" class="screenshot" src="'+v+'"><p>I will be happy if you will send me money for a coffee cup</p><div class="icon_list"><div class="icon_item"><div class="currency">USD</div> 4278 3100 2282 7059 </div><div class="icon_item"><div class="currency">UZS</div> 8600 4904 8192 1298 </div><div class="icon_item"><div class="currency">RUB</div> 2202 2023 3862 1422 </div></div></div><div class="columns one"><h2 id="changelog">Changelog</h2><p>All releases are available there — <a href="https://github.com/treepoint/AveTemp/releases" target="_blank" rel="noopener">Github</a></p><div class="release_description"><h3>1.3.2</h3><p>IMPORTANT: new version of statistic file is incompatible with older ones. So now there is a check for version and if it&#39;s not the same with the old one statistics file, old one will be dropped and replaced with brand new.</p><ul><li>Fixed: issue when saving settings from autostart changed file location therefor next autostart not working — <a href="https://github.com/treepoint/AveTemp/issues/8" target="_blank" rel="noopener">issue #8</a></li><li>Fixed: issue when turbo management not working while statistics was off — <a href="https://github.com/treepoint/AveTemp/issues/10" target="_blank" rel="noopener">issue #10</a></li><li>Fixed: issue that statistics won&#39;t delete when it was disabled — <a href="https://github.com/treepoint/AveTemp/issues/12" target="_blank" rel="noopener">issue #12</a></li><li>Optimizations: now the min, max and current temps and TDP saving like separated data, so now no need to calculate them all the time</li><li>Added check for statistics file version</li><li>Refactoring: workers were moved to separated file</li></ul><h3>1.3.1</h3><ul><li>Fixed issue when tray icon does not disappear when AveTemp is closed</li><li>Fixed issue when sometimes the temp and TDP stats are showing not realistic data</li></ul><h3>1.3.0</h3><ul><li>Added settings for the CPU turbo mode</li><li>Added autostart settings</li><li>Some refactoring</li><li>Added «powercfg.exe -S SCHEME_CURRENT» command so CPU settings are actually applying and working</li><li>Changed «SCHEME_BALANCED» for «SCHEME_CURRENT» so now it is working for any power plan scheme, that active now</li></ul><h3>1.2.2</h3><ul><li>Added CPU performance management functionality</li><li>Change icons to SVG format</li><li>Reduced background CPU usage</li><li>Added basic Intel support</li></ul><p>Tested on Ryzen 4600h, 4800h and Intel Pentium 7505 Gold.</p><h3>1.0.1</h3><p>First release with basic monitoring functions.</p></div></div>',3),A=[w,_];function T(e,t,n,o,r,a){return(0,i.wg)(),(0,i.iD)("div",b,A)}var y={name:"HelloWorld",props:{msg:String}};const k=(0,c.Z)(y,[["render",T]]);var C=k;const P={class:"footer_and_header"},U=(0,i.uE)('<div class="footer"><ul><li><a href="https://github.com/treepoint/AveTemp" target="_blank" rel="noopener"> Github main page </a></li><li><a href="https://github.com/treepoint/AveTemp/issues" target="_blank" rel="noopener"> Issues </a></li><li><a href="https://github.com/treepoint/AveTemp/discussions" target="_blank" rel="noopener"> Discussions </a></li><li><a href="https://github.com/treepoint/AveTemp/releases/download/1.3.2/AveTemp.exe" target="_blank" rel="noopener"> Download </a></li></ul></div>',1),S=[U];function M(e,t){return(0,i.wg)(),(0,i.iD)("div",P,S)}const x={},D=(0,c.Z)(x,[["render",M]]);var O=D,E={name:"App",components:{MainHeader:m,Main:C,MainFooter:O}};const F=(0,c.Z)(E,[["render",r]]);var H=F;n(5654);(0,o.ri)(H).mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],i=e[d][1],r=e[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(d--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,a=o[0],s=o[1],l=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var d=l(n)}for(t&&t(o);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},o=self["webpackChunkAveTemp"]=self["webpackChunkAveTemp"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5805)}));o=n.O(o)})();
//# sourceMappingURL=app.11572e71.js.map