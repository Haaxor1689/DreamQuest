export interface Stats {
    dice?: number;
    movement?: number;
    memory?: number;
    slumber?: number;
    lucidity?: number;
    providence?: number;
}

export interface Choice {
    description: string;
    requirement: Stats;
    reward: Stats;
}