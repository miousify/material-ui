(window.webpackJsonp=window.webpackJsonp||[]).push([["b13d"],{"/jLc":function(n,e,p){"use strict";p.r(e),p.d(e,"default",function(){return r});var a=p("mXGw"),s=p.n(a),t=p("e+1t"),o=p("NTi+"),l=p.n(o),i=s.a.createElement(t.a,{markdown:l.a});function r(){return i}},"5Qoa":function(n,e,p){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api/filled-input",function(){var n=p("/jLc");return{page:n.default||n}}])},"NTi+":function(n,e){n.exports='---\nfilename: /packages/material-ui/src/FilledInput/FilledInput.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# FilledInput API\n\n<p class="description">The API documentation of the FilledInput React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport FilledInput from \'@material-ui/core/FilledInput\';\n// or\nimport { FilledInput } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading our guide](/guides/minimizing-bundle-size/).\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">autoComplete</span> | <span class="prop-type">string</span> |  | This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it\'s more like an autofill. You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill). |\n| <span class="prop-name">autoFocus</span> | <span class="prop-type">bool</span> |  | If `true`, the `input` element will be focused during the first mount. |\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">className</span> | <span class="prop-type">string</span> |  | The CSS class name of the wrapper element. |\n| <span class="prop-name">defaultValue</span> | <span class="prop-type">any</span> |  | The default `input` element value. Use when the component is not controlled. |\n| <span class="prop-name">disabled</span> | <span class="prop-type">bool</span> |  | If `true`, the `input` element will be disabled. |\n| <span class="prop-name">disableUnderline</span> | <span class="prop-type">bool</span> |  | If `true`, the input will not have an underline. |\n| <span class="prop-name">endAdornment</span> | <span class="prop-type">node</span> |  | End `InputAdornment` for this component. |\n| <span class="prop-name">error</span> | <span class="prop-type">bool</span> |  | If `true`, the input will indicate an error. This is normally obtained via context from FormControl. |\n| <span class="prop-name">fullWidth</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, the input will take up the full width of its container. |\n| <span class="prop-name">id</span> | <span class="prop-type">string</span> |  | The id of the `input` element. |\n| <span class="prop-name">inputComponent</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'input\'</span> | The component used for the native input. Either a string to use a DOM element or a component. |\n| <span class="prop-name">inputProps</span> | <span class="prop-type">object</span> |  | [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element. |\n| <span class="prop-name">inputRef</span> | <span class="prop-type">func<br>&#124;&nbsp;object</span> |  | This prop can be used to pass a ref callback to the `input` element. |\n| <span class="prop-name">margin</span> | <span class="prop-type">\'dense\'<br>&#124;&nbsp;\'none\'</span> |  | If `dense`, will adjust vertical spacing. This is normally obtained via context from FormControl. |\n| <span class="prop-name">multiline</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, a textarea element will be rendered. |\n| <span class="prop-name">name</span> | <span class="prop-type">string</span> |  | Name attribute of the `input` element. |\n| <span class="prop-name">onChange</span> | <span class="prop-type">func</span> |  | Callback fired when the value is changed.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback. You can pull out the new value by accessing `event.target.value`. |\n| <span class="prop-name">placeholder</span> | <span class="prop-type">string</span> |  | The short hint displayed in the input before the user enters a value. |\n| <span class="prop-name">readOnly</span> | <span class="prop-type">bool</span> |  | It prevents the user from changing the value of the field (not from interacting with the field). |\n| <span class="prop-name">required</span> | <span class="prop-type">bool</span> |  | If `true`, the `input` element will be required. |\n| <span class="prop-name">rows</span> | <span class="prop-type">string<br>&#124;&nbsp;number</span> |  | Number of rows to display when multiline option is set to true. |\n| <span class="prop-name">rowsMax</span> | <span class="prop-type">string<br>&#124;&nbsp;number</span> |  | Maximum number of rows to display when multiline option is set to true. |\n| <span class="prop-name">startAdornment</span> | <span class="prop-type">node</span> |  | Start `InputAdornment` for this component. |\n| <span class="prop-name">type</span> | <span class="prop-type">string</span> | <span class="prop-default">\'text\'</span> | Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types). |\n| <span class="prop-name">value</span> | <span class="prop-type">any</span> |  | The value of the `input` element, required for a controlled component. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element ([InputBase](/api/input-base/)).\n\n## CSS\n\n- Style sheet name: `MuiFilledInput`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">MuiFilledInput-root</span> | Styles applied to the root element.\n| <span class="prop-name">underline</span> | <span class="prop-name">MuiFilledInput-underline</span> | Styles applied to the root element if `disableUnderline={false}`.\n| <span class="prop-name">focused</span> | <span class="prop-name">Mui-focused</span> | Styles applied to the root element if the component is focused.\n| <span class="prop-name">disabled</span> | <span class="prop-name">Mui-disabled</span> | Styles applied to the root element if `disabled={true}`.\n| <span class="prop-name">adornedStart</span> | <span class="prop-name">MuiFilledInput-adornedStart</span> | Styles applied to the root element if `startAdornment` is provided.\n| <span class="prop-name">adornedEnd</span> | <span class="prop-name">MuiFilledInput-adornedEnd</span> | Styles applied to the root element if `endAdornment` is provided.\n| <span class="prop-name">error</span> | <span class="prop-name">Mui-error</span> | Styles applied to the root element if `error={true}`.\n| <span class="prop-name">marginDense</span> | <span class="prop-name">MuiFilledInput-marginDense</span> | Styles applied to the `input` element if `margin="dense"`.\n| <span class="prop-name">multiline</span> | <span class="prop-name">MuiFilledInput-multiline</span> | Styles applied to the root element if `multiline={true}`.\n| <span class="prop-name">input</span> | <span class="prop-name">MuiFilledInput-input</span> | Styles applied to the `input` element.\n| <span class="prop-name">inputMarginDense</span> | <span class="prop-name">MuiFilledInput-inputMarginDense</span> | Styles applied to the `input` element if `margin="dense"`.\n| <span class="prop-name">inputHiddenLabel</span> | <span class="prop-name">MuiFilledInput-inputHiddenLabel</span> | Styles applied to the `input` if in `<FormControl hiddenLabel />`.\n| <span class="prop-name">inputSelect</span> | <span class="prop-name">MuiFilledInput-inputSelect</span> | Styles applied to the `input` element if `select={true}`.\n| <span class="prop-name">inputMultiline</span> | <span class="prop-name">MuiFilledInput-inputMultiline</span> | Styles applied to the `input` element if `multiline={true}`.\n| <span class="prop-name">inputAdornedStart</span> | <span class="prop-name">MuiFilledInput-inputAdornedStart</span> | Styles applied to the `input` element if `startAdornment` is provided.\n| <span class="prop-name">inputAdornedEnd</span> | <span class="prop-name">MuiFilledInput-inputAdornedEnd</span> | Styles applied to the `input` element if `endAdornment` is provided.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/FilledInput/FilledInput.js) for more detail.\n\n## Inheritance\n\nThe props of the [InputBase](/api/input-base/) component are also available.\nYou can take advantage of this behavior to [target nested components](/guides/api/#spread).\n\n## Demos\n\n- [Text Fields](/components/text-fields/)\n\n'}},[["5Qoa","5d41","9da1"]]]);