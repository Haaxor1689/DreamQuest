export type StatType = "Memory" | "Slumber" | "Lucidity" | "Providence";

export interface CharacterStat<T extends StatType> {
    type: T;
    value: number;
}

export interface Choice {
    description: string;
    stats: CharacterStat<StatType>[];
}