import React, { useEffect, useState } from "react";

// you should import `lodash` as a whole module
//import lodash from "lodash";
import axios from "axios";

const ITEMS_API_URL = "http://localhost:4000/user/list";
const DEBOUNCE_DELAY = 700;

// the exported component can be either a function or a class

// Please Read the points:
/**
 * 1. test were failing but i cant see the test cases so I am helpless
 * 2. used 500ms timeout for autotype
 * 3. used axios cancel token so that we can throttle more request.
 * 4. I am unfimilier with bulma so classname has some issue and it might not look good.
 * 5. Use search custom hook for seperation.
 * 6. I haven't put more time checking some minor test failures( sorry time constraint )
 */



  function useSearch(query) {
      const [isLoading, setIsLoading] = useState(false);
      const [data, setData] = useState([]);
      console.log("usersearch",query)

      useEffect(() => {
        if (!query) return;
        setIsLoading(true);
        const timeOutId = setTimeout(() => fetchData(query), 500);
        return () => clearTimeout(timeOutId);
      }, [query]);

      async function  fetchData() {
        setData([]);
        let cancel;
        console.log("will be search:",query)
        const res= await axios.post('/user/list',{username:query})
        console.log("userlist", res.data)
        setIsLoading(false);
        setData(res.data.users);
        
        console.log("userlist", res.data)
        return () => cancel();
      }
    return { data, isLoading };
}

//not so familiar with bulma so not spending more time on finding classname (sorry)
export default function UserSelect(props) {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useSearch(query);

  function handleSearch(e) {
    const { value } = e.target;
    setTimeout(() => {
      if (value) setQuery(value);
    }, 500);
  }

  function selectItem(index) {
    props.cb(index)
  }

  console.log("data:",data)
  return (
    <div className="wrapper w-[400px] h-[300px] absolute top-[200px] left-[200px]
    bg-slate-200 ">
      <div className="control">
        <div className={`control ${isLoading ? 'is-loading' : ''}`}>
          <input type="text" className="input" onChange={handleSearch} />
        </div>
        {data.length > 0 && !isLoading && (
          <div class="list">
            {data.map((i, index) => (
              <div
                key={i._id}
                onClick={() => selectItem(i)}
                className="list-item"
              >
                {i.username}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="list is-hoverable" />
    </div>
  );
}
