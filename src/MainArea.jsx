import './MainArea.css';
import barce from './images/barca.jpeg';
import arsenal from './images/arsenal.jpeg';
import man from './images/manchester.jpeg';


function MainArea() {
    return (
        <div className="cards">
            <div className="card">
                <span className="card__title"> <p className='heading'>FC Barcelona</p></span>
                <img src={barce} height="200" width="200" alt="FC barcelona logo" className="card__image" />
                <p>Founded by Hans Gamper in 1899. Its stadium (Camp Nou) was built in 1957. The uniform has blue and red stripes. FCB have won 20 Spanish Leagues, 3 UCL and 1 FIFA Club World Cup. Popularly known as "Barça". Its fans (culers) are spread worldwide. Some of the best players of all times have played for Barça: Zamora, Samitier, Ramallets, Suárez, César, Kubala, Migueli, Schuster, Maradona, Cruyff, Rexach, Guardiola, Ronaldo, Romário, Stoichkov, Laudrup, Rivaldo, Ronaldinho, Messi, Xavi, Iniesta, Puyol and many more.</p>
                <a href="https://www.fcbarcelona.com/en/" className="card__link">Get More in Official site</a>
            </div>
            <div className="card">
                <span className="card__title"><p className='heading'>Manchester United F.C.</p></span>
                <img src={man} height="200" width="200" alt="manchester united logo" className="card__image" />
                <p>Manchester United is one of the most prestigious football clubs and has always maintained a distinguished tradition, a record of consistent success, and a great history. They are together with Liverpool, England's most successful football clubs ever. "The Red Devils" have more national titles than Liverpool, but the rival has collected more titles in international tournaments.</p>
                <a href="https://www.manutd.com/" className="card__link">Get More in Official site</a>
            </div>
            <div className="card">
                <span className="card__title"><p className='heading'>Arsenal F.C.</p></span>
                <img src={arsenal} alt="FC Arsenal logo" height="200" width="200" className="card__image" />
                <p>The club was founded in 1886 and took the name Royal Arsenal after its first game, combining the moniker of the Royal Oak pub, where the team members met, with that of their workplace, the Arsenal munitions factory in Woolwich. The name was changed to Woolwich Arsenal in 1891, and Woolwich was dropped from the name after the 1912–13 season, when the team moved its home stadium to the Highbury section of the London borough of Islington. The club played at Arsenal Stadium (commonly referred to as “Highbury”) until 2006, when it relocated to a new, 60,000-seat stadium in Islington’s Holloway district. Cricket bat and ball. cricket sport of cricket.Homepage blog 2011, arts and entertainment, history and society, sports and games athletics
                </p>
                <a href="https://www.arsenal.com/" className="card__link">Get More in Official site</a>
            </div>
        </div>
    );
}

export default MainArea;