"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.greet = void 0;
const lodash_1 = __importDefault(require("lodash"));
const greet = (name) => {
    return `hello,${lodash_1.default.capitalize(name)}`;
};
exports.greet = greet;
