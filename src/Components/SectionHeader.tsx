import * as React from 'react';

import DividerComponent from './DividerComponent';

interface ISectionHeaderProps {
    title: string;
}

export default class SectionHeader extends React.Component<ISectionHeaderProps> {
    public render = () => (
        <div className="section-heading" id={this.props.title}>
            <div className="section-title">{`${this.props.title}`}</div>
            <DividerComponent />
        </div>
    )
}
