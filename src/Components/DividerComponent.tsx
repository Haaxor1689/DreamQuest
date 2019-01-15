import * as React from 'react';

import { getUrl } from 'src/Helpers/ImageUrlHelper';

export default class DividerComponent extends React.Component<{}, {}> {
    public render = () => <img className="card-divider" src={getUrl("assets/Divider.png")}></img>
}
