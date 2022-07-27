"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users_controller");
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.send('User will be returned');
});
router.post('/register', users_controller_1.userRegister);
exports.default = router;
