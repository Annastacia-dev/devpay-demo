import React from "react"; 
const Footer = () => {
  //  Current Year
  const currentYear = new Date().getFullYear();


  return (
   <>
    
<footer class="text-center">
<p>We will keep updating more important features on our website for all of you. 
  Please give your support and love.</p>
 {/* Socials */}
  <div class="socials">
    <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
    <a href="https://twitter.com/"><i class="fa fa-twitter"></i></a>
    <a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a>
    </div>
 <p>Copyright &copy; {currentYear} All rights reserved by DevPay.Inc</p>
</footer>
   </>
  );
};
export default Footer;
