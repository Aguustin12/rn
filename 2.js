import React, { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState([
    { name: 'Shirt', isPacked: false },
    { name: 'Pants', isPacked: true },
    { name: 'Hat', isPacked: false },
  ]);

  return (
    <ul>
      {items.map(item => (
        <li key={item.name}>
          {item.name} {item.isPacked ? '✅' : '❌'}
        </li>
      ))}
    </ul>
  );
}
