import React from "react";
import Activity from "./Ftg";
import Avatar from "./Logo";

function Card1() {
  return (
    <div className='card-1 p-3'>
      <h4>Batch Name | PHY_B1</h4>
      <div className='icon-top-right d-flex flex-col'>
        <i className='fas fa-edit'></i>
        <i className='fas fa-user-plus'></i>
      </div>
      <div className='inner-card-1'>
        <Avatar
          imgUrl={
            "https://www.google.com/search?q=man+in+black+hood&rlz=1C1RLNS_enIN816IN816&sxsrf=ALeKk01sQdw1vRQF_kezd4-sNjr9ynAOZw:1623066833117&tbm=isch&source=iu&ictx=1&fir=Y-XQVoSguhuMCM%252CB5gyEh2uhXSsUM%252C_&vet=1&usg=AI4_-kRvyjnmmLk0-I_Jt64b7sBwG-JnFg&sa=X&ved=2ahUKEwi38aKQu4XxAhVRfisKHQFQDRgQ9QF6BAgMEAE#imgrc=Y-XQVoSguhuMCM"
          }
          name={"Abhishek Gupta"}
        />
        <Avatar
          imgUrl={
            "https://th.bing.com/th/id/Rfd5a137d4cc43657449836c511c422e1?rik=xs4NJnZD7SrL9w&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_24787.png&ehk=XT7ycIEO1QBstZHkYYA%2fmHm7bSjaBM1nSo61Bl%2bnJSs%3d&risl=&pid=ImgRaw"
          }
          name={"125 Students"}
        />
        <Activity />
      </div>
    </div>
  );
}

export default Card1;
