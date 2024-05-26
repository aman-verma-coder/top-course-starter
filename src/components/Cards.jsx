import React, {useState, useEffect} from 'react';
import Card from './Card.jsx';

function Cards({courses}) {
  // console.log ('Cards.jsx: ', courses);
  // let allCourses = [];
  const [allCourses, setAllCourses] = useState ([]);
  useEffect (
    () => {
      const getCourses = () => {
        if (!courses) {
          return []; // Return an empty array if courses is undefined or null
        }
        let courseList = [];
        //   console.log("gdsyughfehw");-
        //   console.log(courses);
        //   console.log("gdsyughfehw");
        Object.values (courses).forEach (courseCategory => {
          courseCategory.forEach (course => {
            courseList.push (course);
          });
        });
        return courseList;
      };
      setAllCourses (getCourses ());
    },
    [courses]
  );

  // console.log (allCourses);
  return (
    <div>
      {allCourses.map (course => {
        return <Card key={course.id} course={course} />;
      })}
    </div>
  );
}
export default Cards;
