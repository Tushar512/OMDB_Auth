import React, {Component} from 'react';
import "./DetailsPage.css";
import axios from 'axios';
import {baseUrl, axiosHeaders} from  "../../utils/constants";

export default class DetailsPage extends Component {
    constructor(props) {
        super(props);
        this.imdbID = props.match.params.imdbID;
        this.state = {
            uri: `${baseUrl}omdb/imdb/${this.imdbID}`,
            searchResult:{},
            loaded:false,
        }
        this.back = this.back.bind(this);
    }
    // const [searchResult, setSearchResult] = useState([]);
    componentDidMount (){
        axios(this.state.uri, axiosHeaders)
        .then(res => {
            this.setState({searchResult:res.data, loaded:true});
            console.log(res);
        })
        .catch(err => console.error(err));
        console.log("Hello")
    };
    /**
     * Call server with imdbID
     * URL Format : http://localhost:3001/omdb/imdb/tt0944947
     * const imdbID = params.imdbID;
     */
    back() {
        this.props.history.push('/');
    }
    render() {
        const movie = this.state.searchResult;
        const isLoaded = this.state.loaded;
        let division;
        if(isLoaded)
            division = <div className="container">
                <button className="btn btn-primary" onClick={this.back}>Back</button>
                <div className="row" style={{marginTop:20}}>
                    <div className="col-sm-6">
                        <img src={movie.Poster} className="movie-image" width="300cm" alt="Poster"/>
                    </div>
                    <div className="col-sm-6"> 
                        <h2>{movie.Title}</h2>
                        <h4>{movie.Year}</h4>
                        <h4>{movie.Genre}</h4>
                        <h4>{movie.imdbRating}</h4>
                    </div>
                </div>
                </div>   
        else
            division = <></>
        return (
            division
        )
    }
};