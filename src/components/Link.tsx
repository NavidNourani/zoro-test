import { LinkProps, Link as MUILink } from "@mui/material";
import { AnchorHTMLAttributes } from "react";
import { Link as DomLink } from "react-router-dom";

type Props = LinkProps;

const Link = ({ href, ...props }: Props) => {
	return (
		<MUILink
			href={href}
			{...props}
			component={({
				href,
				...rest
			}: AnchorHTMLAttributes<HTMLAnchorElement>) => (
				<DomLink to={href!} {...rest} />
			)}
		/>
	);
};

export default Link;
