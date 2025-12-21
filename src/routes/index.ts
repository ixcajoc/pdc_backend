import { Router } from 'express'
import collaboratorsRoutes from './collaborators';

const router = Router()

// Importacion de las rutas

// Montamos las rutas
router.use('/collaborators',collaboratorsRoutes);

// module.exports = router;
export default router
