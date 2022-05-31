{
    const lib4 = [
        "Follow on Instagram",
        "Buy Me a Coffee",
    ];
    ! function Newline() {
        const randomLine = Math.floor(Math.random() * lib4.length);
        document.getElementById('ld').innerHTML = lib4[randomLine];
    }();
}