import { Request, Response } from 'express'
import Geography from '../models/Geography'

export const getGeographies = async (req: Request, res: Response) => {
    try {
        const geography = await Geography.findAll({
            order: [
                ['geographyID', 'ASC']
            ]
        })
        res.json({data: geography})
    } catch (error) {
        console.log(error)
    }
}

export const getGeographyById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const geography = await Geography.findByPk(id)

        if(!geography) {
            return res.status(404).json({
                error: 'Direccion No Encontrada'
            })
        }

        res.json({data: geography})
    } catch (error) {
        console.log(error)
    }
}

export const createGeography = async (req : Request, res : Response) => {
    try {
        const geography = await Geography.create(req.body)
        res.json({data: geography})
    } catch (error) {
        console.log(error)
    }
}

export const updateGeography = async (req: Request, res: Response) => {
    const { id } = req.params
    const geography = await Geography.findByPk(id)

    if(!geography) {
        return res.status(404).json({
            error: 'Direccion No Encontrada'
        })
    }
    
    // Update
    await geography.update(req.body)
    await geography.save()
    res.json({data: geography})
}

export const deleteGeography = async (req: Request, res: Response) => {
    const { id } = req.params
    const geography = await Geography.findByPk(id)

    if(!geography) {
        return res.status(404).json({
            error: 'Empresa No Encontrada'
        })
    }
    
    await geography.destroy()
    res.json({data: 'Empresa Eliminada'})
}