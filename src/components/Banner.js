import { Component } from 'react';

class Banner extends Component{
    render() {
        return (
            <>
            <div className="jumbotron jumbotron-fluid text-center text-white rounded bg-dark" style={{"marginTop":70}}>
                <div className="container">
                <h1 className="display-4 font-romanic">
                    The Ultimate Star Wars Characters List
                </h1>
                <h6>
                    A simple list of Star Wars characters. Click on 'See more' to know more details and May the Force Be with You!
                </h6>
                
                </div>
            </div>
            </>
        );
    }
}

export default Banner;