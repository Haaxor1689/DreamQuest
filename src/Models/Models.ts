export interface Stats {
    dice?: number | "lucidity";
    movement?: number;
    memory?: number;
    slumber?: number;
    lucidity?: number;
    providence?: number;
}

export interface Choice {
    description?: string;
    requirement?: Stats;
    success?: Stats;
    failure?: Stats;
}