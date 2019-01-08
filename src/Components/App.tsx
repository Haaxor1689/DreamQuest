import * as React from 'react';

import CharacterCardComponent from "./CharacterCardComponent";
import { CharacterCard } from 'src/Models/Cards';

export default class App extends React.Component<{}, {}> {
    plcCharacterCard = (): CharacterCard => ({
        type: "Character",
        name: "Jannie",
        description: "Jannie was gut, she was here, he did stuff",
        imageUrl: "/assets/Clock.png",
        memory: {
            type: "Memory",
            value: 5,
        },
        slumber: {
            type: "Slumber",
            value: 10,
        },
        lucidity: {
            type: "Lucidity",
            value: 4,
        },
        providence: {
            type: "Providence",
            value: -2,
        },
    });

    public render() {
        return (
            <main role="main">
                <div className="containter">
                    <div className="row">
                        <CharacterCardComponent {...this.plcCharacterCard()} />
                    </div>
                </div>
            </main>
        );
    }
}
