# 下载和配置
## 下载

点击 [Releases下载链接](https://github.com/xiecat/fofax/releases) ，按照自己的系统架构选择相应的发行版本下载。

或者使用 go 进行命令行安装。

```shell
go install -v github.com/xiecat/fofax/cmd/fofax@latest
```

### MacOS/Linux

可以将下载的 FoFaX 压缩包解压放在 `/usr/local/bin/` 目录下，这样的好处是在终端任何一个位置都可以使用这个命令。

```console
tar -zxvf ~/Downloads/fofax_v0.1.26_darwin_amd64.tar.gz -C /usr/local/bin/
```

第一次运行 FoFaX 命令会自动生成一个配置文件，位于 `~/.config/fofax/fofax.yaml`。

### Windows

解压压缩包，第一次运行 fofax.exe 会在同级目录下生成一个 `fofax.yaml` 的配置文件。

## 配置

可以使用环境变量、命令行、参数进行配置。

### 环境变量配置

```
FOFA_EMAIL=xxx@xxx.xx
FOFA_KEY=xxxxxxxxxxxxxxxxxxxxxxxxx
```

环境变量配置后 `fofax -h` 会看到默认参数中有此值

### 文件配置

一般来说只需要配置完 `email` 和 `key` 就可以了。

```console
# fofa api email
fofa-email: ******@gmail.com

# fofa api key
fofakey: ***************
```

### 使用 Tips

不带任何参数时，除了会输出 ASCII Logo，还会随机输出一条使用 Tips。

## 配置文件的读取顺序

为了适应不同操作系统用户的使用习惯 FoFaX 对配置生成的进行了优化调整。主要分为两类操作系统。一类 Windows 另一类就是 Linux/macOS 为主的操作系统。不论是 Windows 还是 Linux/macOS，配置文件查找顺序都是不变的，分别为以下顺序。

```
fofax.yaml  								# 命令行当前同级目录
~/.config/fofax/fofax.yaml 	# 用户家目录下的.config/fofax 
/etc/fofax/fofax.yaml 			# linux下的配置目录
/etc/fofax.yaml 						# linux下的配置目录
```

### Windows

大部分 windows 用户在使用工具的时候通常会把工具配置等放到一个单独的文件夹来使用。FoFaX 默认的也是这样。但是对于习惯配置文件和二进制分开的用户也有提供使用方法，如需要调整可以在家目录下创建`.config/fofax/`并把`fofax.yaml` 移动至此目录。

### Linux/macOS

这类用户受 linux 等影响会把配置文件和二进制文件分开。程序生成的默认配置文件路径为 `~/.config/fofax/fofax.yaml` 。如果当前目录有 `fofax.yaml`  会优先读取 `fofax.yaml` 。

### 配置文件排查

如果你不知道程序使用的配置文件在哪可以使用 `fofa -h` 命令 config 参数里默认的值即为当前使用的配置文件。

```
OTHER OPTIONS:
   -config string  fofax configuration file.The file reading order(fofax.yaml,/Users/user/.config/fofax/fofax.yaml,/etc/fofax/fofax.yaml,/etc/fofax.yaml) (default "/Users/user/.config/fofax/fofax.yaml")
```





