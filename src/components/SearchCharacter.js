import { Component } from "react";
import Banner from '../components/Banner';
import CharacterList from "../components/CharacterList";
import '../App.css';

class SearchCharacter extends Component {

    state = {
        loading:true,
        error:null,
        data: {},
    };


  componentDidMount(){
    this.getCharacters();

  }

  getCharacters = async () => {
    this.setState({loading:true, error: null});

    try {
      const response = await fetch('https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json');
      const data = await response.json();

      this.setState({
        loading:false,
        data: data
      })
    } catch (error) {
      console.log("Error en la página");
      this.setState({loading:false, error:error});
    }
  }

  
  render() {
    let search = this.props.searchTag;

    return (
      <>
      <div className="container searchCharDim">

        <Banner/>

        {!this.state.loading && <CharacterList characters={this.state.data} search={search}></CharacterList>}

        {this.state.loading && <h6 className="text-center">Loading...</h6>}

        {!this.state.loading && this.state.error && <h6 className="text-center">Ha ocurrido un error: {this.state.error}</h6>}

      </div>
      </>
    );
  }
}



export default SearchCharacter;