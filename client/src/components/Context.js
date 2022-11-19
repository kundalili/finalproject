import { createContext,  useReducer } from "react";

export const AppContext = createContext();

console.log(Context)

 export default function Context({children}) {

   const reducer = (state, action) => {
     switch (action.type) {



        case ('add'):
          return{
            // ...state,
            // recipes: [...state.recipes, action.payload]
          }

            default:
             return state


  }
 }
 const [globalRecipes, dispatchRecipes] = useReducer(reducer,{
 
    recipes:{
      title: '',
      ingredients: '',
      method: '',
      category: '',
      cookingTime: '',
      rating: ''

   },
 


  })
 



//the initial value in the state needs to be the data (clean Data)
   // getData()
   // const [recipes setRecipe] = useState([])

    return <AppContext.Provider value={{globalRecipes, dispatchRecipes}}>

         {children}

    </AppContext.Provider>
}