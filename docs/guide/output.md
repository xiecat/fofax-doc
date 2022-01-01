# 输出类型

## 输出 [ip:port]
```shell
echo 'app="APACHE-Solr"' | fofax -fs 2
```
结果：
```
34.203.74.240:443
47.99.65.202:8080
```
::: warning
此为默认值
:::
## 输出协议和host [schema://ip:port]
`-ffi, -fetch-fullHost-info`
```shell
echo 'app="APACHE-Solr"' | fofax -ffi -fs 2
```
结果：
```
https://34.203.74.240
http://54.69.81.168:8983
```


## 输出 url 和标题
`-fto, -fetch-titles-ofDomain`
```shell
echo 'app="APACHE-Solr"' | fofax  -fto -fs 10
```
结果：
```
https://34.203.74.240:443 []
http://120.27.221.196:8080 []
http://18.157.175.46:80 []
http://35.155.44.78:80 []
http://212.237.147.216:80 []
http://47.99.65.202:8080 []
http://3.121.165.1:80 []
http://103.86.103.87:8080 []
http://54.69.81.168:8983 [Solr Admin]
http://139.224.146.217:8080 []
```

## 自定义输出
```shell
   -ff, -fetch-fields string     Fetch by fields.eg: (host,lastupdatetime)
   -fetch-fields-split string    Specify characters to split data in different fields (default ",")
```

这里可以指定需要输出的字段和字段分隔符号目前(2020-01-01)fofa支持的字段为
```
host title ip domain port country province city country_name header server protocol banner cert isp as_number as_organization latitude longitude structinfo icp fid cname type jarm
```
::: warning
注意windows下不要使用单引号 -ff 'host,lastupdatetime' windows 会把单引号传入程序，api将其当成一个字段，导致有结果没有输出
:::
### 模拟用 fofa币 下载 csv 文件
```shell
fofax -q 'apache' -ff "host,lastupdatetime" -fs 10000 >apache.csv
```
::: warning
高级会员大于 10000 条数据开始消耗 fofa币
:::
### 联动 naabu 
```shell
fofax -q 'app="HIKVISION-视频监控"' -fs 100 -ec -ff "ip" | naabu -port 9022 -stats
```