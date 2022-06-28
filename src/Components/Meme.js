import React, {useState} from 'react'
// import MemesData from '../memesData'


const Meme = () => {

    const [defimage, setImage] = useState({
        topText:"",
        bottomText:"",
        image: "https://i.imgflip.com/emccr.jpg"
    })
    
    const [allMeme, setAllMeme] = useState([])


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))
    },[])




    function getmemesData() {
        // const getData = allMeme.data.memes;
        const getLength = Math.floor(Math.random() * allMeme.length)
        const memesUrl = (allMeme[getLength].url)
        setImage((prevMeme) => {
            return {
                ...prevMeme,
                image:memesUrl
            }
        })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setImage((prevMeme) => {
            return {
                ...prevMeme,
                [name]:value
            }
        })
    }



  return (
      <div>
          <div className='input_feild'>
              <input 
              type="text" 
              placeholder="Top Text"
              name='topText'
              onChange={handleChange}
              value={defimage.topText}
              />
              <input 
              type="text"
              placeholder="Bottom Text"
              name='bottomText'
              onChange={handleChange}
              value={defimage.bottomText}
              />
          </div>
              <div className='buttton'>
              <button onClick={getmemesData} >Get a new Meme Image</button>
              </div>
          <div className='imagefile'>
              <img src={defimage.image} alt="Image" />
              <h2 className='memeText top'>{defimage.topText} </h2>
              <h2 className='memeText bottom'>{defimage.bottomText} </h2>
          </div>
    </div>
  )
}

export default Meme