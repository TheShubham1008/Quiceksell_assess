

import React, { useEffect, useState } from 'react';
import './Card.css';

const Card = ({ id, title, tag,  userId }) => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment'); 
        const data = await response.json();

        const user = data.users.find(user => user.id === userId);
        if (user) {
          setName(user.name);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserName();
  }, [userId]);


  const initials = name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase();

  return (
    <div className="boxi flex-gap-10" style={{ gap: '5px' }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: 'uppercase' }} className='color-grey'>{id}</span>
        <div className="imageContainer relative" style={{ width: '30px', height: '30px' }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ccc', 
              color: '#fff',
              fontSize: '14px',
              fontWeight: 'bold'
            }}
          >
            {loading ? '...' : initials} 
          </div>
          <div className="statusAp"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        <p>{title}</p>
      </div>
      <div className="cardTags">
        <div className="tags color-grey"> ... </div>
        {tag?.map((elem, index) => (
          <div key={index} className="tags color-grey">
            <span>•</span> {elem}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

