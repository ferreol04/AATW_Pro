import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  return (
    <>
      <div className="bg-slate-100 min-h-screen"> 
        <nav className="rounded bg-indigo-900 text-white px-2 py-2.5 sm:px-4">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <a href="https://laraveller.com/" className="flex items-center">
              Laraveller
            </a>
           
            <div className="hidden w-full md:block md:w-auto" >
              <ul
                className="
                  mt-4
                  flex flex-col
                  rounded-lg
                  p-4
                  md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium
                "
              >
                <li>
                  <a
                    href="/"
                    className="block rounded py-2 pr-4 pl-3 text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                {/* Adjusted this part since "router-link" is more relevant in Vue.js */}
                <li>
                  <a
                    href="/login"
                    className="block rounded py-2 pr-4 pl-3 text-gray-50 hover:bg-gray-700"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="/register"
                    className="
                      block
                      rounded
                      py-2
                      pr-4
                      pl-3
                      text-gray-50
                      hover:bg-gray-700
                      md:border-0
                    "
                  >
                    Register
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => console.log("Logout function triggered")}
                    className="
                      block
                      rounded
                      py-2
                      pr-4
                      pl-3
                      text-gray-50
                      hover:bg-gray-700
                      md:border-0
                    "
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="max-w-7xl mx-auto mt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
