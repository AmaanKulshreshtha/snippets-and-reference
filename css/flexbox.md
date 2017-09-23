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
