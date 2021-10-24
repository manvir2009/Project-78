var images = ["https://as2.ftcdn.net/jpg/01/15/47/87/500_F_115478791_GG0yIcVA8Mhe6MAXEvgcfyL7JtuVfYvm.jpg", "https://lh3.googleusercontent.com/proxy/viy7XjvLGbz3z_OaAyS5c5E6ihzsoMK-mMCr9Hza2QN3-BmwgA1NOmV50Q2wrGNjphTA8OhEP7IDBcZM_wpr3uKAVDDzyLKHHvpyGqA9BQ", "https://www.pngkit.com/png/detail/294-2943666_-boy-clipart.png", "family.png"];
var names = ["Mom", "Dad", "Me", "Us"];
var i = 0;

function update(){

  var array_length = images.length - 1;
  var updated_image = images[i];
  var updated_text = names[i];

  document.getElementById("family_book_image").src = updated_image;
  document.getElementById("name").innerHTML = updated_text;

  i++;


  if(i>array_length){
  i = 0;
                
  }
}


