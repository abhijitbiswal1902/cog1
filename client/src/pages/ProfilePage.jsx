import React from 'react';
import './profilepagegamer.css'
import Header from '../components/Header';
// import Header from '../components/Header';

function ProfilePage() {
  return (
   
    <div  className="container mx-auto px-4">
        {/* <Header/> */}
        {/* <h1>testtt</h1> */}
      <div style={{ backgroundImage: "url('homebggamerr.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} className="content flex flex-wrap mt-[50px]"> 
      {/* Div me padding hataya aur content div ko thoda upar shift kiya */}
        <div className="profile-card w-full md:w-1/2 lg:w-1/3 px-4 mb-4 " style={{ backgroundImage: "url('pcbg.avif')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <img src='gc.jpeg' alt='Profile Image' className="mx-auto w-40 h-40 rounded-full mb-4"></img>
          <h2 className="text-center text-xl" style={{color:'white'}} >Abhijit Biswal</h2>
          <p style={{color:'white'}} className="text-center">Email: abhijitbiswalgamer@gmail.com</p>
          <p style={{color:'white'}} className="text-center">Bio: Gamer</p>
          <p style={{color:'white'}} className="text-center">DOB: 19 Feb 2003</p>
        </div>

        <div className="feed w-full md:w-1/2 lg:w-2/3 px-4 max-w-md"  >
          <div className="post mb-8" >
            <p>@abhijitbiswal</p>
            <img src="job.webp" alt="Post Image" className="mx-auto mb-3 w-full"/>
            <p>Trying out this thing for the first time</p>
            <br></br>
            <div className="comments">
              <p>@anany_khare:GG</p>
              <p>@aastha.kanaujia:You can do it</p>
            </div>
            <input type="text" className="comment-input w-full px-2 py-1 rounded border border-gray-300 mb-2" placeholder="Add a comment..." />
            <button className="add-comment-btn bg-blue-500 text-white px-4 py-2 rounded">Add Comment</button>
          </div>
          {/* Add more posts as needed */}
        </div>

        <div style={{ backgroundImage: "url('trend.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }} className="news-column w-full md:w-1/2 lg:w-1/3 px-4 max-w-xs">
          <h3 style={{color:'white'}} > PENDING AGREEMENTS</h3>
          <ul>
            <li style={{color:'white'}}>Req1</li>
            <li style={{color:'white'}}>Req2</li>
            <li style={{color:'white'}}>Req3</li>
            {/* Add more hashtags as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
