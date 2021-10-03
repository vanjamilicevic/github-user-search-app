
/* 
   Setting array of mohtn names for nedeed join date 
*/
const months = [
   'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

/* 
   Creating a function that fetches and sets the data for given user
   Fetch is a promise and the response gets converted into JSON 
*/

function fetchAndSet(username) {

   fetch(`https://api.github.com/users/${username}`)
   .then((response) => {
      
      /*
         If username doesn't exist, we're showing "No results" text
         and recursively calling same function to set data for Octocat
      */
      if (response.status === 404) {
         document.getElementById("no-results").innerHTML = "No results"
         document.getElementById("no-results").style.visibility = "visible"
         fetchAndSet("octocat")
      } else {

         /*
            In case username exist, and it is octocat (recursive call)
            do not hide "No results" text
         */
         if(username !== "octocat") {
            document.getElementById("no-results").style.visibility = "hidden"
         }

         return response.json()
      }
   })
   .then((data) => {
        
      /*
         Setting:
         - Profile image, username, repos, followers, folowing
      */ 
      document.getElementById("git-profile-image").src = `${data.avatar_url}`;
      document.getElementById("username").innerHTML = `@${data.login}`;
      document.getElementById("repos").innerHTML = `${data.public_repos}`;
      document.getElementById("followers").innerHTML = `${data.followers}`;
      document.getElementById("following").innerHTML = `${data.following}`;
      
      /*
         Setting different message in case name data isn't present
      */
      if(data.name) {
         document.getElementById("name").innerHTML = `${data.name}`
      }
      else {
         document.getElementById("name").innerHTML = `${data.login}`
      }

      /*
         Setting different message and styling in case bio data isn't present
      */
      if(data.bio) {
         document.getElementById("bio").innerHTML = `${data.bio}`
         document.getElementById("bio").classList.remove("transparent-bio")
      }
      else {
         document.getElementById("bio").innerHTML = `This profile has no bio`
         document.getElementById("bio").classList.add("transparent-bio")
      }

      /*
         Setting different message and styling in case twitter data isn't present
      */
      if(data.twitter_username) {

         document.getElementById("twitter").innerHTML = `<a target="_blank" 
         href="https://mobile.twitter.com/${data.twitter_username}">${data.twitter_username}
         </a>`
         document.getElementById("twitter").classList.remove("transparent-info")
      }
      else {

         document.getElementById("twitter").innerHTML = `Not available`
         document.getElementById("twitter").classList.add("transparent-info")
         document.getElementById("twitter-image").classList.add("transparent-image")
      }
         
      /*
         Setting different message and styling in case location data isn't present
      */
      if (data.location) {

         document.getElementById("location").innerHTML = `${data.location}`
         document.getElementById("location").classList.remove("transparent-info")
         
      }
      else {

         document.getElementById("location").innerHTML = `Not available`
         document.getElementById("location").classList.add("transparent-info")
         document.getElementById("location-image").classList.add("transparent-image")
      }

      /*
         Setting different message and styling in case website (blog) data isn't present
      */
      if(data.blog){

         document.getElementById("website").innerHTML = `<a target="_blank" href="${data.blog}">${data.blog}</a>`
         document.getElementById("website").classList.remove("transparent-info")
      }
      else {

         document.getElementById("website").innerHTML = `Not available`
         document.getElementById("website").classList.add("transparent-info")
         document.getElementById("website-image").classList.add("transparent-image")
      }
         
      if(data.company) {
         company = data.company.slice(1)
         document.getElementById("company").innerHTML = `<a target="_blznk" href="https://github.com/${company}">${data.company}</a>` 
         document.getElementById("company").classList.remove("transparent-info")
         
      } 
      else {
         document.getElementById("company").innerHTML = `Not available`
         document.getElementById("company").classList.add("transparent-info")
         document.getElementById("company-image").classList.add("transparent-image")
      }
         

      /* 
         Setting date in specific format
      */
      let date = new Date(data.created_at)
      document.getElementById("joined-date").innerHTML = 
         `Joined ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
   })
}

/*
   Setting default data for Octocat (When JS is loaded)
*/
fetchAndSet("octocat")

/*
   Setting data when username is submitted
*/
let form = document.getElementById("search-username-form")
form.addEventListener('submit', function(e){
   
   e.preventDefault();

   let searchPhrase = document.getElementById("search").value;
   if (searchPhrase === "") {

      /*
         Hiding visible error content if present
      */
      if (document.getElementById("no-results").style.visibility === "visible") 
         document.getElementById("no-results").style.visibility = "hidden"

      return
   }
   else if (searchPhrase.startsWith("@")) {

      document.getElementById("no-results").innerHTML = "Remove \"@\""
      document.getElementById("no-results").style.visibility = "visible"
   }
   else {

      fetchAndSet(searchPhrase)
   }
   
})

/*
   Toggling website theme
*/
document.getElementById("click-area").addEventListener("click", () => {

   let text = document.getElementById("light-dark").innerHTML
   if (text === "LIGHT") {
      
      /*
         Changing text and icon
      */
      document.getElementById("light-dark").innerHTML = "DARK"
      document.getElementById("sun-moon").setAttribute("src", "./assets/icon-moon.svg")

      document.body.classList.add("body-light")
      document.getElementById("search-username-form").classList.add("search-username-form-light")
      document.getElementById("search").classList.add("search-light")
      document.getElementById("user-container").classList.add("user-container-light")
      document.getElementById("name").classList.add("name-light")
      document.getElementById("username").classList.add("username-light")
      document.getElementById("joined-date").classList.add("date-light")
      document.getElementById("bio").classList.add("bio-light")
      document.getElementById("numbers").classList.add("numbers-light")
      document.querySelectorAll(".numbers-title").forEach((paragraph) => {
         paragraph.classList.add("numbers-title-light")
      })
      document.querySelectorAll(".numbers-value").forEach((paragraph) => {
         paragraph.classList.add("numbers-value-light")
      })
      document.querySelectorAll(".white-image").forEach((paragraph) => {
         paragraph.classList.add("icons-light-version")
      })
      document.querySelectorAll(".info").forEach((paragraph) => {
         paragraph.classList.add("info-light")
      })
    
      
   }
   else {

      /*
         Changing text and icon
      */
      document.getElementById("light-dark").innerHTML = "LIGHT"
      document.getElementById("sun-moon").setAttribute("src", "./assets/icon-sun.svg")

      document.body.classList.remove("body-light")
      document.getElementById("search-username-form").classList.remove("search-username-form-light")
      document.getElementById("search").classList.remove("search-light")
      document.getElementById("user-container").classList.remove("user-container-light")
      document.getElementById("name").classList.remove("name-light")
      document.getElementById("username").classList.remove("username-light")
      document.getElementById("joined-date").classList.remove("date-light")
      document.getElementById("bio").classList.remove("bio-light")
      document.getElementById("numbers").classList.remove("numbers-light")
      document.querySelectorAll(".numbers-title").forEach((paragraph) => {
         paragraph.classList.remove("numbers-title-light")
      })
      document.querySelectorAll(".numbers-value").forEach((paragraph) => {
         paragraph.classList.remove("numbers-value-light")
      })
      document.querySelectorAll(".white-image").forEach((paragraph) => {
         paragraph.classList.remove("icons-light-version")
      })
      document.querySelectorAll(".info").forEach((paragraph) => {
         paragraph.classList.remove("info-light")
      })
   }
      
})
 

