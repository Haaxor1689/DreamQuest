import * as React from 'react';

import {  Choice } from 'src/Models/Models';
import StatsComponent from './StatsComponent';

export default class ChoiceComponent extends React.Component<Choice, {}> {
    private renderDescription = (): JSX.Element => (
        <span>{this.props.description}</span>
    )
    
    private renderRequirement = (): JSX.Element => (
        <div>
            <span>Req: </span>
            <StatsComponent stats={this.props.requirement!} />
        </div>
    )
    
    private renderSuccess = (): JSX.Element => (
        <div>
            <span>Reward: </span>
            <StatsComponent isReward stats={this.props.success!} />
        </div>
    )
    
    private renderFailure = (): JSX.Element => (
        <div>
            <span>Failure: </span>
            <StatsComponent isReward stats={this.props.failure!} />
        </div>
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
