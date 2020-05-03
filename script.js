var date= (moment().format('dddd, MMMM Do YYYY'));
		$("#currentDay").text(date);
		var currentHour=moment().format('HH');   

		var timeArray=[9,10,11,12,13,14,15,16,17]; 

  for(var i=0;i<timeArray.length;i++){

  var div1= $("<div>");
  //<div></div>
  div1.attr("class", "input-group input-group-lg")
  //<div class="input-group input-group-lg"></div>
   var div2= $("<div>");
  //<div></div>
  div2.attr("class","input-group-prepend");
  //<div class="input-group-prepend"></div>
  var span =$("<span>");
  //<span></span>
  span.attr("class","input-group-text")
  //<span class="input-group-text"></span>
  span.attr("id","inputGroup-sizing-lg");
  //<span class="input-group-text" id="inputGroup-sizing-lg"></span>
  if(timeArray[i] < 12){
    span.text(timeArray[i] + "AM")
  }
  else{
    span.text(timeArray[i] + "PM")
  }
  if(timeArray[i] > 12){
    span.text(timeArray[i]-12 + "PM")
  }

  var input=$("<input>");
  input.attr("type","text");
  if(currentHour== timeArray[i]){
  	input.attr("class","form-control present");
  }
  if(currentHour-timeArray[i]>0){
  	input.attr("class","form-control past");
  }
  if(currentHour-timeArray[i]<0){
  	input.attr("class","form-control future");
  }
  
	input.attr("aria-label","Sizing example input");
	input.attr("aria-describedby","inputGroup-sizing-lg")
	input.attr("id",timeArray[i]);
  var btn =$("<button>");
  btn.attr("class","btn btn-outline-secondary");
  btn.attr("type","button");
  btn.attr("id","saveBtn"+timeArray[i]);
  btn.text("Save");

  div2.append(span)
  div1.append(div2);
  div1.append(input);
  div1.append(btn);

  $(".container").append(div1)
  }
  //create for loops to interate through each row
  function saveInput9(event){
    event.preventDefault();
    var savedInput = $(this).attr("id")
    var userInput = $("#9").val().trim();
    localStorage.setItem("9", userInput)
    renderSavedItems9();
  }
  function renderSavedItems9(){
    var output = $("#9");
    var savedInput = $(this).attr("id")
    var savedInput =localStorage.getItem("9")

    output.val(savedInput)
  }
  $("button").on("click", saveInput9)
  renderSavedItems9();

  function saveInput10(event){
    event.preventDefault();
    var savedInput = $(this).attr("id")
    var userInput = $("#10").val().trim();
    localStorage.setItem("10", userInput)
    renderSavedItems10();
  }
  function renderSavedItems10(){
    var output = $("#10");
    var savedInput = $(this).attr("id")
    var savedInput =localStorage.getItem("10")

    output.val(savedInput)
  }
  $("button").on("click", saveInput10)
  renderSavedItems10();

  function saveInput11(event){
    event.preventDefault();
    var savedInput = $(this).attr("id")
    var userInput = $("#11").val().trim();
    localStorage.setItem("11", userInput)
    renderSavedItems11();
  }
  function renderSavedItems11(){
    var output = $("#11");
    var savedInput = $(this).attr("id")
    var savedInput =localStorage.getItem("11")

    output.val(savedInput)
  }
  $("button").on("click", saveInput11)
  renderSavedItems11();

  function saveInput12(event){
    event.preventDefault();
    var savedInput = $(this).attr("id")
    var userInput = $("#12").val().trim();
    localStorage.setItem("12", userInput)
    renderSavedItems12();
  }
  function renderSavedItems12(){
    var output = $("#12");
    var savedInput = $(this).attr("id")
    var savedInput =localStorage.getItem("12")

    output.val(savedInput)
  }
  $("button").on("click", saveInput12)
  renderSavedItems12();

  function saveInput13(event){
    event.preventDefault();
    var savedInput = $(this).attr("id")
    var userInput = $("#13").val().trim();
    localStorage.setItem("13", userInput)
    renderSavedItems13();
  }
  function renderSavedItems13(){
    var output = $("#13");
    var savedInput = $(this).attr("id")
    var savedInput =localStorage.getItem("13")

    output.val(savedInput)
  }
  $("button").on("click", saveInput13)
  renderSavedItems13();

  function saveInput14(event){
    event.preventDefault();
    var savedInput = $(this).attr("id")
    var userInput = $("#14").val().trim();
    localStorage.setItem("14", userInput)
    renderSavedItems14();
  }
  function renderSavedItems14(){
    var output = $("#14");
    var savedInput = $(this).attr("id")
    var savedInput =localStorage.getItem("14")

    output.val(savedInput)
  }
  $("button").on("click", saveInput14)
  renderSavedItems14();

  function saveInput15(event){
    event.preventDefault();
    var savedInput = $(this).attr("id")
    var userInput = $("#15").val().trim();
    localStorage.setItem("15", userInput)
    renderSavedItems15();
  }
  function renderSavedItems15(){
    var output = $("#15");
    var savedInput = $(this).attr("id")
    var savedInput =localStorage.getItem("15")

    output.val(savedInput)
  }
  $("button").on("click", saveInput15)
  renderSavedItems15();

  function saveInput16(event){
    event.preventDefault();
    var savedInput = $(this).attr("id")
    var userInput = $("#16").val().trim();
    localStorage.setItem("16", userInput)
    renderSavedItems16();
  }
  function renderSavedItems16(){
    var output = $("#16");
    var savedInput = $(this).attr("id")
    var savedInput =localStorage.getItem("16")

    output.val(savedInput)
  }
  $("button").on("click", saveInput16)
  renderSavedItems16();

  function saveInput17(event){
    event.preventDefault();
    var savedInput = $(this).attr("id")
    var userInput = $("#17").val().trim();
    localStorage.setItem("17", userInput)
    renderSavedItems17();
  }
  function renderSavedItems17(){
    var output = $("#17");
    var savedInput = $(this).attr("id")
    var savedInput =localStorage.getItem("17")

    output.val(savedInput)
  }
  $("button").on("click", saveInput17)
  renderSavedItems17();