import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import Collaborator from './Colaborators';
import CollaboratorCompany from './ColaboratorCompany';

@Table({
    tableName: 'companies'
})
class Company extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare companyID: number;

    @Column({
        type: DataType.STRING(20),
        allowNull: false
    })
    declare nit: string;

    @Column({
        type: DataType.STRING(150),
        allowNull: false
    })
    declare businessName: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare commercialName: string;

    @Column({
        type: DataType.STRING(8),
        allowNull: false
    })
    declare phone: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare email: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare country: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare department: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare municipality: string;

    @HasMany(() => CollaboratorCompany)
    declare collaboratorCompanies: CollaboratorCompany[];
}

export default Company;