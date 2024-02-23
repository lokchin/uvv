import fastify from "fastify";

export async function build(opts){
    const app = fastify(opts);

    app.get('/', async(req, reply) => {
        return{ hello: 'World' }
    });

    return app;

}