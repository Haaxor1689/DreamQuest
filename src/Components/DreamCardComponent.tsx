import * as React from 'react';

import { DreamCard } from './../Models/Cards';

import StatsComponent from './StatsComponent';
import BaseCardComponent from './BaseCardComponent';
import DividerComponent from './DividerComponent';
import ChoiceComponent from './ChoiceComponent';

export default class DreamCardComponent extends React.Component<DreamCard, {}> {
    private renderEffect = (): JSX.Element => (
        <div className="col">
            <StatsComponent isReward stats={this.props.effect!} backgroundClass="card-choice card-choice-reward" />
        </div>
    )
    
    private renderBody = (): JSX.Element => (
        <div className="row">
            <div className="col">
                <DividerComponent/>
                <div className="row">
                    { this.props.effect && this.renderEffect() }
                    { this.props.choices && this.props.choices.map((choice) => <ChoiceComponent { ...choice} />) }
                </div>
            </div>
            <div className="card-movement">{this.props.movement}</div>
        </div>
    )

    public render = () => <BaseCardComponent card={this.props} backgroundClass="card-body-dream" body={this.renderBody()} />
}
