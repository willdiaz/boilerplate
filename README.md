# HTML Boilerplate
My starting point for HTML projects.

## SASS
The SASS files are in SCSS format. *main.scss* is set up to import all of the other SCSS files.

**Note:** I set up the Visual Studio Code extension Live SASS Compiler to export the compiled CSS using the following *settings.json* settings:

```
"liveSassCompile.settings.formats":[
    {
        "format": "expanded",
        "extensionName": ".css",
        "savePath": "/css/"
    } 
] 
```

## BEM
The CSS classes are named using the [BEM methodology](http://getbem.com/introduction/).

## JavaScript
The window scroll event listener adds the *&--fixed* class to the header to anchor it to the top of the viewport once the hero image starts to scroll out of view, then removes the class when the hero image's top is in view again.