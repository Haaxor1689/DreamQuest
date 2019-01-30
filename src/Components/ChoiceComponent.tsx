import * as React from 'react';

import { Choice } from './../Models/Cards';

import StatsComponent from './StatsComponent';

export default class ChoiceComponent extends React.Component<Choice, {}> {
    private renderDescription = (): JSX.Element => (
        <span>{this.props.description}</span>
    )
    
    private renderRequirement = (): JSX.Element => (
        <StatsComponent stats={this.props.requirement!} backgroundClass="card-choice card-choice-requirement" />
    )
    
    private renderSuccess = (): JSX.Element => (
        <StatsComponent isReward stats={this.props.success!} backgroundClass="card-choice card-choice-reward" />
    )
    
    private renderFailure = (): JSX.Element => (
        <StatsComponent isReward stats={this.props.failure!} backgroundClass="card-choice card-choice-failure" />
    )
    
    public render = () => (
        <div className="col">
            { this.props.description && this.renderDescription() }
            { this.props.requirement && this.renderRequirement() }
            { this.props.success && this.renderSuccess() }
            { this.props.failure && this.renderFailure() }
        </div>
    )
}
