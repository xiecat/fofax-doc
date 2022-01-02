# 输入源/输入类型

Fofax 支持的输入源有管道、参数、文件。输入类型有 fofa 语句、 fx 语句、icon文件，icon URL、cert url 和从 fofa 网站上下载的数据文件(csv/json)格式

## fofa语句查询

fofa 语句支持从管道、参数、文件中输出

### 从管道中查询

```shell
echo 'app="APACHE-Solr"' | fofax -fs 10 
```

### 从参数中查询

```shell
fofax -q 'app="APACHE-Solr"'  -fs 10 -e 
```

### 从文件中查询

```
cat query.txt
app="APACHE-Solr"
```

```shell
fofax -qf query.txt  -fs 10 -e 
```

## fx 语句查询

fofa 语句支持从管道、参数、文件中输出，由于程序进行了 fofa 语法解析，因此 fx 语句同时可以和 fofa 语句混用。但是 **使用 fx 语句必须加`-fe` 参数** 

fofa 语句支持从管道、参数、文件中输出

### 从管道中查询

```shell
echo 'fx="fx-2021-1015" && country!="CN"' | fofax -fe -fs 10 
```

### 从参数中查询

```shell
fofax -q 'fx="fx-2021-1015"' -fe -fs 10 -e 
```

### 从文件中查询

```
cat query.txt
fx="fx-2021-1015"
```

```shell
fofax -qf query.txt -fe -fs 10 -e 
```

### 查询某类 fx 规则

根据 `fofax -s` 查询结果进行多个语句查询 [查看 fx 查询规则](/fx/search.html#%E6%90%9C%E7%B4%A2-fx-%E8%A7%84%E5%88%99)

```
fofax -qx 'Jupyter'
```



##   icon 查询

### 从 url 中查询

```
fofax -iu https://www.baidu.com/favicon.ico -fs 5
```

### 直接计算本地icon文件进行查询

```
wget https://www.baidu.com/favicon.ico
fofax -if favicon.ico -fs 5
```

### 从 icon url 文件列表中计算

```
fofax -iuf icon_url.txt 
```

## 网站证书查询

## 从 url 中计算cert查询

```
fofax -fs 5 -uc https://www.baidu.com/
```

### 从url文件列表中计算

```
fofax -ucf cert_url.txt 
```

## 从 fofa.so 导出的数据中读取

```
fofax -fcf test.csv  -fs 2 
fofax -fcf test.csv  -fs 2 -ffi  
fofax -fcf test.json  -fs 2 
fofax -fcf test.json  -fs 2 -ffi
```
此功能不会对 fofa 的 api 进行请求


