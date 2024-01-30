---
title: "SCSS Is Awesome!"
description: "I did not know what I was missing out on!"
pubDate: "2021-02-25T19:07:49.672+00:00"
heroImage: "https://i.imgur.com/IbtM4S9.jpg"
---

I did not know what I was missing out on!

### It Just Makes Sence!

In standard CSS you cannot nest selectors, you have to think about the browser-specific compatible properties and never mind keeping the whole thing legible...
<br/>
[SCSS](https://sass-lang.com) TO THE RESCUE!
<br/>
<br/>
look at this example...

```SCSS
//SCSS

//these are variables that can be used anywhere!!
$brand-color-a: #4158d0;
$brand-color-b: #c850c0;
$brand-color-c: #ffcc70;

section.awesome {
background-image: linear-gradient(
43deg,
$brand-color-a 0%,
$brand-color-b 46%,
$brand-color-c 100%
);
padding: 100px;
height: 100%;

//nested selectors
h1 {
font-size: 10em;
}
}```
Compiles to...

```CSS
/*CSS*/

section.awesome {
background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
padding: 100px;
height: 100%;
}

section.awesome h1 {
font-size: 10em;
}
```

This is sooooo much cleaner! and you can do so much more with [SCSS](https://sass-lang.com) than this, you can just to name a few:

* Variables
* Partials (This is really awesome! you can split your code into multiple files)
* Nesting
* Mixins (Kinda like functions that store any predefined properties you want)
* Extend/Inheritance

And so much more!

### You Should Try It!
Next time you're building a website and just using plain old CSS, WAIT!
Use [SCSS](https://sass-lang.com) Instead, your mind will be 🤯.
<br/>
So as you can tell I'm excited about this and I just wanted to share... that's all!