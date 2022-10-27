import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RoutesApp from './routesApp'

import { Header, Footer, SidebarMenu } from './components'
import Dashboard from './pages/dashboard'



export default function App() {

  return (
    <div className="wrapper">

      {/* Preloader */}
      {/* <div className="preloader flex-column justify-content-center align-items-center">
        <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
      </div> */}

      <Header />
      <SidebarMenu />
      <RoutesApp />
      <Footer />
      <ToastContainer />
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
    </div>
  )
}
