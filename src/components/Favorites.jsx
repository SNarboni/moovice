import React from 'react';

class Favorites extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            favorites : localStorage.getItem()
        }
    }

    render() {
        return (
            <div>
                <h1>Favorites</h1>
            </div>
        )
    }

}

export default Favorites;