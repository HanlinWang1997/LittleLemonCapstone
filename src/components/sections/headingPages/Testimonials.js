import Carousel from './TestimonialCarousel';
import TestimonialCard from './CardInfo/TestimonialCard';
import person1 from "../../../assets/reviewer/p1.jpg";
import person2 from "../../../assets/reviewer/p2.jpg";
import person3 from "../../../assets/reviewer/p3.jpg";
import person4 from "../../../assets/reviewer/p4.jpg";
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard image = {person1} name="Selena G." description="Really enjoyed the atmosphere."/>
                <TestimonialCard image = {person2} name="Micheal C." description="This is the best Mediterranean food that I've ever had!"/>
                <TestimonialCard image = {person3} name="Abby L." description="You have to try the Greek Salad!"/>
                <TestimonialCard image = {person4} name="Jasmine W." description="Awesome place peaceful atmosphere with delicious food"/>
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}