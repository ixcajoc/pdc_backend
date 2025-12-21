import { Router } from 'express'
import collaboratorsRoutes from './collaborators';
import companyRoutes from './company';
import geographyRoutes from './geography';

const router = Router()

// Importacion de las rutas

// Montamos las rutas
router.use('/collaborators',collaboratorsRoutes);
router.use('/companies', companyRoutes);
router.use('/geography', geographyRoutes);

// module.exports = router;
export default router
