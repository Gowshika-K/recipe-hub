let recipes = [ 
    { 
        name:"Pizza", 
        ingredients:"Cheese, Dough, Sauce", 
        steps:"Bake at 200°C for 20 mins", 
        image:"pizza.jpg", 
        likes:0, 
        comments:[], 
        isUser:false 
    }, 
    { 
        name:"Pasta", 
        ingredients:"Pasta, Cream", 
        steps:"Boil and mix sauce", 
        image:"pasta.jpg", 
        likes:0, 
        comments:[], 
        isUser:false 
    }, 
    { 
        name:"Burger", 
        ingredients:"Bun, Patty", 
        steps:"Cook and assemble", 
        image:"burger.jpg", 
        likes:0, 
        comments:[], 
        isUser:false 
    }, 
    { 
        name:"Salad", 
        ingredients:"Vegetables", 
        steps:"Mix ingredients", 
        image:"salad.jpg", 
        likes:0, 
        comments:[], 
        isUser:false 
    } 
]; 
 
// DISPLAY 
function display(){ 
    let box = document.getElementById("recipe-list"); 
    box.innerHTML=""; 
 
    recipes.forEach((r,i)=>{ 
        box.innerHTML+=` 
        <div class="card"> 
            <img src="${r.image}"> 
            <h3>${r.name}</h3> 
 
            <button onclick="view(${i})">View</button> 
 
            <button onclick="like(${i})">     ${r.likes}</button> 
 
            ${r.isUser ? `<button onclick="del(${i})">Delete</button>` : ""} 
 
            <div> 
                <input type="text" placeholder="Comment" id="c${i}"> 
                <button onclick="addComment(${i})">  </button> 
            </div> 
 
            <small>${r.comments.join("<br>")}</small> 
        </div>`; 
    }); 
} 
 
// VIEW (popup) 
function view(i){ 
    let r = recipes[i]; 
 
    document.getElementById("popup-title").innerText = r.name; 
    document.getElementById("popup-ingredients").innerText = "Ingredients: " + 
r.ingredients; 
    document.getElementById("popup-steps").innerText = "Steps: " + r.steps; 
 
    document.getElementById("popup").style.display = "flex"; 
} 
 
// CLOSE 
function closePopup(){ 
    document.getElementById("popup").style.display = "none"; 
} 
 
// ADD RECIPE 
function addRecipe(e){ 
    e.preventDefault(); 
 
    let name = document.getElementById("name").value; 
    let ing = document.getElementById("ingredients").value; 
    let steps = document.getElementById("steps").value; 
    let file = document.getElementById("image").files[0]; 
 
    let reader = new FileReader(); 
 
    reader.onload = function(ev){ 
        recipes.push({ 
            name:name, 
            ingredients:ing, 
            steps:steps, 
            image:ev.target.result, 
            likes:0, 
            comments:[], 
            isUser:true    
        }); 
 
        display(); 
    } 
 
    reader.readAsDataURL(file); 
} 
 
// DELETE (only user recipes) 
function del(i){ 
    recipes.splice(i,1); 
    display(); 
} 
 
// LIKE 
function like(i){ 
    recipes[i].likes++; 
    display(); 
} 
 
// ADD COMMENT 
function addComment(i){ 
let input = document.getElementById("c"+i); 
let text = input.value; 
if(text.trim() !== ""){ 
recipes[i].comments.push(text); 
input.value=""; 
display(); 
} 
} 
// LOAD 
display(); 