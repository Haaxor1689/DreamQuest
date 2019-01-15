import * as React from 'react';

import { Stats } from 'src/Models/Models';
import { getUrl } from 'src/Helpers/ImageUrlHelper';

interface IStatsProps {
    isReward?: boolean,
    stats: Stats,
}

export default class StatsComponent extends React.Component<IStatsProps, {}> {
    private diceIcon = "assets/Dice.png";
    private movementIcon = "assets/Movement.png";
    private memoryIcon = "assets/Memory.png";
    private slumberIcon = "assets/Slumber.png";
    private lucidityIcon = "assets/Lucidity.png";
    private providenceIcon = "assets/Providence.png";

    private val = (value: number): string => (value > 0 ? "+" : "") + value;

    private renderStat = (value: string, icon: string): JSX.Element => (
        <div className="card-stat">
            <span className="card-stat-value">{value}</span>
            <img src={getUrl(icon)} />
        </div>
    )

    private renderStatPlus = (value: number, icon: string) => (
        <div className="card-stat">
            <span className="card-stat-value">{Math.abs(value) + (value < 0 ? "-" : "+")}</span>
            <img src={getUrl(icon)} />
        </div>
    )

    private renderDiceLucidity = (): JSX.Element => (
        <div className="card-stat">
            <img src={getUrl(this.diceIcon)} />
            <span className="card-stat-value">{" >"}</span>
            <img src={getUrl(this.lucidityIcon)} />
        </div>
    )
    
    public render = () => (
        <div className="card-stats">
            { this.props.stats.dice !== undefined && (this.props.stats.dice === 0 
                ? this.renderDiceLucidity() 
                : this.renderStatPlus(this.props.stats.dice, this.diceIcon)) }
            { this.props.stats.movement !== undefined && this.renderStat(this.val(this.props.stats.movement), this.movementIcon) }
            { this.props.stats.memory !== undefined && (this.props.isReward 
                ? this.renderStat(this.val(this.props.stats.memory), this.memoryIcon)
                : this.renderStatPlus(this.props.stats.memory, this.memoryIcon)) }
            { this.props.stats.slumber !== undefined && this.renderStat(this.val(this.props.stats.slumber), this.slumberIcon) }
            { this.props.stats.lucidity !== undefined && this.renderStat(this.val(this.props.stats.lucidity), this.lucidityIcon) }
            { this.props.stats.providence !== undefined && this.renderStat(this.val(this.props.stats.providence), this.providenceIcon) }
        </div>
    )
}
