export default function scroll() {
    const { height: cardHeight } = document
    .querySelector(".js-articles")
    .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight *2,
  behavior: "smooth",
});
}


