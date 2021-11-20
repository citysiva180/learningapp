import React, { Component } from "react";
import CountriesData from "../../countries.json";
import { Table } from "react-bootstrap";

class RenderingTables extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {};
  //   }
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <br />
        <h1>Rendering a JSON Data into a Table in React</h1>
        <br />
        <br />
        <br />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Country Name</th>
              <th>Capital</th>
              <th>Airport Code</th>
              <th>Currency</th>
              <th>Region</th>
              <th>Emoji</th>
            </tr>
          </thead>
          <tbody>
            {CountriesData.map((countryData, index) => {
              return (
                <tr key={countryData.id}>
                  <td>{countryData.id}</td>
                  <td>{countryData.name}</td>
                  <td>{countryData.capital}</td>
                  <td>{countryData.iso2}</td>
                  <td>{countryData.currency}</td>
                  <td>{countryData.region}</td>
                  <td>{countryData.emoji}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default RenderingTables;
