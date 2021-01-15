import React from 'react';
import upsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component  {
    state = { result: [] }

     submitted = async (term) => {
        const res = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        })
        this.setState({result: res.data.results})
    }

    render(){
    return (
        <div className="ui container" style={{ marginTop:'10px'}}> 
            <SearchBar onSubmit={this.submitted} />
            Found: {this.state.result.length}
        </div>
    );
    
}
    
};

export default App;