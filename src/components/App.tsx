import React from 'react'
import Header from './Header'
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
import Particles from 'react-particles-js'

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
      <div
        className="container-fluid"
      >

        <ToastContainer />
        <Header />
        <Switch>
          {
            publicRoutes.map((url, index) => (
              <Route key={index} path={url.path} component={() => <url.component />} />
            ))
          }
          <Redirect to="/" />
        </Switch>
        <Particles
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: '#ffff00'
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000'
                },
                polygon: {
                  nb_sides: 5
                }
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 10,
                random: true,
                anim: {
                  enable: false,
                  speed: 80,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 300,
                color: '#ffffff',
                opacity: 0.4,
                width: 2
              },
              move: {
                enable: true,
                speed: 12,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: false,
                  mode: 'repulse'
                },
                onclick: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 800,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 800,
                  size: 80,
                  duration: 2,
                  opacity: 0.8
                },
                repulse: {
                  distance: 400,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }}
          style={{
            width: '1000vh',
            height: '100%',
            position: 'fixed',
            margin: 0,
            padding: 0,
            top: 0,
            left: 0,
            zIndex: -999
          }}
        />
      </div>
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
