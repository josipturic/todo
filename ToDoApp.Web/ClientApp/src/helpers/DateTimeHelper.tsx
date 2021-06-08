import React from "react";

export const parseDate = (date: string): string => {
  console.log(date);
  var newDate = new Date(date).toLocaleDateString();
  var parseDate = newDate.split("/");
  var parsedDate = parseDate[1] + "." + parseDate[0] + "." + parseDate[2] + ".";
  return parsedDate;
};
