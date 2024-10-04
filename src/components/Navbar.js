
import NavMenu from "./NavMenu";
// import SearchBar from "./Search";
// import WishList from "./WishList";
import HomeSection from "./HomeSection";
export default function navBar() {
    return (
        <header className="header">
            <nav className="navbarcss">


                <NavMenu />
                {/* <SearchBar/> */}
                {/* <WishList/> */}



            </nav>
            <HomeSection />
        </header>
    );
}

