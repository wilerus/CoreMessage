import * as React from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

export interface NinjaState {
  name: string;
  age: number;
  belt: string;
  id: number;
}

export type Ninjaslist = Array<NinjaState>;

export interface HelloProps {
  ninjas: Ninjaslist;
}

class App extends React.Component {
  state: HelloProps = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja />
      </div>
    );
  }
}

export default App;
