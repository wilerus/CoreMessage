import * as React from 'react';
import { HelloProps } from './App';

const Ninjas = (ninjas: HelloProps) => {
  return (
    <div className="ninja-list">
      {ninjas.ninjas.map(ninja => (
        <div className="ninja" key={ninja.id}>
          <div>Name: Ryu</div>
          <div>Age: 30</div>
          <div>Belt: Black</div>
        </div>
      ))}
    </div>
  );
};

export default Ninjas;
