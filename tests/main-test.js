/**
 * Created by ivan on 11/30/15.
 */
var allTestFiles = [];
var TEST_REGEXP = /(Spec|_test)\.js$/i;
for (var file in window.__karma__.files) {
    if (TEST_REGEXP.test(file)) allTestFiles.push(file);
}
require.config({
    baseUrl: 'base/',

    paths: {
        'react': "../libs/react-0.14.3/build/react-with-addons",
        'reactDom': "../libs/react-0.14.3/build/react-dom"
    },
    shim : {
        "react": {
            "exports": "React"
        },
        "reactDom":['react']
        //"JSXTransformer": "JSXTransformer"
    },
    deps: allTestFiles,
    callback: window.__karma__.start
});