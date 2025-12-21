import { Router } from 'express'
import { body, param } from 'express-validator'
import { handleInputErrors } from '../middleware'
import { createCompany, deleteCompany, getCompanies, getCompanyById, updateCompany } from '../handlers/company'

const router = Router()

// Routing
router.get('/', getCompanies)

router.get('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    getCompanyById
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
    createCompany
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
    updateCompany
)

// router.patch('/:id', 
//     param('id').isInt().withMessage('ID no válido'),
//     handleInputErrors,
//     updateAvailability
// )

router.delete('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    deleteCompany
)

// module.exports = router;
export default router