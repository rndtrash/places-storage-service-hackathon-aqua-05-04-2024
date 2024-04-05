import { BasePlace } from "@modules/places/entities/base-place";
import { CampingPlace } from "@modules/places/entities/camping-place";
import { MobileProvider } from "@modules/places/entities/mobile-provider";
import { PitStop } from "@modules/places/entities/pitstop";
import { PlacePhoto } from "@modules/places/entities/place-photo";
import { PriceListEntry } from "@modules/places/entities/price-list-entry";
import { SignalLevel } from "@modules/places/entities/signal-level";

export const databaseEntities = [
    BasePlace,
    CampingPlace,
    PitStop,
    PriceListEntry,
    MobileProvider,
    SignalLevel,
    PlacePhoto
]