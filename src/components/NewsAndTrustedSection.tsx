import NewsCarousel from './NewsCarousel';
import TrustedBy from './TrustedBy';
import blueWhiteBg from '@/assets/blue-white-bg.png';

export default function NewsAndTrustedSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${blueWhiteBg})` }}
    >
      <div className="relative">
        <NewsCarousel />
        <TrustedBy />
      </div>
    </section>
  );
}
