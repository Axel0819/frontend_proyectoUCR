import { useEffect, useLayoutEffect, useState } from "react";
import AppRouter from "./routers/AppRouter";

const App = () => {
  const [load, setLoad] = useState(false)
  
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  useLayoutEffect(() => {
    window.scrollTo(scrollX, scrollY);
  }, []);

  useEffect(() => {
    const hanldeLoad = () => {
      if (navigator.onLine) setLoad(true)
    }

    window.addEventListener("load", hanldeLoad)

    return () => window.removeEventListener('load', hanldeLoad)
  }, [])

  console.log(load);

  if(!load){
    return (
      <h1>La app esta cargando</h1>
    )
  }

  return (
    <AppRouter />
  )
}

export default App;