import React, { useState } from 'react'
import 'tailwindcss/tailwind.css'
import { Link } from 'react-router-dom'

const ProfileCard = () => (
  <div className="p-6 bg-white rounded-lg shadow-md" style={{ backgroundImage: "url('trend.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}>
    <h2 className="text-xl font-bold mb-2" style={{color:'white'}}>Players Signed</h2>
   <Link to='https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.25+commit.b61c2a91.js'>
   <p className="text-gray-600" style={{color:'white'}}>S8ul_Mortal</p>
   </Link>
   <Link to='https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.25+commit.b61c2a91.js'>
   <p className="text-gray-600" style={{color:'white'}}>S8ul_Goldy</p>
   </Link>
   <Link to='https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.25+commit.b61c2a91.js'>
   <p className="text-gray-600" style={{color:'white'}}>S8ul_Regaltos</p>
   
   </Link>
  </div>
)

const Post = ({ username, imageSrc }) => {
  const [comments, setComments] = useState([])
  const [commentText, setCommentText] = useState('')

  const addComment = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText])
      setCommentText('')
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <p className="font-semibold">@{username}</p>
      <img
        src={imageSrc}
        alt="Post"
        className="w-full rounded-md my-4"
      />
      <p className="text-gray-700 mb-4">WELCOME!TO Community of Gamerz</p>
      <div className="comments mb-4">
        {comments.map((comment, index) => (
          <p key={index} className="text-gray-600">
            {comment}
          </p>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-full flex-grow mr-2"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button
          onClick={addComment}
          className="bg-red-500 text-white p-2 rounded-full"
        >
          Add Comment
        </button>
      </div>
    </div>
  )
}

const Feed = () => (
  <div className="flex-grow overflow-y-scroll h-full p-4 bg-gray-50 rounded-lg shadow-inner">
    <Post username="Soul Mortal" imageSrc="mortall.jpeg" />
    <Post username="Soul Regaltos" imageSrc="regaltoss.avif" />
    <Post username="Soul Goldy" imageSrc="goldy.webp" />
  </div>
)

const NewsColumn = () => (
  <div className="p-4 bg-white rounded-lg shadow-md mb-4" style={{ backgroundImage: "url('trend.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}>
    <h3 className="text-xl font-bold mb-2" style={{color:'white'}}>Trending</h3>
    <ul>
      <li className="text-gray-600 mb-2" style={{color:'white'}}>#hashtag1</li>
      <li className="text-gray-600 mb-2" style={{color:'white'}}>#hashtag2</li>
      <li className="text-gray-600 mb-2" style={{color:'white'}}>#hashtag3</li>
    </ul>
  </div>
)

const Advertisement = () => (
  <div className="p-16 bg-white rounded-lg shadow-md" style={{ backgroundImage: "url('vaload.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}>
    <h3 className="text-xl font-bold mb-2">AD</h3>
  </div>
)

const RightSide = () => (
  <div className="flex flex-col space-y-4">
    <NewsColumn />
    <Advertisement />
  </div>
)

const Popup = ({ show, content, onClose }) => (
  <div
    className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
      show ? 'block' : 'hidden'
    }`}
  >
    <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 md:w-1/2 lg:w-1/3 relative">
      <span
        className="absolute top-4 right-4 text-gray-600 text-2xl cursor-pointer"
        onClick={onClose}
      >
        &times;
      </span>
      {content}
    </div>
  </div>
)

const HomePageOrg = () => {
  const [popupContent, setPopupContent] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const handleGameClick = (game) => {
    let content = ''
    switch (game) {
      case 'valorant':
        content = (
          <>
            <h2 className="text-2xl font-bold">Valorant</h2>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Valorant"
              className="w-full rounded-md my-4"
            />
            <p>Description about Valorant.</p>
          </>
        )
        break
      case 'bgmi':
        content = (
          <>
            <h2 className="text-2xl font-bold">BGMI</h2>
            <img
              src="https://via.placeholder.com/600x400"
              alt="BGMI"
              className="w-full rounded-md my-4"
            />
            <p>Description about BGMI.</p>
          </>
        )
        break
      case 'cod':
        content = (
          <>
            <h2 className="text-2xl font-bold">COD</h2>
            <img
              src="https://via.placeholder.com/600x400"
              alt="COD"
              className="w-full rounded-md my-4"
            />
            <p>Description about COD.</p>
          </>
        )
        break
      default:
        break
    }
    setPopupContent(content)
    setShowPopup(true)
  }

  const closePopup = () => {
    setShowPopup(false)
    setPopupContent('')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100" style={{ backgroundImage: "url('homebggamerr.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* <Navbar /> */}
      <div className="flex flex-col md:flex-row container mx-auto mt-4 gap-4 flex-grow">
        <div className="flex flex-col space-y-4 w-full md:w-1/4">
          <ProfileCard />
        </div>
        <div className="flex flex-col space-y-4 w-full md:w-1/2">
          <Feed />
        </div>
        <div className="flex flex-col space-y-4 w-full md:w-1/4">
          <RightSide />
        </div>
      </div>
      <Popup show={showPopup} content={popupContent} onClose={closePopup} />
    </div>
  )
}

export default HomePageOrg