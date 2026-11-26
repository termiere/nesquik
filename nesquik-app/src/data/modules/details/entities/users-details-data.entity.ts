import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('details')
export class Details {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;

  @Column({ unique: true })
  user_id: number;
}
