let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-GB"; // English UK voice
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    let day = new Date();
    let hour = day.getHours();
    if (hour >= 0 && hour < 12) {
        speak("Good Morning sir");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon sir");
    } else {
        speak("Good Evening sir");
    }
}

// Speech Recognition Setup
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript.toLowerCase().trim();  
    console.log("Heard:", transcript);  
    content.innerText = transcript;
    takeCommand(transcript);  
};

btn.addEventListener("click", () => {
    recognition.start();
});

function takeCommand(message) {
    console.log("Command received:", message);  

    if (message.match(/\b(hello|hi|hey) jarvis\b/)) {
        speak("Hello sir, how can I assist you today?");
    } else if (message.includes("jarvis open google")) {
        speak("Opening Google");
        window.open("https://www.google.com", "_blank");
    } else if (message.includes("jarvis open youtube")) {
        speak("Opening YouTube");
        window.open("https://www.youtube.com", "_blank");
    } else if (message.includes("jarvis open classroom")) {
        speak("Opening Google Classroom");
        window.open("https://classroom.google.com", "_blank");
    } else if (message.includes("jarvis open instagram")) {
        window.open("https://www.instagram.com", "_blank");
    } else if (message.includes(" jarvis open youtube")) {
        window.open("https://www.youtube.com", "_blank");
    } else if (message.includes("friday open chatgpt")) {
        speak("Opening ChatGPT");
        window.open("https://chat.openai.com", "_blank");
    } else if (message.includes("jarvis open spotify")) {
        speak("Opening Spotify");
        window.open("https://open.spotify.com", "_blank");
    } else if (message.includes("jarvis open google chrome")) {
        speak("Opening Google Chrome");
        window.open("https://www.google.com/chrome/", "_blank");
    } else if (message.includes("jarvis open whatsapp")) {
        speak("Opening WhatsApp");
        window.open("https://web.whatsapp.com", "_blank");
    } else if (message.includes("jarvis open calculator")) {
        speak("Opening Calculator");
        window.open("calculator://");  
    } else if (message.includes("jarvis open notepad")) {
        window.open("notepad://");  
    } else if (message.includes("open file explorer")) {
        window.open("file:///C:/");  
    } else if (message.includes("open whatsapp web")) {
        window.open("whatsapp://");  
    } else if (message.includes("open settings")) {
        exception("settings://");  
    } else if (message.includes("open task manager")) {
        window.open("task-manager://");  
    } else if (message.includes("open control panel")) {
        window.open("control://");  
    } else if (message.includes("open microsoft edge")) {
        speak("Opening Microsoft Edge");
        window.open("https://www.microsoft.com/edge", "_blank");  
    } else if (message.includes("open firefox")) {
        speak("Opening Firefox");
        window.open("https://www.mozilla.org/firefox", "_blank");  
    } else if (message.includes("open microsoft word")) {
        speak("Opening Microsoft Word");
        window.open("https://www.office.com/launch/word", "_blank");  
    } else if (message.includes("open microsoft excel")) {
        speak("Opening Microsoft Excel");
        window.open("https://www.office.com/launch/excel", "_blank");  
    } else if (message.includes("open microsoft powerpoint")) {
        speak("Opening Microsoft PowerPoint");
        window.open("https://www.office.com/launch/powerpoint", "_blank");  
    } else if (message.includes("open microsoft outlook")) {
        speak("Opening Microsoft Outlook");
        window.open("https://outlook.live.com", "_blank");  
    } else if (message.includes("play music")) {
        speak("Playing music");
        window.open("https://open.spotify.com", "_blank");
    } else if (message.includes("what is the time")) {
        let time = new Date().toLocaleTimeString();
        speak(`The current time is ${time}`);
    } else if (message.includes("what is the date")) {
        let date = new Date().toLocaleDateString();
        speak(`Today's date is ${date}`);
    } else if (message.includes("tell me a joke")) {
        speak("Why don't scientists trust atoms? Because they make up everything!");
    } else if (message.includes("what is your name")) {
        speak("I am Friday, your personal assistant.");
    } else if (message.includes("who create you")) {
        speak("I was created by a developer named Devanshu.");
    } else if (message.includes("weather")) {
        speak("Please check your local weather app for the latest updates.");
    } else if (message.includes("search")) {
        let query = message.replace("search", "google","youtube","chatgpt","spotify","google chrome","WhatsApp","calculator").trim();
        if (query) {
            speak(`Searching for ${query}`);
            window.open(`https://www.google.com/search?q=${query}`, "_blank");
            window.open(`https://www.youtube.com/results?search_query=${query}`, "_blank");
            window.open(`https://www.chatgpt.com/search?q=${query}`, "_blank");
            window.open(`https://www.spotify.com/search?q=${query}`, "_blank");
            window.open(`https://www.google.com/chrome/search?q=${query}`, "_blank");
            window.open(`https://www.whatsapp.com/search?q=${query}`, "_blank");
            window.open(`https://www.edge.com/search?q=calculator`, "_blank");    
        }
    } else if (message.includes("close")) {
        speak("Closing the application");
        window.close();
    } else if (message.includes("shutdown")) {
        speak("Shutting down the system");
    } else if (message.includes("restart")) {
        speak("Restarting the system");
    } else if (message.includes("help")) {
        speak("Here are some commands you can use: open Google, play music, tell me a joke, what is the time, what is the date, search for something, close the application.");
    } else if (message.includes("thank you") || message.includes("thanks")) {
        speak("You're welcome! If you need anything else, just let me know.");
    } else if (message.includes("goodbye") || message.includes("bye")) {
        speak("Goodbye sir, have a great day!");
        window.close();  
    } else if (message.includes("what can you do")) {
        speak("I can assist you with various tasks like opening websites, playing music, telling jokes, providing time and date information, and more. Just ask me anything!");
    } else if (message.includes("set a reminder")) {
        let reminder = message.replace("set a reminder", "").trim();
        if (reminder) {
            speak(`Reminder set for: ${reminder}`);
        } else {
            speak("Please tell me what you want to be reminded about.");
        }
    } else if (message.includes("tell me a fact")) {
        speak("Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still perfectly edible!");
    } else if (message.includes("what is your purpose")) {
        speak("My purpose is to assist you with various tasks and provide information. I'm here to help!");
    } else if (message.includes("play a game")) {
        speak("Let's play a game! How about a quick round of trivia? Ask me a question!");
    } else if (message.includes("tell me a story")) {
        speak("Once upon a time, in a land far away, there lived a wise old owl who knew all the secrets of the forest. One day, a curious little mouse asked the owl to share its wisdom...");
    } else if (message.includes("what is your favorite color")) {
        speak("I don't have personal preferences, but I think blue is a calming color.");
    } else if (message.includes("what is your favorite food")) {
        speak("I don't eat, but I hear pizza is quite popular!");
    } 

    // ------------------ NEW FEATURES ------------------
    else if (message.includes("wikipedia")) {
        let topic = message.replace("wikipedia", "").trim();
        if (topic) {
            speak(`Searching Wikipedia for ${topic}`);
            fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`)
                .then(res => res.json())
                .then(data => {
                    if (data.extract) {
                        speak(data.extract);
                    } else {
                        speak(`Sorry, I could not find anything on Wikipedia about ${topic}`);
                    }
                })
                .catch(() => speak("Sorry, I could not fetch data from Wikipedia."));
        } else {
            speak("Please tell me the topic you want to search on Wikipedia.");
        }
    } else if (message.includes("set timer")) {
        let minutes = parseInt(message.replace(/[^0-9]/g, ""));
        if (minutes) {
            speak(`Setting a timer for ${minutes} minutes`);
            setTimeout(() => {
                speak("Time is up!");
                alert("⏳ Timer finished!");
            }, minutes * 60000);
        } else {
            speak("Please tell me the duration for the timer in minutes.");
        }
    } else if (message.includes("send e-mail")) {
        let email = prompt("Enter recipient email:");
        let subject = prompt("Enter subject:");
        let body = prompt("Enter email body:");
        if (email) {
            speak("Opening your email client...");
            window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
        } else {
            speak("Email not sent. Please provide recipient email.");
        }
    } else if (message.includes("latest news") || message.includes("news update")) {
        speak("Opening latest news for you");
        window.open("https://news.google.com", "_blank");
    } else if (message.includes("play random music") || message.includes("play song")) {
        let songs = [
            "https://www.youtube.com/watch?v=c3K1BWeIZyo",
            "https://www.youtube.com/watch?v=AKrWQYHk85g",
            "https://www.youtube.com/watch?v=Qwnpckq0HlE"
        ];
        let song = songs[Math.floor(Math.random() * songs.length)];
        speak("Playing a random song for you");
        window.open(song, "_blank");
    } else if (message.includes("motivate me") || message.includes("inspire me")) {
        let quotes = [
            "Believe in yourself!",
            "The only limit to our realization of tomorrow is our doubts of today.",
            "Your limitation—it's only your imagination.",
            "Push yourself, because no one else is going to do it for you."
        ];
        speak(quotes[Math.floor(Math.random() * quotes.length)]);
    } else if (message.includes("calculate") || message.includes("math")) {
        let expression = message.replace("calculate", "4+6").replace("math", "7+8").trim();
        if (expression) {
            try {
                let result = eval(expression);
                speak(`The answer is ${result}`);
            } catch {
                speak("Sorry, I couldn't calculate that expression.");
            }
        } else {
            speak("Please tell me what calculation you want me to do.");
        }
    } else {
        speak("Sorry, I didn't understand that command.");
    }
}
