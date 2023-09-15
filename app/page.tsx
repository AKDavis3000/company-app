import Image from 'next/image';
import './scss/styles.scss';
import Shopping from './Components/Shopping';

export default function Home() {
  return (
    <main className="home_main">
      <div className="trends">
        <p className="trends_p1">Trends</p>
        <div className="trends_img_p">
          <Image
            src="/images/chic-modern.jpg"
            alt="a blue and gold couch"
            width={350}
            height={200}
            className="home_img"
          />

          <p className="trends_p2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nulla
            est non minima. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quam nulla est non minima.
            <button className="learn_more">Learn More</button>
          </p>
        </div>
      </div>
      <Shopping />

      <div className="design">
        <p className="design_p1">Design</p>
        <div className="design_img_p">
          <Image
            src="/images/meeting2.jpg"
            alt="four people having a meeting"
            width={350}
            height={200}
            className="home_img"
          />

          <p className="design_p2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam nulla
            est non minima. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quam nulla est non minima.
            <button className="learn_more">Learn More</button>
          </p>
        </div>
      </div>
    </main>
  );
}
