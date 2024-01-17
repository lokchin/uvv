"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProfessorController_1 = __importDefault(require("../controllers/ProfessorController"));
const ProfessorRoute = (0, express_1.Router)();
ProfessorRoute.get("/", ProfessorController_1.default.getAll);
ProfessorRoute.post("/insert", ProfessorController_1.default.insert);
ProfessorRoute.patch("/update/:matricula", ProfessorController_1.default.update);
ProfessorRoute.delete("/delete/:matricula", ProfessorController_1.default.delete);
exports.default = ProfessorRoute;
