import { DefaultDatabaseEntity } from "@src/shared-modules/database/entity/default-database.entity";
import { UUID } from "crypto";
import { Column, Entity, Geometry, OneToMany } from "typeorm";
import { PriceListEntry } from "./price-list-entry";
import { SignalLevel } from "./signal-level";

@Entity({
    name: 'base_place',
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

    @Column({nullable: true})
    openTime?: number // В секундах от начала дня

    @Column({nullable: true})
    closeTime?: number // В секундах от начала дня

    @OneToMany(() => SignalLevel, (sl) => sl.place)
    @Column()
    signalLevels: SignalLevel[]
}