(function() {

  function pants(a) {
    a = a.replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018");      // opening single quotes
    a = a.replace(/'/g, "\u2019");                             // closing single quotes & apostrophes
    a = a.replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201c"); // opening double quotes
    a = a.replace(/"/g, "\u201d");                             // closing double quotes
    a = a.replace(/---/g, "\u2014");                           // em-dashes
    a = a.replace(/--/g, "\u2013");                            // en-dashes
    a = a.replace(/\. ([A-Z])/g, ".\u2002$1");                 // full stops
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
