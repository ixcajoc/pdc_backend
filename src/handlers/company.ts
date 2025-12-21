import { Request, Response } from 'express'
import Company from '../models/Company'

export const getCompanies = async (req: Request, res: Response) => {
    try {
        const companies = await Company.findAll({
            order: [
                ['companyID', 'ASC']
            ]
        })
        res.json({data: companies})
    } catch (error) {
        console.log(error)
    }
}

export const getCompanyById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const company = await Company.findByPk(id)

        if(!company) {
            return res.status(404).json({
                error: 'Empresa No Encontrado'
            })
        }

        res.json({data: company})
    } catch (error) {
        console.log(error)
    }
}

export const createCompany = async (req : Request, res : Response) => {
    try {
        const company = await Company.create(req.body)
        res.json({data: company})
    } catch (error) {
        console.log(error)
    }
}

export const updateCompany = async (req: Request, res: Response) => {
    const { id } = req.params
    const company = await Company.findByPk(id)

    if(!company) {
        return res.status(404).json({
            error: 'Empresa No Encontrada'
        })
    }
    
    // Actualizar
    await company.update(req.body)
    await company.save()
    res.json({data: company})
}

export const deleteCompany = async (req: Request, res: Response) => {
    const { id } = req.params
    const company = await Company.findByPk(id)

    if(!company) {
        return res.status(404).json({
            error: 'Empresa No Encontrada'
        })
    }
    
    await company.destroy()
    res.json({data: 'Empresa Eliminada'})
}