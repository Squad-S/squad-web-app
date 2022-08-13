import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Layout } from "../../components";
import "./index.css";
const inviteImg = "/asset/img/inviteImg.jpg";

const InviteMemberOrganization = () => {
  const [email, setEmail] = useState({
    email1: "",
    email2: "",
    email3: "",
  });
  //const { data, status} = useSelector((state) => state.inviteMemberOrganization);
  const dispatch = useDispatch();
  const handleSubmtClicked = (e) => {
    e.preventDefault();
    // email.forEach((element, index) => {
    //   if (element !== null) {
    //     dispatch(inviteMemberOrganization(element));
    //     storeEmail(null, index);
    //   }
    // })

    console.log(email);
  };

  const storeEmail = (e) => {
    console.log(e);
    setEmail([...email, (e.target.name = e.target.value)]);
    // setEmail(existingEmails => {
    //   return [
    //     ...existingEmails.slice(0, index),
    //     existingEmails[index] = valueEmail,
    //     ...existingEmails.slice(index+1),
    //   ]
    // })
  };

  return (
    <Layout>
      <div className="invite">
        <div>
          <div>
            <h2>Admin</h2>
          </div>
          <div className="assignee">
            <h1>Users</h1>
            <button type="button">Invite members</button>
          </div>
        </div>
        <div className="inviteForm">
          <div>
            <img src={inviteImg} alt="invite in organization"></img>
          </div>
          <div>
            <div>
              <h1>There's a team behind every success</h1>
            </div>
            <div>
              <h4>Add team members to organization</h4>
            </div>
            <div>
              <form>
                <Form
                  type="email"
                  placeholder="Email Address"
                  value={email.email1}
                  name="email1"
                  onChange={storeEmail}
                />
                <p className="isMailValid">Crap</p>
                <Form
                  type="email"
                  placeholder="Email Address"
                  value={email.email2}
                  name="email2"
                  onChange={storeEmail}
                />
                <p className="isMailValid"></p>
                <Form
                  type="email"
                  placeholder="Email Address"
                  value={email.email3}
                  name="email3"
                  onChange={storeEmail}
                />
                <p className="isMailValid"></p>
                <Button
                  variant="regular"
                  sx={{
                    width: "90%",
                    backgroundColor: "RoyalBlue",
                    my: 4,
                    color: "white",
                  }}
                  type="submit"
                  onClick={handleSubmtClicked}
                >
                  Add team members
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InviteMemberOrganization;
