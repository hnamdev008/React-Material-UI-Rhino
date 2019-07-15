import * as React from 'react';

export class Control extends React.Component<void, void> {
    public render() {
        return ( 
            <div>{ this.props.children }</div>
        );
    }
}

interface Couple {
    controls: Array<React.ReactElement<void>>
    others: Array<React.ReactNode>
}

//sift(what: React.ReactElement, from:React.ReactNode)
export const sift = (node: React.ReactNode): Couple => {
    let controls = new Array<React.ReactElement<void>>();
    let others = new Array<React.ReactNode>();

    React.Children.forEach(node, (child, idx) => {
        if(child) {
            if(child['type'] == Control)
                controls.push(<li key={idx}>{ child }</li>);
            else
                others.push(child)
        }
    });
        
    return { controls: controls, others: others }
}