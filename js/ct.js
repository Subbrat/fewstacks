{
    const countE0 = document.getElementById('ct0');
    updateVisitCount();
    function updateVisitCount() {
        fetch('https://api.countapi.xyz/update/subbrat/experimente/?amount=+1')
            .then(res => res.json())
            .then(res => {
                countE0.innerHTML = res.value;
            })
    }
}
