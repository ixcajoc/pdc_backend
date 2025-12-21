import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import Geography from './Geography';  // Asegúrate de importar el modelo de Geografía

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
    declare nit: string;  // Número de identificación tributaria

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare businessName: string;  // razón social

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare tradeName: string;  // nombre comercial

    @Column({
        type: DataType.STRING(8),
        allowNull: true  // Puede ser opcional
    })
    declare phone: string;  // teléfono

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare email: string;
}

export default Company;