(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{406:function(a,s,t){a.exports=t.p+"assets/img/fofax&httpx.84fb7e04.png"},407:function(a,s,t){a.exports=t.p+"assets/img/fofax&nuclei.aca2b30c.png"},408:function(a,s,t){a.exports=t.p+"assets/img/fofax&xray.e9e25979.png"},409:function(a,s,t){a.exports=t.p+"assets/img/fofax&observer_ward.8aba4e8c.png"},410:function(a,s,t){a.exports=t.p+"assets/img/fofax&dismap.56f7abe4.png"},411:function(a,s,t){a.exports=t.p+"assets/img/fofax&naabu.b564dc59.png"},412:function(a,s,t){a.exports=t.p+"assets/img/nmap.d584bc77.png"},413:function(a,s,t){a.exports=t.p+"assets/img/nmap2.ff2dbdbe.png"},414:function(a,s,t){a.exports=t.p+"assets/img/jsubfinder.6ca4f0ed.png"},415:function(a,s,t){a.exports=t.p+"assets/img/sylas.0f55385a.png"},437:function(a,s,t){"use strict";t.r(s);var e=t(56),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p",[a._v("git # 目前收集的联动工具")]),a._v(" "),e("p",[a._v("欢迎大家来提供联动案例。")]),a._v(" "),e("h2",{attrs:{id:"httpx-http-快速验证-apisix-漏洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#httpx-http-快速验证-apisix-漏洞"}},[a._v("#")]),a._v(" "),e("a",{attrs:{href:"https://github.com/projectdiscovery/httpx",target:"_blank",rel:"noopener noreferrer"}},[a._v("httpX"),e("OutboundLink")],1),a._v(" - http 快速验证 apisix 漏洞")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("fofax -q "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'title=\"Apache APISIX Dashboard\"'")]),a._v(" -ffi "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" httpx -path "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/apisix/admin/migrate/export"')]),a._v(" -status-code -mc "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v(" -ms "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"Counsumers":[],"Routes\'')]),a._v("\n")])])]),e("p",[e("img",{attrs:{src:t(406),alt:"fofax_httpx"}})]),a._v(" "),e("h3",{attrs:{id:"快速验证存活并展示标题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速验证存活并展示标题"}},[a._v("#")]),a._v(" 快速验证存活并展示标题")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("fofax  -q 'title=\"Apache APISIX Dashboard\"' -ffi|httpx -title\n")])])]),e("h2",{attrs:{id:"nuclei-简单快速扫描工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nuclei-简单快速扫描工具"}},[a._v("#")]),a._v(" "),e("a",{attrs:{href:"https://github.com/projectdiscovery/nuclei",target:"_blank",rel:"noopener noreferrer"}},[a._v("Nuclei"),e("OutboundLink")],1),a._v(" - 简单快速扫描工具")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'app=\"kubernetes\"'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" fofax "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" httpx "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("fofax -q "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'fx=kubernetes'")]),a._v(" -fe "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" httpx "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'fx=kubernetes'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" fofax  -fe "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" httpx "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'fx=kubernetes'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" fofax  -fe  -ffi "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml\n")])])]),e("p",[e("img",{attrs:{src:t(407),alt:"fofax_nuclei"}})]),a._v(" "),e("h2",{attrs:{id:"xray-被动扫描器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xray-被动扫描器"}},[a._v("#")]),a._v(" "),e("a",{attrs:{href:"https://github.com/chaitin/xray",target:"_blank",rel:"noopener noreferrer"}},[a._v("Xray"),e("OutboundLink")],1),a._v(" - 被动扫描器")]),a._v(" "),e("blockquote",[e("p",[a._v("感谢@荋丶 、@becivells两位师傅提供。")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'header="rememberme=deleteMe" || header="shiroCookie"\'')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" fofax -fs "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v(" -e -ec "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" httpx -o shiro.txt "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" xray ws ss --uf shiro.txt\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("./xray --log-level fatal ws --plugins shiro --uf "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'header="rememberme=deleteMe" || header="shiroCookie"\'')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" fofax -fs "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" -ffi -ec "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("p",[e("img",{attrs:{src:t(408),alt:"fofax_xray"}})]),a._v(" "),e("h2",{attrs:{id:"observer-ward-web-指纹识别工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#observer-ward-web-指纹识别工具"}},[a._v("#")]),a._v(" "),e("a",{attrs:{href:"https://github.com/0x727/ObserverWard_0x727",target:"_blank",rel:"noopener noreferrer"}},[a._v("Observer_ward"),e("OutboundLink")],1),a._v(" - web 指纹识别工具")]),a._v(" "),e("blockquote",[e("p",[a._v("感谢"),e("a",{attrs:{href:"https://github.com/0x727",target:"_blank",rel:"noopener noreferrer"}},[a._v("@0x727"),e("OutboundLink")],1),a._v("开源团队提供。")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'login'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" fofax -fs "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("  -ec -ffi "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" ./observer_ward_darwin --stdin\n")])])]),e("p",[e("img",{attrs:{src:t(409),alt:"fofax_observer_ward"}})]),a._v(" "),e("h2",{attrs:{id:"dismap-web-指纹识别工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dismap-web-指纹识别工具"}},[a._v("#")]),a._v(" "),e("a",{attrs:{href:"https://github.com/zhzyker/dismap/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Dismap"),e("OutboundLink")],1),a._v(" - web 指纹识别工具")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("./dismap -file <(echo 'title=\"login\"' | fofax -fs 10 -ffi)\n")])])]),e("p",[e("img",{attrs:{src:t(410),alt:"fofax_dismap"}})]),a._v(" "),e("h2",{attrs:{id:"naabu-端口扫描器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#naabu-端口扫描器"}},[a._v("#")]),a._v(" "),e("a",{attrs:{href:"https://github.com/projectdiscovery/naabu",target:"_blank",rel:"noopener noreferrer"}},[a._v("Naabu"),e("OutboundLink")],1),a._v(" - 端口扫描器")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'(title="职业学院" || title="大学" || title="职业技术学院" || title="学院") && country="CN"\'')]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" fofax -ff "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'domain'")]),a._v(" -fs "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" naabu\n")])])]),e("p",[e("img",{attrs:{src:t(411),alt:"fofax_naabu"}})]),a._v(" "),e("h2",{attrs:{id:"nmap-老牌端口扫描器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nmap-老牌端口扫描器"}},[a._v("#")]),a._v(" "),e("a",{attrs:{href:"https://nmap.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Nmap"),e("OutboundLink")],1),a._v(" - 老牌端口扫描器")]),a._v(" "),e("h4",{attrs:{id:"linux-macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-macos"}},[a._v("#")]),a._v(" Linux/macOS")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("nmap -iL "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'app=\"APACHE-Solr\"'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" fofax -fs "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" -ff "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ip")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),e("p",[e("img",{attrs:{src:t(412),alt:"Nmap"}})]),a._v(" "),e("h4",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'app=\"APACHE-Solr\"'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" fofax -fs "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" -ff "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ip")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" targets.txt "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" nmap -iL targets.txt\n")])])]),e("p",[e("img",{attrs:{src:t(413),alt:"Nmap2"}})]),a._v(" "),e("h2",{attrs:{id:"jsubfinder-从页面获取域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jsubfinder-从页面获取域名"}},[a._v("#")]),a._v(" "),e("a",{attrs:{href:"https://github.com/ThreatUnkown/jsubfinder",target:"_blank",rel:"noopener noreferrer"}},[a._v("Jsubfinder"),e("OutboundLink")],1),a._v(" - 从页面获取域名")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(".\\fofax.exe -q 'app=\\\"Grafana\\\"' -ffi | jsubfinder.exe search\n")])])]),e("p",[e("img",{attrs:{src:t(414),alt:"jsubfinder"}})]),a._v(" "),e("h2",{attrs:{id:"sylas-获取更多-fofa-数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sylas-获取更多-fofa-数据"}},[a._v("#")]),a._v(" "),e("a",{attrs:{href:"https://github.com/xiecat/sylas",target:"_blank",rel:"noopener noreferrer"}},[a._v("sylas"),e("OutboundLink")],1),a._v(" - 获取更多 fofa 数据")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("sylas -q "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'app=\"APACHE-Solr\"'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("fofax -ff "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"host,lastupdatetime"')]),a._v(" -fs "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("10000")]),a._v(" \n")])])]),e("p",[e("img",{attrs:{src:t(415),alt:"sylas"}})]),a._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("-fs 请务必设置为 10000")])])])}),[],!1,null,null,null);s.default=r.exports}}]);