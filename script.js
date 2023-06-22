console.log("Script Added")
let list = document.getElementById('list')
function handleSubmit(event) {
    event.preventDefault();
    let name = document.getElementById('name').value
    let description = document.getElementById('description').value
    let price = document.getElementById('price').value
    let quantity = document.getElementById('quantity').value
    if(name,description,quantity,price){
        console.log(name,description,price,quantity)
        let p = document.createElement('p')
        p.innerHTML = `<div class="list flex" id=${name}>
        <p>${name} ${description} ${price} RS &nbsp;&nbsp;Remaining: <span id=${name+"Quan"}>${quantity}</span></p>
        <button class="${name} add-button add1" id="add1" onclick=add(event)>Buy 1</button>
        <button class="${name} add-button add5" id="add5" onclick=add(event)>Buy 5</button>
        <button class="${name} add-button add10" id="add10" onclick=add(event)>Buy 10</button>
        </div>`
        list.appendChild(p)
        console.log("Item added successfully")
        document.getElementById('name').value=''
        document.getElementById('description').value=''
        document.getElementById('price').value=''
        document.getElementById('quantity').value=''
    }
    else{
        window.alert("PLEASE ENTER ALL VALUES")
    }
}

function add(event){
    // console.log("Purchased 1")
    // console.log(event.target)
    // console.log("CL",event.target.classList[0])
    // console.log(event.target.id)
    // console.log(quanminus)
    // console.log(parseInt(temp.innerHTML))
    let quanminus = (event.target.id.replace('add',''))
    let cn = event.target.classList[0]+"Quan"
    let temp = document.getElementById(cn)
    temp.innerHTML = (parseInt(temp.innerHTML) - parseInt(quanminus)) 
}