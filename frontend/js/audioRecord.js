let sendData = (audioArchive, url) =>{
  let formData = new FormData();
  formData.set('audio', audioArchive);

  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log("Success:", response))
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
          const audioBlob = new Blob(audioChunks,{ type: 'audio/mpeg-3' });
          // sendData(audioBlob)
          const audioUrl = URL.createObjectURL(audioBlob); 
          const audio = new Audio(audioUrl);
          const play = () => audio.play();
          resolve({ audioBlob, audioUrl, play });
          //Put audio on audio tag
          document.querySelector(".original-audio").src=audioUrl;
          document.querySelector(".original-audio").controls=true;
          document.querySelector(".titulo-audio-original").style.display = "block"
          document.querySelector("#particles-js").style.height = "150%"
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