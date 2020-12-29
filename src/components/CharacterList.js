import {Component} from 'react';
import Character from '../components/Character';
import InfiniteScroll from 'react-infinite-scroll-component';

class CharacterList extends Component {

    render() {

        let characters = null;
        if (this.props.search) {
            const searchTag = this.props.search.toUpperCase();
            characters = this.props.characters.map((character) => { 
                if(character.name.toUpperCase().includes(searchTag) || searchTag.toUpperCase().includes(character.name) || this.props.search === character.id){
                    return <Character 
                    key = {character.id} 
                    id = {character.id}
                    name = {character.name}
                    gender = {character.gender}
                    img = {character.image}
                    species = {character.species}
                    >
                    </Character>
                }
            });
        } else {
            characters = this.props.characters.map((character) =><Character  
                key = {character.id}
                id = {character.id}
                name = {character.name}
                gender = {character.gender}
                img = {character.image}
                species = {character.species}
                >
                </Character>);
        }

        return(
            <>
            
            <InfiniteScroll 
            dataLength={this.props.characters.length}
            hasMore={true}
            style={{ display: 'flex', flexDirection: 'column-reverse', overflowX: 'hidden' }} >

            <div className="row mb-2">
                {characters}
            </div>
            </InfiniteScroll>
            
            </>
        );
    }
}

export default CharacterList;