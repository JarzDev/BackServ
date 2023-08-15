"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var fs_1 = require("fs");
var PATH_ROUTER = "".concat(__dirname);
var router = (0, express_1.Router)();
exports.router = router;
var cleanFileName = function (fileName) {
    var file = fileName.split('.').shift();
    return file;
};
(0, fs_1.readdirSync)(PATH_ROUTER).filter(function (fileName) {
    var cleanName = cleanFileName(fileName);
    if (cleanName !== 'index') {
        Promise.resolve("".concat("./".concat(cleanName))).then(function (s) { return require(s); }).then(function (moduleRoute) {
            console.log("ruta cargada...  /".concat(cleanName));
            router.use("/".concat(cleanName), moduleRoute.router);
        });
    }
    ;
});
