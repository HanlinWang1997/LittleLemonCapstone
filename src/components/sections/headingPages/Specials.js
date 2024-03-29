import Carousel from './SpecialsCarousel';
import GreekSalad from '../../../assets/food/GreekSalad.jpeg';
import Bruschetta from '../../../assets/food/Bruschetta.jpeg';
import LemonDessert from '../../../assets/food/LemonDessert.webp';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>Specials</h1>
                <a className="action-button" href={require('../../../assets/food/allmenus.jpeg')} target="_blank" rel="noreferrer">Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="Greek Salad" price="$10.99" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
                <SpecialCard image={Bruschetta}name="Bruschetta" price="$15.99" description="Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables."/>
                <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.99" description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}