import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import Geography from './Geography';

@Table({
    tableName: 'company'
})
class Company extends Model {
    
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare companyID: number;

    @ForeignKey(() => Geography)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare geographyID: number;  // llave foránea con la tabla Geografía

    @Column({
        type: DataType.STRING(30),
        allowNull: false
    })
    declare nit: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare businessName: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare tradeName: string;

    @Column({
        type: DataType.STRING(8),
        allowNull: true
    })
    declare phone: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare email: string;
}

export default Company;