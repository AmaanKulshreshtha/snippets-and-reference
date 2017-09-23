### Fun exercise : [flexfroggy](http://flexboxfroggy.com/)
---
**```justify-content```** property aligns items **horizontally** and accepts the following values:

- ```flex-start```: Items align to the left side of the container.
- ```flex-end```: Items align to the right side of the container.
- ```center```: Items align at the center of the container.
- ```space-between```: Items display with equal spacing between them.
- ```space-around```: Items display with equal spacing around them.

For example: 

```css
#block {
  display: flex;
  /* brings the block element to the right side of the container */
  justify-content: flex-end;
}
```
--- 
 **```align-items```** property aligns items **vertically** and accepts the following values:

- ```flex-start```: Items align to the top of the container.
- ```flex-end```: Items align to the bottom of the container.
- ```center```: Items align at the vertical center of the container.
- ```baseline```: Items display at the baseline of the container.
- ```stretch```: Items are stretched to fit the container.

For example: 

```css
#block {
  display: flex;
  /* brings the block element to the bottom of the container */
  align-items: flex-end;
}
```
---
 **``flex-direction``** property defines the direction items are placed in the container, and accepts the following values:

- ```row```: Items are placed the same as the text direction.
- ```row-reverse```: Items are placed opposite to the text direction.
- ```column```: Items are placed top to bottom.
- ```column-reverse```: Items are placed bottom to top.

```css
#block {
  display: flex;
  /* blocks will be placed top to bottom */
  flex-direction: column;
}
```
---
**``order``**, applied to individual items. This property accepts intergers to order the elements.

By default, items have a value of 0, but we can use this property to set it to a positive or negative integer value.

for example:
```css
#pond {
  display: flex;
}

.yellow {
  order: 1; 
}
```
---
**``align-self``**, applied to individual items. This property accepts the same values as align-items and its value for the specific item.

for example:
```css
#pond {
  display: flex;
  align-items: flex-start;
}

.yellow {
  align-self: flex-end;
}
```


