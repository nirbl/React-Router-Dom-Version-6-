import { useEffect } from 'react';

const Home = () => {
  // It will continue the other page from the top
  //    and not the previous position that page was when you were in the other
  //    component

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return <h1>Home Page</h1>;
};

export default Home;
