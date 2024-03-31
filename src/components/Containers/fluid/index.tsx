import { ContainerFluidProps } from "./interface";

const ContainerFluid: React.FC<ContainerFluidProps> = ({ className, ...props }) => (
    <div
        className={
            "max-[576px]:max-w-full sm:max-w-full md:max-w-full lg:max-w-ful xl:max-w-ful 2xl:max-w-ful w-full px-[calc(1.5rem*.5)] mx-auto " +
            className
        }
        {...props}
    />
);

export default ContainerFluid;
