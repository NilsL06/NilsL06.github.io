const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
    <div class="footer-content">
        <img
          src="img/Mountain-logo-Design-Graphics-9785421-1-1-580x435.png"
          class="logo"
          alt=""
        />
        <div class="footer-ul-container">
          <ul class="category">
            <li class="category-title">men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
          </ul>
          <ul class="category">
            <li class="category-title">women</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
            <li><a href="#" class="footer-link">sweatshirts</a></li>
            <li><a href="#" class="footer-link">shirts</a></li>
            <li><a href="#" class="footer-link">jeans</a></li>
            <li><a href="#" class="footer-link">trousers</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">casuals</a></li>
            <li><a href="#" class="footer-link">formals</a></li>
            <li><a href="#" class="footer-link">sports</a></li>
            <li><a href="#" class="footer-link">watch</a></li>
          </ul>
        </div>
      </div>
      <p class="footer-title">about company</p>
      <p class="info">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae non
        aperiam voluptas ratione odio nobis maxime, ab sequi. Ullam, a corrupti
        ad nam expedita fugiat architecto ex quo hic, odit, quas quasi.
        Voluptatum id quo nobis laboriosam fuga. Quisquam rem voluptatem sint
        exercitationem eligendi. Consectetur mollitia saepe odit pariatur neque
        dolorem, eos possimus magni delectus ea odio commodi temporibus hic
        vitae quae voluptate esse deserunt dicta officiis cupiditate? Inventore
        quisquam aspernatur, corrupti esse odit quos quidem dolor voluptas ab,
        accusantium ipsum, animi nesciunt alias! Rerum harum commodi fuga
        incidunt cumque, non obcaecati sit ex esse fugiat beatae, tempore enim
        atque?
      </p>
      <p class="info">support email - help@brand.com</p>
      <p class="info">telephone - 079 000 00 00</p>
      <div class="footer-social-container">
        <div>
          <a href="#" class="social-link">terms & conditions</a>
          <a href="#" class="social-link">privacy</a>
        </div>
        <div>
          <a href="#" class="social-link">instagram</a>
          <a href="#" class="social-link">facebook</a>
          <a href="#" class="social-link">twitter</a>
        </div>
      </div>
      <p class="footer-credit">Clothing, Best online store</p>
    `;
};

createFooter();
