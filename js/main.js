/* -------------------- about section tables-----------------------*/
(() => {

    const aboutSection = document.querySelector(".about-section"),
        tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        /*  if event.target contain 'tab-item' class and not contain
         'active' class */

        if (event.target.classList.contains("tabs-item") &&
            !event.target.classList.contains("active")) {

            const target = event.target.getAttribute("data-target");
            // dectivate existing active ' tab-items

            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");

            //active new tabs-item
            event.target.classList.add("active", "outer-shadow");

            //deactivate existing tab-contain

            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            // activate new tab-container
            aboutSection.querySelector(target).classList.add("active");




        }

    })

})();