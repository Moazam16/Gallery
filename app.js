let imageList = [
  "  https://hips.hearstapps.com/hmg-prod/images/nature-quotes-landscape-1648265299.jpg",
  "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg",
  "https://www.thebmc.co.uk/Handlers/ArticleImageHandler.ashx?id=9382&index=0&w=605&h=434",
  "https://assets.weforum.org/article/image/DZZif56hzlwOs_HzBXT-fjzTQCb64yjMWLKsMW6OioI.jpg",
];
let imageShow = 0;
// imageList.style.height = "100px";
let nextBtn = document.getElementById("next");
let previousBtn = document.getElementById("previous");
let img = document.getElementById("img");
img.style.height = "600px";
previousBtn.style.display = "none";
nextBtn.style.display = "inline";
// img.style.margin = "auto";
function next() {
  if (imageShow == 0) {
    img.src = imageList[1];
    imageShow += 1;
    previousBtn.style.display = "inline";
  } else if (imageShow == 1) {
    img.src = imageList[2];
    previousBtn.style.display = "inline";
    imageShow += 1;
  } else if (imageShow == 2) {
    img.src = imageList[3];
    nextBtn.style.display = "none";
    imageShow += 1;
  } else if (imageShow == 3) {
    img.src = imageList[4];
  }
}
function previous() {
  if (imageShow == 1) {
    img.src = imageList[0];
    previousBtn.style.display = "none";
  } else if (imageShow == 2) {
    img.src = imageList[1];
    imageShow -= 1;
    nextBtn.style.display = "inline";
  } else if (imageShow == 3) {
    img.src = imageList[2];
    imageShow -= 1;
    nextBtn.style.display = "inline";
  } else if (imageShow == 4) {
    img.src = imageList[3];
    imageShow -= 1;
    nextBtn.style.display = "inline";
  }
}
