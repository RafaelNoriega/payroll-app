"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegister = void 0;
const users_1 = __importDefault(require("../classes/users"));
const userRegister = (req, res, next) => {
    try {
        const body = req.body;
        const { firstName, lastName, email, password } = body;
        const newUser = new users_1.default(firstName, lastName, email, password);
        res.send(newUser);
    }
    catch (error) {
        console.log(error);
    }
};
exports.userRegister = userRegister;
