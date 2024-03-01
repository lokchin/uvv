import fastify from 'fastify';
import createError from '@fastify/error';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MyCustomError = createError('MyCustomError', 'Something stranged happened.', 501);

export async function build(opts){
    const app = fastify(opts);

    app.register(fastifyStatic, {
        root: path.join(__dirname, 'public'),
        wildcard: false
    });
    app.get('/*', async (request, reply) => {
        request.log.info({params: request.params}, 'Hello from wildcard.');
        return reply.sendFile('index.html');
    });
   
    app.get('/error', (request, reply) => {
        throw new MyCustomError();
    });

    

    const products = [
        {id: 1, name: 'Tomate', qtd: 20},
        {id: 2, name: 'Cebola', qtd: 50}
    ]

    app.get('/products', async (request, reply) => {
        return products;
    });

    app.post('/products', async (request, reply) => {
        let product = request.body;
        return {product};
    });

    app.get('/products/:id', async (request, reply) => {
        app.log.info('Produto requisitado> ' + request.params.id);
        return {};
    });
    
    app.delete('/products/:id', async (request, reply) => {
        app.log.info('Produto para remover> ' + request.params.id);
        return {};
    });

    

    app.setErrorHandler(async (error, request, reply) => {
        request.log.error({ error });
        reply.code(error.statusCode || 500);

        return `Route ${request.url} caused an Internal Server Error.`;
    });

    app.get('/notfound', async (request, reply) => {
        request.log.info('Sending to not found handler.');
        reply.callNotFound();
    });

    app.setNotFoundHandler(async (request, reply) => {
        reply.code(404);
        return 'Resource not found.';
    });

    return app;
}