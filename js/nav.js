// This creates the navbar function and makes it so i easily can add in the navbar in every file without having to copy and paste all the code
const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
    <div class="nav">
        <img
          src="img/Mountain-logo-Design-Graphics-9785421-1-1-580x435.png"
          class="brand-logo"
          alt="The brands logo"
        />
        <div class="nav-items">
          <div class="search">
            <input
              type="text"
              class="search-box"
              placeholder="search brand, product"
            />
            <button class="search-btn">search</button>
          </div>
          <a href="#"><img src="img/1077114.png" alt="user-pic" /></a>
          <a href="#"
            ><img
              src="img/15bb559cdd28f56d7c17b00498b4a946.png"
              alt="shopping-cart"
          /></a>
        </div>
      </div>
      <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">women</a></li>
        <li class="link-item"><a href="#" class="link">men</a></li>
        <li class="link-item"><a href="#" class="link">kids</a></li>
        <li class="link-item"><a href="#" class="link">accessories</a></li>
      </ul>
    `;
};

createNav();
