export default {

    build: {

        extend: function (config, {isDev, isClient}) {

            config.node = {

                fs: "empty"
            };
        }
    },
};