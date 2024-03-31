const LoadScreen: React.FC = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center" >
            <div className="flex flex-col justify-center" >
                <span className="loading loading-ring loading-lg mx-5 mb-5"></span>
                <div className="waviy">
                    <span className="i1" >L</span>
                    <span className="i2">o</span>
                    <span className="i3">a</span>
                    <span className="i4">d</span>
                    <span className="i5">i</span>
                    <span className="i6">n</span>
                    <span className="i7">g</span>
                    <span className="i8">.</span>
                    <span className="i9">.</span>
                    <span className="i10">.</span>
                </div>
            </div>
        </div>
    )
}

export default LoadScreen;