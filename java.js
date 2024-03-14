// java.js

togglePage(1);

function togglePage(pageNumber) {
    var pageTitle = document.getElementById("pageTitle");
    var pageContent = document.getElementById("pageContent");
    var postArea = document.getElementById("postArea");

    if (pageNumber === 1) {
        pageTitle.innerHTML = '<img src="./picture/趣记大字.svg">';
        pageContent.innerHTML = '<img src="./picture/首页.svg" alt="图片1">';
        postArea.style.display = "block"; // 显示文本框
    } else if (pageNumber === 2) {
        pageTitle.innerHTML = "趣记";
        pageContent.innerHTML = '<img src="./picture/树林页.svg" alt="图片2">';
        postArea.style.display = "none"; // 隐藏文本框
    }
}