
gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

document.addEventListener("DOMContentLoaded", () => {
    const t1 = gsap.timeline({
        delay: 0.3,
        defaults: {
            ease: "hop",
        },
    });

    const counts = document.querySelectorAll(".count");

    counts.forEach((count, index) => {
        const digits = count.querySelectorAll(".digit h1");

        t1.to(digits, {
            y: "0%",
            duration: 1,
            stagger: 0.075,
        }, 
        index * 1
    );

        t1.to(digits, {
            y: "-120%",
            duration: 1,
            stagger: 0.075,
        }, 
        index * 1 + 1
    );
    });

    t1.to(".spinner", {
        opacity: 0,
        duration: 0.3,
    });

    t1.to(
        ".logo img",
        {
            scale: 1,
            duration: 1,
        },
        "<"
    );

    t1.to(".divider", {
        scaleY : "100%",
        duration: 1,
        onComplete: () =>
            gsap.to(".divider", { opacity: 0, duration: 0.4, delay: 0.3 }),
    });

    t1.to(
        ".logo img",
        {
            scale: 0,
            duration: 1,
            delay: 0.3,
        }
    );

    t1.to(".block", {
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        delay: 0.75,
        onStart: () => 
            gsap.to(".hero", { scale: 1, duration: 2, ease: "hop"}),
    });

    t1.to(
    [".Qoute h1", ".sub-q p"],
    {
        y: "0%",
        duration: 4,
        stagger: 0.25,
    },
    "<"
    );

    t1.to(".enroll-label button", {
        scale: 1,
        duration: 3,
        stagger: 0.75,
        dalay: 1,
    }, "<");

    t1.to(
    [".m-ul li a", ".school-name h6"],
    {
        y: "0%",
        duration: 1,
        stagger: 0.15,
    },
    "<"
    );

    t1.call(() => {
        const clipped = document.querySelectorAll(".m-ul li");
        clipped.forEach(el => {
            el.style.clipPath = "none";
            el.style.willChange = "auto";
        });
    });



    t1.to(".loader", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
            document.querySelector(".loader").remove();
        }
    });
});
