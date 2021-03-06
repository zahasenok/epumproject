import React from 'react';



class Contacts extends React.Component{
    render(){
        return(
            <div>
                <div className="c_header">
                <p>CONTACTS</p>
            </div>
           
                <div className="contacts_container">

                    <div className="contacts_map">
                        <div className="google-map">
                            <iframe id="map_window" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5525878119665!2d30.4590354512214!3d50.449433895218554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce82c7c07565%3A0xd2e84edcb0edd9d5!2sKPI%20University!5e0!3m2!1suk!2sua!4v1590680182239!5m2!1suk!2sua" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                    <br></br>
                    <hr className="c_hr"></hr>
                    <div className="contacts_row">
                        <div className="c_address">
                            <h2>MANAGEMENT</h2>
                            <hr className="f_hr"></hr>
                            <div className = "c_a_block">
                            Jim Morewood<br></br>
                            info@k2ours.com
                            </div>
                        </div>
                        <div className="c_address">
                            <h2>BOOKING (FINLAND)</h2>
                            <hr className="f_hr"></hr>
                            <div className = "c_a_block">
                            Jukka Varmo<br></br>
                            jukka.varmo@livenation.fi
                            </div>
                        </div>
                        <div className="c_address">
                            <h2>INTERVIEWS & PROMO</h2>
                            <hr className="f_hr"></hr>
                            <div className = "c_a_block">
                            promo@insomniac-music.com
                            </div>
                        </div>
                        <div className="c_address">
                            <h2>RECORD LABEL</h2>
                            <hr className="f_hr"></hr>
                            <div className = "c_a_block">
                            Insomniac<br></br>
                            info@insomniac-music.com
                            </div>
                        </div>
                        <div className="c_address">
                            <h2>DISTRIBUTOR</h2>
                            <hr className="f_hr"></hr>
                            <div className = "c_a_block">
                            Playground Music
                            </div>
                        </div>
                        
                        <div className="c_address">
                            <h2>Three Days Grace</h2>
                            <hr className="f_hr"></hr>
                            <div className = "c_a_block">
                            store@backstagerockshop.com
                            only for matters concerning orders from <br></br>the official webshop at shop.threedaysgrace.com
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                        

        )
    }
}

export default Contacts;
