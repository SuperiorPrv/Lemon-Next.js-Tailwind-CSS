import Image from "next/image";
import img1 from "@/app/images/IMAGE (1).png";
import img2 from "@/app/images/Frame.png";
import img3 from "@/app/images/Frame (1).png";
import img4 from "@/app/images/Frame (2).png";
import img5 from "@/app/images/icon.svg";
import img6 from "@/app/images/IMAGE (2).png";
import img7 from "@/app/images/IMAGE (3).png";
import img8 from "@/app/images/IMAGE (4).png";
import img9 from "@/app/images/IMAGE (5).png";
import img10 from "@/app/images/IMAGE (6).png";
import img11 from "@/app/images/IMAGE (7).png";
import img12 from "@/app/images/IMAGE (8).png";
import img13 from "@/app/images/IMAGE (9).png";
import img14 from "@/app/images/IMAGE (10).png";
import img15 from "@/app/images/IMAGE (11).png";
import img16 from "@/app/images/IMAGE (12).png";
import img17 from "@/app/images/IMAGE (13).png";
import img18 from "@/app/images/IMAGE (14).png";
import img19 from "@/app/images/IMAGE (15).png";
import img20 from "@/app/images/IMAGE (16).png";
import img21 from "@/app/images/IMAGE (17).png";
import img22 from "@/app/images/IMAGE (18).png";
import img23 from "@/app/images/Frame (3).png";
import img24 from "@/app/images/Frame (4).png";
import img25 from "@/app/images/Frame (5).png";

