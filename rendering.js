import React, { useState } from 'react';

function Person() {
  const [people, setPeople] = useState([
    { name: 'John', age: 30, profession: 'chemist' },
    { name: 'Jane', age: 25, profession: 'teacher' },
    { name: 'Bob', age: 40, profession: 'engineer' },
    { name: 'Alice', age: 35, profession: 'chemist' },
  ]);

  const chemists = people.filter(person => person.profession === 'chemist');
  const others = people.filter(person => person.profession !== 'chemist');

  return (
    <>
      <h2>Chemists:</h2>
      <ul>
        {chemists.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>

      <h2>Everyone Else:</h2>
      <ul>
        {others.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </>
  );
}