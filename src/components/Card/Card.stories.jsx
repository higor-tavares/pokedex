import React from 'react';
import Card from './Card';
import { HashRouter as Router } from 'react-router-dom';
export default {
    title: 'Components/Card',
    component: Card
}

const Template = (args) => <Router><Card {...args}/></Router>

export const PicachuCard = Template.bind({});
export const MewTwo = Template.bind({});

PicachuCard.args = {
    name: 'pikachu'
}
MewTwo.args = {
    name: 'mewtwo'
}
