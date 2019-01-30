import * as React from 'react';

import { BaseCard } from './../Models/Cards';
import { getUrl } from './../Helpers/ImageUrlHelper';

interface IBaseCardComponentProps {
    card: BaseCard,
    body: JSX.Element,
    backgroundClass: string,
}

export default class BaseCardComponent extends React.Component<IBaseCardComponentProps, {}> {
    public render = () => (
        <div className="card-container">
            <div className="card-base">
                <img className="card-image" src={getUrl(this.props.card.imageUrl)}></img>
                <div className={"card-body " + this.props.backgroundClass }>
                    <div className="card-title">{this.props.card.name}</div>
                    <div className="card-description">{this.props.card.description}</div>
                    { this.props.body }
                </div>
            </div>
        </div>
    )
}
