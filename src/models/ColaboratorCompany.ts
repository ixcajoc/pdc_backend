import { Table, Column, Model, DataType, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import Collaborator from './Colaborators';
import Company from './Company';

@Table({
    tableName: 'collaborator_company'
})
class CollaboratorCompany extends Model {

    @PrimaryKey
    @ForeignKey(() => Collaborator)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare collaboratorID: number;

    @PrimaryKey
    @ForeignKey(() => Company)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare companyID: number;
}

export default CollaboratorCompany;