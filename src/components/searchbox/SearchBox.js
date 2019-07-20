import React from 'react';

class SearchBox extends React.Component {
    state = {
        term: ''
    }

    handleChange = (event) => {
        this.setState({ term: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.searchCB(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.term} onChange={this.handleChange} type="text" />
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div >
        );
    }
};
export default SearchBox;