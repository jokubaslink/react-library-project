import React from 'react';
import { Link } from 'react-router-dom';
import UndrawBooks from '../assets/undraw_book_lover_re_rwjy.svg';

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Lithuania's most awarded online library platform</h1>
                        <h2>Find your dream book with <span className="lightblue">Library</span></h2>
                        <Link to="#features">
                            <button className="btn">Browse books</button>
                        </Link>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;