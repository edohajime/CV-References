import AdFooter from "../../AdFooter";
import ScrollToTop from "../../ScrollToTop";
import Sidebar from "../../Sidebar";
import Topbar from "../../Topbar";
import AddWarehouseIOs from "../../AddWarehouseIOs";

const DashboardAddWarehouseIOs = () => {
    return (
        <div>
            <div id="wrapper">
                <Sidebar />

                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content" className="w-100">
                        <Topbar />

                        {/* Begin Page Content */}
                        <AddWarehouseIOs />
                        
                    </div>
                    <AdFooter />
                </div>
            </div>
            <ScrollToTop />
        </div>
    );
};
export default DashboardAddWarehouseIOs;
