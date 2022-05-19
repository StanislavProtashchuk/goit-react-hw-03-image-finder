import { Component } from "react";
import { ToastContainer } from "react-toastify";
import Searchbar from "./Searchbar/Searchbar";

export default class App extends Component {

  state = {
    name: ''
  }

  handleFormSubmit = name => {
    this.setState({name})
    console.log(name);
  };

// const BASE_URL = 'https://pixabay.com/api/';
// const KEY: '25738191-2a68a887d2690264ace752ae1';

  // componentDidMount() {    
  //   this.setState({ loading: true })
  //   fetch(`https://pixabay.com/api/?key=25738191-2a68a887d2690264ace752ae1&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1`)
  //     .then(res => res.json())
  //     .then(cat => this.setState({ cat }))
  //     .finally(() => this.setState({ loading: false }))
    
  // }
  


  render() {

    // const { cats } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={2000} position="top-center" />
        {/* {this.state.loading && <h1>Loading</h1>}
        {(
          <ul>
            <li></li>
          </ul>
        )} */}
      </div>
    );
  };
}
