document.addEventListener('DOMContentLoaded', function() {
    fetch('Welcome.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById("pageContent").innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching default content:', error);
        });
});

const menuBtn = document.getElementById("#menu-btn")
const sidebar = document.getElementById('#sidebar')

$(document).ready(function() {
    $(menuBtn).click(function() {
        $(sidebar).toggle('.active');
        console.log("new")
    });
});


function openPage(pageURL){
    $.ajax({
        url:pageURL,
        success:function(data){
            $("#pageContent").html(data);
        }
    })
}

document.getElementById("searchInput").addEventListener("input", function(){
    const query = this.value.toLowerCase();
    const container = document.getElementById("pageContent")
    const elements = container.getElementsByTagName("*");
    const results = []

    for(let element of elements ){
        const text = element.textContent.toLowerCase()
        if(text.includes(query)){
        element.style.color = "red"
      }
    }

})


// document.addEventListener('DOMContentLoaded', function() {
//     var defaultContent = "Welcome.html'  "<p>This is the default content of the main container.</p>";
//     document.getElementById("pageContent").innerHTML = defaultContent;
// });



// $(document).ready(function(){
//     openPage('Welcome.html');
//     console.log("neww")
// });