/** @type{import('fastify').FastifyPluginAsync<>} */
import createError from '@fastify/error';
export default async function products(app, options) {
    const InvalidProductError = createError('InvalidProductError', 'Produto Inválido.', 400);

    const products = [
        {id: 1, name: 'Tomate', qtd: 20},
        {id: 2, name: 'Cebola', qtd: 50}
    ]

    app.get('/products', { config: { logMe: true }}, async (request, reply) => {
        return products;
    });

    app.post('/products', {
        schema: {
            body: {
                type: 'object',
                properties: {
                    id: { type: 'integer' },
                    name: { type: 'string' },
                    qtd: { type: 'integer' }
                },
                required: ['name', 'qtd']
            }
        }
    }, async (request, reply) => {
        let product = request.body;
        request.log.info(`Including product ${product.name}.`);
        return product;
    });

    app.get('/products/:id', async (request, reply) => {
        app.log.info('Produto requisitado> ' + request.params.id);
        return {};
    });
    
    app.delete('/products/:id', async (request, reply) => {
        app.log.info('Produto para remover> ' + request.params.id);
        return {};
    });
}