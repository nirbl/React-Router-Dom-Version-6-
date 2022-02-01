import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ login }) => {
  const navigate = useNavigate();

  // Note : useEffect runs whenever our app is initialized first time

  useEffect(() => {
    if (!login) {
      navigate('/about');
    }
  }, [login, navigate]);

  return <h1>Profile Page</h1>;
};

export default Profile;
