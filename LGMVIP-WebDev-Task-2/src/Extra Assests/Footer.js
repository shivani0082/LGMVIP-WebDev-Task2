import React from "react";
import "./style.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div class="contain">
          <div class="col">
            <h1>Zippy</h1>
            <ul>
              <li>
                Mail: <a href="mailto:xyz@gmail.com">zippymanagement@gmail.com</a>
              </li>
              <li>
                Call: <a href="tel: +123456789012">+1234567890</a>
              </li>
              <li>
                Crated By: <a href="https://www.github.com/shivani0082">Shivani Thakran</a>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </>
  );
}
export default Footer;
