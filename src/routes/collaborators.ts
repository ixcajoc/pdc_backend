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
    handleInputErrors,
    createCollaborator
)

router.put('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    updateCollaborator
)

router.delete('/:id', 
    param('id').isInt().withMessage('ID no válido'),
    handleInputErrors,
    deleteCollaborator
)

// module.exports = router;
export default router