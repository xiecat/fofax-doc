(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{407:function(t,s,a){"use strict";a.r(s);var e=a(52),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"目前收集的联动工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目前收集的联动工具"}},[t._v("#")]),t._v(" 目前收集的联动工具")]),t._v(" "),a("p",[t._v("欢迎提供案例")]),t._v(" "),a("h2",{attrs:{id:"httpx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#httpx"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/projectdiscovery/httpx",target:"_blank",rel:"noopener noreferrer"}},[t._v("httpx"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("fofax -q "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title=\"Apache APISIX Dashboard\"'")]),t._v(" -ffi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" httpx -path "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/apisix/admin/migrate/export"')]),t._v(" -status-code -mc "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" -ms "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"Counsumers":[],"Routes\'')]),t._v("\n")])])]),a("h2",{attrs:{id:"nuclei"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuclei"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/projectdiscovery/nuclei",target:"_blank",rel:"noopener noreferrer"}},[t._v("nuclei"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("fofax -q "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fx=kubernetes'")]),t._v(" -fe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("httpx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fx=kubernetes'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" fofax  -fe "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("httpx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fx=kubernetes'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" fofax  -fe  -ffi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app=\"kubernetes\"'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("fofax"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("httpx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml\n")])])]),a("h2",{attrs:{id:"xray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xray"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/chaitin/xray",target:"_blank",rel:"noopener noreferrer"}},[t._v("xray"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'login'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" fofax -fs "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" -e -ec "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" httpx -o "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v(".txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" xray ws ss --uf "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v(".txt\n")])])]),a("p",[t._v("@荋丶 提供")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("xray ws ss --uf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'login'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" fofax -fs "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" -e -ec -ffi "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("@becivells 提供")]),t._v(" "),a("h2",{attrs:{id:"observer-ward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#observer-ward"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/0x727/ObserverWard_0x727",target:"_blank",rel:"noopener noreferrer"}},[t._v("observer_ward"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'login'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" fofax -fs "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" -e -ec -ffi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("./observer_ward_darwin --stdin\n")])])]),a("p",[a("a",{attrs:{href:"https://github.com/0x727",target:"_blank",rel:"noopener noreferrer"}},[t._v("@0x727"),a("OutboundLink")],1),t._v(" 提供")]),t._v(" "),a("h2",{attrs:{id:"dismap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dismap"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://github.com/zhzyker/dismap/",target:"_blank",rel:"noopener noreferrer"}},[t._v("dismap"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("dismap -file "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fofax -q "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fx=flash-phishing"')]),t._v(" -fe"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("httpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfofax -q "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fx=flash-phishing"')]),t._v(" -fe"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("result.txt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("dismap -file result.txt\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);