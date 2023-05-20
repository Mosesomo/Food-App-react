import Cards from "./components/Cards"
import Foods from "./components/Foods"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import Category from "./components/Category"
import Footer from "./components/Footer"

const App = () =>{
    return(
        <div>
            <Navigation />
            <Hero />
            <Cards />
            <Foods />
            <Category />
            <Footer />
        </div>
    )
}
export default App