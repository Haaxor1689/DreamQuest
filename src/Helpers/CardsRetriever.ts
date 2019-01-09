import $ from "jquery"

import { Card } from 'src/Models/Cards';

export const getCards = async (): Promise<Card[]> => await $.getJSON("https://raw.githubusercontent.com/Haaxor1689/DreamQuest/master/data/cards.json");