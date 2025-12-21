import { Router } from 'express'
import collaboratorsRoutes from './collaborators';
import companyRoutes from './company';

const router = Router()

// Importacion de las rutas

// Montamos las rutas
router.use('/collaborators',collaboratorsRoutes);
router.use('/companies', companyRoutes);

// module.exports = router;
export default router
