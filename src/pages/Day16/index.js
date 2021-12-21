import * as React from "react"
import Layout from '../../components/layout'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

// Take in a component as argument WrappedComponent
function floatingLabel(InputComponent, props, label) {
    // And return a new anonymous component
    return class extends React.Component {
        render() {
            return (
            <FloatingLabel
                controlId="floatingInput"
                label={label}
                className="mb-3">
                <InputComponent {...props} />
            </FloatingLabel>)
        }
    }
}
const FloatingEmail = floatingLabel(Form.Control, { type: 'email', placeholder: 'me@maggiekh.com'}, 'Email');
const FloatingPassword = floatingLabel(Form.Control, { type: 'password', placeholder: 'password'}, 'Password');

// markup 
const IndexPage = () => {
    return (
        <Layout>
            <FloatingEmail />
            <FloatingPassword />
        </Layout>
    )
}

export default IndexPage;
