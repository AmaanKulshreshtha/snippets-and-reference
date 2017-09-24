### Resource : [learnlayout](http://learnlayout.com)

---

**``box-sizing``** property, set ```box-sizing: border-box;``` on an element so the padding and border of that element no longer increase its width.

*this works on IE8+*

For example:

```css
/*these 2 classes will have the same size on screen even though one has paddings, etc.*/

.simple {
  width: 500px;
  margin: 20px auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

.fancy {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border: solid blue 10px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
```

Because of its ease of use compared to the css box model, most devs set it globally:

```css
* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
```
