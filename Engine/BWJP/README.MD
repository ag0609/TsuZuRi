# Bookwalker JP

## 1. Page Capture

### Route A
- Flow

> #### `Override CanvasRenderingContext2D.prototype.drawImage` => `Force Canvas draw in original source resolution` => `Capture final canvas output` => Next page...

- Purpose

> #### It work like `Photocopying`, most easy flow but hard to work perfectly, we wait bookwalker generating the **result** and we copy one for ourself.

- Latest Pointer

> #### `document.getElementsByClass("currentScreen")[0].getElementsByTagName("canvas")[0]`

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

> #### It work like `Robbing`, the most difficulty part is locating where we should "rob", we wait for bookwalker split the puzzled image and decrypt the coordinates, intercepting the image print out and load it into ours code.

- Latast Pointer

> #### `NFBR.????` (image_viewer_2.0.17_2021-03-05.js)
> #### `NFBR.a6G.a5x.prototype.b9b` (viewer_loader_2.0.15_2020-03-05.js)
> #### `NFBR.a6G.a5x.prototype.b9b` (viewer_image_2.0.10_2019-09-18.js)
> #### `NFBR.a6G.a5x.prototype.b0F` (viewer_image_v0.1.10_2018-11-15.js)

- Status

> #### Deprecated (Since April-2021, Official updated image_viewer.js)

- Pros/Cons
  - [x] Faster, Lighter, Accurate
  - [x] Faster: We know where we go, so we won't wait anyone
  - [x] Lighter: We left nothing for the book viewer
  - [x] Accurate: We know which page we are holding, we won't make wrong page
  - [ ] We **work** quite loudly, __they know what we have done__ (Page contains mutant detector, recorded when we Hijack any script)
  - [ ] They change the stuff hidding place randomly every certain period

## 2. Obtain Book Info

### Route A
- Flow

> #### `Search Book ID by title / series` => `obtain information from book detail page`

## 3. Extra

### a. Contents Table or Bookmarks
- Flow

> #### `Obtain from NFBR`

