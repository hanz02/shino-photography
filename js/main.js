// *Animate Smooth Scroll
$("#view-work").click(() => {
  const images = $("#images").position().top;
  $("html, body").animate(
    {
      scrollTop: images,
    },
    900
  );
});

//~ return position object of the first element in the wrapped set array
console.log($(".caption").position());
