// console.log('%c HI', 'color: firebrick')

// Fetching and displaying the dog image
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
          data.message.forEach(imageUrl => {
              const img = document.createElement('img');
              img.src = imageUrl;
              document.body.appendChild(img); 
          });
      });
});

//Creating code that fetches and list dogs breeds
const breedUrl = "https://dog.ceo/api/breeds/list/all";
fetch(breedUrl)
  .then(response => response.json())
  .then(data => {
      const breedsList = document.getElementById('dog-breeds');
      Object.keys(data.message).forEach(breed => {
          const li = document.createElement('li');
          li.textContent = breed;
          breedsList.appendChild(li);
      });
  });


  // Changing font color on the click
  document.querySelectorAll('#dog-breeds li').forEach(li => {
    li.addEventListener('click', () => {
        li.style.color = 'red'; // Change to any color you prefer
    });
});


//Create code that filters breeds on dropdown change
