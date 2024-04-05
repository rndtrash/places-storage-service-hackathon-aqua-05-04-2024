import { Column, Entity } from "typeorm";
import { BasePlace } from "./base-place";
import { Food, Sanitary } from "../enums";

@Entity({
    name: 'pitstop',
})
export class PitStop extends BasePlace {
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
}