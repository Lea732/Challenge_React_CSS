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
          <div className='hours'>
        <p><span>Opening hours:</span> Monday (closed), Tuesday-Saturday (9:00am - 4:00pm), </p><p> Sunday (9:00am - 12:00am)</p>
        </div>
        <div className='web_mail'>
        <p><span>Website:</span>www.WildersFlower.com</p>
        <p><span>Mail adress:</span> wilder_flower@gmail.com</p>
        </div>      
        <p className='adress'><span>Adress:</span> 674 Maple Road, 43000 Columbus, OHIO</p>
        </div>
      </div>
    </>
  )
}

export default App
