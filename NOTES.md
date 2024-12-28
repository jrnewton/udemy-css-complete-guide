My notes from the course.

# General Terms

- Serif: extending features at the end of strokes

# DevTools Styles tab
Styles are listed from most specific (top) to least specific (bottom).

Click on keyword "inherited" to see the true value, which can include ~~value~~.

# Naming Conventions
Look into `B.E.M.` aka `block, element, modifier`

Format is: `<block>__<element>--<modifier>`

Example:
```
  plan__item--highlighted

  /* plan is the logical container
     item is the element
     highlighted is the modifier
  */
```

# Selectors

## Universal 
```
<style>
  * { ... }
<style>
```

## Element
```
<style>
  body { ... }
<style>
...
<body>
...
</body>
```

## Class
```
<style>
  .post { ... }
</style>
...
<body>
  <p class="post">...</p>
</body>
```
 
## Attribute
 ```
 <style>
  [disabled] { ... }
</style>
...
<form>
  <button disabled>...</button>
</form>
 ```

## ID
 ```
 <style>
  #name-input { ... }
</style>
...
<form>
  <input id="name-input">
</form>
 ```

# Combinators
## Adjacent Sibling aka Next Sibling
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
## General Sibling aka Subsequent Sibling
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

## Child
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

## Descendant
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

# Specificity of Selectors
TODO: need to make sure this is correct

1. `!important`
1. inline style (labeled `element.style` in devtools)
1. `#ID`
1. `.class`, `:pseudo-class` and `[attribute]`
1. `<element>` and ::pseudo-element, `*` selector, browser defaults
1. inherited styles

__Where do combinators (Eg multiple selectors) go in this list?__

Conflicts are resolved by looking at the order in file, where last style wins.  Eg if you an element has both a `.class` and an `[attribute]` with styles, then the last one in the file will win.

# Performance
* ID selector and class selector 
* ... 
* certain combinators?
* `*` selector

# Box Model
From inside to outside:
* content - the data to display within an HTML element.
* padding - "inside" space between the data and the element border.
* border - surrounds an element
* margin - "outside" space between the element and the rest of the DOM.

# Margin Collapsing
  The top and bottom margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal), a behavior known as margin collapsing. Note that the margins of floating and absolutely positioned elements never collapse.

From https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing

# Shorthand properties
* Border: width style color, Eg 2px dashed orange
* Margin: top right bottom left, Eg 5px 10px 5px 10px 
* Margin: top & bottom left & right, Eg 5px 10px
* Margin: all, Eg 8px

# Height and Width
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

# Box Sizing
By default, Height and Width set the dimensions of the content, with padding, border and margin being additive to the total size of the area.  This is called _content_box_ sizing.

You can change this via `box-sizing` style. 

# Display Property
* none: element is not visible but present in the DOM.  It does not block a position in the layout.
* block
* inline
* inline-block: render like an inline element (Ie next to adjacent elements) with additional box properties like x-top, x-bottom and width, height available.

There is also `visibility: none` which will hide the element but the element will continue to block it's position in the layout.

**Inline Block is sensative to whitespace in HTML source** 

# Pseudo Things
Classes - `:class_name` - define a style for a _specific state_ of an element, Eg hover, read-only, first-child, not.
Element - `::element_name` - define a style for a _specific part_ of an element, Eg before, after, first-letter.  [Pseudo-elements act as if you had added a whole new element to the DOM, and enable you to style that.](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements#summary)

# Tricks
* Set all parent elements to `width: 100%;` to allow child element to have a specific height.
* Set left/right margin to auto `margin: 0 auto;` to center an element horizontally.  This does not work for vertical alignment.
* Create circle by setting `height` and `width` to the same value and `border-radius: 50%`

# Positioning
Applies to block and inline elements.

How should the element be positioned?
* static (default)
* absolute
* relative
* fixed (remove from document flow)
* sticky

Where should the element be placed relative to a context?
* top
* right
* bottom
* left

What is the position context?
* viewport (default for non-static position values)

## z-index
* Will not take effect unless you've changed position property to a non-default value.
* When there are multiple items with same z-index, the last element in the HTML file wins, and goes on top.

## Fixed
Element is taken out of the document flow.

* Without top/right/bottom/left the element is positioned relative to it's parent element.
* With top/right/bottom/left the elelement is positioned relative to the viewport.

## Absolute
Element is taken out of the document flow.

* If no ancestors have a position applied, then the position context is the HTML element itself.
* If ancestors have a position applied, then the position context is the closest ancestor with a position property.

## Relative
Element remains in the document flow.

* Positioning context is the element itself.
* Top/right/bottom/left adjusts relative to where the element's current position.

__Problem__: You can move the element outside of it's parent element.  Use `overflow: hidden;` in the parent element to ensure the element is not displayed when it goes outside the bounds of parent.  __Caveat__: you cannot apply `overflow: hidden;` to `<body>` as the default behavior in CSS says that it will instead be applied to `<html>`, which will ensure any child-elements of body will NOT be hidden.  To get around this: apply `overflow: hidden;` or `overflow: auto;` to `<html>` and apply `overflow: hidden;` to `<body>`.

## Sticky
Hybrid of `relative` and `fixed`.

* The element starts as `relative` when there are no distances set.
* If you set a distance, it is between the viewport and the element.  Once that distance is reached, the element behaves as fixed.
* If the element goes outside of its parent content area then it becomes hidden.

## Stacking Context

If a parent has a z-index value defined, then child element z-index values will be contained within the parent.  That means no matter the child z-index value is, the child will not go below or above the parent z-index.

In this example, `headline` has a z-index value, and `image-2` has a z-index value.  `image-2` cannot be below `headline` or above `contact-us` without making adjustments to its parent z-index value first.

![Stacking Context Example](notes-stacking-context.png)

