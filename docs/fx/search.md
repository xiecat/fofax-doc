# 规则文件的查询和使用



## 在 fofax 中使用 fx

fx 语句可以出现在任何可以使用 fofa 作为输入源的地方但是**必须加上 `-fe` 参数来指明使用了 fx 语句**。fx可以接受的值除了 `id` 以外还有 `query` 字段

```
fofax -q 'fx="fx-2021-1015"'  -fe -fs 2
```

```
fofax -q 'fx=fx-2021-1015'  -fe -fs 2
```

```
fofax -q fx=fx-2021-1015  -fe -fs 2
```

```
fofax -q 'fx="redis-unauth"'  -fe -fs 2
```

## 列出 fx 规则

```shell
fofax -l
```

## 模糊搜索特定的 fx 语句

```
fofax -s 'unauth'
```

搜索中共有几个标签可以使用分别为 

```shell
id
query # 简写为 q
ruleName # 简写为 r
ruleEnglish #简写为 re
author #简写为 a
tag # 简写为 t
```

他们之间用分号分开,其中考虑到 `id` 和 `query ` 和` tag` 的特殊性这里使用全匹配的模式。他们之间是 and 的关系

### 搜索 tag 为 `unauth` 的 fx 语句

```
fofax -s 'tag=unauth'
```

### 搜索 tag 为 `unauth` 并且ruleName中包含Ju的 fx 语句

```
fofax -s 'tag=unauth;r=Ju'
```

## 显示某一条 fx 语句的详情

使用 `-ss` 参数可以接受的内容为 `id`  的值或者`query`的值

### 显示 `fx-2021-1015` 语句的详情

```
fofax -ss "fx-2021-1015"
```

### 显示query名称为`redis-unauth` 语句的详情

```
fofax -ss "redis-unauth"
```

## 显示所有存在的 tag

```
fofax -lt
```



