/*
    implement a Student component here
    it should take a prop "student" which is an object with the following properties:
    - id: number
    - name: string
    - age: number
    - grade: Enum("A", "B", "C", "D", "F")

    it should render the student's information
*/

import { Component } from "react";

// implement a Student component here
export enum Grade {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  F = "F",
}

export interface StudentType {
  id: number;
  name: string;
  age: number;
  grade: Grade;
}

export function StudentFn({ student }: { student: StudentType }) {
  const { id, name, age, grade } = student;
  return (
    <div data-testid="student">
      <div>{id}</div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{grade}</div>
    </div>
  );
}

export class StudentClass extends Component {
  render() {
    const { student } = this.props as { student: StudentType };
    const { id, name, age, grade } = student;
    return (<div data-testid="student">
      <div>{id}</div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{grade}</div>
    </div>
    );
  }
}
