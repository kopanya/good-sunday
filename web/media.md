```
<link rel="stylesheet" media="(max-width: 640px)" href="max-640px.css">
<link rel="stylesheet" media="(min-width: 640px)" href="min-640px.css">
<link rel="stylesheet" media="(orientation: portrait)" href="portrait.css">
<link rel="stylesheet" media="(orientation: landscape)" href="landscape.css">
<link rel="stylesheet" href="print.css" media="print">
<style>
  @media (min-width: 500px) and (max-width: 600px) {
    h1 {
      color: fuchsia;
    }

    .desc:after {
      content:" In fact, it's between 500px and 600px wide.";
    }
  }
</style>
```

当浏览器宽度介于 0 像素和 640 像素之间时，系统将会应用 max-640px.css。
当浏览器宽度介于 500 像素和 600 像素之间时，系统将会应用 @media。
当浏览器宽度为 640 像素或大于此值时，系统将会应用 min-640px.css。
打印时，系统将会应用 print.css。
当浏览器宽度大于高度时，系统将会应用 landscape.css。
当浏览器高度大于宽度时，系统将会应用 portrait.css。