import './App.css';
import React, {useState , useEffect} from 'react';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Spinner from './components/Spinner';
import Axios from 'axios';

function App() {
    const [search,setSearch] = useState("chicken");
    const [recpies,setRecipes] = useState([]);
    const [loader,setLoader]=useState(false);
 
    const APP_ID = "620733e5";     
    const APP_KEY = "462a505ac6c354202b00c15f139e3e9e";	 

    useEffect(() => { getRecipes();},[]);

    function callSearchApi()
    {
      getRecipes();
    }    
    const getRecipes = async()=> {
      setLoader(true)
      const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        if (result && result.data && result.data.hits)
        {
          setRecipes(result.data.hits);
        }
        else
        {
          setRecipes([])
        }
        setLoader(false)
        
    }
    const onInputChange = e => {
       console.log(e.target.value);
        if (e.target.value && e.target.value!==undefined)
        {
          setSearch(e.target.value.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'_'))
        }
        else
        {
          setSearch('')
        }
       
    }
  return (
    
    <div className="App">
      {loader && <Spinner />}
       <Header mysearch={search} onInputChange = {onInputChange} callSearchApi={callSearchApi}/>
       <div className="container">
         <Recipes recipes={recpies}/>
       </div>  
    </div>
  );
}

export default App;
