import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../css/searchForm.css';

function SearchFormView(props) {
    return (
        <div className="search-form-section">
            <div className="search-form">
                <Form className="form">
                    <Form.Group className="form-group" controlId="formSearch">
                            <Row className="g-2">
                                <h1>Search For Movies</h1>
                            </Row>
                            <Row className="g-2">
                                <InputGroup>
                                    <Form.Control className="input" type="search" placeholder="Search..." onInput={e => props.onText(e.target.value)} />
                                    <Button className="button" variant="dark" onClick={() => props.onSearch()}>Search</Button>
                                </InputGroup>
                            </Row>
                    </Form.Group>
                </Form>
            </div>

        </div>
    );
}

export default SearchFormView;