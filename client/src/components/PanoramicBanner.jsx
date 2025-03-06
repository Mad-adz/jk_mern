import PropTypes from "prop-types";

const PanoramicBanner = ({ bgImg, title, description }) => {
  return (
    <section className="h-60 mt-[6rem]">
      <div
        className="h-full bg-cover bg-left lg:bg-center flex items-center"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="container">
          <div className="flex justify-center items-center h-full w-full">
            <div className="flex flex-col items-center gap-4 text-center text-white text-3xl font-bold">
              <span className="w-full text-center">{title}</span>
              <span className="w-full text-center">{description}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PanoramicBanner.propTypes = {
  bgImg: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PanoramicBanner;
