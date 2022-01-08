# 简介

[![Latest release](https://img.shields.io/github/v/release/xiecat/fofax)](https://github.com/xiecat/fofax/releases/latest) ![GitHub Release Date](https://img.shields.io/github/release-date/xiecat/fofax) ![GitHub All Releases](https://img.shields.io/github/downloads/xiecat/fofax/total) [![GitHub issues](https://img.shields.io/github/issues/xiecat/fofax)](https://github.com/xiecat/fofax/issues)


## 功能特点
FoFaX 是一款使用 go 编写的命令行 FoFa 查询工具，在支持 FoFa 查询规则上增加了 Fx 语法来方便使用者编写自己的规则，并且内置了一些常用的规则，除此之外还有联动其他安全产品在内的其他多个实用功能。主要的功能如下：

- 基本 FoFa 语法查询
- 内置 Fx 规则
- 自定义 Fx 规则查询
- Icon/Hash 本地/在线计算查询
- 读取 FoFa 币 导出文件
- URL 证书计算查询
- 可选排除国内资产
- 通过命令行直接浏览器中打开
- 联动其他安全工具
- 更多（等待您使用后的反馈）……



## 设计思路

FoFaX 是 XieCat 正式发布的第二款安全工具，我们和大多数用户使用 FoFa 的最终目的一样：为了获取各种各样的数据，然后进行分析，得到有用的结果。但这个过程会有两个问题：**一个是语句积累，一个是数据格式。** 有时候，因为对于语法的不熟悉，自己找不到相关数据，需要在互联网中查询相关的搜索语法；另外一方面找到了想要的数据之后还要进行格式转换以导入到其他工具中来进行下一步的分析；再者，不同的工具输入的格式也不尽相同...于是 FoFaX 工具为了解决这些问题应运而生：一是容易探索，二是易于对接工具。

现阶段，FoFaX 致力于通用规则整理和联动工具对接上，争取让数据无障碍的输出到主流工具中进行分析和探索。下阶段，我们着重在整理的数据中进行二次探索，最大化、最少次的获取数据的同时能关联到更多有趣的数据，让数据的输出更准确。

我们欢迎每个人参与进来，一起打造一个自己的 FoFa 语法库。除了提交语法之外，更多的第三方工具联动您也可以参与进来，将联动方式提交给我们。最后如果有什么有趣的新功能或者新需求，也都可以通过提 issues/Xiecat 公众号后台提交给 Xiecat 团队，我们经过评估之后下个版本就可能实现你要的功能。

Stargazers

[![Stargazers over time](https://starchart.cc/xiecat/fofax.svg)](https://starchart.cc/xiecat/fofax)
