import {BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import { UserDetails } from './user.details.entity';
import { Role } from '../role/role.entity';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false})
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @OneToOne(type=> UserDetails, { cascade: true, nullable: false, eager: true })
  @JoinColumn()
  details: UserDetails;

  @ManyToMany(type => Role, role => role.users)
  @JoinTable({ name: 'user_roles' })
  roles: Role[];

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @Column({ type: 'timestamp', name: 'created_at'})
  createdAt: Date;

  @Column({ type: 'timestamp', name: 'updated_at'})
  updatedAt: Date;
}