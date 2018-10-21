import React from 'react';

const Ninjas = ({ ninjas }) => {
  return (
    <div className="ninja-list">
      {ninjas.map(ninja => (
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
