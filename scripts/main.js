/**
 * Created by ivan on 11/28/15.
 */
require.config({
    basePath: "/",
    paths:{
        'react': "../libs/react-0.14.3/build/react-with-addons",
        'reactDom': "../libs/react-0.14.3/build/react-dom",
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
define(['jsx!board'],function(board){
    board('mount-point');
});