import Container2xl from "./2xl";
import ContainerFluid from "./fluid";
import { ContainerProps } from "./interface";
import Containerlg from "./lg";
import Containermd from "./md";
import Containersm from "./sm";
import Containerxl from "./xl";

const Container: React.FC<ContainerProps> = ({ className, ...props }) => (
    <div
        className={
            "max-[576px]:max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl w-full px-[calc(1.5rem*.5)] mx-auto " +
            className
        }
        {...props}
    />
);

export {
    Container,
    Containersm,
    Containermd,
    Containerlg,
    Containerxl,
    Container2xl,
    ContainerFluid,
};

const Containers = {
    Container,
    Containersm,
    Containermd,
    Containerlg,
    Containerxl,
    Container2xl,
    ContainerFluid,
};

export default Containers;
