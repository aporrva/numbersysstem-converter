
import data from "./converter.json";
import { useState } from "react";
import Contact from "../contact-footer/Contact";

export default function Converter() {
    const [inputNumber, setInputNumber] = useState("");
    const [result, setResult] = useState("Output will be displaye here..");
    const [fromBase, setFromBase] = useState("Decimal (Base 10)");
    const [toBase, setToBase] = useState("Binary (Base 2)");
    const [customFromBase, setCustomFromBase] = useState("");
    const [customToBase, setCustomToBase] = useState("");

    // Conversion Handler
    const handleConvert = (number: string) => {
        try {
            // detect source base
            let baseFrom = 10;
            if (fromBase.includes("Binary")) baseFrom = 2;
            if (fromBase.includes("Octal")) baseFrom = 8;
            if (fromBase.includes("Decimal")) baseFrom = 10;
            if (fromBase.includes("Hexadecimal")) baseFrom = 16;
            if (fromBase.includes("Custom")) baseFrom = parseInt(customFromBase, 10);

            // detect target base
            let baseTo = 10;
            if (toBase.includes("Binary")) baseTo = 2;
            if (toBase.includes("Octal")) baseTo = 8;
            if (toBase.includes("Decimal")) baseTo = 10;
            if (toBase.includes("Hexadecimal")) baseTo = 16;
            if (toBase.includes("Custom")) baseTo = parseInt(customToBase, 10);

            // convert: parse input → decimal → target base
            const decimalValue = parseInt(number, baseFrom);
            if (isNaN(decimalValue)) {
                setResult("Invalid Input");
                return;
            }

            const converted = decimalValue.toString(baseTo).toUpperCase();
            setResult(converted);
        } catch (err) {
            setResult("Error");
        }
    };

    // input validator based on fromBase
    const validateInput = (value:any) => {
        let baseFrom = 10;
        if (fromBase.includes("Binary")) baseFrom = 2;
        if (fromBase.includes("Octal")) baseFrom = 8;
        if (fromBase.includes("Decimal")) baseFrom = 10;
        if (fromBase.includes("Hexadecimal")) baseFrom = 16;
        if (fromBase.includes("Custom")) baseFrom = parseInt(customFromBase, 10);

        if (!baseFrom || baseFrom < 2 || baseFrom > 36) return false;

        let regex;
        if (baseFrom >= 2 && baseFrom <= 10) {
            regex = new RegExp(`^[0-${baseFrom - 1}]*$`);
        } else {
            const limitChar = String.fromCharCode(55 + baseFrom - 10); // A=10
            regex = new RegExp(`^[0-9A-${limitChar}]*$`, "i");
        }
        return regex.test(value);
    };

    return (
        <div className="w-full bg-gradient-to-b from-white to-blue-50 text-center pb-[50px] font-sans">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
                <div className="font-bold text-lg">{data.app.name}</div>
                <div className="flex gap-6">
                    {data.app.navbar.map((item,idk) => (
                        <a href={item.href} key={idk} className="hover:text-blue-600">
                            {item.name}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Header */}
            <header className="mt-10">
                <h1 className="text-4xl font-bold pt-[30px] pb-[20px]">
                    {data.app.title.split(" ").slice(0, 2).join(" ")}{" "}
                    <span className="text-blue-600">
                        {data.app.title.split(" ").slice(2).join(" ")}
                    </span>
                </h1>
                <p className="mt-2 text-gray-600">{data.app.subtitle}</p>
            </header>

            {/* Input Section */}
            <div className="bg-white rounded-2xl shadow-md mb-10 p-4 mt-10 max-w-2xl mx-auto">
                <div className="text-left">
                    <h2 className="font-semibold mb-4">{data.form.inputSection.title}</h2>
                    <div className="grid grid-cols-2 gap-6 mb-4">
                        {/* From Base */}
                        <div>
                            <label className="block mb-1">
                                {data.form.inputSection.fields.fromBase.label}
                            </label>
                            <select
                                className="w-full border rounded p-2"
                                value={fromBase}
                                onChange={(e) => {
                                    setFromBase(e.target.value);
                                    setResult("");
                                }}
                            >
                                <option>Binary (Base 2)</option>
                                <option>Octal (Base 8)</option>
                                <option>Decimal (Base 10)</option>
                                <option>Hexadecimal (Base 16)</option>
                                <option>Custom</option>
                            </select>
                            {fromBase.includes("Custom") && (
                                <input
                                    type="number"
                                    min="2"
                                    max="36"
                                    value={customFromBase}
                                    onChange={(e) => {
                                        let val = parseInt(e.target.value, 10);
                                        if (isNaN(val)) setCustomFromBase("");
                                        else if (val < 2) setCustomFromBase("2");
                                        else if (val > 36) setCustomFromBase("36");
                                        else setCustomFromBase(val.toString());
                                        setResult("");
                                    }}
                                    placeholder="Enter base (2-36)"
                                    className="w-full mt-2 border rounded p-2"
                                />
                            )}
                        </div>

                        {/* To Base */}
                        <div>
                            <label className="block mb-1">
                                {data.form.outputSection.fields.toBase.label}
                            </label>
                            <select
                                className="w-full border rounded p-2"
                                value={toBase}
                                onChange={(e) => {
                                    setToBase(e.target.value);
                                    setResult("");
                                }}
                            >
                                <option>Binary (Base 2)</option>
                                <option>Octal (Base 8)</option>
                                <option>Decimal (Base 10)</option>
                                <option>Hexadecimal (Base 16)</option>
                                <option>Custom</option>
                            </select>
                            {toBase.includes("Custom") && (
                                <input
                                    type="number"
                                    min="2"
                                    max="36"
                                    value={customToBase}
                                    onChange={(e) => {
                                        let val = parseInt(e.target.value, 10);
                                        if (isNaN(val)) setCustomToBase("");
                                        else if (val < 2) setCustomToBase("2");
                                        else if (val > 36) setCustomToBase("36");
                                        else setCustomToBase(val.toString());
                                        setResult("");
                                    }}
                                    placeholder="Enter base (2-36)"
                                    className="w-full mt-2 border rounded p-2"
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Number Input */}
                <div className="mt-[10px]">
                    <label className="block mb-2 text-[30px] font-bold text-blue-600">
                        {data.form.inputSection.fields.enterNumber.label}
                    </label>
                    <input
                        type="text"
                        value={inputNumber}
                        onChange={(e) => {
                            if (validateInput(e.target.value)) {
                                setInputNumber(e.target.value.toUpperCase());
                                handleConvert(e.target.value.toUpperCase())
                            }
                        }}
                        placeholder={data.form.inputSection.fields.enterNumber.placeholder}
                        className="w-full rounded p-4 text-center text-[20px] border-2 border-blue-300 focus:border-blue-600 focus:ring focus:ring-blue-100 transition"
                    />
                </div>

                {/* Convert Button */}
                {/* <button
          onClick={handleConvert}
          className="bg-purple-600 mt-[10px] hover:bg-purple-700 text-white px-4 py-2 rounded-md shadow-md"
        >
          {data.form.inputSection.button.text}
        </button> */}

                {/* Output Section */}
                <div className="gap-4 mt-4 mb-8">
                    <div>
                        <label className="block mb-1">
                            {/* {data.form.outputSection.fields.convertedNumber.label} */}
                        </label>
                        {/* <input
              type="text"
              readOnly
              value={result}
              placeholder={
                data.form.outputSection.fields.convertedNumber.placeholder
              }
              className="w-full rounded p-2 bg-gray-100 text-2xl text-center text-blue-600"
            /> */}
                        <div
                            className="w-full text-wrap break-all rounded p-2 bg-gray-100 text-2xl text-center text-blue-600"
                        >{result}</div>

                    </div>
                </div>
            </div>
               
         <Contact/>       

        </div>
    );
}
