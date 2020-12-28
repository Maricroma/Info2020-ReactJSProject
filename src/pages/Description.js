import { Component } from "react";
import DescriptionCard from "../components/DescriptionCard";

class Description extends Component {

  state = {
      loading:true,
      error:null,
      data: {}
  }

  componentDidMount(){
    this.getDescription();

  }

  getDescription = async () => {
    this.setState({loading:true, error: null});
    const {handle} = this.props.match.params

    try {
      const response = await fetch(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${handle}.json`);
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

    let masters=false 
    if( this.state.data.masters){
      masters=this.state.data.masters;
    } 
    let apprentices=false;
    if(this.state.data.apprentices){
      apprentices= this.state.data.apprentices
    }
    const equipment = this.state.data.equipment != null ?this.state.data.equipment: null;
    const manufacturer = this.state.data.manufacturer != null ?this.state.data.manufacturer: null;
    const model = this.state.data.model != null ?this.state.data.model: null;


    return (
      <>
      <div className="container">

        {!this.state.loading && 
        <DescriptionCard   id = {this.state.data.id}
                name = {this.state.data.name}
                gender = {this.state.data.gender}
                img = {this.state.data.image}
                species = {this.state.data.species}
                height = {this.state.data.height}
                weight = {this.state.data.mass}
                homeworld = {this.state.data.homeworld}
                wiki = {this.state.data.wiki}
                model =  {model}
                manufacturer = {manufacturer}
                equipment = {equipment}
                affiliations = {this.state.data.affiliations}
                masters = {masters}
                apprentices= {apprentices}>
        </DescriptionCard>}

        {this.state.loading && <h6 className="text-center">Loading...</h6>}

        {!this.state.loading && this.state.error && <h6 className="text-center">Ha ocurrido un error: {this.state.error}</h6>}

      </div>
      </>
    );
  }
}



export default Description;