export default function Home() {
  return (
    <>
      <header className="py-[20px] text-center bg-[#0f4b0f] bg-top bg-[url('https://s3-alpha-sig.figma.com/img/9b33/8a11/482067f76805a6faa0c2b05acf4fa3d4?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gkU3pnSP7r~dZMCQgHP9S9YOdwIoBzfV7ovM6KPThnfs~PCZmdXfQHlBI6xxbcPkHeJwMQLBHIO1-JHc9NDifDTj0Kt0GL2l5pNXHDT2yTlh3Lu7WL4b7B3J1BbqJEFuYTSC92iRUnUDX1VlpPgXKx84gejzJbnKWu86h9yZfvbQPSknHKDQ7Z8tQXzsViZCVz77gX9Ye5eEJoavxYPYFWd~xq6WTAhIL~Kx01aZ~lcP6gGNMaWoPypdUi6ASHcqJk5mM92Z-2i-B~5Iq-jEvZRcTD6mGBgTYniCBJMQd9M-wiX42YL5zKxxXbN6qDxQH~WJ0j61naCstNC-C-PoaQ__')]">
        <p className="text-[white]">Use this banner to inform your users of something important.</p>
      </header>
      <section className="md:flex justify-between md:p-[20px_100px] p-[20px_50px] items-center block">
        <nav className="flex gap-[20px] md:gap-[40px] mb-[15px] md:mb-[0px]">
          <a href="">Overview</a>
          <a href="">Pages</a>
          <a href="">Services</a>
          <a href="">Contact</a>
        </nav>
        <button className="p-[10px_20px] border-[2px]">Purchase now</button>
      </section>
      <hr/>
      <section className="text-center py-[30px]">
        <h5>MEET LEMON</h5>
        <h1 className="text-[35px] md:text-[55px] w-[75%] md:w-[45%] text-center m-auto mb-[20px]">Build a better site for enterprise business.</h1>
        <p className="mb-[20px] w-[60%] m-auto">Lemon contains a huge selection of common and useful components and layouts that help you build the best site for your business and clients.</p>
        <Image className="m-auto" src={img1} alt="img1"/>
      </section>
      <section className="md:p-[30px_120px] p-[30px_60px]">
        <div className="flex justify-between items-center py-[20px] gap-[15px]">
          <h4 className="md:text-[40px] text-[20px] md:w-[40%] w-[50%]">Browse the collection of layouts & pages.</h4>
          <p className="md:text-[20px] md:w-[40%] w-[50%]">Discover all the components and pages below. These can be resused across all your projects and easily customised to suit your brands and projects.</p>
        </div>
        <hr/>
        <div className="py-[30px]">
          <div className="sm:flex justify-between block">
            <div className="border-[2px] text-center p-[30px] lg:w-[25%] sm:w-[32%] sm:mb-[0px] w-[70%] m-auto mb-[15px]">
              <Image className="m-auto mb-[15px]" src={img2} alt="img2"/>
              <h5 className="text-[20px] mb-[10px]">Layouts</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <div className="border-[2px] text-center p-[30px] lg:w-[25%] sm:w-[32%] sm:mb-[0px] w-[70%] m-auto mb-[15px]">
              <Image className="m-auto mb-[15px]" src={img3} alt="img3"/>
              <h5 className="text-[20px] mb-[10px]">Sections</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
            <div className="border-[2px] text-center p-[30px] lg:w-[25%] sm:w-[32%] sm:mb-[0px] w-[70%] m-auto mb-[15px]">
              <Image className="m-auto mb-[15px]" src={img4} alt="img4"/>
              <h5 className="text-[20px] mb-[10px]">Components</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
            </div>
          </div>
          <button className="w-[100%] bg-[#F6F6F9] text-center relative py-[15px] mt-[20px]">
            <p>Learn more</p>
            <Image className="absolute top-1 right-1" src={img5} alt="img5"/>
          </button>
        </div>
      </section>
      <section className="md:p-[30px_120px] p-[30px_60px]">
        <div className="m-auto text-center">
          <p>LEMON TEMPLATE</p>
          <h4 className="text-[35px] mb-[40px]">The Landing Pages</h4>
        </div>
        <div className="flex justify-center gap-[60px] items-center mb-[30px] flex-wrap">
          <Image src={img6} alt="img6"/>
          <Image src={img7} alt="img7"/>
        </div>
        <Image className="m-auto" src={img8} alt="img8"/>
      </section>
      <section className="md:p-[30px_120px] p-[30px_60px]">
        <div className="m-auto text-center">
          <p>LEMON TEMPLATE</p>
          <h4 className="text-[35px] mb-[40px]">Company Pages</h4>
        </div>
        <div className="flex justify-center gap-[60px] items-center mb-[30px] flex-wrap">
          <Image src={img9} alt="img9"/>
          <Image src={img10} alt="img10"/>
        </div>
        <Image className="m-auto" src={img11} alt="img11"/>
      </section>
      <section className="md:p-[30px_120px] p-[30px_60px]">
        <div className="m-auto text-center">
          <p>LEMON TEMPLATE</p>
          <h4 className="text-[35px] mb-[40px]">Overview Pages</h4>
        </div>
        <div className="flex justify-center gap-[60px] items-center mb-[30px] flex-wrap">
          <Image src={img12} alt="img12"/>
          <Image src={img13} alt="img13"/>
        </div>
      </section>
      <section className="md:p-[30px_120px] p-[30px_60px]">
        <div className="m-auto text-center">
          <p>LEMON TEMPLATE</p>
          <h4 className="text-[35px] mb-[40px]">Pricing Pages</h4>
        </div>
        <div className="flex justify-center gap-[60px] items-center mb-[30px] flex-wrap">
          <Image src={img14} alt="img14"/>
          <Image src={img15} alt="img15"/>
        </div>
      </section>
      <section className="md:p-[30px_120px] p-[30px_60px]">
        <div className="m-auto text-center">
          <p>LEMON TEMPLATE</p>
          <h4 className="text-[35px] mb-[40px]">Contact Pages</h4>
        </div>
        <div className="flex justify-center gap-[60px] items-center mb-[30px] flex-wrap">
          <Image src={img16} alt="img16"/>
          <Image src={img17} alt="img17"/>
        </div>
      </section>
      <section className="md:p-[30px_120px] p-[30px_60px]">
        <div className="m-auto text-center">
          <p>LEMON TEMPLATE</p>
          <h4 className="text-[35px] mb-[40px]">Blog Pages</h4>
        </div>
        <div className="flex justify-center gap-[60px] items-center mb-[30px] flex-wrap">
          <Image src={img18} alt="img18"/>
          <Image src={img19} alt="img19"/>
        </div>
      </section>
      <section className="md:p-[30px_120px] p-[30px_60px]">
        <div className="m-auto text-center">
          <p>LEMON TEMPLATE</p>
          <h4 className="text-[35px] mb-[40px]">Account Pages</h4>
        </div>
        <div className="flex justify-center gap-[60px] items-center mb-[30px] flex-wrap">
          <Image src={img20} alt="img20"/>
          <Image src={img21} alt="img21"/>
        </div>
        <Image className="m-auto" src={img22} alt="img22"/>
      </section>
      <footer className="p-[50px]">
        <div className="bg-[#2A514C] p-[30px] text-[white]">
          <div className="sm:flex justify-between items-center mb-[15px] block sm:text-start text-center">
            <p className="mb-[10px] sm:mb-[0px]">Lemon - Webflow UI Library</p>
            <nav className="flex justify-center sm:justify-start gap-[15px]">
              <a href="">
                <Image src={img23} alt="img23"/>
              </a>
              <a href="">
                <Image src={img24} alt="img24"/>
              </a>
              <a href="">
                <Image src={img25} alt="img25"/>
              </a>
            </nav>
          </div>
          <hr/>
          <div className="sm:flex justify-between items-center my-[20px] block sm:text-start text-center">
            <div className="mb-[15px] sm:mb-[0px]">
              <h5 className="text-[20px] text-[#EBFA9E]">PAGES</h5>
              <nav>
                <a className="block my-[10px]" href="">Home 1</a>
                <a className="block my-[10px]" href="">Home 2</a>
                <a className="block my-[10px]" href="">Home 3</a>
                <a className="block my-[10px]" href="">Careers</a>
                <a className="block my-[10px]" href="">Career Post</a>
              </nav>
            </div>
            <div className="mb-[15px] sm:mb-[0px]">
              <h5 className="text-[20px] text-[#EBFA9E]">PAGES</h5>
              <nav>
                <a className="block my-[10px]" href="">About / Company</a>
                <a className="block my-[10px]" href="">How It Works</a>
                <a className="block my-[10px]" href="">Customers</a>
                <a className="block my-[10px]" href="">Pricing 1</a>
                <a className="block my-[10px]" href="">Pricing 2</a>
              </nav>
            </div>
            <div className="mb-[15px] sm:mb-[0px]">
              <h5 className="text-[20px] text-[#EBFA9E]">PAGES</h5>
              <nav>
                <a className="block my-[10px]" href="">Contact 1</a>
                <a className="block my-[10px]" href="">Contact 2</a>
                <a className="block my-[10px]" href="">Contact 3</a>
                <a className="block my-[10px]" href="">Blog</a>
                <a className="block my-[10px]" href="">Blog Post</a>
              </nav>
            </div>
            <div className="mb-[15px] sm:mb-[0px]">
              <h5 className="text-[20px] text-[#EBFA9E]">PAGES</h5>
              <nav>
                <a className="block my-[10px]" href="">Team</a>
                <a className="block my-[10px]" href="">Account 1</a>
                <a className="block my-[10px]" href="">Account 2</a>
                <a className="block my-[10px]" href="">Account 3</a>
                <a className="block my-[10px]" href="">404</a>
              </nav>
            </div>
          </div>
          <hr/>
          <p className="mt-[15px] sm:text-start text-center">© Template by <span className="text-[#EBFA9E]">Flowbase</span> - Powered by <span className="text-[#EBFA9E]">Webflow</span></p>
        </div>
      </footer>
    </>
  );
}
