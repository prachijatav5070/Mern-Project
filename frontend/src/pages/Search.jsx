import { useState } from "react";
import axios from "axios";

// bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Search = () => {
  const [whe, setWhere] = useState("");
  const [mydata, setMydata] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form refresh
    let api = "http://localhost:7000/coustumer/datasearch";
    axios.post(api, { where: whe }).then((res) => {
      setMydata(res.data); //ye jo data aya hai backend se usko usestate se setmydata me save kar liya
      // console.log(res.data);
    });
  };

  // map through the data to generate table rows
  const ans = mydata.map((key) => {
    return (
      <>
        <tr>
          <td>{key.where}</td>
          <td>{key.checkIn}</td>
          <td>{key.checkOut}</td>
          <td>{key.room}</td>
          <td>{key.guest}</td>
        </tr>
      </>
    );
  });

  return (
    <>
      <div className="SearchPage">
        <h1>This is the Search page</h1>
        <hr />
        <div className="search">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs="auto">
                <Form.Group controlId="searchInput">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    value={whe}
                    onChange={(e) => {
                      setWhere(e.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
        </div>
        <hr />
        <div className="search_table">
          <table>
            <tr>
              <th>WHERE</th>
              <th>CHECKIN</th>
              <th>CHECKOUT</th>
              <th>ROOM</th>
              <th>GUEST</th>
            </tr>
            {ans}
          </table>
        </div>
      </div>
    </>
  );
};

export default Search;