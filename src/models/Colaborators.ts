import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import CollaboratorCompany from './ColaboratorCompany';

@Table({
    tableName: 'collaborators'
})
class Collaborator extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare collaboratorID: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare companyID: number;


    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare fullName: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare age: number;

    @Column({
        type: DataType.STRING(15),  
        allowNull: true  
    })
    declare phone: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare email: string;

    @HasMany(() => CollaboratorCompany)
    declare collaboratorCompanies: CollaboratorCompany[];
}

export default Collaborator;