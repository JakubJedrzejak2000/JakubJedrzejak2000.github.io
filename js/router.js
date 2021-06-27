let pageUrls =
    {
        about: '/index.html?about',
        gallery: "/index.html?gallery",
        home: "/index.html?home"
    }

function OnStartUp(params) {
    popStateHandler();
}

OnStartUp();
document.querySelector("#about-link").addEventListener("click", (event) => {
    let stateObj = {
        page: "about"
    }
    document.title = "About";
    history.pushState(stateObj, "about", "?about");
    RenderAboutPage();
});
document.querySelector("#gallery-link").addEventListener("click", (event) => {
    let stateObj = {
        page: "gallery"
    }
    document.title = "Gallery";
    history.pushState(stateObj, "gallry", "?galerry");
    RenderGalleryPage();
});
document.querySelector("#home-link").addEventListener("click", (event) => {
    let stateObj = {
        page: "home"
    }
    document.title = "Home";
    history.pushState(stateObj, "home", "?home");
    RenderHomePage();
})

function RenderAboutPage(params) {
    document.querySelector("main").innerHTML =
        "<h1 class='title'>About Me</h1>" +
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
}

function RenderGalleryPage(params) {
    document.querySelector("main").innerHTML =
        "<div class='row photos'>" +
        "   <div class='col-sm-6 col-md-4 col-lg-3 item'><img class=\"img-fluid\" src='./img/image.png' alt='iamge'> </div>" +
        "   <div class='col-sm-6 col-md-4 col-lg-3 item'><img class=\"img-fluid\" src='./img/image.png' alt='iamge'> </div>" +
        "   <div class='col-sm-6 col-md-4 col-lg-3 item'><img class=\"img-fluid\" src='./img/image.png' alt='iamge'> </div>" +
        "</div>"


}

function RenderHomePage(params) {
    document.querySelector("main").innerHTML =
        "<h1 class='title'>Hello world!</h1>" +
        "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>"
}

function popStateHandler(event) {
    loc = window.location.href.toString().split(window.location.host)[1];

    if (loc === pageUrls.gallery) {
        RenderGalleryPage();
    }
    if (loc === pageUrls.about) {
        RenderAboutPage();
    }
    if (loc === pageUrls.home) {
        RenderHomePage();
    }
}

window.onpopstate = popStateHandler;