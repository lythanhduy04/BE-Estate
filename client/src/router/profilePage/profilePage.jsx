import "./profilePage.scss";
import List from "../../components/list/List";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ProfilePage() {
  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      //gửi yc đến api và xóa data ở local đi
      await apiRequest.post("/auth/logout");
      updateUser(null);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Infromation</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || "/noava.png"} alt="" />
            </span>
            <span>
              UserName: <b>{currentUser.name}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Log out</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Add new post</button>
          </div>
          <List />
          <div className="title">
            <h1>Save List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
