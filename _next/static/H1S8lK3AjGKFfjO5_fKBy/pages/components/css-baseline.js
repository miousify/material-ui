(window.webpackJsonp=window.webpackJsonp||[]).push([["baa6"],{"7Dsm":function(e,n,t){var a={"./css-baseline-aa.md":"ltyz","./css-baseline-de.md":"jLXK","./css-baseline-es.md":"SQVO","./css-baseline-fr.md":"E2mr","./css-baseline-ja.md":"X2Qg","./css-baseline-pt.md":"MKSQ","./css-baseline-ru.md":"cCgO","./css-baseline-zh.md":"IDRJ","./css-baseline.md":"ApKk"};function o(e){var n=r(e);return t(n)}function r(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="7Dsm"},ApKk:function(e,n){e.exports="---\ncomponents: CssBaseline\n---\n\n# CSS Baseline\n\n<p class=\"description\">Material-UI provides a CssBaseline component to kickstart an elegant, consistent, and simple baseline to build upon.</p>\n\nYou might be familiar with [normalize.css](https://github.com/necolas/normalize.css), a collection of HTML element and attribute style-normalizations.\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nfunction MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n}\n\nexport default MyApp;\n```\n\n## Approach\n\n### Page\n\nThe `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:\n\n- The margin in all browsers is removed.\n- The default Material Design background color is applied.\nIt's using [`theme.palette.background.default`](/customization/default-theme/?expend-path=$.palette.background) for standard devices and a white background for print devices.\n\n### Layout\n\n- `box-sizing` is set globally on the `<html>` element to `border-box`.\nEvery element—including `*::before` and `*::after` are declared to inherit this property,\nwhich ensures that the declared width of the element is never exceeded due to padding or border.\n\n### Typography\n\n- No base font-size is declared on the `<html>`, but 16px is assumed (the browser default).\nYou can learn more about the implications of changing the `<html>` default font size in [the theme documentation](/customization/typography/#typography-html-font-size) page.\n- Set the `theme.typography.body2` style on the `<body>` element.\n- Set the font-weight to \"bolder\" for the `<b>` and `<strong>` elements.\n  Bolder is one font weight heavier than the parent element (among the available weights of the font).\n- Font antialiasing is enabled for better display of the Roboto font.\n"},E2mr:function(e,n){e.exports="---\ncomponents: CssBaseline\n---\n\n# Principes CSS\n\n<p class=\"description\">Material-UI fournit un composant CssBaseline pour relancer une base élégante, cohérente et simple sur laquelle s'appuyer.</p>\n\nVous connaissez peut-être [normalize.css](https://github.com/necolas/normalize.css), une collection d'éléments HTML et de normalisations de style d'attributs.\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nfunction MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n}\n\nexport default MyApp;\n```\n\n## Approche\n\n### Page\n\nThe `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:\n\n- La marge dans tous les navigateurs est supprimée.\n- La couleur d'arrière-plan par défaut de Material Design est appliquée. Ceci est réalisé à l'aide de [`thème.la palette.arrière-plan.par défaut`](/customization/default-theme/?expend-path=$.palette.background) pour les appareils standard et un fond blanc pour les périphériques d'impression.\n\n### Disposition\n\n- la taille de la boîte `box-sizing` est définie globalement sur l'élément `<html>` à `border-box`. Chaque élément, y compris `* :: before` et `* :: after` est déclaré hériter de cette propriété, ce qui garantit que la largeur déclarée de l'élément n'est jamais dépassée en raison d'un remplissage ou d'une bordure.\n\n### Typographie\n\n- Aucune taille de police de base n’est déclarée sur le `<html>`, mais 16px est utilisée (valeur par défaut du navigateur). Vous pouvez en apprendre davantage sur les implications de l' évolution du `<html>` taille de la police par défaut dans [la documentation abordant les thèmes](/customization/typography/#typography-html-font-size) page.\n- Set the `theme.typography.body2` style on the `<body>` element.\n- Set the font-weight to \"bolder\" for the `<b>` and `<strong>` elements. Bolder is one font weight heavier than the parent element (among the available weights of the font).\n- L'anticrénelage des polices est activé pour un meilleur affichage de la police Roboto."},EsWm:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id="EsWm"},IDRJ:function(e,n){e.exports="---\ncomponents: CssBaseline\n---\n\n# CSS 基线\n\n<p class=\"description\">Material-UI 提供了一个 CssBaseline 组件, 用于启动一个优雅、一致且简单的基线。</p>\n\n您可能熟悉 [normailize.css](https://github.com/necolas/normalize.css), 一个HTML 元素和属性样式规范化的集合。\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nfunction MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n}\n\nexport default MyApp;\n```\n\n## 方法\n\n### 页面\n\n`<html>` 和 `<body>` 元素将更新以提供更好的页面范围的默认设置。 更具体地说：\n\n- 删除所有浏览器中的边距。\n- 默认使用Material Design的背景颜色。 它使用 [`theme.palette.background.default`](/customization/default-theme/?expend-path=$.palette.background) 在标准设备上而在打印设备上使用白色背景。\n\n### 布局\n\n- `box-sizing` 在 `<html>` 元素上全局设置为 `border-box`。 每个元素 包括 `*:: before` 和 `*:: after` 被声明去继承这个属性，它确保元素的声明宽度永远不会超过padding或者border。\n\n### Typography（文字排版）\n\n- 没有声明基础font-size在`<html>`上，但是假定是16px (浏览器的默认设置)。 您可以了解更多有关更改 `<html>` 默认字体大小的含义 [主题文档](/customization/typography/#typography-html-font-size) 页。\n- 在 `theme.typography.body2` 元素上设置 `<body>` 样式。\n- 将 `<b>` 和 `<strong>` 元素的font-weight属性设置为“bolder”。 Bolder是其中一种比父元素粗的字体(在字体可用权重中)。\n- 字体抗锯齿功能可以更好地显示Roboto字体"},LDDR:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var a=t("mXGw"),o=t.n(a),r=t("e+1t"),s=t("7Dsm"),i=t("EsWm"),l=o.a.createElement(r.a,{req:s,reqSource:i,reqPrefix:"pages/components/css-baseline"});function d(){return l}},MKSQ:function(e,n){e.exports="---\ncomponents: CssBaseline\n---\n\n# CSS Baseline\n\n<p class=\"description\">Material-UI oferece um componente CSS Base a fim de inciar uma elegante, consistente e simples base para construir sobre.</p>\n\nVocê já deve estar familiarizado com [normalize.css](https://github.com/necolas/normalize.css), uma coleção de elementos HTML e normas de atributos de estilo.\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nfunction MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* O resto de sua aplicação */}\n    </React.Fragment>\n  );\n}\n\nexport default MyApp;\n```\n\n## Abordagem\n\n### Página\n\nOs elementos `<html>` e `<body>` são atualizados para fornecer melhores padrões para toda a página. Mais especificamente:\n\n- The margin in all browsers is removed.\n- A cor de fundo padrão do material design é aplicada. Isto usando [`theme.palette.background.default`](/customization/default-theme/?expend-path=$.palette.background) para dispositivos padrão e um fundo branco para dispositivos de impressão.\n\n### Leiaute\n\n- `box-sizing` é definido globalmente no elemento `<html>` para `border-box`. Todos elementos —incluindo `*::before` e `*::after` são declarados para herdar essa propriedade, que garante que a largura declarada do elemento nunca seja excedida devido ao preenchimento da borda.\n\n### Tipografia\n\n- Nenhum tamanho de fonte base é declarado no `<html>`, mas 16px é assumido (o padrão do navegador). Você pode aprender mais sobre as implicações da mudança do padrão de tamanho de fonte do `<html>` na página de [documentação de tema](/customization/typography/#typography-html-font-size).\n- Defina o estilo `theme.typography.body2` no elemento `<body>`.\n- Defina o font-weight como \"bolder\" para os elementos `<b>` e `<strong>`. Bolder é um font-weight mais pesado que o elemento pai (entre os pesos disponíveis da fonte).\n- O antialiasing de fonte é habilitado para melhorar a exibição da fonte Roboto."},SQVO:function(e,n){e.exports="---\ncomponents: CssBaseline\n---\n\n# Base de CSS\n\n<p class=\"description\">Material-UI provee un componente llamado CssBaseline como un punto de partida elegante, simple y consistente para empezar a desarrollar.</p>\n\nTal vez tengas familiaridad con [normalize.css](https://github.com/necolas/normalize.css), una colección de atributos de estilos normalizados para elementos HTML.\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nfunction MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* El resto de tu aplicación */}\n    </React.Fragment>\n  );\n}\n\nexport default MyApp;\n```\n\n## Enfoque\n\n### Página\n\nThe `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:\n\n- Se elimina el margen en todos los navegadores.\n- Se aplica el color de fondo predeterminado de Material Design. Utiliza [`theme.palette.background.default`](/customization/default-theme/?expend-path=$.palette.background) para dispositivos estándares y un fondo blanco para dispositivos de impresión.\n\n### Disposición\n\n- La propiedad `box-sizing` se establece globalmente en el elemento `<html>` con el valor `border-box`. Cada elemento, incluyendo `*::before` y `*::after`, es declarado para heredar ésta propiedad, la cual asegura que el ancho declarado del elemento nunca sea excedido gracias al relleno o al borde.\n\n### Tipografía\n\n- No se declara ningún tamaño de fuente de base en el elemento `<html>`, pero se asume 16px (el valor predeterminado del navegador). Puedes aprender más acerca de las implicaciones de cambiar el tamaño de fuente predeterminado de `<html>`, en la página [de documentación del tema](/customization/typography/#typography-html-font-size).\n- Set the `theme.typography.body2` style on the `<body>` element.\n- Set the font-weight to \"bolder\" for the `<b>` and `<strong>` elements. Bolder is one font weight heavier than the parent element (among the available weights of the font).\n- El antialiasing de fuentes está habilitado para una mejor visualización de la fuente Roboto."},X2Qg:function(e,n){e.exports="---\ncomponents: CssBaseline\n---\n\n# CSSベースライン\n\n<p class=\"description\">Material-UIはCssBaselineコンポーネントを提供することで、エレガントで一貫性のあるシンプルなベースラインを構築します。</p>\n\n貴方はもしかしたら、HTMLの要素と属性のスタイル正規化のコレクションである [normalize.css](https://github.com/necolas/normalize.css)精通しているかもしれません。\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nfunction MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n```\n\n## アプローチ\n\n### ページ\n\n`<html>` および `<body>` 要素は、ページ全体のデフォルトが改善されるように更新されています。 具体的には:\n\n- すべてのブラウザの余白が削除されています。\n- デフォルトのマテリアルデザインの背景色が適用されます。 標準のデバイスや、白背景に印刷されたデバイスの為に[`theme.palette.background.default`](/customization/default-theme/?expend-path=$.palette.background) が使われています。\n\n### レイアウト\n\n- `ボックスサイズ` は、 `<html>` 要素で `border-box`グローバルに設定されます。 すべての要素（ `*:: before` および `*:: after` を含む）は、このプロパティを継承するように宣言されています は、要素の宣言された幅がパディングまたは境界のために超過しないことを保証されます。\n\n### タイポグラフィ\n\n- `<html>`には基本フォントサイズは宣言されていませんが、16pxが想定されています（ブラウザのデフォルト）。 デフォルトのフォントサイズの`<html>`を変更した場合の影響については、ここをクリックしてください。[the theme documentation](/customization/typography/#typography-html-font-size)\n- `<body>` 要素に `theme.typography.body2` スタイルを設定します。\n- `<b>` および `<strong>` 要素のfont-weightを「bolder」に設定します。 Bolderは、親要素よりも重いフォントの重みです（使用可能なフォントの重みの中で）。\n- Robotoフォントを見やすくするために、フォントのアンチエイリアスが有効になります。"},aGzB:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/css-baseline",function(){var e=t("LDDR");return{page:e.default||e}}])},cCgO:function(e,n){e.exports="---\ncomponents: CssBaseline\n---\n\n# CSS Baseline\n\n<p class=\"description\">Material-UI предоставляет компонент CssBaseline, чтобы создать элегантную, согласованную и простую основу для построения.</p>\n\nYou might be familiar with [normalize.css](https://github.com/necolas/normalize.css), a collection of HTML element and attribute style-normalizations.\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nfunction MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* The rest of your application */}\n    </React.Fragment>\n  );\n}\n\nexport default MyApp;\n```\n\n## Approach\n\n### Page\n\nThe `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:\n\n- The margin in all browsers is removed.\n- The default Material Design background color is applied. It's using [`theme.palette.background.default`](/customization/default-theme/?expend-path=$.palette.background) for standard devices and a white background for print devices.\n\n### Расположение\n\n- `box-sizing` is set globally on the `<html>` element to `border-box`. Every element—including `*::before` and `*::after` are declared to inherit this property, which ensures that the declared width of the element is never exceeded due to padding or border.\n\n### Оформление текста\n\n- No base font-size is declared on the `<html>`, but 16px is assumed (the browser default). You can learn more about the implications of changing the `<html>` default font size in [the theme documentation](/customization/typography/#typography-html-font-size) page.\n- Set the `theme.typography.body2` style on the `<body>` element.\n- Set the font-weight to \"bolder\" for the `<b>` and `<strong>` elements. Bolder is one font weight heavier than the parent element (among the available weights of the font).\n- Font antialiasing is enabled for better display of the Roboto font."},jLXK:function(e,n){e.exports="---\ncomponents: CssBaseline\n---\n\n# CSS-Baseline\n\n<p class=\"description\">Die Material-UI bietet eine CssBaseline-Komponente, um eine elegante, konsistente und einfache Basis zu schaffen, auf der aufgebaut werden kann.</p>\n\nMöglicherweise kennen Sie [normalize.css](https://github.com/necolas/normalize.css), eine Sammlung von HTML-Element- und Attributstil-Normalisierungen.\n\n```jsx\nimport React from 'react';\nimport CssBaseline from '@material-ui/core/CssBaseline';\n\nfunction MyApp() {\n  return (\n    <React.Fragment>\n      <CssBaseline />\n      {/* Der Rest deiner Applikation */}\n    </React.Fragment>\n  );\n}\n\nexport default MyApp;\n```\n\n## Ansatz\n\n### Seite\n\nThe `<html>` and `<body>` elements are updated to provide better page-wide defaults. More specifically:\n\n- Der Rand in allen Browsern wird entfernt.\n- Die Standardhintergrundfarbe des Materialdesigns wird angewendet. Es verwendet [`theme.palette.background.default`](/customization/default-theme/?expend-path=$.palette.background) für Standardgeräte und einen weißen Hintergrund für Druckgeräte.\n\n### Layout\n\n- `box-sizing` wird global auf dem `<html>` Element auf `border-box` gesetzt. Jedes Element, einschließlich `*::before` und `*::after` erbt dieser Eigenschaft. Dadurch wird sichergestellt, dass die deklarierte Breite des Elements niemals durch Auffüllung oder Rand überschritten wird.\n\n### Typografie\n\n- Für das `<html>`-Element wird keine Basisschriftgröße deklariert, es wird jedoch von 16px ausgegangen (Standardeinstellung des Browsers). Sie können mehr über die Auswirkungen lernen von den sich ändernden `<html>` Standard - Schriftgröße auf [der Theme Dokumentation](/customization/typography/#typography-html-font-size) Seite.\n- Set the `theme.typography.body2` style on the `<body>` element.\n- Set the font-weight to \"bolder\" for the `<b>` and `<strong>` elements. Bolder is one font weight heavier than the parent element (among the available weights of the font).\n- Das Antialiasing von Schriftarten ist aktiviert, um die Roboto-Schrift besser anzuzeigen."},ltyz:function(e,n){e.exports='---\ncomponents: crwdns89896:0crwdne89896:0\n---\n\n# crwdns89898:0crwdne89898:0\n\n<p class="description">crwdns89900:0crwdne89900:0</p>\n\ncrwdns89902:0crwdne89902:0\n\n```jsx\ncrwdns89904:0crwdne89904:0\n```\n\n## crwdns89906:0crwdne89906:0\n\n### crwdns89908:0crwdne89908:0\n\ncrwdns89910:0crwdne89910:0 crwdns89912:0crwdne89912:0\n\n- crwdns89914:0crwdne89914:0\n- crwdns89916:0crwdne89916:0 crwdns89918:0crwdne89918:0\n\n### crwdns89920:0crwdne89920:0\n\n- crwdns89922:0crwdne89922:0 crwdns89924:0crwdne89924:0\n\n### crwdns89926:0crwdne89926:0\n\n- crwdns89928:0crwdne89928:0 crwdns89930:0crwdne89930:0\n- crwdns89932:0crwdne89932:0\n- crwdns89934:0crwdne89934:0 crwdns89936:0crwdne89936:0\n- crwdns89938:0crwdne89938:0'}},[["aGzB","5d41","9da1"]]]);