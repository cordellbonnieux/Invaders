import css from './style.css'
const gameArea = document.getElementById('gameArea')
const player = document.getElementById('player')

// center the player on start
player.style.cssText = 'left:230px;'

function addControls(player){
    document.addEventListener('keyup', (event) => {
        let pos = window.getComputedStyle(player)
        let left = parseFloat(pos.left)
        let right = parseFloat(pos.right)
        if (event.key == 'a'){
            left -= 10
            left.toString()
            if (left > 0){
                player.style.cssText = `left:${left}px`
            } else {
                return
            }
        }
        if (event.key == 'd'){
            right -= 10
            right.toString()
            if (right > 0){
                player.style.cssText = `right:${right}px`
            } else {
                return
            }
        }
    }) 
}
addControls(player)
