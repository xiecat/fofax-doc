(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{403:function(a,s,t){"use strict";t.r(s);var e=t(52),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"输入源-输入类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入源-输入类型"}},[a._v("#")]),a._v(" 输入源/输入类型")]),a._v(" "),t("p",[a._v("Fofax 支持的输入源有管道、参数、文件。输入类型有 fofa 语句、 fx 语句、icon文件，icon URL、cert url 和从 fofa网站上下载的数据文件(csv/json)格式")]),a._v(" "),t("h2",{attrs:{id:"fofa语句查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fofa语句查询"}},[a._v("#")]),a._v(" fofa语句查询")]),a._v(" "),t("p",[a._v("fofa 语句支持从管道、参数、文件中输出")]),a._v(" "),t("h3",{attrs:{id:"从管道中查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从管道中查询"}},[a._v("#")]),a._v(" 从管道中查询")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'app=\"APACHE-Solr\"'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" fofax -fs "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" \n")])])]),t("h3",{attrs:{id:"从参数中查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从参数中查询"}},[a._v("#")]),a._v(" 从参数中查询")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("fofax -q "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'app=\"APACHE-Solr\"'")]),a._v("  -fs "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" -e \n")])])]),t("h3",{attrs:{id:"从文件中查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从文件中查询"}},[a._v("#")]),a._v(" 从文件中查询")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('cat query.txt\napp="APACHE-Solr"\n')])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("fofax -qf query.txt  -fs "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" -e \n")])])]),t("h2",{attrs:{id:"fx-语句查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fx-语句查询"}},[a._v("#")]),a._v(" fx 语句查询")]),a._v(" "),t("p",[a._v("fofa 语句支持从管道、参数、文件中输出，由于程序进行了 fofa 语法解析，因此 fx 语句同时可以和 fofa 语句混用。但是 "),t("strong",[a._v("使用 fx 语句必须加"),t("code",[a._v("-fe")]),a._v(" 参数")])]),a._v(" "),t("p",[a._v("fofa 语句支持从管道、参数、文件中输出")]),a._v(" "),t("h3",{attrs:{id:"从管道中查询-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从管道中查询-2"}},[a._v("#")]),a._v(" 从管道中查询")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'fx="fx-2021-1015" && country!="CN"\'')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" fofax -fe -fs "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" \n")])])]),t("h3",{attrs:{id:"从参数中查询-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从参数中查询-2"}},[a._v("#")]),a._v(" 从参数中查询")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("fofax -q "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'fx=\"fx-2021-1015\"'")]),a._v(" -fe -fs "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" -e \n")])])]),t("h3",{attrs:{id:"从文件中查询-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从文件中查询-2"}},[a._v("#")]),a._v(" 从文件中查询")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('cat query.txt\nfx="fx-2021-1015"\n')])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("fofax -qf query.txt -fe -fs "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(" -e \n")])])]),t("h2",{attrs:{id:"icon-查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#icon-查询"}},[a._v("#")]),a._v(" icon 查询")]),a._v(" "),t("h3",{attrs:{id:"从-url-中查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从-url-中查询"}},[a._v("#")]),a._v(" 从 url 中查询")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("fofax -iu https://www.baidu.com/favicon.ico -fs 5\n")])])]),t("h3",{attrs:{id:"直接计算本地icon文件进行查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#直接计算本地icon文件进行查询"}},[a._v("#")]),a._v(" 直接计算本地icon文件进行查询")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("wget https://www.baidu.com/favicon.ico\nfofax -if favicon.ico -fs 5\n")])])]),t("h3",{attrs:{id:"从-icon-url-文件列表中计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从-icon-url-文件列表中计算"}},[a._v("#")]),a._v(" 从 icon url 文件列表中计算")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("fofax -iuf icon_url.txt \n")])])]),t("h2",{attrs:{id:"网站证书查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网站证书查询"}},[a._v("#")]),a._v(" 网站证书查询")]),a._v(" "),t("h2",{attrs:{id:"从-url-中计算cert查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从-url-中计算cert查询"}},[a._v("#")]),a._v(" 从 url 中计算cert查询")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("fofax -fs 5 -uc https://www.baidu.com/\n")])])]),t("h3",{attrs:{id:"从url文件列表中计算"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从url文件列表中计算"}},[a._v("#")]),a._v(" 从url文件列表中计算")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("fofax -ucf cert_url.txt \n")])])]),t("h2",{attrs:{id:"从-fofa-so-里导出的数据中读取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从-fofa-so-里导出的数据中读取"}},[a._v("#")]),a._v(" 从 fofa.so 里导出的数据中读取")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("fofax -fcf test.csv  -fs 2 \nfofax -fcf test.csv  -fs 2 -ffi  \nfofax -fcf test.json  -fs 2 \nfofax -fcf test.json  -fs 2 -ffi\n")])])]),t("h4",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])])])}),[],!1,null,null,null);s.default=r.exports}}]);