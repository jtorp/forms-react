import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from './UserForm';

describe("UserForm", () => {
    it("renders without crashing", () => {
        const div = document.createElement("div");
        ReactDOM.render(<UserForm/>, div);
    });
});
