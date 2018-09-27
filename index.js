onePageScroll(".main", {
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", 
                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 500,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: false        // You can fallback to normal page scroll by defining the width of the browser in which
                                     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever 
                                     // the browser's width is less than 600, the fallback will kick in.
 });

 function initCircles(){
    var s = Math.random()*15+5;
    var circle1 = {
      height: s,
      width: s,
      ypos: Math.random()*window.screen.height,
      xpos: Math.random()*window.screen.width,
      yvel: Math.random()*1+0.5
    }
    s = Math.random()*15+10;
    var circle2 = {
      height: s,
      width: s,
      ypos: Math.random()*window.screen.height,
      xpos: Math.random()*window.screen.width,
      yvel: Math.random()*1+0.5
    }
    s = Math.random()*15+10;
    var circle3 = {
      height: s,
      width: s,
      ypos: Math.random()*window.screen.height,
      xpos: Math.random()*window.screen.width,
      yvel: Math.random()*1+0.5
    }
    s = Math.random()*15+10;
    var circle4 = {
      height: s,
      width: s,
      ypos: Math.random()*window.screen.height,
      xpos: Math.random()*window.screen.width,
      yvel: Math.random()*1+0.5
    }
    s = Math.random()*15+10;
    var circle5 = {
      height: s,
      width: s,
      ypos: Math.random()*window.screen.height,
      xpos: Math.random()*window.screen.width,
      yvel: Math.random()*1+0.5
    }
    s = Math.random()*15+10;
    var circle6 = {
      height: s,
      width: s,
      ypos: Math.random()*window.screen.height,
      xpos: Math.random()*window.screen.width,
      yvel: Math.random()*1+0.5
    }
    var circles = [circle1, circle2, circle3, circle4, circle5, circle6];
    for (i = 1; i < 7; i++){
      $("#circle".concat(String(i))).css("height", String(circles[i-1].height).concat("px"));
      $("#circle".concat(String(i))).css("width", String(circles[i-1].width).concat("px"));
      $("#circle".concat(String(i))).css("bottom", String(circles[i-1].ypos).concat("px"));
      $("#circle".concat(String(i))).css("left", String(circles[i-1].xpos).concat("px"));
    }
  
    var animate = setInterval(function(){
      for (i = 0; i < 6; i++){
        circles[i].ypos += circles[i].yvel;
        if (circles[i].ypos >= window.screen.height){
          circles[i].ypos = 0+40;
          circles[i].xpos= Math.random()*window.screen.width;
          circles[i].yvel= Math.random()*1+0.5;
        } else if (circles[i].ypos <= 0){
          circles[i].ypos= window.screen.height-40;
        }
        $("#circle".concat(String(i+1))).css("bottom", String(circles[i].ypos).concat("px"));
        $("#circle".concat(String(i+1))).css("left", String(circles[i].xpos).concat("px"));
      }
    }, 10);
  }