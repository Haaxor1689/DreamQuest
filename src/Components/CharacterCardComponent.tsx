import * as React from 'react';

import { CharacterCard } from 'src/Models/Cards';
import StatsComponent from './StatsComponent';
import BaseCardComponent from './BaseCardComponent';

export default class CharacterCardComponent extends React.Component<CharacterCard, {}> {
    
    private renderBody = (): JSX.Element => <StatsComponent {...this.props.stats} />
    
    public render = () => <BaseCardComponent card={this.props} body={this.renderBody()} />
}
