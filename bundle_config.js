// vim: ts=4 et sts=4 sw=4

import babel from "rollup-plugin-babel";

export default {
    plugins: [
        babel({
            "babelrc": false,
            "presets": [
                ["latest", {
                    "es2015": {
                        "modules": false
                    }
                }]
            ],
            "plugins": [
                "external-helpers"
            ]
        }),
    ],
};
