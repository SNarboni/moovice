import React from 'react';
import Card from './Card';

class PopularBattle extends React.Component {

    constructor(props){
        super(props);
        let saveList = localStorage.getItem('curent')
        saveList = parseInt(saveList)
        if (saveList) {
            saveList = saveList;
        }else{
            saveList = 0;
        }
        this.state ={
            savelist:saveList,
            movies:[],
            currentBattle:0,
            currentsave:0,
            favorite:[],
        }
    }

    componentDidMount () {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=efd8a07427b2c721a89376dbc34799dd")
            .then(response => response.json())
            .then(moviesList => {
                this.setState({
                    movies: moviesList.results
                })
            }).catch(error => alert("error"))
    }

    sauvegardeDansFav=()=>{
        localStorage.setItem("favId",JSON.stringify([...this.state.favorite, this.state.movies[this.state.currentBattle].id]))
        this.setState({favorite: [...this.state.favorite, this.state.movies[this.state.currentBattle].id]})
        localStorage.setItem("curent",this.state.currentsave)
        this.setState({
            currentsave : this.state.currentsave + 1
        })
    }

    sauvegardeDansFav2=()=>{
        localStorage.setItem("favId",JSON.stringify([...this.state.favorite, this.state.movies[this.state.currentBattle +1].id]))
        this.setState({favorite: [...this.state.favorite, this.state.movies[this.state.currentBattle +1 ].id]})
        localStorage.setItem("curent",this.state.currentsave)
        this.setState({
            currentsave : this.state.currentsave + 1
        })
    }

    saveJaime =()=>{
        this.setState({
            currentBattle: this.state.currentBattle + 2,
            
         })
        this.sauvegardeDansFav()
    }

    saveJaime2 =()=>{
        this.setState({
            currentBattle: this.state.currentBattle + 2,
         })
        this.sauvegardeDansFav2()
    }

    render() {
        console.log("battle",this.state.currentBattle)
        console.log("save",this.state.currentsave)
        console.log("saveList",this.state.saveList)
        
        if(this.state.movies.length === this.state.currentBattle  || this.state.currentsave == 11){
            return(
                <h1>Vous avez parcouru tous les films</h1>
            )
        }else if(this.state.savelist == 9){
            return(
                <h1>Vous avez déja choisie tous vos films préférés</h1>
            )
        }else{
            return (
                <div className="d-flex flex-wrap justify-content-center">
                    <Card onClick={this.saveJaime} {...this.state.movies[this.state.currentBattle]} ></Card>
                    <Card onClick={this.saveJaime2} {...this.state.movies[this.state.currentBattle + 1]} ></Card>
                </div>
            )
        }

        
    }

}

export default PopularBattle;