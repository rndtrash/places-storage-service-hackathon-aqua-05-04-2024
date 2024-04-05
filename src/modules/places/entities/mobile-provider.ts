import { DefaultDatabaseEntity } from "@src/shared-modules/database/entity/default-database.entity";
import { Column, Entity } from "typeorm";

@Entity({
    name: 'mobile_provider'
})
export class MobileProvider extends DefaultDatabaseEntity<MobileProvider> {
    @Column({ unique: true })
    name: string

    @Column()
    icon: string
}