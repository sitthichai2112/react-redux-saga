import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

const UserList = ({ users, onDeleteUser }) => {
  return (
    <ListGroup>
      {users
        .sort((a, b) => {
          if (a.firstName > b.firstName) {
            return 1;
          } else if (a.firstName < b.firstName) {
            return -1;
          } else if (a.lastName > b.lastName) {
            return 1;
          } else if (a.lastName < b.lastName) {
            return -1;
          } else {
            return 0;
          }
        })
        .map((item, idx) => (
          <ListGroupItem key={idx}>
            <section style={{ display: "flex" }}>
              <div style={{ flexGrow: 1, margin: "0 auto" }}>
                {item.firstName} {item.lastName}
              </div>
              <div>
                <Button outline color="danger" onClick={() => onDeleteUser(item.id)}>
                  Delete
                </Button>
              </div>
            </section>
          </ListGroupItem>
        ))}
    </ListGroup>
  );
};

export default UserList;
