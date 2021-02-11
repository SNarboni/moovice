import React from 'react';
import Card from './Card'

class Popular extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            movies:[],
            name:"",
            id:"",
            img:"",
        }
    }



    // searchMovie = (number) =>{
       
    // })
    
    // }
    
    onChange=(e)=>{
        this.setState({
            inputValue: e.target.value
        })
    }

    componentDidMount (){
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=efd8a07427b2c721a89376dbc34799dd")
        .then(response => response.json())
        .then(movieList => {
            this.setState({
                movies: movieList.results,
            })
            })
            .catch(error => alert("error"))
    }


    render() {
        return (
            <div>
                <Card />
                {/* <h1>Popular</h1>
                {this.state.movies.map((mov) => {
                    return(<p>{mov.title}</p>)
                })} */}
            </div>
        )
    }

}

export default Popular;