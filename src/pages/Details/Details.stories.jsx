import React from "react";
import Details from "./Details";
import { withRouter } from 'storybook-addon-react-router-v6';

export default {
    title: 'Pages/Details',
    component: Details,
    decorators: [withRouter]
}

export const Pikachu = () => <Details/>
Pikachu.story = {
    parameters: {
        reactRouter:{
            routePath: '/details/:name',
            routeParams: {name: 'pikachu'}
        }
    }
}