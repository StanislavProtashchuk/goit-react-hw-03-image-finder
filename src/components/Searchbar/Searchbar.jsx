import { Component } from 'react';
import { toast } from 'react-toastify';

export default class Searchbar extends Component{
    state = {
        name: '',
    };

    handleNameChange = e => {
        this.setState({ name: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.name.trim() === '') {
            return toast.error('Enter picture name!');
            // return;
        }
        this.props.onSubmit(this.state.name);
        this.setState({ name: '' });
    };


render(){
    return(
        <header class= "searchbar" >
        <form class="form" onSubmit={this.handleSubmit}>
            <button type="submit" class="button">
                <span class="button-label">Search</span>
                </button>
                
                <input
                    class="input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                    value={this.state.name}
                    onChange={this.handleNameChange}
            />
        </form>
        </header>
            )
        };};

