import React from 'react';
import PopularBattle from './PopularBattle'
import Card from './Card'

class Favorites extends React.Component {

    constructor(props){
        super(props);
        let saveList = localStorage.getItem('curent')
        let fav = localStorage.getItem('favId')
        saveList = parseInt(saveList)
        if (saveList) {
            saveList = saveList;
        }else{
            saveList = 0;
        }
        
        if (fav) {
            fav = JSON.parse(fav);
        }else{
            fav = [];
        }
        this.state ={
            fav:fav,
            movies:[],
        }
        
    }

    componentDidMount () {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=efd8a07427b2c721a89376dbc34799dd")
            .then(response => response.json())
            .then(moviesList => {
                this.setState({
                    movies: moviesList.results
                })
            console.log("les id", moviesList.results[1].id)
            }).catch(error => alert("error"))
    }

    render() {
        // console.log("fav ID", this.state.fav[0])
        // console.log("movies", this.state.movies)

        // if(this.state.fav[0] == this.state.movies[0].id){
        //     return <h1>ca marche</h1>
        // }else{
            
        // }
        return <h1>nop</h1>
        // return(
        //     <div className="d-flex flex-wrap justify-content-center">
        //         <Card></Card>
        //     </div>
        // )
    }

}

export default Favorites;