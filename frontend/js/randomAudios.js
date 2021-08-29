function generateAudio(arrAudios){
    numero = Math.floor(Math.random() * (11 - 0)) + 0;
    return './audios/' + arrAudios[numero]
}
  
  
  const recordAudio = () =>      
    new Promise(async resolve => {  
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];    
    
      mediaRecorder.addEventListener("dataavailable", event => {
        audioChunks.push(event.data);   
      });
    
      const start = () => mediaRecorder.start();
    
      const stop = () =>         
        new Promise(resolve => {
          mediaRecorder.addEventListener("stop", () => {
            let arrAudios = [
                "1.mp3",
                "2.mp3",
                "3.mp3",
                "4.mp3",
                "5.mp3",
                "6.mp3",
                "7.mp3",
                "8.mp3",
                "9.mp3",
                "10.mp3",
            ]
            
            const audioBlob = new Blob(audioChunks,{ type: 'audio/mpeg-3' });
            const audioUrl = URL.createObjectURL(audioBlob); 
            const audio = new Audio(audioUrl);
            const play = () => audio.play();
            resolve({ audioBlob, audioUrl, play });
            //Put audio on audio tag
            document.querySelector(".original-audio").src=audioUrl;
            document.querySelector(".original-audio").controls=true;
            document.querySelector(".titulo-audio-original").style.display = "block"
            document.querySelector("#particles-js").style.height = "150%"

            // Random audios
            document.querySelector(".convert-audio").src=generateAudio(arrAudios);
            document.querySelector(".convert-audio").controls=true;
          });
  
          mediaRecorder.stop();
        });
  
      resolve({ start, stop });
    });
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time));
  
  let recorder
  
  const handleAction = async () => {
    recorder = await recordAudio(); 
    const actionButton = document.getElementById('action');
    actionButton.disabled = true;
    recorder.start();
  }
  
  const handleActionStop = async () => {
      const audio = await recorder.stop();
      //actionButton.disabled = false;  
  }



