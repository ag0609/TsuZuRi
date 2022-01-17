# DLSite Play

[![Install BNDL](https://img.shields.io/badge/Install-BNDL%20(Bootstrap%20Ver.)-green?style=plastic)](https://github.com/ag0609/Project-BNDL/raw/master/BNDL_UserScript/Test/BNDL_PB.user.js) [![Last Updated](https://img.shields.io/badge/Lastest%20Version-20220114.0-green?style=plastic)](#) [![Mosaic Level - Rank B](https://img.shields.io/badge/Mosaic%20Level-Rank%20B-orange?style=plastic)](https://www.bilibili.com/read/cv7181895)

## 1. Page Capture

### Route A(Maniax)
- Flow

> #### `Override XMLHTTPRequest` => `load images list in ziptree.json` => `Cache puzzled image into browser cache` => `redirect cached blob when trying to load images` => `Call Override CanvasRenderingContext2D.prototype.drawImage` => `Force Canvas draw in original source resolution` => `Capture final canvas output` => Next page...

- Purpose

> #### It work like `Photocopying`, most easy flow but hard to work perfectly, we wait viewer generating the **result** and we take one soft-copy for ourself.

- Latest Pointer

> #### `Token` `https://play.dlsite.com/api/download_token?workno=([work number])`
> #### `Work Content` `token[url]/ziptree.json?token=(token)&expiration=(expiration)`

- Status
> Working

- Pros/Cons
  - [x] Easy to understand + Hard to detect = Long lifetime
  - [x] Simulating normal user actions, less risks from your account being **BANNED** (Still have chance if you setup too much page drains)
  - [ ] Slow, Bulky, Heavy, Unreliable
  - [ ] Slow: We wait **result** comes out, and we don't do rush jobs
  - [ ] Bulky: Browser store pages image twice, as dull as I am
  - [ ] Heavy: Memory Eater
  - [ ] Unreliable: we still have quite a great chance obtaining wrong page(mostly capturing previous page during loading)

### Route B

No Route B Yet

## 2. Obtain Product Info

### Route A(All Products)
- Flow

> #### `Obtain user purchased list` => `read product info in purchased list`

- Latest Pointer

> #### `Purchased Count` `https://play.dlsite.com/api/product_count?last=(latest purchase time)`
> #### `Purchased List` `https://play.dlsite.com/api/purchases?page=(page)&_=(YYYYMMDDhhmm)`

- Status

> #### Working for periodly free/trial books

### Route B

No Route B Yet

## 3. Extra

### a. Contents Table or Bookmarks
- Flow

> #### 

- Status

> #### 
