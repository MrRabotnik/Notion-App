// /**
//  * Copyright (c) Meta Platforms, Inc. and affiliates.
//  *
//  * This source code is licensed under the MIT license found in the
//  * LICENSE file in the root directory of this source tree.
//  *
//  */

// import {defineConfig} from 'vite';
// import react from '@vitejs/plugin-react';
// import {resolve} from 'path';
// import path from 'path';
// import fs from 'fs';
// import {replaceCodePlugin} from 'vite-plugin-replace';
// import babel from '@rollup/plugin-babel';

// const moduleResolution = [
//   {
//     find: /lexical$/,
//   },
//   {
//     find: '@lexical/clipboard',
//   },
//   {
//     find: '@lexical/selection',
//   },
//   {
//     find: '@lexical/text',
//   },
//   {
//     find: '@lexical/headless',
//   },
//   {
//     find: '@lexical/html',
//   },
//   {
//     find: '@lexical/hashtag',
//   },
//   {
//     find: '@lexical/history',
//   },
//   {
//     find: '@lexical/list',
//   },
//   {
//     find: '@lexical/file',
//   },
//   {
//     find: '@lexical/table',
//   },
//   {
//     find: '@lexical/offset',
//   },
//   {
//     find: '@lexical/utils',
//   },
//   {
//     find: '@lexical/code',
//   },
//   {
//     find: '@lexical/plain-text',
//   },
//   {
//     find: '@lexical/rich-text',
//   },
//   {
//     find: '@lexical/dragon',
//   },
//   {
//     find: '@lexical/link',
//   },
//   {
//     find: '@lexical/overflow',
//   },
//   {
//     find: '@lexical/markdown',
//   },
//   {
//     find: '@lexical/mark',
//   },
//   {
//     find: '@lexical/yjs',
//   },
//   {
//     find: 'shared',
//   },
// ];
// // Lexical React
// [
//   'LexicalTreeView',
//   'LexicalComposer',
//   'LexicalComposerContext',
//   'useLexicalIsTextContentEmpty',
//   'useLexicalTextEntity',
//   'useLexicalSubscription',
//   'useLexicalEditable',
//   'LexicalContentEditable',
//   'LexicalNestedComposer',
//   'LexicalHorizontalRuleNode',
//   'LexicalHorizontalRulePlugin',
//   'LexicalDecoratorBlockNode',
//   'LexicalBlockWithAlignableContents',
//   'useLexicalNodeSelection',
//   'LexicalMarkdownShortcutPlugin',
//   'LexicalCharacterLimitPlugin',
//   'LexicalHashtagPlugin',
//   'LexicalErrorBoundary',
//   'LexicalPlainTextPlugin',
//   'LexicalRichTextPlugin',
//   'LexicalClearEditorPlugin',
//   'LexicalClickableLinkPlugin',
//   'LexicalCollaborationContext',
//   'LexicalCollaborationPlugin',
//   'LexicalHistoryPlugin',
//   'LexicalTypeaheadMenuPlugin',
//   'LexicalNodeMenuPlugin',
//   'LexicalContextMenuPlugin',
//   'LexicalTablePlugin',
//   'LexicalLinkPlugin',
//   'LexicalListPlugin',
//   'LexicalCheckListPlugin',
//   'LexicalAutoFocusPlugin',
//   "LexicalTableOfContents",
//   'LexicalAutoLinkPlugin',
//   'LexicalAutoEmbedPlugin',
//   'LexicalOnChangePlugin',
//   'LexicalNodeEventPlugin',
//   'LexicalTabIndentationPlugin',
//   'LexicalEditorRefPlugin'
// ].forEach((module) => {
//   let resolvedPath = path.resolve(`../lexical-react/dist/${module}.js`);
//   moduleResolution.push({
//     find: `@lexical/react/${module}`,
//     replacement: resolvedPath,
//   });
// });

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     replaceCodePlugin({
//       replacements: [
//         {
//           from: /__DEV__/g,
//           to: 'true',
//         },
//       ],
//     }),
//     babel({
//       babelHelpers: 'bundled',
//       babelrc: false,
//       configFile: false,
//       exclude: '/**/node_modules/**',
//       extensions: ['jsx', 'js', 'ts', 'tsx', 'mjs'],
//       plugins: ['@babel/plugin-transform-flow-strip-types'],
//       presets: ['@babel/preset-react'],
//     }),
//     react(),
//   ],
//   resolve: {
//     alias: moduleResolution,
//   },
//   build: {
//     outDir: 'build',
//     rollupOptions: {
//       input: {
//         main: new URL('./index.html', import.meta.url).pathname,
//         split: new URL('./split/index.html', import.meta.url).pathname,
//       },
//     },
//     commonjsOptions: {include: []},
//     minify: 'terser',
//     terserOptions: {
//       compress: {
//         toplevel: true,
//       }
//     },
//   },
// });
