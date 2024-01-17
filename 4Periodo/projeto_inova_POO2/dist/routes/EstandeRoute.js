"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EstandeController_1 = __importDefault(require("../controllers/EstandeController"));
const EstandeRoute = (0, express_1.Router)();
EstandeRoute.get("/", EstandeController_1.default.getAll);
EstandeRoute.post("/insert", EstandeController_1.default.insert);
EstandeRoute.delete("/delete/:numero", EstandeController_1.default.delete);
exports.default = EstandeRoute;
