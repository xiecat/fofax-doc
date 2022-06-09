(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{438:function(s,a,t){"use strict";t.r(a);var e=t(56),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),t("h2",{attrs:{id:"获取更多-fofa-数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取更多-fofa-数据"}},[s._v("#")]),s._v(" 获取更多 fofa 数据")]),s._v(" "),t("p",[s._v("⛵️ 需要工具 "),t("a",{attrs:{href:"https://github.com/xiecat/sylas",target:"_blank",rel:"noopener noreferrer"}},[s._v("sylas"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("因为 FoFa 改版此工具暂时无法使用。等改版完成后进行升级")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("sylas -q "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app=\"APACHE-Solr\"'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("fofax -ff "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host,lastupdatetime"')]),s._v(" -fs "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(" \n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("默认 sylas 是以 10000 条数据进行聚合的，所以 fofax 的 -fs 请务必设置为 10000")])]),s._v(" "),t("h3",{attrs:{id:"大批量语句获取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大批量语句获取"}},[s._v("#")]),s._v(" 大批量语句获取")]),s._v(" "),t("p",[s._v("建议分任务 100 条语句一个文件")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mkdir data;cd data;split 100 ../query.txt\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("for query in data/*;do \\\n fofax -rit 5000 -fs 10000 -qf $query -fw >>result.txt \\\n;done\n")])])]),t("h2",{attrs:{id:"http-站点快速验活"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-站点快速验活"}},[s._v("#")]),s._v(" http 站点快速验活")]),s._v(" "),t("p",[s._v("⛵️ 需要工具 "),t("a",{attrs:{href:"https://github.com/projectdiscovery/httpx",target:"_blank",rel:"noopener noreferrer"}},[s._v("httpx"),t("OutboundLink")],1)]),s._v(" "),t("ol",[t("li",[t("p",[s._v("直接输出 http 站点")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app=\"APACHE-Solr\"'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" fofax"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("httpx\n")])])])]),s._v(" "),t("li",[t("p",[s._v("存活站点带标题")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'apache'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" fofax"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("httpx -title\n")])])])])]),s._v(" "),t("h2",{attrs:{id:"模拟在-fofa-info-上导出文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模拟在-fofa-info-上导出文件"}},[s._v("#")]),s._v(" 模拟在 fofa.info 上导出文件")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host,lastupdatetime"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("solr.csv\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'app=\"APACHE-Solr\"'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("fofax -ff "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host,lastupdatetime"')]),s._v(" -fs "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("solr.csv\n")])])]),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),t("p",[s._v("配合 sylas 可以导出更多数据")])]),s._v(" "),t("h2",{attrs:{id:"读取-fofa-info-上导出的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读取-fofa-info-上导出的文件"}},[s._v("#")]),s._v(" 读取 fofa.info 上导出的文件")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("fofax -fcf solr.csv -fs "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" \n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);