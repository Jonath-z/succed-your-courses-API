import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class Course extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'module_id' })
    moduleId: number;

    @Column({name: 'module_name'})
    moduleName: string;

    @Column({name:'module_file'})
    moduleFile: string;

    @Column({name: 'created_at'})
    date: string 
}