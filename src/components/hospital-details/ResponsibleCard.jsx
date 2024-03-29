import { Profile } from "../../assets";

const ResponsibleCard = ({ firstName, lastName, profileImage, phone }) => {
  return (
    <div className="flex justify-center">
      <div className="text-center bg-glass p-5 rounded transition-all">
        <div
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          style={{
            backgroundImage: `url('${profileImage || Profile}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
          <p>{`${firstName} ${lastName}`}</p>
        </h3>
        <p>Responsible</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default ResponsibleCard;
