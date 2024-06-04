import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

@Index("PK__Tree__92881BD35BE59E26", ["nodeId"], { unique: true })
@Entity("Tree", { schema: "dbo" })
export class Tree {
  @Column("int", { primary: true, name: "nodeId" })
  nodeId: number;

  @Column("nvarchar", { name: "name", nullable: true })
  name: string | null;

  @ManyToOne(() => Tree, (tree) => tree.trees)
  @JoinColumn([{ name: "parentNodeId", referencedColumnName: "nodeId" }])
  parentNode: Tree;

  @OneToMany(() => Tree, (tree) => tree.parentNode)
  trees: Tree[];
}
