import { Router } from 'express'
import collaboratorsRoutes from './collaborators';
import companyRoutes from './company';

const router = Router()

// Montamos las rutas
router.use('/collaborators',collaboratorsRoutes);
router.use('/companies', companyRoutes);

export default router
