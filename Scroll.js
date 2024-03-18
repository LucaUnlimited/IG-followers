function scrollAndCheck() {
  window.scrollTo(0, document.body.scrollHeight);
  setTimeout(() => {
    scrollAndCheck();
  }, 1);
}
scrollAndCheck();
