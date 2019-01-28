import * as React from 'react';

import { Card, Cards } from 'src/Models/Cards';

import CharacterCardComponent from "./CharacterCardComponent";
import RealityCardComponent from './RealityCardComponent';
import DreamCardComponent from './DreamCardComponent';
import BossCardComponent from './BossCardComponent';

import CardsJSON from './../Data/Cards.json';
import exportedTypeSuite from 'src/Models/Cards-ti';
import {createCheckers} from "ts-interface-checker";

const checker = createCheckers(exportedTypeSuite);
checker.Cards.check(CardsJSON);

interface IAppState {
    cards: Card[]
}

export default class App extends React.Component<{}, IAppState> {
    public state: IAppState = {
        cards: (CardsJSON as Cards).cards,
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
