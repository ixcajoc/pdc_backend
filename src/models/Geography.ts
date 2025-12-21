import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import Company from './Company';  // Asegúrate de importar el modelo de Geografía

@Table({
    tableName: 'geography'
})
class Geography extends Model {
    
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare geographyID: number;

    @ForeignKey(() => Company)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare companyID: number;  // llave foránea con la tabla Empresa

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare country: string;  // país

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare department: string;  // departamento

    @Column({
        type: DataType.STRING(100),
        allowNull: false
    })
    declare municipality: string;  // municipio
}

export default Geography;