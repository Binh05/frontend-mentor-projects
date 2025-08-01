import './style/style.css'
import Item from '@components/Item/Item'
import Button from '@components/button/Button'
import { useState, useEffect } from 'react'
import Score from '@components/Score/Score'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })
    .catch((error) => console.error("Fetch error:", error));
  }, []);

  return (
    <div className="container">
      <div className='card'>
        <div className="result">
          <h3 className="result__title">Your Result</h3>
          <Score className="result__score" score={76} />
          <h2 className="result__gt">Great</h2>
          <div className="result__text">
            You scored higher than 65% of the people who have taken these tests.
          </div>
        </div>
        <div className="summary">
          <h3 className="summary__title">Summary</h3>
          <div className="items">
            {data.map((item, index) => (
              <Item key={index}
                    icon={item.icon}
                    category={item.category}
                    score={item.score}
              />
            ))}
          </div>
          <Button text="Continue" />
        </div>
      </div>
    </div>
  )
}

export default App
