import React from "react";

function Serie() {

    React.useEffect(() => {
        let url = window.location.href.split('#')[1];
        var centerIfNeeded = true;

        switch (url) {
            case 'canapele':
                setTimeout(() => {
                    document.getElementById('primu').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('primu').scrollIntoViewIfNeeded(centerIfNeeded);
                }, 100);
                break;
            case 'coltare':
                setTimeout(() => {
                    document.getElementById('doi').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('doi').scrollIntoViewIfNeeded(centerIfNeeded)

                }, 100);
                break;
            case 'fotolii':
                setTimeout(() => {
                    document.getElementById('trei').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('trei').scrollIntoViewIfNeeded(centerIfNeeded)

                }, 100);
                break;
            case 'scaune':
                setTimeout(() => {
                    document.getElementById('patru').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('patru').scrollIntoViewIfNeeded(centerIfNeeded)

                }, 100);
                break;
            case 'covoare':
                setTimeout(() => {
                    document.getElementById('cinci').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('cinci').scrollIntoViewIfNeeded(centerIfNeeded)

                }, 100);
                break;
            case 'mochete':
                setTimeout(() => {
                    document.getElementById('sase').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('sase').scrollIntoViewIfNeeded(centerIfNeeded)

                }, 100);
                break;
            case 'saltele':
                setTimeout(() => {
                    document.getElementById('sapte').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('sapte').scrollIntoViewIfNeeded(centerIfNeeded)

                }, 100);
                break;
            case 'business':
                setTimeout(() => {
                    document.getElementById('opt').scrollIntoView({ behavior: "smooth" });
                    document.getElementById('opt').scrollIntoViewIfNeeded(centerIfNeeded)

                }, 100);
                break;
        }
    }, []);

    return (

        <div className="main-content" id="parinte">
            <div className="concept concept-one" id="primu">
                <figcaption>
                    <span className="info">
                        <div className="titlu-brand">
                            <div className="titlu-serviciu">Curatare Canapele</div>
                            <span className="brand-serviciu">Smiley Clean</span>
                        </div>
                        <p className="subtitlu-serviciu">
                            Te-ai s??turat s????????i acoperi canapeaua cu p??turi
                            ??i s????ascunzi petele de pe ea ?
                            Contacteaz??-ne, iar canapeaua ta va fi ca nou?? !
                        </p>

                        <p className="subtitlu-serviciu">
                            Smiley Clean ofera servicii premium de curatare pe loc a canapelelor din textil, eliminarea mirosurilor neplacute,
                            acarienilor si a petelor dificile ( cafea, vin, ciocolata, etc.)
                        </p>

                        <p className="subtitlu-serviciu">Utilajele performante marca Karcher prin metoda de curatare injectie-extractie ne vor ajuta sa efectuam o curatare in
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

                        <p className="subtitlu-serviciu">Utilajele performante marca Karcher prin metoda de curatare injectie-extractie ne vor ajuta sa efectuam o curatare
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
                            Ai nevoie de o cur????are rapid?? a fotoliilor din casa ta?
                        </p>

                        <p className="subtitlu-serviciu">
                            Smiley Clean va ofera servicii premium de curatare fotolii la domiciliu la preturi excelente.
                        </p>

                        <p className="subtitlu-serviciu">Pentru serviciul de??curatare folosim metoda profesionala de curatare prin??injectie-extractie, ce garanteaza
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
                            Scaunele de sufragerie tapitate adaug?? o not?? de elegan???? ??i stil unei s??li de mese.
                            Indiferent dac?? ave??i un mic dejun rapid sau o cin?? cu prietenii, scaunele de luat masa nu numai c?? trebuie s?? fie confortabile, dar trebuie s?? fie curate impecabile.
                        </p>

                        <p className="subtitlu-serviciu">
                            Din p??cate, nu le pute??i proteja de petele accidentale ??i de degetele lipicioase ale copiilor,
                            dar le pute??i prelungi durata de via???? daca le veti curata si le veti intretine in mod corespunzator.
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
                            Covoarele joac?? un rol crucial ??n ??mbun??t????irea aspectului casei sau biroului dumneavoastr??.??Prin urmare,
                            este esen??ial s?? v?? asigura??i c?? este bine cur????at pentru a-??i p??stra culorile ??i aspectul original.
                        </p>

                        <p className="subtitlu-serviciu">
                            Cur????area regulat?? ajut?? la men??inerea aspectului s??u frumos, la ??mbun??t????irea mirosului acestuia,
                            la prevenirea r??sp??ndirii alergenilor si de asemenea, la protejarea s??n??t????ii persoanelor care locuiesc ??n cas??.
                        </p>

                        <p className="subtitlu-serviciu">Smiley Clean, foloseste Utilajele performante de curatare, marca Karcher (metoda  injectie-extractie )
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
                            Mocheta poate ad??posti o mul??ime de bacterii, alergeni ??i poluan??i care v?? afecteaz?? negativ calitatea aerului din interior ??i s??n??tatea respiratorie.
                        </p>

                        <p className="subtitlu-serviciu">
                            O cur????are profund?? poate ??ndep??rta firele de p??r ad??nc ??ncorporate, praful, murd??ria ??i alte resturi,
                            precum ??i petele deranjante ??i mirosurile nepl??cute, pe care aspiratorul de uz casnic obi??nuit nu le poate face.
                        </p>

                        <p className="subtitlu-serviciu">Modalitatea??cea??mai??simpl??????i??sigur????de a??cur????a mocheta??este??s????apelezi??la??o??firma??specializat??,
                            cu un personal calificat????i??cu??aparatur????profesional??, ce??va??reda??prospe??imea mochetei????i va elimina mirosul??nepl??cut.
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
                            Smiley Clean ofera servicii profesionale de cur????are ??i igienizare a saltelelor ??n care po??i avea ??ncredere!
                        </p>

                        <p className="subtitlu-serviciu">
                            O saltea proasp??t cur????at?? nu con??ine acarieni ??i mirosuri care v?? pot ??mpiedica somnul ??n fiecare noapte.
                        </p>

                        <p className="subtitlu-serviciu">Cur????area ??n profunzime este important??, deoarece poate ajuta la eliminarea oric??ror semne
                            de praf ??i murd??rie de pe saltea, readucerea acesteia la calitatea ini??ial??.
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
                            Smiley Clean ofera afacerii dumneavoastra servicii complete, de ??nalt?? calitate pentru :
                            cur????area scaunelor de birou,
                            curatarea scaunelor din salile de sedinta,
                            curatarea scaunelor pentru vizitatori,
                            curatarea canapelelor din salile de asteptare
                        </p>

                        <p className="subtitlu-serviciu">
                            Folosind Utilajele performante marca Karcher prin metoda de curatare injectie-extractive,
                            scaunele dumneavoastra de birou vor fi curate ??i proaspete, f??r?? murd??rie, ??i mirosuri.
                        </p>

                        <p className="subtitlu-serviciu">Acestea vor arata din nou la fel de bine ca atunci cand le-ati achizitionat, astfel
                            va vom ajuta sa cre??teti durata de via???? si sa economisiti costul inlocuirii acestora.
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