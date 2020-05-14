$(document).ready(function () {

  // Step show event
  $("#smartwizard").on("showStep", function (e, anchorObject, stepNumber, stepDirection, stepPosition) {
    //alert("You are on step "+stepNumber+" now");
    if (stepPosition === 'first') {
      $("#prev-btn").addClass('disabled');
    } else if (stepPosition === 'final') {
      $("#next-btn").addClass('disabled');
    } else {
      $("#prev-btn").removeClass('disabled');
      $("#next-btn").removeClass('disabled');
    }
  });

  // Toolbar extra buttons
  var btnFinish = $('<button></button>').text('Finish')
    .addClass('btn btn-info')
    .on('click', function () {
      alert('Successfully Completed');
      $('#smartwizard').smartWizard("reset");
      $('.organs').removeClass('back');
    });
  var btnCancel = $('<button></button>').text('Cancel')
    .addClass('btn btn-danger')
    .on('click', function () {
      $('#smartwizard').smartWizard("reset");
      $('.organs').removeClass('back')
    });

  // Please note enabling option "showStepURLhash" will make navigation conflict for multiple wizard in a page.
  // so that option is disabling => showStepURLhash: false

  // Smart Wizard 1
  $('#smartwizard').smartWizard({
    selected: 0,
    theme: 'arrows',
    transitionEffect: 'fade',
    showStepURLhash: false,
    toolbarSettings: {
      toolbarPosition: 'both',
      toolbarExtraButtons: [btnFinish, btnCancel]
    }
  });


});

//Get and Set the value
var organInt = '';
$(".internalOrgans .organs").click(function () {
  organInt = $(this).text();
  $(this).addClass('back');
  var organ = $(".show1");
  organ.html(organInt);
});

var organLimb = '';
$(".limbs .organs").click(function () {
  organLimb = $(this).text();
  $(this).addClass('back');
  var limb = $(".show2");
  limb.html(organLimb);
});

var bloodgroup = '';
$('#formSubmit').click(function () {
  bloodgroup = $("#bloodSelect option:selected").text();
  var blood = $(".show3");
  blood.html(bloodgroup);

});
var gender = '';
$('#formSubmit').click(function () {
  gender = $("#genderSelect option:selected").text();
  var genderShow = $(".show4");
  genderShow.html(gender);
});

var ageVlaues = '';
$('#formSubmit').click(function () {
  ageVlaues = $('#age').val();
  var ages = $(".show5");
  ages.html(ageVlaues);
});
var buildType = '';
$('#formSubmit').click(function () {
  buildType = $("#buildTypeSelect option:selected").text();
  var buildShow = $(".show6");
  buildShow.html(buildType);
});
var skinColor = '';
$('#formSubmit').click(function () {
  skinColor = $("#skintoneSelect option:selected").text();
  var toneShow = $(".show7");
  toneShow.html(skinColor);
});
var frecklesVlaues = '';
$('#formSubmit').click(function () {
  frecklesVlaues = $('#frecklesValue').val();
  var freckles = $(".show8");
  freckles.html(frecklesVlaues);

});

var hairVlaues = '';
$('#formSubmit').click(function () {
  hairVlaues = $('#hairValue').val();
  var hair = $(".show9");
  hair.html(hairVlaues);

});
$('#formSubmit').click(function () {

  alert("Successfully submitted")

});