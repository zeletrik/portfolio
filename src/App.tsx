import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { RepoList } from './components/RepoList';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Hero />
        <Skills />
        <Experience />
        <RepoList />
        <Footer />
      </main>
    </div>
  );
}

export default App;
