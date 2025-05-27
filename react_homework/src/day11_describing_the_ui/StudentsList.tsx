import { Component } from "react";
import { StudentType, StudentFn, StudentClass } from "./Student";

/*
    implement a StudentsList component here
    it should take a prop "students" which is an array of students

    it should render a list of Student components
*/

// Functional component
export function StudentsListFn({ students }: { students: StudentType[] }) {
  return (
    <div>
      {students.map(student => (
        <StudentFn key={student.id} student={student} />
      ))}
    </div>
  );
}


export class StudentsListClass extends Component<{ students: StudentType[] }> {
  render() {
    const { students } = this.props;
    return (
      <div>
        {students.map(student => (
          <StudentClass key={student.id} student={student} />
        ))}
      </div>
    );
  }
}
