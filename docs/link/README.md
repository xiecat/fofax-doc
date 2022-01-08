# 目前收集的联动工具

欢迎大家来提供联动案例。

## [Httpx](https://github.com/projectdiscovery/httpx)

```shell
fofax -q 'title="Apache APISIX Dashboard"' -ffi | httpx -path "/apisix/admin/migrate/export" -status-code -mc 200 -ms '{"Counsumers":[],"Routes'
```

![fofax_httpx](../.vuepress/public/fofax&httpx.png)

## [Nuclei](https://github.com/projectdiscovery/nuclei)

```shell
echo 'app="kubernetes"' | fofax | httpx | nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml
```

```shell
fofax -q 'fx=kubernetes' -fe | httpx | nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml
```

```shell
echo 'fx=kubernetes' | fofax  -fe | httpx | nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml
```

```shell
echo 'fx=kubernetes' | fofax  -fe  -ffi | nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml
```

![fofax_nuclei](../.vuepress/public/fofax&nuclei.png)

## [Xray](https://github.com/chaitin/xray)

> 感谢@荋丶 、@becivells两位师傅提供。
```shell
echo 'header="rememberme=deleteMe" || header="shiroCookie"' | fofax -fs 100 -e -ec | httpx -o shiro.txt && xray ws ss --uf shiro.txt
```
```shell 
./xray --log-level fatal ws --plugins shiro --uf <(echo 'header="rememberme=deleteMe" || header="shiroCookie"' | fofax -fs 10 -ffi -ec )
```
![fofax_xray](../.vuepress/public/fofax&xray.png)

## [Observer_ward](https://github.com/0x727/ObserverWard_0x727)

> 感谢[@0x727](https://github.com/0x727)开源团队提供。

```shell
echo 'login' | fofax -fs 100  -ec -ffi | ./observer_ward_darwin --stdin
```
![fofax_observer_ward](../.vuepress/public/fofax&observer_ward.png)

## [Dismap](https://github.com/zhzyker/dismap/)

```
./dismap -file <(echo 'title="login"' | fofax -fs 10 -ffi)
```

![fofax_dismap](../.vuepress/public/fofax&dismap.png)

## [Naabu](https://github.com/projectdiscovery/naabu)

 ```bash
 echo '(title="职业学院" || title="大学" || title="职业技术学院" || title="学院") && country="CN"' | fofax -ff 'domain' -fs 10 | naabu
 ```

![fofax_naabu](../.vuepress/public/fofax&naabu.png)

## [Nmap](https://nmap.org/)

#### Linux/macOS

```shell
nmap -iL <(echo 'app="APACHE-Solr"' | fofax -fs 10 -ff ip)
```
![Nmap](../.vuepress/public/nmap.png)

#### Windows

```shell
echo 'app="APACHE-Solr"' | fofax -fs 1 -ff ip > targets.txt && nmap -iL targets.txt
```
![Nmap2](../.vuepress/public/nmap2.png)


## [Jsubfinder](https://github.com/ThreatUnkown/jsubfinder)

```
.\fofax.exe -q 'app=\"Grafana\"' -ffi | jsubfinder.exe search
```
![jsubfinder](../.vuepress/public/jsubfinder.png)
