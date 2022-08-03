import Checkbox from "./Checkbox";

export default {
    title: "Practice/Checkbox",
    component: Checkbox,

    argTypes: {
        color: { control: 'color'},
        size: { control: { type:'radio', options : ['big', 'small'] }}
    }
};

export const StorybookCheckbox = (args) => (
    <Checkbox {...args}></Checkbox>
)