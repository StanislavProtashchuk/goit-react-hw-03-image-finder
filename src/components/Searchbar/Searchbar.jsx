import { Component } from 'react';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      return toast.error('Введіть назву картинки');
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span></span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.query}
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}