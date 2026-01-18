// -----------------------------------------------------------------------------------------------Background stars

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

// Fullscreen canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numStars = 300;
const stars = [];

// Create stars
for (let i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 1, // random X movement
        speedY: (Math.random() - 0.5) * 1  // random Y movement
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Move star
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around screen edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
    });

    requestAnimationFrame(drawStars);
}
drawStars();

// Resize canvas dynamically
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});



// Collapsing Navbar at Window Size 768
function screenSize() {
    const collapseNav = document.getElementById("collapseNav")
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    collapseNav.classList.toggle("collapse", isMobile)

    certificateImageSize()
}

// Expand and Collapse Animation
let rotate = false
function menuCollapse(){
    if(rotate == false){
        document.querySelector("#menu-btn span:nth-child(1)").style.animation = "ShowNavBtnSpanLeft 400ms ease forwards"
        document.querySelector("#menu-btn span:nth-child(2)").style.animation = "ShowNavBtnSpanMiddle 100ms ease forwards"
        document.querySelector("#menu-btn span:nth-child(3)").style.animation = "ShowNavBtnSpanRight 400ms ease forwards"
        rotate = true
    }
    else{
        document.querySelector("#menu-btn span:nth-child(1)").style.animation = "ShowNavBtnSpanLeftReverse 400ms ease forwards"
        document.querySelector("#menu-btn span:nth-child(2)").style.animation = "ShowNavBtnSpanMiddleReverse 100ms ease forwards"
        document.querySelector("#menu-btn span:nth-child(3)").style.animation = "ShowNavBtnSpanRightReverse 400ms ease forwards"
        rotate = false
    }
}

document.getElementById("showing-nav").addEventListener("click", function(){
    menuCollapse()
})

document.querySelectorAll("ul.nav .nav-link").forEach(link => {
    link.addEventListener('click', function(){
        if(window.innerWidth < 768){
            const collapseNav = document.getElementById("collapseNav")
            collapseNav.classList.remove("show")
            menuCollapse()
        }
    })
})

// Create Header observer
const Header = document.getElementById("Header");
// Welcome Section Height
function welcomeHeight(){
    let height = window.innerHeight - Header.getBoundingClientRect().height
    if(height <= 700){
        document.getElementById("Home").style.height = "700px"
    }else{
        document.getElementById("Home").style.height = height + "px"
    }
}


const logo = document.querySelector(".header .logo")
const logoImg = document.querySelector(".header .logo img")
const root = document.querySelector(":root")
logo.style.transform = "translateX(-1000px)"
logo.style.animation = "NavLogoAnimation 1s ease forwards"
logoImg.style.transform = "translateY(-200px)"
logoImg.style.animation = "NavLogoImgAnimation 1s ease forwards 0.6s"
// // document.querySelector("body").style.overflowY = "visible"

if(window.innerWidth <= 768){
    root.style.scrollPaddingTop = `100px`
}else{
    root.style.scrollPaddingTop = `${Header.getBoundingClientRect().height + 50}px`
}


if(window.innerWidth > 768){
    let animationDelay = 0
    document.querySelectorAll("header.header ul a").forEach(link => {
        link.style.transform = "translateY(-200px)"
        link.style.animation = `NavBarLinksAnimation 500ms ease forwards ${animationDelay}s`
        animationDelay += 0.2
    })
}
        

//About Me Animations
function AboutMeAnimations(){
    let aboutMeBox = document.querySelector("#About-Me .container")
    function onVisibleAboutMe(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutMeBox.style.animation = "ShowAnyBox 800ms ease forwards"
            }
        });
    }
    // Create observer
    const aboutMeObserver = new IntersectionObserver(onVisibleAboutMe, {
        threshold: 0.2 // trigger when 50% is visible
    });
    aboutMeObserver.observe(aboutMeBox)

    //About Me Animation Boxes
    let Bigbox = document.querySelector(".about-me-boxes .box:nth-child(1)")
    let boxes = document.querySelectorAll(".about-me-boxes .box")
    function onVisibleAboutBoxes(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let delay = 0
                boxes.forEach(box => {
                    box.style.animation = `ShowAnyBox 1s ease forwards ${delay}s`
                    delay += 0.3
                })
                const interval = setInterval(increasing_numbers, 100)
                setTimeout(() => {
                    clearInterval(interval)
                }, 2100);
            }
        });
    }
    // Create observer
    const aboutBoxesObserver = new IntersectionObserver(onVisibleAboutBoxes, {
        threshold: 0.1 // trigger when 10% is visible
    });
    aboutBoxesObserver.observe(Bigbox)

    // About Me Box's Numbers
    let exp = 0
    let skills = 0
    let projects = 0
    function increasing_numbers(){
        exp++
        skills++
        projects++
        if(exp <= 1) {
            document.querySelector(".about-me-boxes .box:nth-child(1) span").innerHTML = exp
        }
        if(skills <= 14){
            document.querySelector(".about-me-boxes .box:nth-child(2) span").innerHTML = skills
        }
        if(projects <= 6){
            document.querySelector(".about-me-boxes .box:nth-child(3) span").innerHTML = projects
        }
    }
}

