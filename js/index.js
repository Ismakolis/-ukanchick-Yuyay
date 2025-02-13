// script.js  
document.addEventListener('DOMContentLoaded', function() {  
    const photos = document.querySelectorAll('.photo');  

    photos.forEach(photo => {  
        photo.addEventListener('mouseover', function() {  
            this.style.transform = 'scale(1.1)';  
        });  

        photo.addEventListener('mouseout', function() {  
            this.style.transform = 'scale(1)';  
        });  
    });  
});