import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "../../redux/slice/images.slice";

const Home = () => {
  const dispatch = useDispatch()
  const res = useSelector(state => state)
  const {imagesSlice} = res
  const onSubmit = (e)=>{
    e.preventDefault();
    const url = e.target[0].value;
    dispatch(addImage(url))
  }
  return (
    <>
      <div className="flex justify-center items-center bg-amber-50 min-h-screen">
        <div className="flex flex-col gap-y-6 w-1/2">
          <h1 className="text-6xl font-bold text-violet-600">Pase Image URL</h1>
          <div>
            <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
              <input
                required
                type="url"
                className="border border-violet-600 rounded-lg w-full p-3"
                placeholder="http://localhost:3000/"
              />
              <div className="flex items-center gap-x-6">
                <button className="bg-violet-600 text-white rounded px-6 py-2.5">Submit</button>
                <Link to={"/images"} className="font-semibold text-gray-500">View</Link>
              </div>
              <div className="grid grid-cols-3 p-4 gap-6">
                {
                  imagesSlice.map((item,i) => <img src={item} key={i} alt="images" />)
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
