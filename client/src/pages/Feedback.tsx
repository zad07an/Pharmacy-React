import { memo } from "react";
import Paragraph from "../components/ui/Paragraph";
import Image from "../components/ui/Image";
import Subtitle from "../components/ui/Subtitle";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import feedbackWrapper from "../HOC/feedbackWrapper";
import Modal from "../components/modals/Modal";
import { successContent } from "../components/modals/ModalContents";

const Feedback = feedbackWrapper(({ handleOpenModal, isModalOpen, handleCloseModal }) => (
  <>
    <Modal
      title="ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ"
      description="ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿԱՊ ԿՀԱՍՏԱՏԻ ՁԵԶ ՀԵՏ"
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      body={successContent}
    />
    <Container className=" lg:px-20 md:px-10 px-5 pb-20 pt-10">
      <section className=" w-full h-fit grid lg:grid-cols-2 lg:p-0 pt-10 lg:gap-0 gap-10 items-start lg:mt-20 mt-10">
        <div className=" flex items-center flex-col md:gap-0 gap-10">
          <Paragraph className=" xxs:mb-0 mb-10">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum' will uncover many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </Paragraph>
          <div className=" w-fit flex items-center justify-center relative">
            <Image src="/assets/map.png" />
            <div className=" absolute sm:w-64 w-44 aspect-square bottom-8 left-4 -z-10">
              <Image src="/assets/Ellipse 1.svg" className=" rotate-90" />
            </div>
          </div>
        </div>
        <div className=" flex items-center flex-col gap-6 sm:px-24">
          <Subtitle>ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</Subtitle>
          <form action="" className=" w-full flex items-center flex-col gap-6">
            <input
              type="text"
              className=" w-full sm:px-10 px-5 h-20 rounded-xl bg-gray-1"
              placeholder="Անուն"
            />
            <input
              type="text"
              className=" w-full sm:px-10 px-5 h-20 rounded-xl bg-gray-1"
              placeholder="Էլ․հասցե"
            />
            <textarea
              name=""
              id=""
              rows={5}
              placeholder="Հաղորդագրություն"
              className=" w-full resize-none rounded-xl bg-gray-1 sm:px-10 px-5 py-10"
            ></textarea>
            <div className=" w-full flex items-center justify-start">
              <Button type="button" onClick={handleOpenModal}>
                ՈՒՂԱՐԿԵԼ
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Container>
  </>
));

export default memo(Feedback);
