import FollowButton from "./FollowButton.js";
import LikeButton from "./LikeButton.js";

const postImage = "https://png.pngtree.com/thumb_back/fw800/background/20230613/pngtree-illustration-of-mountains-vector-image_3357198.jpg";
const userImage = "https://diegofarias.online/diegopicture1.jpg";

export default function Post() {
  return (
    <div className="post">
      <div className="user-info">
        <img id="profile-img" src={userImage} alt="Profile Image" />
        <p>Diego Farias</p>
        <FollowButton />
      </div>
      <img id="post-img" src={postImage} alt="Post Image" />
      <LikeButton />
    </div>
  );
}
