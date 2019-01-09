import * as React from 'react';

import { CharacterStat } from 'src/Models/Models';

export default class CharacterStatComponent extends React.Component<CharacterStat, {}> {

    private renderValue = (): string => (this.props.value > 0 ? "+" : "") + this.props.value;
    
    public render() {
        return (
            <div>
                <span className="character-stat">{this.renderValue()}</span>
                <i className={"character-stat-" + this.props.type} />
            </div>
        );
    }
}