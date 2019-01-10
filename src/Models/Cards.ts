import {
    Stats,
    Choice,
} from './Models';

export type CardType = "Character" | "Reality" | "Dream" | "Boss";

export interface BaseCard {
    type: CardType;
    name: string;
    imageUrl: string;
    description: string;
}

export interface CharacterCard extends BaseCard {
    type: "Character";
    stats: Stats;
}

export interface RealityCard extends BaseCard {
    type: "Reality";
    effect: Stats;
}

export interface DreamCard extends BaseCard {
    type: "Dream";
    move: number;
    choices: Choice[];
}

export interface BossCard extends BaseCard {
    type: "Boss";

}

export type Card = CharacterCard | RealityCard | DreamCard | BossCard;