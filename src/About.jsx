import './About.css';
import messi from './images/messi.jpg';
import ronaldinho from './images/ronaldinho.jpeg';
import neymar from './images/neymar.jpg';


function About() {
    return (
        <>
            <h2>Famous Players</h2>
            <div className="wrapper">
                <input className="radio" id="one" name="group" type="radio" defaultChecked />
                <input className="radio" id="two" name="group" type="radio" />
                <input className="radio" id="three" name="group" type="radio" />

                <div className="tabs">
                    <label className="tab" id="one-tab" htmlFor="one">Lionel Messi</label>
                    <label className="tab" id="two-tab" htmlFor="two">Ronaldinho</label>
                    <label className="tab" id="three-tab" htmlFor="three">Neymar Jr.</label>
                </div>

                <div className="panels">
                    <div className="panel" id="one-panel">
                        <div className="panel-title">Career</div>
                        <ul className='career'>
                            <li>Grandoli (1992-1994)</li>
                            <li>Newell’s Old Boys (1994-2000)</li>
                            <li>FC Barcelona U14 (2000-2001)</li>
                            <li>FC Barcelona U16 (2001-2003)</li>
                            <li>FC Barcelona U19 and C (2003-2004)</li>
                            <li>FC Barcelona B (2004-2005)</li>
                            <li>FC Barcelona (2004-2021)</li>
                            <li>PSG (2021-2023)</li>
                            <li>Inter Miami (2023-...)</li>
                        </ul>
                        
                        <img src={messi} alt='messi'/>

                        <p className='panel-subtitle'>Summary</p>
                        <p>Lionel Andrés "Leo" Messi (born 24 June 1987) is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. Widely regarded as one of the greatest players of all time, Messi has won a record eight Ballon d'Or awards, a record six European Golden Shoes, and was named the world's best player for a record eight times by FIFA. Until leaving the club in 2021, he had spent his entire professional career with Barcelona, where he won a club-record 34 trophies, including ten La Liga titles, seven Copa del Rey titles, and the UEFA Champions League four times. With his country, he won the 2021 Copa América and the 2022 FIFA World Cup. A prolific goalscorer and creative playmaker, Messi holds the records for most goals in La Liga (474), most hat-tricks in La Liga (36) and the UEFA Champions League (eight), and most assists in La Liga (192) and the Copa América (17). </p>
                    </div>
                    <div className="panel" id="two-panel">
                        <div className="panel-title">Career</div>
                        <ul className="career">
                            <li>Gremio Inferior teams (1988-1998)</li>
                            <li> Gremio (1998-2000)</li>
                            <li> PSG (2001-2003)</li>
                            <li> FC Barcelona (2003-2008)</li>
                            <li> Milan (2008-2011)</li>
                            <li> Flamengo (2011-2012)</li>
                            <li> Atlético Mineiro (2012-2014)</li>
                            <li> Querétaro (2014-2015)</li>
                            <li> Fluminense (2015)</li>
                        </ul>
                        <img src={ronaldinho} alt='ronaldinho' />
                        <p className='panel-subtitle'>Summary</p>
                        <p>Ronaldo de Assis Moreira (born 21 March 1980), commonly known as Ronaldinho Gaúcho or simply Ronaldinho, is a Brazilian former professional footballer who played as an attacking midfielder or winger. Widely regarded as one of the greatest players of all time, he won two FIFA World Player of the Year awards and a Ballon d'Or. He is the only player ever to have won a World Cup, a Copa América, a Confederations Cup, a Champions League, a Copa Libertadores and a Ballon d'Or. A global icon of the sport, Ronaldinho was renowned for his technical skills, creativity, dribbling ability and accuracy from free-kicks, his use of tricks, feints, no-look passes and overhead kicks, as well as his ability to score and create goals, all prominent characteristics of his early-age background playing futsal. He is known by the nickname "O Bruxo" ("The Wizard").</p>
                    </div>
                    <div className="panel" id="three-panel">
                        <div className="panel-title">Career</div>
                        <ul className='career'>
                            <li>Tumiaru (1998-1999)</li>
                            <li>Asa Portguesa (1999-2000) </li>
                            <li>Gremetal (2000-2003) </li>
                            <li>Portuguesa Santista (2003-2004)</li>
                            <li>Santos Inferior teams (2004-2009)</li>
                            <li>Santos (2009-2013) </li>
                            <li>FC Barcelona (2013-2017)</li>
                            <li>PSG (2017-2023)</li>
                            <li>Al-Hilal (2023-...)</li>
                        </ul>
                        <img src={neymar} alt='neymar' />
                        <p className='panel-subtitle'>Summary</p>
                        <p>Neymar da Silva Santos Júnior (born 5 February 1992), also known as Neymar Júnior, is a Brazilian professional footballer who plays as a forward for Saudi Pro League club Al Hilal and the Brazil national team. Widely regarded as one of the greatest players of all time, he is renowned for his flamboyant style of play, passing abilities, and two-footedness. Neymar has scored at least 100 goals for three different clubs, being one of a few players to do so, and is the highest-scoring Brazilian player in Champions League history.</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default About;
