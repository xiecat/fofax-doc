# 使用场景

## 获取更多 fofa 数据

:sailboat: 需要工具 [sylas](https://github.com/xiecat/sylas)
::: warning
因为 FoFa 改版此工具暂时无法使用。等改版完成后进行升级
:::

```shell
sylas -q 'app="APACHE-Solr"'|fofax -ff "host,lastupdatetime" -fs 10000 
```

::: warning
默认 sylas 是以 10000 条数据进行聚合的，所以 fofax 的 -fs 请务必设置为 10000
:::



### 大批量语句获取

建议分任务 100 条语句一个文件

```
mkdir data;cd data;split 100 ../query.txt
```

```
for query in data/*;do \
 fofax -rit 5000 -fs 10000 -qf $query -fw >>result.txt \
;done
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

## 模拟在 fofa.info 上导出文件

```shell
echo "host,lastupdatetime">solr.csv
echo 'app="APACHE-Solr"'|fofax -ff "host,lastupdatetime" -fs 10000 >>solr.csv
```

::: warning 
配合 sylas 可以导出更多数据 
:::

## 读取 fofa.info 上导出的文件

```shell
fofax -fcf solr.csv -fs 10 
```
