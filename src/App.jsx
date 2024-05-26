import {useState} from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar.jsx';
import Filter from './components/Filter.jsx';
import Cards from './components/Cards.jsx';
import {filterData, apiurl} from './data.js';
import {toast} from 'react-toastify';
import {useEffect} from 'react';

function App () {
  const [courses, setCourses] = useState (null);
  useEffect (() => {
    const fetchData = async () => {
      try {
        const res = await fetch (apiurl);
        const output = await res.json ();
        // console.log (data);
        // console.log ('Fetched data:', output); // Debug statement
        setCourses (output.data);
        // console.log (output);
        // console.log(courses(output.data));
      } catch (error) {
        toast.error ('Something went wrong');
        console.error ('Fetch error:', error); // Debug statement
      }
    };
    fetchData ();
  }, []);
  // console.log ('Courses state:', courses); // Debug statement
  return (
    <div className="App">
      <Navbar />
      <Filter filterData={filterData} apiurl={apiurl} />
      <Cards courses={courses} />
    </div>
  );
}

export default App;
