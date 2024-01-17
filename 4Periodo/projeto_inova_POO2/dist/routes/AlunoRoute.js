"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AlunoController_1 = __importDefault(require("../controllers/AlunoController"));
const AlunoRoute = (0, express_1.Router)();
AlunoRoute.get("/", AlunoController_1.default.getAll);
AlunoRoute.post("/insert", AlunoController_1.default.insert);
AlunoRoute.patch("/update/:matricula", AlunoController_1.default.update);
AlunoRoute.delete("/delete/:matricula", AlunoController_1.default.delete);
exports.default = AlunoRoute;
