{

    {
        const lib2 = [
            "Subbrat made this",
            ": )",
            "Happy Learning",
            "This line changes",
            "Thank me later",
            "Why watching Title?",
            "Focus on Tutorial",
            "Aztec Col : First Volume",
            "Dimensen",
            "Dimensen by Subbrat",
        ];
        ! function Newline() {
            const randomLine = Math.floor(Math.random() * lib2.length);
            document.getElementById('tit').innerHTML = lib2[randomLine];
        }();
    }
    {
        const lib3 = [
            "C Sharp",
            "C#",
        ];
        ! function Newline() {
            const randomLine = Math.floor(Math.random() * lib3.length);
            document.getElementById('rtx').innerHTML = lib3[randomLine];
        }();
    }


}
// function getRandomNumberBetween(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }