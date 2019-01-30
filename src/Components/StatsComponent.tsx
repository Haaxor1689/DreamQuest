import * as React from 'react';

import { Stats } from './../Models/Cards';

import DiceIcon from "./../Assets/Dice.png";
import MovementIcon from "./../Assets/Movement.png";
import MemoryIcon from "./../Assets/Memory.png";
import SlumberIcon from "./../Assets/Slumber.png";
import LucidityIcon from "./../Assets/Lucidity.png";
import ProvidenceIcon from "./../Assets/Providence.png";

interface IStatsProps {
    isReward?: boolean,
    stats: Stats,
    backgroundClass?: string,
}

export default class StatsComponent extends React.Component<IStatsProps, {}> {
    private val = (value: number | string): string => (typeof(value) === "string" && value) || (value > 0 && this.props.isReward ? "+" : "") + value;

    private renderStat = (value: string, icon: string): JSX.Element => (
        <div className="card-stat">
            <span className="card-stat-value">{value}</span>
            <img src={icon} className="card-stat-icon" />
        </div>
    )

    private renderDice = (prefix: string, postfix: string, icon: string): JSX.Element => (
        <div className="card-stat">
            <span className="card-stat-value">
                {prefix}
                <img src={DiceIcon} className="card-stat-icon" />
                {postfix}
            </span>
            <img src={icon} className="card-stat-icon" />
        </div>
    )
    
    public render = () => (
        <div className={"card-stats " + this.props.backgroundClass}>
            { this.props.stats.dice !== undefined && this.renderStat(this.val(`${this.props.stats.dice}+`), DiceIcon) }
            { this.props.stats.movement !== undefined && this.renderStat(this.val(this.props.stats.movement), MovementIcon) }
            { this.props.stats.memory !== undefined && (this.props.stats.memory === "Roll over memory"
                ? this.renderDice("", " >", MemoryIcon)
                : this.props.stats.memory === "Roll under memory" 
                    ? this.renderDice("", "<", MemoryIcon) 
                    : this.renderStat(this.val(this.props.stats.memory), MemoryIcon)) }
            { this.props.stats.slumber !== undefined && (this.props.stats.slumber === "+D6"
                ? this.renderDice("+{", "}", SlumberIcon)
                : this.renderStat(this.val(this.props.stats.slumber), SlumberIcon)) }
            { this.props.stats.lucidity !== undefined && (this.props.stats.lucidity === "Roll under lucidity"
                ? this.renderDice("", "<", LucidityIcon)
                : this.renderStat(this.val(this.props.stats.lucidity), LucidityIcon)) }
            { this.props.stats.providence !== undefined && this.renderStat(this.val(this.props.stats.providence), ProvidenceIcon) }
        </div>
    )
}
