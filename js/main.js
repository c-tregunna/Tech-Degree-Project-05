// $('header').sticky({
//     getWidthFrom: '.container',
//     responsiveWidth: true
//   }); sticky header, bipping to the left so only use if can fix

// Lightbox

    lightbox.option({
        showImageNumberLabel: false,
        // albumLabel: '', same as above
        wrapAround: true
    })

// Search function....dun dun duhnnnnnnnnn

// function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL"); // id div tags
//     li = ul.getElementsByTagName("li"); // a tag
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0]; // a tag
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

$(document).ready(function(){
    let images = document.querySelectorAll('.gallery a');
    $('#searchBox').on('keyup', function(){
        let search =$('#searchBox').val().toLowerCase();
        for(let i = 0; i < images.length; i++) {
            let searchVal = images[i].getAttribute('data-title');
            if(searchVal.toLowerCase().indexOf(search) > -1){
                images[i].style.display = "";
            }else{
                images[i].style.display = "none";

            }
        }
    });
});
