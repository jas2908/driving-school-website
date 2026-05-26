import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from "../common/header/Header";
import Home from "../home/Home";
import About from "../about/About";
import Courses from "../courses/Courses";
import Features from "../features/Features";
import Team from "../team/Team";
import Testimonial from "../testimonial/Testimonial";
import Error from "../404_page/Error";
import Appointment from "../appointment/Appointment";
import Contact from "../contact/Contact";
import Footer from "../common/footer/Footer";


const Pages = () => {
return (
    <>
        <Router>
            <Header />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/courses' component={Courses}/>
                <Route exact path='/features' component={Features}/>
                <Route exact path='/appointment' component={Appointment}/>
                <Route exact path='/our-team' component={Team}/>
                <Route exact path='/testimonial' component={Testimonial}/>
                <Route exact path='/error' component={Error}/>
                <Route exact path='/contact' component={Contact}/>
            </Switch>
            <Footer />
        </Router>
    </>
    )
}

export default Pages
