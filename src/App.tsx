import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { RepoList } from './components/RepoList';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <main className="container">
        <Hero />
        <Skills />
        <RepoList />
        <Footer />
      </main>
    </div>
  );
}

export default App;
