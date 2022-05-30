{
    document.oncontextmenu = new Function("return false");
}
{
    var mySidebar = document.getElementById("mySidebar");
    function s6_open() {
        if (mySidebar.style.display === 'block') {
            mySidebar.style.display = 'none';
            // menubar.style.display = 'block';
        } else {
            mySidebar.style.display = 'block';
            menubar.style.display = 'block';
        }
    }
    function s6_close() {
        mySidebar.style.display = "none";
    }
}
{
    window.addEventListener('mouseup', function (event) {
        var box = document.getElementById('mySidebar');
        if (event.target != box && event.target.parentNode != box) {
            box.style.display = 'none';
        }
    });
}
{
    document.addEventListener("DOMContentLoaded", function () {
        var t = document.querySelector(".s6slide");
        function e(n) {
            var o = window.pageYOffset,
                a = Math.floor(Date.now());
            ! function t() {
                Math.easeInOutQuad = function (t) {
                    return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1
                };
                var e = Math.min(1, (Math.floor(Date.now()) - a) / n);
                window.scroll(0, Math.ceil(Math.easeInOutQuad(e) * (0 - o) + o)), 0 === window.pageYOffset && callback(), requestAnimationFrame(t)
            }()
        }
        t.addEventListener("click", function () {
            window.requestAnimationFrame ? e(700) : window.scrollTo(0, 0)
        }), window.addEventListener("scroll", function () {
            280 < document.body.scrollTop || 280 < document.documentElement.scrollTop ? (t.removeAttribute("style", "transform: translateX(120px);"), t.setAttribute("style", "transform: translateX(0);")) : (t.removeAttribute("style", "transform: translateX(0);"), t.setAttribute("style", "transform: translateX(120px);"))
        })
    });
}