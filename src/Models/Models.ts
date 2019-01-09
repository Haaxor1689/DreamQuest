export type StatType = "Memory" | "Slumber" | "Lucidity" | "Providence";

export interface BaseStat {
    type: StatType;
    value: number;
}

export interface MemoryStat extends BaseStat { type: "Memory"; }
export interface SlumberStat extends BaseStat { type: "Slumber"; }
export interface LucidityStat extends BaseStat { type: "Lucidity"; }
export interface ProvidenceStat extends BaseStat { type: "Providence"; }

export type CharacterStat = MemoryStat | SlumberStat | LucidityStat | ProvidenceStat;

export interface Choice {
    description: string;
    stats: CharacterStat[];
}