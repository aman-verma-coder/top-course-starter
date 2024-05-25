import React from 'react';
// import Card from './Card.jsx';

function Cards({courses}) {
  let allCourses = [];
  const getCourses = () => {
    //   console.log("gdsyughfehw");
    //   console.log(courses);
    //   console.log("gdsyughfehw");
    Object.values (courses).forEach (courseCategory => {
      courseCategory.forEach (course => {
        allCourses.push (course);
      });
    });
    // console.log (allCourses);
    return allCourses;
  };
  return (
    <div>
      {getCourses ().map (course => {
        return <Card course={course} />;
      })}
    </div>
  );
}
export default Cards;
