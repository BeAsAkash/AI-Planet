import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const FilterBar = ({ onSort, onFilter, onSearch }) => {
  return (
    <Form>
      <Row>
        <Col md={4}>
          <Form.Control type="text" placeholder="Search Hackathons..." onChange={onSearch} />
        </Col>
        <Col md={4}>
          <Form.Select onChange={onSort}>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select onChange={onFilter}>
            <option value="all">All Levels</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterBar;
