(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{387:function(a,s,t){a.exports=t.p+"assets/img/windows-conf.44c4468b.png"},388:function(a,s,t){a.exports=t.p+"assets/img/windows-cmd-echo.b6338a5d.png"},389:function(a,s,t){a.exports=t.p+"assets/img/windows-ps-echo.39c18d86.png"},390:function(a,s,t){a.exports=t.p+"assets/img/windows-cmd.4d216071.png"},391:function(a,s,t){a.exports=t.p+"assets/img/windows-powershell.9dad3863.png"},411:function(a,s,t){"use strict";t.r(s);var e=t(52),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[a._v("#")]),a._v(" FAQ")]),a._v(" "),e("h2",{attrs:{id:"读取顺序和生成配置文件的目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#读取顺序和生成配置文件的目录"}},[a._v("#")]),a._v(" 读取顺序和生成配置文件的目录")]),a._v(" "),e("h3",{attrs:{id:"windows"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),e("p",[a._v("Windows 系统下，首次运行 "),e("code",[a._v("fofax.exe")]),a._v("，会在当前同级目录下生成配置文件 "),e("code",[a._v("fofax.yaml")]),a._v(" 和 Fx 规则配置文件 "),e("code",[a._v("fxrules")]),a._v(" 文件夹。同级目录下的配置文件优先读取。")]),a._v(" "),e("p",[a._v("如果同级目录下没有配置文件，则会去读取用户家目录下的 "),e("code",[a._v(".config/fofax/")]),a._v(" 目录中的配置文件：")]),a._v(" "),e("p",[e("img",{attrs:{src:t(387),alt:"Windows_conf"}})]),a._v(" "),e("h3",{attrs:{id:"linux-macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-macos"}},[a._v("#")]),a._v(" Linux/macOS")]),a._v(" "),e("p",[a._v("类 Unix 系统，在首次运行 "),e("code",[a._v("fofax")]),a._v(" 的时候，会在位于 "),e("code",[a._v("~/.config/fofax/")]),a._v(" 目录生成配置文件。")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("fofax\n\n      ____        ____       _  __\n     / __/____   / __/____ _"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("/ /\n    / /_ / __ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" / /_ / __ `/"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   /\n   / __// /_/ // __// /_/ //   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n  /_/   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("____//_/   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("__,_//_/"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n                              \n                         fofax.xiecat.fun\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("/12/23 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("21")]),a._v(":21:28 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("SUCC"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" create config "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" /Users/user/.config/fofax/fofax.yaml. please modify and use\n")])])]),e("h2",{attrs:{id:"windows-系统的使用问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-系统的使用问题"}},[a._v("#")]),a._v(" Windows 系统的使用问题")]),a._v(" "),e("h3",{attrs:{id:"通过管道查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过管道查询"}},[a._v("#")]),a._v(" 通过管道查询")]),a._v(" "),e("p",[a._v("Windows上通过管道进行查询，这种方式是优先推荐使用的，因为无需任何转义。")]),a._v(" "),e("div",{staticClass:"language-cmd extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('echo app="APACHE-Solr" | fofax.exe -fs 3\n')])])]),e("p",[e("img",{attrs:{src:t(388),alt:"Windows_cmd_echo"}})]),a._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("echo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'app=\"APACHE-Solr\"'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" fofax"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exe "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("fs 5\n")])])]),e("p",[e("img",{attrs:{src:t(389),alt:"Windows_powershell_echo"}})]),a._v(" "),e("h3",{attrs:{id:"通过参数指定查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过参数指定查询"}},[a._v("#")]),a._v(" 通过参数指定查询")]),a._v(" "),e("p",[a._v("在 Windows 下使用一定要注意转义，Windows 终端中输入 "),e("code",[a._v('"')]),a._v(" 不加转义会消失。")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("fofax.exe -q "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'app=\"APACHE-Solr\"'")]),a._v(" \t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 输入的内容")]),a._v("\nFoFa input Query of: "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Grafana \t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#程序实际接收的内容")]),a._v("\n")])])]),e("p",[a._v("解决这个问题需要转义，可以添加 "),e("code",[a._v("-debug")]),a._v(" 开启详细调试模式。并且在 Windows 系统上，使用不同的终端软件，命令也是有所不同。")]),a._v(" "),e("p",[a._v("在CMD终端上，"),e("code",[a._v("-q")]),a._v(" 后面不可以添加单引号 "),e("code",[a._v("'")]),a._v("。")]),a._v(" "),e("div",{staticClass:"language-cmd extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('fofax.exe -q app=\\"APACHE-Solr\\" -fs 5\n')])])]),e("p",[e("img",{attrs:{src:t(390),alt:"Windows_cmd"}})]),a._v(" "),e("p",[a._v("而在 PowerShell 上，"),e("code",[a._v("-q")]),a._v(" 后面不仅需要添加单引号，而且对于双引号也要进行转义。")]),a._v(" "),e("div",{staticClass:"language-powershell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[a._v("fofax"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exe "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("q "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'app=\\\"APACHE-Solr\\\"'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("fs 5\n")])])]),e("p",[e("img",{attrs:{src:t(391),alt:"Windows_powershell"}})]),a._v(" "),e("h2",{attrs:{id:"提示语法错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提示语法错误"}},[a._v("#")]),a._v(" 提示语法错误")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("./fofax -q "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("fx")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"redis-unauth"')]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("/12/30 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),a._v(":53:47 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("INFO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Please "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" the -fe parameter to use the fofa extended syntax\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("/12/30 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),a._v(":53:47 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ERRO"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" FoFa Response ErrMsg: 查询语法错误\n")])])]),e("p",[a._v("一般有两种犯错情况。第一种是使用 Fx 语句未加 "),e("code",[a._v("-fe")]),a._v(" 参数；第二种自己写的语句有问题，可以添加 "),e("code",[a._v("-open")]),a._v(" 参数到 FoFa 网站上看看。")]),a._v(" "),e("h2",{attrs:{id:"debug-信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#debug-信息"}},[a._v("#")]),a._v(" Debug 信息")]),a._v(" "),e("h3",{attrs:{id:"查看-debug-信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看-debug-信息"}},[a._v("#")]),a._v(" 查看 Debug 信息")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("fofax -q "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'app=\"Grafana\"'")]),a._v(" -debug\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("/12/30 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),a._v(":49:04 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("DEBUG"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" FoFa Size "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("/12/30 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),a._v(":49:04 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("DEBUG"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" FoFa input Query of: "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Grafana   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 程序输入的")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("/12/30 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),a._v(":49:04 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("DEBUG"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" https://fofa.so/api/v1/search/all?email"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("*****@*******"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("key")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("*******************"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("qbase64")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("YXBwPUdyYWZhbmE"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("size")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("page")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("fields")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("host,title,lastupdatetime\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("/12/30 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),a._v(":49:04 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("DEBUG"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Resp Time: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("314.000000")]),a._v("/millis\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("/12/30 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),a._v(":49:04 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("DEBUG"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Fofa Api Query: "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Grafana   "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## fofa api返回的语句")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2021")]),a._v("/12/30 "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),a._v(":49:04 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("SUCC"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" Fetch Data From FoFa: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("/0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("如果想复制完整链接，可以加 "),e("code",[a._v("-sp")]),a._v(" 参数来显示 "),e("code",[a._v("email")]),a._v(" 和 "),e("code",[a._v("key")]),a._v("。")])]),a._v(" "),e("h3",{attrs:{id:"查看语句语法树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看语句语法树"}},[a._v("#")]),a._v(" 查看语句语法树")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('./fofax -q app="Grafana" -fe -tree\n\nSource:  app=Grafana\nParse:\n2021/12/30 19:52:23 [INFO] Source: app=Grafana\n2021/12/30 19:52:23 [INFO] Parse: app=Grafana\n2021/12/30 19:52:23 [INFO] Tree: (start (query (fofaKeyword app) = (fofaValue Grafana)))\n')])])])])}),[],!1,null,null,null);s.default=r.exports}}]);