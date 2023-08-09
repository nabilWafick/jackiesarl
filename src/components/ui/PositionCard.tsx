type Pops = {
  image: string;
  positionName: string;
  alt: string;
};

function PositionCard(props: Pops) {
  return (
    <div>
      <div className="h-[180px] w-[170px] mx-4 my-5 shadow-lg flex flex-col rounded-xl content-evenly justify-evenly items-center">
        <img
          className="h-[120px] w-[120px] object-contain "
          src={props.image}
          alt={props.alt}
        />
        <h3 className=" text-lg text-gray-300 text-center">
          {props.positionName}
        </h3>
      </div>
    </div>
  );
}

export default PositionCard;
