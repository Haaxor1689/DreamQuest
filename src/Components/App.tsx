import * as React from 'react';
import { Navbar, Nav, NavLink, Container, NavbarBrand, Row } from 'reactstrap';
import { groupBy } from 'lodash';

import { Card, Cards } from './../Models/Cards';

import CardsJSON from './../Data/Cards.json';
import exportedTypeSuite from './../Models/Cards-ti';
import {createCheckers} from "ts-interface-checker";

import SectionHeader from './SectionHeader';
import AnyCard from './AnyCard';
import Rules from './Rules';

const checker = createCheckers(exportedTypeSuite);
checker.Cards.check(CardsJSON);

interface IAppState {
    cards: { [type: string]: Card[] },
}

export default class App extends React.Component<{}, IAppState> {
    public state: IAppState = {
        cards: groupBy((CardsJSON as Cards).cards, "type"),
    }

    public render = () => [
        <Navbar className="sticky-top" light color="light">
            <NavbarBrand className="card-brand">DreamQuest</NavbarBrand>
            <Nav>
                <NavLink href="#">Home</NavLink>
                <NavLink href="#Rules">Rules</NavLink>
                { Object.keys(this.state.cards).map(title => <NavLink href={`#${title}`}>{`${title} cards`}</NavLink>)}
            </Nav>
        </Navbar>,
        <main role="main">
            <Container>
                <Row>
                    <SectionHeader title={"Rules"} />
                    <Rules />
                </Row>
                { Object.entries(this.state.cards).map((pair) => 
                    <Row>
                        <SectionHeader title={pair[0]} />
                        { pair[1].map(card => <AnyCard {...card} />) }
                    </Row>)
                }
            </Container>
        </main>
    ]
}
