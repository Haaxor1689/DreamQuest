import $ from "jquery"

import { Card } from 'src/Models/Cards';
import { getUrl } from './ImageUrlHelper';

export const getCards = async (): Promise<Card[]> => await $.getJSON(getUrl("/data/cards.json"));