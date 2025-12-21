import { Router } from 'express'
import { body, param } from 'express-validator'
import { createCollaborator, deleteCollaborator, getCollaboratorById, getColaborators, updateCollaborator } from '../handlers/colaborators'
import { handleInputErrors } from '../middleware'

const router = Router()

// Routing
router.get('/', getColaborators)

router.get('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    getCollaboratorById
)

router.post('/', 
    // Validación
    // body('fullName')
    //     .notEmpty().withMessage('El nombre del colaborador no puede ir vacio'),
    // body('price')
    //     .isNumeric().withMessage('Valor no válido')
    //     .notEmpty().withMessage('El precio de Producto no puede ir vacio')
    //     .custom(value => value > 0).withMessage('Precio no válido'),
    handleInputErrors,
    createCollaborator
)

router.put('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    // body('name')
    //     .notEmpty().withMessage('El nombre de Producto no puede ir vacio'),
    // body('price')
    //     .isNumeric().withMessage('Valor no válido')
    //     .notEmpty().withMessage('El precio de Producto no puede ir vacio')
    //     .custom(value => value > 0).withMessage('Precio no válido'),
    // body('availability')
    //     .isBoolean().withMessage('Valor para disponibilidad no válido'),
    handleInputErrors,
    updateCollaborator
)

// router.patch('/:id', 
//     param('id').isInt().withMessage('ID no válido'),
//     handleInputErrors,
//     updateAvailability
// )

router.delete('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    deleteCollaborator
)

// module.exports = router;
export default router