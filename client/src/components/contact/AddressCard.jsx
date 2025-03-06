const AddressCard = ({
  title,
  place,
  line1,
  line2,
  district,
  state,
  isAddress,
  email,
  mobile,
  description,
}) => {
  return (
    <div>
      <div className="overflow-hidden before:ease-in-out after:ease-in-out bg-emerald-50 group cursor-pointer relative flex flex-col gap-4 justify-between rounded-2xl border hover:after:w-full border-white-222 hover:border-emerald-600 duration-300 p-4 md:p-6 px-8 before:h-full before:w-2 hover:before:w-full after:absolute after:top-0 after:left-0 after:h-full after:w-0 after:duration-300 after:opacity-5  before:duration-300 before:-z-1 before:bg-emerald-600 before:absolute before:top-0 before:left-0">
        <h4 className="font-medium text-lg duration-300 group-hover:text-white group-hover:z-[5]">
          {title}
        </h4>
        {isAddress ? (
          <div className="text-md duration-300 group-hover:text-white group-hover:z-[5]">
            <p className="duration-300 group-hover:text-white">
              <span className="font-medium">{place}</span>
              <br />
              {line1 && <span>{line1}</span>}
              <br />
              {line2 && <span>{line2}</span>}
              <br />
              {district}
              <br />
              {state}
            </p>
          </div>
        ) : (
          <div className="text-md duration-300 group-hover:text-white group-hover:z-[5]">
            <div className="flex flex-col gap-2 items-center mb-2">
              {email && (
                <>
                  <div>
                    <span className="font-medium">{email.label} : </span>
                    <a
                      href={`mailto:${email.value}`}
                      className="group-hover:text-white hover:underline"
                    >
                      {email.value}
                    </a>
                  </div>
                </>
              )}
              {mobile && (
                <>
                  <div>
                    <span className="font-medium">{mobile.label} : </span>
                    <a
                      href={`tel:${mobile.value}`}
                      className="group-hover:text-white hover:underline"
                    >
                      {mobile.value}
                    </a>
                  </div>
                </>
              )}
            </div>
            <div className="duration-300 group-hover:text-white mt-5">
              {description?.map((desc, index) => (
                <p key={index} className="mb-2">
                  <span className="font-medium">{desc.label} : </span>{" "}
                  {desc.value}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressCard;