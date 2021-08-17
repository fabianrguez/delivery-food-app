import SearchBox from '../../components/SearchBox/SearchBox';

const Home = () => {
  return (
    <div className="dfa-home">
      <fieldset className="dfa-home__location">
        <i className="icon icon-marker" aria-hidden="true"></i>
        <input type="search" name="location" placeholder="Ubicación"/>
      </fieldset>
      <div className="dfa-home__greeting">
        <h3 className="dfa-home__greeting-name">Hola, Batman</h3>
        <h1 className="dfa-home__greeting-general">Buenos días</h1>
      </div>
      <SearchBox/>
    </div>
  );
}

export default Home;