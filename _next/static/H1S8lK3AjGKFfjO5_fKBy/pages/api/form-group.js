(window.webpackJsonp=window.webpackJsonp||[]).push([["3461"],{"/TWa":function(o,n,e){"use strict";e.r(n),e.d(n,"default",function(){return c});var t=e("mXGw"),s=e.n(t),a=e("e+1t"),r=e("lLzj"),p=e.n(r),i=s.a.createElement(a.a,{markdown:p.a});function c(){return i}},QK9U:function(o,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api/form-group",function(){var o=e("/TWa");return{page:o.default||o}}])},lLzj:function(o,n){o.exports='---\nfilename: /packages/material-ui/src/FormGroup/FormGroup.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# FormGroup API\n\n<p class="description">The API documentation of the FormGroup React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport FormGroup from \'@material-ui/core/FormGroup\';\n// or\nimport { FormGroup } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading our guide](/guides/minimizing-bundle-size/).\n\n`FormGroup` wraps controls such as `Checkbox` and `Switch`.\nIt provides compact row layout.\nFor the `Radio`, you should be using the `RadioGroup` component instead of this one.\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">children</span> | <span class="prop-type">node</span> |  | The content of the component. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">row</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Display group of elements in a compact row. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n- Style sheet name: `MuiFormGroup`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">MuiFormGroup-root</span> | Styles applied to the root element.\n| <span class="prop-name">row</span> | <span class="prop-name">MuiFormGroup-row</span> | Styles applied to the root element if `row={true}`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/FormGroup/FormGroup.js) for more detail.\n\n## Demos\n\n- [Checkboxes](/components/checkboxes/)\n- [Switches](/components/switches/)\n\n'}},[["QK9U","5d41","9da1"]]]);