import { ContainermdProps } from "./interface";

const Containermd: React.FC<ContainermdProps> = ({ className, ...props }) => (
    <div
        className={
            "max-[576px]:max-w-full sm:max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full px-[calc(1.5rem*.5)] mx-auto " +
            className
        }
        {...props}
    />
);

export default Containermd;