var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "lodash"], function (require, exports, lodash_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.greet = void 0;
    lodash_1 = __importDefault(lodash_1);
    const greet = (name) => {
        return `hello,${lodash_1.default.capitalize(name)}`;
    };
    exports.greet = greet;
});
