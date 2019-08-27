(window.webpackJsonp=window.webpackJsonp||[]).push([["619d"],{"3rd6":function(n,e){n.exports='---\nfilename: /packages/material-ui/src/InputAdornment/InputAdornment.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# InputAdornment API\n\n<p class="description">The API documentation of the InputAdornment React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport InputAdornment from \'@material-ui/core/InputAdornment\';\n// or\nimport { InputAdornment } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading our guide](/guides/minimizing-bundle-size/).\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name required">children&nbsp;*</span> | <span class="prop-type">node</span> |  | The content of the component, normally an `IconButton` or string. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'div\'</span> | The component used for the root node. Either a string to use a DOM element or a component. |\n| <span class="prop-name">disablePointerEvents</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Disable pointer events on the root. This allows for the content of the adornment to focus the input on click. |\n| <span class="prop-name">disableTypography</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If children is a string then disable wrapping in a Typography component. |\n| <span class="prop-name">position</span> | <span class="prop-type">\'start\'<br>&#124;&nbsp;\'end\'</span> |  | The position this adornment should appear relative to the `Input`. |\n| <span class="prop-name">variant</span> | <span class="prop-type">\'standard\'<br>&#124;&nbsp;\'outlined\'<br>&#124;&nbsp;\'filled\'</span> |  | The variant to use. Note: If you are using the `TextField` component or the `FormControl` component you do not have to set this manually. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n- Style sheet name: `MuiInputAdornment`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">MuiInputAdornment-root</span> | Styles applied to the root element.\n| <span class="prop-name">filled</span> | <span class="prop-name">MuiInputAdornment-filled</span> | Styles applied to the root element if `variant="filled"`.\n| <span class="prop-name">positionStart</span> | <span class="prop-name">MuiInputAdornment-positionStart</span> | Styles applied to the root element if `position="start"`.\n| <span class="prop-name">positionEnd</span> | <span class="prop-name">MuiInputAdornment-positionEnd</span> | Styles applied to the root element if `position="end"`.\n| <span class="prop-name">disablePointerEvents</span> | <span class="prop-name">MuiInputAdornment-disablePointerEvents</span> | Styles applied to the root element if `disablePointerEvents=true`.\n| <span class="prop-name">hiddenLabel</span> | <span class="prop-name">MuiInputAdornment-hiddenLabel</span> | Styles applied if the adornment is used inside &lt;FormControl hiddenLabel />.\n| <span class="prop-name">marginDense</span> | <span class="prop-name">MuiInputAdornment-marginDense</span> | Styles applied if the adornment is used inside &lt;FormControl margin="dense" />.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/InputAdornment/InputAdornment.js) for more detail.\n\n## Demos\n\n- [Text Fields](/components/text-fields/)\n\n'},qdxy:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api/input-adornment",function(){var n=t("st4/");return{page:n.default||n}}])},"st4/":function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return l});var o=t("mXGw"),s=t.n(o),a=t("e+1t"),p=t("3rd6"),r=t.n(p),i=s.a.createElement(a.a,{markdown:r.a});function l(){return i}}},[["qdxy","5d41","9da1"]]]);