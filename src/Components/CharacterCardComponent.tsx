import * as React from 'react';

import { CharacterCard } from 'src/Models/Cards';
import CharacterStatComponent from './CharacterStatComponent';

export default class CharacterCardComponent extends React.Component<CharacterCard, {}> {
    public render() {
        return (
            <div className="col">
                <div className="card">
                    <div>{this.props.name}</div>
                    <img src={this.props.imageUrl}></img>
                    <div>{this.props.description}</div>
                    <CharacterStatComponent {...this.props.memory} />
                    <CharacterStatComponent {...this.props.slumber} />
                    <CharacterStatComponent {...this.props.lucidity} />
                    <CharacterStatComponent {...this.props.providence} />
                </div>
            </div>
        );
    }
}
