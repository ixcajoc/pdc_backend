import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import Company from './Company';

@Table({
    tableName: 'collaborators'  // Nombre de la tabla en inglés
})
class Collaborator extends Model {
    
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare collaboratorID: number;

    // @Column({
    //     type: DataType.INTEGER,
    //     allowNull: false
    // })
    // declare companyID: number;

    @ForeignKey(() => Company)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    declare companyID: number;  // llave foránea con la tabla Company

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
        type: DataType.STRING(8),  // Ajustar el tamaño según el formato del teléfono
        allowNull: true  // Puedes cambiar a false si deseas que sea obligatorio
    })
    declare phone: string;  // telefono en inglés

    @Column({
        type: DataType.STRING(100),  // Tamaño adecuado para los correos
        allowNull: false
    })
    declare email: string;
}

export default Collaborator;