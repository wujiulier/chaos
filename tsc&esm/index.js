import _ from 'lodash';
export const greet = (name) => {
    return `hello,${_.capitalize(name)}`;
};
