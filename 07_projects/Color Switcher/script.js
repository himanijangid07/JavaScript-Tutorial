const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (btn) {
    console.log(btn)
    btn.addEventListener('click', function(e) {
        console.log(e)
        console.log(e.target)
        switch(e.target.id) {
            case "grey":
                body.style.backgroundColor = 'grey'
                break;
            case "white":
                body.style.backgroundColor = 'white'
                break;
            case "blue":
                body.style.backgroundColor = 'blue'
                break;
            case "yellow":
                body.style.backgroundColor = 'yellow'
                break;
            case "purple":
                body.style.backgroundColor = 'purple'
                break;
        }
    })
})