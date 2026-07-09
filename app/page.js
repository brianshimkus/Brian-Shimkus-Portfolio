import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import FunFactsSection from './components/FunFactsSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PortfolioSection from './components/PortfolioSection'
import SkillsSection from './components/SkillsSection'

export default function Home() {
	return (
		<main className='app-bg flex min-h-screen flex-col'>
			<Navbar />
			<div className='container mt-8 mb-24 mx-auto px-12 py-4'>
				<HeroSection />
				<AboutSection />
				<SkillsSection />
				<PortfolioSection />
				<FunFactsSection />
			</div>
			<Footer />
		</main>
	)
}
