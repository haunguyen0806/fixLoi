import React, { Component } from 'react'
import Axios from 'axios';
import Movie from "./../../../components/Movie"

export default class ListMoviePage extends Component {
    constructor(props){
        super(props);

        this.state ={
            listMovie: []
        };
    }
    componentDidMount(){
        Axios({
            url:"https://5f2383343b9d3500162036ac.mockapi.io/listMovie",
            method: "GET"
        })
        .then((result)=>{
            console.log(result.data);
            this.setState({
                listMovie: result.data
            });
        })
        .catch(err => {
            console.log(err);
        })
    }

    renderListMovie= () => {
        const { listMovie } = this.state ;
        if(listMovie && listMovie.length > 0){
            return listMovie.map((movie)=>{
                return <Movie key={movie.maPhim} movie={movie} />
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderListMovie()}
                </div>
            </div>
        )
    }
}
