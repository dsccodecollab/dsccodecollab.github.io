import React from 'react'
import '../styles/fonts.css'
import '../styles/App.css'
import Authenticate from './Authenticate'
import Landing from './Landing'
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Topic from './Topic'
import { ToastContainer } from 'react-toastify'
import About from './About'
import Footer from './Footer'
import Header from './Header'

const App = () => {
  // const [user, setUser] = useState({})

  // async function IsLoggedIn () {
  //   try {
  //     await new Promise((resolve, reject) =>
  //       fire.auth().onAuthStateChanged(
  //         user => {
  //           if (user) {
  //             setUser(user)
  //             console.log(user)
  //             return true
  //           } else {
  //             return false
  //           }
  //         }
  //       )
  //     )
  //   } catch (error) {
  //     return false
  //   }
  // }

  // useEffect(() => {
  //   IsLoggedIn()
  // }, [user])

  // if (fire.auth().currentUser) {
  //   return (
  //     <BrowserRouter>
  //       <div
  //         className="container"
  //       >
  //         <ToastContainer />
  //         <Header />
  //         <Switch>
  //           {
  //             privateRoutes.map((url, index) => (
  //               <Route key={index} path={url.path} component={() => <url.component />} />
  //             ))
  //           }
  //         </Switch>
  //       </div>
  //     </BrowserRouter>

  //   )
  // } else {
  return (
    <BrowserRouter>
      <Header />
      <div
        className="container-fluid" style={{ display: 'contents' }}
      >

        <ToastContainer />
        <Switch>
          {
            publicRoutes.map((url, index) => (
              <Route key={index} path={url.path} component={() => <url.component />} />
            ))
          }
          <Redirect to="/" />
        </Switch>
      </div>
      <div className="mb-32 mt-10">

      </div>
      <Footer />
    </BrowserRouter>
  )
}
// }

const publicRoutes = [
  {
    path: '/join',
    component: Authenticate
  },
  {
    path: '/topic',
    component: Topic
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/',
    component: Landing
  }
]

// const privateRoutes = [
//   {
//     path: '/',
//     component: Dashboard
//   }
// ]

export default App
