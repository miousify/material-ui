(window.webpackJsonp=window.webpackJsonp||[]).push([["672b"],{"86I3":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/api/swipeable-drawer",function(){var e=a("aQ2M");return{page:e.default||e}}])},BKaB:function(e,n){e.exports='---\nfilename: /packages/material-ui/src/SwipeableDrawer/SwipeableDrawer.js\n---\n\n\x3c!--- This documentation is automatically generated, do not try to edit it. --\x3e\n\n# SwipeableDrawer API\n\n<p class="description">The API documentation of the SwipeableDrawer React component. Learn more about the props and the CSS customization points.</p>\n\n## Import\n\n```js\nimport SwipeableDrawer from \'@material-ui/core/SwipeableDrawer\';\n// or\nimport { SwipeableDrawer } from \'@material-ui/core\';\n```\n\nYou can learn more about the difference by [reading our guide](/guides/minimizing-bundle-size/).\n\n\n\n## Props\n\n| Name | Type | Default | Description |\n|:-----|:-----|:--------|:------------|\n| <span class="prop-name">disableBackdropTransition</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | Disable the backdrop transition. This can improve the FPS on low-end devices. |\n| <span class="prop-name">disableDiscovery</span> | <span class="prop-type">bool</span> | <span class="prop-default">false</span> | If `true`, touching the screen near the edge of the drawer will not slide in the drawer a bit to promote accidental discovery of the swipe gesture. |\n| <span class="prop-name">disableSwipeToOpen</span> | <span class="prop-type">bool</span> | <span class="prop-default">typeof navigator !== \'undefined\' && /iPad\\|iPhone\\|iPod/.test(navigator.userAgent)</span> | If `true`, swipe to open is disabled. This is useful in browsers where swiping triggers navigation actions. Swipe to open is disabled on iOS browsers by default. |\n| <span class="prop-name">hysteresis</span> | <span class="prop-type">number</span> | <span class="prop-default">0.55</span> | Affects how far the drawer must be opened/closed to change his state. Specified as percent (0-1) of the width of the drawer |\n| <span class="prop-name">minFlingVelocity</span> | <span class="prop-type">number</span> | <span class="prop-default">400</span> | Defines, from which (average) velocity on, the swipe is defined as complete although hysteresis isn\'t reached. Good threshold is between 250 - 1000 px/s |\n| <span class="prop-name required">onClose&nbsp;*</span> | <span class="prop-type">func</span> |  | Callback fired when the component requests to be closed.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback |\n| <span class="prop-name required">onOpen&nbsp;*</span> | <span class="prop-type">func</span> |  | Callback fired when the component requests to be opened.<br><br>**Signature:**<br>`function(event: object) => void`<br>*event:* The event source of the callback |\n| <span class="prop-name required">open&nbsp;*</span> | <span class="prop-type">bool</span> |  | If `true`, the drawer is open. |\n| <span class="prop-name">SwipeAreaProps</span> | <span class="prop-type">object</span> |  | Props applied to the swipe area element. |\n| <span class="prop-name">swipeAreaWidth</span> | <span class="prop-type">number</span> | <span class="prop-default">20</span> | The width of the left most (or right most) area in pixels where the drawer can be swiped open from. |\n| <span class="prop-name">transitionDuration</span> | <span class="prop-type">number<br>&#124;&nbsp;{ enter?: number, exit?: number }</span> | <span class="prop-default">{ enter: duration.enteringScreen, exit: duration.leavingScreen }</span> | The duration for the transition, in milliseconds. You may specify a single timeout for all transitions, or individually with an object. |\n\nThe `ref` is forwarded to the root element.\n\nAny other props supplied will be provided to the root element ([Drawer](/api/drawer/)).\n\n## Inheritance\n\nThe props of the [Drawer](/api/drawer/) component are also available.\nYou can take advantage of this behavior to [target nested components](/guides/api/#spread).\n\n## Demos\n\n- [Drawers](/components/drawers/)\n\n'},aQ2M:function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return l});var s=a("mXGw"),p=a.n(s),r=a("e+1t"),o=a("BKaB"),t=a.n(o),i=p.a.createElement(r.a,{markdown:t.a});function l(){return i}}},[["86I3","5d41","9da1"]]]);