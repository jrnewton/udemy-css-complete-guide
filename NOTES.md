My notes from the course.

# Section 2
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