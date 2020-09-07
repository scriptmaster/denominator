# denominator
deno.land Research and Development

```
node
  deno
  ||node
    ||deno
```

deno is named to be a syllable-swap of node
deno can run on multi-cluster nodes as well via kubernetes or docker (https://hub.docker.com/r/hayd/ubuntu-deno/tags)
ubuntu-deno docker image is less than 60MB, while deno-alpine image is <30MB, I'd recommend ubuntu or debian as alpine is based on musl-c (not libc)

deno provides typescript feature built-in to create apps without the hassle of downloading 100M or 1GB heavy node_modules folder.  No more npm required. deno takes care of it by caching it in a DENO_DIR folder.

```
DENO_DIR=./deno_dir
deno cache ./deps.ts
```

This is similar to `npm install` but much much lesser in size usually less than 10MB (including both the downloaded dependences and the compiled/generated typescript files).

Example react cache:
```
╰─ du -sh deno_dir/deps                                                                                                            ─╯
3.3M	deno_dir/deps

╰─ du -sh deno_dir/gen                                                                                                             ─╯
3.2M	deno_dir/gen

╰─ du -sh deno_dir/                                                                                                                ─╯
6.4M	deno_dir/
```

Compare this to the 100M+ node_modules 

Download modules are globally cached in DENO_DIR by default, and can be overridden per process/run basis with that env variable.
