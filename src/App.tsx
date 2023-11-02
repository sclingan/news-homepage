import './App.css'
import Header from '../src/Header';
import Article from '../src/Article';
import Aside from '../src/Aside';
import Section from '../src/Section';

function App() {

  return (
    <main id='main'>
      <h1 className='sr-only'>News Homepage</h1>
      <Header />
      <Article />
      <Aside />
      <Section />
    </main>
  )
}

export default App
