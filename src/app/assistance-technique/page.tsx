/* Assets Imports */
import '../globals.css'
import techSupportBannerPhoto from "public/tech-support_stock_photo.jpg"
/* Components Imports */
import CallUs from '../_components/CallUs'
import Header from '../_components/Header'
import Footer from '../_components/Footer'
import Banner from '../_components/Banner'
/* Page Components Imports */
import TechSupportSection from './_pageComponents/TechSupportSection'



export default function ContactPage() {
    return (
        <>
            <Header activePage={ "home" } />
            <CallUs />
            <main>
                <Banner image={ techSupportBannerPhoto } />
                <TechSupportSection />
            </main>
            <Footer />
        </>
    )
}
