import * as React from "react"


class Exercise2 extends React.Component {
    constructor(props) {
        super(props);
        setTimeout(() => this.setState({ loaded: true }), 3000);
    }

    state = {
        loaded: false
    }

    render() {
        return (
            <div className="d-flex flex-wrap mt-2">
                {!this.state.loaded &&
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                }
                {this.state.loaded &&
                    <span>Hey it loaded, congrats!</span>
                }
            </div>
        )
    }
}


export default Exercise2;