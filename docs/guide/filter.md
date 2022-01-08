# 过滤条件

## 获取数据的个数
`-fs, -fetch-size int`
这个过滤条件任何输入源都可以用。
::: warning
高级会员当 size 大于10000时会消耗 1 FoFa 币
:::

### 读取 2 行 fofa.so 下载的文件
```shell
fofax -fcf test.json  -fs 2 
```
### 读取 5 行 FoFa 语法 `'app="APACHE-Solr"'` 查询的数据

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

## 排除蜜罐
`-e, -exclude`
FoFa 目前是默认排除蜜罐

```shell
echo 'app="APACHE-Solr"' | fofax -e
```
::: warning
此过滤条件 FoFa 币下载的文件无法使用，其他都可以使用
:::