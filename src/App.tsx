import React from "react";
// import { Main } from "./pages/Main/Main";
// import "./App.scss";
// import { useGetData } from "./shared/hooks";
// import { Sidebar } from "./components/Sidebar/Sidebar";
// import { Link, Switch } from "react-router-dom";
// import { Routes } from "./pages/Main/Routes";

// function App() {
//     const { usersList, isLoading, setUsersList } = useGetData();

//     const handleCompanyFilter = () => {
//         setUsersList(
//             [...usersList].sort((a, b) =>
//                 a.company.name > b.company.name ? 1 : -1
//             )
//         );
//     };

//     const handleCityFilter = () => {
//         setUsersList(
//             [...usersList].sort((a, b) =>
//                 a.address.city > b.address.city ? 1 : -1
//             )
//         );
//     };

//     return (
//         <div className="main">
//             {/* <Sidebar
//                 handleCityFilter={handleCityFilter}
//                 handleCompanyFilter={handleCompanyFilter}
//             /> */}
//             {/* <div className="content"> */}
//             <Link to={"/user4"}>user 1</Link>
//             <Switch>
//                 <Routes usersList={usersList} isLoading={isLoading} />
//             </Switch>
//             {/* </div> */}
//         </div>
//     );
// }

// export default App;
