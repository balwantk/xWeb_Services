var xCheck = {
  forJavaScript:function(){
    if(/\bno-js\b/.test(document.getElementsByTagName("html")[0].className)) {
      document.getElementsByTagName("html")[0].className = document.getElementsByTagName("html")[0].className.replace(/\bno-js\b/, '');
    }
  }
};