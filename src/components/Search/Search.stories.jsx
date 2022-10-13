import React from "react";
import Search from "./Search";
export default {
    title: 'Components/Search',
    component: Search
}
const Template = (args) => <Search {...args} />
export const Normal = Template.bind({});
export const Dark = Template.bind({});
Dark.args = {
    backgroundColor: 'black'
}
