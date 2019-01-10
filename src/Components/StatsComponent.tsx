import * as React from 'react';

import { Stats } from 'src/Models/Models';

export default class StatsComponent extends React.Component<Stats, {}> {

    private val = (value: number): string => (value > 0 ? "+" : "") + value;

    private renderStat = (value: string, icon: string): JSX.Element => (
        <div>
            <span className="stat">{value}</span>
            <i>{icon}</i>
        </div>
    )
    
    public render = () => (
        <div>
            { this.props.dice && this.renderStat(this.val(this.props.dice), "dice") }
            { this.props.movement && this.renderStat(this.val(this.props.movement), "movement") }
            { this.props.memory && this.renderStat(this.props.memory + "+", "memory") }
            { this.props.slumber && this.renderStat(this.val(this.props.slumber), "slumber") }
            { this.props.lucidity && this.renderStat(this.val(this.props.lucidity), "lucidity") }
            { this.props.providence && this.renderStat(this.val(this.props.providence), "providence") }
        </div>
    )
}
