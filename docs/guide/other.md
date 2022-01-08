# 其他配置



## 调整请求速率

```
-rit, -request-interval-time int  Request interval time unit/Millisecond (default 500)
```



为了应对 FoFa API 请求限制。默认每次请求会停顿 500 ms。如果需要调整可以通过配置文件或者参数进行调整。

```shell
fofax -qf query.txt  -fs 10 -e -rit 100
```



## 更新 FoFaX

```
-update                           Update fofax
```

FoFaX 每隔 24 小时会进行一次版本检查，如果有提示后可以通过以下命令进行更新。

```
fofax -update
```

如果需要关闭请在配置文件中将 `disable-update` 设置为 `true`。



## 配置 API 来源地址

```
-fofa-url string                  Fofa url (default "https://fofa.so")
```

将 FoFaX 访问的 API 地址修改为 `https://fofa.so`。

```
fofax -fofa-url=https://fofa.so -q 'app="APACHE-Solr"'  -fs 10 -e
```



## debug 显示 email 和 key

```
-sp, -show-privacy                Debug mode Show Privacy
```

开启 debug 模式显示 email 和 key。

```
fofax -q 'app="APACHE-Solr"'  -fs 10 -debug -sp
```

