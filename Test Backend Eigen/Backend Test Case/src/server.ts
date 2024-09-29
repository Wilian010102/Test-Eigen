import express from 'express';
import { swaggerDocs, swaggerUi } from './swagger';
import routes from './routes';

const app = express();
const PORT = 3000;

// Serve Swagger API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Use your routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
