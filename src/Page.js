import MainContent from "./components/MainContent";
import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";
import MainPageInfo from "./components/MainPageInfo";
import Navbar from "./components/Navbar";


export default function Page() {
    return (
        <>
            <Navbar />
            <MainHeader />
            <MainContent />
            <MainPageInfo />
            <MainFooter />
        </>
    );

}