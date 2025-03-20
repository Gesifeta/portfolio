
import "./Sales.css"

const Sales = () => {
  return (
    <div className='sales'>
        <h2>This is a memorable domain name and open for sale.</h2>
        <div className="info">
        <p>Feel free to contact me for more information.</p>
        <p>Email: adamgemechu@gmail.com</p>
        </div>
        {/* Price starts from  */}
        <b style={{fontSize:"3rem"}}>Price: USD $2,500</b>
        <p>Thank you for your interest.</p>
    </div>
  )
}

export default Sales