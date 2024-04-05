import { Column, Entity } from "typeorm";
import { BasePlace } from "./base-place";
import { CampingType, Communications, Food, LocationType, NoiseLevel, OtherServices, Sanitary, Season } from "../enums";

@Entity({
    name: 'camping',
})
export class CampingPlace extends BasePlace {
    @Column()
    noiseLevel: NoiseLevel

    @Column({
        type: "enum",
        enum: CampingType,
        array: true
    })
    type: CampingType[]

    @Column()
    locationType: LocationType

    @Column()
    season: Season

    @Column({
        type: "enum",
        enum: Sanitary,
        array: true
    })
    sanitary: Sanitary[]

    @Column({
        type: "enum",
        enum: Food,
        array: true
    })
    food: Food[]

    @Column({
        type: "enum",
        enum: Communications,
        array: true
    })
    communications: Communications[]

    @Column({
        type: "enum",
        enum: OtherServices,
        array: true
    })
    otherServices: OtherServices[]
}