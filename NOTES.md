My notes from the course.

# Section 2
## General Terms

- Serif: extending features at the end of strokes

## Selectors

### Universal 
```
<style>
  * { ... }
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
## Specificity

Look at element's style in dev tools, listed from most specific (top) to least specific (bottom).

* inline style (labeled `element.style` in devtools)
* `#ID`
* `.class`, `:pseudo-class` and `[attribute]`
* `<element>` and ::pseudo-element, `*` selector, browser defaults
* inherited styles

Conflicts are resolved by looking at the order in file, where last style wins.  Eg if you an element has both a `.class` and an `[attribute]` with styles, then the last one in the file will win.