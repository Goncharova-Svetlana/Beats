$(".form").submit(e => {
  e.preventDefault();

  // $.ajax({
  //   url: "https://webdev-api.loftschool.com/sendmail",
  //   method: "post",
  //   data: {
  //     name: "",
  //     phone: "",

  //   }
  // });

  $.fancybox.open({
    src: "#modal",
    type: "inline"
  })
});

$(".app-submit-btn").click(e => {
  e.preventDefault();

  $.fancybox.close();
});