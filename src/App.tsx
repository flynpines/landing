import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import QuickStart from './components/QuickStart';
import Resources from './components/Resources';
import StudentLife from './components/StudentLife';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NPC from './components/NPC';
import Courses from './components/Courses';
import Typer from './components/Typer';
import Fortune from './components/Fortune';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Welcome />
      <StudentLife />
      <Resources />
      <NPC />
      <Courses />
      <Typer />
      <Fortune />
      <QuickStart />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
