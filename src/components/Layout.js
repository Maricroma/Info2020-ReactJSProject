import {Component} from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

class Layout extends Component {

    render() {
        return(
            <>
                <NavBar/>

                <Footer/>
            </>
        );
    }
}

export default Layout;