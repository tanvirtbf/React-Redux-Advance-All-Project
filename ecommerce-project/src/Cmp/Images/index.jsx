import { useSelector } from "react-redux";

const Images = () => {
  const {imagesSlice} = useSelector(state => state)
  return (
    <div className="flex flex-wrap gap-6 bg-[#FFFBEB] min-h-screen">
      {imagesSlice.map((item,i) => <img key={i} src={item} alt="images" className="w-1/4 h-full"/>)}
    </div>
  );
};

export default Images;