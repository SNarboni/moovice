import React from 'react';
import Card from './Card';

class PopularBattle extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            movies:[],
            currentBattle:0,
            favorite:localStorage.getItem("favorite"),
        }
    }

    componentDidMount () {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=efd8a07427b2c721a89376dbc34799dd")
            .then(response => response.json())
            .then(moviesList => {
                this.setState({
                    movies: moviesList.results
                })
                console.log("movies:",this.state.movies)
            }).catch(error => alert("error"))
    }

    saveJaime =()=>{
        this.setState({
            currentBattle: this.state.currentBattle +2
         })
        console.log(this.state.movies[this.state.currentBattle].id)
        localStorage.setItem("favorite", this.state.movies[this.state.currentBattle].id)
    }
    saveJaime2 =()=>{
        this.setState({
            currentBattle: this.state.currentBattle +2
         })
        console.log(this.state.movies[this.state.currentBattle +1].id)
        localStorage.setItem("favorite", this.state.movies[this.state.currentBattle + 1].id)
    }

    render() {
        console.log('curr',this.state.currentBattle)
        console.log('curr',this.state.currentBattle+1)
        
        if(this.state.movies.length === this.state.currentBattle ){
            return(
                <h1>Vous avez parcouru tous les films</h1>
            )

        }else{
            return (
                <div>
                    <a onClick={this.saveJaime}>
                        <Card {...this.state.movies[this.state.currentBattle]} ></Card>
                    </a>
                    <a onClick={this.saveJaime2}>
                        <Card {...this.state.movies[this.state.currentBattle + 1]} ></Card>
                    </a>
                </div>
            )
        }

        
    }

}

export default PopularBattle;