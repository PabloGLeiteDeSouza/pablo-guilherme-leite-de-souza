import { Container2xlProps } from "./interface";

const Container2xl: React.FC<Container2xlProps> = ({ className, ...props }) => (
    <div
        className={
            "max-[576px]:max-w-full sm:max-w-ful md:max-w-ful lg:max-w-fulxl:max-w-ful 2xl:max-w-screen-2xl w-full px-[calc(1.5rem*.5)] mx-auto " +
            className
        }
        {...props}
    />
);

export default Container2xl;
