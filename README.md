Angular media
=============

Remove and include elements with media queries!


##Install
`bower install --save ngmedia`

```javascript
angular.module('myApp', ['angularMedia'])

```


```html
<div data-if-media='screen and (min-width: 600px)'>
</div>

```

Element is removed if media query is false.

##Browser support 
uses `window.matchMedia` [compatibility](http://caniuse.com/#search=matchMedia)

