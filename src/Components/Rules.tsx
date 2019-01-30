import * as React from 'react';
import { Marked } from 'marked-ts';

const raw = require("raw.macro");

export default class Rules extends React.Component {
    public render = () => <div dangerouslySetInnerHTML={{ __html: Marked.parse(raw('./../Data/Rules.md')) }} />
}
