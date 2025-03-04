
import './App.css'

function App() {

  return (
    <>
    <div className="navbar">
        <div className="logo">explor<span style={{color:"#144343"}}>er</span></div>
        <div className="nav-links">
            <a href="#">Hotels</a>
            <a href="#">Bike Rentals</a>
            <a href="#">Restaurants</a>
        </div>
    </div>
    <table className="about">
        <tr>
            <td className="content">
                <p className="line-one">WELCOME TO EXPLORER</p>
                <p className="line-two">Your Adventure <br /> Travel Expert in <br /> the <span className="south">SOUTH</span></p>
                <form className="enter">
                <select id="destination" name="destination" required>
                    <option value="">Choose</option>
                </select>
                </form>
                <button className="button">EXPLORE</button></td>
        
            <td className="image">
            
              <img className="prf" src="images/bike.png" />
            </td>
        </tr>
</table>

    <p className="dest">Destination</p>
    <p className="des">Just for you. Because you and your bike are special to us!</p>

    <div className="container">
    
    <br />
        <div className="d">
            
            <img src="images/pic.png" alt="Image1" />
            <p className="title">Never Ending Paddy Fields and Narrow Roads</p>
            <p className="location">Pollachi</p>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className="button">READ MORE</button>
        </div>
        <div className="d">
            <img src="images/pic.png" alt="Image2" />
            <p className="title">Small Ride across the Summer Heat</p>
            <p className="location">Thanjavur</p>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className="button">READ MORE</button>
        </div>
        <div className="d">
            <img src="images/pic.png" alt="Image2" />
            <p className="title">Small Ride across the Summer Heat</p>
            <p className="location">Thanjavur</p>

            
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className="button">READ MORE</button>
        </div>

        <div className="d">
            <img src="images/pic.png" alt="Image1" />
            <p className="title">Never Ending Paddy Fields and Narrow Roads</p>
            <p className="location">Pollachi</p>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className="button">READ MORE</button>
        </div>
        <div className="d">
            <img src="images/pic.png" alt="Im2" />
            <p className="title">Small Ride across the Summer Heat</p>
            <p className="location">Thanjavur</p>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className="button">READ MORE</button>
        </div>
        <div className="d">
            <img src="images/pic.png" alt="Image1" />
            <p className="title">Small Ride across the Summer Heat</p>
            <p className="location">Thanjavur</p>
            <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className="button">READ MORE</button>
        </div>
        
    </div>


   
    <div className="full-width-bg" >
        <div className="contact-form">
            <h2>Contact Us</h2>
            <p className="p">Our Sales Team will reach out to you ASAP!</p>
            <form>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label for="home-town">Your Home Town</label>
                <select id="home-town" name="home-town" required>
                    <option value="">Choose</option>
                </select>

                <label for="destination">Where would you like to go?</label>
                <select id="destination" name="destination" required>
                    <option value="">Choose</option>
                </select>

                <label for="contact">Contact Number</label>
                <input type="text" id="contact" name="contact" required/>
                <br />
                <button type="submit" className="submit-button">SUBMIT INTEREST</button>
            </form>
        </div>
    </div>
    

    </>
  )
}

export default App
