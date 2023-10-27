import { useForm } from "react-hook-form";


const image_hosting_token = import.meta.env.VITE_Image_Key;
const AddDoctor = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    
    const image_hosting_url = `https://api.imgbb.com/1/upload?&key=${image_hosting_token}`
    
    const onSubmit = (data, e) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);
    
        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imageResult => {
            if (imageResult.success) {
                const imgURL = imageResult.data.display_url;
                const { doctor_name, degree, specialist, chamber, video_link, old_price, new_price, doctor_description } = data;
                const newItem = { doctor_name, degree, specialist, chamber, video_link, old_price: parseFloat(old_price), new_price: parseFloat(new_price), doctor_description, image: imgURL };
                console.log(newItem);
    
                // Now that you have the image URL, you can send the form data to the server
                fetch('http://localhost:5000/postdoctor', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newItem)
                })
                .then(result => {
                    console.log(result);
                    reset();
                })
                .catch(error => {
                    console.log(error.message);
                });
            }
        });
    
        console.log(data);
    }
    

    return (
        <div className="  flex justify-center items-center mt-20 md:mt-20 lg:mt-0">
            <div className=" p-6 md:p-12  rounded-lg shadow-xl">
                <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-[#74d1c6] text-center mb-6">
                    Add Doctor's Information
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-[#74d1c6] text-sm font-bold mb-2">Doctor's Name</label>
                        <input
                            className="w-full text-gray-700 font-semibold h-10 pl-3 rounded border border-[#74d1c6] focus:ring focus:ring-[#74d1c6] focus:ring-opacity-50 bg-transparent "
                            type="text"
                            placeholder="Enter doctor's name"
                            {...register("doctor_name", { required: true })}
                        />
                        {errors.doctor_name && (
                            <span className="text-red-600">This field is required</span>
                        )}
                    </div>
                    <div className="lg:col-span-2">
                        <label className="block text-[#74d1c6] text-sm font-bold mb-2">Image</label>
                        <input
                            type="file"
                            accept="image/*"
                            {...register("image")}
                            className="w-full text-gray760 font-semibold0 border border-[#74d1c6] rounded py-2 px-3 focus:ring focus:ring-[#74d1c6] focus:ring-opacity-50 bg-transparent "
                        />
                    </div>
                    <div>
                        <label className="block text-[#74d1c6] text-sm font-bold mb-2">Degree</label>
                        <input
                            className="w-full text-gray-700 font-semibold h-10 pl-3 rounded border border-[#74d1c6] focus:ring focus:ring-[#74d1c6] focus:ring-opacity-50 bg-transparent "
                            type="text"
                            placeholder="Enter degree"
                            {...register("degree", { required: true })}
                        />
                        {errors.degree && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div>
                        <label className="block text-[#74d1c6] text-sm font-bold mb-2">Specialist</label>
                        <input
                            className="w-full text-gray-700 font-semibold h-10 pl-3 rounded border border-[#74d1c6] focus:ring focus:ring-[#74d1c6] focus:ring-opacity-50 bg-transparent "
                            type="text"
                            placeholder="Enter specialist"
                            {...register("specialist", { required: true })}
                        />
                        {errors.specialist && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div>
                        <label className="block text-[#74d1c6] text-sm font-bold mb-2">Chamber</label>
                        <input
                            className="w-full text-gray-700 font-semibold h-10 pl-3 rounded border border-[#74d1c6] focus:ring focus:ring-[#74d1c6] focus:ring-opacity-50 bg-transparent "
                            type="text"
                            placeholder="Enter chamber"
                            {...register("chamber", { required: true })}
                        />
                        {errors.chamber && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div>
                        <label className="block text-[#74d1c6] text-sm font-bold mb-2">Video Link</label>
                        <input
                            className="w-full text-gray-700 font-semibold h-10 pl-3 rounded border border-[#74d1c6] focus:ring focus:ring-[#74d1c6] focus:ring-opacity-50 bg-transparent "
                            type="text"
                            placeholder="Enter video link"
                            {...register("video_link")}
                        />
                    </div>
                    <div>
                        <label className="block text-[#74d1c6] text-sm font-bold mb-2">New Price</label>
                        <input
                            className="w-full text-gray-700 font-semibold h-10 pl-3 rounded border border-[#74d1c6] focus:ring focus:ring-[#74d1c6] focus:ring-opacity-50 bg-transparent "
                            type="text"
                            placeholder="Enter New Price"
                            {...register("new_price")}
                        />
                    </div>
                    <div>
                        <label className="block text-[#74d1c6] text-sm font-bold mb-2">Old Price</label>
                        <input
                            className="w-full text-gray-700 font-semibold h-10 pl-3 rounded border border-[#74d1c6] focus:ring focus:ring-[#74d1c6] focus:ring-opacity-50 bg-transparent "
                            type="text"
                            placeholder="Enter Old Price"
                            {...register("old_price")}
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <label className="block text-[#74d1c6] text-sm font-bold mb-2">Description</label>
                        <textarea
                            className="w-full  text-gray-700 font-semibold h-32 p-3 rounded border border-[#74d1c6] focus:ring focus:ring-[#74d1c6] focus:ring-opacity-50 bg-transparent "
                            type="text"
                            placeholder="Description.."
                            {...register("doctor_description")}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-32 lg:fixed bottom-10 right-10 bg-gradient-to-r from-[#74d1c6] to-[#e74e84] hover:from-[#74d1c6] hover:to-[#74d1c6] duration-500 text-white font-bold py-2 px-4 mt-4 rounded-full cursor-pointer active:scale-95 transform transition-transform"
                    >
                        ADD
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;
