My notes from the course.

# Section 2 - Basics
## General Terms

- Serif: extending features at the end of strokes

## DevTools

### Styles tab

Styles are listed from most specific (top) to least specific (bottom).

Click on keyword "inherited" to see the true value, which can include ~~value~~.

## Selectors

### Universal 
```
<style>
  * { ... }
<style>
```

### Element
```
<style>
  body { ... }
<style>
...
<body>
...
</body>
```

### Class
```
<style>
  .post { ... }
</style>
...
<body>
  <p class="post">...</p>
</body>
```
 
 ### Attribute
 ```
 <style>
  [disabled] { ... }
</style>
...
<form>
  <button disabled>...</button>
</form>
 ```

 ### ID
 ```
 <style>
  #name-input { ... }
</style>
...
<form>
  <input id="name-input">
</form>
 ```

## Combinators
### Adjacent Sibling aka Next Sibling
* Elements share the same parent.
* Second element comes __immediately__ after first element.

```
<style>
  h2 + p { 
    color: red;
  }
<style>

<div>
  <h2>Not applied</h2>
  <p>CSS applied</p>
  <h2>Not applied</h2>
  <h3>Not applied</h3>
  <p>Not applied</p>
  <h2>Not applied</h2>
  <p>CSS applied</p>
</div>
```
### General Sibling aka Subsequent Sibling
This is more flexible than _Adjacent Sibling_.

* Elements share the same parent
* Second elements comes after first element

```
<style>
  h2 ~ p { 
    color: red;
  }
<style>

<div>
  <h2>Not applied</h2>
  <p>CSS applied</p>
  <h2>Not applied</h2>
  <h3>Not applied</h3>
  <p>CSS applied</p>
</div>
```

### Child
* Second element is a _direct child_ of first element.

```
<style>
  div > p { 
    color: red;
  }
<style>
<div>
  <div>Not applied</div>
  <p>CSS applied</p>
  <div>Not applied</div>
  <article>
    <p>Not applied</p>
  </article>
  <p>CSS applied</p>
</div>
```

### Descendant
* Second element is a descendant of the first element.

```
<style>
  div p { 
    color: red;
  }
<style>

<div>
  <div>Not applied</div>
  <p>CSS applied</p>
  <div>Not applied</div>
  <article>
    <p>CSS applied</p>
  </article>
  <p>CSS applied</p>
</div>
```

## Specificity of Selectors
1. inline style (labeled `element.style` in devtools)
1. combinators (Eg multiple selectors)
1. `#ID`
1. `.class`, `:pseudo-class` and `[attribute]`
1. `<element>` and ::pseudo-element, `*` selector, browser defaults
1. inherited styles

Conflicts are resolved by looking at the order in file, where last style wins.  Eg if you an element has both a `.class` and an `[attribute]` with styles, then the last one in the file will win.

## Performance
* ID selector and class selector 
* ... 
* certain combinators?
* `*` selector

# Section 3 - Box Model

## Box Model
From inside to outside:
* content - the data to display within an HTML element.
* padding - "inside" space between the data and the element border.
* border - surrounds an element
* margin - "outside" space between the element and the rest of the DOM.

## Margin Collapsing
  The top and bottom margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal), a behavior known as margin collapsing. Note that the margins of floating and absolutely positioned elements never collapse.

From https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing

## Shorthand properties
* Border: width style color, Eg 2px dashed orange
* Margin: top right bottom left, Eg 5px 10px 5px 10px 
* Margin: top & bottom left & right, Eg 5px 10px
* Margin: all, Eg 8px

## Height and Width
Pixel values are aboslute and do not depend on the parent element.

_Percentage_ values are based on the space within the parent element.  Many elements will be sized based on their content.  That leads to a width or height of 100% having no effect.

To make things take up more height, you must size from the top HTML element all the way down to the target element.
```
  <html style="height: 100%;">
    <body style="height: 100%;">
      <main style="height: 100%;">
        <!-- this will be 100% of page -->
        <div style="height: 100%;">
```

## Box Sizing
By default, Height and Width set the dimensions of the content, with padding, border and margin being additive to the total size of the area.  This is called _content_box_ sizing.

You can change this via `box-sizing` style. 

## Display Properties
* none: element is not visible but present in the DOM.  It does not block a position in the layout.
* block
* inline
* inline-block: render like an inline element (Ie next to adjacent elements) with additional box properties like x-top, x-bottom and width, height available.

There is also `visibility: none` which will hide the element but the element will continue to block it's position in the layout.

**Inline Block is sensative to whitespace in HTML source** 