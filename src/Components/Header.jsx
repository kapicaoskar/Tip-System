export default (props) => {
    return (
        <>
        <div id="container-backPfp" className="max-w-[602px] h-[153px] rounded-lg absolute inset-x-0 top-7 flex justify-center	 m-auto bg-slate-800 ">
        <div id="container-circlePfp" className="w-[100px] h-[100px] rounded-full absolute inset-x-0 top-20 flex justify-center	 m-auto bg-slate-800 mt-5 border-2 	">
        <img src={props.logo}  className="w-4/4 h-4/4 rounded-full absolute inset-x-0 flex justify-center" alt="logo" />
        </div>
    </div> 
    
    <div id="container-shopName" className="w-[482px]  h-[68px] rounded-lg absolute top-1/3 flex justify-center m-auto mt-[-45px]  bg-slate-800 ">
    <p className=" text-white	 Inter font-bold  inset-0 top-4 flex justify-center m-auto text-3xl	" id='serviceNamer'>{props.serviceName}</p>
    </div>
    </>
    )
}