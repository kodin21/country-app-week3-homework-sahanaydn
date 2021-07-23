import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import axios from "axios";

export default function CountryInfo() {
  const [countryData, setcountryData] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      setcountryData(res.data);
      console.log(countryData);
    });
  }, [countryData]);
  return (
    <div className="container">
      <div className="row hidden-md-up">
        {countryData.map((temp) => {
          return (
            <div className="col-md-4 mt-4" key={temp.name}>
              <Card>
                <CardImg top width="" src={temp.flag} alt="Card image cap" />
                <CardBody>
                  <CardTitle tag="h5">{temp.name}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {temp.capital}
                  </CardSubtitle>
                  <CardText>{temp.languages[0].name}</CardText>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
