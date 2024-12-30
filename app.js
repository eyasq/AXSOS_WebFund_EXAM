var carSwitch = document.querySelector('#carSwitch')
var btns = document.querySelectorAll('.appointment-btn')
var badges = document.querySelectorAll('#nBookings')
var endorseBtn = document.querySelector('.endorsementBtn')
var endorseText = document.querySelector('#endorseText')
var customer = document.querySelector('#customer')
btns.forEach((btn, index)=>{
    btn.addEventListener('click',()=>{
        var num = parseInt(badges[index].innerText)
        if(num<=0){
            badges[index.innerText = 0]  //APPOINTMENTS CANNOT BE LESS THAN 0
        }
        else{badges[index].innerText = num-1}
      
    })
})

carSwitch.addEventListener('click',()=>{
    carSwitch.classList.add('fade-in')
    carSwitch.src = '/assets/WebFund/blue-super-car.png'
})

endorseBtn.addEventListener('click',()=>{
    endorseText.classList.add('fade-in')
    customer.classList.add('fade-in')
    customer.src = '/assets/WebFund/unstisfied.png'
    endorseText.innerText = 'I had a really dissapointing time at this car wash. Service was terrible, cleaning was superificial, and I found a dead cat in backseat. The car smells like trash and there`s fleas everywhere!,adipisicing elit. Eligendi minima necessitatibus corporis culpa modi reiciendis, odit voluptatem sit quisquam id quis quod asperiores corrupti, debitis magnam incidunt recusandae quo labore. Eum animi nulla non vitae accusantium soluta expedita ratione quam optio asperiores veritatis libero, ipsam molestiae. Natus dignissimos ut molestias molestiae impedit, quisquam voluptatum repudiandae tempora maiores iure! Aliquam, laboriosam! '
    }
)

// the show more delete button was done inline as it see it would be less simple to write it here isntead of keeping it there inline.