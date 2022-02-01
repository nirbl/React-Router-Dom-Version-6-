import { useLocation, useParams } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

// Note1 : Here there is (version 6) implementation
//        how to fetch the "id" from the URL by "useParams()"

const Post = () => {
  //const Post = ({ match }) => {
  // we will use "match" (similar to "useParams")
  // Note : this remark example work in version 5 !!(not in version 6)!!
  /* return <h1>Id is ={match.params.id}</h1>; */

  //console.log(useParams());

  //   *const { id } = useParams();
  //   *return <h1>Id is ={id}</h1>;

  console.log(useLocation());
  // *Note: in console.log(useLocation()) => we get:
  // ?Object->search=(all the values after "?" written in the URL)

  // note : below -- for "useLocation()" => we will use an inbuilt api from the browser called :
  //        URLSearchParams() => we will create an object out of it

  const query = new URLSearchParams(useLocation().search);

  // below line -> for !!only for useParams() !!
  const { id } = useParams();

  return (
    <Fragment>
      <h2>Id is = {id}</h2>
      {/*  we will write the variable (example "first" / "last") we need to fetch from URL */}
      {/* the url example : "  http://localhost:3000/post/888?first=Nir&last=Barzilai  " */}
      <h2>{query.get('first')}</h2>
      <h2>{query.get('last')}</h2>
    </Fragment>
  );
};

export default Post;
