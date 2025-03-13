let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishme(){
    let day=new Date()
    let hours = day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good Afternoon sir")
    }else{
        speak("Good Evening sir")
    }
}
window.addEventListener('load',()=>{
  // wishme()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())

}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"    
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"  
    voice.style.display="none"
    if(message.includes("hello") || message.includes("hey") ){
        speak(" hello sir,How can i help you")
    }
    else if(message.includes("how are you")){
        speak("i am doing well , what about you dear")
    }
    else if(message.includes("who are you")){
        speak("i am virtual assistent created by krishlay sir")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }    
    else{ 
        speak(`this is what is found in internet regarding ${message.replace("kiki","")}`)
        window.open(`https://www.google.com/search?q= ${message.replace("kiki","") }`)
 
    }


}
     
7