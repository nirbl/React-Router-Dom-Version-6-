import { Fragment, useEffect } from 'react';
import {
  NavLink,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import EditProfile from '../components/EditProfile';
import ViewProfile from '../components/ViewProfile';

// Note : Here we create a "nested route" inside of a particular page
//    # for example if inside of the "profile" page we want to create two routes
//      with the name: "viewprofile" / "editprofile"
//      and we don't want those two routes to effect our whole react-router-system
//      we only want them to work inside of this "profile page"
//      -- so lets create two routes over this page of "profile"

const Profile = ({ login }) => {
  /*  Note : useLocation() is not used here - just for implement "location.pathname" replacing dynamic "path" in useRouteMatch()
  version 5 !! */
  const navigate = useNavigate();
  const location = useLocation();

  console.log(login);
  console.log(location.pathname);

  // Note : useEffect runs whenever our app is initialized first time

  useEffect(() => {
    if (!login) {
      navigate('/about');
    }
  }, [login, navigate]);

  //const { path, url } = useRouteMatch(); // !! IN VERSION 5 !!!

  return (
    <Fragment>
      <h1>Profile Page</h1>

      {/* below - we create a NAV-BAR inside of a profile page */}
      {/*  VERSION 5!!
      <ul>
        <li>
          <Link to={`${url}/viewprofile`}> View Profile</Link>
        </li>
        <li>
          <link to={`${url}/editprofile`}> Edit Profile</link>
        </li>
      </ul> */}

      <ul>
        <li>
          <NavLink to='viewprofile'> View Profile</NavLink>
        </li>
        <li>
          <NavLink to='editprofile'> View Profile</NavLink>
        </li>
      </ul>

      {/* ****  VERSION 5!! - created for Nested Routes *** */}
      {/* <Routes>
        <Route path={`${path}/viewprofile`} component={ViewProfile} />
        <Route path={`${path}/editprofile`} compoenent={EditProfile} />  
      </Routes> */}

      <Routes>
        <Route path='viewprofile' element={<ViewProfile />} />
        <Route path='editprofile' element={<EditProfile />} />
      </Routes>
    </Fragment>
  );
};

export default Profile;
