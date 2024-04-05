import { DefaultDatabaseEntity } from "@src/shared-modules/database/entity/default-database.entity";
import { UUID } from "crypto";
import { Column, Entity, Geometry, OneToMany } from "typeorm";
import { PriceListEntry } from "./price-list-entry";

@Entity({
    name: 'base-place',
})
export class BasePlace extends DefaultDatabaseEntity<BasePlace> {
    @Column()
    name: string

    @Column()
    description: string

    @Column()
    location: Geometry

    @Column()
    photoUrls: string[]

    @Column()
    owner: UUID

    @Column()
    contact: string

    @OneToMany(() => PriceListEntry, (ple) => ple.place, {cascade: true})
    @Column()
    priceList: PriceListEntry[]
}