import {Component} from 'react';

class DescriptionCard extends Component {

    render() {

        let  affiliations =''+ this.props.affiliations.map(a => " "+a);
        affiliations = affiliations+'.';

        let masters=null;
        let mastersP=null;
        if(this.props.masters){
            if (this.props.masters instanceof Array) {
                masters  =''+ this.props.masters.map(a => " "+a);
                masters = masters+".";
                mastersP= <p className="card-text">Masters: {masters}</p>  
            } else{
                mastersP= <p className="card-text">Masters: {this.props.masters}</p>  
            }    
        }
        
        let apprentices=null;
        let apprenticesP=null;
        if(this.props.apprentices){
            if (this.props.apprentices instanceof Array) {
                apprentices  =''+ this.props.apprentices.map(a => " "+a);
                apprentices = apprentices+".";
                apprenticesP= <p className="card-text">Apprentices: {apprentices}</p>
            } else{
                apprenticesP= <p className="card-text">Apprentices: {this.props.apprentices}</p> 
            }           
        }

        let manufP;
        if(this.props.manufacturer != null){
            manufP = <p className="card-text">Manufacturer: {this.props.manufacturer}</p>
        }

        let equipP;
        if(this.props.equipment != null){
            equipP = <p className="card-text">Equipment: {this.props.equipment}</p>
        }

        let modelfP;
        if(this.props.model != null){
            modelfP = <p className="card-text">Model: {this.props.model}</p>
        }
        

        return (
            <>
            <div className="card mb-2 bg-dark text-white"  style={{"marginTop":100, "height":670}}>
                <div className="row g-0">
                    <div className="col-lg-4 col-md-7 col-sm-4 col-xs-12 ml-4 mt-4">
                    <br/>
                    <img src={this.props.img} width="300" height="350"  className="rounded mx-auto d-block" alt="Imagen no disponible"/>
                    </div>
                    <div className="col-md-5">
                        <div className="card-body " style={{'height':600}}>
                            <h5 className="card-title">Name: {this.props.name}</h5>
                            <p className="card-text">Species: {this.props.species}</p>
                            <p className="card-text">Gender: {this.props.gender}</p>
                            <p className="card-text">Height: {this.props.height}</p>
                            <p className="card-text">Weight: {this.props.weight}</p>
                            <p className="card-text">Homeworld: {this.props.homeworld}</p>
                            <p className="card-text">Wiki: {this.props.wiki}</p>
                            {modelfP}
                            {manufP}
                            {equipP}
                            <p className="card-text">Affiliations: {affiliations}</p>
                            {mastersP}
                            {apprenticesP}
                            
                            
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
             </>

        );
    }

}

export default DescriptionCard;