import * as React from 'react';

import { DreamCard } from 'src/Models/Cards';
import { Choice } from 'src/Models/Models';
import StatsComponent from './StatsComponent';
import BaseCardComponent from './BaseCardComponent';

export default class DreamCardComponent extends React.Component<DreamCard, {}> {
    private renderChoice = (choice: Choice): JSX.Element => (
        <div className="col">
            <p>{choice.description}</p>
            <StatsComponent { ...choice.requirement } />
            <hr/>
            <StatsComponent { ...choice.reward } />
        </div>
    )
    
    private renderBody = (): JSX.Element => (
        <div className="row">
            <div className="col">
                <hr/>
                <div className="row">
                    { this.props.choices.map((choice) => this.renderChoice(choice)) }
                </div>
            </div>
        </div>
    )
    
    public render = () => <BaseCardComponent card={this.props} body={this.renderBody()} />
}
