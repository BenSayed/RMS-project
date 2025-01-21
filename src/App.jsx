import Home from "./page-index/Home/Home";
import WaitingPage from "./Handel Page/Waiting page/waitingPage";
import PageErorr500 from "./Page Erorr/Page500/pageErorr500";
import Erorr404 from "./Page Erorr/page404/Erorr404";
import Countact from "./page-index/Contaut us/ContautUs";
import Header from "./Component/Header/Header";
import Login from "./LoginPage/login/login";
import SignUp from "./LoginPage/Sign up/SignUp";
import ExploreMenu from "./page-index/MenuPage/ExploreMenu";
import FOOTER from "./Component/FOOTER/FOOTER.jsx";
import Reservation from "./page-index/Reservation/reservation";
import MenuComponent from "./page-index/MenuPage/Explore Menu/explor";
import SalesPages from "./Sales pages/pageSales1/SalesPages";


function App() {
  return (
    <>
   

        <Header />
        {/* <Countact /> */}
        {/* <WaitingPage/> */}
        {/* <PageErorr500/> */}
        {/* <Erorr404/> */}
        {/* <Home /> */}
        <SalesPages/>
 
        {/* <Reservation /> */}
        {/* <MenuComponent/> */}

        {/* <Login/> */}
        {/* <SignUp/> */}
        {/* <ExploreMenu /> */}
   
   
      <FOOTER/>
    </>
  );
}

export default App;
