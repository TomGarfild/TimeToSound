function speakText(text) {
    var msg = new SpeechSynthesisUtterance(text);

    var voices = window.speechSynthesis.getVoices();
    
    var englishVoice = voices.find(voice => voice.lang.startsWith('en'));
    
    if (englishVoice) {
        msg.voice = englishVoice;
    }
    window.speechSynthesis.speak(msg);
}