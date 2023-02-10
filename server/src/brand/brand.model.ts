import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript";


interface BrandCreationAttrs {
    brand: string;
}
@Table({ tableName: 'brand' })
export class Brand extends Model<Brand, BrandCreationAttrs>{
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    brand: string;
}