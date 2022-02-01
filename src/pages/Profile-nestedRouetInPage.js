import { Fragment, useEffect } from 'react';
import { useNavigate, useRouteMatch } from 'react-router-dom';
import EditProfile from '../components/EditProfile';
import ViewProfile from '../components/ViewProfile';

const Profile = ({ login }) => {
  const navigate = useNavigate();

  // Note : useEffect runs whenever our app is initialized first time

  useEffect(() => {
    if (!login) {
      navigate('/about');
    }
  }, [login, navigate]);

  const { path, url } = useRouteMatch();

  return (
    <Fragment>
      <h1>Profile Page</h1>
      <ul>
        <li>
          <Link to={`${url}/viewprofile`}>View Profile</Link>
        </li>
        <li>
          <link to={`${url}/editprofile`}>Edit Profile</link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/viewprofile`} component={ViewProfile} />
        <Route path={`${path}/editprofile`} component={EditProfile} />
      </Switch>
    </Fragment>
  );
};

export default Profile;
