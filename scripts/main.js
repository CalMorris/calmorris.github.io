window.onload = function () {
  function loadNavbar() {
    const navbar = document.querySelector("nav");

    const navbarContent = `<div>
        <ul class="nav-links">
            <li><a href='/index.html'>Home</a></li>
            
            ${/* TECHNICAL BLOG */ ""}

            <li><a href="#">technical blog</a>
                <ul class="nav-dropdown-content">
                    
                    <li class="nav-dropdown-option">
                        <a class="nav-dropdown-item"
                            href="/blog/class-id.html">Classes &amp;
                            ID\'s</a>
                    </li>
                    <li class="nav-dropdown-option">
                        <a class="nav-dropdown-item"
                            href="/blog/javascript-dom.html">javaScript &amp; the DOM</a>
                    </li>
                    <li class="nav-dropdown-option">
                        <a class="nav-dropdown-item"
                            href="/blog/problem-solving.html.html">problem solving</a>
                    </li>

                    
                </ul>
            </li>
            ${/* CULTURAL BLOG */ ""}
      
            <li><a href="#">cultural blog</a>
                <ul class="nav-dropdown-content">
                    
                
                    <li class="nav-dropdown-option">
                        <a class="nav-dropdown-item"
                            href="/blog/identity-values.html">identity
                            &amp; values</a>
                    </li>
                    <li class="nav-dropdown-option">
                        <a class="nav-dropdown-item"
                            href="/blog/learning-plan.html">learning
                            plan</a>
                    </li>
                    <li class="nav-dropdown-option">
                        <a class="nav-dropdown-item"
                            href="/blog/emotional-intelligence.html">emotional
                            intelligence</a>
                    </li>
                    <li class="nav-dropdown-option">
                        <a class="nav-dropdown-item"
                            href="/blog/neuroplasticity.html">neuroplasticity & mindset</a>
                    </li>
                   
                </ul>
            </li>
    
        </ul>
        <a href="https://github.com/CalMorris">
            <img class="social-media-link"
                src="/blog/img/github-logo.svg"
                alt="github-link">
        </a>
    </div>
    
    <div class="hamburger-wrapper">
        <div class="hamburger-menu"></div>
    </div>`;

    navbar.innerHTML = navbarContent;
  }

  loadNavbar();

  function hamburgerDropdown() {
    const links = document.querySelector(".nav-links");
    const hamburgerMenu = document.querySelector(".hamburger-wrapper");

    hamburgerMenu.addEventListener("click", () => {
      if (links.style.display === "none" || links.style.display === "") {
        links.style.display = "block";
      } else {
        links.style.display = "none";
      }
    });
  }

  hamburgerDropdown();
};
