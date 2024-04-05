import { DefaultDatabaseEntity } from "@src/shared-modules/database/entity/default-database.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { BasePlace } from "./base-place";

@Entity({
    name: 'place-photo'
})
export class PlacePhoto extends DefaultDatabaseEntity<PlacePhoto> {
    @ManyToOne(() => BasePlace, (bp) => bp.priceList)
    place: BasePlace

    @Column()
    url: string
}