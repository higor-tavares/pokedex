import React from "react";
import Home from "./Home";
import { HashRouter as Router } from "react-router-dom";
export default {
    title: 'Pages/Home',
    component: Home
}

const Template = (args) => <Router><Home/></Router>

export const WithData = Template.bind({});