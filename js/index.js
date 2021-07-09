window.onload = () => {
    let one = document.querySelector('.screen-one')
    let header = document.querySelector('header')
    let animation_one = document.querySelectorAll('.animation-one')
    let bg = document.querySelector('.bg')
    let counter = 0
    let catalogue = document.querySelector('.screen-catalogue')
    let catalogue_a = document.querySelectorAll('.screen-catalogue a')
    let screen_items = document.querySelector('.screen-items')
    let a1 = setInterval(() => {
        animation_one[counter].classList.add('active')

        counter++

        let switchOff = setInterval(() => {
            one.classList.add('active')

            setTimeout(() => {
                for(let item of catalogue_a){
                    item.classList.add('active')
                }
            }, 700);

        }, 2500);

        let screen_catalogue = setInterval(() =>{
            catalogue.classList.add('active')
            setTimeout(() => {
                screen_items.classList.add('active')
            }, 700)
        },4500)


        // let screen_wrap = setInterval(()=>{
        //     screen_items.classList.add('del_active')
        // },4500)

        if(counter >= animation_one.length) {
            clearInterval(a1)

            setTimeout(() => {
                header.classList.add('active')
                
                setTimeout(() => {
                    bg.classList.add('active')
                }, 500)
            }, 500)
        }
    }, 250)

}

