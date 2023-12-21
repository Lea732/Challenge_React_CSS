import flower from './assets/flower.png'
import './styles/App.scss';

function App() {
  
  return (
    <>
      <div className='card'>
        <img src={flower} alt="flower" className='flower'/>
        <div className="title-overlay">
        <h1>Wilder&apos; s flower</h1>
        </div>
        <div className="slogan-overlay">
        <h2>Come get the flower power !</h2>
        </div>
        <div className='infos'>
        <p className='hours'>Opening hours: Monday (closed), Tuesday-Saturday (9:00am-4:00pm), Sunday (9:00am - 12:00am)</p>
        <p>www.wildersflower.com</p>
        <p>Mail adress: flowerPower@gmail.com</p>
        <p>Adress: 674 Maple Road, 43000 Columbus, OHIO</p>
        </div>
      </div>
    </>
  )
}

export default App
