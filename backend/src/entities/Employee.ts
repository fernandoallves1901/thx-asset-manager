import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Department } from './Department';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true, select: false })
  cpf: string;

  @Column({ length: 100, nullable: true })
  role: string;

  @Column({ type: 'date', nullable: true })
  admissionDate: Date;

  @ManyToOne(() => Department, { nullable: true, eager: true })
  department: Department;

  @Column({ nullable: true })
  departmentId: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
