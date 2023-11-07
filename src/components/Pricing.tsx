import { useState } from "react"
import { Checbox } from "./Checbox";

interface Values {
    value: string;
    pageViews: string;
}


export const Pricing = () => {
    const valores: Values[] = [
        {
            value: '8',
            pageViews: '10k'
        },
        {
            value: '12',
            pageViews: '50k'
        },
        {
            value: '16',
            pageViews: '100k'
        },
        {
            value: '20',
            pageViews: '500k'
        },
        {
            value: '24',
            pageViews: '1M'
        }
    ]
    
    const [valRange, setValRange] = useState(3)
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValRange(parseInt(e.target.value))
    }
 
    return (
        <div className="h-[650px] md:w-[600px] place-items-center">
            {/* Header */}
            <section className="flex flex-col text-center space-y-3 mb-7">
                <h1 className="text-xl text-DarkDesaturatedBlue font-bold md:text-3xl">Simple, traffic-based pricing</h1>
                <div className="flex flex-col text-GrayishBlue text-sm space-y-2 md:flex-row md:items-baseline md:justify-center">
                    <p className="">Sign-up for our 30-day trial.</p>
                    <p className="md:ml-1">No credit card required</p>
                </div>
            </section>

            {/* Body  */}
            <section className="bg-white border-1 mx-0 py-6 rounded-lg md:py-0">
                {/* spinner */}
                <article className="flex flex-col space-y-6 text-center py-6 px-6 border-b-2 md:grid md:grid-rows-3 md:grid-cols-2 md:space-y-0 ">
                    <div>
                        <p className="uppercase -tracking-tighter text-GrayishBlue order-1 md:row-start-1 md:col-sart-1  md:my-6">{valores[valRange - 1].pageViews} PageViews</p>
                    </div>
                    <div className="w-full md:row-start-2 md:col-start-1 md:col-end-3 md:place-self-center">
                        <input
                            className="w-full  appearance-none bg-StrongCyan accent-LightGrayishBlue-empty rounded outline-none h-4 order-2 md:block"
                            type="range"
                            name="rangepricing"
                            id="rangepricing"
                            min="1"
                            max="5"
                            step={1}
                            value={valRange}
                            onChange={handleChange}
                        // onMouseDown={handleChange}
                        />
                    </div>
                    <div className="flex flex-row justify-center items-center text-GrayishBlue text-sm order-3 md:row-start-1 md:col-start-2  md:my-6">
                        <p className="text-3xl text-DarkDesaturatedBlue font-bold">${!isChecked ? valores[valRange - 1].value : parseInt(valores[valRange - 1].value) * 0.75}.00</p>
                        <p className="ml-2">/ month</p>
                    </div>
                    <div className="flex place-content-center justify-between order-4 text-xs md:row-start-3 md:col-start-1 md:col-end-3 md:justify-end md:space-x-4 md:items-center md:text-sm">
                        <p className="text-GrayishBlue ">Monthly Billing</p>
                        <Checbox 
                            checked = {isChecked}
                            setChecked = {setIsChecked}
                        />
                        <p className="text-GrayishBlue ">Yearly Billing</p>
                        <strong className="px-[8px] border-0  bg-LightRed bg-opacity-25 text-LightRed rounded-2xl">-25%</strong>
                    </div>
                </article>

                {/* options */}
                <article className="flex flex-col text-center place-content-center space-y-5 py-6 md:flex-row md:justify-between">
                    <div className="space-y-5 text-DarkDesaturatedBlue text-sm font-semibold md:w-1/2 md:pl-6">
                        <div className="flex place-content-center items-center space-x-5 md:place-content-start">
                            <img className="w-3 h-3" src="./images/icon-check.svg" alt="" />
                            <p>Unlimited websites</p>
                        </div>
                        <div className="flex place-content-center items-center space-x-5 md:place-content-start">
                            <img className="w-3 h-3" src="./images/icon-check.svg" alt="" />
                            <p>100% data ownership</p>
                        </div>
                        <div className="flex place-content-center items-center space-x-5 md:place-content-start">
                            <img className="w-3 h-3" src="./images/icon-check.svg" alt="" />
                            <p>Email reports</p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <button className="text-white bg-DarkDesaturatedBlue w-1/2 mx-auto px-4 py-2 border-none rounded-[50px] md:w-3/4 md:px-4 md:py-2" >Start my trial</button>
                    </div>
                </article>
            </section>
        </div>
    )
}
