import { useEffect, useState ,useRef} from "react";

export const ShowStudents = () => {
    const [student,setstudent] = useState([]);
    const studentData = useRef(student);

    useEffect(()=>{
        const getData = async()=>{
            let response = await fetch("https://localhost:8080/students");
            let data = await response.json();
            setstudent(data)
            studentData.current = data;
            console.log(studentData.current);
        }
        getData()
    },[])
    
    const sortName = ()=>{
        let sortData = student.sort((a,b)=> a.namename - b.namename);
        studentData.current = sortData;
       
    }

    const sortPrice = ()=>{
        let sortData = student.sort((a,b)=>a.nameprice - b.nameprice);
        studentData.current = sortData;
   
    }

   
    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              className="sortby"  onClick={()=>sortName}
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"  onClick={()=>sortPrice()}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort">sort</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {/* populate all rows like below: */}
            <tr className="row">
              <td className="first_name"></td>
              <td className="last_name"></td>
              <td className="email"></td>
              <td className="gender"></td>
              <td className="age"></td>
              <td className="tenth_score"></td>
              <td className="twelth_score"></td>
              <td className="preferred_branch"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };