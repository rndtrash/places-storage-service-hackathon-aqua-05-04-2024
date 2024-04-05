import { DefaultDatabaseEntity } from "@src/shared-modules/database/entity/default-database.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne } from "typeorm";
import { MobileProvider } from "./mobile-provider";
import { BasePlace } from "./base-place";

@Entity({
    name: 'signal_level'
})
export class SignalLevel extends DefaultDatabaseEntity<SignalLevel> {
    @ManyToOne(() => BasePlace, (bp) => bp.signalLevels)
    place: BasePlace

    @OneToOne(() => MobileProvider)
    @JoinColumn()
    provider: MobileProvider

    @Column()
    rating: number
}