# 编写 Fx 语句

## 生成模板文件

使用 `-g` 并指定生成的文件名指定路径，这样便生成了一个模版文件。默认是生成到当前目录下

```shell
fofax -g fx_rule.yaml
```

查看此 yaml 文件，其内容如下。

```yaml
id: fx-2021-01
query: 查询的字符串用于fx="jupyter Unauth" eg:(jupyter Unauth)
rule_name: 规则名称 eg:(jupyter 未授权)
rule_english: jupyter unauthorized
description: 规则描述
author: 作者<邮箱>eg:(xiecat)
fofa_query: fofa语句 eg:(body="ipython-main-app" && title="Home Page - Select or create
  a notebook")"
tag:
- 标签1 eg(unauthorized)
- 标签2
source: 语句来源
```

按照如上说明，修改相应内容，编写一个新的 Fx 语法规则

为方便复制，详细内容如下（注意 title 处填写自己的目标名）：

```yaml
id: fx-2021-01
query: redteam-info-gathering
rule_name: 红队信息收集
rule_english: redteam-info-gathering
description: 使用fofa针对某个目标进行红队常见的高关注CMS/OA系统的信息收集
author: xiecat
fofa_query: title="Target" && (title="平台" || title="OA" || title="系统" || title="协同" || title="办公" || title="致远" || title="泛微" || title="用友" || title="管理" || title="后台" || title="登录" || title="login" || title="admin") && country="CN"
tag:
- redteam
source: 
```
::: warning
请务必保证 query 和 id 的全局唯一性,两者都不可以重复。如果提交到 FoFax, FoFaX 内部会有自己的编号。如果只是自己使用可以使用 fx-0000-xxxx 类似的编号。编号必须以 `fx` 开头。
:::

## 移动文件到 `fxrules`

在编写完成后请放在 `fxrules` 所在的目录。

::: warning
`fxrules` 目录有两种方法可以得知。一种是查看配置文件中 `fxdir` 所在的目录。一种是通过 `fofax -h`

```shell
FX GRAMMER:
   -fd, -fxdir string        fxdir directory (default "/Users/user/.config/fofax/fxrules")
```
查看 `fxdir` 的默认项
:::

## 使用此 Fx 查询规则

```
fofax -q 'fx="redteam-info-gathering"' -fe -ffi
```

