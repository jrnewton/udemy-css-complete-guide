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
