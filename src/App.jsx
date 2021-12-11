// ANT DESIGN:
import { Alert, Layout } from "antd";
import Sidebar from "./components/Sidebar/Sidebar";

// REACT-ROUTER-DOM:
import { Route, Routes } from "react-router-dom";

// REACT-REDUX:
import { useSelector } from "react-redux";

// PAGES:
import Index from "./pages/home";
import ArghunHome from "./pages/arghun/home";
import HamidRezaHome from "./pages/hamid-reza/home";
import AminHome from "./pages/amin/home";
import FarnazHome from "./pages/farnaz/home";
import SepidehHome from "./pages/sepideh/home";
import KouroshHome from "./pages/kourosh/home";
import HamedHome from "./pages/hamed/home";
import MohammadHome from "./pages/mohammad/home";
import SoliHome from "./pages/soli/home";
import NimaHome from "./pages/nima/home";
import EhsanHome from "./pages/ehsan/home";
import ParisaHome from "./pages/parisa/home";
import MohammadJavadHome from "./pages/mohammad-javad/home";

const App = () => {
  const users = useSelector((state) => state["users"]);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar users={users} />
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route
            path="*"
            element={
              <Alert
                style={{ margin: "15px " }}
                message="Error"
                description="Sorry Page Not Found"
                type="error"
                showIcon
              />
            }
          />
          <Route path="/users/arghun" element={<ArghunHome />} />
          <Route path="/users/hamid-reza" element={<HamidRezaHome />} />
          <Route path="/users/amin" element={<AminHome />} />
          <Route path="/users/farnaz" element={<FarnazHome />} />
          <Route path="/users/sepideh" element={<SepidehHome />} />
          <Route path="/users/kourosh" element={<KouroshHome />} />
          <Route path="/users/hamed" element={<HamedHome />} />
          <Route path="/users/MohammadHome" element={<MohammadHome />} />
          <Route path="/users/soli" element={<SoliHome />} />
          <Route path="/users/ehsan" element={<EhsanHome />} />
          <Route path="/users/nima" element={<NimaHome />} />
          <Route path="/users/parisa" element={<ParisaHome />} />
          <Route path="/users/mohammad-javad" element={<MohammadJavadHome />} />
        </Routes>
      </Layout>
    </Layout>
  );
};

export default App;
