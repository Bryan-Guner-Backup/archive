module.exports = function(module) {
    if (!module.webpackPolyfill) {
        module.deprecate = function() {};

        module.paths = []; // module.parent = undefined by default

        if (!module.children) module.children = [];
        Object.defineProperty(module, "loaded", {
            enumerable: true,
            get: function get() {
                return module.l;
            }
        });
        Object.defineProperty(module, "id", {
            enumerable: true,
            get: function get() {
                return module.i;
            }
        });
        module.webpackPolyfill = 1;
    }

    return module;
};