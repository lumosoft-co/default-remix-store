import React, { useState } from "react";

const LENGTH = 125;

export const Feature = (props: any) => {
    const { id, title, description, image, handle } = props;
    const [viewDetails, setViewDetails] = useState<boolean>(false);

    const trimmed = description
        .replace(/<\/?[^>]*>/g, '')
        .substring(0, LENGTH);
    return (
        <div className="flex flex-row flex-1 items-center justify-center">
            <div className="w-[30rem]">
                <h1 className="background-clip font-display text-m-h1 sm:text-d-h2 text-3xl md:text-5xl lg:text-[length:64px] xl:text-d-j font-black"><span className="title">{title}</span></h1>
                <div className="h-5" />
                <h2 className="w-[88%] text-custom-gray-300 text-md md:text-xl font-medium" dangerouslySetInnerHTML={{
                    __html: `${trimmed.substring(0, Math.min(trimmed.length, trimmed.lastIndexOf(" ")))}${description.length > LENGTH ? "..." : ""}`
                }} />
                <div className="h-7"/>
                <button className="button-hover text-custom-gray-100 button-background focus:outline-none focus:ring-4 font-black rounded-full text-md px-5 py-2.5 text-center mr-2 mb-2" onClick={() => setViewDetails(true)}>More Details</button>
            </div>
            <div className="items-center w-[30rem] justify-center">
                <img
                    className="image"
                    src={image}
                    alt={title}
                />
            </div>
        </div>
    )
}
