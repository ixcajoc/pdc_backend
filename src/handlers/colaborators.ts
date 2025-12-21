import { Request, Response } from 'express'
import Collaborator from '../models/Colaborators'

export const getColaborators = async (req: Request, res: Response) => {
    try {
        const collaborators = await Collaborator.findAll({
            order: [
                ['collaboratorID', 'DESC']
            ]
        })
        res.json({data: collaborators})
    } catch (error) {
        console.log(error)
    }
}

export const getCollaboratorById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const collaborator = await Collaborator.findByPk(id)

        if(!collaborator) {
            return res.status(404).json({
                error: 'Colaborador No Encontrado'
            })
        }

        res.json({data: collaborator})
    } catch (error) {
        console.log(error)
    }
}

export const createCollaborator = async (req : Request, res : Response) => {
    try {
        const collaborator = await Collaborator.create(req.body)
        res.json({data: collaborator})
    } catch (error) {
        console.log(error)
    }
}

export const updateCollaborator = async (req: Request, res: Response) => {
    const { id } = req.params
    const collaborator = await Collaborator.findByPk(id)

    if(!collaborator) {
        return res.status(404).json({
            error: 'Colaborador No Encontrado'
        })
    }
    
    // Actualizar
    await collaborator.update(req.body)
    await collaborator.save()
    res.json({data: collaborator})
}

// export const updateAvailability = async (req: Request, res: Response) => {
//     const { id } = req.params
//     const product = await Product.findByPk(id)

//     if(!product) {
//         return res.status(404).json({
//             error: 'Producto No Encontrado'
//         })
//     }
    
//     // Actualizar
//     product.availability = !product.dataValues.availability
//     await product.save()
//     res.json({data: product})
// }

export const deleteCollaborator = async (req: Request, res: Response) => {
    const { id } = req.params
    const collaborator = await Collaborator.findByPk(id)

    if(!collaborator) {
        return res.status(404).json({
            error: 'Colaborador No Encontrado'
        })
    }
    
    await collaborator.destroy()
    res.json({data: 'Colaborador Eliminado'})
}