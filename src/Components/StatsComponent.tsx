import * as React from 'react';

import { Stats } from 'src/Models/Models';

import DiceIcon from "./../Assets/Dice.png";
import MovementIcon from "./../Assets/Movement.png";
import MemoryIcon from "./../Assets/Memory.png";
import SlumberIcon from "./../Assets/Slumber.png";
import LucidityIcon from "./../Assets/Lucidity.png";
import ProvidenceIcon from "./../Assets/Providence.png";

interface IStatsProps {
    isReward?: boolean,
    stats: Stats,
}

export default class StatsComponent extends React.Component<IStatsProps, {}> {
    private val = (value: number): string => (value > 0 && this.props.isReward ? "+" : "") + value;

    private renderStat = (value: string, icon: string): JSX.Element => (
        <div className="card-stat">
            <span className="card-stat-value">{value}</span>
            <img src={icon} className="card-stat-icon" />
        </div>
    )

    private renderStatPlus = (value: number, icon: string) => (
        <div className="card-stat">
            <span className="card-stat-value">{Math.abs(value) + (value < 0 ? "-" : "+")}</span>
            <img src={icon} className="card-stat-icon" />
        </div>
    )

    private renderDiceLucidity = (): JSX.Element => (
        <div className="card-stat">
            <img src={DiceIcon} className="card-stat-icon" />
            <span className="card-stat-value">{" >"}</span>
            <img src={LucidityIcon} className="card-stat-icon" />
        </div>
    )
    
    public render = () => (
        <div className="card-stats">
            { this.props.stats.dice !== undefined && (this.props.stats.dice === "lucidity" 
                ? this.renderDiceLucidity() 
                : this.renderStatPlus(this.props.stats.dice, DiceIcon)) }
            { this.props.stats.movement !== undefined && this.renderStat(this.val(this.props.stats.movement), MovementIcon) }
            { this.props.stats.memory !== undefined && (this.props.isReward 
                ? this.renderStat(this.val(this.props.stats.memory), MemoryIcon)
                : this.renderStatPlus(this.props.stats.memory, MemoryIcon)) }
            { this.props.stats.slumber !== undefined && this.renderStat(this.val(this.props.stats.slumber), SlumberIcon) }
            { this.props.stats.lucidity !== undefined && this.renderStat(this.val(this.props.stats.lucidity), LucidityIcon) }
            { this.props.stats.providence !== undefined && this.renderStat(this.val(this.props.stats.providence), ProvidenceIcon) }
        </div>
    )
}
