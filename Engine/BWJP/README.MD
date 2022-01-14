# BW JP

[![Install BNDL](https://img.shields.io/badge/Install-BNDL%20(Bootstrap%20Ver.)-green?style=plastic)](https://github.com/ag0609/Project-BNDL/raw/master/BNDL_UserScript/Test/BNDL_PB.user.js) [![Last Updated](https://img.shields.io/badge/Lastest%20Version-20220110.6-green?style=plastic)](#) [![Mosaic Level - Rank A](https://img.shields.io/badge/Mosaic%20Level-Rank%20A-critical?style=plastic)](https://www.bilibili.com/read/cv7181895)

## 1. Page Capture

### Route A
- Flow

> #### `Override CanvasRenderingContext2D.prototype.drawImage` => `Force Canvas draw in original source resolution` => `Capture final canvas output` => Next page...

- Purpose

> #### It work like `Photocopying`, most easy flow but hard to work perfectly, we wait web-viewer generating the **result** and we copy one for ourself.

- Latest Pointer

> #### [![$(".currentScreen > canvas")[0]](https://img.shields.io/badge/jQuery-$(".currentScreen%20>%20canvas")[0]-success?style=plastic)](#)
> #### [![a6G.Initializer.Z4p.renderer.currentScreen.canvas](https://img.shields.io/badge/viewer__image__2.0.20__2021--10--26.js-N%46%42%52.a6G.Initializer.Z4p.renderer.currentScreen.canvas-success?style=plastic)](#)
> #### [![a6G.Initializer.c8t.renderer.currentScreen.canvas](https://img.shields.io/badge/viewer__image__2.0.19__2021--09--30.js-N%46%42%52.a6G.Initializer.c8t.renderer.currentScreen.canvas-inactive?style=plastic)](#)
> #### [![a6G.Initializer.F5W.renderer.currentScreen.canvas](https://img.shields.io/badge/viewer__image__2.0.17__2021--03--05.js-N%46%42%52.a6G.Initializer.F5W.renderer.currentScreen.canvas-inactive?style=plastic)](#)

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
- Flow

> #### `Override Dirtied **view_image_NNNN.js** Javascript function hidden in NFBR` => `solve puzzled image fragments and store it` => Next page...

- Purpose

> #### It work like `Robbing`, the most difficulty part is locating where we should "rob", we wait for web-viewer split the puzzled image and decrypt the coordinates, intercepting the image print out and load it into ours code.

- Latast Pointer

> #### [![a6G.a5x.prototype.G1W](https://img.shields.io/badge/viewer__image__2.0.20__2021--10--26.js-N%46%42%52.a6G.a5x.prototype.G1W-success?style=plastic)](#)
> #### [![a6G.a5x.prototype.S4z](https://img.shields.io/badge/viewer__image__2.0.19__2021--09--30.js-N%46%42%52.a6G.a5x.prototype.S4z-inactive?style=plastic)](#)
> #### [![a6G.a5x.prototype.U8j](https://img.shields.io/badge/viewer__image__2.0.17__2021--03--05.js-N%46%42%52.a6G.a5x.prototype.U8j-inactive?style=plastic)](#)
> #### [![a6G.a5x.prototype.b9b](https://img.shields.io/badge/viewer__image__2.0.10__2019--09--18.js-N%46%42%52.a6G.a5x.prototype.b9b-inactive?style=plastic)](#)
> #### [![a6G.a5x.prototype.b0F](https://img.shields.io/badge/viewer__image__v0.1.10__2018--11--15.js-N%46%42%52.a6G.a5x.prototype.b0F-inactive?style=plastic)](#)

- Status

> #### Working

- Pros/Cons
  - [x] Faster, Lighter, more Accurate
  - [x] Faster: We know where we go, so we won't wait anyone (viewer call for cache pages and we get them all, no way escape)
  - [x] Lighter: We left nothing for the book viewer (totally robbed, viewer loaded nothing)
  - [x] Accurate: We know what we are handling, we won't mix them wrong (rarely to have wrong page rendered)
  - [ ] We **work** quite loudly, __they know what we have done__ (Page contains mutant observer, recorded when we loaded any script)
  - [ ] They change codes randomly every certain period

### Route C

Reference: [@fireattack](https://fireattack.wordpress.com/2021/08/27/a-better-way-to-dump-b%6f%6fkwalker/)

- Flow

> #### `Get puzzled Images from viewer attributes` => `solve puzzle at local`

- Purpose

> #### It work like `Stealing the whole safe and unlock it at hideout`, the most difficulty part is locating where the safe password hints stores.

- Latast Pointer

> #### Nothing Yet

- Status

> #### Unknown

- Pros/Cons
  - [x] Fastest, Lightest, most Accurate
  - [x] Accurate: We know where to grant the puzzle, and the hints for solving puzzle, we won't mix them wrong (no way wrong page rendered)
  - [x] We **work** sliently, maybe too slient for alerting
  - [ ] Beware they have planted in puzzled, if you try to share them to others, someday they will trace you out. (userid watermark have been planted in)
  - [ ] They change codes randomly every certain period

## 2. Obtain Book Info

### Route A
- Flow

> #### `Search Book ID by title / series` => `obtain information from book detail page`

- Status

> #### Working for periodly free/trial books

### Route B
- Flow

> #### `[Encrypted] configuration.json`

- Status

> #### Alternated. Working for purchased books, daily 10-minutes novel reading and monthly houdai plan contents (`Obtain from viewer attributes`)

## 3. Extra

### a. Contents Table or Bookmarks
- Flow

> #### `[Encrypted] configuration.json`

- Status

> #### Alternated (`Obtain from viewer attributes`)
