import { useState, useEffect } from 'react';
import * as starshipService from './services/starshipService';
import StarshipList from './components/StarshipList';
import StarshipSearch from './components/StarshipSearch';
import './App.css'




const App = () => {

  const [starships, setStarships] = useState([]);
  const [searchTerm, setsearch] = useState([]);


 
  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await starshipService.show();
      setStarships(data.results);
    };

    fetchDefaultData();
  }, []);


  const handleSearch = (str) => {
   setsearch(str)
  };



  return (
    <>
      <StarshipSearch getStarship={handleSearch} />
      <p>Number of results: {starships.length}</p>
      <StarshipList starships={starships} searchTerm={searchTerm} />
    </>
  );
}

export default App