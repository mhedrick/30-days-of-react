import * as React from "react"
import Layout from '../../components/layout'
import Card from 'react-bootstrap/Card';


class MouseCard extends React.Component {
    state = {
        styles: {
            position: "relative",
            width: "10rem",
            top: 0,
            left: 0
        }
    };

    // if this was a real life thing I imagine i'd use hooks to get the parent size, use that for the 
    // random placement, and make sure it's some distance away from the mouse, as well as not use
    // state to store the style object like this
    // this is in interest of time
    handleMouseEnter = () => {
        this.setState({
            styles: {
                ...this.state.styles,
                top: Math.floor(Math.random()*800),
                left: Math.floor(Math.random()*800)
            }
        })
    }

    render() {
        return (
            <Card bg="primary" style={this.state.styles} onMouseEnter={this.handleMouseEnter}>
                <Card.Body>
                    <Card.Text>
                        Click Me
                    </Card.Text>
                </Card.Body>
            </Card>)
    }
}



// markup 
const IndexPage = () => {
    return (
        <Layout>
            <MouseCard />
        </Layout>
    )
}

export default IndexPage;
