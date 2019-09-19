import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addCourseAction(title) {
  return { type: 'ADD_COURSE', title }
}

export default function CourseList() {
  const qty = 3;

  const courses = useSelector(state => state.data);
  const courses2 = useSelector(
    state => state.data.slice(0, qty),
    [qty]
  );
  const dispatch = useDispatch();

  function addCourse() {
    dispatch(addCourseAction('Gefasd'));
  }

  return (
    <>
      <ul>
        { courses.map(course => <li key={course}>{course}</li>)}
      </ul>
      <button type="button" onClick={addCourse}>Adicionar course</button>
      <ul>
        { courses2.map(course2 => <li key={course2}>{course2}</li>)}
      </ul>
    </>
  );
}
