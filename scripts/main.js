/**
 * Created by ivan on 11/28/15.
 */
/*global require:true, define:true*/
require.config({
    basePath: "/",
    paths: {
        'react': "../libs/react-0.14.3/build/react-with-addons",
        'reactDom': "../libs/react-0.14.3/build/react-dom",
        'router': "../libs/react-0.14.3/build/ReactRouter.min",
        'logic': "../scripts/logic",
        'JSXTransformer': "../libs/JSXTransformer",
        'jsx': "../libs/jsx",
        'text': "../libs/text"
    },
    shim : {
        "react": {
            "exports": "React"
        },
        "reactDom": ['react'],
        "JSXTransformer": "JSXTransformer"
    },

    jsx: {
        fileExtension: ".jsx",
        transformOptions: {
            harmony: true,
            stripTypes: false,
            inlineSourceMap: true
        },
        usePragma: false
    }

});
define(['jsx!components/app'], function (app) {
    'use strict';
    app('mount-point');
});