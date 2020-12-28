import { Component } from 'react';
import { Link } from 'react-router-dom';


class Character extends Component {

    render() {
        return (
            <>
                <div className="col-lg-6 col-sm-12 ">
                    <div className="card text-white bg-dark row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">Characters</strong>
                            <h3 className="mb-0">{this.props.name}</h3>
                            <p className="card-text mb-auto">{this.props.species}</p>
                            <Link to={{
                                pathname: `/description/${this.props.id}`
                            }}>
                                <button className="btn btn-outline-secondary text-white">See more</button>
                            </Link>
                        </div>
                        <div className="col-auto d-none d-lg-block img-fluid">
                            <img width="200" height="250" src={this.props.img}/>
                        </div>
                    </div>
                </div>
            </> 
        );
    }
}

export default Character;