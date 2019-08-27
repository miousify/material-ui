(window.webpackJsonp=window.webpackJsonp||[]).push([["4593"],{"/gb1":function(n,e,a){"use strict";a.r(e),a.d(e,"default",function(){return l});var s=a("mXGw"),p=a.n(s),t=a("e+1t"),o=a("cGdt"),r=a.n(o),i=p.a.createElement(t.a,{markdown:r.a});function l(){return i}},cGdt:function(n,e){n.exports='---\nfilename: /packages/material-ui/src/Menu/Menu.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Menu API\n\n<p class="description">The API documentation of the Menu React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Menu from \'@material-ui/core/Menu\';\n// or\nimport { Menu } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading our guide](/guides/minimizing-bundle-size/).\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">anchorEl</span> | <span class="prop-type">object<br>&#124;&nbsp;func</span> |  | The DOM element used to set the position of the menu. |\n| <span class="prop-name">autoFocus</span> | <span class="prop-type">bool</span> |  | If `true` (default), the menu list (possibly a particular item depending on the menu variant) will receive focus on open. |\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | Menu contents, normally `MenuItem`s. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">disableAutoFocusItem</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Same as `autoFocus=false`. |\n| <span class="prop-name">MenuListProps</span> | <span class="prop-type">object</span> | <span class="prop-default">{}</span> | Props applied to the [`MenuList`](/api/menu-list/) element. |\n| <span class="prop-name">onClose</span> | <span class="prop-type">func</span> |  | Callback fired when the component requests to be closed.<br><br>**Signature:**<br>`function(event: object, reason: string) => void`<br>*event:* The event source of the callback<br>*reason:* Can be:`"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"` |\n| <span class="prop-name">onEnter</span> | <span class="prop-type">func</span> |  | Callback fired before the Menu enters. |\n| <span class="prop-name">onEntered</span> | <span class="prop-type">func</span> |  | Callback fired when the Menu has entered. |\n| <span class="prop-name">onEntering</span> | <span class="prop-type">func</span> |  | Callback fired when the Menu is entering. |\n| <span class="prop-name">onExit</span> | <span class="prop-type">func</span> |  | Callback fired before the Menu exits. |\n| <span class="prop-name">onExited</span> | <span class="prop-type">func</span> |  | Callback fired when the Menu has exited. |\n| <span class="prop-name">onExiting</span> | <span class="prop-type">func</span> |  | Callback fired when the Menu is exiting. |\n| <span class="prop-name required">open&nbsp;*</span> | <span class="prop-type">bool</span> |  | If `true`, the menu is visible. |\n| <span class="prop-name">PopoverClasses</span> | <span class="prop-type">object</span> |  | `classes` prop applied to the [`Popover`](/api/popover/) element. |\n| <span class="prop-name">transitionDuration</span> | <span class="prop-type">number<br>&#124;&nbsp;{ enter?: number, exit?: number }<br>&#124;&nbsp;\'auto\'</span> | <span class="prop-default">\'auto\'</span> | The length of the transition in `ms`, or \'auto\' |\n| <span class="prop-name">variant</span> | <span class="prop-type">\'menu\'<br>&#124;&nbsp;\'selectedMenu\'</span> | <span class="prop-default">\'selectedMenu\'</span> | The variant to use. Use `menu` to prevent selected items from impacting the initial focus and the vertical alignment relative to the anchor element. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element ([Popover](/api/popover/)).\n\n## CSS\n\n- Style sheet name: `MuiMenu`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">paper</span> | <span class="prop-name">MuiMenu-paper</span> | Styles applied to the `Paper` component.\n| <span class="prop-name">list</span> | <span class="prop-name">MuiMenu-list</span> | Styles applied to the `List` component via `MenuList`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Menu/Menu.js) for more detail.\n\n## Inheritance\n\nThe props of the [Popover](/api/popover/) component are also available.\nYou can take advantage of this behavior to [target nested components](/guides/api/#spread).\n\n## Demos\n\n- [App Bar](/components/app-bar/)\n- [Menus](/components/menus/)\n\n'},l4N6:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api/menu",function(){var n=a("/gb1");return{page:n.default||n}}])}},[["l4N6","5d41","9da1"]]]);