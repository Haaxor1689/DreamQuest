import * as React from 'react';

import CharacterCardComponent from "./CharacterCardComponent";
import { Card } from 'src/Models/Cards';
import { getCards } from 'src/Helpers/CardsRetriever';

interface IAppState {
    cards: Card[]
}

export default class App extends React.Component<{}, IAppState> {
    public state: IAppState = {
        cards: [],
    }

    componentDidMount = async () => {
        const cards = await getCards();
        this.setState((prevState) => ({
            ...prevState,
            cards,
        }))
    }

    public render() {
        return (
            <main role="main">
                <div className="containter">
                    <div className="row">
                        {this.state.cards.map((card) => {
                            switch (card.type) {
                                case "Character": return <CharacterCardComponent {...card} />;
                                default: return <div></div>;
                            }
                        })}
                        
                    </div>
                </div>
            </main>
        );
    }
}
