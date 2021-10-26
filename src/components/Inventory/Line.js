import * as React from 'react';

class Line extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fishes: ['Tuna', 'Marlin', 'Bass']
        };
    }

    render() {
        const moves = this.state.fishes.map((fishname, fish) => {
            return (
                <li key={fishname}>
                    <p> {fishname} </p>
                    <button >
                        Learn More
                    </button>
                </li>
            );
        });

        return (
            <div className="List">
                <ol>{moves}</ol>
            </div>
        );
    }


}

export default Line;