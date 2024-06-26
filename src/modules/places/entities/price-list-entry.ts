import { DefaultDatabaseEntity } from "@src/shared-modules/database/entity/default-database.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { BasePlace } from "./base-place";

@Entity({
    name: "price_list_entry"
})
export class PriceListEntry extends DefaultDatabaseEntity<PriceListEntry> {
    @ManyToOne(() => BasePlace, (bp) => bp.priceList)
    place: BasePlace

    @Column()
    name: string

    @Column()
    price: number
}