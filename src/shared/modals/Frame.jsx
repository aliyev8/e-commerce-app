import { useSelector } from "react-redux";

function Frame() {
  const { src } = useSelector((state) => state.modalSlice);

  return (
    <div className="frame">
      {src ? (
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${src}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      ) : (
        "...loading"
      )}
    </div>
  );
}

export default Frame;
