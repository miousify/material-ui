(window.webpackJsonp=window.webpackJsonp||[]).push([["faab"],{PAFn:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return r});var a=t("mXGw"),s=t.n(a),o=t("e+1t"),p=t("mYGn"),i=t.n(p),l=s.a.createElement(o.a,{markdown:i.a});function r(){return l}},d6iT:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api/skeleton",function(){var e=t("PAFn");return{page:e.default||e}}])},mYGn:function(e,n){e.exports='---\nfilename: /packages/material-ui-lab/src/Skeleton/Skeleton.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# Skeleton API\n\n<p class="description">The API documentation of the Skeleton React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport Skeleton from \'@material-ui/lab/Skeleton\';\n// or\nimport { Skeleton } from \'@material-ui/lab\';\n```\n\nYou can learn more about the difference by [reading our guide](/guides/minimizing-bundle-size/).\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">classes</span> | <span class="prop-type">object</span> |  | Override or extend the styles applied to the component. See [CSS API](#css) below for more details. |\n| <span class="prop-name">component</span> | <span class="prop-type">elementType</span> | <span class="prop-default">\'div\'</span> | The component used for the root node. Either a string to use a DOM element or a component. |\n| <span class="prop-name">disableAnimate</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true` the animation effect is disabled. |\n| <span class="prop-name">height</span> | <span class="prop-type">number<br>&#124;&nbsp;string</span> |  | Height of the skeleton. Useful when you don\'t want to adapt the skeleton to a text element but for instance a card. |\n| <span class="prop-name">variant</span> | <span class="prop-type">\'text\'<br>&#124;&nbsp;\'rect\'<br>&#124;&nbsp;\'circle\'</span> | <span class="prop-default">\'text\'</span> | The type of content that will be rendered. |\n| <span class="prop-name">width</span> | <span class="prop-type">number<br>&#124;&nbsp;string</span> |  | Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element (native element).\n\n## CSS\n\n- Style sheet name: `MuiSkeleton`.\n- Style sheet details:\n\n| Rule name | Global class | Description |\n|:-----|:-------------|:------------|\n| <span class="prop-name">root</span> | <span class="prop-name">MuiSkeleton-root</span> | Styles applied to the root element.\n| <span class="prop-name">text</span> | <span class="prop-name">MuiSkeleton-text</span> | Styles applied to the root element if `variant="text"`.\n| <span class="prop-name">rect</span> | <span class="prop-name">MuiSkeleton-rect</span> | Styles applied to the root element if `variant="rect"`.\n| <span class="prop-name">circle</span> | <span class="prop-name">MuiSkeleton-circle</span> | Styles applied to the root element if `variant="circle"`.\n| <span class="prop-name">animate</span> | <span class="prop-name">MuiSkeleton-animate</span> | Styles applied to the root element if `disabledAnimate={false}`.\n\nYou can override the style of the component thanks to one of these customization points:\n\n- With a rule name of the [`classes` object prop](/customization/components/#overriding-styles-with-classes).\n- With a [global class name](/customization/components/#overriding-styles-with-global-class-names).\n- With a theme and an [`overrides` property](/customization/globals/#css).\n\nIf that\'s not sufficient, you can check the [implementation of the component](https://github.com/mui-org/material-ui/blob/master/packages/material-ui-lab/src/Skeleton/Skeleton.js) for more detail.\n\n## Demos\n\n- [Skeleton](/components/skeleton/)\n\n'}},[["d6iT","5d41","9da1"]]]);