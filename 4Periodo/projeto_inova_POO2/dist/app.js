"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AlunoRoute_1 = __importDefault(require("./routes/AlunoRoute"));
const ProfessorRoute_1 = __importDefault(require("./routes/ProfessorRoute"));
const GrupoRoute_1 = __importDefault(require("./routes/GrupoRoute"));
const EstandeRoute_1 = __importDefault(require("./routes/EstandeRoute"));
class App {
    constructor() {
        this.port = 8080;
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.set('view engine', 'ejs');
        this.app.set('views', './src/views');
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.routes();
        this.listen();
    }
    getApp() {
        return this.app;
    }
    listen() {
        this.app.listen(this.port, () => console.log("servidor iniciado na porta " + this.port));
    }
    routes() {
        this.app.use("/aluno", AlunoRoute_1.default);
        this.app.use("/professor", ProfessorRoute_1.default);
        this.app.use("/grupo", GrupoRoute_1.default);
        this.app.use("/estande", EstandeRoute_1.default);
    }
}
exports.default = App;
