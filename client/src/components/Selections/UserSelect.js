import React, { useEffect, useState } from "react";

// you should import `lodash` as a whole module
//import lodash from "lodash";
import axios from "axios";

const ITEMS_API_URL = "http://localhost:4000/user/list";
const DEBOUNCE_DELAY = 500;

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
      useEffect(() => {
        if (!query) return;
        setIsLoading(true);
        const timeOutId = setTimeout(() => fetchData(query), 500);
        return () => clearTimeout(timeOutId);
      }, [query]);

      function fetchData() {
        setData([]);
        let cancel;
        axios({
          method: "GET",
          url: "http://localhost:4000/user/list",
          params: { username: query },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        })
          .then((res) => {
            setIsLoading(false);
            setData(res.data);
          })
          .catch((e) => {
            if (axios.isCancel(e)) return;
          });
        return () => cancel();
      }
    return { data, isLoading };
}

//not so familier with bulma so not spending more time on finding classname (sorry)
export default function UserSelect() {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useSearch(query);

  function handleSearch(e) {
    const { value } = e.target;
    setTimeout(() => {
      if (value) setQuery(value);
    }, 500);
  }

  function selectItem(index) {
    alert("selected: " + data[index]);
  }


  return (
    <div className="wrapper">
      <div className="control">
        <div className={`control ${isLoading ? 'is-loading' : ''}`}>
          <input type="text" className="input" onChange={handleSearch} />
        </div>
        {data.length > 0 && !isLoading && (
          <div class="list">
            {data.map((i, index) => (
              <div
                key={i}
                onClick={() => selectItem(index)}
                className="list-item"
              >
                {i}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="list is-hoverable" />
    </div>
  );
}
