import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/hemanthkumar52/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/HemanthKumar52" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/hkxzz?igsh=bzAyOWlkank4b2Rz" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
