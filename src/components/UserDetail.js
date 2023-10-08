import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false); 

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`http://localhost:3000/community/${id}`);
        if (response.ok) {
          const userData = await response.json();
          if (userData) { 
            setUser(userData);
          } else {
            setError(true);
          }
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("There was an error fetching user data:", error);
        setError(true);
      }
    }

    fetchUser();
  }, [id]);

  if (error) {
    navigate('/not-found');
    return null;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="community-item">
      <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} />
      <h2>{user.firstName} {user.lastName}</h2>
      <p>{user.description}</p>
      <p>{user.position}</p>
    </div>
  );
}

export default UserDetail;
