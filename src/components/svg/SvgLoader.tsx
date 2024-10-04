import React, {FC} from "react";
import classNames from "classnames";

type SvgProps = React.SVGProps<SVGSVGElement>;

interface IconBaseProps extends SvgProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface IconClickableProps extends IconBaseProps {
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon: FC<IconClickableProps> = (props) => {
    const {
        className,
        Svg,
        width,
        height,
        ...otherProps
    } = props;
    const [size, setSize] = React.useState({width:width, height:height});

    return (
        <Svg
            className={classNames(className)}
            width={size.width}
            height={size.height}
            {...otherProps}
            onClick={undefined}
        />

    );
};