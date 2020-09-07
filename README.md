# denominator
deno.land Research and Development

```
node
  deno
  ||node
    ||deno
```

deno is named to be a syllable-swap of node

deno provide typescript feature built-in to create apps without the hassle of downloading 100M or 1GB heavy node_modules folder.  No more npm required. deno takes care of it by caching it in a DENO_DIR folder.

```
DENO_DIR=./deno_dir
deno cache ./deps.ts
```

This is similar to `npm install`
