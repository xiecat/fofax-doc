# 快速开始

## 参数介绍

FoFaX 命令行参数可以分为四种配置项、输入源、过滤参数、输出格式
```shell
fofax [option] [input] [filter] [output]
```


```shell 
fofax [[-email -key]/-config/-rit/-debug/-p/-sp/-update] [-q/-uc/-iu/-if/-fcf/-qf/-qx/-ucf/-iuf] [-fs/-i/-ec] [-ffi/-fto/-ff]
```
这里先简单介绍一下。后续会分别介绍输入源、输出格式、过滤参数
```shell
Usage:
  fofax [flags]

Flags:
CONFIGS:
   -email, -fofa-email string  Fofa API Email 
   -key, -fofakey string       Fofa API Key 
   -p, -proxy string           proxy for http like http://127.0.0.1:8080
   -fofa-url string            Fofa url (default "https://fofa.info")
   -rit, -request-interval-time int  Request interval time unit/Millisecond (default 500)
   -coin                             Get over 10,000 data with fofa coins
   -debug                      Debug mode
   -sp, -show-privacy          Debug mode Show Privacy
   -update                     Update fofax
   -du, -disable-update        Close update alerts

FILTERS:
   -fs, -fetch-size int      The maximum number of query (default 100)
   -e, -exclude              Exclude the honeypot.
   -i, -include              Include the honeypot.
   -od, -full            Include the Historic data (old Data).
   -ec, -exclude-country-cn  Exclude CN.

OUTPUT FORMAT:
   -ffi, -fetch-fullHost-info    URL fetch, with scheme, hostname, port
   -fto, -fetch-titles-ofDomain  Fetch website title
   -fjo, -fetch-jarm-ofDomain    Fetch website jarm
   -ff, -fetch-fields string     Fetch by fields.eg: (host,lastupdatetime)
   -fetch-fields-split string    Specify characters to split data in different fields (default ",")

SINGLE QUERY/CERT/ICON:
   -q, -query string              FoFa query statement
   -uc, -url-cert string          Enter the certificate of the https URL to query
   -iu, -url-to-icon-hash string  Enter the URL of an icon, calculate it and query it
   -if, -icon-file-path string    Calculate the hash of the local icon file, then query it

MULTIPLE QUERY/CERT/ICON:
   -fcf, -fofa-coin-file string      Load files downloaded with fofa coins (only use -ffi -fs or not)
   -qf, -query-file string           Load files, query multiple statements
   -qx, -query-fx string             Find all statements from the fx rules
   -ucf, -url-cert-file string       Read the URL from the file, calculate the cert and then query it
   -iuf, -icon-hash-url-file string  Retrieve the URL from the file, calculate the icon hash and query it

FX GRAMMER:
   -g, -gen string           Generate fx statement files eg: default_fx.yaml
   -fd, -fxdir string        fxdir directory (default "/Users/user/.config/fofax/fxrules")
   -l, -lists                List of fx statements
   -lt, -list-tags           List fx tags
   -s, -search string        Search for fx statements. Statements are separated by semicolons eg: id=fx-2021-01;query="jupyter Unauth"
   -tree                     Print syntax tree
   -fe, -fofa-ext            Using extended syntax(fx)
   -ss, -show-single string  Display a single fx message

OTHER OPTIONS:
   -config string  fofax configuration file.The file reading order(fofax.yaml,/Users/user/.config/fofax/fofax.yaml,/etc/fofax/fofax.yaml,/etc/fofax.yaml) (default "/Users/user/.config/fofax/fofax.yaml")
   -v, -version    Show fofaX version
   -use            Syntax queries
   -open           Open with your browser only support pipline/-q/-uc/-iu/-if
   -no-limit-open  No limit to the number of openings in your browser
```

## 基础查询

