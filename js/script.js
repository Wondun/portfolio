document.addEventListener("DOMContentLoaded", () => {
    const contentFrame = document.querySelector('.contentFrame');
    const menuButton =
        [
            document.querySelector('.bHome'),
            document.querySelector('.bProjects'),
            document.querySelector('.bCV'),
            document.querySelector('.bContact'),
            document.querySelector('.bAbout')
        ];
    const content =
        [
            document.querySelector('.contentHome'),
            document.querySelector('.contentProjects'),
            document.querySelector('.contentCV'),
            document.querySelector('.contentContact'),
            document.querySelector('.contentAboutMe')
        ];
    let actualContentNumber = 0;
    let frameInAction = false;


    function changeContent(contentNumber) {
        if (actualContentNumber != contentNumber && frameInAction == false) {
            frameInAction = true;
            //zwija
            const actualContent = document.querySelector('.contentDisplayed');
            const actualContentSize = getComputedStyle(actualContent).width;
            actualContent.style.width = actualContentSize;
            contentFrame.style.width = "50px";
            //zresetuj szerokość poprzedniego
            setTimeout(function () {
                actualContent.style.width = "calc(100vw - 520px)";
                actualContent.classList.add('contentHidden');
                actualContent.classList.remove('contentDisplayed');
                content[contentNumber].classList.add('contentDisplayed');
                content[contentNumber].classList.remove('contentHidden');
                contentFrame.style.width = "calc(100vw - 450px)";
                actualContentNumber = contentNumber;
                setTimeout(() => frameInAction = false, 300)
            }, 450)
        }
    }

    for (let i = 0; i < menuButton.length; i++) {
        menuButton[i].addEventListener('click', function () {
            changeContent(i);
        })
    }

    $(function () {
        // (Optional) Active an item if it has the class "is-active"	
        $(".accordion > .accordion-item.is-active").children(".accordion-panel").slideDown();

        $(".accordion > .accordion-item").click(function () {
            // Cancel the siblings
            $(this).siblings(".accordion-item").removeClass("is-active").children(".accordion-panel").slideUp();
            // Toggle the item
            $(this).toggleClass("is-active").children(".accordion-panel").slideToggle("ease-out");
        });
    });
});