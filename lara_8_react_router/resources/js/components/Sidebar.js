import { Link } from "react-router-dom";
import { SiProducthunt } from "react-icons/si";
import { FaWarehouse } from "react-icons/fa";

const Sidebar = () => {
    return (
        <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
        >
            {/* Sidebar - Brand */}
            <Link
                className="sidebar-brand d-flex align-items-center justify-content-center"
                to="/admin"
            >
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div
                    className="sidebar-brand-text mx-3"
                    style={{ fontSize: "0.79rem" }}
                >
                    CLOTHING SHOP
                </div>
            </Link>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
                <Link className="nav-link" to="/admin">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span>
                </Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">DANH MỤC</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a
                    className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                    <SiProducthunt />
                    <span className="mx-2">SẢN PHẨM</span>
                </a>
                <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionSidebar"
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">QUẢN LÝ SẢN PHẨM:</h6>
                        <Link to="/admin/products" className="collapse-item">
                            DANH SÁCH
                        </Link>
                        <Link
                            to="/admin/products/add"
                            className="collapse-item"
                        >
                            THÊM MỚI
                        </Link>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <a
                    className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                >
                    <FaWarehouse />
                    <span className="mx-2">KHO HÀNG</span>
                </a>
                <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionSidebar"
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">QUẢN LÝ KHO:</h6>
                        <Link to="/admin/warehouses" className="collapse-item">
                            DANH SÁCH KHO
                        </Link>
                        <Link
                            to="/admin/warehouses/io"
                            className="collapse-item"
                        >
                            XUẤT / NHẬP KHO
                        </Link>
                        <Link
                            to="/admin/warehouses/inventory"
                            className="collapse-item"
                        >
                            KIỂM KÊ KHO
                        </Link>
                    </div>
                </div>
            </li>
            {/* Nav Item - Utilities Collapse Menu */}
            {/* <li className="nav-item">
                <a
                    className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapseUtilities"
                    aria-expanded="true"
                    aria-controls="collapseUtilities"
                >
                    <i className="fas fa-fw fa-wrench" />
                    <span>Utilities</span>
                </a>
                <div
                    id="collapseUtilities"
                    className="collapse"
                    aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar"
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a
                            className="collapse-item"
                            href="utilities-color.html"
                        >
                            Colors
                        </a>
                        <a
                            className="collapse-item"
                            href="utilities-border.html"
                        >
                            Borders
                        </a>
                        <a
                            className="collapse-item"
                            href="utilities-animation.html"
                        >
                            Animations
                        </a>
                        <a
                            className="collapse-item"
                            href="utilities-other.html"
                        >
                            Other
                        </a>
                    </div>
                </div>
            </li> */}
            {/* Divider */}
            {/* <hr className="sidebar-divider" /> */}
            {/* Heading */}
            {/* <div className="sidebar-heading">Addons</div> */}
            {/* Nav Item - Pages Collapse Menu */}
            {/* <li className="nav-item">
                <a
                    className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapsePages"
                    aria-expanded="true"
                    aria-controls="collapsePages"
                >
                    <i className="fas fa-fw fa-folder" />
                    <span>Pages</span>
                </a>
                <div
                    id="collapsePages"
                    className="collapse"
                    aria-labelledby="headingPages"
                    data-parent="#accordionSidebar"
                >
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="login.html">
                            Login
                        </a>
                        <a className="collapse-item" href="register.html">
                            Register
                        </a>
                        <a
                            className="collapse-item"
                            href="forgot-password.html"
                        >
                            Forgot Password
                        </a>
                        <div className="collapse-divider" />
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="404.html">
                            404 Page
                        </a>
                        <a className="collapse-item" href="blank.html">
                            Blank Page
                        </a>
                    </div>
                </div>
            </li> */}
            {/* Nav Item - Charts */}
            {/* <li className="nav-item">
                <a className="nav-link" href="charts.html">
                    <i className="fas fa-fw fa-chart-area" />
                    <span>Charts</span>
                </a>
            </li> */}
            {/* Nav Item - Tables */}
            {/* <li className="nav-item">
                <a className="nav-link" href="tables.html">
                    <i className="fas fa-fw fa-table" />
                    <span>Tables</span>
                </a>
            </li> */}
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <button
                    className="rounded-circle border-0"
                    id="sidebarToggle"
                />
            </div>
        </ul>
    );
};
export default Sidebar;
