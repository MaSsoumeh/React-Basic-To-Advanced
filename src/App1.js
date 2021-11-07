// import DynamicBookList from './components/DynamicBookList';
import StaticBookList from './basicReact/components/StaticBookList';

function App1() {
  return (
    <div className='App'>
      <header>
        <h1 style={{ textAlign: 'center' }}>ReadLine Library</h1>
      </header>

      {/* <DynamicBookList /> */}
      <StaticBookList />
    </div>
  );
}

export default App1;
