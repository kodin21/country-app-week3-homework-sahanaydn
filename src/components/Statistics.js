import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Statistics() {
  const data = [];
  const tempLanguages = [];
  const tempCount = [];
  const [languages, setlanguages] = useState([]);
  const [count, setcount] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      res.data.forEach((element) => {
        element.languages.forEach((language) => {
          data.push(language.name);
        });
      });
      const sortData = data.sort();
      var counter = 1;

      for (let index = 0; index < data.length; index++) {
        if (sortData[index] !== sortData[index + 1]) {
          tempLanguages.push(sortData[index]);
          tempCount.push(counter);
          counter = 0;
        } else {
          counter = counter + 1;
        }
      }

      console.log(languages);
      let gecici = [languages, count];
      console.log(gecici);
      setlanguages(tempLanguages);
      setcount(tempCount);
    });
  });

  return (
    <div className="container">
      <ol class="list-group list-group-numbered">
        {languages.map((k, index) => {
          return (
            <li class="list-group-item d-flex justify-content-between align-items-start mt-4">
              <div class="ms-2 me-auto">
                <div class="fw-bold">{k} </div>
               
              </div>
              <span class="badge bg-primary rounded-pill">
                {count[index] + 1} countries use this language
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
