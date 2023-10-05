import * as React from "react"
import { SVGProps } from 'react';

export	const BackArrow = (props:SVGProps<SVGSVGElement>) => (
<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlSpace="preserve"
		width={800}
		height={800}
		viewBox="0 0 24 24"
		{...props}
		>
<style>
{
".st1{display:inline}.st2{opacity:.2;fill:none;stroke:#000;stroke-width:5.000000e-02;stroke-miterlimit:10}"
}
</style>
<g id="_icons">
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
<path d="M13.7 8.3c-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4l3 3c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L11.4 12l2.3-2.3c.4-.4.4-1 0-1.4z" />
</g>
		</svg>
		)

