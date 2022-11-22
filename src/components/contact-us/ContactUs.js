import './contactus.css'

const ContactUs = () => {
    return (
        <div id='contact-us' className='container contact'>
            <div className="row">
                <h1 className='text-center'>Contact Us</h1>
                <div className="col-lg-8 mt-4 mx-auto">
                    <form className='d-flex justify-content-center flex-column'>
                        <input type="text" placeholder='Name *' />
                        <input type="text" placeholder='email *' />
                        <input type="number" placeholder='number *' />
                        <textarea cols="20" rows="5" placeholder='Message'></textarea>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
