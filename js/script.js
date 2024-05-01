

// Data
// https://assets.codepen.io/16425/web-3-spring-2024-roster.json


// Data source
const dataSource = 'https://assets.codepen.io/16425/web-3-spring-2024-roster.json';

// Get It
const h1 = document.querySelector('h1');
const container = document.querySelector('.swiper-wrapper');

// Fetch It
fetch( dataSource )
  .then( response => response.json() )
  .then( students => { 
     
    students.forEach( (student) => {
      
      // template
      const template = `
       <div class="swiper-slide">
            
            <h1 style='color: ${student.Color}'> ${student.Emoji}       ${student.Name}</h1>
            <blockquote>${student.Quote}</blockquote>
            <img style='border: ${student.Color} solid 8px' src=${student.Image}>
            
            <h2> ${student.Superpower}</h2>
       </div>
      `
      
      //  dynamically insert      
      container.insertAdjacentHTML('afterbegin', template);
      
      
    });
  
        
});
