import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListGroup from './ListGroup'


const cars = [
  {id: "1", name: "Honda", year: 2025, model: "Civic", owner: {name: "Alice", id: 1111, age: 20, gender: 'Female'}},
  {id: "2", name: "Toyota", year: 2024, model: "Corolla", owner: {name: "Jerry", id: 2222, age: 23, gender: 'Male'}},
  {id: "3", name: "Ford", year: 2023, model: "Mustang", owner: {name: "Bob", id: 3333, age: 30, gender: 'Male'}},
]
function App() {
  return (
    <>
      <ListGroup/>
      <ul>
        {cars
          //.filter(car => Number(car.id) < 3)
          .map(car => {
            const {name: carName, year, model, owner} = car;
            const {name: onwerName, age, gender} = owner;
            return <li key = {car.id}>
              <div>{carName} ({year} -- {model})</div>
              <div> ({onwerName} -- {gender})</div>
              {gender === 'Male' && <div>{age}</div>}
            </li>
          })//implicit return
        }
      </ul>
      {/* <div>
        {cars.map(car => (
          <Car key={car.id} {...car} />
        ))}
      </div> */}
    </>
  )
}

function Car(props: any){
  const {id, name, year, model, owner} = props;
  return <div>Hello
    <h3>Id: {id}</h3>
    <h3>Name: {name}</h3>
    <h3>Year: {year}</h3>
    <h3>Model: {model}</h3>
    <h3>Age: {owner.age}</h3>
    {owner && owner.id > 3 && <OwnerInfo owner={owner}/>}
  </div>;
}

function OwnerInfo({ owner }: { owner: { name: string; id: number } }) {
  return (
    <div>
      <h4>Owner: {owner.name} (ID: {owner.id})</h4>
    </div>
  );
}

export default App
