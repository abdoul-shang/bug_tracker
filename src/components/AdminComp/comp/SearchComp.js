import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";

const SearchComp = () => {
  const [searchTerm, setSearchTerm] = useState();
  return (
    <InputGroup className="mb-3" style={{ marginRight: "10px" }}>
      <FormControl
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <FormControl
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchComp;
