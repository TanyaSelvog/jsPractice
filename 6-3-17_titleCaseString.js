function titleCase(str) {
     return str.replace(/\w\S*/g, function(titleCase) {
        return titleCase.charAt(0).toUpperCase() + titleCase.substr(1).toLowerCase();
    });
  }
titleCase("I'm a little tea pot");
