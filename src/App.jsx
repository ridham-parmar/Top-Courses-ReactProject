import "./App.css";
import NavBar from "./Components/NavBar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { filterData, apiUrl } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

function App() {

  const [urlData, setUrlData] = useState('') ;
  const [loading, setloading] = useState(false) ;
  const [category, setCategory] = useState(filterData[0].title);


  async function fetchedData() {
    setloading(true) ;
    try {
      const response = await fetch(apiUrl) ;
      const jsonResponse = await response.json() ;
      // console.log(jsonResponse.data) ;
      setUrlData(jsonResponse.data) ;
    } catch (error) {
      toast.error("Cannot fetch Api right now") ;
    }
    setloading(false) ;
  }

  useEffect( () => {
    fetchedData() ;
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <NavBar></NavBar>

      <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>

      <div className="bg-bgDark2 min-h-[50vh] flex justify-center items-center">
        { loading ? <Spinner/> :  <Cards urlData={urlData} category={category}/> }
      </div>
    </div>
  );
}

export default App;