// Skills Animations
function SkillsAnimations(){
    // Skill Box's Progress Bars
    let skillBox = document.getElementById("skills")
    function onVisibleSkillBoxes(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                NextPrevSkill(0)
                skillBox.style.animation = "ShowAnyBox 800ms ease forwards"
            }
        });
    }
    // Create observer
    const skillBoxesObserver = new IntersectionObserver(onVisibleSkillBoxes, {
        threshold: 0.2 // trigger when 30% is visible
    });
    skillBoxesObserver.observe(skillBox)

    document.querySelectorAll(".carousel button").forEach(button => {
        button.addEventListener('click', function(){
            NextPrevSkill(700)
        })
    })
    
    function NextPrevSkill(ms){
        setTimeout(()=>{
            document.querySelectorAll(".skills .carousel-item.active .progress-bar").forEach(progress => {        
                progress.style.width = progress.innerHTML
            })
        }, ms)
    }
}

// Projects Animations
function projectBoxesAnimation(){
    
    let projectsBox = document.querySelector("#projects .container-fluid")
    function onVisibleprojectsBox(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projectsBox.style.animation = "ShowAnyBox 800ms ease forwards"
            }
        });
    }
    // Create observer
    const projectsBoxObserver = new IntersectionObserver(onVisibleprojectsBox, {
        threshold: 0.2 // trigger when 30% is visible
    });
    projectsBoxObserver.observe(projectsBox)

    if(window.innerWidth >1024){
        let delay = 0
        let projects = document.getElementById("projects")
        function onVisibleProjectBoxes1(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelectorAll(".projects .card").forEach(card => {
                        card.style.animation = `ShowAnyBox 800ms ease forwards ${delay}s`
                        delay += 0.2
                    })
                }
            });
        }
        // Create observer
        const projectBoxesObserver1 = new IntersectionObserver(onVisibleProjectBoxes1, {
            threshold: 0.5 // trigger when 50% is visible
        });
        projectBoxesObserver1.observe(projects)
    }
    else{
        document.querySelectorAll(".projects .card").forEach(card => {
            function onVisibleProjectBoxes2(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        card.style.animation = `ShowAnyBox 800ms ease forwards`
                    }
                });
            }
            // Create observer
            const projectBoxesObserver2 = new IntersectionObserver(onVisibleProjectBoxes2, {
                threshold: 0.1 // trigger when 10% is visible
            });
            projectBoxesObserver2.observe(card)
        })
    }
}

// Cerificates Animations
function CerificatesAnimations(){
    let cerificatesBox = document.getElementById("certificates")
    function onVisibleCertificates(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                cerificatesBox.style.animation = "ShowAnyBox 800ms ease forwards"
            }
        });
    }
    // Create observer
    const certificateObserver = new IntersectionObserver(onVisibleCertificates, {
        threshold: 0.2 // trigger when 20% is visible
    });
    certificateObserver.observe(cerificatesBox)
}

function certificateImageSize(){
    document.querySelectorAll(".certificates img").forEach(img => {
        img.width = window.innerWidth - 100
    })
}

