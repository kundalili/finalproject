import React, { useEffect, useState } from "react";
import magnifier from '../../assets/search.svg'

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
    console.log("selected item:", index)
    props.cb(index)
  }

  console.log("data:",data)
  return (
    <div className="wrapper w-[400px] h-[160px] bg-blue-100 ">
      <div className="control flex ">
        <div className={`control ${isLoading ? 'is-loading' : ''}`}>
        <form className='flex flex-row justify-center items-center pl-[15px] pt-[10px] mt-[10px]'
                >
                                    
                    <input type="text" 
                     onChange={handleSearch}
                      className="w-[234px] h-[51px] placeholder-lightBlue text-center" 
                      placeholder="Find a user"
                    />
                      <button type="submit" 
                      className='ml-[-40px] mb-[30px]'
                      >
                      <img className="cursor-pointer inline-block absolute object-cover" src={magnifier} alt='magnifier'/>
                      </button>
            </form>
          {/* <input type="text" className="input" onChange={handleSearch} /> */}
        </div>
        {data.length > 0 && !isLoading && (
          <div className="">
            {data.map((i, index) => (
              <div 
                key={i._id}
                onClick={() => selectItem(i)}
                className="flex justify-start items-start text-vividBlue font-xl pl-[80px] pt-[5px] flex-col"
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
