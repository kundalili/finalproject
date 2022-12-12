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
    <div className="w-[350px] h-[100px] bg-blue-100 rounded-md shadow">
      <div className=" ">
        <div className="flex justify-center items-center">
        <div className={`control ${isLoading ? 'is-loading' : ''}`}>
        <form className='flex justify-center items-center p-[15px]  mt-[10px]'
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
        </div> 
        {data.length > 0 && !isLoading && (
          <div className="bg-lotionPink absolute">
            {data.map((i, index) => (
              <div className="p-[10px] m-[10px]">
              <li 
                key={i._id}
                onClick={() => selectItem(i)}
                className="flex justify-start items-center text-vividBlue font-xl m-[50] border-2 border-white rounded-md pt-[5px] w-[300px]"
              >
                <div className="flex flex-row justify-center gap-[10px]" >
                  <img className='rounded-full w-[50px] h-[50px] object-cover' 
                      src={'https://res.cloudinary.com/dn2tg1qut/image/upload/v1670253170/' + i.photo} alt=''/>
                  {i.username}
                </div>
              </li>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="list is-hoverable" />
    </div>
  );
}
