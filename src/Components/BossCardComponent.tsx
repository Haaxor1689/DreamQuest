import * as React from 'react';

import { BossCard } from './../Models/Cards';

import BaseCardComponent from './BaseCardComponent';

export default class BossCardComponent extends React.Component<BossCard, {}> {
    private renderBody = (): JSX.Element => (
        <div className="row">
        </div>
    )
    
    public render = () => <BaseCardComponent card={this.props} backgroundClass="card-body-real" body={this.renderBody()} />
}
