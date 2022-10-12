import React from "react";
import Header from "./Header";
import { HashRouter as Router } from "react-router-dom";
export default {
    title: 'Page Header',
    component: Header,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
};

const Template = (args) => <Router><Header {...args}/></Router>

export const Normal = Template.bind({});
Normal.args = {
    backgroundColor: 'red'
}
export const Dark = Template.bind({});
Dark.args = {
    backgroundColor: 'black'
}