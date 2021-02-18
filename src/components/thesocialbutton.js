import React from "react";

import "./DropAuth.css";
function TheSocialButton() {
  return (
    <div id="fixed-social">
      <div>
        <a href="#" className="fixed-facebook" target="_blank">
          <i className="fa fa-facebook"></i> <span>Facebook</span>
        </a>
      </div>
      <div>
        <a href="#" className="fixed-twitter" target="_blank">
          <i className="fa fa-twitter"></i> <span>Twitter</span>
        </a>
      </div>
      {/* <div>
        <a href="#" className="fixed-gplus" target="_blank">
          <i className="fa fa-google"></i> <span>Google+</span>
        </a>
      </div> */}
      <div>
        <a href="#" className="fixed-linkedin" target="_blank">
          <i className="fa fa-linkedin"></i> <span>LinkedIn</span>
        </a>
      </div>
      <div>
        <a href="#" className="fixed-instagrem" target="_blank">
          <i className="fa fa-instagram"></i> <span>Instagram</span>
        </a>
      </div>
      {/* <div>
        <a href="#" className="fixed-tumblr" target="_blank">
          <i className="fa fa-tumblr"></i> <span>Tumblr</span>
        </a>
      </div> */}
    </div>
  );
}
export default TheSocialButton;
