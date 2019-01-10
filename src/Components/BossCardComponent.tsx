import * as React from 'react';

import { BossCard } from 'src/Models/Cards';
import BaseCardComponent from './BaseCardComponent';

export default class BossCardComponent extends React.Component<BossCard, {}> {
    private renderBody = (): JSX.Element => (
        <div className="row">
        </div>
    )
    
    public render = () => <BaseCardComponent card={this.props} body={this.renderBody()} />
}
