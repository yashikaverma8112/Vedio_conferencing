import * as React from 'react';
import './App.css'
import{ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';
import { ReactMediaRecorder } from "react-media-recorder";
export default function App() {
  const roomID = "roomId";
  let myMeeting = async (element) => {

 // generate Kit Token
 const appID = appID;
 const serverSecret = "serverSecret ";
 const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "");

 // Create instance object from Kit Token.
 const zp = ZegoUIKitPrebuilt.create(kitToken);
 // start the call
 zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
         mode: ZegoUIKitPrebuilt.VideoConference,
        },
   });
  };

  return (
    <div className='app_container'>

    <div
      className='body_screen'
      ref={myMeeting}
      style={{width: '100vw', height: '100vh'}}
    >


    </div>
<div>
    <ReactMediaRecorder
      screen
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div className='container'>
         
          <button onClick={startRecording} className='btn btn-success'  style={{margin:"12px"}}>Start Recording</button>
          <button onClick={stopRecording}  className='btn btn-danger' >Stop Recording</button> <br></br>

       

          <video src={mediaBlobUrl} controls autoPlay loop  style={{width : "600px"}}/>
           
        </div>
      )}
    />
  </div>


</div>
  );
}