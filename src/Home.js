import React from 'react'
import './style.css'

const Home = () => {
  
  const [joke, setJoke] = React.useState('');

  const setHeader = {
    headers: {
      Accept: 'application/json',
    },
  };

  const generateJokes = async () => {
    try {
      const res = await fetch('https://icanhazdadjoke.com', setHeader);
      const data = await res.json();
      setJoke(data.joke);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    generateJokes();
  }, []);


  return (
    <>
    
      {/* Hero Section */}
      <section className="section section-hero">
        <div className="container">
            <div className="joke-box">
                <h1 className="hero-heading">Best Jokes&nbsp; <i className="fa-regular fa-face-grin-tongue-wink"></i></h1>
                <p id='hero-para'>{joke}</p>
                <button className='btn' onClick={generateJokes}>Generate Joke</button>
            </div>
        </div>
      </section>

    </>
  )
}

export default Home