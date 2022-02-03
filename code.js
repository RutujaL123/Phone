setScreen("1stSCREEN");
onEvent("image1", "click", function( ) {
   setScreen("PhoneUnlock");
  hideElement("label1");
});

onEvent("button1", "click", function( ) {
  if (getText("text_input1") == "Rutuja:)") {
    setScreen("mainscreen");
  } else {
    showElement("label1");
  }
});

//linking the buttons to links
onEvent("SpaceQuizbutton", "click", function( ) {
  open("https://studio.code.org/projects/applab/BR5pygD2JNmoYZb6RYeCm0-yw9YZW7gh6IXVy32mopc");
});

onEvent("button10", "click", function( ) {
  open("https://studio.code.org/projects/applab/DPLukyLIO4M13wWPAzZVUkTMSwMIMOTjWASMIFyV6lQ");
});

onEvent("button4", "click", function( ) {
  open("https://studio.code.org/projects/applab/duq5UGU-M2GcRD2tpuUWjAolLOC6PQ8j6359IIu1vFo");
});

onEvent("button5", "click", function( ) {
  open("https://studio.code.org/projects/applab/YZI9IOpba54f-4PWp2xoks-mGD5bZwoHEBh4iBUOTYM");
});

onEvent("button8", "click", function( ) {
  open("https://studio.code.org/projects/gamelab/nTiwcPT7v2pCUTSK2Bmj4SFAne2m9fnFXckuBChlPno");
});

onEvent("Miuzikbutton", "click", function( ) {
  open("https://studio.code.org/projects/applab/xaW68Fg9gK5ack48UQOZZyq08o64-scMoCf0tIAIcAA");
});

onEvent("button9", "click", function( ) {
  open("https://studio.code.org/projects/gamelab/59pxTfLsavejjoWKwzzbcmkoi42uZsMZjZsYKb9rDkQ");
});

onEvent("Numberpatternbutton", "click", function( ) {
  open("https://studio.code.org/projects/applab/UniHEcc1vYEWlp31tF3kPpM9YbZJEV-T7nhXKx9wDJU");
});

onEvent("button11", "click", function( ) {
  open("https://studio.code.org/projects/applab/HT_8NCjAYLFgokd5dm5K32SnM0YalsI0f3Cj68jddug");
});
