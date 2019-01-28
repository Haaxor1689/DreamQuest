export type CardType = "Character" | "Reality" | "Dream" | "Boss";

export interface BaseCard {
    type: CardType;
    name: string;
    imageUrl: string;
    description: string;
}

export interface Stats {
    dice?: number | "lucidity";
    movement?: number;
    memory?: number;
    slumber?: number | "+dice";
    lucidity?: number;
    providence?: number | string;
}

export interface Choice {
    description?: string;
    requirement?: Stats;
    success?: Stats;
    failure?: Stats;
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
    movement: number;
    choices?: Choice[];
    effect?: Stats;
}

export interface BossCard extends BaseCard {
    type: "Boss";

}

export type Card = CharacterCard | RealityCard | DreamCard | BossCard;

export interface Cards {
    cards: Card[];
}