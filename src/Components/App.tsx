import * as React from 'react';

import { Card } from 'src/Models/Cards';

import CharacterCardComponent from "./CharacterCardComponent";
import RealityCardComponent from './RealityCardComponent';
import DreamCardComponent from './DreamCardComponent';
import BossCardComponent from './BossCardComponent';

import CardsJSON from './../Data/Cards.json';

interface IAppState {
    cards: Card[]
}

export default class App extends React.Component<{}, IAppState> {
    public state: IAppState = {
        cards: CardsJSON as Card[],
    }

    public render = () => (
        <main role="main">
            <div className="containter">
                <div className="row">
                    {this.state.cards.map((card) => {
                        switch (card.type) {
                            case "Character": return <CharacterCardComponent {...card} />;
                            case "Reality": return <RealityCardComponent {...card} />;
                            case "Dream": return <DreamCardComponent {...card} />;
                            case "Boss": return <BossCardComponent {...card} />;
                            default: return <div></div>;
                        }
                    })}
                </div>
            </div>
        </main>
    )
}
