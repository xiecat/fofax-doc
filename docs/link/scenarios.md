# 使用场景

## 获取更多 fofa 数据
:sailboat: 需要工具 [sylas](https://github.com/xiecat/sylas)
```shell
sylas -q 'app="APACHE-Solr"'|fofax -ff "host,lastupdatetime" -fs 10000 
```

## http 站点快速验活
:sailboat: 需要工具 [httpx](https://github.com/projectdiscovery/httpx)
1. 直接输出 http 站点
```shell
echo 'app="APACHE-Solr"' | fofax|httpx
```
2. 存活站点带标题
```shell
echo 'apache' | fofax|httpx -title
```
