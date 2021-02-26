import React from "react";

import "./DropAuth.css";
function TheSocialButton() {
  return (
    <div id="fixed-social">
      <div>
        <a href="https://www.facebook.com/cetei.tiss/?ref=bookmarks" className="fixed-facebook" target="_blank" >
          <i className="fa fa-facebook"></i> <span>Facebook</span>
        </a>
      </div>
      <div>
        <a href="https://twitter.com/@cetei_tiss" className="fixed-twitter" target="_blank" >
          <i className="fa fa-twitter"></i> <span>Twitter</span>
        </a>
      </div>
      {/* <div>
        <a href="#" className="fixed-gplus" target="_blank">
          <i className="fa fa-google"></i> <span>Google+</span>
        </a>
      </div> */}
      <div>
        <a href="https://www.youtube.com/channel/UCHeg9vBiapABVkb6TTWBgYA" className="fixed-youtube" target="_blank" >
          <i className="fa fa-youtube"></i> <span>Youtube</span>
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/cetei_tiss/" className="fixed-instagrem" target="_blank" >
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
