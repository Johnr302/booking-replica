import "./App.css";
import Header from "./components/Header";
import SearchLocation from "./components/SearchLocation.js";

function App() {
  return (
    <div>
      <Header />
      <SearchLocation />
      <div className="container">
        <div className="travel-for-work">
          <input type="checkbox" id="travel-checkbox" name="travel" />
          <label for="travel">I'm traveling for work</label>
        </div>
        <section id="covidInfo">
          <h1>
            Get the advice you need. Check latest COVID-19 restrictions before
            you travel.
            <a href="wg"> Learn more</a>
          </h1>
        </section>
        <div className="deals">
          <section>
            <img
              className="deals-image"
              alt=""
              src="https://cf.bstatic.com/static/img/deals/index_banner_getaway2020/312c784f761fc4f1e315742e93b9fa10d96ea67d.jpg"
            />
            <container>
              <h1>Save 15% or more</h1>
              <p>Plan your dream trip with a Gateway Deal</p>
              <button className="deals-button" id="exploreDeals">
                Explore deals
              </button>
            </container>
          </section>
          <section>
            <img
              className="deals-image"
              alt=""
              src="https://cf.bstatic.com/static/img/deals/index_banner_early20/d9154686dc1d8ce971487c5cd2f67073d1230167.jpg"
            />
            <container>
              <h1>Discover Early 2022 Deals</h1>
              <p>Kick off your new-year travels with 15% off stays</p>
              <button className="deals-button" id="findDeals">
                Find deals
              </button>
            </container>
          </section>
        </div>
        <section className="explore-USA">
          <h1>Explore United States of America</h1>
          <p>These popular destinations gave a lot to offer</p>
          <div className="explore-USA-card-container">
            <div className="explore card">
              <img
                src="https://cf.bstatic.com/xdata/images/city/square250/349720.webp?k=b7eca2cb90afd858f294732b0d5c194af47e70386b5be99373e3ff03be95c515&o="
                alt="Las Vegas"
              />
              <h2>Las Vegas</h2>
              <p>565 properties</p>
            </div>
            <div className="explore card">
              <img
                src="https://cf.bstatic.com/xdata/images/city/square250/620103.webp?k=c07eb50383bfb4bedd11308fb59876bff7ef522dc379f4d96a48812cecaf45eb&o="
                alt="Orlando"
              />
              <h2>Orlando</h2>
              <p>3,684 properties</p>
            </div>
            <div className="explore card">
              <img
                src="https://cf.bstatic.com/xdata/images/city/square250/690203.webp?k=dc8f5453ce80f38f94b1575299ae214a62239fd07eb6927c1518eeb703fa56c5&o="
                alt="Myrtle Beach"
              />
              <h2>Myrtle Beach</h2>
              <p>2,642 properties</p>
            </div>
            <div className="explore card">
              <img
                src="https://cf.bstatic.com/xdata/images/city/square250/689603.webp?k=59e9972a1882387f6a8f35f6f2193c7f4e5203723651307392170ce756247bb7&o="
                alt="Miami Beach"
              />
              <h2>Miami Beach</h2>
              <p>718 properties</p>
            </div>
            <div className="explore card">
              <img
                src="https://cf.bstatic.com/xdata/images/city/square250/689617.webp?k=edf88994b0c6b4c060300b942efdc1242289d1a695fcea13493e20596edc7daa&o="
                alt="Panama City Beach"
              />
              <h2>Panama City Beach</h2>
              <p>2,077 properties</p>
            </div>
            <div className="explore card">
              <img
                src="https://cf.bstatic.com/xdata/images/city/square250/856691.webp?k=9cf21942b6aa8706b8721525de6a06b55e8980139ee21f53593982a8e988a55a&o="
                alt="New York"
              />
              <h2>New York</h2>
              <p>1,381 properties</p>
            </div>
          </div>
        </section>
        <section className="explore-USA browse">
          <h1>Browse by property type</h1>
          <div className="explore-USA-card-container browse">
            <div className="browse card">
              <img
                src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
                alt="Hotels"
              />
              <h2>Hotels</h2>
              <p>848,827 hotels</p>
            </div>
            <div className="browse card">
              <img
                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
                alt="Apartment"
              />
              <h2>Apartment</h2>
              <p>779,064</p>
            </div>
            <div className="browse card">
              <img
                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
                alt="Resorts"
              />
              <h2>Resorts</h2>
              <p>17,632 resorts</p>
            </div>
            <div className="browse card">
              <img
                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
                alt="Villas"
              />
              <h2>Villas</h2>
              <p>409,414 villas</p>
            </div>
            <div className="browse card">
              <img
                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
                alt="Cabins"
              />
              <h2>Cabins</h2>
              <p>33.050 cabins</p>
            </div>
            <div className="browse card">
              <img
                src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg"
                alt="Cottages"
              />
              <h2>Cottages</h2>
              <p>137,810 cottages</p>
            </div>
          </div>
        </section>
        <div className="city-property-container">
          <div className="major-location-container">
            <div className="major-location" id="LasVegas">
              <div className="location-text-container">
                <h1>Las Vegas</h1>
                <p>566 properties</p>
              </div>
            </div>
            <div className="major-location" id="SanDiego">
              <div className="location-text-container">
                <h1>San Diego</h1>
                <p>1,400 properties</p>
              </div>
            </div>
          </div>
          <div className="location-container">
            <div className="location" id="SanFrancisco">
              <div className="location-text-container">
                <h1>San Francisco</h1>
                <p>377</p>
              </div>
            </div>
            <div className="location" id="LosAngeles">
              <div className="location-text-container">
                <h1>Los Angeles</h1>
                <p>1,715 properties</p>
              </div>
            </div>
            <div className="location" id="PalmSprings">
              <div className="location-text-container">
                <div className="location-text-container">
                  <h1>Palm Springs</h1>
                  <p>469 properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container-1">
            <button> List your property</button>
            <div className="line"></div>
            <div className="button-container">
              <button className="underline-white">Mobile version</button>
              <button className="underline-white">Your Account</button>
              <button className="underline-white">
                Make changes online to your booking
              </button>
              <button className="underline-white">Customer Service Help</button>
              <button className="underline-white">Become an affiliate</button>
              <button className="underline-white">
                Booking.com for Business
              </button>
            </div>
          </div>
          <div className="container-2">
            <ul>
              <li>Countries</li>
              <li>Regions</li>
              <li>Cities</li>
              <li>Districts</li>
              <li>Airports</li>
              <li>Hotels</li>
              <li>Places of interest</li>
            </ul>
            <ul>
              <li>Homes</li>
              <li>Apartments</li>
              <li>Resorts</li>
              <li>Villas</li>
              <li>Hostels</li>
              <li>B&Bs</li>
              <li>Guest houses</li>
            </ul>
            <ul>
              <li>Unique places to stay</li>
              <li>All destination</li>
              <li>Discover</li>
              <li>Reviews</li>
              <li>Unpack: Travel articles</li>
              <li>Season and holiday deals</li>
            </ul>
            <ul>
              <li>Car rental</li>
              <li>Flight finder</li>
              <li>Restaurant reservations</li>
              <li>Booking.com for Travel Agents</li>
            </ul>
            <ul>
              <li>Coronavirus (COVID-19) FAQs</li>
              <li>About Booking.com</li>
              <li>Customer Service Help</li>
              <li>Partner help</li>
              <li>Careers</li>
              <li>Sustainability</li>
              <li>Press center</li>
              <li>Safety Resource Center</li>
              <li>Investor relations</li>
              <li>Terms & conditions</li>
              <li>Dispute resolution</li>
              <li>How We Work</li>
              <li>Privacy & cookie statement</li>
              <li>Don't sell my personal information</li>
              <li>Corporate contact</li>
            </ul>
          </div>
          <button>Extranet login</button>
          <p>Copyright © 1996–2022 Booking.com™. All rights reserved.</p>
          <p>
            Booking.com is part of Booking Holdings Inc., the world leader in
            online travel and related services.
          </p>
          <div className="logo-container"></div>
        </footer>
      </div>
    </div>
  );
}

export default App;
