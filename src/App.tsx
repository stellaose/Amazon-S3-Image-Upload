import {RouterProvider} from 'react-router-dom'
import './App.css'
// import LazyLoader from '@reusables/LazyLoader'
// import { ConfigProvider } from "antd";
import { routes } from "./env/pages";
// import { getThemeConfig } from "./theme.config";
import { Suspense } from "react";
import LazyLoader from "./components/reusables/LazyLoader";

function App() {

  return (
    <>
       {/* <ConfigProvider theme={getThemeConfig()}> */}
      <Suspense fallback={<LazyLoader />}>
        <RouterProvider router={routes} />
        {/* <ToastContainer /> */}
      </Suspense>
    {/* </ConfigProvider> */}
    </>
  )
}

export default App
