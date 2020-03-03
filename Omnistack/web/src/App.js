import React, {useState, useEffect} from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (posistion) => {
        const {latitude, longitude} = posistion.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, [])

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('http://localhost:3333/devs', {
      github_username,
      techs,
      latitude,
      longitude
    })

    console.log(response.data);
  }

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className='input-block'>
            <label htmlFor='github_username'>Usuário do Github</label>
            <input 
            name='github_username' 
            id='github_username' 
            required 
            value={github_username} 
            onChange={e => setGithubUsername(e.target.value)} />
          </div>

          <div className='input-block'>
            <label htmlFor='github_username'>Tecnologias</label>
            <input 
            name='github_username' 
            id='username_github' 
            required 
            value={techs} 
            onChange={e => setTechs(e.target.value)} />
          </div>

          <div className='input-group'>
            <div className='input-block'>
              <label htmlFor='Latitude'>Latitude</label>
              <input 
              type='number' 
              name='latitude' 
              id='latitude' 
              required 
              value={latitude} 
              onChange={e => setLatitude(e.target.value)} />
            </div>
            <div className='input-block'>
              <label htmlFor='longitude'>Longitude</label>
              <input 
              type='number' 
              name='longitude' 
              id='longitude' 
              required 
              value={longitude} 
              onChange={e => setLongitude(e.target.value)} />
            </div>
          </div>
          <button type='submit'>Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className='dev-item'>
            <header>
              <img src='https://avatars3.githubusercontent.com/u/38306784?s=460&v=4' alt='diogo'></img>
              <div className='user-info'>
                <strong>Diogo Scheffer</strong>
                <span>React JS, Node JS</span>
              </div>
            </header>
            <p>Não vai dar não !</p>
            <a href='https://github.com/diogosc11'>Acessar perfil no Github</a>
          </li>

          <li className='dev-item'>
            <header>
              <img src='https://avatars3.githubusercontent.com/u/38306784?s=460&v=4' alt='diogo'></img>
              <div className='user-info'>
                <strong>Diogo Scheffer</strong>
                <span>React JS, Node JS</span>
              </div>
            </header>
            <p>Não vai dar não !</p>
            <a href='https://github.com/diogosc11'>Acessar perfil no Github</a>
          </li>

          <li className='dev-item'>
            <header>
              <img src='https://avatars3.githubusercontent.com/u/38306784?s=460&v=4' alt='diogo'></img>
              <div className='user-info'>
                <strong>Diogo Scheffer</strong>
                <span>React JS, Node JS</span>
              </div>
            </header>
            <p>Não vai dar não !</p>
            <a href='https://github.com/diogosc11'>Acessar perfil no Github</a>
          </li>

          <li className='dev-item'>
            <header>
              <img src='https://avatars3.githubusercontent.com/u/38306784?s=460&v=4' alt='diogo'></img>
              <div className='user-info'>
                <strong>Diogo Scheffer</strong>
                <span>React JS, Node JS</span>
              </div>
            </header>
            <p>Não vai dar não !</p>
            <a href='https://github.com/diogosc11'>Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );    
}

export default App;
