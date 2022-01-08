# 调用浏览器

## 浏览器中打开
```shell
   -open           Open with your browser only support pipline/-q/-uc/-iu/-if
   -no-limit-open  No limit to the number of openings in your browser
```

::: warning
-open 不会去请求 FoFa API 进行查询
:::
<!-- ![openinbrowser](./docs/images/openinbrowser.gif) -->
![openinbrowser.gif](https://s2.loli.net/2021/12/25/2lvs4njYEUNmkLS.gif)


```console
echo 'app="APACHE-Solr"' | fofax -open
```
::: warning
如果从文件或者管道中输出多个查询语句默认只会打开第一个，如果想去除这个限制请使用 `-no-limit-open`
:::