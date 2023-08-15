import Image from "../ui/Image";
import { Link } from "react-router-dom";
import { FooterLinkProps } from "../../lib/models";
import useFetch from "../../hooks/useFetch";
import LinkSkeleton from "../ui/LinkSkeleton";

function Footer() {
  const { isLoading, data: links } = useFetch<FooterLinkProps>("http://localhost:8080/footer");

  return (
    <footer className=" w-full bg-green-1 text-white lg:px-20 sm:p-10 sm:pb-0 p-5">
      <section className=" w-full grid lg:grid-cols-[1fr_2fr_1fr] gap-6 mb-10">
        <div className=" w-32 aspect-video">
          <Image src="/assets/footer-logo.svg" />
        </div>
        <div className=" grid grid-cols-2 gap-6">
          <div>
            <div className=" mb-6">
              <h2 className=" font-semibold text-xl">ԱՐՏԱԴՐԱՆՔ</h2>
            </div>
            <ul className=" ml-4 flex items-start flex-col list-disc">
              {isLoading
                ? [...Array(5).keys()]?.map((index: number) => <LinkSkeleton key={index} />)
                : links?.products?.map((link, index: number) => (
                    <li key={index}>
                      <Link to={link?.path} className=" text-sm font-semibold">
                        {link?.pathname}
                      </Link>
                    </li>
                  ))}
            </ul>
          </div>
          <div>
            <div className=" mb-6">
              <h2 className=" font-semibold text-xl">ԿԱՊ ՄԵԶ ՀԵՏ</h2>
            </div>
            <div className=" flex items-start flex-col gap-2 text-sm">
              <div className=" flex items-center gap-2">
                <Image src="/assets/phone.svg" />
                <span>Զանգահարեք մեզ: +374 90 000 000</span>
              </div>
              <div className=" flex items-center gap-2">
                <Image src="/assets/inbox.svg" />
                <span>Էլ հասցե: @mail.ru</span>
              </div>
              <div className=" flex items-center gap-2">
                <Image src="/assets/location.svg" />
                <span>Երևան</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center flex-col text-center">
          <div className=" mb-6">
            <h2 className=" font-semibold text-xl">ՓՆՏՐԵՔ ՄԵԶ։</h2>
          </div>
          <div className=" flex items-center gap-4">
            <Link to="">
              <Image src="/assets/instagram.svg" />
            </Link>
            <Link to="">
              <Image src="/assets/twitter.svg" />
            </Link>
            <Link to="">
              <Image src="/assets/facebook.svg" />
            </Link>
          </div>
        </div>
      </section>
      <section className=" w-full text-center py-4">
        <p>By ArmCoding - © 2022 Բոլոր իրավունքները պաշտպանված են</p>
      </section>
    </footer>
  );
}

export default Footer;
