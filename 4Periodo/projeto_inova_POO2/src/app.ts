import express from 'express';
import AlunoRoute from './routes/AlunoRoute';
import ProfessorRoute from './routes/ProfessorRoute';
import GrupoRoute from './routes/GrupoRoute';
import EstandeRoute from './routes/EstandeRoute';

export default class App {

    private app: express.Application;
    private port = 8080;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.set('view engine', 'ejs');
        this.app.set('views', './src/views');
        this.app.use(express.urlencoded({ extended: true }));
        this.routes();
        this.listen();
    }

    public getApp(): express.Application {
        return this.app;
    }

    private listen(): void {
        this.app.listen(this.port, () => console.log("servidor iniciado na porta " + this.port));
    }

    private routes(): void {
        this.app.use("/aluno", AlunoRoute);
        this.app.use("/professor", ProfessorRoute);
        this.app.use("/grupo", GrupoRoute);
        this.app.use("/estande", EstandeRoute);
    }
}