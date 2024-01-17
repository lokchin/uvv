"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GrupoController_1 = __importDefault(require("../controllers/GrupoController"));
const GrupoRoute = (0, express_1.Router)();
GrupoRoute.get("/", GrupoController_1.default.getAll);
GrupoRoute.post("/insert", GrupoController_1.default.insert);
GrupoRoute.patch("/update/:nome", GrupoController_1.default.update);
GrupoRoute.delete("/delete/:nome", GrupoController_1.default.delete);
exports.default = GrupoRoute;
