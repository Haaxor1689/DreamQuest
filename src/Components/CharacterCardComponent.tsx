import * as React from 'react';

import { CharacterCard } from './../Models/Cards';
import { getUrl } from '../Helpers/ImageUrlHelper';
import DividerComponent from './DividerComponent';

export default class CharacterCardComponent extends React.Component<CharacterCard, {}> {
    public renderSpecial = () => {
        var index = this.props.special.indexOf(":") + 1;
        return <div className="card-special">
            <span className="card-special-name">
                {this.props.special.substring(0, index)}
            </span>
            {this.props.special.substring(index, this.props.special.length)}
        </div>
    }

    public render = () => (
        <div className="character-card">
            <div className="card-header">
                <div className="card-header-container">
                    <div className="card-title">{this.props.name}</div>
                    <div className="card-profession">{this.props.profession}</div>
                </div>
                <img className="card-image" src={getUrl(this.props.imageUrl)}></img>
            </div>
            <div className="card-body">
                <div className="card-description">{this.props.description}</div>
                <div style={{textAlign: "center"}}>
                    <DividerComponent />
                </div>
                { this.renderSpecial() }
            </div>
            <div className="card-lucidity">
                { [6,5,4,3,2,1,0].map(i => <div className="card-lucidity-number">{i}</div>) }
            </div>
            <div className="card-memory">{this.props.stats.memory}</div>
            <div className="card-slumber">{this.props.stats.slumber}</div>
        </div>
    )
}
