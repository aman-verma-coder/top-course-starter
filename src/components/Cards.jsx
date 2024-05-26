import React, {useState, useEffect} from 'react';
import Card from './Card.jsx';

function Cards({courses, category}) {
  const [likedCourses, setLikedCourses] = useState ([]);
  // console.log ('Cards.jsx: ', courses);
  // const [allCourses, setAllCourses] = useState ([]);
  // useEffect (
  // () => {
  const getCourses = () => {
    if (category === 'All') {
      let allCourses = [];
      // if (!courses) {
      //   return []; // Return an empty array if courses is undefined or null
      // }
      // let courseList = [];
      Object.values (courses).forEach (courseCategory => {
        courseCategory.forEach (course => {
          allCourses.push (course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  };
  // setAllCourses (getCourses ());
  // },
  // [courses];
  // );

  // console.log (allCourses);
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses ().map (course => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
}
export default Cards;
