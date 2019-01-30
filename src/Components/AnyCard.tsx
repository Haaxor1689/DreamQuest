import * as React from 'react';

import { Card } from '../Models/Cards';

import CharacterCardComponent from "./CharacterCardComponent";
import RealityCardComponent from './RealityCardComponent';
import DreamCardComponent from './DreamCardComponent';
import BossCardComponent from './BossCardComponent';
import { Col } from 'reactstrap';

export default class AnyCard extends React.Component<Card> {
    public renderCard = () => {
        switch (this.props.type) {
            case "Character": return <CharacterCardComponent {...this.props} />;
            case "Reality": return <RealityCardComponent {...this.props} />;
            case "Dream": return <DreamCardComponent {...this.props} />;
            case "Boss": return <BossCardComponent {...this.props} />;
            default: return <div></div>;
        }
    }    

    public render = () => (
        <Col>
            {this.renderCard()}
        </Col>
    )
}
