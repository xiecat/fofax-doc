# FAQ

## 读取顺序和生成配置文件的目录

## windows下的转义问题

在windows下使用一定要注意转义，windows下的输入`""`不加转义会被吃掉

```shell
fofax -q 'app="Grafana"' # 输入的内容
FoFa input Query of: app=Grafana #程序实际接收的内容
```

解决这个问题需要转义

```shell
fofax -q 'app=\"Grafana\"' -debug # 输入的内容
FoFa input Query of: app=Grafana #程序实际接收的内容
```

## 提示语法错误

```
➜  Desktop ./fofax -q fx="redis-unauth"

2021/12/30 19:53:47 [INFO] Please add the -fe parameter to use the fofa extended syntax
2021/12/30 19:53:47 [ERRO] FoFa Response ErrMsg: 查询语法错误
```

一般有几种情况。第一种是使用 fx 语句未加  `-fe` 参数。第二种自己写的语句有问题，可以放到 fofa 网站试一下

## 如何看懂 debug 信息

### 查看 debug 信息

```
➜  Desktop ./fofax -q 'app="Grafana"' -debug
2021/12/30 19:49:04 [DEBUG] FoFa Size : 100
2021/12/30 19:49:04 [DEBUG] FoFa input Query of: app=Grafana   ## 程序输入的
2021/12/30 19:49:04 [DEBUG] https://fofa.so/api/v1/search/all?email=*****@*******&key=*******************&qbase64=YXBwPUdyYWZhbmE=&size=100&page=1&fields=host,title,lastupdatetime
2021/12/30 19:49:04 [DEBUG] Resp Time: 314.000000/millis
2021/12/30 19:49:04 [DEBUG] Fofa Api Query: app=Grafana   ## fofa api返回的语句
2021/12/30 19:49:04 [SUCC] Fetch Data From FoFa: [0/0]
```
::: warning
如果想复制完整链接可以加 `-sp` 参数来显示邮箱和 key
:::

### 查看语句语法树

```
➜  Desktop ./fofax -q app="Grafana" -fe -tree

Source:  app=Grafana
Parse:
2021/12/30 19:52:23 [INFO] Source: app=Grafana
2021/12/30 19:52:23 [INFO] Parse: app=Grafana
2021/12/30 19:52:23 [INFO] Tree: (start (query (fofaKeyword app) = (fofaValue Grafana)))
```
