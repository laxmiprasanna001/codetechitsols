function addRecipe() {
    var recipeName = document.getElementById("recipeName").value.trim();
    var recipeInstructions = document.getElementById("recipeInstructions").value.trim();
    
    if (recipeName !== "" && recipeInstructions !== "") {
        var recipeList = document.getElementById("recipeList");
        var recipeItem = document.createElement("div");
        recipeItem.className = "recipe-item";
        recipeItem.innerHTML = "<h2>" + recipeName + "</h2><p>" + recipeInstructions + "</p>";
        recipeList.appendChild(recipeItem);
        
        document.getElementById("recipeName").value = "";
        document.getElementById("recipeInstructions").value = "";
    }
}
