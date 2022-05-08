// import { useLayoutEffect, useState } from 'react';
import { useLayoutEffect } from 'react';
import AppRouter from './routers/AppRouter';
// import LoadApp from './components/loaders/LoadApp';

const App = () => {
  // const [load, setLoad] = useState(false)

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  useLayoutEffect(() => {
    window.scrollTo(scrollX, scrollY);
  }, [scrollX, scrollY])

  // const hanldeLoad = () => {
  //   return new Promise(resolve => {
  //     resolve(navigator.onLine)
  //   })
  // }

  // useLayoutEffect(() => {

  //   const event = async () => {
  //     const result = await hanldeLoad()

  //     setLoad(result)
  //   }

  //   window.addEventListener("load", event)

  //   return () => window.removeEventListener("load", event)
  // }, [load])

  // <>
  //     {
  //       load ? <AppRouter /> : <LoadApp />
  //     }
  //   </>

  return (
      <AppRouter />
  )
}

export default App;