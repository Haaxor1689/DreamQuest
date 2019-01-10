import * as React from 'react';

import { BaseCard } from 'src/Models/Cards';
import { getUrl } from 'src/Helpers/ImageUrlHelper';

interface IBaseCardComponentProps {
    card: BaseCard,
    body: JSX.Element,
}

export default class BaseCardComponent extends React.Component<IBaseCardComponentProps, {}> {
    public render = () => (
        <div className="col">
            <div className="card">
                <div className="card-title">{this.props.card.name}</div>
                <img className="card-image" src={getUrl(this.props.card.imageUrl)}></img>
                <div className="card-description">{this.props.card.description}</div>
                { this.props.body }
            </div>
        </div>
    )
}
