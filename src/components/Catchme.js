import React, {useEffect, useState} from 'react'
import {Card, CardActions, CardContent, CardHeader , Button, Paper, Link, Typography, Stack} from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { styled } from '@mui/material/styles';

// import UIfx from 'uifx'
// import {Howl, Howler} from 'howler';
import clapAudio from './audio/clap.mp3'
import cryAudio from './audio/Baby Crying Sound Effect.mp3'

const clapSound = new Audio(clapAudio);
clapSound.volume=0.3;
const crySound = new Audio(cryAudio);
crySound.volume=0.3;

// soundPlayer.play();


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Catchme = (props) => {
    
    var url_string = window.location.href
    var url = new URL(url_string);
    var speed = Number(url.searchParams.get("speed"));

    var duration = Number(url.searchParams.get("duration")) - 1;
    console.log('catchme', speed, duration);

    let navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const [ghostClicked, setGhostClicked] = React.useState(false);

    const [scoreMSG, setScoreMSG] = React.useState("");
    const [position, setPosition] = useState({top: 0, left: 0});


    const [counter1, setCounter1] = useState(duration);
    const [sysCounter, setSysCounter] = useState(4);

    let refreshedIntervalId;
    
    let refreshedIntervalId2;
    
    useEffect(() => {
        // console.log("Catchme->useEffect1:", refreshedIntervalId)
  
  
        refreshedIntervalId2 = setInterval(() => {
        //   console.log("Catchme->useEffect->setI1", refreshedIntervalId2)
          // setCounter1((counter1) => (counter1-1));
          // setSysCounter((sysCounter) => (sysCounter-1));
          if(counter1 < 0 || ghostClicked ) { 
              clearInterval(refreshedIntervalId2);
            //   setScoreMSG((scoreMSG)=>("Hey, you lostttttttt...!"));
            //   setOpen((open) => (true)) ;
          }
          else{
              setCounter1((counter1) => (counter1-1));
          }
        }, 1000);
  
        return () => {clearInterval(refreshedIntervalId2);};
  
      }, [counter1, ghostClicked])
      
    useEffect(() => {
    //   console.log("Catchme->useEffect2:", refreshedIntervalId)

      refreshedIntervalId = setInterval(() => {
        // console.log("Catchme->useEffect->setI1", refreshedIntervalId)
        // setCounter1((counter1) => (counter1-1));
        // setSysCounter((sysCounter) => (sysCounter-1));
        if(counter1 < 0 || ghostClicked) { 
            clearInterval(refreshedIntervalId);
            if(!ghostClicked){
                setScoreMSG((scoreMSG)=>("Hey, you lostttttttt...!"));
                crySound.play();
                setOpen((open) => (true)) ;
            }
            
           
        }
        else{
            // setCounter1((counter1) => (counter1-1));
            // setSysCounter((sysCounter) => (sysCounter-1));
            assignRandomPosition();
        }
      }, 1000/speed);  //speed*10

      return () => {clearInterval(refreshedIntervalId);};

    }, [counter1, ghostClicked])
    
    // const handleClickOpen = () => {
    //     console.log("handleClickOpen")
    //     setCounter1((counter1)=> (counter1-1));
    // };
    
    const handleNo = () => {
        clapSound.pause();
        clapSound.currentTime = 0;
        crySound.pause();
        crySound.currentTime = 0;
        setOpen(false);
        setCounter1((counter1)=>(0));
        // setSysCounter((sysCounter) => (0));
        setGhostClicked((ghostClicked)=>(true));
        // clearInterval(refreshedIntervalId);
        // clearInterval(refreshedIntervalId2);
        // console.log("first", refreshedIntervalId)


        navigate('/', {replace: true});
        
    };
    const handleYes = () => {
        clapSound.pause();
        clapSound.currentTime = 0;
        crySound.pause();
        crySound.currentTime = 0;
        setOpen((open)=>(false));
        // if(counter1!=4)
        setCounter1((counter1)=>(4));
        // setSysCounter((sysCounter) => (4));
        setGhostClicked((ghostClicked)=>(false));
        setScoreMSG((scoreMSG)=>(""));
        // clearInterval(refreshedIntervalId);
        // console.log("first", refreshedIntervalId)


        // navigate('/', {replace: true});
        
    };
    function youWin(){
        console.log("youWin:")
        // setCounter1((counter1)=>(-100));
        // setSysCounter((sysCounter) => (-100));
        // if(sysCounter != 4)
        // clearInterval(refreshedIntervalId);
        setGhostClicked((ghostClicked)=>(true));
        setScoreMSG((scoreMSG)=>("Hey, you wonnnnnnnn...!"));

        clapSound.play();
        setOpen(true);  
        // winSound.play();
            
    } 


    function getHeight() {
        // console.log("getHeight:", document.getElementById("card1").offsetHeight)
        return document.getElementById("card1").offsetHeight; 
        // return Math.max(
        //   document.body.scrollHeight,
        //   document.documentElement.scrollHeight,
        //   document.body.offsetHeight,
        //   document.documentElement.offsetHeight,
        //   document.documentElement.clientHeight
        // );
    }
    function getWidth() {
        // console.log("getWidth:", document.getElementById("card1").offsetWidth)
        return document.getElementById("card1").offsetWidth; 
    }
    const assignRandomPosition = () => {
        // console.log("Catchme->assignRandomPosition:")
        // var x = Math.floor((Math.random()*500)  + 10);
        // console.log(position, x);

        var position2 = {};
        position2['top'] = Math.floor(Math.random() * (getHeight()-300) + 108 ) + "px";
        position2['left'] = Math.floor(Math.random() * (getWidth()-200))       + "px";

        setPosition(position => ({
            ...position,
            ...position2
          }));

        // setPosition((prevPos) => (prevPos), {top: Math.floor(Math.random() * (getHeight()-200) + 100 ) + "px", left: Math.floor(Math.random() * (window.innerWidth)-200 ) + "px"} )
        // console.log(position);
    }

   
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


    return (
    <>
    {/* <button onClick={() => clapSound.play()}>play</button>
    <button onClick={() => clapSound.pause()}>pause</button> */}
    <div style={{backgroundColor: "#f07810", height: window.innerHeight-16 , padding: ".5rem"}}>
        <Card id="card1"  sx={{ bgcolor: "yellow", minWidth: 275,height: window.innerHeight-16, cursor: 'url(icons8-hammer-96.png),auto'  }}>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <div> <Typography variant='h3'>CatchMe</Typography>  </div>
            <div> <Typography id="counter" variant='h3'> {counter1+1}</Typography></div>
        </div>
        <CardContent>
            
        {/* top: 0, left: 0, */}
                <div id="santa" onClick={youWin} style={{position: "relative", ...position, width: "140px"}} >
                    <span className="gamepiece" style={{fontSize:"100px", textShadow: "4px 4px 16px gray", cursor: "grab" }} >
                        {"🎅"}
                    </span>
                </div>
            
        </CardContent>
        {/* <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>

        {
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                // onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                {ghostClicked?
                    <div style={{textAlign: 'center', marginTop: "0px"}}> <img src={"https://i.gifer.com/Kzhs.gif"}  alt="lost" style={{ width:'100%', height:'8rem', }} /> </div>
                    :<div style={{textAlign: 'center', marginTop: "0px"}}> <img src={"https://i.gifer.com/jQ.gif"}  alt="lost" style={{ width:'100%', height:'8rem'}} />  </div>               }
                {/* https://i.gifer.com/VgE.gif */}
                {/* <img src="https://i.gifer.com/ICU.gif" alt="text" style={{width:'100%', height:'8rem'}} /> */}
                
                {/* <img src="https://i.gifer.com/jQ.gif" alt="text" style={{width:'100%', height:'8rem'}} /> */}
                
                <DialogTitle>{scoreMSG}</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Wanna play again ?
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleYes}>Yes</Button>
                    <Button onClick={handleNo}>No</Button>
                </DialogActions>
          </Dialog>
        }
    </div>
        
    </>
    )
}

export default Catchme
