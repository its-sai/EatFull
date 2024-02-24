import delivery from '../assets/delivery.jpg'
import landing from '../assets/landing.png'
import download from '../assets/appDownload.png'

const HomePage= ()=>{
    return(
         <div className="flex flex-col gap-12">
           <div className="bg-white rounded-lg shadow-md p-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Food you crave on your fingertips
            </h1>
            <span className="text-xl">Just a click away!</span>
           </div>
           <div className="grid md:grid-cols-2 gap-4 p-5 rounded-lg shadow-md">
                <img src={delivery} className='rounded-lg object-cover h-full w-full'/>
                 <div className='flex flex-col items-center  gap-4 '>
                    <h1 className='text-4xl font-bold tracking-tight mt-8 text-orange-600 gap-12 text-center'>Your Food Delivery Partner</h1>
                    <span className='xl tracking-tight mt-2'>Our job is to filing your tummy with delicious food and with fast and free delivery</span>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 bg-grey-600">
                            {/* First Card */}
                        <div className="bg-white-900 p-6 rounded-lg shadow-md shadow-orange mt-8 gap-4">
                            <h2 className="text-xl font-bold text-black-600 mb-4">Easy to order</h2>
                            <p className="text-gray-700">You only need a few steps in ordering food</p>
                        </div>

                        {/* Second Card */}
                        <div className="mt-8 bg-white-900 p-6 rounded-lg shadow-md shadow-orange">
                            <h2 className="text-xl font-bold text-black-600 mb-4">Fastest Delivery</h2>
                            <p className="text-gray-700">Delivery that is always on time</p>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded-full focus:outline-none focus:shadow-outline">
                                Learn More
                            </button>
                        </div>

                        {/* Third Card */}
                        <div className="mt-8 bg-white-900 p-6 rounded-lg shadow-md shadow-orange">
                            <h2 className="text-xl font-bold text-black-600 mb-4">Best Quality </h2>
                            <p className="text-gray-700">Quality matters the most to us</p>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded-full focus:outline-none focus:shadow-outline">
                                Learn More
                            </button>
                        </div>
                    </div>
                 </div>      
           </div>
                      
                    <div className='grid md:grid-cols-2 gap-5 mt-8'>
                        <img src={landing}/>
                        <div className='flex flex-col items-center justify-center gap-4 text-center'>
                             <span className='font-bold text-3xl tracking-tighter'>
                                Order takeaway even faster!
                             </span>
                             <span>
                                Download the EatFull app for better experience
                             </span>
                             <img src={download}/>
                        </div>

                    </div>

                     

         </div>
    )
}

export default HomePage;
