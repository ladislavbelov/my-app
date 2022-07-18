import React from 'react';

const Music = () => {

    let man = {
        name: 'Vlad',
        age: 34,
        sayName() {
            return(this.age);
        }
    }
    let page = {
        title: `The title`,
        content: ``,
        render() {
            return(this.content)
        }
    }
        page.content = 'Some content';
    return (
        <div>
            <h2>Music</h2>
            {man.sayName()}

            {page.render()}
        </div>
    );
};

export default Music;