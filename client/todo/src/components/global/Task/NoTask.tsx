import BagImage from "@/assets/bag.png";
const NoTask = () => {
  return (
    <div className=" flex justify-center flex-col items-center">
      <div className=" h-44">
        <img
          src={BagImage}
          alt="bag_image"
          className="object-contain w-full h-full"
        />
      </div>
      <h5 className="font-semibold text-md">Have a marvelous day off, Ajay!</h5>
      <div className="text-center text-sm text-gray-500 mt-1">
        Schedule days off in the new Task button <br />
        <span>of your top right side.</span>
      </div>
    </div>
  );
};

export default NoTask;
