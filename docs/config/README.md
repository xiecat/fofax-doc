## 命令参数

```
fofax -h

      ____        ____       _  __
     / __/____   / __/____ _| |/ /
    / /_ / __ \ / /_ / __ `/|   /
   / __// /_/ // __// /_/ //   |
  /_/   \____//_/   \__,_//_/|_|
                 	vv0.1.19-next
			https://fofax.xiecat.fun

fofaX is a command line fofa query tool, simple is the best!

Usage:
  fofax [flags]

Flags:
CONFIGS:
   -email, -fofa-email string  Fofa API Email (default "becivells@qq.com")
   -key, -fofakey string       Fofa API Key (default "22*****************7657")
   -p, -proxy string           proxy for http like http://127.0.0.1:8080
   -fofa-url string            Fofa url (default "https://fofa.so")
   -debug                      Debug mode
   -sp, -show-privacy          Debug mode Show Privacy
   -update                     Update fofax
   -du, -disable-update        Close update alerts

FILTERS:
   -fs, -fetch-size int          The maximum number of query (default 100)
   -e, -exclude                  Exclude the honeypot.
   -ec, -exclude-country-cn      Exclude CN.
   -ffi, -fetch-fullHost-info    URL fetch, with scheme, hostname, port
   -fto, -fetch-titles-ofDomain  Fetch website title
   -fjo, -fetch-jarm-ofDomain    Fetch website jarm
   -ff, -fetch-fields string     Fetch by fields.eg: (host,lastupdatetime)
   -fetch-fields-split string    Specify characters to split data in different fields (default ",")

SINGLE QUERY/CERT/ICON:
   -q, -query string              FoFa query statement
   -uc, -url-cert string          Enter the certificate of the https URL to query
   -iu, -url-to-icon-hash string  Enter the URL of an icon, calculate it and query it
   -if, -icon-file-path string    Calculate the hash of the local icon file, then query it

MULTIPLE QUERY/CERT/ICON:
   -fcf, -fofa-coin-file string      Load files downloaded with fofa coins (only use -ffi -fs or not)
   -qf, -query-file string           Load files, query multiple statements
   -ucf, -url-cert-file string       Read the URL from the file, calculate the cert and then query it
   -iuf, -icon-hash-url-file string  Retrieve the URL from the file, calculate the icon hash and query it

FX GRAMMER:
   -g, -gen string           Generate fx statement files eg: default_fx.yaml
   -fd, -fxdir string        fxdir directory (default "/Users/user/.config/fofax/fxrules")
   -l, -lists                List of fx statements
   -lt, -list-tags           List fx tags
   -s, -search string        Search for fx statements. Statements are separated by semicolons eg: id=fx-2021-01;query="jupyter Unauth"
   -tree                     Print syntax tree
   -fe, -fofa-ext            Using extended syntax(fx)
   -ss, -show-single string  Display a single fx message

OTHER OPTIONS:
   -config string  fofax configuration file.The file reading order(fofax.yaml,/Users/user/.config/fofax/fofax.yaml,/etc/fofax/fofax.yaml,/etc/fofax.yaml) (default "/Users/user/.config/fofax/fofax.yaml")
   -v, -version    Show fofaX version
   -use            Syntax queries
   -open           Open with your browser only support pipline/-q/-uc/-iu/-if
   -no-limit-open  No limit to the number of openings in your browser
```

