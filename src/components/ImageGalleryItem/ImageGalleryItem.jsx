import { Component } from 'react';
import axios from 'axios';

export default class ImageGalleryItem extends Component {
  state = {
    pictures: [],
    loading: false,
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.name;
    const nextName = this.props.name;

    if (prevName !== nextName) {
      console.log('Змінилось імя', nextName);

      this.setState({ loading: true, pictures: [] });
      axios.get(`https://pixabay.com/api/?key=25738191-2a68a887d2690264ace752ae1&q=${nextName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1`)
        .then(res => {
          return res.data.hits;
        })
        .then(pictures => this.setState({ pictures }))
        .finally(() => this.setState({ loading: false }));
      
    }
  }

  render() {
    const { pictures, loading} = this.state
    return pictures.map(({ id, webformatURL }) => {
      return (
        <div>
          {loading && <div>Loading...</div>}
          {pictures &&
            <ul>
              <li id={id} class="gallery-item">
                <img src={webformatURL} alt="" />
              </li>
            </ul >
          }
        </div>
      )
    })
  }
}