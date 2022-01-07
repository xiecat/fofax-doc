(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{407:function(a,s,t){"use strict";t.r(s);var e=t(52),o=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"下载和配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载和配置"}},[a._v("#")]),a._v(" 下载和配置")]),a._v(" "),t("h2",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[a._v("#")]),a._v(" 下载")]),a._v(" "),t("p",[a._v("点击 "),t("a",{attrs:{href:"https://github.com/xiecat/fofax/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("Releases下载链接"),t("OutboundLink")],1),a._v(" ，按照自己的系统架构选择相应的发行版本下载。")]),a._v(" "),t("p",[a._v("或者使用")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -v github.com/xiecat/fofax/cmd/fofax@latest\n")])])]),t("h3",{attrs:{id:"macos-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos-linux"}},[a._v("#")]),a._v(" MacOS/Linux")]),a._v(" "),t("p",[a._v("将下载下来的 fofax 压缩包解压放在 "),t("code",[a._v("/usr/local/bin/")]),a._v(" 目录下")]),a._v(" "),t("div",{staticClass:"language-console extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("tar -zxvf ~/Downloads/fofax_v0.1.11_darwin_amd64.tar.gz -C /usr/local/bin/\n")])])]),t("p",[a._v("第一次运行 fofax 命令会自动生成一个配置文件，位于 "),t("code",[a._v("~/.config/fofax/fofax.yaml")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" Windows")]),a._v(" "),t("p",[a._v("解压压缩包，第一次运行 fofax.exe 会在同级目录下生成一个 fofax.yaml 的配置文件")]),a._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),t("p",[a._v("可以使用环境变量、命令行、参数进行配置，")]),a._v(" "),t("h3",{attrs:{id:"环境变量配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境变量配置"}},[a._v("#")]),a._v(" 环境变量配置")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("FOFA_EMAIL=xxx@xxx.xx\nFOFA_KEY=xxxxxxxxxxxxxxxxxxxxxxxxx\n")])])]),t("p",[a._v("环境变量配置后 "),t("code",[a._v("fofax -h")]),a._v(" 会看到默认参数中有此值")]),a._v(" "),t("h3",{attrs:{id:"文件配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件配置"}},[a._v("#")]),a._v(" 文件配置")]),a._v(" "),t("p",[a._v("一般来说只需要配置完 "),t("code",[a._v("email")]),a._v(" 和 "),t("code",[a._v("key")]),a._v(" 就可以了。")]),a._v(" "),t("div",{staticClass:"language-console extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("# fofa api email\nfofa-email: ******@gmail.com\n\n# fofa api key\nfofakey: ***************\n")])])]),t("h3",{attrs:{id:"使用-tips"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-tips"}},[a._v("#")]),a._v(" 使用 Tips")]),a._v(" "),t("p",[a._v("不带任何参数时，除了会输出 ASCII Logo，还会随机输出一条使用 Tips。")]),a._v(" "),t("h2",{attrs:{id:"配置文件的读取顺序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件的读取顺序"}},[a._v("#")]),a._v(" 配置文件的读取顺序")]),a._v(" "),t("p",[a._v("为了适应不同操作系统用户的使用习惯 fofax 对配置生成的进行了优化调整。主要分为两类操作系统。一类 windows 另一类就是 unix/linux 为主的操作系统。不论是 windows 还是非 win 配置文件查找顺序都是不变的分别为")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("fofax.yaml  # 命令行当前目录\n~/.config/fofax/fofax.yaml # 用户家目录下的.config/fofax \n/etc/fofax/fofax.yaml # linux下的配置目录\n/etc/fofax.yaml # linux下的配置目录\n")])])]),t("h3",{attrs:{id:"windows-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-2"}},[a._v("#")]),a._v(" windows")]),a._v(" "),t("p",[a._v("大部分 windows 用户在使用工具的时候通常会把工具配置等放到一个单独的文件夹来使用。fofax 默认的也是这样。但是对于习惯配置文件和二进制分开的用户也有提供使用方法，如需要调整可以在家目录下创建"),t("code",[a._v(".config/fofax/")]),a._v("并把"),t("code",[a._v("fofax.yaml")]),a._v(" 移动至此目录")]),a._v(" "),t("h3",{attrs:{id:"unix-linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unix-linux"}},[a._v("#")]),a._v(" unix/linux")]),a._v(" "),t("p",[a._v("这类用户受 linux 等影响会把配置文件和二进制文件分开。程序生成的默认配置文件路径为 "),t("code",[a._v("~/.config/fofax/fofax.yaml")]),a._v(" 。如果当前目录有 "),t("code",[a._v("fofax.yaml")]),a._v("  会优先读取 "),t("code",[a._v("fofax.yaml")])]),a._v(" "),t("h3",{attrs:{id:"配置文件排查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件排查"}},[a._v("#")]),a._v(" 配置文件排查")]),a._v(" "),t("p",[a._v("如果你不知道程序使用的配置文件在哪可以使用 "),t("code",[a._v("fofa -h")]),a._v(" 命令 config 参数里默认的值即为当前使用的配置文件")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('OTHER OPTIONS:\n   -config string  fofax configuration file.The file reading order(fofax.yaml,/Users/user/.config/fofax/fofax.yaml,/etc/fofax/fofax.yaml,/etc/fofax.yaml) (default "/Users/user/.config/fofax/fofax.yaml")\n')])])])])}),[],!1,null,null,null);s.default=o.exports}}]);