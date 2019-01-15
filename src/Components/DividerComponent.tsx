import * as React from 'react';

import Divider from "./../Assets/Divider.png";

export default class DividerComponent extends React.Component<{}, {}> {
    public render = () => <img className="card-divider" src={Divider}></img>
}
