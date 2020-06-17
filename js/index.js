$("path").mouseup(function (e) {
  var tagname = $(this).attr("data-name");
  $.ajax({
    type: "GET",
    url:
      "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=CWB-5FC93907-783A-4AC3-8BC1-70D286425F47&locationName=" +
      tagname,
    success: function (data) {
      var thisdata = data;

      /* console.log(
          thisdata["records"]["locations"][0]["location"][0]["locationName"]
        );*/
      str =
        thisdata["records"]["locations"][0]["location"][0]["weatherElement"][7][
          "time"
        ][0]["elementValue"][0]["value"];
      int =
        thisdata["records"]["locations"][0]["location"][0]["weatherElement"][1][
          "time"
        ][0]["elementValue"][0]["value"];
      dex =
        thisdata["records"]["locations"][0]["location"][0]["weatherElement"][3][
          "time"
        ][0]["elementValue"][0]["value"];
      //$('#content').append(str);
      document.getElementById("citty").innerHTML = tagname;
      document.getElementById("weath12h0").innerHTML = "☂" + str + "%";
      document.getElementById("weath12h1").innerHTML = int;
      document.getElementById("weath12h3").innerHTML = dex + "&#176;";
    },
  });
});
