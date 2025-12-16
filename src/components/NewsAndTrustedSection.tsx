import TrustedBy from './TrustedBy';
import blueWhiteBg from '@/assets/blue-white-bg.png';

export default function NewsAndTrustedSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat pt-36 lg:pt-44"
      style={{ backgroundImage: `url(${blueWhiteBg})` }}
    >
      <div className="relative">
        <TrustedBy />
      </div>
    </section>
  );
}
