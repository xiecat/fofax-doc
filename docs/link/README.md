# 目前收集的联动工具
欢迎提供案例
## [httpx](https://github.com/projectdiscovery/httpx)

```shell
fofax -q 'title="Apache APISIX Dashboard"' -ffi | httpx -path "/apisix/admin/migrate/export" -status-code -mc 200 -ms '{"Counsumers":[],"Routes'
```
## [nuclei](https://github.com/projectdiscovery/nuclei)

```shell
fofax -q 'fx=kubernetes' -fe |httpx|nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml
echo 'fx=kubernetes'| fofax  -fe |httpx|nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml
echo 'fx=kubernetes'| fofax  -fe  -ffi|nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml
echo 'app="kubernetes"'|fofax|httpx|nuclei -t ~/nuclei-templates/misconfiguration/kubernetes/kubernetes-pods.yaml
```
## [xray](https://github.com/chaitin/xray)

```shell 
echo 'login' | fofax -fs 100 -e -ec | httpx -o 123.txt && xray ws ss --uf 123.txt
```
@荋丶 提供
```shell
xray ws ss --uf <(echo 'login' | fofax -fs 100 -e -ec -ffi )
```
## [observer_ward](https://github.com/0x727/ObserverWard_0x727)

```shell
echo 'login' | fofax -fs 100 -e -ec -ffi |./observer_ward_darwin --stdin
```
[@0x727](https://github.com/0x727) 提供

## [dismap](https://github.com/zhzyker/dismap/)
```shell
dismap -file <(fofax -q "fx=flash-phishing" -fe|httpx)
fofax -q "fx=flash-phishing" -fe>result.txt&&dismap -file result.txt
```
