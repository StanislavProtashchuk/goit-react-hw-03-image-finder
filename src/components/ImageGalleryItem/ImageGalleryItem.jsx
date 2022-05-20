import { Component } from 'react';

export default class ImageGalleryItem extends Component {
  state = {
    pictures: []
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.name;
    const nextName = this.props.name;

    if (prevName !== nextName) {
      console.log('Змінилось імя', nextName);

      this.setState({ loading: true });
      fetch(`https://pixabay.com/api/?key=25738191-2a68a887d2690264ace752ae1&q=${nextName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=1`)
        .then(res => res.json())
        .then(pictures => this.setState({ pictures }))
        .finally(() => this.setState({ loading: false }));
      
    }
  }

  render() {
    const { pictures, loading } = this.state
    const { id, webformatURL } = pictures
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

  }
}