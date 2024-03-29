import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon Restaurant</h1>
                    <h2>New York City</h2>
                    <p className="subsection">Welcome. This is Little Lemon. Lorem ipsum dolor sit enim ametys consec atetur adipisicing elit eiusmo tempors incididunts labore dolore magna aliqua enim mini veniam quis nostrud exercitation ullamcos laboris nisiut aliquip consequat reprehenderit.</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Book</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/food/food6.jpg')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </article>
      </header>
    );
}