(window.webpackJsonp=window.webpackJsonp||[]).push([["4590"],{En3v:function(e,n){e.exports='---\nfilename: /packages/material-ui/src/Popper/Popper.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Popper API\n\n<p class="description">The API documentation of the Popper React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Popper from \'@material-ui/core/Popper\';\n// or\nimport { Popper } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading our guide](/guides/minimizing-bundle-size/).\n\nPoppers rely on the 3rd party library [Popper.js](https://github.com/FezVrasta/popper.js) for positioning.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">anchorEl</span> | <span class="prop-type">object<br>&#124;&nbsp;func</span> |  | This is the reference element, or a function that returns the reference element, that may be used to set the position of the popover. The return value will passed as the reference object of the Popper instance.<br>The reference element should be an HTML Element instance or a referenceObject: https://popper.js.org/popper-documentation.html#referenceObject. |\n| <span class="prop-name required">children&nbsp;*</span> | <span class="prop-type">node<br>&#124;&nbsp;func</span> |  | Popper render function or node. |\n| <span class="prop-name">container</span> | <span class="prop-type">object<br>&#124;&nbsp;func</span> |  | A node, component instance, or function that returns either. The `container` will passed to the Modal component. By default, it uses the body of the anchorEl\'s top-level document object, so it\'s simply `document.body` most of the time. |\n| <span class="prop-name">disablePortal</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Disable the portal behavior. The children stay within it\'s parent DOM hierarchy. |\n| <span class="prop-name">keepMounted</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Always keep the children in the DOM. This prop can be useful in SEO situation or when you want to maximize the responsiveness of the Popper. |\n| <span class="prop-name">modifiers</span> | <span class="prop-type">object</span> |  | Popper.js is based on a "plugin-like" architecture, most of its features are fully encapsulated "modifiers".<br>A modifier is a function that is called each time Popper.js needs to compute the position of the popper. For this reason, modifiers should be very performant to avoid bottlenecks. To learn how to create a modifier, [read the modifiers documentation](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifiers--object). |\n| <span class="prop-name required">open&nbsp;*</span> | <span class="prop-type">bool</span> |  | If `true`, the popper is visible. |\n| <span class="prop-name">placement</span> | <span class="prop-type">\'bottom-end\'<br>&#124;&nbsp;\'bottom-start\'<br>&#124;&nbsp;\'bottom\'<br>&#124;&nbsp;\'left-end\'<br>&#124;&nbsp;\'left-start\'<br>&#124;&nbsp;\'left\'<br>&#124;&nbsp;\'right-end\'<br>&#124;&nbsp;\'right-start\'<br>&#124;&nbsp;\'right\'<br>&#124;&nbsp;\'top-end\'<br>&#124;&nbsp;\'top-start\'<br>&#124;&nbsp;\'top\'</span> | <span class="prop-default">\'bottom\'</span> | Popper placement. |\n| <span class="prop-name">popperOptions</span> | <span class="prop-type">object</span> | <span class="prop-default">{}</span> | Options provided to the [`popper.js`](https://github.com/FezVrasta/popper.js) instance. |\n| <span class="prop-name">popperRef</span> | <span class="prop-type">func<br>&#124;&nbsp;object</span> |  | Callback fired when a new popper instance is used. |\n| <span class="prop-name">transition</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Help supporting a react-transition-group/Transition component. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## Demos\n\n- [Autocomplete](/components/autocomplete/)\n- [Menus](/components/menus/)\n- [Popper](/components/popper/)\n\n'},Ihg3:function(e,n,p){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api/popper",function(){var e=p("t4Ba");return{page:e.default||e}}])},t4Ba:function(e,n,p){"use strict";p.r(n),p.d(n,"default",function(){return c});var o=p("mXGw"),s=p.n(o),t=p("e+1t"),a=p("En3v"),r=p.n(a),i=s.a.createElement(t.a,{markdown:r.a});function c(){return i}}},[["Ihg3","5d41","9da1"]]]);