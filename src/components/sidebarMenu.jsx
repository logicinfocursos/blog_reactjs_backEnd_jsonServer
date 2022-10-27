export const SidebarMenu = () =>{
    return(
        <aside className="main-sidebar sidebar-dark-primary elevation-4">

        <a href="index3.html" className="brand-link">
            <img src="assets/images/logos/logo.png" alt="" className="brand-image img-circlex elevation-3" style={{ opacity: '.8' }} />
            <span className="brand-text font-weight-light">posts</span>
        </a>

        <div className="sidebar">

            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img src="assets/images/elements/robot.jpg" className="img-circle elevation-2" alt="" />
                </div>
                <div className="info">
                    <a href="#" className="d-block">anselmo lucas</a>
                </div>
            </div>
            
            <nav className="mt-2">
                <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className="nav-icon far fa-circle text-danger" />
                            <p className="text">dashboard</p>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="/posts" className="nav-link">
                            <i className="nav-icon far fa-circle text-danger" />
                            <p className="text">posts</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/posts" className="nav-link">
                            <i className="nav-icon far fa-circle text-danger" />
                            <p className="text">categorias</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/posts" className="nav-link">
                            <i className="nav-icon far fa-circle text-danger" />
                            <p className="text">autores</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/posts" className="nav-link">
                            <i className="nav-icon far fa-circle text-danger" />
                            <p className="text">comentários</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/posts" className="nav-link">
                            <i className="nav-icon far fa-circle text-danger" />
                            <p className="text">medias</p>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="/posts" className="nav-link">
                            <i className="nav-icon far fa-circle text-danger" />
                            <p className="text">usuários</p>
                        </a>
                    </li>                    
                </ul>
            </nav>
        </div>
    </aside>
    )
}