::: warning
Windows 下如果查询出问题，请参考 [Windows 系统的使用问题](/faq/#windows-%E7%B3%BB%E7%BB%9F%E7%9A%84%E4%BD%BF%E7%94%A8%E9%97%AE%E9%A2%98)。
:::

有如下两种方式查询 `app="APACHE-Solr"`，不指定数量默认会输出 100 个 host，并且默认会对数据进行去重。

```console
fofax -q 'app="APACHE-Solr"'

2021/12/23 20:17:32 [SUCC] Fetch Data From FoFa: [100/30830]
54.114.20.168:8443
193.8.4.43:8983
208.37.227.95:8983
3.20.255.140:8983
3.114.85.178:8983
82.142.82.197:8983
159.39.10.212:8983
199.102.27.69:8983
…………
```

```console
echo 'app="APACHE-Solr"' | fofax
2021/12/23 20:17:59 [SUCC] Fetch Data From FoFa: [100/30830]
54.114.20.168:8443
193.8.4.43:8983
208.37.227.95:8983
3.20.255.140:8983
3.114.85.178:8983
82.142.82.197:8983
159.39.10.212:8983
199.102.27.69:8983
…………
```

## 指定查询数量

```console
echo 'app="APACHE-Solr"' | fofax -fs 5
2021/12/23 20:19:00 [SUCC] Fetch Data From FoFa: [5/30830]
13.57.71.190:8443
165.22.215.32:8983
184.73.40.143:8443
3.20.255.140:8983
```

::: warning
只输出了 4 条数据，是因为 FoFaX 自动对重复的数据进行了去重,高级会员大于 10000 条数据并且打开 `-coin` 开关会消耗 FoFa 币。
为了最大化利用 fofa 币，当超过一万条后不论写多少最终只入不舍获取数据。比如 `-fs 10001` 实际会变成 `-fs 20000`
:::

## 排除查询

添加 `-i` 参数，其中包含蜜罐的数据。

```console
echo 'app="APACHE-Solr"' | fofax -fs 10 -i
2021/12/23 22:56:14 [SUCC] Fetch Data From FoFa: [10/30849]
13.126.128.253:80
185.22.235.14:8983
151.248.126.4:8983
20.71.77.183:80
23.102.46.20:443
15.113.170.101:8443
52.58.201.109:80
```

添加 `-ec` 参数，排除中国的数据。

```console
echo 'app="APACHE-Solr"' | fofax -fs 10 -ec
2021/12/23 22:56:36 [SUCC] Fetch Data From FoFa: [10/26044]
15.113.170.101:8443
52.58.201.109:80
13.126.128.253:80
185.22.235.14:8983
151.248.126.4:8983
20.71.77.183:80
23.102.46.20:443
```

## 获取 URL

添加 `-ffi` 参数，根据查询语句直接获取对应的 URL（`[scheme]://[host]:[port]`）。

```console
echo 'app="APACHE-Solr"' | fofax -fs 5 -ffi
2021/12/23 20:21:03 [SUCC] Fetch Data From FoFa: [5/30830]
https://184.73.40.143:8443
http://120.24.42.244:8983
https://13.57.71.190:8443
http://165.22.215.32:8983
```

## 获取 Title

```console
echo 'domain="baidu.com" && status_code="200"' | fofax -fs 10 -fto
2021/12/23 20:21:19 [SUCC] Fetch Data From FoFa: [10/1124]
https://home.baidu.com [关于百度]
http://research.baidu.com [Baidu Research]
http://fecs.baidu.com [FECS - Front End Code Style Suite]
http://yuntu.baidu.com [企业图谱]
https://ditu.baidu.com [百度地图]
https://sp2.baidu.com [百度一下，你就知道]
https://tushuo.baidu.com [图说]
https://ocpc.baidu.com [百度 oCPC 开发者中心]
https://naotu.baidu.com [百度脑图 - 便捷的思维工具]
http://usa.baidu.com [Baidu USA]
```

## Debug 模式

添加 `-debug` 参数，开启 Debug 详细模式。

```console
echo 'app="APACHE-Solr"' | fofax -fs 5 -ffi -debug
2021/12/25 21:28:57 [DEBUG] FoFa Size : 5
2021/12/25 21:28:57 [DEBUG] FoFa Query of: app="APACHE-Solr"
2021/12/25 21:28:57 [DEBUG] https://fofa.so/api/v1/search/all?email=**********@gmail.com&key=**************************&qbase64=YXBwPSJBUEFDSEUtU29sciI=&size=5&page=1&fields=protocol,ip,port,host
2021/12/25 21:28:57 [DEBUG] Resp Time: 432/millis
2021/12/25 21:28:57 [SUCC] Fetch Data From FoFa: [5/30942]
http://35.183.115.103
http://3.17.203.145:8983
http://195.201.119.15:49154
https://18.169.23.120
http://174.138.127.51:8983
```