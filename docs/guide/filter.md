# 过滤条件

## 获取数据的个数

`-fs, -fetch-size int`

这个过滤条件任何输入源都可以用。

::: warning
高级会员当 size 大于 10000 时并且打开 `-coin` 开关会消耗 FoFa 币。
为了最大化利用 fofa 币，当超过一万条后不论写多少最终只入不舍获取数据。比如 `-fs 10001` 实际会变成 `-fs 20000`
:::

### 获取两条数据

```shell
fofax -fcf test.json  -fs 2 
```
### 获取五条数据

```shell
echo 'app="APACHE-Solr"' | fofax -fs 5
```
## 排除中国资产
`-ec, -exclude-country-cn`
```shell
echo 'app="APACHE-Solr"' | fofax -ec
```
::: warning
此过滤条件 FoFa 币下载的文件无法使用，其他都可以使用
:::

## 排除干扰数据

`-e, -exclude`

FoFa 目前是默认排除蜜罐，所以此参数无需添加。

```shell
echo 'app="APACHE-Solr"' | fofax
```
::: warning
此过滤条件 FoFa 币下载的文件无法使用，其他都可以使用
:::

## 获取历史数据

```shell
echo 'app="APACHE-Solr"' | fofax -od
```

::: warning
获取 fofa 全部的数据。默认是一年内的数据
:::
## 输入源过滤
`-ubq, -unique-by-query    De-duplicate the input source`
当输入源中包含多个数据，可以使用 `-ubq` 去除重复的
```shell
fofax -q 'domain="baidu.com"' |httpx -path "/favicon.ico" -mc 200>baidu.txt
fofax -iuf baidu.txt -ubq
```