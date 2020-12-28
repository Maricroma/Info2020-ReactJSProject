import {Component} from 'react';
import Character from '../components/Character';
import InfiniteScroll from 'react-infinite-scroll-component';

class CharacterList extends Component {

    render() {
        return(
            <>
            <InfiniteScroll 
            dataLength={this.props.characters.length}
            hasMore={true}

            className="row mb-2">

                {this.props.characters.map(character =>{
                return(
                    <Character  
                    id = {character.id}
                    name = {character.name}
                    gender = {character.gender}
                    img = {character.image}
                    species = {character.species}
                    >
                    </Character>
                    );
                })}

            </InfiniteScroll>
            </>
        );
    }
}

export default CharacterList;