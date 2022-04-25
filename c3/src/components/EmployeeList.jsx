//import { useEffect, useState } from "react";

export const EmployeeList = () => {
//     const [employee, setEmployee] = useState([]);

//     useEffect(() => {
//         axios.get("https://reqres.in/api/login").then(({data })
//         setEmployee(data.data)
//     });
// },[]);
    
    
    
    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        {/* {EmployeeList.map((employee)=>(
            <p key={employee.id}>
                <Link to={'employee/${employee.id'}}>
                {employee.id}.{employee.}
        ))} */}
        <div className="employee_card">
          <img className="employee_image" />
          <span className="employee_name"></span>
          <span className="employee_title"></span>
        </div>
      </div>
    );
  };