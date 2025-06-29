
import React, { useState, useEffect } from 'react';
import PortalProducts from '../PortalProducts/PortalProducts';

interface Card {
  id: number;
  title: string;
  body: string;
}

const CardList: React.FC<{ limit?: number }> = ({ limit = 10 }) => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
      .then(res => res.json())
      .then(data => setCards(data));
  }, [limit]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cards.map(card => (
        <PortalProducts key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardList;