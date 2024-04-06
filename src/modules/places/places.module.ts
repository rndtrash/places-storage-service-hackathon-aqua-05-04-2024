import { Module } from "@nestjs/common";
import { PitStopController } from "./controllers/pitstop.controller";

@Module({
    imports: [],
    controllers: [
        PitStopController
    ]
})
export class PlacesModule {}