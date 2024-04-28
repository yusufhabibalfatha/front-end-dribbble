import freeJPG from './free.jpg'
import premiumJPG from './premium.jpg'

const Signup = () => {
    return (
        <main className="h-screen">
            <div className="artboard phone-1 m-auto flex flex-col justify-between overflow-hidden bg-[#dad8d9] text-[#4b566a]">
                {/* free */}
                <div className="group h-full">
                    <h2 className="group pt-4 text-center font-bold uppercase transition-all group-hover:bg-[#c3c2c3]">
                        Signup
                    </h2>
                    <div className="flex h-full flex-col items-center justify-center gap-2 transition-all hover:cursor-pointer group-hover:bg-[#c3c2c3]">
                        <div className="avatar">
                            <div className="w-20 rounded-full">
                                <img src={freeJPG} />
                            </div>
                        </div>
                        <h3 className="text-sm font-bold">FREE ACCOUNT</h3>
                        <p className="text-xs">
                            Limited feature, slow upload speed
                        </p>
                    </div>
                </div>

                {/* premium */}
                <div className="flex h-full flex-col items-center justify-center gap-2 bg-[#4b566a] text-[#dad8d9] transition-all hover:cursor-pointer hover:bg-[#414a5b]">
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <img src={premiumJPG} />
                        </div>
                    </div>
                    <h3 className="text-sm font-bold">PREMIUM ACCOUNT</h3>
                    <p className="text-xs">
                        Full feature, super fast upload speed
                    </p>
                </div>
            </div>
        </main>
    )
}
export default Signup
