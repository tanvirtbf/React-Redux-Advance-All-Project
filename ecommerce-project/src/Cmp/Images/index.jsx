import { useDispatch, useSelector } from "react-redux";
import { removeImage } from "../../redux/slice/images.slice";

const Images = () => {
  const {imagesSlice} = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="flex flex-wrap gap-6 bg-[#FFFBEB] min-h-screen">
      {imagesSlice.map((item,i) => <img onClick={()=> dispatch(removeImage(i))} key={i} src={item} alt="images" className="w-1/4 h-full"/>)}
    </div>
  );
};

export default Images;