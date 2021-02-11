import React from 'react';

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



    searchMovie = (number) =>{
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=efd8a07427b2c721a89376dbc34799dd")
    .then(response => response.json())
    .then(movieList => {
        this.setState({
            movies:movieList,
            name : movieList.results[number].title,
            id : movieList.results[number].id,
        })
        .catch(error => alert("error"))
        console.log(this.state.movies)
    })
    
    }
    
    onChange=(e)=>{
        this.setState({
            inputValue: e.target.value
        })
    }

    componentDidMount = ()=>{
    }


    render() {
        return (
            <div>
                <h1>Popular</h1>
                <input type="number" onChange={this.onChange}/>
                <button onClick={(e)=> this.searchMovie(this.state.inputValue)}>search</button>
                {this.state.movies.map((moo) => {
                    return <h1>{moo.results[3].title}</h1>
                })}
            </div>
        )
    }

}

export default Popular;