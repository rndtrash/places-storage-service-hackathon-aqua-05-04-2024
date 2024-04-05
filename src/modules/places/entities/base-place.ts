import { DefaultDatabaseEntity } from "@src/shared-modules/database/entity/default-database.entity";
import { UUID } from "crypto";
import { Column, Entity, OneToMany } from "typeorm";
import { PriceListEntry } from "./price-list-entry";
import { SignalLevel } from "./signal-level";
import { PlacePhoto } from "./place-photo";

@Entity({
    name: 'base_place',
})
export class BasePlace extends DefaultDatabaseEntity<BasePlace> {
    @Column()
    name: string

    @Column()
    description: string

    @Column()
    locationLat: number

    @Column()
    locationLong: number

    @OneToMany(() => PlacePhoto, (pp) => pp.place, { cascade: true })
    photoUrls: PlacePhoto[]

    @Column()
    owner: UUID

    @Column()
    contact: string

    @OneToMany(() => PriceListEntry, (ple) => ple.place, { cascade: true })
    priceList: PriceListEntry[]

    @Column({ nullable: true })
    openTime?: number // В секундах от начала дня

    @Column({ nullable: true })
    closeTime?: number // В секундах от начала дня

    @OneToMany(() => SignalLevel, (sl) => sl.place, { cascade: true })
    signalLevels: SignalLevel[]
}