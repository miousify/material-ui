(window.webpackJsonp=window.webpackJsonp||[]).push([["4645"],{eJEU:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api/menu-item",function(){var e=t("rRTU");return{page:e.default||e}}])},rRTU:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return l});var s=t("mXGw"),a=t.n(s),o=t("e+1t"),p=t("tYA4"),i=t.n(p),r=a.a.createElement(o.a,{markdown:i.a});function l(){return r}},tYA4:function(e,n){e.exports='---\nfilename: /packages/material-ui/src/MenuItem/MenuItem.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# MenuItem API\n\n<p class="description">The API documentation of the MenuItem React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport MenuItem from \'@material-ui/core/MenuItem\';\n// or\nimport { MenuItem } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading our guide](/guides/minimizing-bundle-size/).\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | Menu item contents. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'li\'</span> | The component used for the root node. Either a string to use a DOM element or a component. |\n| <span class="prop-name">dense</span> | <span class="prop-type">bool</span> |  | If `true`, compact vertical padding designed for keyboard and mouse input will be used. |\n| <span class="prop-name">disableGutters</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the left and right padding is removed. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element ([ListItem](/api/list-item/)).\n\n## CSS\n\n- Style sheet name: `MuiMenuItem`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">MuiMenuItem-root</span> | Styles applied to the root element.\n| <span class="prop-name">gutters</span> | <span class="prop-name">MuiMenuItem-gutters</span> | Styles applied to the root element if `disableGutters={false}`.\n| <span class="prop-name">selected</span> | <span class="prop-name">Mui-selected</span> | Styles applied to the root element if `selected={true}`.\n| <span class="prop-name">dense</span> | <span class="prop-name">MuiMenuItem-dense</span> | Styles applied to the root element if dense.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/MenuItem/MenuItem.js) for more detail.\n\n## Inheritance\n\nThe props of the [ListItem](/api/list-item/) component are also available.\nYou can take advantage of this behavior to [target nested components](/guides/api/#spread).\n\n## Demos\n\n- [Autocomplete](/components/autocomplete/)\n- [Menus](/components/menus/)\n\n'}},[["eJEU","5d41","9da1"]]]);