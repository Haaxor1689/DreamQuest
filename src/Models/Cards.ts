import {
    CharacterStat,
    StatType,
    Choice
} from './Models';

export type CardType = "Character" | "Simple" | "Choice";

export interface BaseCard<T extends CardType> {
    type: T;
    name: string;
    imageUrl: string;
    description: string;
}

export interface CharacterCard extends BaseCard<"Character"> {
    memory: CharacterStat<"Memory">;
    slumber: CharacterStat<"Slumber">;
    lucidity: CharacterStat<"Lucidity">;
    providence: CharacterStat<"Providence">;
}

export interface SimpleCard extends BaseCard<"Simple"> {
    stats: CharacterStat<StatType>[];
}

export interface ChoiceCard extends BaseCard<"Choice"> {
    choices: Choice[];
}