import React, { useState } from 'react';
import { Jumbotron, Button } from 'reactstrap';
import styles from './styles/body.module.css';
import '@ptkdev/webcomponent-instagram-widget';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/source/animate.css';

const Body = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.entryDiv}>
        <ScrollAnimation animateOnce={true} delay={500} animateIn='fadeIn'>
          <p>Mergulhe no verão.</p>
        </ScrollAnimation>
        <ScrollAnimation animateOnce={true} delay={2000} animateIn='fadeIn'>
          <p>Mergulhe na vida.</p>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
        <Jumbotron className={styles.jumbotrom}>
          <div>
            <h1 className='display-5'>Moda praia Atacado e Varejo</h1>
            <p>
              Somos uma empresa familiar que está no mercado há mais de 20 anos,
              com o firme propósito de não somente vender bikinis, mas
              principalmente fazer nossos clientes se sentirem lindos e únicos.
              Fornecemos sempre produtos de excelente qualidade.
            </p>
            <hr className='my-2' />
            <div className='d-flex align-items-center'>
              <p>Veja nossas novidades no INSTAGRAM!</p>
              <p>
                <Button
                  className='ml-3'
                  style={{ backgroundColor: '#800080', borderColor: '#800080' }}
                  color='primary'
                  onClick={() => {
                    window.open(
                      'https://www.instagram.com/arowana_modapraia/',
                      '_blank' // <- This is what makes it open in a new window.
                    );
                  }}
                >
                  Ir para instagram
                </Button>
              </p>
            </div>
          </div>
        </Jumbotron>
        <div className={styles.workWith + ' fadeIn'}>
          <h1>Nossos produtos</h1>
          <p>
            Trabalhamos com vendas em atacado e varejo, todos nossos produtos
            são confeccionados a mão e os designes são baseados nos bikines mais
            quentes do momento no mundo todo!
          </p>
        </div>
      </ScrollAnimation>
      <ScrollAnimation
        animateOnce={true}
        animateIn='fadeIn'
        className={styles.swimming}
      ></ScrollAnimation>

      <div className='d-flex flex-column align-items-center'>
        <ScrollAnimation animateOnce={true} animateIn='fadeIn' delay={2000}>
          <div className={styles.someProducts}>
            <p className={styles.instagramWidgetTitle}>
              Alguns de nossos modelos.
            </p>
          </div>
        </ScrollAnimation>
        <instagram-widget
          username='@arowana_modapraia'
          grid='3x3'
          items-limit={9}
        />
        <ScrollAnimation animateOnce={true} animateIn='fadeIn'>
          <div style={{ width: '100%', height: '100%' }}>
            <Jumbotron className={styles.findUs}>
              <div style={{ width: '100%' }} className='pr-5'>
                <h1 className='display-5'>Onde nos encontrar</h1>
                <p>
                  Nos localizamos na famosa Rua dos Buiquinis, no bairro Gamboa,
                  um cluster de moda praia muito movimentado e quente! Veja ao
                  lado como chegar à nossa loja.
                </p>
              </div>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d919.0022021629215!2d-42.0206166!3d-22.876133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9704c8441452cf%3A0x128cab382d54cfac!2sR.%20dos%20Biqu%C3%ADnis%20-%20Gamboa%2C%20Cabo%20Frio%20-%20RJ%2C%2028924-180!5e0!3m2!1spt-BR!2sbr!4v1597557613978!5m2!1spt-BR!2sbr'
                width='100%'
                height='450'
                frameborder='0'
                style={{ border: 0 }}
                allowfullscreen=''
                aria-hidden='false'
                tabindex='0'
              />
            </Jumbotron>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Body;

/* <div className='carrosel-wrapper'>
        <Carousel
          className='carrosel'
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          ride={'carousel'}
          interval={5000}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction='prev'
            directionText='Previous'
            onClickHandler={previous}
          />
          <CarouselControl
            direction='next'
            directionText='Next'
            onClickHandler={next}
          />
        </Carousel>
      </div> */
