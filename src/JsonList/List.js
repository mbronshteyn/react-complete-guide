import React, {Component} from 'react';

import axios from 'axios';

class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: null,
      body: null,
      id: props.id,
    };
  }

  componentDidMount() {
    console.log('in component did mount');
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
      .then(response => response.data)
      .then((data) => this.setState({
        title: data.title,
        body: data.body
      }));

  }

  render() {
    console.log('Data', this.state.data);
    return (
      <div>
        <h1>'Hello world from List!!!' </h1>
        <h4> Title: {this.state.title}</h4>
        <h4>Body: {this.state.body} </h4>
      </div>
    )
  }
}

export default List;