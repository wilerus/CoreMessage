import * as React from 'react';
import { NinjaState } from './App';
import { InputType } from 'zlib';

class AddNinja extends React.Component {
  state: NinjaState = {
    name: null,
    age: null,
    belt: null,
    id: null
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e: React.ChangeEvent) => e.preventDefault();

  render() {
    return (
      <div>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="age">Age:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="belt">Belt:</label>
          <input type="text" id="belt" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;
