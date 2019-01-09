import {
    CharacterStat,
    Choice,
    SlumberStat,
    MemoryStat,
    LucidityStat,
    ProvidenceStat
} from './Models';

export type CardType = "Character" | "Simple" | "Choice";

export interface BaseCard {
    type: CardType;
    name: string;
    imageUrl: string;
    description: string;
}

export interface CharacterCard extends BaseCard {
    type: "Character";
    memory: MemoryStat;
    slumber: SlumberStat;
    lucidity: LucidityStat;
    providence: ProvidenceStat;
}

export interface SimpleCard extends BaseCard {
    type: "Simple";
    stats: CharacterStat[];
}

export interface ChoiceCard extends BaseCard {
    type: "Choice";
    choices: Choice[];
}

export type Card = CharacterCard | SimpleCard | ChoiceCard;