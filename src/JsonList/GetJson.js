import React, {Component} from 'react';

import axios from 'axios';

class GetJson extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: null,
      body: null,
      id: props.id,
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.id}`)
      .then(response => response.data)
      .then((data) => this.setState({
        title: data.title,
        body: data.body
      }));
  }

  render() {
    return (
      <div>
        <p> Title: {this.state.title}</p>
        <p>Body: {this.state.body} </p>
      </div>
    )
  }
}

export default GetJson;