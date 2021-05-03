import { Rate } from "antd";
import React from "react";

export default function UserComment(props) {
  return (
    <div className="UserComment__item">
      <div className="UserComment__top d-flex justify-content-between">
        <div className="user d-flex">
          <img src={window.location.origin + "/Logo/download.jfif"} />
          <div style={{marginLeft:'10px'}}>
            <h5> Ngoc Thanhh</h5>
            <p>7 giờ trước</p>
          </div>
        </div>
        <div className="star">
          <p> 10 </p>
          <Rate allowHalf defaultValue={0} />
        </div>
      </div>
      <div className="UserComment__body">
        <p>
          Mình nhận xét phim hay, đáng xem, nếu các bạn đã xem và thích những
          phần trước, thì phần này cũng không làm các bạn thất vọng
        </p>
      </div>
      <div className="UserComment__bottom">
        <div>
          <img src={window.location.origin + "/Logo/like.png"} />
          <span> 0 Like</span>
        </div>
      </div>
    </div>
  );
}
