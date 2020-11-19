<template>
  <nav>
    <ul>
      <li><a href="/about.html" class="selected">Home</a></li>
    </ul>
    <div class="logo">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2000px-Google_2015_logo.svg.png">
    </div>
    <ul>
      <li><a href="/about.html" class="selected">Home</a></li>
    </ul>
  </nav>
</template>
<style>
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo img {
  width: 200px; }

nav > ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
}

nav > ul > li {
    margin: 0 1rem;
}
</style>
