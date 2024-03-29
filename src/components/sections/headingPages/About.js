export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon Restaurant</h1>
                <h2>New York City</h2>
                <p className="about-subtext">This is Little Lemon. Lorem ipsum dolor sit enim ametys consec atetur adipisicing elit eiusmo tempors incididunts labore dolore magna aliqua enim mini veniam quis nostrud exercitation ullamcos laboris nisiut aliquip consequat reprehenderit.</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food/food3.jpg')} alt="Little Lemon restaurant cuisine 1"></img>
               
            </section>
    </article>
    );
}