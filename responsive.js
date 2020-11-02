// Get the Sidebar
var mySidebar = document.getElementById("mySidebar");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

// Get the Search Bar
var searchButton = document.getElementById("searchButton");
// Get the Search Button
var searchBar = document.getElementById("countrySearch");

/*
  if (mySidebar.style.display === "block") {
    searchButton.style.cssFloat = "left";
    searchBar.style.cssFloat = "left";
  }
  */
// Toggle between showing and hiding the sidebar, and add overlay effect
function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
    overlayBg.style.display = "none";
  } else {
    mySidebar.style.display = 'block';
    overlayBg.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
  overlayBg.style.display = "none";
}