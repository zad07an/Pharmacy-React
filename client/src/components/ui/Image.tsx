import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
  src: string | undefined;
  alt?: string;
  className?: string;
}

function Image({ src, alt, className }: Props) {
  return <LazyLoadImage src={src} effect="blur" alt={alt || ""} className={className || ""} />;
}

export default Image;
