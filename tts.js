function speakText(text) {
    var msg = new SpeechSynthesisUtterance(text);

    var voices = window.speechSynthesis.getVoices();

    console.log(voices);
    var englishVoice = voices.find(voice => voice.lang.startsWith('en_US'));
    console.log(englishVoice);
    if (englishVoice) {
        msg.voice = englishVoice;
    }
    window.speechSynthesis.speak(msg);
}