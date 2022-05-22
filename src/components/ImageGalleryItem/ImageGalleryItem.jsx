import { Component } from 'react';
import { toast } from 'react-toastify';

export default class ImageGalleryItem extends Component {
  state = {
    pictures: null,
    error: null,
    status: 'idle' ,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.name;
    const nextName = this.props.name;

      if (prevName !== nextName) {
      this.setState({status: 'pending'});
        fetch(`https://pixabay.com/api/?key=25738191-2a68a887d2690264ace752ae1&q=${nextName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1`)
          .then(response => {
            if (response.ok) {
              return response.json();
            }

            return Promise.reject(
              new Error(`No picture with name ${nextName}`),
            );
          })
          .then(pictures => this.setState({ pictures, status: 'resolved' }))
          .catch(error => this.setState({ error, status: 'rejected' }))
    }
  }

  render() {
    const { pictures, status} = this.state
    
    if (status === 'idle') {
  return <div>Please enter picture name.</div>
    }
    
    if (status === 'pending') {
      return <div>Loading...</div>
    }

    if (status === 'rejected' || pictures.hits.length === 0) {
      // return <h1>No picture with name: "{this.props.name}"</h1>
      return toast.error(`No picture with name: "${this.props.name}"`);
    }

    if (status === 'resolved') {
      return pictures.hits.map(({ id, webformatURL }) => {
        return <ul>
          <li id={id} class="gallery-item">
            <img src={webformatURL} alt="" />
          </li>
        </ul >
      })
    }
  }
}