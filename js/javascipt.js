document.addEventListener("DOMContentLoaded", function () {
     const menuToggle = document.querySelector(".navbar-toggler");
     const navMenu = document.querySelector(".navbar-collapse");
 
     menuToggle.addEventListener("click", function () {
         navMenu.classList.toggle("active");
     });
 });
 
 // Slider Navigation
 let next = document.querySelector('.next');
 let prev = document.querySelector('.prev');
 
 next.addEventListener('click', function () {
     let items = document.querySelectorAll('.item');
     document.querySelector('.slide').appendChild(items[0]);
 });
 
 prev.addEventListener('click', function () {
     let items = document.querySelectorAll('.item');
     document.querySelector('.slide').prepend(items[items.length - 1]);
 });

 //Coluum
 [...document.querySelectorAll('.column')].map(column => {
	column.style.setProperty('--animation', 'slide');
	column.style.setProperty('height', '200%');
	column.innerHTML = column.innerHTML + column.innerHTML;
});


//Đổi màu cho các icon
function changeColor() {
     var icons = document.querySelectorAll('.icon-food');
     var titles = document.querySelectorAll('.tiltle-icon');
     
     // Mảng chứa các màu bạn muốn sử dụng
     var colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00', '#00ffff'];
 
     var currentColorIndex = 0;
 
     setInterval(function() {
         // Chuyển đổi sang màu tiếp theo trong mảng
         currentColorIndex = (currentColorIndex + 1) % colors.length;
 
         // Áp dụng màu mới cho từng icon và tiêu đề
         icons.forEach(function(icon) {
             icon.style.color = colors[currentColorIndex];
         });
 
         titles.forEach(function(title) {
             title.style.color = colors[currentColorIndex];
         });
     }, 800); // Thời gian giữa các lần thay đổi màu (ở đây là 1 giây)
 }
 
 // Gọi hàm khi trang được tải
 window.onload = changeColor;
 
 
 