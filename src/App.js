
import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
    {
      name: "Caleb",
      role: "Developer",
      img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: "Sal",
      role: "Manager",
      img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: "John",
      role: "Director of Eng.",
      img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: "Melanie",
      role: "Software Engineer",
      img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: "Corey",
      role: "The Devops Guy",
      img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: "Jake",
      role: "Senior",
      img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]);

  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input type='text' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {

              return (<Employee
                name={employee.name}
                role={employee.role}
                img={employee.img} />);
            })}
          </div>

        </>
      )
        : (
          <p>You can not see the employees</p>)
      }

    </div>
  );
}

export default App;