function imageShowType(){
    let showTypeContainer = document.getElementById("showTypeContainer")
    let showTypeImages = document.getElementById("showTypeImages")
    let showTypeSlideshow = document.getElementById("showTypeSlideShow")
    let slideshowType = true
    showTypeImages.addEventListener('click', function(){
        if(slideshowType == true){
            showTypeImages.classList.add('active')
            showTypeSlideshow.classList.remove('active')
            showTypeContainer.style.opacity = "0"
            setTimeout(() => {
                showTypeContainer.innerHTML = `
                    <div id="certificatesImages" class="">
                        <div class="gallery-grid d-flex flex-wrap justify-content-center align-items-center gap-4">
                            <img src="images/Certificates/C sharp Financial Program.jpg" alt="C sharp">
                            <img src="images/Certificates/PCB.jpg" alt="Printed Circuit Board">
                            <img src="images/Certificates/HTML Certificate.png" alt="HTML">
                            <img src="images/Certificates/CSS Certificate.png" alt="CSS">
                            <img src="images/Certificates/JavaScript 101 Certificate.png" alt="JavaScript 101">
                            <img src="images/Certificates/JavaScript Dom Certificate.png" alt="JavaScript Dom">
                            <img src="images/Certificates/Bootstrap Certificate.png" alt="Bootstrap">
                            <img src="images/Certificates/Linux 101 Certificate.png" alt="Linux 101">
                            <img src="images/Certificates/Python.png" alt="Python">
                            <img src="images/Certificates/Arduino C.jpg" alt="Arduino C">
                            <img src="images/Certificates/Robotics lvl 1.jpg" alt="Robotics lvl 1">
                            <img src="images/Certificates/Robotics lvl 2.jpg" alt="Robotics lvl 2">
                            <img src="images/Certificates/Robo Electronics lvl 1.jpg" alt="Robo Electronics lvl 1">
                        </div>
                    </div>`
                    document.querySelectorAll(".gallery-grid img").forEach(image => {
                        image.addEventListener('click', function(){
                            document.querySelector(".zoomImgBG img").src = image.src
                            document.querySelector(".zoomImgBG img").width = window.innerWidth - 10
                            document.getElementById("body").style.overflowY = "hidden"
                            document.getElementById("zoomImgBG").classList.add("zoomImgBGAnimation")
                            document.querySelector(".zoomImgBGAnimation").style.animation = "ShowAnyBox 600ms ease forwards"
                            console.log(image.src)
                        })
                    })
                certificateImageSize()
                },1000
            )
            setTimeout(() => {
                    showTypeContainer.style.opacity = "1"
                },1500  
            )
            
            console.log("image")
            slideshowType = false
        }
    })

    


    showTypeSlideshow.addEventListener('click', function(){
        if(slideshowType == false){
            showTypeSlideshow.classList.add('active')
            showTypeImages.classList.remove('active')
            showTypeContainer.style.opacity = "0"
            setTimeout(() => {
                showTypeContainer.innerHTML = `
                    <div id="certificatesCarousel" class="carousel slide" data-bs-ride="carousel">

                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="images/Certificates/C sharp Financial Program.jpg" alt="C sharp">
                            </div>

                            <div class="carousel-item">
                                <img src="images/Certificates/HTML Certificate.png" alt="HTML">
                            </div>

                            <div class="carousel-item">
                                <img src="images/Certificates/CSS Certificate.png" alt="CSS">
                            </div>

                            <div class="carousel-item">
                                <img src="images/Certificates/JavaScript Dom Certificate.png" alt="JavaScript Dom">
                            </div>
                            
                            <div class="carousel-item">
                                <img src="images/Certificates/JavaScript 101 Certificate.png" alt="JavaScript 101">
                            </div>

                            <div class="carousel-item">
                                <img src="images/Certificates/Bootstrap Certificate.png" alt="Bootstrap">
                            </div>

                            <div class="carousel-item">
                                <img src="images/Certificates/Linux 101 Certificate.png" alt="Linux 101">
                            </div>

                            <div class="carousel-item">
                                <img src="images/Certificates/Python.png" alt="Python">
                            </div>
                            
                            <div class="carousel-item">
                                <img src="images/Certificates/Arduino C.jpg" alt="Arduino C">
                            </div>

                            <div class="carousel-item">
                                <img src="images/Certificates/Robotics lvl 1.jpg" alt="Robotics lvl 1">
                            </div>

                            <div class="carousel-item">
                                <img src="images/Certificates/Robotics lvl 2.jpg" alt="Robotics lvl 2">
                            </div>

                            <div class="carousel-item">
                                <img src="images/Certificates/Robo Electronics lvl 1.jpg" alt="Robo Electronics lvl 1">
                            </div>
                            
                            <div class="carousel-item">
                                <img src="images/Certificates/PCB.jpg" alt="Printed Circuit Board">
                            </div>
                        </div>

                        <button class="carouselBTN carousel-control-prev" type="button" data-bs-target="#certificatesCarousel" data-bs-slide="prev">
                            <i class="fa-solid fa-chevron-left fs-1 fw-bold"></i>
                        </button>
                        <button class="carouselBTN carousel-control-next" type="button" data-bs-target="#certificatesCarousel" data-bs-slide="next">
                            <i class="fa-solid fa-chevron-right fs-1 fw-bold"></i>
                        </button>

                    </div>`
                certificateImageSize()
                },1000
            )
            setTimeout(() => {
                    showTypeContainer.style.opacity = "1"
                },1500  
            )
            console.log("slidshow")
            slideshowType = true
        }
    })
}
function closeZoom(){
    document.querySelector(".zoomImgBGAnimation").style.animation = "HideAnyBox 600ms ease forwards"
    setTimeout(() => {
        document.getElementById("body").style.overflowY = "visible"
        document.getElementById("zoomImgBG").classList.remove("zoomImgBGAnimation")
    }, 600);
}

// Contact Animations
function ContactAnimations(){
    let ContactBox = document.querySelector("#Contact .container")
    function onVisibleContact(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                ContactBox.style.animation = "ShowAnyBox 800ms ease forwards"
            }
        });
    }
    // Create observer
    const contactObserver = new IntersectionObserver(onVisibleContact, {
        threshold: 0.2 // trigger when 20% is visible
    });
    contactObserver.observe(ContactBox)
}

// Contact Form
const form = document.getElementById('dataForm')
try{
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        else{
            alert("Message is Sent ! \nThank You !")
        }

        form.classList.add('was-validated')
    }, false)
}
catch{
    console.log("No Form")
}


//Time
const time = document.getElementById('time')
setInterval(
    () => (time.innerHTML = new Date().toLocaleTimeString("en-US", { hour12:true })),1000
)

//Fixing Browser Error
document.addEventListener("DOMContentLoaded", function () {
    // Enable tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl)
    })
});