    // เลือกปุ่ม Back to Top
    const backToTopButton = document.getElementById("backToTop");

    // แสดงปุ่มเมื่อเลื่อนลงมา
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // เลื่อนกลับไปด้านบนเมื่อคลิกปุ่ม
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });