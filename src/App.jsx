import { GlobalProvider } from "./contexts/GlobalContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./layout/DefaultLayout"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
