import {useState} from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar.jsx';
import Filter from './components/Filter.jsx';
import Cards from './components/Cards.jsx';
import Spinner from './components/Spinner.jsx';
import {filterData, apiurl} from './data.js';
import {toast} from 'react-toastify';
import {useEffect} from 'react';

function App () {
  const [courses, setCourses] = useState (null);
  const [loading, setLoading] = useState (true);
  const [category, setCategory] = useState (filterData[0].title);

  const fetchData = async () => {
    setLoading (true);
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
    setLoading (false);
  };
  useEffect (() => {
    fetchData ();
  }, []);
  // console.log ('Courses state:', courses); // Debug statement
  return (
    <div className="min-h-screen flex flex-col bg-[#40445c]">
      <div>
        <Navbar />
      </div>
        <div>
          <Filter
            filterData={filterData}
            apiurl={apiurl}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="w-11/12 flex flex-wrap max-w-[1200px] min-h-[50vh] mx-auto justify-center items-center">
          {loading
            ? <Spinner />
            : <Cards courses={courses} category={category} />}
          {/* <Cards courses={courses} /> */}
        </div>
    </div>
  );
}

export default App;
