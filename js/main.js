

// Age gate custom select

$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
      id      = $(this).attr("id"),
      name    = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});



// Winners select

$(document).on("change", ".boxselect", function () {
  $this = $(this);
  $(".box").hide();
  $("." + $this.val()).show();
  console.log("showing " + $this.val() + " boxes");
});


// Show and hide winner select



$("#select_city").change(function(){
  if($(this).val() == 'beograd'){

    $("#select_object").show();
  }else{
    $("#select_object").hide();
  }
});






// Nav

$('.mob-btn').click(function() {
  $('.toggle-menu').toggleClass('active');
  $('.nav').toggleClass('nav_open');
})


wow = new WOW({
  boxClass: 'wow', // default
  animateClass: 'animated', // default
  offset: 100, // default
  mobile: false, // default
  live: true // default
})

wow.init();

$(".fancybox").fancybox();





