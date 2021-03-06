import * as React from 'react';

import { RealityCard } from './../Models/Cards';

import StatsComponent from './StatsComponent';
import BaseCardComponent from './BaseCardComponent';

export default class RealityCardComponent extends React.Component<RealityCard, {}> {
    private renderBody = (): JSX.Element => (
        <div className="row">
            <div className="col">
                <hr />
                <StatsComponent stats={this.props.effect} />
            </div>
        </div>
    )

    public render = () => <BaseCardComponent card={this.props} backgroundClass="card-body-real" body={this.renderBody()} />
}
