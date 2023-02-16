import React from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import CanapeaMica from "../../assets/img/mic-canapea.jpg";

function goTo() {
    scroller.scrollTo('doi', {
        duration: 2000,
        delay: 2,
        smooth: 'easeInOutQuart'
    })
}

function Serie() {

    React.useEffect(() => {
        let url = window.location.href.split('#')[1];
        var centerIfNeeded = true;

        switch (url) {
            case 'canapele':
                setTimeout(() => {
                    document.getElementById('primu').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('primu').scrollIntoViewIfNeeded(centerIfNeeded);
                }, 200);
                break;
            case 'coltare':
                setTimeout(() => {
                    document.getElementById('doi').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('doi').scrollIntoViewIfNeeded(centerIfNeeded)

                }, 200);
                break;
            case 'fotolii':
                setTimeout(() => {
                    document.getElementById('trei').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('trei').scrollIntoViewIfNeeded(centerIfNeeded)

                }, 200);
                break;
            case 'scaune':
                setTimeout(() => {
                    document.getElementById('patru').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('patru').scrollIntoViewIfNeeded(centerIfNeeded)

                }, 200);
                break;
            case 'covoare':
                setTimeout(() => {
                    document.getElementById('cinci').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('cinci').scrollIntoViewIfNeeded(centerIfNeeded)

                }, 200);
                break;
            case 'mochete':
                setTimeout(() => {
                    document.getElementById('sase').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('sase').scrollIntoViewIfNeeded(centerIfNeeded)

                }, 200);
                break;
            case 'saltele':
                setTimeout(() => {
                    document.getElementById('sapte').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('sapte').scrollIntoViewIfNeeded(centerIfNeeded)

                }, 200);
                break;
            case 'business':
                setTimeout(() => {
                    document.getElementById('opt').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('opt').scrollIntoViewIfNeeded(centerIfNeeded)

                }, 200);
                break;
        }
    }, []);

    return (

        <div className="main-content">
            <div className="concept concept-one" id="primu">
                <figcaption>
                    <span className="info">
                        <div className="titlu-brand">
                            <div className="titlu-serviciu">Curatare Canapele</div>
                            <span className="brand-serviciu">Smiley Clean</span>
                        </div>
                        <p className="subtitlu-serviciu">
                            Te-ai săturat să îți acoperi canapeaua cu pături
                            și să ascunzi petele de pe ea ?
                            Contactează-ne, iar canapeaua ta va fi ca nouă !
                        </p>

                        <p className="subtitlu-serviciu">
                            Smiley Clean ofera servicii premium de curatare pe loc a canapelelor din textil, eliminarea mirosurilor neplacute,
                            acarienilor si a petelor dificile ( cafea, vin, ciocolata, etc.)
                        </p>

                        <p className="subtitlu-serviciu">Utilajele performante marca Kharcher prin metoda de curatare injectie-extractie ne vor ajuta sa efectuam o curatare in
                            profunzime a tesaturilor si sa redam canapelei stralucirea si recapatarea culorilor !
                        </p>
                    </span>
                    <div className="imagine-serviciu3" id="1">
                        <div className="imagineserviciu1"></div>
                    </div>
                </figcaption>
                <figcaption className="pret">
                    <span className="info">de la 130 lei</span>
                </figcaption>
            </div>
            <div className="concept concept-one" id="doi">
                <figcaption>
                    <span className="info">
                        <div className="titlu-brand">
                            <div className="titlu-serviciu">Curatare Coltare</div>
                            <span className="brand-serviciu">Smiley Clean</span>
                        </div>
                        <p className="subtitlu-serviciu">
                            Praful, alergenii, acarienii, microbii, dar si petele accidentale ( cafea, vin, ciocolata, etc. ) schimba dramatic aspectul coltarului dumneavoastra!
                        </p>

                        <p className="subtitlu-serviciu">
                            Smiley Clean va ofera servicii premium de curatare coltare si canapele la domiciliu la preturi excelente.
                        </p>

                        <p className="subtitlu-serviciu">Utilajele performante marca Kharcher prin metoda de curatare injectie-extractie ne vor ajuta sa efectuam o curatare
                            in profunzime a tesaturilor si sa redam coltarului  stralucirea si recapatarea culorilor !
                        </p>
                    </span>
                    <div className="imagine-serviciu3">
                        <div className="imagineserviciu2"></div>
                    </div>
                    {/* <img src={{CanapeaMica}} width="300px" height="300px" z-index="5" />     */}
                </figcaption>
                <figcaption className="pret">
                    <span className="info">de la 200 lei</span>
                </figcaption>
            </div>
            <div className="concept concept-one" id="trei">
                <figcaption>
                    <span className="info">
                        <div className="titlu-brand">
                            <div className="titlu-serviciu">Curatare Fotolii</div>
                            <span className="brand-serviciu">Smiley Clean</span>
                        </div>
                        <p className="subtitlu-serviciu">
                            Ai nevoie de o curățare rapidă a fotoliilor din casa ta?
                        </p>

                        <p className="subtitlu-serviciu">
                            Smiley Clean va ofera servicii premium de curatare fotolii la domiciliu la preturi excelente.
                        </p>

                        <p className="subtitlu-serviciu">Pentru serviciul de curatare folosim metoda profesionala de curatare prin injectie-extractie, ce garanteaza
                            eliminarea acarienilor, a petelor, a murdariei, a prafului si o igienizare in profunzime a tapiteriei dumneavoastra.
                        </p>
                    </span>
                    <div className="imagine-serviciu3">
                        <div className="imagineserviciu3"></div>
                    </div>

                    {/* <img src={{CanapeaMica}} width="300px" height="300px" z-index="5" />     */}
                </figcaption>
                <figcaption className="pret">
                    <span className="info">100 lei</span>
                </figcaption>
            </div>
            <div className="concept concept-one" id="patru">
                {/* <h1>Glacier</h1> */}
                <figcaption>
                    <span className="info">
                        <div className="titlu-brand">
                            <div className="titlu-serviciu">Curatare Scaune</div>
                            <span className="brand-serviciu">Smiley Clean</span>
                        </div>
                        <p className="subtitlu-serviciu">
                            Scaunele de sufragerie tapitate adaugă o notă de eleganță și stil unei săli de mese.
                            Indiferent dacă aveți un mic dejun rapid sau o cină cu prietenii, scaunele de luat masa nu numai că trebuie să fie confortabile, dar trebuie să fie curate impecabile.
                        </p>

                        <p className="subtitlu-serviciu">
                            Din păcate, nu le puteți proteja de petele accidentale și de degetele lipicioase ale copiilor,
                            dar le puteți prelungi durata de viață daca le veti curata si le veti intretine in mod corespunzator.
                        </p>

                        <p className="subtitlu-serviciu">Smiley Clean va ofera servicii premium de curatare Scaune la domiciliu la preturi excelente, folosind metoda de
                            curatare prin injectie-extractie ce garanteaza eliminarea petelor, a murdariei, a prafului si o igienizare in profunzime a tapiteriei dumneavoastra.

                        </p>
                    </span>
                    <div className="imagine-serviciu3">
                        <div className="imagineserviciu4"></div>
                    </div>

                    {/* <img src={{CanapeaMica}} width="300px" height="300px" z-index="5" />     */}
                </figcaption>
                <figcaption className="pret">
                    <span className="info">de la 50 lei</span>
                </figcaption>
            </div>
            <div className="concept concept-one" id="cinci">
                <figcaption>
                    <span className="info">
                        <div className="titlu-brand">
                            <div className="titlu-serviciu">Curatare Covoare</div>
                            <span className="brand-serviciu">Smiley Clean</span>
                        </div>
                        <p className="subtitlu-serviciu">
                            Covoarele joacă un rol crucial în îmbunătățirea aspectului casei sau biroului dumneavoastră. Prin urmare,
                            este esențial să vă asigurați că este bine curățat pentru a-și păstra culorile și aspectul original.
                        </p>

                        <p className="subtitlu-serviciu">
                            Curățarea regulată ajută la menținerea aspectului său frumos, la îmbunătățirea mirosului acestuia,
                            la prevenirea răspândirii alergenilor si de asemenea, la protejarea sănătății persoanelor care locuiesc în casă.
                        </p>

                        <p className="subtitlu-serviciu">Smiley Clean, foloseste Utilajele performante de curatare, marca Kharcher (metoda  injectie-extractie )
                            care elimina mirosurile neplacute, petele dificile si acarienii dar in acelasi timp este bland cu textilele si le reda culoarea.
                        </p>
                    </span>
                    <div className="imagine-serviciu3">
                        <div className="imagineserviciu5"></div>
                    </div>

                    {/* <img src={{CanapeaMica}} width="300px" height="300px" z-index="5" />     */}
                </figcaption>
                <figcaption className="pret">
                    <span className="info">de la 80 lei</span>
                </figcaption>
                {/* <h1 class="word"><span class="char">M</span><span class="char">O</span><span class="char">U</span><span class="char">N</span><span class="char">T</span><span class="char">A</span><span class="char">I</span><span class="char">N</span><span class="char">S</span></h1> */}
            </div>
            <div className="concept concept-one" id="sase">
                <figcaption>
                    <span className="info">
                        <div className="titlu-brand">
                            <div className="titlu-serviciu">Curatare Mocheta</div>
                            <span className="brand-serviciu">Smiley Clean</span>
                        </div>
                        <p className="subtitlu-serviciu">
                            Mocheta poate adăposti o mulțime de bacterii, alergeni și poluanți care vă afectează negativ calitatea aerului din interior și sănătatea respiratorie.
                        </p>

                        <p className="subtitlu-serviciu">
                            O curățare profundă poate îndepărta firele de păr adânc încorporate, praful, murdăria și alte resturi,
                            precum și petele deranjante și mirosurile neplăcute, pe care aspiratorul de uz casnic obișnuit nu le poate face.
                        </p>

                        <p className="subtitlu-serviciu">Modalitatea cea mai simplă și sigură de a curăța mocheta este să apelezi la o firma specializată,
                            cu un personal calificat și cu aparatură profesională, ce va reda prospețimea mochetei și va elimina mirosul neplăcut.
                        </p>
                    </span>
                    <div className="imagine-serviciu3">
                        <div className="imagineserviciu6"></div>
                    </div>

                    {/* <img src={{CanapeaMica}} width="300px" height="300px" z-index="5" />     */}
                </figcaption>
                <figcaption className="pret">
                    <span className="info">de la 100 lei</span>
                </figcaption>
                {/* <h1 class="word"><span class="char">O</span><span class="char">C</span><span class="char">E</span><span class="char">A</span><span class="char">N</span></h1> */}
            </div>
            <div className="concept concept-one" id="sapte">
                <figcaption>
                    <span className="info">
                        <div className="titlu-brand">
                            <div className="titlu-serviciu">Curatare saltele</div>
                            <span className="brand-serviciu">Smiley Clean</span>
                        </div>
                        <p className="subtitlu-serviciu">
                            Smiley Clean ofera servicii profesionale de curățare și igienizare a saltelelor în care poți avea încredere!
                        </p>

                        <p className="subtitlu-serviciu">
                            O saltea proaspăt curățată nu conține acarieni și mirosuri care vă pot împiedica somnul în fiecare noapte.
                        </p>

                        <p className="subtitlu-serviciu">Curățarea în profunzime este importantă, deoarece poate ajuta la eliminarea oricăror semne
                            de praf și murdărie de pe saltea, readucerea acesteia la calitatea inițială.
                        </p>
                    </span>
                    <div className="imagine-serviciu3">
                        <div className="imagineserviciu7"></div>
                    </div>

                    {/* <img src={{CanapeaMica}} width="300px" height="300px" z-index="5" />     */}
                </figcaption>
                <figcaption className="pret">
                    <span className="info">de la 80 lei</span>
                </figcaption>
                {/* <h1>fries</h1> */}
            </div>
            <div className="concept concept-one" id="opt">
                <figcaption>
                    <span className="info">
                        <div className="titlu-brand">
                            <div className="titlu-serviciu">Servicii business</div>
                            <span className="brand-serviciu">Smiley Clean</span>
                        </div>
                        <p className="subtitlu-serviciu">
                            Smiley Clean ofera afacerii dumneavoastra servicii complete, de înaltă calitate pentru :
                            curățarea scaunelor de birou,
                            curatarea scaunelor din salile de sedinta,
                            curatarea scaunelor pentru vizitatori,
                            curatarea canapelelor din salile de asteptare
                        </p>

                        <p className="subtitlu-serviciu">
                            Folosind Utilajele performante marca Kharcher prin metoda de curatare injectie-extractive,
                            scaunele dumneavoastra de birou vor fi curate și proaspete, fără murdărie, și mirosuri.
                        </p>

                        <p className="subtitlu-serviciu">Acestea vor arata din nou la fel de bine ca atunci cand le-ati achizitionat, astfel
                            va vom ajuta sa creșteti durata de viață si sa economisiti costul inlocuirii acestora.
                        </p>
                    </span>
                    <div className="imagine-serviciu3">
                        <div className="imagineserviciu8"></div>
                    </div>

                    {/* <img src={{CanapeaMica}} width="300px" height="300px" z-index="5" />     */}
                </figcaption>
                <figcaption className="pret">
                    <span className="info">de la 200 lei</span>
                </figcaption>
            </div>



        </div>
    )
}

export default Serie;

       // < footer ><a href="https://twitter.com/meowlivia_" target="_blank"><i class="icon-social-twitter icons"></i></a><a href="https://github.com/oliviale" target="_blank"><i class="icon-social-github icons"></i></a><a href="https://dribbble.com/oliviale" target="_blank"><i class="icon-social-dribbble icons"></i></a></footer >