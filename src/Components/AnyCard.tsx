import * as React from 'react';

import { Card } from '../Models/Cards';

import CharacterCardComponent from "./CharacterCardComponent";
import RealityCardComponent from './RealityCardComponent';
import DreamCardComponent from './DreamCardComponent';
import BossCardComponent from './BossCardComponent';

export default class AnyCard extends React.Component<Card> {
    public render = () => {
        switch (this.props.type) {
            case "Character": return <CharacterCardComponent {...this.props} />;
            case "Reality": return <RealityCardComponent {...this.props} />;
            case "Dream": return <DreamCardComponent {...this.props} />;
            case "Boss": return <BossCardComponent {...this.props} />;
            default: return <div></div>;
        }
    }    
}
