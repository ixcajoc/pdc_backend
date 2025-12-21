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
    handleInputErrors,
    createCompany
)

router.put('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    updateCompany
)

router.delete('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    deleteCompany
)

// module.exports = router;
export default router