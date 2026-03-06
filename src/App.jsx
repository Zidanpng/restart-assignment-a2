import { Suspense } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import IssueManagement from "./components/IssueManagement";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchIssues = async () => {
  const result = await fetch("/ticket.json");
  return result.json();
};

function App() {
  const fetchPromise = fetchIssues();

  return (
    <div className="min-h-screen bg-white">
      <Navbar></Navbar>
      <Suspense fallback="Loading...">
        <IssueManagement fetchPromise={fetchPromise}></IssueManagement>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
