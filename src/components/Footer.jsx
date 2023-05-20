import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai"


const Footer = () => {
  return (
    <div className="max-w-[1640px] max-h-[500px] bg-black/80 text-white">
     <div className="flex flex-wrap  justify-between items-center lg:flex flex-cols-4 py-4 px-10">
        <div>
         <h5 className="text-orange-500 font-semibold text-xl mb-2">Useful links</h5>
            <ul className="font-serif">
                <li>Privacy policy</li>
                <li>Terms of use</li>
                <li>Return policy</li>
                <li>Discount coupons</li>
            </ul>
        </div>
        <div className="">
                <h5 className="text-orange-500 font-semibold text-xl mb-2">Company</h5>
                <ul className="font-serif">
                    <li>Career</li>
                    <li>About us</li>
                    <li>contact us</li>
                    <li>Affiliate</li>
                </ul>
        </div>

        {/*social links*/}
            <div className="md:mt-3 sm:mt-3">
              <h5 className="text-orange-500 font-semibold text-xl">Follow us</h5>
                <ul className="font-serif">
                    <li className="flex items-center px-1 font-serif mt-3"><AiOutlineFacebook size={25}/>Facebook</li>
                    <li className="flex items-center px-1"><AiOutlineInstagram size={25}/>Instagram</li>
                    <li className="flex items-center px-1"><AiOutlineTwitter size={25}/>Twitter</li>
                    <li className="flex items-center px-1"><AiOutlineLinkedin size={25}/>Linkedin</li>
                </ul>
            </div>

            {/*App download*/}
            <div>
              <h5 className="text-orange-500 font-semibold text-xl">Download App</h5>
                <img className="w-[150px] h-[100px] object-cover mt-3" src="https://static.vecteezy.com/system/resources/previews/002/520/836/original/download-apps-button-google-play-and-app-store-vector.jpg" alt="" />
            </div>
       </div>

       {/*copy right*/}
        <p className="px-1 font-[italic]">Copyright &copy; 2023</p>
    </div>
  )
}

export default Footer