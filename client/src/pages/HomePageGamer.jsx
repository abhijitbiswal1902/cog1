import React, { useState } from 'react';

const HomePageGamer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [gameContent, setGameContent] = useState('');

  const handleComment = (postId) => {
    const commentInput = document.querySelector(`#comment-input-${postId}`);
    const commentText = commentInput.value.trim();

    if (commentText) {
      const commentsSection = document.querySelector(`#comments-${postId}`);
      const newComment = document.createElement('p');
      newComment.textContent = commentText;
      commentsSection.appendChild(newComment);
      commentInput.value = '';
    }
  };

  const showGamePopup = (game) => {
    let content = '';
    switch (game) {
      case 'valorant':
        content = (
          <div className="text-center">
            <h2 className="text-2xl mb-4">Valorant Stats</h2>
            <img
              src="valotest.jpg"
              alt="Valorant"
              className="mx-auto mb-4 rounded-lg"
            />
            {/* <p>Description about Valorant.</p> */}
          </div>
        );
        break;
      case 'bgmi':
        content = (
          <div className="text-center">
            <h2 className="text-2xl mb-4">BGMI Stats</h2>
            <img
              src="bgmitest.jpg"
              alt="BGMI"
              className="mx-auto mb-4 rounded-lg"
            />
            <p>Description about BGMI.</p>
          </div>
        );
        break;
      case 'cod':
        content = (
          <div className="text-center">
            <h2 className="text-2xl mb-4">COD Stats</h2>
            <img
           
              src="codtest.jpg"
              alt="COD"
              className="mx-auto mb-4 rounded-lg"
            />
            
            <p>Description about COD.</p>
          </div>
        );
        break;
      default:
        content = '';
    }
    setGameContent(content);
    setShowPopup(true);
  };

  const openChatWindow = () => {
    var newWindow = window.open("http://127.0.0.1:8000/", "Chat Window", "width=400,height=600");
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen overflow-hidden"  style={{ backgroundImage: "url('homebggamerr.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} >

      <div className="flex flex-col lg:flex-row gap-4 p-4" >
        <div className="flex-shrink-0 bg-white p-4 rounded-lg shadow-lg w-full lg:w-1/4 max-h-[225px] float-right" style={{ backgroundImage: "url('gc.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <h2 className="text-xl mb-4">Abhijit Biswal</h2>
          <p>
            <a
              href="#"
              className="text-blue-500 hover:underline"
              onClick={() => showGamePopup('valorant')}
            >
              G1 - Valorant
            </a>
          </p>
          <p>Tier - Gold</p>
          <p>
            <a
              href="#"
              className="text-blue-500 hover:underline"
              onClick={() => showGamePopup('bgmi')}
            >
              G2 - BGMI
            </a>
          </p>
          <p>Tier - Ace</p>
          <p>
            <a
              href="#"
              className="text-blue-500 hover:underline"
              onClick={() => showGamePopup('cod')}
            >
              G1 - COD
            </a>
          </p>
          <p>Tier - Rookie</p>
        </div>

        <div  className="flex-grow bg-white p-4 rounded-lg mb-4 shadow-lg overflow-y-scroll h-96 lg:h-auto max-w-[600px]">
          {[1].map((id) => (
            <div key={id} className="mb-6">
              <p>S8ul_Mortal</p>
              <img
                src="mortalach.jpeg"
                alt="Post"
                className="w-full rounded-lg mb-4"
              />
              <p>New Achievment Unlocked Let's Goooo</p>
              <div id={`comments-${id}`} className="mb-4">
                <p>@s8ul_goldy:Super Proud of you </p>
                <p>@8bit_Thug:Long way to go</p>
              </div>
              <input
                type="text"
                id={`comment-input-${id}`}
                className="w-full p-2 border border-gray-300 rounded-full mb-2 focus:outline-none focus:border-orange-500"
                placeholder="Add a comment..."
              />
              <button
                className="w-full bg-orange-500 text-white p-2 rounded-full hover:bg-orange-400"
                onClick={() => handleComment(id)}
              >
                Add Comment
              </button>
            </div>
            
            
          ))}
          {[1].map((id) => (
            <div key={id} className="mb-6">
              <p>S8ul_Regaltos</p>
              <img
                src="rega.avif"
                alt="Post"
                className="w-full rounded-lg mb-4"
              />
              <p>New Achievment Unlocked Let's Goooo</p>
              <div id={`comments-${id}`} className="mb-4">
                <p>@s8ul_goldy:Super Pround of you </p>
                <p>@8bit_Thug:Long way to go</p>
              </div>
              <input
                type="text"
                id={`comment-input-${id}`}
                className="w-full p-2 border border-gray-300 rounded-full mb-2 focus:outline-none focus:border-orange-500"
                placeholder="Add a comment..."
              />
              <button
                className="w-full bg-orange-500 text-white p-2 rounded-full hover:bg-orange-400"
                onClick={() => handleComment(id)}
              >
                Add Comment
              </button>
            </div>
            
            
          ))},
          {[1].map((id) => (
            <div key={id} className="mb-6">
              <p>GodL_Kronten</p>
              <img
                src="kronten.jpeg"
                alt="Post"
                className="w-full rounded-lg mb-4"
              />
              <p>Coming Live on Youtube tonight at 8 </p>
              <div id={`comments-${id}`} className="mb-4">
                <p>@s8ul_goldy:Excited </p>
                <p>@8bit_Thug:Will join the stream</p>
              </div>
              <input
                type="text"
                id={`comment-input-${id}`}
                className="w-full p-2 border border-gray-300 rounded-full mb-2 focus:outline-none focus:border-orange-500"
                placeholder="Add a comment..."
              />
              <button
                className="w-full bg-orange-500 text-white p-2 rounded-full hover:bg-orange-400"
                onClick={() => handleComment(id)}
              >
                Add Comment
              </button>
            </div>
            
            
          ))}
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow-lg" style={{ backgroundImage: "url('trend.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h3 className="text-lg mb-4" style={{color:'white'}}>Trending</h3>
            <ul className="space-y-2" style={{color:'white'}} >
              <li>#valorant</li>
              <li>#bgminewmap</li>
              <li>#gaming</li>
              <li>#CallofDuty</li>
              <li>#Fortnight</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg" style={{ backgroundImage: "url('vaload.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            <h3 className="text-lg mb-4">SPONSORED</h3>
            <p style={{color:'white'}} >Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games, for Windows. Teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020.</p>
          </div>
        </div>
      </div>

      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="text-gray-600 hover:text-gray-800 cursor-pointer text-2xl float-right"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </span>
            <div>{gameContent}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePageGamer;
