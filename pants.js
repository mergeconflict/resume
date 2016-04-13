(function() {

  function pants(a) {
    a = a.replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018");      // opening singles
    a = a.replace(/'/g, "\u2019");                             // closing singles & apostrophes
    a = a.replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c"); // opening doubles
    a = a.replace(/"/g, "\u201d");                             // closing doubles
    a = a.replace(/---/g, "\u2014");
    a = a.replace(/--/g, "\u2013");                            // em-dashes
/*
    a = a.replace(/ffi/g, "\ufb03");
    a = a.replace(/ffl/g, "\ufb04");
    a = a.replace(/ff/g, "\ufb00");
    a = a.replace(/fi/g, "\ufb01");
    a = a.replace(/fl/g, "\ufb02");
*/
    a = a.replace(/\. ([A-Z])/g, ".\u2002$1");
    return a
  };

  function recurse(n, f) {
    $(n).contents().each(function() {
      if (this.nodeType == Node.TEXT_NODE) {
        this.nodeValue = f(this.nodeValue);
      }
      else {
        recurse(this, f);
      }
    });
  }

  $(document).ready(function() {
    recurse(document, pants);
  });

})();

Typekit.load();
