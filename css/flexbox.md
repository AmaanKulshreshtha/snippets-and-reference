## Fun exercise : [flexfroggy](http://flexboxfroggy.com/)
## More info: [mozilla flexbox layout docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
---
**```justify-content```** property aligns items ~~horizontally~~ **along the main axis** and accepts the following values:

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
 **```align-items```** property aligns items ~~vertically~~ **along the cross axis** and accepts the following values:

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
**``align-self``**, applied to individual items. This property defines how a single flex item is aligned on the **cross axis**, and overrides the default established by align-items.

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
---
**``flex-wrap``** property, wraps elements so they don't look squished 😜. It  accepts the following values:

- ```nowrap```: Every item is fit to a single line.
- ```wrap```: Items wrap around to additional lines.
- ```wrap-reverse```: Items wrap around to additional lines in reverse.

for example:
```css
#pond {
  display: flex;
  flex-wrap: wrap;
}
```
---
**``flex-flow``**, shorthand property for:
```css
.block {
  flex-flow: <flex-direction> <flex-wrap>;
}
```
---
**``align-content``**, set how *multiple lines* are spaced apart from each other. This property takes the following values:

- ```flex-start```: Lines are packed at the top of the container.
- ```flex-end```: Lines are packed at the bottom of the container.
- ```center```: Lines are packed at the vertical center of the container.
- ```space-between```: Lines display with equal spacing between them.
- ```space-around```: Lines display with equal spacing around them.
- ```stretch```: Lines are stretched to fit the container.

*This can be confusing, but align-content determines the spacing between lines, while align-items determines how the items as a whole are aligned within the container. When there is only one line, align-content has no effect.*

For more info about differences between align-items and align-content: [see link](https://stackoverflow.com/questions/31250174/css-flexbox-difference-between-align-items-and-align-content)


