import Form from './Form.js';
import TaskList from './TaskList.js';


function App() {

  return (
    <div>
      <div className='body'>
        <div className='header wrapper'>
          <h1>White Rabbit</h1>
          <p>"<em>The hurrier I go, the behinder I get</em>" -Lewis Carrol</p>
        </div>

        < Form />
        < TaskList />
      </div>

      <footer>
        <p className='wrapper'>Created by Patrisha U. at Juno College</p>
      </footer>
    </div>
  );
}

export default App;
