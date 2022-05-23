import { Component } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import API from "../services/API"
// import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Searchbar from "./Searchbar/Searchbar";

export default class App extends Component {

  state = {
    name: ''
  }

  handleFormSubmit = name => {
    this.setState({name})
    console.log(name);
  };

  render() {

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
        <API name={this.state.name}/>

      </div>
    );
  };
}
