import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const item = state.item;

  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
      <h3>{item.title}</h3>
      <p>Uploaded by {item.username}</p>
      {item.media_type.includes('video') ? (
        <video src={item.filename} controls />
      ) : (
        <img src={item.filename} alt={item.title} />
      )}
      <p>{item.description}</p>
    </>
  );
};

export default Single;
