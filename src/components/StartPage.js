import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Info from './Info'
import {Slider, Stack, Typography} from '@mui/material'
// import {Layout, Header, Footer, Content} from 'antd'


export default function StartPage() {

  const [info, setInfo] = useState(false)
  const [speed, setSpeed] = useState(1.5)
  const [duration, setDuration] = useState(5)


  useEffect(() => {
    // console.log("StartPage:useEffect:")
  
    
  }, [])
  

    const handleInfoClose = () => {
      setInfo(false);
    };
    function valuetext(value) {
      return `${value}`;
    }
    function valuetext2(value) {
      return `${value + 1}`;
    }
  return (
    
    <>
    {/* <audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio> */}
    {/* var snd = new Audio("mixkit-animated-small-group-applause-523.wav"); 
    snd.play(); */}
    {/* <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout> */}
    {/* <div class="tenor-gif-embed" data-postid="16085931" data-share-method="host" data-aspect-ratio="1.07744" data-width="100%"><a href="https://tenor.com/view/baby-yes-yeah-happy-celebrate-gif-16085931">Baby Yes GIF</a>from <a href="https://tenor.com/search/baby-gifs">Baby GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */}
    
    
     {/* <!-- Trigger/Open The Modal --> */}
     <p id="info" onClick={() => { setInfo((info)=>(true))}} ><i > ? </i></p>
        <Info info={info} handleInfoClose={handleInfoClose} />
        
      <div className="startPage" style={{width: "100%"}} style={{marginTop: "2rem"}}>

        <Stack direction={"column"} spacing={20} justifyContent="center" alignItems="center" style={{margin: "auto"}}>
        {/* <h2 id="h2"> CatchMe!🎅</h2> */}
        <Typography variant='h2' > CatchMe!🎅</Typography>
        <br />
        
        {/* <!-- The Modal -->
        <div id="myModal" className="modal">

        <!-- Modal content -->
        <div className="modal-content">
        <span className="close">&times;</span>
        <p>Welcome to the only platform for non addictive games.
        We launch our very first game. It is quite simple to play, after pressing "GO!" button, try to catch the single game piece moving in random positions within time bound.
        Thanks to Mr. Sunil to ideate and design this product.</p>
        </div>

        </div> */}

        <Link to={`/catchme?speed=${speed}&duration=${duration}`} >
          <button  id="btn"> GO! </button>

          {/* <button  onClick={() => { loop(); removeFront(); insertSanta(); timer(); }} id="btn" > GO! </button> */}
        </Link>

        <div className='gameControls'>
          <Stack direction={"column"} spacing={1}>
          <div>
          <Stack direction={"row"} spacing={2}>
            <Typography variant="body1" > Duration </Typography>
            <Slider onChange={(e)=>{setDuration(e.target.value)}} 
              getAriaValueText={valuetext2} 
              step={1} 
              marks 
              min={1} 
              max={59} 
              valueLabelDisplay="auto" 
              value={duration} 
              sx={{width: "500px"}}>
            </Slider>
            <Typography variant="body1" > Sec </Typography>
          </Stack>
          </div>

          <div>
          <Stack direction={"row"} spacing={2}>
          
          <Typography variant="body1" > Speed </Typography>
          <Slider onChange={(e)=>{setSpeed(e.target.value)}} 
            getAriaValueText={valuetext} 
            step={0.5} 
            marks 
            min={1} 
            max={15} 
            valueLabelDisplay="auto" 
            value={speed} 
            sx={{width: "500px"}}>
            
          </Slider>
          <Typography variant="body1" > Steps/Sec </Typography>
          </Stack>
          </div>
          </Stack>
        </div>

        <Typography  id="cpwrt">         
          {" "} 2020 &copy CatchMe.in | Ideated and designed by Sunil | All rights reserved{" "}
        </Typography>


        {/* <p id="cpwrt">
        {" "} 2020 &copy CatchMe.in | Ideated and designed by Sunil | All rights reserved{" "}
        </p> */}


        {/* <h1 id="h1"> </h1>

        <h1 id="score"> {" "}<span id="timer"> </span>{" "} </h1> */}

        {/* <div id="santa" onClick={youWin}>
        <span className="gamepiece" style={{fontSize:"100px"}}>
            {" "}
        </span>
        </div> */}

      </Stack>
      </div>
    </>


  )
}
