const Home = () => {
  // This "useEffect" with content implementation is for when page is so big
  // and we scroll down and change our route - it will continue the other page
  // "route" from the same position
  // "window.scroll(0,0)" --> will continue the other page from the top
  //        and not the previous position that page was when we were in the
  //        other component
  // *** useEffect(() => {
  //***  window.scroll(0,0)
  // * }, []);

  return <h1>Home Page</h1>;
};

export default Home;
