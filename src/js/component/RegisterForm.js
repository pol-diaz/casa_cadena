import React from "react";

export const RegisterForm = () => {
    function FormExample() {
        const [validated, setValidated] = useState(false);
    
        const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
    
        setValidated(true);
        };
    
        return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please choose a username.
                </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="text" placeholder="Email Address" required />
                <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="State" required />
                <Form.Control.Feedback type="invalid">
                Please provide a valid password.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Confirm your password</Form.Label>
                <Form.Control type="text" placeholder="Zip" required />
                <Form.Control.Feedback type="invalid">
                Please provide a valid password.
                </Form.Control.Feedback>
            </Form.Group>
            </Form.Row>
            <Form.Group>
            <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
            />
            </Form.Group>
            <Button type="submit">Sign up</Button>
        </Form>
        );
    }
    
    render(<FormExample />);
}
    