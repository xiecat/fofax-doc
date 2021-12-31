# 快速使用
## 下载

点击 [Releases下载链接](https://github.com/xiecat/fofax/releases) ，按照自己的系统架构选择相应的发行版本下载。

##配置

### MacOS/Linux

将下载下来的 fofax 压缩包解压，建议放在 `/usr/local/bin/` 目录下，以达到任意目录都可以运行 fofax 命令的目的。

```console
tar -zxvf ~/Downloads/fofax_v0.1.11_darwin_amd64.tar.gz -C /usr/local/bin/
```


第一次运行 fofax 命令会自动生成一个配置文件，位于 `~/.config/fofax/fofax.yaml`。

```console
fofax

      ____        ____       _  __
     / __/____   / __/____ _| |/ /
    / /_ / __ \ / /_ / __ `/|   /
   / __// /_/ // __// /_/ //   |
  /_/   \____//_/   \__,_//_/|_|
                              
                         fofax.xiecat.fun

2021/12/23 21:21:28 [SUCC] create config file /Users/user/.config/fofax/fofax.yaml. please modify and use
```

接下来就是对此配置文件进行配置了，一般来说只需要配置完 `email` 和 `key` 就可以了。

```console
vim ~/.config/fofax/fofax.yaml
```

```console
# fofa api email
fofa-email: ******@gmail.com

# fofa api key
fofakey: ***************
```

### Windows

解压压缩包，第一次运行 fofax.exe 会在同级目录下生成一个 fofax.yaml 的配置文件。然后打开此配置文件，并填写 `email` 和 `key`。

### 使用 Tips

不带任何参数时，除了会输出 ASCII Logo，还会随机输出一条使用 Tips。




