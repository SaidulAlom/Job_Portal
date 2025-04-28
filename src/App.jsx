import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedJobs from './components/FeaturedJobs';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Companies from './components/Companies';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section id="home">
          <Hero />
        </section>
        <section id="jobs">
          <FeaturedJobs />
        </section>
        <section id="categories">
          <Categories />
        </section>
        <section id="companies">
          <Companies />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;